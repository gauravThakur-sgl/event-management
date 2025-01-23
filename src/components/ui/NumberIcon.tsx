interface INumberIconProps {
  icon: React.ReactNode;
  description: string;
  number?: React.ReactNode;
}
export const NumberIcon = ({ icon, description, number }: INumberIconProps) => {
  return (
    <div className=" flex flex-col justify-center items-center gap-4">
      <span>{icon}</span>
      <h2 className="text-green-500 font-semibold text-3xl lg:text-5xl tracking-tight px-2">{number}</h2>
      <p className="text-gray-800 text-medium mt-2">{description}</p>
    </div>
  );
};
