import { useState } from "react";
import Button from "../Button/Button";
import Modal from "../Modal";
import { Form, Formik } from "formik";
import TextField from "../../form/TextField/TextField";
import * as yup from "yup";
import { authenticate } from "../../../services/auth/authService";
import useUser from "../../../store/user";

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
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  const user = useUser((state) => state.user);

  const login = (values) => {
    setError();
    setLoading(true);
    authenticate(values).then((res) => {
      setLoading(false);
      if (res.error) setError(res.message);
      else setShowLoginModal(false);
    });
  };

  if (user.isLoggedIn) return <div className="flex flex-row place-items-center h-full">Welcome User</div>;

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
            <TextField name="email" type="text" placeholder="Email/Username" allowClear={true} />
            <div className="mt-2"></div>
            <TextField name="pass" type="password" placeholder="Password" allowClear={true} />
            <div className="mt-2"></div>
            {error && <div className="text-alert">{error}</div>}
            <Button type="submit" className="w-90" disabled={loading}>
              Continue
            </Button>
          </Form>
        </Formik>
      </Modal>
    </>
  );
};

export default UserInfo;
