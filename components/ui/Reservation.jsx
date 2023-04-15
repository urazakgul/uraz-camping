import React, { useState } from "react";
import Input from "../form/Input";
import Title from "./Title";
import { useFormik } from "formik";
import { reservationSchema } from "@/schema/reservation";

const Reservation = () => {

  const onSubmit = async (values, actions) => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    actions.resetForm();
    setAccommodationType("");
  }

  const {values, errors, touched, handleChange, handleSubmit, handleBlur} = useFormik({
    initialValues: {
      fullName: "",
      phoneNumber: "",
      email: "",
      persons: "",
      startDate: "",
      endDate: ""
    },
    onSubmit,
    validationSchema: reservationSchema,
  })

  const [accommodationType, setAccommodationType] = useState("");

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
      name: "persons",
      type: "number",
      placeholder: "Number of People",
      value: values.persons,
      errorMessage: errors.persons,
      touched: touched.persons,
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
    {
      id: 7,
      name: "accommodationType",
      type: "select",
      options: [
        {
          value: "tent",
          label: "Tent",
        },
        {
          value: "caravan",
          label: "Caravan",
        },
        {
          value: "bungalow",
          label: "Bungalow",
        },
      ],
    },
  ];

  return (
    <div className="container mx-auto py-12">
      <Title addClass="text-[40px] mb-10 text-center">Booking Details</Title>
      <div className="flex justify-between flex-wrap gap-10">
        <form className="lg:flex-1 w-full" onSubmit={handleSubmit}>
          <div className="flex flex-col gap-y-3">
            {inputs.map((input) =>
              input.type === "select" ? (
                <div key={input.id} className="flex flex-col gap-y-2">
                  <label>{input.placeholder}</label>
                  <select
                    name={input.name}
                    value={accommodationType}
                    required
                    className="border border-primary p-3 h-[56px] -mt-2`"
                    onChange={(e) => setAccommodationType(e.target.value)}
                  >
                    <option value="" disabled>Choose an Accommodation Type</option>
                    {input.options.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>
              ) : (
                <Input key={input.id} {...input} onChange={handleChange} onBlur={handleBlur} />
              )
            )}
          </div>
          <button className="btn-primary mt-4" type="submit">BOOK NOW</button>
        </form>
        <div className="lg:flex-1 w-full">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3199.4864937361913!2d27.358572890219197!3d36.686845802616716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14be1db0ea409baf%3A0x205c3f845c274ecc!2sKnidos%20Lighthouse!5e0!3m2!1str!2str!4v1681315755679!5m2!1str!2str"
            width="100%"
            height="100%"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Reservation;