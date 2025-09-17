import { useEffect, useState } from "react"

function ParcelMachines() {
  const [dbParcelMachines, setDbParcelMachines] = useState([]);
  const [parcelMachines, setParcelMachines] = useState([]);
  const [loading, setLoading] = useState([]);
  const [country, setCountry] = useState("Eesti");

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
    const result = dbParcelMachines.filter(pm => pm.A0_NAME === newCountry);
    switch(newCountry) {
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

  if (loading) {
    return <div>Loading...</div>
  }

  return (
    <div>
      <button onClick={() => updateParcelMachines("EE")}>Eesti</button>
      <button onClick={() => updateParcelMachines("LV")}>Läti</button>
      <button onClick={() => updateParcelMachines("LT")}>Leedu</button>
      <div>Valitud riik: {country}</div>
      <br /><br />
      <div>Vali pakiautomaat:</div>
      <select>
        {parcelMachines.map(pm => 
          <option key={pm.NAME}>
            {pm.NAME}
          </option>
        )}
      </select>
    </div>
  )
}

export default ParcelMachines