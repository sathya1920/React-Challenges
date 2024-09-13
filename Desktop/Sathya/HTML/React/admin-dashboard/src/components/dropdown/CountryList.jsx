import React, { useState } from "react";
import countries from "./countries.json";

const CountryList = () => {
  const [selectCountry, setSelectCountry] = useState("");
  const [cities, setCities] = useState([]);

  const handleCountryChange = (e) => {
    const countryName = e.target.value;
    setSelectCountry(countryName);

    
    

    const country = countries.countries.find(
      (c) => c.country_name === countryName
    );
    if (country) {
      setCities(country.cities);
    } else {
      setCities([]);
    }
  };

  return (
    <div>
      <select
        className="m-5 p-2 w-25"
        value={selectCountry}
        onChange={handleCountryChange}
      >
        <option>Select Country</option>
        {countries.countries.map((country, id) => (
          <option key={id} value={country.country_name}>
            {country.country_name}
          </option>
        ))}
      </select>

      <select className="m-5 p-2 w-25">
        <option>Select City</option>
        {cities.map((city, id) => (
          <option key={id} value={city}>
            {city}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CountryList;
