import { Button } from "@nextui-org/react";
import { Index } from ".";

export default function GoBackBtn() {
  const { handleGoBackBtn } = Index();

  return (
    <Button
      onClick={handleGoBackBtn}
      className="min-w-max bg-transparent px-0 text-cool-gray"
    >
      Go Back
    </Button>
  );
}
