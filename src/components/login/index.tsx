import { useFormik } from "formik";
import Button from "../common/button";
import Input from "../common/input";
import Logo from "../common/logo";
import { useState } from "react";
import axios from "axios";
import { useToast } from "../common/toast/toast";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginSuccess } from "../../redux/Auth/authReducer";

export default function LogIn() {
  const [loading, setLoading] = useState<any>(false);
  const { showError, showSuccess }: any = useToast();
  const dispatch: any = useDispatch<any>();
  const navigate = useNavigate();
  const validate = (values: any) => {
    const errors: any = {};
    if (!values.email) {
      errors.email = "Email is required";
    } else if (
      // eslint-disable-next-line
      !/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        values.email
      )
    ) {
      errors.email = "Invalid email address";
    }
    if (!values.password) {
      errors.password = "Password is required";
    }
    return errors;
  };

  const formik: any = useFormik({
    initialValues: {
      email: "",
      password: ""
    },
    validateOnBlur: true,
    validateOnChange: true,
    validate,
    onSubmit: (values: any) => {
      const payload = {
        user: values.email,
        password: values.password
      };
      setLoading(true);
      axios
        .request({
          method: "post",
          url: `${process.env.REACT_APP_BASE_URL}/api/v1/signin`,
          headers: {
            "Content-Type": "application/json"
          },
          data: payload
        })
        .then((response) => {
          if (response.data.status === 200) {
            showSuccess("Success", response.data.message);
            dispatch(loginSuccess(response.data.data));
            navigate("/cards-list");
            formik.resetForm();
          } else {
            showError("Error", response.data.message);
          }
          setLoading(false);
        })
        .catch((error) => {
          setLoading(false);
          showError("Error", "Something went wrong!");
          console.error(error);
        });
    }
  });

  return (
    <div className="flex h-screen">
      <div className="w-full bg-white lg:w-1/2 flex items-center justify-center">
        <div className="max-w-md w-full p-6">
          <Logo height="7rem" margin="auto" />
          <h1 className="text-3xl font-semibold mb-6 text-black text-center">
            Welcome back!
          </h1>
          <h1 className="text-sm font-semibold mb-6 text-gray-500 text-center">
            Let's get started!
          </h1>
          <form onSubmit={formik.handleSubmit} className="space-y-4">
            <Input
              placeholder="Enter your email"
              label="Email"
              name="email"
              id="email"
              type="text"
              value={formik.values.email}
              isError={!!formik.errors.email}
              onBlur={formik.handleBlur}
              errorMessage={formik.errors.email}
              onChange={(e: any) => formik.handleChange(e)}
              touched={formik.touched.email}
              autoFocus={true}
            />
            <Input
              placeholder="Enter your password"
              label="Password"
              name="password"
              id="password"
              isError={!!formik.errors.password}
              value={formik.values.password}
              onBlur={formik.handleBlur}
              errorMessage={formik.errors.password}
              type="password"
              onChange={(e: any) => formik.handleChange(e)}
              touched={formik.touched.password}
              disabled={loading}
            />
            <Button
              label="Log in"
              type="submit"
              disabled={loading}
              loading={loading}
            />
          </form>
        </div>
      </div>
      <div className="hidden lg:flex items-center justify-center flex-1 bg-gray-100 text-black">
        <div className="max-w-md text-center">
          <img src="/images/loginimg.svg" alt="Login" />
        </div>
      </div>
    </div>
  );
}
