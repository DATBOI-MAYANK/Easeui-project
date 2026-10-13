import React, { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/libs/utils";

export interface CarouselProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode[];
  initialIndex?: number;
  index?: number;
  onIndexChange?: (index: number) => void;
  autoplay?: boolean;
  autoplayInterval?: number;
  loop?: boolean;
  showControls?: boolean;
  showIndicators?: boolean;
}

const Carousel = React.forwardRef<HTMLDivElement, CarouselProps>(
  (
    {
      children,
      initialIndex = 0,
      index: controlledIndex,
      onIndexChange,
      autoplay = false,
      autoplayInterval = 5000,
      loop = true,
      showControls = true,
      showIndicators = true,
      className,
      ...props
    },
    ref
  ) => {
    const slides = React.Children.toArray(children);
    const lastIndex = Math.max(slides.length - 1, 0);
    const [uncontrolledIndex, setUncontrolledIndex] = useState(() =>
      Math.min(Math.max(initialIndex, 0), lastIndex)
    );
    const currentIndex = controlledIndex ?? uncontrolledIndex;

    const moveTo = (nextIndex: number) => {
      if (!slides.length) return;
      const next = loop
        ? (nextIndex + slides.length) % slides.length
        : Math.min(Math.max(nextIndex, 0), lastIndex);
      if (controlledIndex === undefined) setUncontrolledIndex(next);
      onIndexChange?.(next);
    };

    useEffect(() => {
      if (!autoplay || slides.length < 2) return;
      const timer = window.setInterval(() => moveTo(currentIndex + 1), autoplayInterval);
      return () => window.clearInterval(timer);
    }, [autoplay, autoplayInterval, currentIndex, slides.length]);

    if (!slides.length) return null;

    return (
      <div
        ref={ref}
        className={cn("relative w-full overflow-hidden rounded-lg", className)}
        aria-roledescription="carousel"
        {...props}
      >
        <div className="flex transition-transform duration-300 ease-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
          {slides.map((slide, slideIndex) => (
            <div
              key={slideIndex}
              className="min-w-full"
              role="group"
              aria-roledescription="slide"
              aria-label={`${slideIndex + 1} of ${slides.length}`}
              aria-hidden={slideIndex !== currentIndex}
            >
              {slide}
            </div>
          ))}
        </div>

        {showControls && slides.length > 1 && (
          <>
            <button
              type="button"
              aria-label="Previous slide"
              onClick={() => moveTo(currentIndex - 1)}
              className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white transition hover:bg-black/70 focus:outline-none focus:ring-2 focus:ring-white"
            >
              <ChevronLeft size={20} aria-hidden="true" />
            </button>
            <button
              type="button"
              aria-label="Next slide"
              onClick={() => moveTo(currentIndex + 1)}
              className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white transition hover:bg-black/70 focus:outline-none focus:ring-2 focus:ring-white"
            >
              <ChevronRight size={20} aria-hidden="true" />
            </button>
          </>
        )}

        {showIndicators && slides.length > 1 && (
          <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-2" aria-label="Choose slide">
            {slides.map((_, slideIndex) => (
              <button
                key={slideIndex}
                type="button"
                aria-label={`Go to slide ${slideIndex + 1}`}
                aria-current={slideIndex === currentIndex}
                onClick={() => moveTo(slideIndex)}
                className={cn(
                  "h-2 w-2 rounded-full transition",
                  slideIndex === currentIndex ? "bg-white" : "bg-white/50"
                )}
              />
            ))}
          </div>
        )}
      </div>
    );
  }
);

Carousel.displayName = "Carousel";

export { Carousel };
