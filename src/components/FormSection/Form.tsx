import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { emailPattern } from "../../constant/pattern";
import { Button, Input } from "../widgets";

const TermsServices = (): JSX.Element => {
  return (
    <p className="text-gray-300 text-xs text-center mx-6 mt-3 mb-0 md:my-4 leading-5">
      By clicking the button, you are agreeing to our{" "}
      <a className="text-red-default font-bold" href="#">
        Terms and Services
      </a>
    </p>
  );
};

type FormValues = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};

const Form = (): JSX.Element => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = (data: FormValues) =>
    console.log(data);

  return (
    <form
      className="w-full rounded-xl p-6 md:p-8 shadow-solid bg-white flex flex-col"
      onSubmit={handleSubmit(onSubmit)}
    >
      <Input
        id="firstName"
        placeholder="First Name"
        register={{ ...register("firstName", { required: true }) }}
        error={errors.firstName}
        errorText="First Name cannot be empty"
      />

      <Input
        id="lastName"
        placeholder="Last Name"
        register={{ ...register("lastName", { required: true }) }}
        error={errors.lastName}
        errorText="Last Name cannot be empty"
      />

      <Input
        id="email"
        placeholder="Email Address"
        type="text"
        register={{
          ...register("email", { required: true, pattern: emailPattern }),
        }}
        error={errors.email}
        errorText="Looks like this is not an email"
      />

      <Input
        id="password"
        placeholder="Password"
        type="password"
        register={{ ...register("password", { required: true }) }}
        error={errors.password}
        errorText="Password cannot be empty"
      />

      <Button
        className="bg-green-default hover:bg-green-light shadow-inner rounded"
        type="submit"
        value="CLAIM YOUR FREE TRIAL"
      />

      <TermsServices />
    </form>
  );
};

export default Form;
