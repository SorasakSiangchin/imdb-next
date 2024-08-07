"use client"

import React from 'react'
import Card from './Card'

const Results = ({ results }: any) => {
    return (
        <div className='sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 max-w-6xl mx-auto py-4' >
            {results.map((result: any, index: number) => {
                return <Card result={result} key={index} />
            })}
        </div>
    )
}

export default Results