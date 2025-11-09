// CountriesSection.js
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col, Button } from 'react-bootstrap';
import { setCountries, setDisplayedCount } from '../../store/countriesSlice';
import CountryCard from './CountryCard';

const CountriesSection = () => {
  const dispatch = useDispatch();
  const { countries, displayedCount, currentFilter } = useSelector((state) => state.countries);

  useEffect(() => {
    const fetchCountries = async () => {
      const response = await fetch('https://restcountries.com/v2/all?fields=name,region,flag');
      const data = await response.json();
      dispatch(setCountries(data));
    };
    fetchCountries();
  }, [dispatch]);

  const filteredCountries = currentFilter === 'All' 
    ? countries 
    : countries.filter(country => country.region === currentFilter);

  const countriesToShow = filteredCountries.slice(0, displayedCount);

  const handleLoadMore = () => {
    dispatch(setDisplayedCount(displayedCount + 12));
  };

  return (
    <div className="mt-5 common-container px-3">
      <Row className="g-4">
        {countriesToShow.map((country) => (
          <Col key={country.name} xs={6} sm={4} md={3} className="mb-4">
            <CountryCard country={country} />
          </Col>
        ))}
      </Row>
      
      {displayedCount < filteredCountries.length && (
        <div className="text-center mt-4">
          <Button className='custom-button-style' style={{width:'20%'}} onClick={handleLoadMore}>
            Load More
          </Button>
        </div>
      )}
    </div>
  );
};

export default CountriesSection;