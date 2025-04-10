
import { Shirt, Shirt as ShirtIcon, Coat, Scissors, Backpack } from 'lucide-react';
import ServiceCard from './ServiceCard';
import AnimatedSection from './AnimatedSection';

const Services = () => {
  const services = [
    {
      icon: ShirtIcon,
      title: 'Camiseta Pólo',
      description: 'Camisetas pólo personalizadas com bordado ou estampa, ideais para o dia a dia empresarial.',
      imageUrl: 'https://images.unsplash.com/photo-1586363104862-3a5e2ab60d99?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80'
    },
    {
      icon: Shirt,
      title: 'Camiseta Poliviscose',
      description: 'Camisetas em poliviscose, confortáveis e resistentes, perfeitas para o uso diário no trabalho.',
      imageUrl: 'https://images.unsplash.com/photo-1562157873-818bc0726f68?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2154&q=80'
    },
    {
      icon: Coat,
      title: 'Jaquetas',
      description: 'Jaquetas empresariais personalizadas, ideais para proteção e identidade visual em dias frios.',
      imageUrl: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1936&q=80'
    },
    {
      icon: Scissors,
      title: 'Camisas',
      description: 'Camisas sociais e executivas personalizadas, com acabamento de alta qualidade para sua empresa.',
      imageUrl: 'https://images.unsplash.com/photo-1598033129183-c4f50c736f10?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1925&q=80'
    },
    {
      icon: Backpack,
      title: 'Calça profissional',
      description: 'Calças profissionais para diversos segmentos, com durabilidade e conforto para o dia a dia.',
      imageUrl: 'https://images.unsplash.com/photo-1542327897-4141b355e20e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80'
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
