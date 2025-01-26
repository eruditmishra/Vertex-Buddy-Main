import { Link, useNavigate } from "react-router-dom";
import thankYou from "../../../assets/thankYouGif.gif";

const SuccessModal = ({ isOpen }) => {
  const navigate = useNavigate();

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center overflow-auto bg-black bg-opacity-50 z-10 ${
        isOpen ? "flex" : "hidden"
      }`}
    >
      <div className="bg-white p-6 rounded-xl">
        <div className="flex flex-col items-center justify-center space-y-3 relative">
          <div className="h-[7.875rem] w-[7.875rem]">
            <img src={thankYou} alt="" className=" h-full w-full" />
          </div>
          <div
            className="absolute right-0 top-1 cursor-pointer"
            onClick={() => navigate("/jobs")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M15.7093 5.37603C15.7806 5.30485 15.8371 5.22034 15.8757 5.12731C15.9143 5.03428 15.9342 4.93456 15.9343 4.83384C15.9344 4.73312 15.9146 4.63337 15.8761 4.54029C15.8376 4.44721 15.7812 4.36263 15.71 4.29136C15.6388 4.2201 15.5543 4.16355 15.4613 4.12495C15.3682 4.08635 15.2685 4.06645 15.1678 4.06639C15.0671 4.06633 14.9673 4.0861 14.8743 4.12459C14.7812 4.16308 14.6966 4.21952 14.6253 4.2907L10 8.91603L5.376 4.2907C5.23208 4.14677 5.03687 4.06592 4.83333 4.06592C4.62979 4.06592 4.43459 4.14677 4.29067 4.2907C4.14674 4.43462 4.06589 4.62983 4.06589 4.83336C4.06589 5.0369 4.14674 5.23211 4.29067 5.37603L8.916 10L4.29067 14.624C4.2194 14.6953 4.16287 14.7799 4.12431 14.873C4.08574 14.9661 4.06589 15.0659 4.06589 15.1667C4.06589 15.2675 4.08574 15.3673 4.12431 15.4604C4.16287 15.5535 4.2194 15.6381 4.29067 15.7094C4.43459 15.8533 4.62979 15.9341 4.83333 15.9341C4.93412 15.9341 5.03391 15.9143 5.12702 15.8757C5.22013 15.8372 5.30474 15.7806 5.376 15.7094L10 11.084L14.6253 15.7094C14.7693 15.8531 14.9644 15.9338 15.1678 15.9337C15.3712 15.9335 15.5663 15.8526 15.71 15.7087C15.8537 15.5648 15.9344 15.3696 15.9343 15.1662C15.9342 14.9628 15.8533 14.7678 15.7093 14.624L11.084 10L15.7093 5.37603Z"
                fill="#949494"
              />
            </svg>
          </div>
        </div>
        <div className="flex flex-col items-center gap-6 self-stretch">
          <div className="flex flex-col items-center gap-[0.875rem] self-stretch text-center">
            <h2 className=" text-[1.25rem] leading-normal font-medium">
              Job post has been created{" "}
            </h2>
            <p className="text-[#12121299] max-w-[32.3125rem]">
              The job post has been successfully created and the selected
              vendors will be able to add candidates for this job post.
            </p>
          </div>
          <Link to="/jobs">
            <button className="flex items-center justify-center text-[1rem] text-white font-medium leading-normal bg-indigo-600 px-4 py-3 w-[100%] rounded-sm hover:bg-indigo-700  transition-colors  duration-75  ">
              View Job Post
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SuccessModal;
