import Loader from "react-loader-spinner";

function LoaderComponent() {
  return (
    <div>
      <Loader
        type="Rings"
        color="#00BFFF"
        height={100}
        width={100}
        timeout={3000}
        className="Loader"
      />
    </div>
  );
}

export default LoaderComponent;
