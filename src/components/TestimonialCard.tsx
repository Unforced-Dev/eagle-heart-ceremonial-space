
interface TestimonialCardProps {
  quote: string;
  author: string;
  location?: string;
}

const TestimonialCard = ({ quote, author, location }: TestimonialCardProps) => {
  return (
    <div className="glass-card p-8 backdrop-blur-md transition-all hover:shadow-lg border border-white/10">
      <div className="mb-4 text-eagle-gold-500">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" />
          <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z" />
        </svg>
      </div>
      <blockquote className="mb-6 text-eagle-blue-800 leading-relaxed font-serif italic">
        {quote}
      </blockquote>
      <div className="flex items-center">
        <div className="ml-0">
          <p className="font-medium text-eagle-blue-900">{author}</p>
          {location && (
            <p className="text-sm text-eagle-blue-600">{location}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
