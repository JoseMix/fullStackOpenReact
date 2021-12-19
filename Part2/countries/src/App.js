import { useState, useEffect } from "react";
import axios from "axios";
const App = () => {
  const [country, setCountry] = useState("");
  const [countries, setCountries] = useState([]);
  const [filteredCountry, setFilteredCountry] = useState([...countries]);
  useEffect(() => {
    axios
      .get("https://restcountries.com/v3.1/all")
      .then((response) => setCountries(response.data));
  }, []);

  const filterHandler = (event) => {
    setCountry(event.target.value);
    const search = countries.filter((country) =>
      country.name.common
        .toLowerCase()
        .includes(event.target.value.toLowerCase())
    );
    setFilteredCountry(search);
  };
  return (
    <div>
      find countries
      <input value={country} onChange={filterHandler}></input>
      <div>
        {filteredCountry.length > 10 ? (
          <li>Too many matches, specify another filter</li>
        ) : filteredCountry.length === 1 ? (
          <>
            {console.log(filteredCountry[0])}
            <h1>{filteredCountry[0].name.common}</h1>
            <h3>Capital {filteredCountry[0].capital}</h3>
            <h3>Population {filteredCountry[0].population}</h3>
            <h2>Languages: </h2>
            <ul>
              {Object.entries(filteredCountry[0].languages).map(
                ([key, value]) => (
                  <li key={key}>{value}</li>
                )
              )}
            </ul>
            <img alt="flag" src={filteredCountry[0].flags.png}></img>
          </>
        ) : (
          filteredCountry.map((country) => (
            <li key={country.name.common}>{country.name.common}</li>
          ))
        )}
      </div>
    </div>
  );
};

export default App;
