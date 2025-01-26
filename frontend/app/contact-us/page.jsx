import ContactDetails from "@/components/contactPage/ContactDetails";
import HeroSection from "@/components/contactPage/HeroSection";
import { Toaster } from "react-hot-toast";

export const metadata = {
  title: "Contact Vertex Buddy - Reach Out for Efficient Recruitment Solutions",
  description:
    "Contact Vertex Buddy today for inquiries about our powerful candidate management tools and AI-driven recruitment solutions. Get in touch to discover how we can enhance your hiring process.",
  alternates: {
    canonical: "https://vertexbuddy.com/contact-us",
  },
  openGraph: {
    type: "website",
    title:
      "Contact Vertex Buddy - Reach Out for Efficient Recruitment Solutions",
    description:
      "Contact Vertex Buddy today for inquiries about our powerful candidate management tools and AI-driven recruitment solutions. Get in touch to discover how we can enhance your hiring process.",
    site_name: "Vertex Buddy",
    url: "https://vertexbuddy.com/contact-us",
  },
};

const page = () => {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <ContactDetails />
      <Toaster />
    </div>
  );
};

export default page;
