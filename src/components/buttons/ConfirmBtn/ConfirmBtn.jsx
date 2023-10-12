import { Button } from "@nextui-org/react";
import { useContext } from "react";
import { FormContext } from "../../../context/FormContextProvider";

export default function ConfirmBtn() {
  const { setIsFormSent, countryPrefixSelected, setPhoneUser } =
    useContext(FormContext);

  return (
    <Button
      onClick={() => {
        setIsFormSent(true);
        setPhoneUser(
          (prevPhoneUser) => `${countryPrefixSelected}${prevPhoneUser}`,
        );
        setTimeout(() => {
          window.location.reload();
        }, 5000);
      }}
      className="text-white"
      radius="sm"
      color="secondary"
    >
      Confirm
    </Button>
  );
}
