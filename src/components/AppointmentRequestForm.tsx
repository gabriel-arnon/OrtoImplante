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
      "Formulario provisorio de pre-agendamento. Nao envie documentos ou informacoes clinicas sensiveis."
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
      message: "Enviando sua solicitacao..."
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
      ? "border-green-700/30 bg-green-50 text-green-900"
      : submitState.type === "error"
        ? "border-gold/45 bg-gold/10 text-navy"
        : "border-navy/15 bg-navy/5 text-navy";

  return (
    <section
      aria-labelledby="formulario-contato-heading"
      className="border border-light-gray bg-white p-4 shadow-form sm:p-5 lg:p-6"
    >
      <div className="mb-4 border-b border-light-gray pb-4">
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-gold">
          Pre-agendamento
        </p>
        <h2
          id="formulario-contato-heading"
          className="mt-2 text-2xl font-semibold text-navy md:text-3xl"
        >
          Solicitar retorno
        </h2>
        <p className="mt-2 text-sm leading-6 text-graphite-soft">
          Envie apenas dados de contato e uma mensagem curta. O retorno depende dos canais
          oficiais que ainda serao confirmados.
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
          <label htmlFor="fullName" className="text-[0.95rem] font-semibold text-navy">
            Nome
          </label>
          <input
            id="fullName"
            type="text"
            autoComplete="name"
            placeholder="Seu nome"
            aria-invalid={Boolean(errors.fullName)}
            aria-describedby={errors.fullName ? fieldErrorId("fullName") : undefined}
            className="mt-1.5 min-h-12 w-full rounded-sm border border-light-gray px-3.5 text-base transition focus:border-gold disabled:bg-light-gray/40"
            disabled={isSubmitting}
            {...register("fullName")}
          />
          {errors.fullName ? (
            <p id={fieldErrorId("fullName")} className="mt-2 text-sm font-semibold text-red-700">
              {errors.fullName.message}
            </p>
          ) : null}
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="phone" className="text-[0.95rem] font-semibold text-navy">
              Telefone ou WhatsApp
            </label>
            <input
              id="phone"
              type="tel"
              autoComplete="tel"
              placeholder="(00) 00000-0000"
              aria-invalid={Boolean(errors.phone)}
              aria-describedby={errors.phone ? fieldErrorId("phone") : undefined}
              className="mt-1.5 min-h-12 w-full rounded-sm border border-light-gray px-3.5 text-base transition focus:border-gold disabled:bg-light-gray/40"
              disabled={isSubmitting}
              {...register("phone")}
            />
            {errors.phone ? (
              <p id={fieldErrorId("phone")} className="mt-2 text-sm font-semibold text-red-700">
                {errors.phone.message}
              </p>
            ) : null}
          </div>

          <div>
            <label htmlFor="city" className="text-[0.95rem] font-semibold text-navy">
              Cidade
            </label>
            <input
              id="city"
              type="text"
              autoComplete="address-level2"
              placeholder="Sua cidade"
              aria-invalid={Boolean(errors.city)}
              aria-describedby={errors.city ? fieldErrorId("city") : undefined}
              className="mt-1.5 min-h-12 w-full rounded-sm border border-light-gray px-3.5 text-base transition focus:border-gold disabled:bg-light-gray/40"
              disabled={isSubmitting}
              {...register("city")}
            />
            {errors.city ? (
              <p id={fieldErrorId("city")} className="mt-2 text-sm font-semibold text-red-700">
                {errors.city.message}
              </p>
            ) : null}
          </div>
        </div>

        <div>
          <label htmlFor="treatmentInterest" className="text-[0.95rem] font-semibold text-navy">
            Tratamento ou interesse
          </label>
          <select
            id="treatmentInterest"
            aria-invalid={Boolean(errors.treatmentInterest)}
            aria-describedby={
              errors.treatmentInterest ? fieldErrorId("treatmentInterest") : undefined
            }
            className="mt-1.5 min-h-12 w-full rounded-sm border border-light-gray bg-white px-3.5 text-base transition focus:border-gold disabled:bg-light-gray/40"
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
              className="mt-2 text-sm font-semibold text-red-700"
            >
              {errors.treatmentInterest.message}
            </p>
          ) : null}
        </div>

        <div>
          <label htmlFor="message" className="text-[0.95rem] font-semibold text-navy">
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
            className="mt-1.5 w-full rounded-sm border border-light-gray px-3.5 py-2.5 text-base leading-7 transition focus:border-gold disabled:bg-light-gray/40"
            disabled={isSubmitting}
            {...register("message")}
          />
          <p
            id="security-warning"
            className="mt-2 border-l-2 border-gold bg-gold/10 px-3 py-2 text-sm leading-6 text-navy"
          >
            Nao envie CPF, RG, exames, documentos, senhas, dados financeiros, imagens ou
            informacoes clinicas sensiveis.
          </p>
          {errors.message ? (
            <p id={fieldErrorId("message")} className="mt-2 text-sm font-semibold text-red-700">
              {errors.message.message}
            </p>
          ) : null}
        </div>

        <label className="flex gap-3 border border-light-gray bg-light-gray/20 p-2.5 text-sm leading-6 text-graphite-soft">
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
            Li a politica de privacidade e entendo que meus dados serao usados para responder a
            solicitacao de contato.
          </span>
        </label>
        {errors.privacyAccepted ? (
          <p id={fieldErrorId("privacyAccepted")} className="text-sm font-semibold text-red-700">
            {errors.privacyAccepted.message}
          </p>
        ) : null}

        <div
          id="form-status"
          className={`rounded-sm border p-2.5 text-sm leading-6 ${statusTone}`}
          role="status"
          aria-live="polite"
        >
          {submitState.message}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="min-h-12 w-full rounded-sm bg-navy px-5 font-semibold text-white transition hover:bg-navy/92 disabled:cursor-not-allowed disabled:bg-light-gray disabled:text-graphite-soft"
        >
          {isSubmitting ? "Enviando..." : "Solicitar pre-agendamento"}
        </button>

        <div className="grid gap-2.5 border-t border-light-gray pt-3 sm:grid-cols-2">
          <a
            href={contactConfig.whatsapp.href}
            className="flex min-h-12 items-center justify-center rounded-sm bg-navy px-5 text-center font-semibold text-white transition hover:bg-navy/92"
          >
            WhatsApp a confirmar
          </a>
          <a
            href={contactConfig.phone.href}
            className="flex min-h-12 items-center justify-center rounded-sm border border-navy px-5 text-center font-semibold text-navy transition hover:bg-navy hover:text-white"
          >
            Telefone a confirmar
          </a>
        </div>
      </form>
    </section>
  );
}
