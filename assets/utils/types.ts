type Country = {
    name: {
      common: string;
    };
    flags: {
      svg: string;
    };
    population: number;
    region: string;
    capital: string[];
  };

  type CountrySolo = {
    name: {
      common: string;
      nativeName: {
        [key: string]: {
          official: string;
          common: string;
        };
      };
    };
    flags: {
      svg: string;
    };
    region: string;
    capital: string[];
    population: number;
    currencies: {
     [key:string]:{
        name: string;
     }
    };
    languages: {
      name: string;
    };
    borders: string[];
    subregion: string;
    tld: string[];
  };
  
export type { Country ,CountrySolo};