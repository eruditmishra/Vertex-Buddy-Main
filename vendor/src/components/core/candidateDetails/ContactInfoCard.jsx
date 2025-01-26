import { useState } from "react";
import { GoChevronDown } from "react-icons/go";

const ContactInfoCard = () => {
  const [showContactDetails, setShowContactDetails] = useState(false);

  return (
    <div className="bg-white h-fit flex flex-col  rounded-xl w-full ">
      <div
        className="flex items-center justify-between w-full cursor-pointer px-4 py-4 "
        onClick={() => setShowContactDetails(!showContactDetails)}
      >
        <h3 className=" font-medium">Contact Details</h3>
        <GoChevronDown className=" cursor-pointer text-[1.25rem]" />
      </div>
      {showContactDetails && (
        <>
          <div className="w-full h-[1px] bg-gray-200 "></div>
          <div className=" flex flex-col  gap-2 px-4 pb-4 pt-2  w-full">
            <div className="flex flex-col">
              <h4 className="text-[0.875rem] text-primary-violet font-medium">
                Email:
              </h4>
              <p className=" text-offset-black font-medium">
                tyagianjalimsc@gmail.com
              </p>
            </div>
            <div className="flex flex-col">
              <h4 className="text-[0.875rem] text-primary-violet font-medium">
                Phone Number:
              </h4>
              <p className=" text-offset-black font-medium">8826507103</p>
            </div>
            <div className="flex flex-col">
              <h4 className="text-[0.875rem] text-primary-violet font-medium">
                Alternate Mobile:
              </h4>
              <p className=" text-offset-black font-medium">8375949906</p>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ContactInfoCard;
