import { Link } from 'react-router-dom'
import Home from '../pages/Home'

function Navbar() {
    return (
        <div className="navbar bg-base-100 border-b-2">
            <li className="btn btn-ghost text-xl">
                <Link to={Home}>pokemon router experience</Link>
            </li>
        </div>
    )
}

export default Navbar
