import { useEffect, useState } from "react"
import Dropdown from "./ui/Dropdown";

function ParcelMachines() {
  const [dbParcelMachines, setDbParcelMachines] = useState([]);
  const [parcelMachines, setParcelMachines] = useState([]);
  const [loading, setLoading] = useState([]);
  const [country, setCountry] = useState("Kõik");
  const [selectedPM, setSelectedPM] = useState("");

  useEffect(() => {
    fetch("https://www.omniva.ee/locations.json")
      .then(res => res.json())
      .then(json => {
        setLoading(false);
        setDbParcelMachines(json);
        setParcelMachines(json);
      })
  }, []);

  function updateParcelMachines(newCountry) {
    let result = [];
    if (newCountry === "") {
      result = dbParcelMachines.slice();
    } else {
      result = dbParcelMachines.filter(pm => pm.A0_NAME === newCountry);
    }
    switch(newCountry) {
      case "": {
        setCountry("Kõik");
        break;
      }
      case "EE": {
        setCountry("Eesti");
        break;
      }
      case "LV": {
        setCountry("Läti");
        break;
      }
      case "LT": {
        setCountry("Leedu");
        break;
      }
    }
    setParcelMachines(result);
  } 

  // function handleSelectedPM(pm) {
  //   setSelectedPM(pm);
  // }

  if (loading) {
    return <div>Loading...</div>
  }

  return (
    <div>
      <button onClick={() => updateParcelMachines("")}>Kõik</button>
      <button onClick={() => updateParcelMachines("EE")}>Eesti</button>
      <button onClick={() => updateParcelMachines("LV")}>Läti</button>
      <button onClick={() => updateParcelMachines("LT")}>Leedu</button>
      <div>Valitud riik: {country}</div>
      <br /><br />
      <div>Vali pakiautomaat:</div>
      <Dropdown 
        handleSelect={setSelectedPM} 
        options={parcelMachines.map(pm => pm.NAME)} 
        header="Parcelmachines" />
      {/* <select>
        {parcelMachines.map(pm => 
          <option key={pm.NAME}>
            {pm.NAME}
          </option>
        )}
      </select> */}
      <div>Valitud pakiautomaat: {selectedPM}</div>
    </div>
  )
}

export default ParcelMachines