import { useNavigate } from "react-router-dom";
import { cn } from "../lib/utils";
import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { resetPasswordSchema } from "../zod/loginSchema";
import { useForm } from "react-hook-form";

type ResetPasswordData = z.infer<typeof resetPasswordSchema>;
export function ResetPasswordForm({ className, ...props }: React.ComponentPropsWithoutRef<"div">) {
  const navigate = useNavigate();
  const handleProceedToLogin = () => {
    navigate("/login");
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ResetPasswordData>({
    resolver: zodResolver(resetPasswordSchema),
  });

  const onSubmit = (data: ResetPasswordData) => {
    console.log("Form Data", data);
    handleProceedToLogin();
  };
  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Reset Password</CardTitle>
          <CardDescription>Enter your new Password</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col gap-6 pb-16">
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password">Enter New Password</Label>
                </div>
                <Input id="password" type="password" required {...register("password")} />
                {errors.password && <span className="text-sm text-red-600">{errors.password.message}</span>}
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password">Confirm Password</Label>
                </div>
                <Input id="password" type="password" required {...register("confirm")} />
                {errors.confirm && <span className="text-sm text-red-600">{errors.confirm.message}</span>}
              </div>
              <Button type="submit" className="w-full bg-green-500 hover:bg-green-600 text-white">
                Submit
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
