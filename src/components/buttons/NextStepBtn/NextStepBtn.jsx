import { Button } from "@nextui-org/react";
import Index from ".";

export default function NextStepBtn() {
  const { handleNextStepBtn } = Index();

  return (
    <Button
      onClick={handleNextStepBtn}
      className="text-white"
      radius="sm"
      color="primary"
    >
      Next Step
    </Button>
  );
}
