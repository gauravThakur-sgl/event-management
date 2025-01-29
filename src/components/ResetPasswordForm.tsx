import { useNavigate } from "react-router-dom";
import { cn } from "../lib/utils";
import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Input } from "./ui/input";
import { Label } from "./ui/label";

export function ResetPasswordForm({ className, ...props }: React.ComponentPropsWithoutRef<"div">) {
  const navigate = useNavigate();
  const handleReturnToLogin = () => {
    navigate("/login");
  };
  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl text-center py-2">Forgot Your Password</CardTitle>
          <CardDescription className="text-justify">
            Enter email address associated with your account and you will receive an email to reset your password.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form className="pb-28 pt-2">
            <div className="flex flex-col gap-6">
              <div className="grid gap-2 ">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="user@example.com" required />
              </div>
              <Button type="submit" className="w-full bg-green-500 hover:bg-green-600 text-white">
                Submit
              </Button>
            </div>
            <Button
              variant="outline"
              className="w-full text-green-600 mt-2 border-none hover:text-green-600 hover:bg-white hover:underline"
              onClick={handleReturnToLogin}
            >
              Return to Login
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
