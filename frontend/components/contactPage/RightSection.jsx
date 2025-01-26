const RightSection = () => {
  return (
    <div className="w-full md:w-[50%] relative flex flex-col items-end justify-start self-stretch">
      <div className=" bg-primary-violet w-[10rem] h-[20rem]"></div>
      <div className="absolute md:right-10 md:top-10 right-4 top-6">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.7914311116874!2d77.4270575749558!3d28.606033185284474!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cef6165728471%3A0xf027989e066991a4!2sGaur%20City%20Mall!5e0!3m2!1sen!2sin!4v1718397259759!5m2!1sen!2sin"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          className=" md:w-[28rem] md:h-[25rem] w-[18rem] h-[18rem] "
        ></iframe>
      </div>
    </div>
  );
};

export default RightSection;
