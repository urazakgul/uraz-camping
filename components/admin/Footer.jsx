import React, { useState } from "react";
import { useFormik } from "formik";
import Title from "@/components/ui/Title";
import Input from "@/components/form/Input";
import { footerSchema } from "@/schema/footer";

const Footer = () => {
  const [linkAddress, setLinkAddress] = useState("");

  const onSubmit = async (values, actions) => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    actions.resetForm();
    setAccommodationType("");
  };

  const { values, errors, touched, handleChange, handleSubmit, handleBlur } =
    useFormik({
      initialValues: {
        location: "",
        email: "",
        phoneNumber: "",
        desc: "",
        day: "",
        time: "",
      },
      onSubmit,
      validationSchema: footerSchema,
    });

  const inputs = [
    {
      id: 1,
      name: "location",
      type: "text",
      placeholder: "Location",
      value: values.location,
      errorMessage: errors.location,
      touched: touched.location,
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "Email Address",
      value: values.email,
      errorMessage: errors.email,
      touched: touched.email,
    },
    {
      id: 3,
      name: "phoneNumber",
      type: "number",
      placeholder: "Phone Number",
      value: values.phoneNumber,
      errorMessage: errors.phoneNumber,
      touched: touched.phoneNumber,
    },
    {
      id: 4,
      name: "desc",
      type: "text",
      placeholder: "Description",
      value: values.desc,
      errorMessage: errors.desc,
      touched: touched.desc,
    },
    {
      id: 5,
      name: "day",
      type: "text",
      placeholder: "Day",
      value: values.day,
      errorMessage: errors.day,
      touched: touched.day,
    },
    {
      id: 6,
      name: "time",
      type: "text",
      placeholder: "Time",
      value: values.time,
      errorMessage: errors.time,
      touched: touched.time,
    },
  ];

  return (
    <>
      <form className="lg:p-8 flex-1 lg:mt-0 mt-5" onSubmit={handleSubmit}>
        <Title addClass="text-3xl text-center">Footer</Title>
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
        <div className="mt-3 flex justify-between items-center">
          <div className="flex gap-4 items-center">
            <Input placeholder="Link Address" value="https://" onChange="" />
          </div>
        </div>
        <button type="submit" className="btn-primary mt-3 lg:mb-0 mb-4">
          Update
        </button>
      </form>
    </>
  );
};

export default Footer;