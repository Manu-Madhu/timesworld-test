const CountrySkeleton = () => {
  return (
    <div className="country-card banner-border d-flex p-2 p-md-3 gap-3 gap-md-4 skeleton-card">
      <div
        className="flag-container skeleton-box"
        style={{ width: "130px", height: "100%" }}
      ></div>
      <div className="d-flex flex-column p-md-3 flex-grow-1 justify-content-center">
        <div
          className="skeleton-box mb-2"
          style={{ width: "60%", height: "25px" }}
        ></div>
        <div
          className="skeleton-box"
          style={{ width: "40%", height: "18px" }}
        ></div>
      </div>
    </div>
  );
};

export default CountrySkeleton;
