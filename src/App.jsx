import { Button } from "@nextui-org/react";
import { useContext } from "react";
import { FormContext } from "./context/FormContextProvider";
import "./tailwind.css";

import { ConfirmBtn, GoBackBtn, NextStepBtn } from "./components/buttons";

import {
  SectionStepFour,
  SectionStepOne,
  SectionStepThree,
  SectionStepTwo,
  SectionThankYou,
} from "./components/sections-steps";

export default function App() {
  const { inStep, stepsData, isFormSent } = useContext(FormContext);

  return (
    <>
      <main className="sidebar relative mx-auto min-h-[100dvh] pb-24 lg:flex lg:min-h-0 lg:w-[940px] lg:justify-between lg:rounded-[36px] lg:bg-white lg:p-6 lg:shadow-lg">
        <aside className="banner-steps flex items-center justify-center gap-2 py-6 lg:min-w-[272px] lg:flex-col lg:items-start lg:justify-start lg:rounded-xl lg:p-8">
          {stepsData.map(({ step, label }) => {
            return (
              <div
                key={label}
                className="cursor-pointer lg:flex lg:items-center lg:gap-4"
              >
                <Button
                  size="md"
                  isIconOnly
                  radius="full"
                  className="border"
                  style={
                    inStep === step
                      ? {
                          background: "hsl(206, 94%, 87%)",
                          color: "#000",
                        }
                      : {
                          background: "transparent",
                          color: "#fff",
                        }
                  }
                >
                  {step}
                </Button>
                <div className="hidden lg:block">
                  <p className="text-sm uppercase text-cool-gray">
                    step {step}
                  </p>
                  <p className="font-ubuntu-500 uppercase text-white">
                    {label}
                  </p>
                </div>
              </div>
            );
          })}
        </aside>
        {isFormSent ? (
          <SectionThankYou />
        ) : (
          <>
            <div className="mx-auto max-w-xl self-center px-4 lg:min-w-[450px] lg:max-w-none lg:p-0">
              <section className="rounded-xl bg-white p-6 lg:flex lg:min-h-[552px] lg:flex-col lg:justify-between lg:p-0 lg:pt-10">
                <article>
                  <header>
                    <div>
                      <h2 className="font-ubuntu-700 text-2xl text-marine-blue lg:text-3xl">
                        {inStep === 1 && <>Personal info</>}
                        {inStep === 2 && <>Select your plan</>}
                        {inStep === 3 && <>Pick add-ons</>}
                        {inStep === 4 && <>Finishing up</>}
                      </h2>
                      <p className="text-balance text-cool-gray">
                        {inStep === 1 && (
                          <>
                            Please provide your name, email address, and phone
                            number.
                          </>
                        )}
                        {inStep === 2 && (
                          <>You Have the option of monthly or yearly billing.</>
                        )}
                        {inStep === 3 && (
                          <>Add-ons help enhance your gaming experience.</>
                        )}
                        {inStep === 4 && (
                          <>
                            Double-check everything looks OK before confirming.
                          </>
                        )}
                      </p>
                    </div>
                  </header>
                  <form action="" className="mt-6">
                    {inStep === 1 && <SectionStepOne />}
                    {inStep === 2 && <SectionStepTwo />}
                    {inStep === 3 && <SectionStepThree />}
                    {inStep === 4 && <SectionStepFour />}
                  </form>
                </article>
                <div className="hidden p-4 lg:flex lg:flex-row-reverse lg:justify-between">
                  {inStep === 4 && <ConfirmBtn />}
                  {inStep !== 4 && <NextStepBtn />}
                  {inStep >= 2 && <GoBackBtn />}
                </div>
              </section>
            </div>
            <div className="absolute bottom-0 flex w-full flex-row-reverse justify-between bg-white p-4 lg:hidden">
              {inStep === 4 && <ConfirmBtn />}
              {inStep !== 4 && <NextStepBtn />}
              {inStep >= 2 && <GoBackBtn />}
            </div>
          </>
        )}
      </main>
    </>
  );
}
