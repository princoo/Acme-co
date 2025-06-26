import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormField } from "./ui/FormField";
import { FormInput } from "./ui/FormInput";
import { LoginPayload } from "@/types/Auth";
import { LoginSchema } from "@/lib/utils/AuthSchema";
import Button from "./ui/Button";
import AuthMethods from "./AuthMethods";
import Link from "next/link";

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginPayload>({
    resolver: zodResolver(LoginSchema),
  });
  const onSubmit = (data: LoginPayload) => {
    console.log(data);
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="mt-6 flex flex-col gap-5"
    >
      <FormField label="Email" error={errors.email?.message}>
        <FormInput
          {...register("email")}
          placeholder="Alexei@gmail.com"
          error={!!errors.email}
        />
      </FormField>
      <FormField label="Password" error={errors.password?.message}>
        <FormInput
          {...register("password")}
          placeholder="*********"
          error={!!errors.password}
        />
      </FormField>
      <Link
        href="#"
        className="text-sm text-gray-secondary text-start underline"
      >
        Forgot password?
      </Link>

      <Button variant="outline" size="large" type="submit">
        Sign in
      </Button>
      <AuthMethods />
    </form>
  );
}
