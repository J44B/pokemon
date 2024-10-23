import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
} from 'react-router-dom'

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="pokemon" element={<Pokemon />} />
        </Route>
    )
)

function App() {
    return (
        <>
            <h1 className="text-3xl font-bold underline">Pokemon</h1>
        </>
    )
}

export default App
