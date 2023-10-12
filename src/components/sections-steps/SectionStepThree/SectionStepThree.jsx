import { useContext } from "react";
import { Checkbox } from "@nextui-org/react";
import { FormContext } from "../../../context/FormContextProvider";
import { Index } from ".";

export default function SectionStepThree() {
  const { addOnsData, isAddOnAdded, planYearlyBilling } =
    useContext(FormContext);

  const { toggleSelectAddOn } = Index();

  return (
    <div className="flex flex-col gap-4">
      {addOnsData.map((addOn) => {
        const { id, addOnLabel, addOnDescription, priceMonthly, priceYearly } =
          addOn;

        return (
          <div
            key={addOnLabel}
            className={`flex cursor-pointer items-center justify-between rounded-xl border-2 p-4 hover:!border-purplish-blue`}
            onClick={() => toggleSelectAddOn(addOn)}
            style={
              isAddOnAdded[id]
                ? {
                    borderColor: "hsl(243, 100%, 62%)",
                  }
                : {
                    borderColor: "hsl(229, 24%, 87%)",
                  }
            }
          >
            <div className="flex items-center gap-4">
              <Checkbox
                onChange={() => toggleSelectAddOn(addOn)}
                isSelected={isAddOnAdded[id] ? true : false}
                color="secondary"
                classNames={{
                  icon: "text-white",
                }}
              />
              <div>
                <h3 className="font-ubuntu-500 text-marine-blue">
                  {addOnLabel}
                </h3>
                <p className="text-sm text-cool-gray">{addOnDescription}</p>
              </div>
            </div>
            <p className="text-purplish-blue">
              {planYearlyBilling
                ? `+$${priceYearly}/yr`
                : `+$${priceMonthly}/mo`}
            </p>
          </div>
        );
      })}
    </div>
  );
}
