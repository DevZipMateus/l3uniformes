
import { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  className?: string;
  imageUrl?: string;
}

const ServiceCard = ({ icon: Icon, title, description, className, imageUrl }: ServiceCardProps) => {
  return (
    <div className={cn(
      "glass-card rounded-xl overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1 group",
      className
    )}>
      {imageUrl && (
        <div className="aspect-video w-full overflow-hidden">
          <img 
            src={imageUrl} 
            alt={title} 
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      )}
      
      <div className="p-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-lg bg-bordo/10 flex items-center justify-center group-hover:bg-bordo/20 transition-colors">
            <Icon className="h-5 w-5 text-bordo" />
          </div>
          <h3 className="text-xl font-bold">{title}</h3>
        </div>
        
        <p className="text-gray-600">{description}</p>
        
        <a 
          href="#contact" 
          className="mt-4 inline-flex items-center text-bordo font-medium hover:underline"
        >
          Solicitar orçamento
          <svg className="w-4 h-4 ml-1 transition-transform duration-300 group-hover:translate-x-1" 
              fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default ServiceCard;
