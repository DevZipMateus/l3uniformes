
import { Mail, Phone, MapPin, Instagram, Facebook } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const Contact = () => {
  return (
    <section id="contact" className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="container-l3">
        <AnimatedSection>
          <h2 className="section-title">Entre em Contato</h2>
          <p className="section-subtitle">
            Estamos prontos para atender sua empresa e criar uniformes personalizados que valorizam sua marca
          </p>
        </AnimatedSection>

        <div className="mt-8">
          <AnimatedSection animation="slide-in-left">
            <div className="glass-card rounded-xl p-6 sm:p-8 border-gray-100">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold mb-6 text-bordo">Informações de Contato</h3>
                  
                  <div className="space-y-4">
                    {/* Telefone */}
                    <div className="flex items-start">
                      <div className="w-10 h-10 rounded-full bg-bordo/10 flex items-center justify-center flex-shrink-0 mt-1">
                        <Phone className="h-5 w-5 text-bordo" />
                      </div>
                      <div className="ml-3">
                        <h4 className="text-base font-medium">Telefone/WhatsApp</h4>
                        <p className="text-gray-600">
                          <a 
                            href="tel:+5541998970152" 
                            className="hover:text-bordo transition-colors"
                          >
                            (41) 99897-0152
                          </a>
                        </p>
                      </div>
                    </div>
                    
                    {/* E-mail */}
                    <div className="flex items-start">
                      <div className="w-10 h-10 rounded-full bg-bordo/10 flex items-center justify-center flex-shrink-0 mt-1">
                        <Mail className="h-5 w-5 text-bordo" />
                      </div>
                      <div className="ml-3">
                        <h4 className="text-base font-medium">E-mail</h4>
                        <p className="text-gray-600 break-words">
                          <a 
                            href="mailto:ll3.uniformes@gmail.com" 
                            className="hover:text-bordo transition-colors"
                          >
                            ll3.uniformes@gmail.com
                          </a>
                        </p>
                      </div>
                    </div>
                    
                    {/* Endereço */}
                    <div className="flex items-start">
                      <div className="w-10 h-10 rounded-full bg-bordo/10 flex items-center justify-center flex-shrink-0 mt-1">
                        <MapPin className="h-5 w-5 text-bordo" />
                      </div>
                      <div className="ml-3">
                        <h4 className="text-base font-medium">Endereço</h4>
                        <p className="text-gray-600">
                          Rua Jussara, 3527, Sítio Cercado
                        </p>
                        <p className="text-gray-600">
                          Curitiba - PR, 81920-540
                        </p>
                      </div>
                    </div>
                    
                    {/* Redes Sociais */}
                    <div className="flex items-start">
                      <div className="w-10 h-10 rounded-full bg-bordo/10 flex items-center justify-center flex-shrink-0 mt-1">
                        <Instagram className="h-5 w-5 text-bordo" />
                      </div>
                      <div className="ml-3">
                        <h4 className="text-base font-medium">Redes Sociais</h4>
                        <div className="flex space-x-2 mt-2">
                          <a 
                            href="https://www.instagram.com/L3.uniformes/" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="w-8 h-8 rounded-full bg-bordo text-white flex items-center justify-center hover:bg-bordo-light transition-colors"
                            aria-label="Instagram"
                          >
                            <Instagram className="h-4 w-4" />
                          </a>
                          <a 
                            href="https://www.facebook.com/L3.uniformes/" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="w-8 h-8 rounded-full bg-bordo text-white flex items-center justify-center hover:bg-bordo-light transition-colors"
                            aria-label="Facebook"
                          >
                            <Facebook className="h-4 w-4" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="pt-4">
                    <a href="https://wa.me/5541998970152?text=Olá,%20gostaria%20de%20um%20orçamento%20para%20uniformes." 
                       target="_blank" 
                       rel="noopener noreferrer"
                       className="btn-primary inline-flex items-center gap-2"
                    >
                      <svg viewBox="0 0 32 32" className="h-5 w-5 fill-current" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16.9415 32C7.632 32 0 24.368 0 15.0585C0 5.749 7.632 0 16.9415 0C26.251 0 32 5.749 32 15.0585C32 24.368 26.251 32 16.9415 32ZM10.2728 9.6268L9.4849 9.6306C9.3917 9.6321 9.2993 9.651 9.2127 9.6864C9.126 9.7218 9.0468 9.7732 8.9793 9.8378C8.888 9.9218 8.6969 10.1014 8.5058 10.4392C8.3146 10.7771 8.1234 11.2732 8.1234 11.8253C8.1234 13.0985 8.8613 14.2915 9.053 14.5724C9.0541 14.5742 9.0553 14.5759 9.0568 14.5781C9.2478 14.8531 11.2107 17.9494 14.5217 19.383C15.2558 19.7208 15.8252 19.9385 16.2634 20.0923C17.0138 20.3501 17.7002 20.3175 18.2368 20.2342C18.8372 20.1414 19.5671 19.8414 19.9522 19.3914C20.3368 18.9413 20.5272 18.3949 20.6272 17.9896L20.6291 17.9813C20.716 17.6371 20.7388 17.3226 20.6695 17.0706C20.6031 16.829 20.4654 16.6705 20.3124 16.5467C19.9928 16.2906 19.4771 16.0935 18.968 15.8987L18.5987 15.7625C18.1733 15.5991 17.7475 15.4352 17.5144 15.3619L17.4662 15.3471C17.4363 15.3395 17.4053 15.3353 17.3742 15.3344C17.2454 15.3277 17.1165 15.3529 17 15.4082C16.3334 15.8835 15.7778 16.2886 15.5306 16.461C15.3736 16.574 15.2022 16.6655 15.02 16.7335C14.9724 16.7449 14.9231 16.7485 14.8743 16.7444C14.8255 16.7402 14.7778 16.7282 14.7334 16.7092C14.6184 16.6664 14.5092 16.6132 14.3948 16.5599L14.3947 16.5597C14.0887 16.4216 13.7825 16.2835 13.4788 16.136C12.5334 15.7059 11.6602 15.155 10.8869 14.5001C10.7498 14.38 10.6169 14.2543 10.4849 14.1287C9.92276 13.5903 9.4182 12.9905 9.05419 12.4092C9.00968 12.3352 8.97144 12.268 8.93957 12.2076C8.80738 11.9513 8.9147 11.6486 9.1389 11.4641L9.13939 11.4636C9.31936 11.3131 9.47955 11.1403 9.63962 10.9678L9.63986 10.9675C9.77963 10.8174 9.91931 10.6672 10.0691 10.5374C10.2025 10.4115 10.3586 10.3239 10.5116 10.3075C10.6616 10.2912 10.7929 10.3454 10.8837 10.4092L10.8846 10.4098C10.9711 10.4688 11.0494 10.5388 11.1179 10.6175C11.3074 10.8421 11.6431 11.3324 11.6431 11.3324L11.6596 11.3558C11.7839 11.5375 11.9081 11.7191 12.0252 11.8962C12.192 12.1483 12.2365 12.4421 12.1589 12.681C12.1217 12.9252 11.9843 13.1418 11.7973 13.2962L11.6534 13.4226C11.512 13.5466 11.3705 13.6707 11.2512 13.7872C11.048 13.986 11.0149 14.1417 11.0382 14.2596C11.0607 14.3716 11.1369 14.4843 11.213 14.5961L11.2132 14.5963C11.309 14.7351 11.4048 14.8739 11.5023 15.0145L11.5029 15.0155L11.5037 15.017C11.6471 15.2343 11.7966 15.461 11.9583 15.6922C12.2876 16.1725 12.6741 16.6148 13.1094 17.0113C13.1988 17.0911 13.2889 17.1704 13.379 17.2496L13.379 17.2498C13.6274 17.4696 13.8756 17.6894 14.1319 17.8899C14.2249 17.9641 14.3241 18.0298 14.4285 18.0862C14.5393 18.1455 14.6572 18.1886 14.7791 18.2141C14.9089 18.2413 15.044 18.2358 15.1703 18.1984C15.2966 18.161 15.4103 18.093 15.5004 17.9997C15.6849 17.8077 15.8888 17.5949 16.0927 17.3823L16.0931 17.3819C16.239 17.2292 16.3849 17.0766 16.5352 16.9324C16.6094 16.8605 16.7025 16.8115 16.8034 16.7911C16.9044 16.7707 17.0089 16.7796 17.1044 16.8168C17.1949 16.8448 17.5294 16.9723 17.867 17.1167C18.0348 17.1888 18.2029 17.2675 18.3515 17.3401C18.6557 17.4902 18.9562 17.6387 19.2167 17.7627C19.3463 17.8247 19.4526 17.9336 19.5181 18.067L19.5199 18.0707C19.5881 18.2123 19.5641 18.3954 19.4929 18.5244C19.321 18.8763 19.142 19.2198 18.9422 19.303C18.7655 19.3769 18.5788 19.4155 18.4033 19.454C18.044 19.4954 17.6314 19.5308 17.1561 19.3629C16.7877 19.2314 16.2801 19.0344 15.5876 18.7153C13.196 17.6633 11.6345 15.0926 11.3927 14.7293L11.3927 14.7292C11.2355 14.5043 10.6196 13.5626 10.6196 12.5825C10.6196 11.6486 11.0365 11.1932 11.2159 10.9924C11.2172 10.9909 11.2186 10.9895 11.22 10.988C11.404 10.7778 11.6146 10.7039 11.7624 10.6855C11.9226 10.6657 12.0758 10.701 12.1953 10.782C12.3389 10.8781 12.6067 11.3742 12.691 11.5447L12.691 11.5447C12.7753 11.7152 12.8364 11.8534 12.8786 11.9533C12.9215 12.0549 12.9392 12.1244 12.9351 12.1762C12.9316 12.2195 12.911 12.2765 12.8365 12.3343C12.7632 12.391 12.6831 12.4572 12.6034 12.5232L12.5995 12.5264C12.5304 12.5834 12.4615 12.6402 12.3987 12.694C12.2755 12.8011 12.1523 12.9083 12.0249 13.0209C11.7701 13.2465 11.5152 13.4721 11.3208 13.6947L11.3209 13.6949C11.1265 13.9175 11.0358 14.1317 11.12 14.3506C11.2042 14.5695 11.4394 14.9111 11.5719 15.0822C11.9696 15.5839 12.4114 16.0437 12.8913 16.4553C13.0116 16.5634 13.1411 16.6613 13.2697 16.7591C13.3983 16.8569 13.526 16.9545 13.6426 17.0625L13.6426 17.0625L13.6432 17.063C13.7658 17.178 13.9017 17.2775 14.0478 17.3597C14.1939 17.4418 14.3493 17.5058 14.5105 17.5496C14.6718 17.5933 14.8372 17.6164 15.0033 17.6179C15.1693 17.6195 15.3353 17.5996 15.4977 17.5588C15.6601 17.5181 15.8172 17.4569 15.9654 17.3775C16.1137 17.2982 16.2521 17.2011 16.3778 17.0884C16.4954 16.9827 16.6194 16.8706 16.7433 16.7585L16.7444 16.7574C16.876 16.6382 17.0076 16.519 17.1364 16.4082C17.1683 16.38 17.2089 16.3614 17.2522 16.3548L17.2647 16.3528C17.3112 16.3495 17.3581 16.3617 17.396 16.3875C17.429 16.4125 17.6004 16.4758 17.8048 16.5509C18.0049 16.6248 18.2299 16.7088 18.4121 16.7779C18.8031 16.9205 19.2633 17.0875 19.6261 17.3664C19.8075 17.4964 19.9443 17.697 19.9959 17.9206L19.996 17.9211C20.0483 18.1459 20.0239 18.3909 19.9494 18.6643C19.8522 19.022 19.6998 19.4267 19.4178 19.7487C19.1358 20.0706 18.5372 20.4101 17.9898 20.4954C17.5063 20.5747 16.9069 20.5926 16.2568 20.3693C15.8488 20.2249 15.2981 20.014 14.584 19.686C11.4266 18.3166 9.54861 15.3541 9.38732 15.1159C9.1766 14.8106 8.5058 13.7258 8.5058 12.5825C8.5058 11.4391 8.9421 10.6706 9.2086 10.3634C9.475 10.0561 9.7839 9.9837 9.9919 9.9792C10.0004 9.979 10.0089 9.9788 10.0174 9.9788L10.0318 9.9787L10.2728 9.9849V9.6268Z" fill="white" />
                      </svg>
                      WhatsApp
                    </a>
                  </div>
                </div>
                
                <div className="h-64 sm:h-80 md:h-full rounded-xl overflow-hidden shadow-lg">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3599.800993292741!2d-49.27013652432596!3d-25.54053843543944!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94dcfb0b7e10c1f5%3A0xa3f9c4b2c3de1e1c!2sRua%20Jussara%2C%203527%20-%20S%C3%ADtio%20Cercado%2C%20Curitiba%20-%20PR%2C%2081920-540!5e0!3m2!1spt-BR!2sbr!4v1712773642518!5m2!1spt-BR!2sbr" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Localização L3 Uniformes"
                  ></iframe>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default Contact;
