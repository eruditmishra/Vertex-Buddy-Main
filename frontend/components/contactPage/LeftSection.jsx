import ContactForm from "./ContactForm";

const LeftSection = () => {
  return (
    <div className="flex flex-col w-full md:w-[45%] self-stretch gap-3">
      <div className="flex flex-col">
        <h1 className=" text-[2rem] font-semibold text-primary-violet">
          Contact Us
        </h1>
        <div className=" bg-primary-yellow h-[3.2px] w-[5rem]"></div>
      </div>
      <p className="text-offset-black font-medium">
        Reach out to us for any inquiry
      </p>
      <ContactForm />
    </div>
  );
};

export default LeftSection;
