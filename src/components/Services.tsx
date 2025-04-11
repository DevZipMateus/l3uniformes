
import { Shirt, Shirt as ShirtIcon, PackageCheck, Scissors, Backpack, ChefHat, Factory } from 'lucide-react';
import ServiceCard from './ServiceCard';
import AnimatedSection from './AnimatedSection';

const Services = () => {
  const services = [
    {
      icon: ShirtIcon,
      title: 'Camiseta Pólo',
      description: 'Camisetas pólo personalizadas com bordado ou estampa, ideais para o dia a dia empresarial.',
      imageUrl: '/lovable-uploads/polos.jpg'
    },
    {
      icon: Shirt,
      title: 'Camisetas com logos',
      description: 'Camisetas personalizadas com sua marca, logos ou arte. Ideais para equipes, eventos ou uso corporativo.',
      imageUrl: '/lovable-uploads/camisetaslogo.jpg'
    },
    {
      icon: PackageCheck,
      title: 'Jaquetas',
      description: 'Jaquetas empresariais personalizadas, ideais para proteção e identidade visual em dias frios.',
      imageUrl: '/lovable-uploads/inverno.jpg'
    },
    {
      icon: Scissors,
      title: 'Uniformes administrativos',
      description: 'Camisas sociais e executivas personalizadas, com acabamento de alta qualidade para sua empresa.',
      imageUrl: '/lovable-uploads/adm.jpg'
    },
    {
      icon: ChefHat,
      title: 'Uniformes gastronômicos',
      description: 'Uniformes completos para restaurantes, cozinhas e serviços de alimentação, com conforto e praticidade.',
      imageUrl: '/lovable-uploads/gastronomico.jpg'
    },
    {
      icon: Factory,
      title: 'Uniformes industriais',
      description: 'Uniformes resistentes e seguros para ambientes industriais, atendendo às normas de segurança do trabalho.',
      imageUrl: '/lovable-uploads/industrial.jpg'
    }
  ];

  return (
    <section id="services" className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container-l3">
        <AnimatedSection>
          <h2 className="section-title">Nossos Produtos</h2>
          <p className="section-subtitle">
            Oferecemos uma variedade de uniformes profissionais para atender às necessidades da sua empresa
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {services.map((service, index) => (
            <AnimatedSection 
              key={service.title} 
              animation="fade-in-up" 
              delay={index * 100}
            >
              <ServiceCard 
                icon={service.icon} 
                title={service.title} 
                description={service.description} 
                imageUrl={service.imageUrl}
              />
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection className="text-center mt-16">
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Além dos produtos listados, também oferecemos serviços de bordado, estamparia e 
            criação de uniformes personalizados conforme a necessidade da sua empresa.
          </p>
          <a href="#contact" className="btn-primary inline-block">
            Solicite um orçamento
          </a>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Services;
