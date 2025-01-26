import { useState } from "react";
import Header from "../components/common/Header";
import AddVendor from "../components/core/allVendors/AddVendor";
import VendorTable from "../components/core/allVendors/VendorTable";

const Vendors = () => {
  const [showAddVendorModal, setshowAddVendorModal] = useState(false);

  return (
    <div>
      <Header
        title={"All Vendors"}
        desc={"Manage your vendors and their information."}
      />
      <VendorTable setshowAddVendorModal={setshowAddVendorModal} />
      <AddVendor open={showAddVendorModal} setOpen={setshowAddVendorModal} />
    </div>
  );
};

export default Vendors;
