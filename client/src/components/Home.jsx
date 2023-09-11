import useProducts from "../store/product";
import AllProducts from "./AllProducts";
import CategoryProducts from "./CatgoryProduct";
import SearchResults from "./SearchResult";
import ApplicationLayout from "./shared/ApplicationLayout";
import Loader from "./shared/Loader";

const Home = () => {
  const loading = useProducts((state) => state.loading);
  const mode = useProducts((state) => state.mode);

  return (
    <ApplicationLayout>
      {loading ? (
        <div className="w-full h-full flex flex-row justify-center">
          <Loader />
        </div>
      ) : (
        <div className="appContainer block m-auto">
          {mode == "all" && <AllProducts />}
          {mode == "search" && <SearchResults />}
          {mode == "category" && <CategoryProducts />}
        </div>
      )}
    </ApplicationLayout>
  );
};

export default Home;
