import warning from "../../../../assets/exclamation.png";
import CTAButton from "../../../commom/CTAButton";
const DeleteRecruiterModal = ({
  isOpen,
  onClose,
  setSelectedRecruiter,
  setConfirmDeletion,
}) => {
  return (
    <div
      className={`fixed inset-0 flex items-center justify-center overflow-auto bg-black bg-opacity-50 ${
        isOpen ? "flex" : "hidden"
      }`}
    >
      <div className="bg-white py-6 px-12 rounded-xl xl:max-w-[60%] lg:max-w-[65%] min-w-[65%] relative flex flex-col items-center gap-7">
        <div className="flex flex-col items-center justify-center gap-5 ">
          <div className="w-[150px] h-[150px]">
            <img src={warning} alt="" />
          </div>
        </div>
        <div className="flex flex-col gap-5 items-center justify-center w-full text-center">
          <div>
            The recruiter will be deleted and will no longer be able to access
            the dashboard. Are you sure?
          </div>
          <div className="flex items-center justify-center w-fit gap-3">
            <button
              className="border-2 border-red-500 text-red-500 rounded-lg px-7 py-2 self-stretch hover:bg-red-500 hover:text-white transition-colors"
              onClick={() => setConfirmDeletion(true)}
            >
              Delete
            </button>
            <div
              onClick={() => {
                onClose();
                setSelectedRecruiter(null);
              }}
            >
              <CTAButton title={"Cancel"} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteRecruiterModal;
