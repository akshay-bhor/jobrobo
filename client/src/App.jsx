import { Suspense, useEffect, useState } from "react";
import "./App.scss";
import Loader from "./components/shared/Loader";
import NotFound from "./components/NotFound";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import { getCategoryTree } from "./services/metadata/metadataService";
import {
  getAuthorizationToken,
  getJWTDecodedValues,
  isLoggedIn,
} from "./util/auth";
import useUser from "./store/user";

function App() {
  const [loading, setLoading] = useState(true);
  const updateUser = useUser((state) => state.updateUser);

  useEffect(() => {
    getCategoryTree().then((res) => {
      if (!res.error) setLoading(false);
    });
    console.log(isLoggedIn());
    // Check token
    if (isLoggedIn()) {
      const decodedValues = getJWTDecodedValues(getAuthorizationToken());

      updateUser({ ...decodedValues, isLoggedIn: true });
    }
  }, []);

  if (loading) return <Loader />;

  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
}

export default App;
