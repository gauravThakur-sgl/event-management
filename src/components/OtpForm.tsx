import { useNavigate } from "react-router-dom";
import { cn } from "../lib/utils";
import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { InputOTP, InputOTPGroup, InputOTPSeparator, InputOTPSlot } from "./ui/inputOtp";
import { proceedToLogin } from "../hooks/userHook";

export function OtpForm({ className, ...props }: React.ComponentPropsWithoutRef<"div">) {
  const navigate = useNavigate();
  const handleProceed = () => {
    navigate("/reset-password");
  };
  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl text-center py-2">Enter OTP</CardTitle>
          <CardDescription className="text-justify">
            A six-digit code has been sent to your email address. Enter the code to reset your password.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form className="pb-28 pt-2" onSubmit={handleProceed}>
            <div className="flex flex-col gap-6">
              <div className="grid gap-2 justify-center">
                <InputOTP maxLength={6} required>
                  <InputOTPGroup>
                    <InputOTPSlot index={0} />
                    <InputOTPSlot index={1} />
                    <InputOTPSlot index={2} />
                  </InputOTPGroup>
                  <InputOTPSeparator />
                  <InputOTPGroup>
                    <InputOTPSlot index={3} />
                    <InputOTPSlot index={4} />
                    <InputOTPSlot index={5} />
                  </InputOTPGroup>
                </InputOTP>
              </div>
              <Button type="submit" className="w-full bg-green-500 hover:bg-green-600 text-white">
                Proceed
              </Button>
            </div>
            <Button
              variant="outline"
              className="w-full text-green-600 mt-2 border-none hover:text-green-600 hover:bg-white hover:underline"
              onClick={() => proceedToLogin(navigate)}
            >
              Return to Login
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
