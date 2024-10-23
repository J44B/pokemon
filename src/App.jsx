import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider,
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
            <RouterProvider router={router} />
        </>
    )
}

export default App
