import { Link } from "react-router-dom"
// import Card from "../../components/ui/Card"

function AdminHome() {
  return (
    <div>
      <Link to="/admin/lisa-toode">
        <button>Lisa toode</button>
      </Link>

      <Link to="/admin/supplier1">
        <button>Tarnija1</button>
      </Link>

      <Link to="/admin/supplier2">
        <button>Tarnija2</button>
      </Link>

      <Link to="/admin/supplier3">
        <button>Tarnija3</button>
      </Link>

      <Link to="/admin/halda-tooteid">
        <button>Halda tooteid</button>
      </Link>

      {/* <Card>
        <p>Hello!!</p>
        <h2>This is Card</h2>
      </Card>

      <Card>
        <p>Howdy!!</p>
        <h2>This is Card2</h2>
      </Card> */}
    </div>
  )
}

export default AdminHome
