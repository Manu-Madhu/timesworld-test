import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col, Button } from 'react-bootstrap';
import { setCountries, setDisplayedCount } from '../../store/countriesSlice';

import CountryCard from './CountryCard';

const CountriesSection = () => {
  const dispatch = useDispatch();
  const { countries, displayedCount, currentFilter } = useSelector((state) => state.countries);

  useEffect(() => {
    // Fetch countries from API
    const fetchCountries = async () => {
      const response = await fetch('https://restcountries.com/v2/all?fields=name,region,flag');
      const data = await response.json();
      dispatch(setCountries(data));
    };
    fetchCountries();
  }, [dispatch]);

  // Filter countries by region
  const filteredCountries = currentFilter === 'All' 
    ? countries 
    : countries.filter(country => country.region === currentFilter);

  // Countries to display
  const countriesToShow = filteredCountries.slice(0, displayedCount);

  const handleLoadMore = () => {
    dispatch(setDisplayedCount(displayedCount + 12));
  };

  return (
    <div className="mt-5 common-container">
      <Row className="g-4">
        {countriesToShow.map((country) => (
          <Col key={country.name} sm={6} md={4} lg={3}>
            <CountryCard country={country} />
          </Col>
        ))}
      </Row>
      {displayedCount < filteredCountries.length && (
        <div className="text-center mt-4">
          <Button variant="primary" onClick={handleLoadMore}>Load More</Button>
        </div>
      )}
    </div>
  );
};

export default CountriesSection;