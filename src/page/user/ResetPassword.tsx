import { ResetPasswordForm } from "../../components/ResetpasswordForm";

export const ResetPassword = () => {
  return (
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10 bg-gradient-to-br from-green-200 via-white to-green-100">
      <div className="w-full max-w-sm">
        <ResetPasswordForm />
      </div>
    </div>
  );
};
