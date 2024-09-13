import React, { useState } from "react";
import countries from "./countries.json";

const Dropdown = () => {
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
  console.log(cities);

  return (
    <div>
      <h1 className="m-5">Select Country</h1>
      <select
        className="w-25 m-5 p-2"
        value={selectCountry}
        onChange={handleCountryChange}
      >
        <option value="">Select Country</option>

        {countries.countries.map((country, index) => (
          <option key={index} value={country.country_name}>
            {country.country_name}
          </option>
        ))}
      </select>

      <select className="w-25 m-5 p-2">
        <option value="">Select City</option>
        {cities.map((city, id) => (
          <option key={id} value={city}>
            {city}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
