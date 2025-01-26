import Hero from "@/components/home/Hero";
import WhyUs from "@/components/home/WhyUs";
import Summary from "@/components/home/Summary";
import CTASection from "@/components/home/CTASection";
import AllySection from "@/components/home/AllySection";
import FindYourBuddy from "@/components/home/FindYourBuddy";
import ManageCandidates from "@/components/home/ManageCandidates";
import Testimonial from "@/components/home/Testimonial";

export const metadata = {
  title:
    "Vertex Buddy - AI-Powered Resume Ranking & Candidate Management Platform",
  description:
    "Discover Vertex Buddy, a powerful candiate management app with resume rankings and advanced tools. Streamline recruitment with our AI-powered platform today!",
  alternates: {
    canonical: "https://vertexbuddy.com/",
  },
  openGraph: {
    type: "website",
    title:
      "Vertex Buddy - AI-Powered Resume Ranking & Candidate Management Platform",
    site_name: "Vertex Buddy",
    url: "https://vertexbuddy.com/",
    description:
      "Discover Vertex Buddy, a powerful candiate management app with resume rankings and advanced tools. Streamline recruitment with our AI-powered platform today!",
  },
};
const page = () => {
  return (
    <div className="flex flex-col ">
      <Hero />
      <AllySection />
      <FindYourBuddy />
      <ManageCandidates />
      <Testimonial />
      <WhyUs />
      <Summary />
      <CTASection />
    </div>
  );
};

export default page;
