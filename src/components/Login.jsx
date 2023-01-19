import { loginFields } from "../constants/formFields";
import FormAction from "./FormAction";
import FormExtra from "./FormExtra";
import {Formik, Form, Field, ErrorMessage} from "formik";
import * as Yup from "yup";
import { useState } from 'react'
import React from "react";
import TwoFa from "./TwoFa";

const fixedInputClass="rounded-md appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-32D279 focus:border-[#04fd8c] focus:z-10 sm:text-sm"

const fields = loginFields;
let fieldsState = {};
fields.forEach((field) => (fieldsState[field.id] = ""));

const initialValues = {
  username: "",
  password: "",
};

const validationSchema = Yup.object({
  username: Yup.string()
    .min(3, "הסיסמה צריכה להכיל לפחות 3 תווים")
    .matches(/\w/, "אותיות בלועזית")
    .required("שכחת להקליד שם משתמש"),
  password: Yup.string()
    .min(8, "הסיסמה צריכה להכיל לפחות 8 תווים")
    .matches(/[a-z]+/, "לפחות אות קטנה אחת")
    .matches(/[A-Z]+/, "לפחות אות גדולה אחת")
    .matches(/[@$!%*#?&_]+/, "לפחות סימן מיוחד אחד")
    .matches(/\d+/, "לפחות מספר אחד")
    .required("שכחת להקליד סיסמה"),
});

export default function Login() {

  const onSubmit = (values) => {
    console.log("form data", values);
    authenticateUser(values);
  };

  const [stage, setStage] = useState(0);
  const [errorMsg, setErrorMsg] = useState("");

  //Handle Login API Integration here
  const authenticateUser = (values) => {
    fetch("https://i-jet.scienceart.co.il/api/get_token", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: values.username,
        password: values.password,
        subDomain: "seva",
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if ("msg" in data) setErrorMsg(data.msg);
        else setErrorMsg("");
        if (data.user_name) {
          setStage(1);
            setUserInfo({firstName: data.first_name, lastName: data.last_name})
          //for next button setStage(prev=> prev+1)
          //for prev button setStage(prev=> prev-1)
          //redirect to 2 stage authenticateUser
        }
        console.log(data);
      });
  };
  
  const [userInfo, setUserInfo] = useState({firstName: '', lastName: ''});
  
    return (
        <>
          {stage === 0 && (
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={onSubmit}
            >
              <Form className="mt-8 space-y-6">
                {fields.map((field) => (
                  <div key={field.id} className="mt-5">
                    <label htmlFor={field.labelFor} className="text-white">
                      {field.labelText}
                    </label>
                    <Field
                      className={fixedInputClass}
                      id={field.id}
                      name={field.name}
                      type={field.type}
                      placeholder={field.placeholder}
                    />
                    <ErrorMessage
                      name={field.name}
                      component="div"
                      className="text-red-500 font-semibold"
                    />
                  </div>
                ))}
                <div className="text-red-500 text-center font-semibold">{errorMsg !== "" && errorMsg}</div>
                <FormExtra />
                <FormAction text="התחברות" />
              </Form>
            </Formik>
          )}
    
          {stage === 1 && <TwoFa setStage={setStage} userInfo={userInfo} fixedInputClass={fixedInputClass} />}
        </>
      );
    }