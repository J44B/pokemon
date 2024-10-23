import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider,
} from 'react-router-dom'

import MainLayout from './components/MainLayout'
import Home from './pages/Home'

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            {/* <Route path="pokemon" element={<Pokemon />} /> */}
        </Route>
    )
)

function App() {
    return (
        <>
            <RouterProvider router={router} />
        </>
    )
}

export default App
