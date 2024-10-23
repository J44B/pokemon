import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider,
} from 'react-router-dom'

import MainLayout from './components/MainLayout'
import Home from './pages/Home'
import PokemonDetail from './pages/PokemonDetail'

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="/pokemon/:name" element={<PokemonDetail />} />
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
