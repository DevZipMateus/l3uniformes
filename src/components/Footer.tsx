
import { Phone, Mail, MapPin, Instagram, Facebook } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-l3 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <img 
                src="/lovable-uploads/b1b44bef-43e3-4a20-a16b-569ccb9960a4.png" 
                alt="L3 Uniformes" 
                className="h-12 w-auto mr-2 bg-white rounded-full p-1" 
              />
              <h3 className="text-xl font-bold">L3 Uniformes</h3>
            </div>
            <p className="text-gray-400 mb-6">
              Nossa empresa uniformizando a sua. Uniformes profissionais de qualidade para promover a identidade e união da sua equipe.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.instagram.com/L3.uniformes/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-gray-800 flex items-center justify-center hover:bg-bordo transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a 
                href="https://www.facebook.com/L3.uniformes/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-gray-800 flex items-center justify-center hover:bg-bordo transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Produtos</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#services" className="hover:text-white transition-colors">Camiseta Pólo</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Camiseta Poliviscose</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Jaquetas</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Camisas</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Calça profissional</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Contato</h3>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-start">
                <div className="w-5 h-5 mt-1 mr-3 rounded-full bg-gray-800 flex items-center justify-center flex-shrink-0">
                  <Phone className="h-3 w-3" />
                </div>
                <div>
                  <a href="tel:+5541998970152" className="hover:text-white transition-colors">
                    (41) 99897-0152
                  </a>
                </div>
              </li>
              <li className="flex items-start">
                <div className="w-5 h-5 mt-1 mr-3 rounded-full bg-gray-800 flex items-center justify-center flex-shrink-0">
                  <Mail className="h-3 w-3" />
                </div>
                <div>
                  <a href="mailto:ll3.uniformes@gmail.com" className="hover:text-white transition-colors">
                    ll3.uniformes@gmail.com
                  </a>
                </div>
              </li>
              <li className="flex items-start">
                <div className="w-5 h-5 mt-1 mr-3 rounded-full bg-gray-800 flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-3 w-3" />
                </div>
                <div>
                  <p>Rua Jussara, 3527 - Sítio Cercado</p>
                  <p>Curitiba - PR, 81920-540</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-gray-400 text-sm text-center">
          <p>&copy; {currentYear} L3 Uniformes. Todos os direitos reservados.</p>
          <p className="mt-1">
            <span>CNPJ: 21.357.728/0001-60</span> | 
            <span className="ml-2">Responsável: Adcéia dos Santos Lourenço</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
