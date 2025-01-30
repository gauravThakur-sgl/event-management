import { LoginForm } from "../../components/LoginForm";

export const Login = () => {
  return (
    <div className="min-h-svh bg-gradient-to-br from-green-200 via-white to-green-200">
      <div className="flex items-start justify-center p-4 mb-0 lg:py-8 lg:px-20 md:justify-start ">
        <a href="/">
          <h1 className="text-2xl font-bold text-green-600">Event</h1>
        </a>
      </div>
      <div className="flex w-full items-center justify-center p-6 md:p-10">
        <div className="w-full max-w-sm">
          <LoginForm />
        </div>
      </div>
    </div>
  );
};
