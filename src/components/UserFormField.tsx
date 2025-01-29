import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "./ui/form";
import { Input } from "./ui/input";
interface IFormFieldsProps {
  form: any;
  type: string;
  name: string;
  label: string;
  placeholder?: string;
  required?: boolean;
  // optional?: boolean;
  // disabled?: boolean;
  className?: string;
}

export const UserFormField = ({ form, type, name, label, placeholder, required, className }: IFormFieldsProps) => {
  switch (type) {
    case "email":
      return (
        <FormField
          name={name}
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                {label} {required && <Required />}
              </FormLabel>
              <FormControl>
                <Input type={type} {...field} placeholder="email@example.com" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      );
    case "password":
      return (
        <FormField
          control={form.control}
          name={name}
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                {label} {required && <Required />}
              </FormLabel>
              <FormControl>
                <Input type={type} {...field} placeholder="password" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      );
    default:
      return (
        <FormField
          control={form.control}
          name={name}
          render={({ field }) => (
            <FormItem className={className}>
              <FormLabel>
                {label} {required && <Required />}
              </FormLabel>
              <FormControl>
                <Input type="text" {...field} placeholder={placeholder} className="w-full" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      );
  }
};

const Required = () => <span className="ml-px text-red-500"></span>;
