"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useMemo, useRef, useState } from "react";
import { type Resolver, useForm } from "react-hook-form";
import { appointmentInterests, contactConfig } from "@/content/contact";
import {
  APPROVED_UTM_FIELDS,
  appointmentRequestSchema,
  type AppointmentRequestInput,
  type ContactApiResponse
} from "@/lib/contact-schema";
import { contactFailureMessage } from "@/lib/contact-messages";

type FormValues = {
  fullName: string;
  phone: string;
  city: string;
  treatmentInterest: string;
  message: string;
  privacyAccepted: boolean;
  company: string;
  sourcePage?: string;
  utm?: Partial<Record<(typeof APPROVED_UTM_FIELDS)[number], string>>;
};

type SubmitState =
  | { type: "idle"; message: string }
  | { type: "success"; message: string }
  | { type: "error"; message: string };

function collectUtmFields() {
  if (typeof window === "undefined") {
    return {};
  }

  const params = new URLSearchParams(window.location.search);
  return APPROVED_UTM_FIELDS.reduce<NonNullable<FormValues["utm"]>>((acc, field) => {
    const value = params.get(field)?.trim();
    if (value) {
      acc[field] = value.slice(0, 100);
    }
    return acc;
  }, {});
}

function fieldErrorId(field: keyof FormValues) {
  return `${field}-error`;
}

