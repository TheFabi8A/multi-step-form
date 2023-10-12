import { useContext } from "react";
import { FormContext } from "../../../context/FormContextProvider";

export { default as SectionStepThree } from "./SectionStepThree";

export const Index = () => {
  const { setIsAddOnAdded, isAddOnAdded, setAddOnsSelected } =
    useContext(FormContext);

  const toggleSelectAddOn = (addOn) => {
    if (isAddOnAdded[addOn.id]) {
      setIsAddOnAdded((prevAddOnAdded) => {
        const updatedAddOnAdded = { ...prevAddOnAdded };
        delete updatedAddOnAdded[addOn.id];
        return updatedAddOnAdded;
      });
      setAddOnsSelected((prevAddOns) =>
        prevAddOns.filter((a) => a.id !== addOn.id),
      );
    } else {
      setIsAddOnAdded((prevAddOnAdded) => ({
        ...prevAddOnAdded,
        [addOn.id]: true,
      }));
      setAddOnsSelected((prevAddOns) => [...prevAddOns, addOn]);
    }
  };

  return { toggleSelectAddOn };
};
