import Image from "next/image";

const ContactDetailCard = ({ icon, title, details }) => {
  return (
    <div className="flex gap-8 items-center w-full justify-center">
      <div className="w-[2.5rem] md:w-[3.25rem]">
        <Image src={icon} alt={title} />
      </div>
      <div className="flex flex-col gap-1 w-full">
        <h2 className="text-[1.25rem] font-medium">{title}</h2>
        <p className=" text-offset-black">{details}</p>
      </div>
    </div>
  );
};

export default ContactDetailCard;
