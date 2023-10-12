import { useContext } from "react";
import { FormContext } from "../../../context/FormContextProvider";

import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Input,
} from "@nextui-org/react";

import { Index } from ".";
import { ChevronDownIcon } from "../../icons";

export default function SectionStepOne() {
  const {
    nameUser,
    errorMessageNameUser,
    emailUser,
    errorMessageEmailUser,
    phoneUser,
    errorMessagePhoneUser,
    countryPrefixSelected,
    setCountryPrefixSelected,
  } = useContext(FormContext);

  const {
    formatPhoneNumber,
    onChangeInputNameUser,
    onChangeInputEmailUser,
    onChangeInputPhoneUser,
    onBlurInputNameUser,
    onBlurInputEmailUser,
    onBlurInputPhoneUser,
    countryData,
  } = Index();

  const country = countryData.find(
    (name) => name.countryCode === countryPrefixSelected,
  );

  const Icon = country ? country.FlagIcon : null;

  return (
    <div className="flex flex-col gap-4">
      <Input
        classNames={{
          input:
            "placeholder:text-cool-gray placeholder:font-ubuntu-500 capitalize placeholder:normal-case",
          label: "outline-red-500",
        }}
        value={nameUser}
        color={errorMessageNameUser ? "danger" : "primary"}
        variant="bordered"
        radius="sm"
        type="text"
        label="Name"
        labelPlacement="outside"
        placeholder="e.g. Stephen King"
        isRequired
        errorMessage={errorMessageNameUser}
        onChange={onChangeInputNameUser}
        onBlur={onBlurInputNameUser}
      />
      <Input
        classNames={{
          input: "placeholder:text-cool-gray placeholder:font-ubuntu-500",
        }}
        value={emailUser}
        color={errorMessageEmailUser ? "danger" : "primary"}
        variant="bordered"
        radius="sm"
        type="email"
        label="Email Address"
        labelPlacement="outside"
        placeholder="e.g. stephenking@lorem.com"
        isRequired
        errorMessage={errorMessageEmailUser}
        onChange={onChangeInputEmailUser}
        onBlur={onBlurInputEmailUser}
      />
      <div className="flex">
        <Dropdown placement="bottom-start">
          <DropdownTrigger>
            <Button
              radius="sm"
              className="h-14 rounded-r-none"
              variant="flat"
              startContent={
                Icon ? <Icon className="w-6" /> : <span className="w-6" />
              }
            >
              <ChevronDownIcon style={{ transform: "rotate(180deg)" }} />
            </Button>
          </DropdownTrigger>
          <DropdownMenu
            disallowEmptySelection
            selectionMode="single"
            selectedKeys={[countryPrefixSelected]}
            onSelectionChange={setCountryPrefixSelected}
            variant="bordered"
            aria-label="Display calling code options."
          >
            {countryData.map(({ FlagIcon, country, countryCode }) => {
              return (
                <DropdownItem
                  onClick={() => setCountryPrefixSelected(countryCode)}
                  className="gap-4"
                  key={countryCode}
                  aria-label={`Select ${country} calling code`}
                  startContent={<FlagIcon className="w-6" />}
                >
                  <span className="font-ubuntu-500">{country}</span> (
                  {countryCode})
                </DropdownItem>
              );
            })}
          </DropdownMenu>
        </Dropdown>
        <Input
          classNames={{
            input: "placeholder:text-cool-gray placeholder:font-ubuntu-500",
            inputWrapper: "rounded-l-none",
          }}
          value={formatPhoneNumber(phoneUser)}
          color={errorMessagePhoneUser ? "danger" : "primary"}
          variant="faded"
          radius="sm"
          type="tel"
          label="Phone Number"
          labelPlacement="inside"
          placeholder="e.g. 987 654 321"
          isRequired
          errorMessage={errorMessagePhoneUser}
          onChange={onChangeInputPhoneUser}
          onBlur={onBlurInputPhoneUser}
          startContent={
            <span className="text-sm text-marine-blue">
              {countryPrefixSelected}
            </span>
          }
        />
      </div>
    </div>
  );
}
