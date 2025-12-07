import React from "react";
import Hero from "../../components/Hero/Hero";

const Home = () => {
  return (
    <div className="min-h-screen b-g-main">
      <Hero
        imageSrc="https://static.vecteezy.com/system/resources/previews/024/650/050/non_2x/gourmet-chicken-biryani-with-steamed-basmati-rice-generated-by-ai-free-photo.jpg"
        imageAlt="Delicious chicken biryani in a clay pot"
        ctaPrimary={{ label: "Explore Meals", href: "/meals" }}
        ctaSecondary={{ label: "How it Works", href: "/about" }}
        badge={{ label: "Chef of the Day", sub: "Chef Rahim • 4.9★" }}
      />
    </div>
  );
};

export default Home;
