import { OtpForm } from "../../components/OtpForm";

export const Otp = () => {
  return (
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10 bg-login-image bg-cover">
      <div className="w-full max-w-sm">
        <OtpForm />
      </div>
    </div>
  );
};
