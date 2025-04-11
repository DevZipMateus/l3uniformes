import { ArrowRight } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
const Hero = () => {
  return <section id="home" className="relative min-h-screen flex items-center pt-20 bg-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-y-0 right-0 w-1/2 bg-bordo/5 skew-x-12 transform origin-bottom"></div>
        <div className="absolute top-1/4 left-1/4 w-32 h-32 md:w-64 md:h-64 rounded-full bg-bordo/10"></div>
        <div className="absolute bottom-1/3 right-1/3 w-32 h-32 md:w-40 md:h-40 rounded-full bg-gray-200/60"></div>
      </div>

      <div className="container-l3 z-10 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          <AnimatedSection animation="fade-in-up" className="space-y-6">
            <span className="inline-block text-sm font-semibold py-1 px-3 bg-bordo/10 text-bordo rounded-full">
              Uniformes Profissionais de Qualidade
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
              Nossa família <br />
              <span className="text-bordo">uniformizando a sua empresa</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-xl">
              Fundada em 2017, a L3 Uniformes se dedica a promover a identidade e a união das equipes 
              através de uniformes profissionais de alta qualidade.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <a href="#contact" className="btn-primary flex items-center gap-2">
                Solicitar Orçamento
                <ArrowRight className="h-4 w-4" />
              </a>
              <a href="#services" className="btn-secondary">
                Nossos Produtos
              </a>
            </div>

            <div className="pt-8 flex flex-wrap items-center gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-bordo">6+</div>
                <div className="text-sm text-gray-600">Anos de Experiência</div>
              </div>
              <div className="hidden sm:block h-12 w-px bg-gray-200"></div>
              <div className="text-center">
                <div className="text-3xl font-bold text-bordo">100%</div>
                <div className="text-sm text-gray-600">Satisfação</div>
              </div>
              <div className="hidden sm:block h-12 w-px bg-gray-200"></div>
              <div className="text-center">
                
                
              </div>
            </div>
          </AnimatedSection>
          
          <AnimatedSection animation="fade-in" delay={300} className="hidden md:block">
            <div className="relative">
              <div className="absolute -top-12 -left-8 w-64 h-64 bg-bordo/10 rounded-full filter blur-xl"></div>
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-gray-200 rounded-full filter blur-xl"></div>
              <div className="relative z-10 bg-white/80 backdrop-blur-sm shadow-xl rounded-2xl p-6 transform transition-all duration-500 hover:scale-[1.01] hover:shadow-2xl">
                <img src="/lovable-uploads/b1b44bef-43e3-4a20-a16b-569ccb9960a4.png" alt="L3 Uniformes" className="w-full h-auto object-contain mx-auto max-w-md" />
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
    </section>;
};
export default Hero;