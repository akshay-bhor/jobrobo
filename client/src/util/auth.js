import jwtDecode from "jwt-decode";

export const getAuthorizationToken = () => {
  return localStorage.getItem("AccessToken");
};

export const getBearerToken = () => {
  return "Bearer " + getAuthorizationToken();
};

export const clearAuthorizationToken = () => {
  localStorage.removeItem("AccessToken");
};

export const setAuthorizationToken = (token) => {
  localStorage.setItem("AccessToken", token);
};

export const getJWTDecodedValues = () => {
  const accessToken = localStorage.getItem("AccessToken");
  if (accessToken) {
    const tokenValue = jwtDecode(accessToken);
    return tokenValue;
  }
};

export const isLoggedIn = (clearStorage = false) => {
  const accessToken = localStorage.getItem("AccessToken");
  if (accessToken) {
    const tokenValue = jwtDecode(accessToken); console.log(tokenValue)
    if (tokenValue.exp && tokenValue.exp * 1000 > Date.now()) return true;
  }
  if (clearStorage) localStorage.clear();
  return false;
};
