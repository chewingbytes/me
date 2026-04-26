import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import BentoGrid from "@/components/BentoGrid";
import type { CarouselScreenData } from "@/lib/content";

type CarouselMainProps = {
  screens: CarouselScreenData[];
};

export default function CarouselMain({ screens }: CarouselMainProps) {
  return (
    <div className="h-full min-h-0 w-full overflow-hidden" data-aos="fade-up-sm">
      <Carousel className="h-full min-h-0 w-full">
        <CarouselContent className="h-full min-h-0">
          {screens.map((screen, index) => (
            <CarouselItem
              key={screen._key}
              className="h-full min-h-0 overflow-hidden"
              data-aos="fade-up-sm"
              data-aos-delay={String(Math.min(index * 60, 240))}
            >
              <BentoGrid screen={screen} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious data-aos="fade-right-sm" data-aos-delay="120" />
        <CarouselNext data-aos="fade-left-sm" data-aos-delay="120" />
      </Carousel>
    </div>
  );
}
