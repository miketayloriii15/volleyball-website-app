interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export default function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className="card-hover bg-navy-card rounded-xl p-6 md:p-8 border border-white/5 hover:border-accent-orange/50 group w-full flex flex-col">
      <div className="text-accent-orange mb-4 text-3xl group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <h3 className="text-lg font-bold uppercase tracking-wide mb-3">
        {title}
      </h3>
      <p className="text-text-soft text-sm leading-relaxed">
        {description}
      </p>
    </div>
  );
}
