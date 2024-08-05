/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */

import React from "react";
import countryList from "react-select-country-list";
import Select, { type SingleValue } from "react-select";

interface CountrySelectorProps {
  selectedCountry: string;
  setSelectedCountry: (country: string) => void;
}

interface CountryOption {
  value: string;
  label: string;
}

const CountrySelector: React.FC<CountrySelectorProps> = ({
  selectedCountry,
  setSelectedCountry,
}) => {
  const options: CountryOption[] = countryList().getData();

  const handleChange = (selectedOption: SingleValue<CountryOption>) => {
    if (selectedOption) {
      setSelectedCountry(selectedOption.value);
    }
  };

  return (
    <Select
      options={options}
      value={options.find((option) => option.value === selectedCountry)}
      onChange={handleChange}
      placeholder="Select your country"
    />
  );
};

export default CountrySelector;
