import {
  type CarouselApi,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import BentoGrid from "@/components/BentoGrid";
import type { CarouselScreenData } from "@/lib/content";
import { useEffect, useState } from "react";

type CarouselMainProps = {
  screens: CarouselScreenData[];
};

export default function CarouselMain({ screens }: CarouselMainProps) {
  const [api, setApi] = useState<CarouselApi>();

  useEffect(() => {
    if (!api) return;

    const searchParams = new URLSearchParams(window.location.search);
    const targetScreen =
      searchParams.get("screen") ?? window.location.hash.replace("#", "");
    if (!targetScreen) return;

    const targetIndex = screens.findIndex((screen) => screen._key === targetScreen);
    if (targetIndex < 0) return;

    api.scrollTo(targetIndex, true);
  }, [api, screens]);

  return (
    <div className="h-full min-h-0 w-full overflow-hidden">
      <Carousel className="h-full min-h-0 w-full" setApi={setApi}>
        <CarouselContent className="h-full min-h-0">
          {screens.map((screen, index) => (
            <CarouselItem
              key={screen._key}
              className="h-full min-h-0 overflow-hidden"
            >
              <BentoGrid screen={screen} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext  />
      </Carousel>
    </div>
  );
}
