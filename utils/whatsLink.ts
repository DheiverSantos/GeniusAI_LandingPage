export const whatsAppLink = () => {
  const isMobile = typeof window !== 'undefined' ? /iPhone|iPad|iPod|Android/i.test(navigator.userAgent) : false;
  const whatsappNumber = "555189889898";
  const encodedMessage = encodeURIComponent("Olá, quero saber mais sobre as soluções da Genius AI");
  const baseLink = isMobile ? "https://api.whatsapp.com/send?phone=" : "https://web.whatsapp.com/send?phone=";
  const fullLink = `${baseLink}${whatsappNumber}&text=${encodedMessage}`;

  return fullLink;
}
