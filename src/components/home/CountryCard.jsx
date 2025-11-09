import fallbackFlag from "../../assets/images/imgFallback.png";

const CountryCard = ({ country }) => {
  
  // image fail while fetching
  const handleImageError = (e) => {
    e.target.onerror = null;
    e.target.src = fallbackFlag;
  };

  return (
    <div className="country-card banner-border d-flex p-2 p-md-3 gap-3 gap-md-4">
      <div className="flag-container" style={{ overflow: "hidden" }}>
        <img
          src={country.flag}
          alt={`${country.name} flag`}
          onError={handleImageError}
        />
      </div>
      <div className="d-flex flex-column p-md-3">
        <h2 className="card-text fw-bold m-0 mb-md-2">{country.name}</h2>
        <p className="card-para mt-1">{country.region}</p>
      </div>
    </div>
  );
};

export default CountryCard;
