import type { Route } from "./+types/country";

export async function clientLoader({ params }: Route.LoaderArgs) {
  const countryName = params.countryName;
  try {
    const response = await fetch(
      `https://restcountries.com/v3.1/name/${countryName}`
    );
    if (response.ok) {
      const country = await response.json();
      return country;
    } else {
      return [];
    }
  } catch {
    console.error("Failed to fetch country");
    return [];
  }
}

export default function Country({ loaderData }: Route.ComponentProps) {
  const country = {
    name: loaderData[0]?.name?.common || "N/A",
    officialName: loaderData[0]?.name?.official || "N/A",
    region: loaderData[0]?.region || "N/A",
    subregion: loaderData[0]?.subregion || "N/A",
    capital: loaderData[0]?.capital || "N/A",
    population: loaderData[0]?.population || "N/A",
    flags: loaderData[0]?.flags || "",
    timezones: loaderData[0]?.timezones || "N/A",
  };

  return (
    <section className="country-details">
      <div>
        <h2>
          <span>{country.name}</span>
        </h2>
        <p>
          Official Name: <span>{country.officialName}</span>
        </p>
        <p>
          Region: <span>{country.region}</span>
        </p>
        <p>
          Subregion: <span>{country.subregion}</span>
        </p>
        <p>
          Capital: <span>{country.capital}</span>
        </p>
        <p>
          Population: <span>{country.population}</span>
        </p>
        <p>
          Timezones: <span>{country.timezones}</span>
        </p>
      </div>
      <div>
        <img src={country.flags?.png} alt={country.name} />
      </div>
    </section>
  );
}
