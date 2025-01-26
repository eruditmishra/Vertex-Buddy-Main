import { Toaster } from "react-hot-toast";
import RecruitersList from "../../components/admin/core/home/RecruitersList";
import StatsContainer from "../../components/admin/core/home/StatsContainer";
import DeleteRecruiterModal from "../../components/admin/core/home/DeleteRecruiterModal";
import { useEffect, useState } from "react";

const AdminHome = () => {
  const [displayRecruiterModal, setDisplayRecruiterModal] = useState(false);
  const [selectedRecruiter, setSelectedRecruiter] = useState(null);
  const [confirmDeletion, setConfirmDeletion] = useState(false);

  const recruiterModalHandler = () => {
    setDisplayRecruiterModal(!displayRecruiterModal);
  };

  useEffect(() => {
    selectedRecruiter && recruiterModalHandler();
  }, [selectedRecruiter]);

  return (
    <div className=" w-[95%] mx-auto flex flex-col gap-5">
      <StatsContainer />
      <RecruitersList
        setSelectedRecruiter={setSelectedRecruiter}
        selectedRecruiter={selectedRecruiter}
        confirmDeletion={confirmDeletion}
        setDisplayRecruiterModal={setDisplayRecruiterModal}
      />
      <DeleteRecruiterModal
        onClose={recruiterModalHandler}
        isOpen={displayRecruiterModal}
        selectedRecruiter={selectedRecruiter}
        setSelectedRecruiter={setSelectedRecruiter}
        setConfirmDeletion={setConfirmDeletion}
      />
      <Toaster />
    </div>
  );
};

export default AdminHome;
