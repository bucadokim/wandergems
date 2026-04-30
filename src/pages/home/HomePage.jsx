import React from "react";
import Container from "../layout/Container";
import CarouselComponent from "@/ui components/carousel/CarouselComponent";
import PropTypes from "prop-types";
import Section from "../layout/Section";

const defaultHomePictures = [
  "https://www.floridastateparks.org/sites/default/files/styles/gallery/public/media/image/30741024_Wekiwa%20Springs%20State%20Park_New%20Perspective_Perfect%20Day%20for%20a%20Paddle_Becky_Johns%20Witek.jpg?itok=qILfEvsg",
  "https://picsum.photos/1200/600?random=2",
  "https://picsum.photos/1200/600?random=3",
];

const HomePage = ({ images = defaultHomePictures }) => {
  return (
    <Container containerStyles="py-5 px-4">
      <CarouselComponent images={images} />
      <Section
        title="Featured Destinations"
        subtitle="Handpicked spots across Florida you won't find in typical guides."
        containerStyles="py-5 px-4"
      ></Section>
    </Container>
  );
};

HomePage.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string),
};

export default HomePage;
