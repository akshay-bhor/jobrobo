const NotFound = () => {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <h1>Uh oh!</h1>
      <div className="text-lg">
        It looks like this page doesn&apos;t exist, please make sure your URL is
        correct!
      </div>
    </div>
  );
};

export default NotFound;
