import { Suspense, useEffect, useState } from "react";
import "./App.scss";
import Loader from "./components/shared/Loader";
import NotFound from "./components/NotFound";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import { getCategoryTree } from "./services/metadata/metadataService";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getCategoryTree().then((res) => {
      if (!res.error) setLoading(false);
    });
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
