import useUser from "../../store/user";
import { getJWTDecodedValues, setAuthorizationToken } from "../../util/auth";
import { authenticationAPI } from "../apis";

export const authenticate = async (values) => {
  try {
    const res = await authenticationAPI(values);
    const authData = res.data;

    console.log("res", authData);

    setAuthorizationToken(authData.token);

    const decodedValues = getJWTDecodedValues(authData.token);

    useUser.getState().updateUser({ ...decodedValues, isLoggedIn: true });

    return {
      error: false,
      message: "Success",
    };
  } catch (err) {
    console.error(err);
    return {
      error: true,
      message: err.response?.data?.msg || "Something went wrong",
    };
  }
};
