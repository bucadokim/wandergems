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
        <div className="grid w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 items-center pb-10 justify-center">
          <CardComponent
            variant="floating"
            title="Nature & Springs"
            description="Crystal-clear springs, state parks, hidden trails, wildlife viewing."
            cardImageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgQsDvUJ9jut-sqyrjW7peAfUac0Uo2jVj3w&s"
            imageAlt="Mount Dora"
            buttonText="Explore More"
          />
          <CardComponent
            variant="floating"
            title="Secret Beaches"
            description="Less-crowded beaches and coastal escapes."
            cardImageUrl="https://www.elnuevoherald.com/public/ultimas-noticias/ivjsnk/picture251948848/alternates/LANDSCAPE_1200/DRY%20Tortuga.jpg"
            imageAlt="Mount Dora"
            buttonText="Explore More"
          />
          <CardComponent
            variant="floating"
            title="Charming Small Towns"
            description="Historic and local Florida culture."
            cardImageUrl="https://www.floridarambler.com/wp-content/uploads/IMG_1760-scaled.jpg"
            imageAlt="Mount Dora"
            buttonText="Explore More"
          />
          <CardComponent
            variant="floating"
            title="Water Adventures"
            description="For active travelers."
            cardImageUrl="https://assets.simpleviewinc.com/simpleview/image/upload/c_fill,dpr_3.0,h_383,q_50,w_580/v1/crm/tampabay/Epperson-Lagoon-Water-Obstacle-Course_2F872730-EA5B-106B-EF4AB8931F153EA0-2f870586e5ab826_2f872f12-d29c-f8a5-45bd3a594bbe8e10.jpg"
            imageAlt="Mount Dora"
            buttonText="Explore More"
          />

          <CardComponent
            variant="floating"
            title="Local Eats"
            description="Hidden restaurants and local favorites."
            cardImageUrl="https://img2.10bestmedia.com/Images/Photos/415334/red-bar-2_54_990x660.jpg?auto=webp&width=3840&quality=75"
            imageAlt="Mount Dora"
            buttonText="Explore More"
          />
          <CardComponent
            variant="floating"
            title="Arts and Culture"
            description="Unique cultural experiences."
            cardImageUrl="https://www.southflorida.edu/wp-content/uploads/2022/12/IMG_3015-e1670427030972.jpg"
            imageAlt="Mount Dora"
            buttonText="Explore More"
          />
          <CardComponent
            variant="floating"
            title="Relax & Unwind"
            description="Peaceful escapes and wellness spots."
            cardImageUrl="https://www.floridarambler.com/wp-content/uploads/winter-garden-downtown-bicy.jpg"
            imageAlt="Mount Dora"
            buttonText="Explore More"
          />
          <CardComponent
            variant="floating"
            title="Unique Experiences"
            description="Things visitors might not expect in Florida."
            cardImageUrl="https://media-cdn.tripadvisor.com/media/attractions-splice-spp-674x446/0f/75/34/33.jpg"
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
