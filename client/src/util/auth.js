import jwtDecode from "jwt-decode";

export const getAuthorizationToken = () => {
  return sessionStorage.getItem("AccessToken");
};

export const getBearerToken = () => {
  return "Bearer " + getAuthorizationToken();
};

export const clearAuthorizationToken = () => {
  sessionStorage.removeItem("AccessToken");
};

export const isLoggedIn = (clearStorage = false) => {
  const accessToken = sessionStorage.getItem("AccessToken");
  if (accessToken) {
    const tokenValue = jwtDecode(accessToken);
    if (tokenValue.exp && tokenValue.exp * 1000 > Date.now()) return true;
  }
  if (clearStorage) sessionStorage.clear();
  return false;
};
