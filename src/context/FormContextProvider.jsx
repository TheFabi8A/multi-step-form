import { createContext, useState } from "react";
import { AdvancedIcon, ArcadeIcon, ProIcon } from "../components/icons";

export const FormContext = createContext();

export default function FormContextProvider({ children }) {
  const [inStep, setInStep] = useState(1);

  const [nameUser, setNameUser] = useState("");
  const [errorMessageNameUser, setErrorMessageNameUser] = useState("");
  const [emailUser, setEmailUser] = useState("");
  const [errorMessageEmailUser, setErrorMessageEmailUser] = useState("");
  const [phoneUser, setPhoneUser] = useState("");
  const [countryPrefixSelected, setCountryPrefixSelected] = useState("+51");
  const [errorMessagePhoneUser, setErrorMessagePhoneUser] = useState("");
  const [planYearlyBilling, setPlanYearlyBilling] = useState(false);
  const [isPlan, setIsPlan] = useState("arcade");

  const [addOnsSelected, setAddOnsSelected] = useState([]);
  const [isAddOnAdded, setIsAddOnAdded] = useState([]);

  const [isFormSent, setIsFormSent] = useState(false);

  const stepsData = [
    {
      step: 1,
      label: "your info",
    },
    {
      step: 2,
      label: "select plan",
    },
    {
      step: 3,
      label: "add-ons",
    },
    {
      step: 4,
      label: "summary",
    },
  ];

  const planData = [
    {
      id: 0,
      plan: "arcade",
      priceMonthly: 9,
      priceYearly: 90,
      Icon: ArcadeIcon,
    },
    {
      id: 1,
      plan: "advanced",
      priceMonthly: 12,
      priceYearly: 120,
      Icon: AdvancedIcon,
    },
    {
      id: 2,
      plan: "pro",
      priceMonthly: 15,
      priceYearly: 150,
      Icon: ProIcon,
    },
  ];

  const addOnsData = [
    {
      id: 0,
      addOnLabel: "Online service",
      addOnDescription: "Access to multiplayer games",
      priceMonthly: 1,
      priceYearly: 10,
    },
    {
      id: 1,
      addOnLabel: "Larger storage",
      addOnDescription: "Extra 1TB of cloud save",
      priceMonthly: 2,
      priceYearly: 20,
    },
    {
      id: 2,
      addOnLabel: "Customizable Profile",
      addOnDescription: "Custom theme on your profile",
      priceMonthly: 2,
      priceYearly: 20,
    },
  ];

  const isValidName = (name) => {
    const regex = /^[A-Za-z\s]+$/;
    return regex.test(name);
  };

  const isValidEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const isValidPhone = (phone) => {
    const regex = /^[0-9]+$/;
    return regex.test(phone);
  };

  return (
    <FormContext.Provider
      value={{
        inStep,
        setInStep,
        nameUser,
        setNameUser,
        errorMessageNameUser,
        setErrorMessageNameUser,
        emailUser,
        setEmailUser,
        errorMessageEmailUser,
        setErrorMessageEmailUser,
        phoneUser,
        setPhoneUser,
        errorMessagePhoneUser,
        setErrorMessagePhoneUser,
        planYearlyBilling,
        setPlanYearlyBilling,
        isPlan,
        setIsPlan,
        addOnsSelected,
        setAddOnsSelected,
        isAddOnAdded,
        setIsAddOnAdded,
        stepsData,
        planData,
        addOnsData,
        isValidEmail,
        isValidName,
        isValidPhone,
        isFormSent,
        setIsFormSent,
        countryPrefixSelected,
        setCountryPrefixSelected,
      }}
    >
      {children}
    </FormContext.Provider>
  );
}
