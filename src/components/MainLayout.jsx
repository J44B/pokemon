import { Outlet } from 'react-router-dom'

function MainLayout() {
    return (
        <div>
            <Navbar />
            <Outlet />
        </div>
    )
}
