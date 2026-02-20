import LoginRegisterCard from "@/components/LoginRegisterCard";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Form } from "@/components/ui/form";
import TextField from "@/components/TextField";
import DButton from "@/components/DButton";
import { useNavigate } from "react-router-dom";

const formSchema = z
  .object({
    name: z.string().min(2, "Minimal 2 karakter"),
    email: z.string().email("Email tidak valid"),
    phoneNumber: z.string().min(10, "Minimal 10 digit"),
    password: z.string().min(4, "Minimal 4 karakter"),
    confirmPassword: z.string().min(4),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Password tidak sama",
    path: ["confirmPassword"],
  });

const Register = () => {
  const navigate = useNavigate();

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phoneNumber: "",
      password: "",
      confirmPassword: "",
    },
  });

function onSubmit(values: z.infer<typeof formSchema>) {
  console.log(values);

  navigate("/login", {
    state: { success: "Pendaftaran berhasil, Silakan login." }
  });
}
  return (
    <LoginRegisterCard
      title="Pendaftaran Akun"
      subtitle="Yuk, daftarkan akunmu sekarang juga!"
    >
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-full flex flex-col gap-4"
        >
          <TextField
            control={form.control}
            name="name"
            label="Nama Lengkap"
            type="text"
            required
          />
          <TextField
            control={form.control}
            name="email"
            label="E-Mail"
            type="email"
            required
          />
          <TextField
            control={form.control}
            name="phoneNumber"
            label="No. Hp"
            type="tel"
            required
          />
          <TextField
            control={form.control}
            name="password"
            label="Kata Sandi"
            type="password"
            required
          />
          <TextField
            control={form.control}
            name="confirmPassword"
            label="Konfirmasi Kata Sandi"
            type="password"
            required
          />

          <DButton title="Daftar" style="primary" type="submit" />
          <DButton
            title="Masuk"
            style="secondary"
            type="button"
            onClick={() => navigate("/login")}
          />
        </form>
      </Form>
    </LoginRegisterCard>
  );
};

export default Register;
