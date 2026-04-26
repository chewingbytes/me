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
    <div className="h-full min-h-0 w-full overflow-hidden">
      <Carousel className="h-full min-h-0 w-full">
        <CarouselContent className="h-full min-h-0">
          {screens.map((screen) => (
            <CarouselItem key={screen._key} className="h-full min-h-0 overflow-hidden">
              <BentoGrid screen={screen} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
