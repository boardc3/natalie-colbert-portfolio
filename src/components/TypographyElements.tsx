import { ReactNode } from "react";

interface HighlightProps {
  children: ReactNode;
  variant?: "gradient" | "underline" | "badge" | "emphasis";
  className?: string;
}

export function Highlight({ children, variant = "gradient", className = "" }: HighlightProps) {
  const baseClasses = "relative inline-block";
  
  switch (variant) {
    case "gradient":
      return (
        <span className={`${baseClasses} ${className}`}>
          <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent font-semibold">
            {children}
          </span>
          <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-primary to-accent opacity-40"></div>
        </span>
      );
    
    case "underline":
      return (
        <span className={`${baseClasses} ${className}`}>
          <span className="text-primary font-semibold">{children}</span>
          <div className="absolute -bottom-0.5 left-0 right-0 h-0.5 bg-primary opacity-60"></div>
        </span>
      );
    
    case "badge":
      return (
        <span className={`inline-block px-3 py-1 bg-secondary rounded-lg text-primary font-semibold ${className}`}>
          {children}
        </span>
      );
    
    case "emphasis":
      return (
        <em className={`text-primary font-semibold not-italic ${className}`}>
          {children}
        </em>
      );
    
    default:
      return <span className={className}>{children}</span>;
  }
}

interface StatNumberProps {
  number: string;
  label: string;
  description?: string;
  className?: string;
}

export function StatNumber({ number, label, description, className = "" }: StatNumberProps) {
  return (
    <div className={`text-center ${className}`}>
      <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-2">
        {number}
      </div>
      <div className="text-lg font-semibold text-foreground mb-1">
        {label}
      </div>
      {description && (
        <div className="text-muted-foreground text-sm">
          {description}
        </div>
      )}
    </div>
  );
}

interface QuoteProps {
  quote: string;
  author?: string;
  className?: string;
}

export function Quote({ quote, author, className = "" }: QuoteProps) {
  return (
    <blockquote className={`${className}`}>
      <div className="text-3xl text-accent mb-4 leading-none">"</div>
      <p className="text-lg md:text-xl font-medium text-card-foreground italic mb-4 leading-relaxed">
        {quote}
      </p>
      {author && (
        <cite className="text-sm text-muted-foreground not-italic">
          — {author}
        </cite>
      )}
    </blockquote>
  );
}

interface HeadlineProps {
  children: ReactNode;
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
}

export function Headline({ children, size = "lg", className = "" }: HeadlineProps) {
  const sizeClasses = {
    sm: "text-2xl md:text-3xl",
    md: "text-3xl md:text-4xl",
    lg: "text-4xl md:text-5xl",
    xl: "text-5xl md:text-6xl lg:text-7xl"
  };
  
  return (
    <h2 className={`font-bold text-foreground leading-tight ${sizeClasses[size]} ${className}`}>
      {children}
    </h2>
  );
}

interface TagProps {
  children: ReactNode;
  variant?: "primary" | "accent" | "muted";
  className?: string;
}

export function Tag({ children, variant = "primary", className = "" }: TagProps) {
  const variantClasses = {
    primary: "bg-primary text-card",
    accent: "bg-accent text-card",
    muted: "bg-muted text-muted-foreground"
  };
  
  return (
    <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium tracking-wide uppercase ${variantClasses[variant]} ${className}`}>
      {children}
    </span>
  );
} 