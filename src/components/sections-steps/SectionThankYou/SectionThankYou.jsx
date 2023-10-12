import { ThankYouIcon } from "../../icons";

export default function SectionThankYou() {
  return (
    <div className="w-full max-w-[485px] self-center rounded-xl px-4 lg:mx-auto lg:p-0">
      <div className="flex min-h-[400px] flex-col justify-center rounded-xl bg-white px-6 lg:min-h-[552px]">
        <ThankYouIcon className="mb-5 w-[58px] self-center" />
        <h2
          className="text-center font-ubuntu-700 text-2xl 
        text-marine-blue lg:text-3xl"
        >
          Thank you!
        </h2>
        <p className="text-center text-cool-gray">
          Thanks for confirming your subscription! We hope you have fun using
          our platform. If you ever need support, please feel free to email us
          at support@loremgaming.com
        </p>
      </div>
    </div>
  );
}
