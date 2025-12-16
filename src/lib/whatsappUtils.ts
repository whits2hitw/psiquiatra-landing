// Utilitários para gerar links do WhatsApp

/**
 * Gera um link do WhatsApp com uma mensagem pré-preenchida
 * @param phoneNumber - Número do WhatsApp (com código do país, ex: 5511999999999)
 * @param message - Mensagem padrão a enviar
 * @returns URL do WhatsApp
 */
export function generateWhatsAppLink(
  phoneNumber: string,
  message: string = "Olá, gostaria de agendar uma consulta."
): string {
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
}

/**
 * Link direto para o WhatsApp com mensagem padrão
 * Configure o número do seu amigo aqui
 */
export const DOCTOR_WHATSAPP_NUMBER = "5515997569809"; // Dr. Mario Luiz Watanabe

export const defaultWhatsAppLink = generateWhatsAppLink(
  DOCTOR_WHATSAPP_NUMBER,
  "Olá! Gostaria de saber sobre disponibilidade para agendar uma consulta."
);
