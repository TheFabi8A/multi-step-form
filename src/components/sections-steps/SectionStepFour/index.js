export { default as SectionStepFour } from "./SectionStepFour";

import { useContext } from "react";
import { FormContext } from "../../../context/FormContextProvider";

export const Index = () => {
  const { planData, addOnsSelected, isPlan } = useContext(FormContext);

  const indexPlan = planData.findIndex((plan) => plan.plan === isPlan);

  const calculateTotalYearly = () => {
    const planPrice = planData[indexPlan].priceYearly;
    const addonsTotal = addOnsSelected.reduce((total, addon) => {
      return total + addon.priceYearly;
    }, 0);
    return planPrice + addonsTotal;
  };

  const calculateTotalMonthly = () => {
    const planPrice = planData[indexPlan].priceMonthly;
    const addonsTotal = addOnsSelected.reduce((total, addon) => {
      return total + addon.priceMonthly;
    }, 0);
    return planPrice + addonsTotal;
  };

  return { calculateTotalMonthly, calculateTotalYearly, indexPlan };
};
