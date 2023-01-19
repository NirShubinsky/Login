import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import emailjs from '@emailjs/browser';


export default function ResetPassword() {
  const redirect = useNavigate();
  const initialValues = {
    email: "",
    message: "http://localhost:3000/newpassword"
  };

  const validationSchema = Yup.object({
    email: Yup.string().email("יש להכניס כתובת אימייל נכונה!"),
  });
  
  const onSubmit = (values) => {
        emailjs.send('service_wu7gtwl','template_onzhmv6', values,'dURsI-32Y8u946qiH')
            .then(res=>{
            console.log(res)})
            .catch(err=>{
            console.log(err)
          });
          alert('קישור לאיפוס סיסמא נשלח בהצלחה!')
        }
    
 
  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-auto my-6 mx-auto max-w-3xl">
          {/*content*/}
          <div className="border-0 p-6 pt-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            {/*header*/}
            <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
              <h3 className="text-4xl font-semibold">איפוס סיסמה</h3>
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
              <Form className="relative p-6 pb-0 pt-1 flex-auto">
                <p className="my-4 pb-4 text-black text-lg leading-relaxed">
                אנא הזן את כתובת המייל שלך,<br></br> שאליה ישלח קישור שיפנה אותך למסך איפוס סיסמא
                </p>
                <Field
                  type="email"
                  id="email"
                  name="email"
                  className="rounded-md appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-32D279 focus:border-[#04fd8c] focus:z-10 sm:text-sm"
                  placeholder="example@gmail.com"
                ></Field>
                <ErrorMessage
                  name={"email"}
                  component="div"
                  className="text-red-500 font-semibold"
                />
                <div className="flex items-center justify-end p-6 pl-0 pb-0 pt-12 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-6 mb-1 ease-linear transition-all duration-150"
                    type="submit"
                  >
                   שלח 
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
