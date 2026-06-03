import React from "react";
import Container from "../layout/Container";
import CarouselComponent from "@/ui components/carousel/CarouselComponent";
import PropTypes from "prop-types";
import Section from "../layout/Section";
import CardComponent from "@/ui components/card/CardComponent";

const defaultHomePictures = [
  "https://www.floridastateparks.org/sites/default/files/styles/gallery/public/media/image/30741024_Wekiwa%20Springs%20State%20Park_New%20Perspective_Perfect%20Day%20for%20a%20Paddle_Becky_Johns%20Witek.jpg?itok=qILfEvsg",
  "https://picsum.photos/1200/600?random=2",
  "https://picsum.photos/1200/600?random=3",
];

const HomePage = ({ images = defaultHomePictures }) => {
  return (
    <Container containerStyles="py-5 px-4">
      <CarouselComponent images={images} />
      {/* FEATURED DESTINATIONS SECTION */}
      <Section
        title="Featured Destinations"
        subtitle="Handpicked spots across Florida you won't find in typical guides."
        containerStyles="py-5 px-4"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 px-15 align-center py-10 justify-center">
          <CardComponent
            title="Wekiwa Springs State Park"
            description="Apopka, Florida"
            content="Crystal-clear springs surrounded by lush forest trails, kayaking routes, and peaceful swimming spots."
            cardImageUrl="https://wekiwaspringsadventures.com/wp-content/uploads/2024/06/wekiwa-home.jpg"
            badgeIds={["nature", "spring"]}
          />
          <CardComponent
            title="Anna Maria Island"
            description="Gulf Coast, Florida"
            content="A peaceful island escape with white-sand beaches, pastel beach houses, local cafés, and stunning Gulf sunsets."
            cardImageUrl="https://gardenandgun.com/wp-content/uploads/2025/06/Beach-Anna-Maria-Island-1100x733.jpg"
            badgeIds={["beach"]}
          />
          <CardComponent
            title="Mount Dora"
            description="Central Florida"
            content="A charming lakeside town filled with cozy cafés, antique shops, scenic streets, and sunset views."
            cardImageUrl="https://webapp-discoverlakeumbraco.azurewebsites.net/media/kaojdggv/f12b3f79-7fe7-4683-9d0e-9ca89c2921f9.jpg"
            badgeIds={["cafe", "downtown"]}
          />
          <CardComponent
            title="Lake Apopka Wildlife Drive"
            description="Apopka, Florida"
            content="A peaceful scenic drive through wetlands filled with birds, alligators, turtles, and breathtaking Florida wildlife views."
            cardImageUrl="https://www.sjrwmd.com/img/2025/05/20250501-lawd-drone.jpg"
            badgeIds={["nature", "wildlife"]}
          />
        </div>
      </Section>
      {/* FEATURED DESTINATIONS SECTION END */}

      {/* CATEGORIES SECTION */}
      <Section
        title="Browse by Vibe"
        subtitle="From calm springs to quiet towns—explore by how you want to feel."
        containerStyles="py-5 px-4 "
      >
        <div className="grid w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 items-stretch pt-28 pb-10 justify-center">
          <CardComponent
            variant="floating"
            title="Health Kitchen Family Meals"
            description="Perfect meals to share"
            cardImageUrl="https://webapp-discoverlakeumbraco.azurewebsites.net/media/kaojdggv/f12b3f79-7fe7-4683-9d0e-9ca89c2921f9.jpg"
            imageAlt="Mount Dora"
            buttonText="Explore More"
          />
          <CardComponent
            variant="floating"
            title="Health Kitchen Family Meals"
            description="Perfect meals to share"
            cardImageUrl="https://webapp-discoverlakeumbraco.azurewebsites.net/media/kaojdggv/f12b3f79-7fe7-4683-9d0e-9ca89c2921f9.jpg"
            imageAlt="Mount Dora"
            buttonText="Explore More"
          />
          <CardComponent
            variant="floating"
            title="Health Kitchen Family Meals"
            description="Perfect meals to share"
            cardImageUrl="https://webapp-discoverlakeumbraco.azurewebsites.net/media/kaojdggv/f12b3f79-7fe7-4683-9d0e-9ca89c2921f9.jpg"
            imageAlt="Mount Dora"
            buttonText="Explore More"
          />
          <CardComponent
            variant="floating"
            title="Health Kitchen Family Meals"
            description="Perfect meals to share"
            cardImageUrl="https://webapp-discoverlakeumbraco.azurewebsites.net/media/kaojdggv/f12b3f79-7fe7-4683-9d0e-9ca89c2921f9.jpg"
            imageAlt="Mount Dora"
            buttonText="Explore More"
          />
        </div>
      </Section>
      {/* CATEGORIES SECTION END */}
    </Container>
  );
};

HomePage.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string),
};

export default HomePage;
