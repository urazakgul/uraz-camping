import { Formik, useFormik } from "formik";
import Input from "@/components/form/Input";
import Title from "@/components/ui/Title";
import { loginSchema } from "@/schema/login";
import Link from "next/link";
import { AiFillGithub } from 'react-icons/ai';

const Login = () => {
  const onSubmit = async (values, actions) => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    actions.resetForm();
  };

  const { values, errors, touched, handleSubmit, handleChange, handleBlur } =
    useFormik({
      initialValues: {
        email: "",
        password: "",
      },
      onSubmit,
      validationSchema: loginSchema,
    });

  const inputs = [
    {
      id: 1,
      name: "email",
      type: "email",
      placeholder: "Email Address",
      value: values.email,
      errorMessage: errors.email,
      touched: touched.email,
    },
    {
      id: 2,
      name: "password",
      type: "password",
      placeholder: "Password",
      value: values.password,
      errorMessage: errors.password,
      touched: touched.password,
    },
  ];
  return (
    <div className="container mx-auto py-6">
      <form className="flex flex-col items-center my-20 sm:w-1/2 w-full mx-auto" onSubmit={handleSubmit}>
        <Title addClass="text-4xl mb-6">Login</Title>
        <div className="flex flex-col gap-y-2 w-full">
          {inputs.map((input) => (
            <Input
              key={input.id}
              {...input}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          ))}
        </div>
        <div className="flex flex-col w-full gap-y-3 mt-4 text-xl">
          <button type="submit" className="btn-primary flex items-center justify-center gap-x-1">Login</button>
          <button type="submit" className="btn-primary !bg-secondary flex items-center justify-center gap-x-1"> <AiFillGithub /> GitHub</button>
          <Link href="/auth/register">
            <span className="text-sm underline cursor-pointer text-gray-600">Don`t have an account yet?</span>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Login;