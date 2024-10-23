async function fetchPokemon() {
    const url = 'https://pokeapi.co/api/v2/pokemon?limit=160'
    try {
        const result = await fetch(url)
        if (!Response.ok) {
            throw new Error('Could not fetch the main pokemon array')
        }
        const fetchedPokemon = await result.json()
        return fetchedPokemon
    } catch (error) {
        alert(error)
    }
}

export default fetchPokemon
