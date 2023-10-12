import { useContext } from "react";
import { FormContext } from "../../../context/FormContextProvider";
import {
  ClFlagIcon,
  CoFlagIcon,
  MxFlagIcon,
  PeFlagIcon,
  UsFlagIcon,
  VeFlagIcon,
} from "../../icons";

export { default as SectionStepOne } from "./SectionStepOne";

export const Index = () => {
  const {
    setNameUser,
    setEmailUser,
    setPhoneUser,
    isValidName,
    isValidEmail,
    isValidPhone,
    setErrorMessageNameUser,
    setErrorMessageEmailUser,
    setErrorMessagePhoneUser,
  } = useContext(FormContext);

  const countryData = [
    {
      id: 0,
      countryCode: "+51",
      country: "Peru",
      FlagIcon: PeFlagIcon,
      flagAlt:
        "The flag of Peru is composed of three equal vertical bands of red, white and red, with the national emblem centered in the white band.",
    },
    {
      countryCode: "+1",
      country: "United States",
      FlagIcon: UsFlagIcon,
      flagAlt:
        "The flag of the United States of America is composed of thirteen equal horizontal bands of red alternating with white. A blue rectangle, bearing fifty small five-pointed white stars arranged in nine rows where rows of six stars alternate with rows of five stars, is superimposed in the canton.",
    },
    {
      countryCode: "+52",
      country: "Mexico",
      FlagIcon: MxFlagIcon,
      flagAlt:
        "The flag of Mexico is composed of three equal vertical bands of green, white and red, with the national coat of arms centered in the white band.",
    },
    {
      countryCode: "+56",
      country: "Chile",
      FlagIcon: ClFlagIcon,
      flagAlt:
        "The flag of Chile is composed of two equal horizontal bands of white and red, with a blue square of the same height as the white band superimposed in the canton. A white five-pointed star is centered in the blue square.",
    },
    {
      countryCode: "+57",
      country: "Colombia",
      FlagIcon: CoFlagIcon,
      flagAlt:
        "The flag of Colombia is composed of three horizontal bands of yellow, blue and red, with the yellow band twice the height of the other two bands.",
    },
    {
      countryCode: "+58",
      country: "Venezuela",
      FlagIcon: VeFlagIcon,
      flagAlt:
        "The flag of Venezuela is composed of three equal horizontal bands of yellow, blue and red. At the center of the blue band are eight five-pointed white stars arranged in a horizontal arc.",
    },
  ];

  const onChangeInputNameUser = (e) => {
    const value = e.target.value;
    setNameUser(value);
    if (!isValidName(value)) {
      setErrorMessageNameUser("Only letters and spaces are allowed.");
    } else {
      setErrorMessageNameUser("");
    }
  };

  const onBlurInputNameUser = (e) => {
    const value = e.target.value;
    if (!isValidName(value)) {
      setErrorMessageNameUser("Only letters and spaces are allowed.");
    } else {
      setErrorMessageNameUser("");
    }
  };

  const onChangeInputEmailUser = (e) => {
    const value = e.target.value;
    setEmailUser(value);
    if (!isValidEmail(value)) {
      setErrorMessageEmailUser("The email format is not valid.");
    } else {
      setErrorMessageEmailUser("");
    }
  };

  const onBlurInputEmailUser = (e) => {
    const value = e.target.value;
    if (!isValidEmail(value)) {
      setErrorMessageEmailUser("The email format is not valid.");
    } else {
      setErrorMessageEmailUser("");
    }
  };

  const onChangeInputPhoneUser = (e) => {
    const rawValue = e.target.value;
    const cleanedValue = rawValue.replace(/[\s-]/g, "");
    setPhoneUser(cleanedValue);
    if (!isValidPhone(cleanedValue)) {
      setErrorMessagePhoneUser("Only numbers are allowed.");
    } else {
      setErrorMessagePhoneUser("");
    }
  };

  const onBlurInputPhoneUser = (e) => {
    const value = e.target.value;
    const cleanedValue = value.replace(/[\s-]/g, "");
    setPhoneUser(cleanedValue);
    if (!isValidPhone(cleanedValue)) {
      setErrorMessagePhoneUser("Only numbers are allowed.");
    } else {
      setErrorMessagePhoneUser("");
    }
  };

  const formatPhoneNumber = (phoneNumber) => {
    const cleanedNumber = phoneNumber.toString().replace(/[\s-]/g, "");
    const formattedNumber = cleanedNumber.replace(/(\d{3})(?=\d)/g, "$1 ");
    return formattedNumber;
  };

  return {
    formatPhoneNumber,
    onChangeInputNameUser,
    onBlurInputNameUser,
    onChangeInputEmailUser,
    onBlurInputEmailUser,
    onChangeInputPhoneUser,
    onBlurInputPhoneUser,
    countryData,
  };
};
