  
import { Country } from "./types";

  const filterCountries = (countries: Country[], search: string) => {
    return countries.filter((country) => {
      return country.name.common.toLowerCase().includes(search.toLowerCase());
    });     
};
const filterByRegion = (countries: Country[], region: string) => {
  if(region === 'Filter by Region') return countries;
  return countries.filter((country) => {
    return country.region.toLowerCase().includes(region.toLowerCase());
  });
};

export { filterCountries, filterByRegion };