export function AppointmentRequestForm() {
  const [submitState, setSubmitState] = useState<SubmitState>({
    type: "idle",
    message:
      "Formulário de pré-agendamento em modo seguro. Não envie documentos ou informações clínicas sensíveis."
  });
  const submittedOnceRef = useRef(false);

  const defaultValues = useMemo<FormValues>(
    () => ({
      fullName: "",
      phone: "",
      city: "",
      treatmentInterest: "",
      message: "",
      privacyAccepted: false,
      company: "",
      sourcePage: typeof window === "undefined" ? "/" : window.location.pathname,
      utm: collectUtmFields()
    }),
    []
  );

  const {
    formState: { errors, isSubmitting },
    handleSubmit,
    register,
    reset,
    setError
  } = useForm<FormValues>({
    defaultValues,
    resolver: zodResolver(appointmentRequestSchema) as Resolver<FormValues>,
    shouldFocusError: true
  });

  async function onSubmit(values: FormValues) {
    if (isSubmitting || submittedOnceRef.current) {
      return;
    }

    submittedOnceRef.current = true;
    setSubmitState({
      type: "idle",
      message: "Enviando sua solicitação..."
    });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(values)
      });
      const result = (await response.json()) as ContactApiResponse;

      if (result.ok) {
        reset(defaultValues);
        setSubmitState({
          type: "success",
          message: result.message
        });
        return;
      }

      if (result.fieldErrors) {
        for (const [field, message] of Object.entries(result.fieldErrors)) {
          setError(field as keyof AppointmentRequestInput & keyof FormValues, {
            type: "server",
            message
          });
        }
      }

      setSubmitState({
        type: "error",
        message: result.message || contactFailureMessage
      });
    } catch {
      setSubmitState({
        type: "error",
        message: contactFailureMessage
      });
    } finally {
      submittedOnceRef.current = false;
    }
  }

  const statusTone =
    submitState.type === "success"
      ? "border-success bg-success-soft text-success"
      : submitState.type === "error"
        ? "border-error bg-error-soft text-error"
        : "border-light-gray bg-mist text-navy";

  return (
    <section
      aria-labelledby="formulario-contato-heading"
      className="surface-card p-4 sm:p-5 lg:p-6"
    >
      <div className="mb-4 border-b border-light-gray pb-4">
        <p className="eyebrow">Pré-agendamento</p>
        <h2
          id="formulario-contato-heading"
          className="mt-2 text-2xl font-semibold leading-tight text-navy md:text-3xl"
        >
          Solicitar retorno
        </h2>
        <p className="mt-2 text-[0.96rem] leading-7 text-graphite-soft">
          Envie apenas dados de contato e uma mensagem curta. O envio real permanece desativado
          nesta etapa; use WhatsApp ou telefone para contato direto.
        </p>
      </div>

      <form
        aria-describedby="form-status security-warning"
        className="space-y-4"
        noValidate
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="absolute left-[-9999px] top-auto h-px w-px overflow-hidden">
          <label htmlFor="company">Empresa</label>
          <input
            id="company"
            type="text"
            tabIndex={-1}
            autoComplete="off"
            {...register("company")}
          />
        </div>

        <input type="hidden" {...register("sourcePage")} />
        {APPROVED_UTM_FIELDS.map((field) => (
          <input key={field} type="hidden" {...register(`utm.${field}`)} />
        ))}

        <div>
          <label htmlFor="fullName" className="form-label">
            Nome
          </label>
          <input
            id="fullName"
            type="text"
            autoComplete="name"
            placeholder="Seu nome"
            aria-invalid={Boolean(errors.fullName)}
            aria-describedby={errors.fullName ? fieldErrorId("fullName") : undefined}
            className="form-field"
            disabled={isSubmitting}
            {...register("fullName")}
          />
          {errors.fullName ? (
            <p id={fieldErrorId("fullName")} className="form-error">
              {errors.fullName.message}
            </p>
          ) : null}
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="phone" className="form-label">
              Telefone ou WhatsApp
            </label>
            <input
              id="phone"
              type="tel"
              autoComplete="tel"
              placeholder="(00) 00000-0000"
              aria-invalid={Boolean(errors.phone)}
              aria-describedby={errors.phone ? fieldErrorId("phone") : undefined}
              className="form-field"
              disabled={isSubmitting}
              {...register("phone")}
            />
            {errors.phone ? (
              <p id={fieldErrorId("phone")} className="form-error">
                {errors.phone.message}
              </p>
            ) : null}
          </div>

          <div>
            <label htmlFor="city" className="form-label">
              Cidade
            </label>
            <input
              id="city"
              type="text"
              autoComplete="address-level2"
              placeholder="Sua cidade"
              aria-invalid={Boolean(errors.city)}
              aria-describedby={errors.city ? fieldErrorId("city") : undefined}
              className="form-field"
              disabled={isSubmitting}
              {...register("city")}
            />
            {errors.city ? (
              <p id={fieldErrorId("city")} className="form-error">
                {errors.city.message}
              </p>
            ) : null}
          </div>
        </div>

        <div>
          <label htmlFor="treatmentInterest" className="form-label">
            Tratamento ou interesse
          </label>
          <select
            id="treatmentInterest"
            aria-invalid={Boolean(errors.treatmentInterest)}
            aria-describedby={
              errors.treatmentInterest ? fieldErrorId("treatmentInterest") : undefined
            }
            className="form-field"
            disabled={isSubmitting}
            {...register("treatmentInterest")}
          >
            <option value="">Selecione uma opcao</option>
            {appointmentInterests.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
          {errors.treatmentInterest ? (
            <p
              id={fieldErrorId("treatmentInterest")}
              className="form-error"
            >
              {errors.treatmentInterest.message}
            </p>
          ) : null}
        </div>

        <div>
          <label htmlFor="message" className="form-label">
            Mensagem curta
          </label>
          <textarea
            id="message"
            rows={4}
            placeholder="Escreva uma mensagem breve."
            aria-invalid={Boolean(errors.message)}
            aria-describedby={
              errors.message ? `${fieldErrorId("message")} security-warning` : "security-warning"
            }
            className="form-field min-h-32 py-2.5 leading-7"
            disabled={isSubmitting}
            {...register("message")}
          />
          <p
            id="security-warning"
            className="mt-2 rounded-sm border-l-2 border-warning bg-warning-soft px-3 py-2 text-[0.95rem] leading-6 text-navy"
          >
            Não envie CPF, RG, exames, documentos, senhas, dados financeiros, imagens ou
            informações clínicas sensíveis.
          </p>
          {errors.message ? (
            <p id={fieldErrorId("message")} className="form-error">
              {errors.message.message}
            </p>
          ) : null}
        </div>

        <label className="flex gap-3 rounded-sm border border-light-gray bg-mist p-3 text-[0.95rem] leading-6 text-graphite-soft">
          <input
            type="checkbox"
            className="mt-1 h-4 w-4 shrink-0 accent-navy"
            aria-invalid={Boolean(errors.privacyAccepted)}
            aria-describedby={
              errors.privacyAccepted ? fieldErrorId("privacyAccepted") : undefined
            }
            disabled={isSubmitting}
            {...register("privacyAccepted")}
          />
          <span>
            Li a política de privacidade e entendo que meus dados serão usados para responder à
            solicitação de contato.
          </span>
        </label>
        {errors.privacyAccepted ? (
          <p id={fieldErrorId("privacyAccepted")} className="form-error">
            {errors.privacyAccepted.message}
          </p>
        ) : null}

        <div
          id="form-status"
          className={`rounded-sm border p-2.5 text-[0.95rem] leading-6 ${statusTone}`}
          role="status"
          aria-live="polite"
        >
          {submitState.message}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="btn-primary w-full disabled:cursor-not-allowed disabled:bg-light-gray disabled:text-graphite-soft"
        >
          {isSubmitting ? "Enviando..." : "Solicitar pré-agendamento"}
        </button>

        <div className="grid gap-2.5 border-t border-light-gray pt-3 sm:grid-cols-2">
          <a
            href={contactConfig.whatsapp.href}
            target="_blank"
            rel="noreferrer"
            className="btn-primary"
          >
            Chamar no WhatsApp
          </a>
          <a
            href={contactConfig.phone.href}
            className="btn-secondary"
          >
            Ligar para a clínica
          </a>
        </div>
      </form>
    </section>
  );
}
