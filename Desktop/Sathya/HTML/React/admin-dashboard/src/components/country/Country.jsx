import React, { useEffect, useState } from "react";
import './Country.css'
const Country = () => {
  const url = "https://restcountries.com/v3.1/all";
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState("");
  const [dropdown, setDropdown] = useState(false);
  useEffect(() => {
    const fetchCountry = async () => {
      const response = await fetch(url);
      const data = await response.json();
      setCountries(data);
      console.log(data);
    };
    fetchCountry();
  }, []);

  const handleCountryChange = (e) => {
    const countryName = e.target.value;
    setSearch(countryName);
  };

  
  const handleSelect = (country) => {
    setSearch(country);
    setDropdown(false);
  };

  const filteredCountries = countries.filter((country) =>
    country.name.common.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="row w-25  m-5">
          <input
            type="text"
            className="col-12"
            value={search}
            onChange={handleCountryChange}
            onFocus={() => setDropdown(true)}
            placeholder="Enter Country"
          />
          {dropdown && (
            <ul className="list-group w-50 ">
              {filteredCountries.length > 0 ? (
                filteredCountries.map((country, index) => (
                  <li
                    key={index}
                    style={{ cursor: "pointer" }}
                    onClick={() => handleSelect(country.name.common)}
                    className="list-group-item"
                  >
                    {country.name.common}
                  </li>
                ))
              ) : (
                <li className="list-group-item">No Country Found</li>
              )}
            </ul>
          )}
        </div>
  );
};

export default Country;
