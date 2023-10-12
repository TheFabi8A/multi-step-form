import { useContext } from "react";
import { FormContext } from "../../../context/FormContextProvider";
import { Switch } from "@nextui-org/react";

export default function SectionStepTwo() {
  const {
    planData,
    setIsPlan,
    isPlan,
    planYearlyBilling,
    setPlanYearlyBilling,
  } = useContext(FormContext);

  return (
    <>
      <div className="flex flex-col gap-4 lg:flex-row">
        {planData.map(({ plan, priceMonthly, priceYearly, Icon }) => {
          return (
            <label
              key={`${plan} label`}
              onClick={() => setIsPlan(plan)}
              htmlFor={`${plan}-plan`}
              className={`label-${plan}-plan relative flex cursor-pointer items-center gap-4 rounded-xl border-2 p-4 hover:!border-purplish-blue lg:w-full lg:flex-col`}
              style={
                isPlan === plan
                  ? {
                      background: "hsl(206, 94%, 87%)",
                      borderColor: "hsl(243, 100%, 62%)",
                    }
                  : {
                      background: "transparent",
                      borderColor: "hsl(229, 24%, 87%)",
                    }
              }
            >
              <Icon className="lg:self-start" />
              <div className="flex flex-col items-start lg:self-start">
                <h3 className="font-ubuntu-500 capitalize text-marine-blue">
                  {plan}
                </h3>
                <p className="text-cool-gray">
                  {planYearlyBilling
                    ? `$${priceYearly}/yr`
                    : `$${priceMonthly}/mo`}
                </p>
                {planYearlyBilling && (
                  <p className="text-xs text-marine-blue">2 months free</p>
                )}
              </div>
            </label>
          );
        })}
      </div>
      <div className="mt-6 flex items-center justify-center gap-4 rounded-xl bg-light-blue py-6">
        <p
          className="font-ubuntu-500"
          style={{
            color: `${
              planYearlyBilling ? "hsl(231, 11%, 63%)" : "hsl(213, 96%, 18%)"
            }`,
          }}
        >
          Monthly
        </p>
        <Switch
          isSelected={planYearlyBilling}
          classNames={{ wrapper: "bg-marine-blue" }}
          color="primary"
          onChange={() => setPlanYearlyBilling(!planYearlyBilling)}
        />
        <p
          className="font-ubuntu-500"
          style={{
            color: `${
              planYearlyBilling ? "hsl(213, 96%, 18%)" : "hsl(231, 11%, 63%)"
            }`,
          }}
        >
          Yearly
        </p>
      </div>
    </>
  );
}
