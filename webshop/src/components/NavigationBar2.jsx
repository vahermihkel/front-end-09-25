// rfce

import { Link } from "react-router-dom"

function NavigationBar() {
  return (
    <div>
      <Link to="/">
        <img 
          className="logo" 
          src="https://cdn1.polaris.com/globalassets/atv/2026/model/vehicle---cards-/sportsman-xp-1000-ultimate-my26-9d1a-turbo-silver-a26sxr95ag.png" 
          alt="Logo" 
        />
      </Link>

      <Link to="/ostukorv">
        <button>Ostukorvi</button>
      </Link>

      <Link to="/lisa-toode">
        <button>Lisa toode</button>
      </Link>

      <Link to="/seaded">
        <button>Seaded</button>
      </Link>

      <Link to="/kinkekaart">
        <button>Kinkekaardid</button>
      </Link>

      <Link to="/poed">
        <button>Poed</button>
      </Link>

      <Link to="/kalkulaator">
        <button>Kalkulaator</button>
      </Link>

      <Link to="/supplier1">
        <button>Tarnija1</button>
      </Link>

      <Link to="/supplier2">
        <button>Tarnija2</button>
      </Link>

      <Link to="/supplier3">
        <button>Tarnija3</button>
      </Link>
    </div>
  )
}

export default NavigationBar