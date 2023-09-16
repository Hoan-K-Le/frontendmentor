import { useEffect, useState } from "react";
import dataJSON from "./data.json";
import NavBar from "./components/NavBar";
function App() {
  const [data, setData] = useState([]);
  const [regions, setRegions] = useState([
    "Africa",
    "Americas",
    "Asia",
    "Europe",
    "Oceania",
  ]);
  const [selectedRegion, setSelectedRegion] = useState("");
  const [search, setSearch] = useState("");
  const [on, setOn] = useState(false);
  const [display, setDisplay] = useState(false);
  const handleButton = () => {
    setOn((prevState) => !prevState);
  };
  const fetchData = () => {
    setData(dataJSON);
  };

  const handleSelectRegion = (e) => {
    const value = e.target.value;
    setSelectedRegion(value);
  };

  console.log(dataJSON);
  useEffect(() => {
    fetchData();
  }, [selectedRegion, search]);
  let filteredArr = data;

  if (selectedRegion) {
    filteredArr = data.filter(
      (country) => country.region.toLowerCase() === selectedRegion.toLowerCase()
    );
  }

  return (
    <div className={`${on ? "bg-slate-700 text-white" : "bg-white"}`}>
      <NavBar handleButton={handleButton} on={on} />
      <div
        className={`${
          on ? "bg-slate-800 text-white" : "bg-white"
        } flex justify-between items-center`}
      >
        <div className="flex flex-col overflow-auto relative">
          <input
            onChange={(e) => setSearch(e.target.value)}
            type="text"
            placeholder="search for the country"
            className="border sticky top-0 px-10 py-2 shadow-2xl shadow-slate-50 rounded-lg"
          />
          {search !== "" &&
            data
              .filter((country) =>
                country.name.toLowerCase().includes(search.toLowerCase())
              )
              .map((country) => <p>{country.name}</p>)}
        </div>
        <select
          className="flex items-center text-black gap-2 content-center text-center mr-2"
          onChange={handleSelectRegion}
        >
          <option value="">Filter by region</option>
          {regions?.map((region) => (
            <option value={region}>{region}</option>
          ))}
        </select>
      </div>
      <div className="grid grid-cols-4 gap-4">
        {filteredArr
          ?.filter((data, i) => i < 8)
          .map((data) => (
            <div className="border shadow flex flex-col">
              <img src={data.flag} className="w-full" alt="flag" />
              <p>{data.name}</p>
              <p>Population: {data.population} </p>
              <p>Region: {data.region}</p>
              <p>Capital: {data.capital}</p>
            </div>
          ))}
      </div>
    </div>
  );
}

export default App;
