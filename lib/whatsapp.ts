export const WHATSAPP_PHONE_NUMBER = "918849829497";

export const getWhatsAppUrl = (message?: string) => {
  const baseUrl = `https://wa.me/${WHATSAPP_PHONE_NUMBER}`;
  return message ? `${baseUrl}?text=${encodeURIComponent(message)}` : baseUrl;
};
