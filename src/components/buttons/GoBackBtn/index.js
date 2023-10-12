import { useContext } from "react";
import { FormContext } from "../../../context/FormContextProvider";

export { default as GoBackBtn } from "./GoBackBtn";

export const Index = () => {
  const { inStep, setInStep } = useContext(FormContext);

  const handleGoBackBtn = () => {
    if (inStep !== 1) {
      setInStep(inStep - 1);
    } else {
      setInStep(1);
    }
  };
  return { handleGoBackBtn };
};
