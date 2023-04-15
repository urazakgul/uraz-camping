import { Formik, useFormik } from "formik";
import Input from "@/components/form/Input";
import Title from "@/components/ui/Title";
import { adminSchema } from "@/schema/admin";
import Link from "next/link";

const Login = () => {
  const onSubmit = async (values, actions) => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    actions.resetForm();
  };

  const { values, errors, touched, handleSubmit, handleChange, handleBlur } =
    useFormik({
      initialValues: {
        username: "",
        password: "",
      },
      onSubmit,
      validationSchema: adminSchema,
    });

  const inputs = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "Username",
      value: values.username,
      errorMessage: errors.username,
      touched: touched.username,
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
    <div className="container mx-auto py-16">
      <form className="flex flex-col items-center my-20 sm:w-1/2 w-full mx-auto" onSubmit={handleSubmit}>
        <Title addClass="text-4xl mb-6">Admin Login</Title>
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
          <Link href="/">
            <span className="text-sm underline cursor-pointer text-gray-600">Homepage</span>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Login;