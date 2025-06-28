"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormField } from "./ui/FormField";
import { FormInput } from "./ui/FormInput";
import { RegisterPayload } from "@/types/Auth";
import { RegisterSchema } from "@/lib/utils/AuthSchema";
import { supabase } from "@/lib/superbase";
import Button from "./ui/Button";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { makeRole } from "@/lib/utils/MakeRole";

export default function RegisterForm() {
  const router = useRouter();
  const [error, setError] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterPayload>({
    resolver: zodResolver(RegisterSchema),
  });
  const onSubmit = async (data: RegisterPayload) => {
    const { email, password, fullName } = data;
    const role = makeRole(email);
    const { data: response, error } = await supabase.auth.signUp({
      email,
      password,
      options: { data: { fullName, role } },
    });

    if (response.user) {
      const role = makeRole(email);
      await supabase.from("profiles").insert({
        id: response.user.id,
        full_name: fullName,
        role,
      });
    }
    if (error) {
      setError(error.message);
    } else {
      router.push("/login");
    }
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="mt-6 flex flex-col gap-5"
    >
      {error && <p>{error}</p>}
      <FormField label="Full name" error={errors.fullName?.message}>
        <FormInput
          {...register("fullName")}
          placeholder="Alexei Ward"
          error={!!errors.fullName}
        />
      </FormField>
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
          type="password"
        />
      </FormField>
      <FormField
        label="Confirm password"
        error={errors.confirmPassword?.message}
      >
        <FormInput
          {...register("confirmPassword")}
          placeholder="*********"
          error={!!errors.confirmPassword}
          type="password"
        />
      </FormField>
      <Button variant="primary" size="large" type="submit">
        Sign up
      </Button>
    </form>
  );
}
