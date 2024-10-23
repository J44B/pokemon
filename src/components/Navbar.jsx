import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <div className="navbar bg-base-100 border-b-2">
            <Link to="/">
                <a className="btn btn-ghost text-xl">
                    pokemon router experience
                </a>
            </Link>
        </div>
    )
}

export default Navbar
