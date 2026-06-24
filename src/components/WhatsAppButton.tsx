import { contactConfig } from "@/content/contact";

type WhatsAppButtonProps = {
  className?: string;
  label?: string;
};

export function WhatsAppButton({ className = "", label = "Chamar no WhatsApp" }: WhatsAppButtonProps) {
  return (
    <a
      href={contactConfig.whatsapp.href}
      className={className}
      target="_blank"
      rel="noreferrer"
    >
      {label}
    </a>
  );
}
