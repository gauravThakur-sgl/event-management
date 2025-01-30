import { NavigateFunction } from "react-router-dom";
export const proceedToLogin = (navigate: NavigateFunction) => {
  navigate("/login");
};
export const proceedToSignup = (navigate: NavigateFunction) => {
  navigate("/signup");
};
