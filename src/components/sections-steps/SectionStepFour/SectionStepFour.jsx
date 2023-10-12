import { useContext } from "react";
import { FormContext } from "../../../context/FormContextProvider";
import { Divider } from "@nextui-org/react";
import { Index } from ".";

export default function SectionStepFour() {
  const { planData, planYearlyBilling, setInStep, addOnsSelected } =
    useContext(FormContext);

  const { indexPlan, calculateTotalMonthly, calculateTotalYearly } = Index();

  return (
    <>
      <div className="mb-4 rounded-xl bg-light-blue p-4">
        <div className="flex items-center justify-between">
          <div>
            <p className="font-ubuntu-500 capitalize text-marine-blue">
              {planData[indexPlan]?.plan} (
              {planYearlyBilling ? "Yearly" : "Monthly"})
            </p>
            <p
              onClick={() => setInStep(2)}
              className="cursor-pointer text-cool-gray underline hover:text-purplish-blue hover:decoration-purplish-blue"
            >
              Change
            </p>
          </div>
          <p className="font-ubuntu-500 text-marine-blue">
            $
            {planYearlyBilling
              ? `${planData[indexPlan]?.priceYearly}`
              : `${planData[indexPlan]?.priceMonthly}`}
            /{planYearlyBilling ? "yr" : "mo"}
          </p>
        </div>
        <Divider className="my-4" />
        <div className="flex flex-col gap-4">
          {addOnsSelected.map((addOn, index) => {
            const { id, addOnLabel, priceMonthly, priceYearly } = addOn;
            return (
              <div
                key={`${id} + ${index}`}
                className="flex items-center justify-between"
              >
                <p className="text-cool-gray">{addOnLabel}</p>
                <p className="font-ubuntu-500 text-marine-blue">
                  {planYearlyBilling
                    ? `+$${priceYearly}/yr`
                    : `+$${priceMonthly}/mo`}
                </p>
              </div>
            );
          })}
        </div>
      </div>
      <div className="flex items-center justify-between">
        <p className="inline-block">
          {planYearlyBilling ? "Total (per year)" : "Total (per month)"}
        </p>
        <p className="inline-block font-ubuntu-700 text-purplish-blue">
          {planYearlyBilling
            ? `$${calculateTotalYearly()}/yr`
            : `$${calculateTotalMonthly()}/mo`}
        </p>
      </div>
    </>
  );
}
