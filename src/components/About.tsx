
import { CheckCircle } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const About = () => {
  const features = [
    'Uniformes personalizados',
    'Material de alta qualidade',
    'Bordados e estampas',
    'Entrega para todo Brasil',
    'Atendimento personalizado',
    'Orçamento sem compromisso'
  ];

  return (
    <section id="about" className="py-24 bg-white">
      <div className="container-l3">
        <AnimatedSection>
          <h2 className="section-title">Sobre Nós</h2>
          <p className="section-subtitle">
            Conheça nossa história e nosso compromisso com a qualidade em uniformes profissionais
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-12">
          <AnimatedSection animation="slide-in-left">
            <div className="relative">
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-xl">
                <img 
                  src="/lovable-uploads/quemsomos.jpg" 
                  alt="Equipe L3 Uniformes" 
                  className="w-full h-auto object-cover"
                />
              </div>
              
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-bordo/10 rounded-full z-0"></div>
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-gray-100 rounded-full z-0"></div>
            </div>
          </AnimatedSection>
          
          <AnimatedSection animation="fade-in-up" className="space-y-6">
            <span className="inline-block text-sm font-semibold py-1 px-3 bg-bordo/10 text-bordo rounded-full">
              Nossa História
            </span>
            <h3 className="text-3xl font-bold">Compromisso com sua empresa</h3>
            <p className="text-gray-600">
              Fundada em 2017, a L3 Uniformes se dedica na importância do uso de uniformes profissionais, 
              sendo essencial para promover a identidade e a união entre os membros de uma equipe.
            </p>
            <p className="text-gray-600">
              Nossos uniformes criam um ambiente de igualdade, disciplina e profissionalismo, 
              refletindo valores e fortalecendo a cultura organizacional e imagem da sua empresa.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4">
              {features.map((feature) => (
                <div key={feature} className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-bordo flex-shrink-0" />
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
            
            <a href="#contact" className="btn-primary inline-block mt-4">
              Fale com um especialista
            </a>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default About;
