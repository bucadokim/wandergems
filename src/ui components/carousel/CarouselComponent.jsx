import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import PropTypes from "prop-types";
import Autoplay from "embla-carousel-autoplay";
import Container from "@/pages/layout/Container";

const CarouselComponent = ({ images }) => {
  return (
    <Carousel
      plugins={[
        Autoplay({
          delay: 3000,
        }),
      ]}
      className="w-full "
    >
      <CarouselContent>
        {images.map((image, index) => (
          <CarouselItem key={image}>
            <Container containerStyles="h-[80vh]">
              <img
                src={image}
                alt={`Slide ${index + 1}`}
                className=" w-full object-cover"
              />
            </Container>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};

CarouselComponent.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default CarouselComponent;
