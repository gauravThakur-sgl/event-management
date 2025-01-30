import { SignUpForm } from "../../components/SignupForm";

export const Signup = () => {
  return (
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10 bg-login-image bg-cover">
      <div className="w-full max-w-md">
        <SignUpForm />
      </div>
    </div>
  );
};
