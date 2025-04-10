
interface WhatsAppButtonProps {
  phoneNumber: string;
  message?: string;
}

const WhatsAppButton = ({ phoneNumber, message = "Olá! Gostaria de saber mais sobre os uniformes." }: WhatsAppButtonProps) => {
  const formattedPhone = phoneNumber.replace(/\D/g, '');
  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${formattedPhone}?text=${encodedMessage}`;

  return (
    <a 
      href={whatsappUrl} 
      target="_blank" 
      rel="noopener noreferrer" 
      aria-label="Fale conosco pelo WhatsApp"
      className="fixed bottom-6 right-6 z-50 bg-transparent hover:bg-transparent p-0 rounded-full transition-transform duration-300 group"
    >
      <img 
        src="/lovable-uploads/whatsapp1.png" 
        alt="WhatsApp" 
        className="h-14 w-14 group-hover:scale-110 transition-transform duration-300" 
      />
      <span className="sr-only">WhatsApp</span>
    </a>
  );
};

export default WhatsAppButton;
