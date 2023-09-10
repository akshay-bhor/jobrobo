import { useState } from "react";
import { isLoggedIn } from "../../../util/auth";
import Button from "../Button/Button";
import Modal from "../Modal";
import { Form, Formik } from "formik";
import TextField from "../../form/TextField/TextField";
import * as yup from "yup";

const validationSchema = yup.object({
  email: yup
    .string("Enter your email")
    .required("email is required")
    .email("Enter correct email"),
  pass: yup
    .string("Enter your password")
    .min(8, "Min password length is 8")
    .required("Password is required"),
});

const UserInfo = () => {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const userAuthenticated = isLoggedIn();

  const login = (values) => {
    console.log(values);
  };

  if (userAuthenticated) return <div>Welcome User</div>;

  return (
    <>
      <Button
        variant="dark"
        className="mt-2"
        onClick={() => setShowLoginModal((prevState) => !prevState)}
      >
        Login/SignUp
      </Button>
      <Modal
        header="Login/SignUp"
        open={showLoginModal}
        close={() => setShowLoginModal(false)}
      >
        <Formik
          initialValues={{
            email: "",
            pass: "",
          }}
          validationSchema={validationSchema}
          onSubmit={(values) => {
            login(values);
          }}
        >
          <Form className="mb-4">
            <TextField name="email" type="text" placeholder="Email/Username" />
            <div className="mt-2"></div>
            <TextField name="pass" type="password" placeholder="Password" />
            <div className="mt-2"></div>
            <Button type="submit" className="w-90">Continue</Button>
          </Form>
        </Formik>
      </Modal>
    </>
  );
};

export default UserInfo;
