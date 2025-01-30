import { ForgotPasswordForm } from "../../components/ForgotPasswordForm";
export const ForgotPassword = () => {
  return (
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10 bg-login-image">
      <div className="w-full max-w-sm">
        <ForgotPasswordForm />
      </div>
    </div>
  );
};
