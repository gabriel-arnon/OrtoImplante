import { contactConfig } from "@/content/contact";

type WhatsAppButtonProps = {
  className?: string;
  label?: string;
};

export function WhatsAppButton({ className = "", label = "WhatsApp a confirmar" }: WhatsAppButtonProps) {
  return (
    <a
      href={contactConfig.whatsapp.href}
      className={className}
      aria-disabled={!contactConfig.whatsapp.isConfirmed}
    >
      {label}
    </a>
  );
}
