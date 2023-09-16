import {useEffect, useState} from 'react'
import dataJSON from './data.json'
function App() {
  const [data, setData] = useState([])
  const [regions, setRegions] = useState(['Africa', 'America', 'Asia', 'Europe', 'Oceania'])
  const [selectedRegion, setSelectedRegion] = useState("")
  const [search, setSearch] = useState("")
  const fetchData = () => {
  setData(dataJSON)
  }

  const handleSelectRegion = (e) => {
    const value = e.target.value
    setSelectedRegion(value)
  }
  
  useEffect(() => {
    fetchData()
    console.log(selectedRegion)
  },[selectedRegion])
  const filteredArr = data.filter((region) => {
    if(region.region.toLowerCase() === selectedRegion.toLowerCase()) {
      return region
    }
  })
  console.log(filteredArr)
  return (
    <div className="App">
      <input type='text' placeholder='search for the country' />
      <select onChange={handleSelectRegion}>
        <option>Filter by region</option>
      {regions?.map((region) => (
      <option>{region}</option>
          ))}
          </select>
    </div>
  );
}

export default App;
