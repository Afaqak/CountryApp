import { useRouter } from "next/router";
import { useEffect } from "react";
import React from "react";
import { ThreeDots } from "react-loader-spinner";
import { CountrySolo } from "../../assets/utils/types";

const Country = () => {
  const router = useRouter();
  const { country } = router.query;
  const [countryData, setCountry] = React.useState<CountrySolo[]>([]);

  useEffect(() => {
    const fetchCountry = async () => {
      const res = await fetch(`https://restcountries.com/v3.1/name/${country}`);
      const data = await res.json();
      setCountry(data);

      
    };
    fetchCountry();
  }, []);
  return (
    <div>
      <div onClick={() => router.back()}>
        <p
          className="
        cursor-pointer
        font-nunito
        text-gray-500
        p-4
        w-[fit-content]
        border-2
        ml-4
        mt-4
        hover:bg-gray-200
        "
        >
          Back
        </p>
      </div>
      {countryData.length === 0 ? (
        <ThreeDots
          height="80"
          width="80"
          radius="9"
          color="#4fa94d"
          ariaLabel="three-dots-loading"
          visible={true}
        />
      ) : (
        countryData.map((country, index) => (
          <div
            key={index}
            className="flex
            flex-col
            gap-4
            p-4
            font-nunito
            md:gap-6
            md:flex-row
            md:items-center
          "
          >
            <img
              className="w-1/2 object-contain"
              src={country.flags.svg}
              alt={country.name.common}
            />
            <div className=" space-y-10">
              <h3 className="font-bold text-2xl">{country.name.common}</h3>
              <div className="flex flex-col gap-4 md:flex-row md:gap-6">
                <div>
                  <p>
                    <span className="font-bold">nativeName : </span>
                    {
                      country.name.nativeName[Object.keys(country.name.nativeName)[0]].official
                    }
                  </p>
                  <p>
                    <span className="font-bold">Population : </span>
                    {country.population}
                  </p>
                  <p>
                    <span className="font-bold">Region : </span>
                    {country.region}
                  </p>
                  <p>
                    <span className="font-bold">Sub Region : </span>
                    {country.subregion}
                  </p>
                  <p>
                    <span className="font-bold">Capital : </span>
                    {country.capital}
                  </p>
                </div>
                <div>
                  <p>
                    <span className="font-bold">Top Level Domain : </span>
                    {country.tld}
                  </p>
                  <p>
                    <span className="font-bold">Currencies : </span>
                    {}
                  </p>
                  <p>
                    <span className="font-bold">Languages : </span>
                    {Object.values(country.languages).map((language, index) => (
                      <span key={index}>{language}</span>
                    ))}
                  </p>
                </div>
              </div>
              <div className="flex md:w-full flex-col md:flex-row md:items-center">
                <h2 className="font-bold">Border Countries : </h2>
                {
                  !country.borders ? (
                    <p
                      className="ml-4
                    w-[fit-content]
                    font-nunito border-2 px-2 py-1 rounded-md"
                    >
                      No Border Countries
                    </p>
                  ) : (
                    country.borders.map((border, index) => (
                      <p
                        className="mt-4 md:mt-0 ml-1
                      w-[fit-content]
                      font-nunito border-2 px-2 py-1 rounded-md"
                        key={index}
                      >
                        {border}
                      </p>
                    ))
                  )
                }
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Country;
