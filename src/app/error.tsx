/* eslint-disable react-hooks/rules-of-hooks */
"use client"

import React, { useEffect } from 'react'

const error = ({ error, reset }: any) => {

    useEffect(() => {
        console.log("error : ", error)
    }, [error])

    return (
        <div className="text-center mt-10">
            <h1>Something went wrong. Please try again later.</h1>
            <button onClick={() => reset()} className="hover:text-amber-600">Tyr Again</button>
        </div>
    )
}

export default error