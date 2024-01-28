import { Carousel } from "@mantine/carousel";

function BannerHomeCarousel() {
  return (
    <>
      <div className="sm:block hidden">
        <Carousel
          loop
          slideSize="70%"
          align="center"
          height={450}
          slideGap="md"
        >
          <Carousel.Slide>
            <img
              src="/images/banner-1.png"
              className="w-full h-full"
              alt="banner-1"
            />
          </Carousel.Slide>
          <Carousel.Slide>
            <img
              src="/images/banner-2.png"
              className="w-full h-full"
              alt="banner-2"
            />
          </Carousel.Slide>
          <Carousel.Slide>
            <img
              src="/images/banner-3.png"
              className="w-full h-full"
              alt="banner-3"
            />
          </Carousel.Slide>
        </Carousel>
      </div>
      <div className="sm:hidden block">
        <Carousel
          loop
          slideSize="70%"
          align="center"
          height={350}
          slideGap="md"
        >
          <Carousel.Slide>
            <img
              src="/images/banner-1.png"
              className="w-full h-full"
              alt="banner-1"
            />
          </Carousel.Slide>
          <Carousel.Slide>
            <img
              src="/images/banner-2.png"
              className="w-full h-full"
              alt="banner-2"
            />
          </Carousel.Slide>
          <Carousel.Slide>
            <img
              src="/images/banner-3.png"
              className="w-full h-full"
              alt="banner-3"
            />
          </Carousel.Slide>
        </Carousel>
      </div>
    </>
  );
}

export default BannerHomeCarousel;
