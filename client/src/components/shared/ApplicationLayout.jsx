/* eslint-disable */
import Header from "./Header/Header";

const ApplicationLayout = (props) => {
  return (
    <div className="flex flex-col">
      <Header />
      <div style={{ minHeight: "80vh" }} className="mb-16">{props.children}</div>
    </div>
  );
};

export default ApplicationLayout;
