import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col, Button } from "react-bootstrap";
import { setCountries, setDisplayedCount } from "../../store/countriesSlice";
import CountryCard from "./CountryCard";
import CountrySkeleton from "./skeltons/CountrySkeleton";

const CountriesSection = ({ currentFilter }) => {
  const dispatch = useDispatch();
  const { countries, displayedCount } = useSelector((state) => state.countries);
  const [loading, setLoading] = useState(true);

  const fetchCountries = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        "https://restcountries.com/v2/all?fields=name,region,flag"
      );
      const data = await response.json();
      dispatch(setCountries(data));
    } catch (error) {
      console.log(error, "Error while country fetching");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCountries();
  }, [dispatch]);

  // Filter countries based on prop
  const filteredCountries =
    currentFilter === "All"
      ? countries
      : countries.filter(
          (country) =>
            country.region.toLowerCase() === currentFilter.toLowerCase()
        );

  const countriesToShow = filteredCountries.slice(0, displayedCount);

  const handleLoadMore = () => {
    dispatch(setDisplayedCount(displayedCount + 12));
  };

  return (
    <div className="mt-4 mt-md-5 common-container px-4 px-md-3">
      <Row className="g-3 g-md-4">
        {loading
          ? Array.from({ length: 12 }).map((_, index) => (
              <Col key={index} xs={12} md={6}>
                <CountrySkeleton />
              </Col>
            ))
          : countriesToShow.map((country) => (
              <Col key={country.name} xs={12} md={6}>
                <CountryCard country={country} />
              </Col>
            ))}
      </Row>

      {!loading && displayedCount < filteredCountries.length && (
        <div className="text-center mt-4 mt-md-5">
          <Button
            className="custom-load-button border-0 text-white fw-md-semibold rounded-0"
            style={{
              backgroundColor: "#3C3C3C",
            }}
            onClick={handleLoadMore}
          >
            Load More
          </Button>
        </div>
      )}
    </div>
  );
};

export default CountriesSection;
