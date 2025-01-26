import React from "react";
import ContactDetailCard from "./ContactDetailCard";
import phone from "@/public/assets/phone-call.png";
import location from "@/public/assets/location.png";
import email from "@/public/assets/email.png";

const ContactDetails = () => {
  return (
    <section className="flex md:flex-row flex-col md:justify-between md:items-center items-start gap-8 md:gap-0 w-[80%] mx-auto mt-12 mb-32">
      <ContactDetailCard
        icon={location}
        title="Location"
        details="Noida, India"
      />
      <ContactDetailCard
        icon={email}
        title="Email"
        details="contact@vertexbuddy.com"
      />
      <ContactDetailCard icon={phone} title="Phone" details="+911234567890" />
    </section>
  );
};

export default ContactDetails;
