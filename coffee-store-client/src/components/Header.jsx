import { NavLink } from "react-router-dom"

const Header = () => {
  return (
    <div>
        <NavLink to="/">home</NavLink>
        <NavLink to="/addCoffee">add coffee</NavLink>
        <NavLink to="updateCoffee/:id">coffee</NavLink>
        <NavLink to="/users">users</NavLink>
        <NavLink to="/signup">signup</NavLink>
        <NavLink to="/signin">signin</NavLink>
    </div>
  )
}

export default Header