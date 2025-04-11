
import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import WhatsAppButton from '@/components/WhatsAppButton';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import MissionVision from '@/components/MissionVision';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  useEffect(() => {
    // Smooth scroll implementation for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href')?.substring(1);
        if (!targetId) return;
        
        const targetElement = document.getElementById(targetId);
        if (!targetElement) return;

        window.scrollTo({
          top: targetElement.offsetTop - 70,
          behavior: 'smooth'
        });
      });
    });

    // Clean up event listeners
    return () => {
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.removeEventListener('click', function (e) {
          e.preventDefault();
        });
      });
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Helmet>
        <title>L3 Uniformes | Nossa empresa uniformizando a sua</title>
        <meta name="description" content="L3 Uniformes - Fundada em 2017, a L3 Uniformes se dedica à importância do uso de uniformes profissionais, promovendo a identidade e a união de equipes. Camisetas, jaquetas, calças e mais." />
        <meta name="keywords" content="uniformes, uniformes profissionais, camisetas personalizadas, uniformes empresariais, L3 Uniformes, Curitiba" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://l3uniformes.com.br" />
        
        {/* Open Graph metadata */}
        <meta property="og:title" content="L3 Uniformes | Nossa empresa uniformizando a sua" />
        <meta property="og:description" content="Fundada em 2017, a L3 Uniformes se dedica à importância do uso de uniformes profissionais, promovendo a identidade e a união de equipes." />
        <meta property="og:image" content="/lovable-uploads/b1b44bef-43e3-4a20-a16b-569ccb9960a4.png" />
        <meta property="og:url" content="https://l3uniformes.com.br" />
        <meta property="og:type" content="website" />
        
        {/* Twitter Card metadata */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="L3 Uniformes | Nossa empresa uniformizando a sua" />
        <meta name="twitter:description" content="Fundada em 2017, a L3 Uniformes se dedica à importância do uso de uniformes profissionais, promovendo a identidade e a união de equipes." />
        <meta name="twitter:image" content="/lovable-uploads/b1b44bef-43e3-4a20-a16b-569ccb9960a4.png" />
        
        {/* Structured data for local business */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "L3 Uniformes",
              "image": "/lovable-uploads/b1b44bef-43e3-4a20-a16b-569ccb9960a4.png",
              "description": "Fundada em 2017, a L3 Uniformes se dedica na importância do uso de uniformes profissionais, sendo essencial para promover a identidade e a união entre os membros de uma equipe.",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Rua Jussara, 3527",
                "addressLocality": "Curitiba",
                "addressRegion": "PR",
                "postalCode": "81920-540",
                "addressCountry": "BR"
              },
              "telephone": "+5541998970152",
              "email": "ll3.uniformes@gmail.com",
              "openingHours": "Mo-Fr 09:00-18:00",
              "founder": "Adcéia dos Santos Lourenço",
              "priceRange": "$$",
              "sameAs": [
                "https://www.instagram.com/L3.uniformes/",
                "https://www.facebook.com/L3.uniformes/"
              ]
            }
          `}
        </script>
      </Helmet>

      <Navbar />
      <WhatsAppButton phoneNumber="41998970152" />
      
      <main className="flex-grow">
        <Hero />
        <About />
        <Services />
        <MissionVision />
        <Contact />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
