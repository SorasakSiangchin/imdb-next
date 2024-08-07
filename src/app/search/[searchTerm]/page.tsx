import Results from '@/components/Results';
import React from 'react'

const SearchPage = async ({ params }: any) => {
    const searchTerm = params.SearchTerm;

    const res = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=574995b000da0256972ae26187646cd7&query=${searchTerm}&language=en-US&page=1&include_adult=false`)

    const data = await res.json();

    const results = data.results

    console.log("data : ", data)

    return (
        <div>
            {
                results && results.length === 0 && (<h1>No results found</h1>)
            }
            {
                results && <Results results={results} />
            }
        </div>
    )
}

export default SearchPage