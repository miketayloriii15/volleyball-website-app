import Image from 'next/image';

interface CoachCardProps {
  imageSrc?: string;
  name: string;
  position: string;
  description: string;
  isPlaceholder?: boolean;
}

export default function CoachCard({
  imageSrc,
  name,
  position,
  description,
  isPlaceholder = false,
}: CoachCardProps) {
  return (
    <div className="card-hover bg-navy-card rounded-2xl overflow-hidden border border-white/5 group">
      {/* Image */}
      <div className="relative w-full aspect-[3/4] overflow-hidden bg-navy-mid">
        {isPlaceholder ? (
          <div className="absolute inset-0 flex items-center justify-center">
            <svg
              className="w-24 h-24 text-white/10"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
            </svg>
          </div>
        ) : (
          <Image
            src={imageSrc!}
            alt={`Trenerka ${name}`}
            fill
            className="object-cover object-top img-zoom"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        )}
      </div>

      {/* Info */}
      <div className="p-6 md:p-8">
        <h3 className="text-xl md:text-2xl font-bold mb-1">{name}</h3>
        <p className="text-accent-orange font-semibold text-sm uppercase tracking-wider mb-4">
          {position}
        </p>
        <p className="text-text-soft text-sm leading-relaxed">{description}</p>
      </div>
    </div>
  );
}
