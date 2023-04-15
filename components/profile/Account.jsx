import React from "react";
import { useFormik } from "formik";
import Title from "@/components/ui/Title";
import Input from "@/components/form/Input";
import { profileSchema } from "@/schema/profile";

const Account = () => {
  const onSubmit = async (values, actions) => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    actions.resetForm();
    setAccommodationType("");
  };

  const { values, errors, touched, handleChange, handleSubmit, handleBlur } =
    useFormik({
      initialValues: {
        fullName: "",
        phoneNumber: "",
        email: "",
        city: "",
        startDate: "",
        endDate: "",
      },
      onSubmit,
      validationSchema: profileSchema,
    });

  const inputs = [
    {
      id: 1,
      name: "fullName",
      type: "text",
      placeholder: "Full Name",
      value: values.fullName,
      errorMessage: errors.fullName,
      touched: touched.fullName,
    },
    {
      id: 2,
      name: "phoneNumber",
      type: "number",
      placeholder: "Phone Number",
      value: values.phoneNumber,
      errorMessage: errors.phoneNumber,
      touched: touched.phoneNumber,
    },
    {
      id: 3,
      name: "email",
      type: "email",
      placeholder: "Email Address",
      value: values.email,
      errorMessage: errors.email,
      touched: touched.email,
    },
    {
      id: 4,
      name: "city",
      type: "text",
      placeholder: "City",
      value: values.city,
      errorMessage: errors.city,
      touched: touched.city,
    },
    {
      id: 5,
      name: "startDate",
      type: "datetime-local",
      value: values.startDate,
      errorMessage: errors.startDate,
      touched: touched.startDate,
    },
    {
      id: 6,
      name: "endDate",
      type: "datetime-local",
      value: values.endDate,
      errorMessage: errors.endDate,
      touched: touched.endDate,
    },
  ];

  return (
    <>
      <form className="lg:p-8 flex-1 lg:mt-0 mt-5" onSubmit={handleSubmit}>
        <Title addClass="text-3xl text-center">Account Settings</Title>
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-3 mt-4">
          {inputs.map((input) => (
            <Input
              key={input.id}
              {...input}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          ))}
        </div>
        <button type="submit" className="btn-primary mt-3 lg:mb-0 mb-4">Update</button>
      </form>
    </>
  );
};

export default Account;