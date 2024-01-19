import { Carousel } from "@mantine/carousel";

function BannerHomeCarousel() {
  return (
    <Carousel loop slideSize="70%" align="center" height={300} slideGap="md">
      <Carousel.Slide>
        <img src="/images/banner-1.png" className="h-full" alt="banner-1" />
      </Carousel.Slide>
      <Carousel.Slide>
        <img src="/images/banner-2.png" className="h-full" alt="banner-2" />
      </Carousel.Slide>
      <Carousel.Slide>
        <img src="/images/banner-3.png" className="h-full" alt="banner-3" />
      </Carousel.Slide>
    </Carousel>
  );
}

export default BannerHomeCarousel;
