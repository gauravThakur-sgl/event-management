import { Button } from "../components/ui/button";

export const LandingPage = () => {
  return (
    <div className="flex justify-between items-center p-4">
      <h2 className="font-bold">Event Management</h2>
      <div>
        <ul className="flex justify-center items-center gap-4 text-lg text-slate-400">
          <li>Feature</li>
          <li>Pricing</li>
          <li>Support</li>
          <li>Download</li>
          <li>About us</li>
        </ul>
      </div>
      <div>
        <Button variant="outline">Login</Button>
        <Button variant="default">Signup</Button>
      </div>
    </div>
  );
};
