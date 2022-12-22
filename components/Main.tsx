import React from "react";
import { ThreeDots } from "react-loader-spinner";
import { Country } from "../assets/utils/types";
import { useRouter } from "next/router";
interface props {
  countries: Country[];
}

const Main = ({ countries }: props) => {
  const router = useRouter();
  return (
    <div
      className=" grid p-4
    grid-cols-1 md-min:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
    >
      {
        //this is the loader which is used to show the loading animation
        countries.length === 0 ? (
          <ThreeDots
            height="80"
            width="80"
            radius="9"
            color="#4fa94d"
            ariaLabel="three-dots-loading"
            visible={true}
          />
        ) : (
          countries.map((country, index) => (
            <div
              onClick={() => {
                router.push(`/${country.name.common}`);
              }}
              className="bg-white
              dark:bg-gray-800
              dark:text-gray-100
              dark:border-gray-700
            shadow-lg
            border-2 border-gray-200
            rounded-lg
            overflow-hidden
            "
              key={index}
            >
              <img
                className="w-full object-cover 
                h-40
                "
                src={country.flags.svg}
                alt={country.name.common}
              />
              <div
                className="
                p-4
                font-nunito
                "
              >
                <h3
                  className="
                font-bold text-lg
                "
                >
                  {country.name.common}
                </h3>
                <p>Population: {country.population}</p>
                <p>Region: {country.region}</p>
                <p>Capital: {country.capital}</p>
              </div>
            </div>
          ))
        )
      }
    </div>
  );
};

export default Main;
