import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useState } from "react";


export const Form = () => {

const [flag, setFlag] = useState(true)

  const schema = yup.object().shape({
    fullName: yup.string().required("Your Full Name is Required!"),
    //email: yup.string().email().required("Enter email ID"),
    email: yup.string().matches(/^([A-Za-z])([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/, "Valid E-mail required").required("Enter Mail ID ..."),
    age: yup.number().positive().integer().min(18).required(""),
    password: yup.string().min(4).max(20).required(),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password"), null], "Passwords Don't Match")
      .required(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);
    if(flag) setFlag(!flag);
  };


  return (
   (flag ? (<div className="flex justify-center items-center h-screen bg-slate-200">
      <div
        id="form"
        className="block bg-slate-50 p-6 rounded-xl shodow-md shadow-slate-300 w-[30%]"
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <h2 className="text-blue-700 text-3xl font-semibold my-4">Register</h2>
          <div id="fullName" className="flex flex-row">
            <div id="firstName" className="w-1/2 mr-1">
              <input
                type="text"
                placeholder="First Name..."
                className="h-8 w-full rounded-md border border-slate-300 text-sm pl-2 bg-transparent outline-blue-600 shadow-sm"
                {...register("fullName")}
              />
            </div>
            <div id="lastName" className="w-1/2 mr-1">
              <input
                type="text"
                name=""
                id="lname"
                placeholder="Last Name..."
                className="h-8 w-full rounded-md border border-slate-300 text-sm pl-2 bg-transparent outline-blue-600 shadow-sm"
              />
            </div>
          </div>
          <p className="text-red-500 text-center">{errors.fullName?.message}</p>
          <br></br>

          <input
            type="text"
            placeholder="Email..."
            {...register("email")}
            className="h-8 w-full rounded-md border border-slate-300 text-sm pl-2 bg-transparent outline-blue-600 shadow-sm"
          />
          <p className="text-red-500 text-center">{errors.email?.message}</p>
          <br></br>

          <input
            type="number"
            placeholder="Age..."
            {...register("age")}
            className="h-8 w-full rounded-md border border-slate-300 text-sm pl-2 bg-transparent outline-blue-600 shadow-sm"
          />
          <p className="truncate text-red-500 text-center  ">{errors.age?.message}</p>
          <br></br>
          <input
            type="password"
            placeholder="Password..."
            {...register("password")}
            className="h-8 w-full rounded-md border border-slate-300 text-sm pl-2 bg-transparent outline-blue-600 shadow-sm"
          />
          <p className="text-red-500 text-center">{errors.password?.message}</p>
          <br></br>
          <input
            type="password"
            placeholder="Confirm Password..."
            {...register("confirmPassword")}
            className="h-8 w-full rounded-md border border-slate-300 text-sm pl-2 bg-transparent outline-blue-600 shadow-sm"
          />
          <p className="text-red-500 text-center">
            {errors.confirmPassword?.message}
          </p>
          <br></br>
          <input
            type="submit"
            className="bg-blue-700 w-full h-10 cursor-pointer text-white rounded-md hover:bg-blue-600 hover:outline outline-2 outline-blue-600 outline-offset-2 text-sm"
          />
        </form>
      </div>
    </div>) :(<div className="text-center text-xl text-green-700">Login Successful... </div>)
  ));
};
