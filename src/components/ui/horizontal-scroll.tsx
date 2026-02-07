import * as React from "react";
import { useRef, useState, useEffect, useCallback } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface HorizontalScrollProps {
  children: React.ReactNode;
  className?: string;
  itemClassName?: string;
  showArrows?: boolean;
  showIndicators?: boolean;
  gap?: number;
}

export const HorizontalScroll = ({
  children,
  className,
  showArrows = true,
  showIndicators = true,
  gap = 24,
}: HorizontalScrollProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  // Check for reduced motion preference
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);
    const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  const updateScrollState = useCallback(() => {
    if (!containerRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = containerRef.current;
    setCanScrollLeft(scrollLeft > 5);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 5);
    setScrollProgress(scrollLeft / (scrollWidth - clientWidth));
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    
    updateScrollState();
    container.addEventListener("scroll", updateScrollState, { passive: true });
    window.addEventListener("resize", updateScrollState);
    
    return () => {
      container.removeEventListener("scroll", updateScrollState);
      window.removeEventListener("resize", updateScrollState);
    };
  }, [updateScrollState]);

  const scroll = (direction: "left" | "right") => {
    if (!containerRef.current) return;
    const scrollAmount = containerRef.current.clientWidth * 0.8;
    containerRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: prefersReducedMotion ? "auto" : "smooth",
    });
  };

  const handleDragStart = () => setIsDragging(true);
  const handleDragEnd = () => {
    setIsDragging(false);
    // Snap to nearest card after drag
    if (containerRef.current) {
      const { scrollLeft } = containerRef.current;
      const cardWidth = 320 + gap;
      const nearestCard = Math.round(scrollLeft / cardWidth) * cardWidth;
      containerRef.current.scrollTo({
        left: nearestCard,
        behavior: prefersReducedMotion ? "auto" : "smooth",
      });
    }
  };

  return (
    <div className={cn("relative group", className)}>
      {/* Navigation Arrows */}
      {showArrows && (
        <>
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: canScrollLeft ? 1 : 0 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scroll("left")}
            disabled={!canScrollLeft}
            aria-label="Scroll left"
            className={cn(
              "absolute left-0 top-1/2 -translate-y-1/2 z-20",
              "w-12 h-12 rounded-full bg-background/90 backdrop-blur-sm",
              "border border-border/50 shadow-elevated",
              "flex items-center justify-center",
              "transition-all duration-300",
              "hover:bg-accent hover:border-accent",
              "disabled:pointer-events-none disabled:opacity-0",
              "-translate-x-1/2 md:translate-x-0"
            )}
          >
            <ChevronLeft className="w-5 h-5 text-foreground" />
          </motion.button>

          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: canScrollRight ? 1 : 0 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scroll("right")}
            disabled={!canScrollRight}
            aria-label="Scroll right"
            className={cn(
              "absolute right-0 top-1/2 -translate-y-1/2 z-20",
              "w-12 h-12 rounded-full bg-background/90 backdrop-blur-sm",
              "border border-border/50 shadow-elevated",
              "flex items-center justify-center",
              "transition-all duration-300",
              "hover:bg-accent hover:border-accent",
              "disabled:pointer-events-none disabled:opacity-0",
              "translate-x-1/2 md:translate-x-0"
            )}
          >
            <ChevronRight className="w-5 h-5 text-foreground" />
          </motion.button>
        </>
      )}

      {/* Gradient Fade Edges */}
      <div 
        className={cn(
          "absolute left-0 top-0 bottom-0 w-16 z-10 pointer-events-none",
          "bg-gradient-to-r from-background to-transparent",
          "transition-opacity duration-300",
          canScrollLeft ? "opacity-100" : "opacity-0"
        )} 
      />
      <div 
        className={cn(
          "absolute right-0 top-0 bottom-0 w-16 z-10 pointer-events-none",
          "bg-gradient-to-l from-background to-transparent",
          "transition-opacity duration-300",
          canScrollRight ? "opacity-100" : "opacity-0"
        )} 
      />

      {/* Scrollable Container */}
      <div
        ref={containerRef}
        role="region"
        aria-label="Horizontally scrollable content"
        tabIndex={0}
        onMouseDown={handleDragStart}
        onMouseUp={handleDragEnd}
        onMouseLeave={handleDragEnd}
        className={cn(
          "flex overflow-x-auto scrollbar-hide",
          "scroll-smooth snap-x snap-mandatory",
          "py-4 px-2 -mx-2",
          "cursor-grab active:cursor-grabbing",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2",
          isDragging && "select-none"
        )}
        style={{ 
          gap: `${gap}px`,
          scrollPaddingLeft: "24px",
          scrollPaddingRight: "24px",
        }}
      >
        {children}
      </div>

      {/* Scroll Progress Indicator */}
      {showIndicators && (
        <div className="mt-6 flex justify-center">
          <div className="relative w-32 h-1.5 bg-border/50 rounded-full overflow-hidden">
            <motion.div
              className="absolute inset-y-0 left-0 bg-gradient-primary rounded-full"
              style={{ width: `${Math.max(20, scrollProgress * 100)}%` }}
              initial={{ width: "20%" }}
              animate={{ width: `${Math.max(20, scrollProgress * 100)}%` }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            />
          </div>
        </div>
      )}
    </div>
  );
};

interface ScrollCardProps {
  children: React.ReactNode;
  className?: string;
  index?: number;
}

export const ScrollCard = ({ children, className, index = 0 }: ScrollCardProps) => {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);
  }, []);

  return (
    <motion.div
      initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
      whileInView={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ 
        duration: 0.4, 
        delay: Math.min(index * 0.05, 0.3),
        ease: [0.25, 0.46, 0.45, 0.94]
      }}
      whileHover={prefersReducedMotion ? {} : { 
        y: -8, 
        transition: { type: "spring", stiffness: 400, damping: 25 } 
      }}
      className={cn(
        "flex-shrink-0 snap-start",
        "w-[280px] sm:w-[300px] md:w-[320px]",
        className
      )}
    >
      {children}
    </motion.div>
  );
};
