import LoginRegisterCard from "@/components/LoginRegisterCard";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import google from "@/assets/google.svg";
import { Form } from "@/components/ui/form";
import TextField from "@/components/TextField";
import DButton from "@/components/DButton";
import { useNavigate, useLocation } from "react-router-dom";

const formSchema = z.object({
  email: z.string().email("Email tidak valid"),
  password: z.string().min(4, "Minimal 4 karakter"),
});

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const successMessage = location.state?.success;

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log("Login sukses:", values);
    navigate("/");
  }

  return (
    <LoginRegisterCard
      title="Masuk ke Akun"
      subtitle="Yuk, lanjutin belajar di videobelajar."
    >
      {successMessage && (
        <div className="bg-green-100 text-green-700 p-3 rounded-md mb-4">
          {successMessage}
        </div>
      )}

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-full flex flex-col gap-4"
        >
          <TextField
            control={form.control}
            name="email"
            label="E-Mail"
            type="email"
            required
          />

          <TextField
            control={form.control}
            name="password"
            label="Kata Sandi"
            type="password"
            required
          />

          <p className="cursor-pointer ml-auto text-[#4A505C]">
            Lupa Password?
          </p>
          <DButton title="Masuk" style="primary" type="submit" />
          <DButton
            title="Daftar"
            style="secondary"
            type="button"
            onClick={() => navigate("/register")}
          />

          <div className="relative h-[22px] my-2">
            <div className="absolute inset-0 h-[2px] bg-[#F1F1F1]"></div>
            <p className="absolute px-2 inset-x-0 bg-white mx-auto max-w-fit text-[#4A505C]">
              atau
            </p>
          </div>

          <DButton
            title="Masuk dengan Google"
            style="ghost"
            imageSrc={google}
          />
        </form>
      </Form>
    </LoginRegisterCard>
  );
};

export default Login;
