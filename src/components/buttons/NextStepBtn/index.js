import { useContext } from "react";
import { FormContext } from "../../../context/FormContextProvider";

export { default as NextStepBtn } from "./NextStepBtn";

export default function Index() {
  const {
    isPlan,
    inStep,
    setInStep,
    isValidEmail,
    isValidName,
    isValidPhone,
    nameUser,
    emailUser,
    phoneUser,
    setErrorMessageEmailUser,
    setErrorMessageNameUser,
    setErrorMessagePhoneUser,
  } = useContext(FormContext);

  const handleNextStepBtn = () => {
    if (inStep === 1) {
      let isValid = true;

      if (nameUser === "") {
        setErrorMessageNameUser("This field is required.");
        isValid = false;
      } else if (!isValidName(nameUser)) {
        setErrorMessageNameUser("Only letters and spaces are allowed.");
        isValid = false;
      }

      if (emailUser === "") {
        setErrorMessageEmailUser("This field is required.");
        isValid = false;
      } else if (!isValidEmail(emailUser)) {
        setErrorMessageEmailUser("The email format is not valid.");
        isValid = false;
      }

      if (phoneUser === "") {
        setErrorMessagePhoneUser("This field is required.");
        isValid = false;
      } else if (!isValidPhone(phoneUser)) {
        setErrorMessagePhoneUser("Only numbers are allowed.");
        isValid = false;
      }

      if (isValid) {
        setInStep(2);
      }
    }

    if (inStep === 2) {
      if (isPlan) {
        setInStep(3);
      }
    }

    if (inStep === 3) {
      setInStep(4);
    }
  };

  return { handleNextStepBtn };
}
