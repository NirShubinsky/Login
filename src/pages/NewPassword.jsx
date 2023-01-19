import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";

export default function ResetPassword() {
  const redirect = useNavigate();
  const initialValues = {
    newpassword1: '',
    newpassword2: ''
  };

  const validationSchema = Yup.object({
    newpassword1: Yup.string()
      .min(8, "הסיסמה צריכה להכיל לפחות 8 תווים")
      .matches(/[a-z]+/, "לפחות אות קטנה אחת")
      .matches(/[A-Z]+/, "לפחות אות גדולה אחת")
      .matches(/[@$!%*#?&_]+/, "לפחות סימן מיוחד אחד")
      .matches(/\d+/, "לפחות מספר אחד")
      .required("שכחת להקליד סיסמה"),
      newpassword2: Yup.string()
      .oneOf([Yup.ref('newpassword1'), null],' סיסמאות לא תואמות, אנא נסה שוב')
      .required("שכחת להקליד סיסמה")
      
  });
  

  const onSubmit = (values) => {
    
    console.log(values.newpassword1);

  }
      
  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-auto my-6 mx-auto max-w-3xl">
          {/*content*/}
          <div className="border-0 p-6 pb-0 pt-1 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            {/*header*/}
            <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
              <h3 className="text-4xl font-semibold">יצירת סיסמה חדשה</h3>
              <button
                className="p-1 mr-auto bg-transparent border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                onClick={() => redirect("/")}
              >
                <span className="bg-transparent text-black h-6 w-6 text-2xl block outline-none focus:outline-none">
                  x
                </span>
              </button>
            </div>
            {/*body*/}
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={onSubmit}
            >
              <Form className="relative p-6 pt-0 pb-0 flex-auto">
                <p className="mt-4 text-black text-lg leading-relaxed">
                  אנא הזן הסיסמה החדשה שלך שעליה לכלול:
                </p>
                <p className="mb-4">לפחות 16-8 תווים, אות קטנה, אות גדולה, סימן מיוחד ומספר</p>
                <div className="flex items-center justify-between">
                  <label htmlFor="email">סיסמה חדשה:</label>
                <Field
                  type="password"
                  id="newpassword1"
                  name="newpassword1"
                  className="rounded-md appearance-none relative block w-60 px-3 py-2 my-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-32D279 focus:border-[#04fd8c] focus:z-10 sm:text-sm"
                  placeholder="examplE!1"
                ></Field>
                
                </div>
                <ErrorMessage
                  name={"newpassword1"}
                  component="div"
                  className="text-red-500 font-semibold"
                />
               <div className="flex items-center justify-between">
                <label htmlFor="email">אישור סיסמה חדשה:</label>
               <Field
                  type="password"
                  id="newpassword2"
                  name="newpassword2"
                  className="rounded-md appearance-none relative block w-60 px-3 py-2 my-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-32D279 focus:border-[#04fd8c] focus:z-10 sm:text-sm"
                  placeholder="examplE!1"
                ></Field>
               </div>
                <ErrorMessage
                  name={"newpassword2"}
                  component="div"
                  className="text-red-500 font-semibold"
                />
                
                <div className="flex items-center justify-end p-6 pl-0 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-6 mb-1 ease-linear transition-all duration-150"
                    type="submit"
                  >
                    אפס סיסמא
                  </button>
                </div>
              </Form>
            </Formik>
            {/*footer*/}
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  );
}

