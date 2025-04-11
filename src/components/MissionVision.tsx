
import { ArrowDown } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

const MissionVision = () => {
  return (
    <section id="mission-vision" className="py-16 bg-gray-50">
      <div className="container-l3">
        <AnimatedSection animation="fade-in-up" className="text-center mb-12">
          <h2 className="section-title">Nossa Identidade</h2>
          <p className="section-subtitle">
            Conheça nossa missão, visão e valores que nos guiam no compromisso de uniformizar sua empresa.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <AnimatedSection animation="fade-in-up" delay={100}>
            <Card className="h-full shadow-lg hover:shadow-xl transition-shadow border-t-4 border-t-bordo">
              <CardHeader className="pb-2">
                <CardTitle className="text-2xl font-bold text-bordo">Missão</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-700">
                <p>
                  Oferecer uniformes profissionais personalizados com excelência em qualidade, 
                  agilidade na entrega e atenção às necessidades específicas de cada cliente, 
                  valorizando desde grandes até pequenas demandas com o mesmo cuidado e compromisso.
                </p>
              </CardContent>
            </Card>
          </AnimatedSection>

          <AnimatedSection animation="fade-in-up" delay={200}>
            <Card className="h-full shadow-lg hover:shadow-xl transition-shadow border-t-4 border-t-bordo">
              <CardHeader className="pb-2">
                <CardTitle className="text-2xl font-bold text-bordo">Visão</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-700">
                <p>
                  Ser reconhecida como uma empresa comprometida em fortalecer a identidade profissional 
                  de nossos clientes, por meio de uniformes que aliam qualidade, personalização e um 
                  atendimento atencioso, pautado na escuta e na compreensão das necessidades de cada negócio.
                </p>
              </CardContent>
            </Card>
          </AnimatedSection>

          <AnimatedSection animation="fade-in-up" delay={300}>
            <Card className="h-full shadow-lg hover:shadow-xl transition-shadow border-t-4 border-t-bordo">
              <CardHeader className="pb-2">
                <CardTitle className="text-2xl font-bold text-bordo">Valores</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-700">
                <ul className="space-y-2 list-disc pl-5">
                  <li><span className="font-semibold">Qualidade em cada detalhe:</span> Compromisso com materiais e acabamentos que garantem durabilidade e conforto.</li>
                  <li><span className="font-semibold">Agilidade com responsabilidade:</span> Cumprimos prazos com eficiência graças à nossa produção interna.</li>
                  <li><span className="font-semibold">Personalização com propósito:</span> Cada uniforme é pensado para refletir a identidade e necessidade de cada cliente.</li>
                  <li><span className="font-semibold">Valorização de todas as demandas:</span> Atendemos desde pequenas até grandes quantidades com o mesmo padrão de excelência.</li>
                  <li><span className="font-semibold">Relacionamento transparente:</span> Construímos parcerias baseadas em confiança, clareza e respeito mútuo.</li>
                </ul>
              </CardContent>
            </Card>
          </AnimatedSection>
        </div>

        <AnimatedSection animation="fade-in-up" delay={400} className="text-center mt-12">
          <div className="bg-bordo/5 py-6 px-4 rounded-lg border border-bordo/10">
            <h3 className="text-2xl font-bold text-bordo mb-2">Nossa Família uniformizando a sua empresa</h3>
            <a href="#contact" className="inline-flex items-center gap-2 text-bordo font-medium mt-2 hover:text-bordo-light transition-colors">
              Entre em contato
              <ArrowDown className="h-4 w-4" />
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default MissionVision;
