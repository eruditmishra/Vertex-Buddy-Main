import AboutVertexBuddy from "@/components/aboutPage/AboutVertexBuddy";
import DigitalDifferences from "@/components/aboutPage/DigitalDifferences";
import HeroSection from "@/components/aboutPage/HeroSection";
import OurPromise from "@/components/aboutPage/OurPromise";
import Transformation from "@/components/aboutPage/Transformation";

export const metadata = {
  title: "About Vertex Buddy - Empowering Efficient Candidate Management",
  description:
    "Explore Vertex Buddy, an innovative platform designed for advanced candidate management and efficient recruitment processes. Learn how our AI-powered tools optimize candidate selection and streamline your hiring workflow.",
  alternates: {
    canonical: "https://vertexbuddy.com/about-us",
  },
  openGraph: {
    type: "website",
    title: "About Vertex Buddy - Empowering Efficient Candidate Management",
    description:
      "Explore Vertex Buddy, an innovative platform designed for advanced candidate management and efficient recruitment processes. Learn how our AI-powered tools optimize candidate selection and streamline your hiring workflow.",
    site_name: "Vertex Buddy",
    url: "https://vertexbuddy.com/about-us",
  },
};

const page = () => {
  return (
    <div className=" bg-white">
      <HeroSection />
      <AboutVertexBuddy />
      {/* <MissionSection /> */}
      <OurPromise />
      {/* <Vision /> */}
      <Transformation />
      <DigitalDifferences />
    </div>
  );
};

export default page;
