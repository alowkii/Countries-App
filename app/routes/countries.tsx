import { Link } from "react-router";
import type { Route } from "../+types/root";
import { useState } from "react";

export async function clientLoader() {
  try {
    const response = await fetch("https://restcountries.com/v3.1/all");
    if (response.ok) {
      const countries = await response.json();
      return countries;
    } else {
      return [];
    }
  } catch {
    console.error("Failed to fetch countries");
    return [];
  }
}

export default function Countries({ loaderData }: Route.ComponentProps) {
  const [search, setSearch] = useState("");
  const [region, setRegion] = useState("");

  const filteredCountries = loaderData.filter((country: any) => {
    const matchedSearches =
      (!search ||
        country.name.common.toLowerCase().includes(search.toLowerCase())) &&
      (!region || country.region.toLowerCase() === region.toLowerCase());
    return matchedSearches;
  });
  filteredCountries.sort((a: any, b: any) =>
    a.name.common.localeCompare(b.name.common)
  );
  return (
    <div className="countries">
      <h2>Countries</h2>
      <div>
        <input
          type="text"
          placeholder="Search by name..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <select value={region} onChange={(e) => setRegion(e.target.value)}>
          <option value="">All regions</option>
          <option value="Africa">Africa</option>
          <option value="Americas">Americas</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
      </div>
      {filteredCountries.length === 0 && (
        <p>No countries found. Try a different search.</p>
      )}
      <ul>
        {filteredCountries.map((country: any, key: number) => (
          <Link
            to={`${country.name.common.toLowerCase()}`}
            key={country.cca3}
            className="country"
          >
            <h3>{country.name.common}</h3>
            <div>
              <p>Region: {country.region}</p>
              <p>Population: {country.population}</p>
            </div>
          </Link>
        ))}
      </ul>
    </div>
  );
}
