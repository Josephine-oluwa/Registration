import React, { useEffect, useState } from 'react'


import { useQuery } from "@tanstack/react-query"
import { viewAuthor } from '../Api/Author'

export const useAuthor = () => {

    const [authors, setAuthors] = useState([])

    useEffect(() => {
        viewAuthor().then((res) => {
            setAuthors(res)
        })
    }, [])

    return authors
}


export const useTanAuthor = () => {
    const { data: authors, error, isLoading } = useQuery({
        queryKey: ['viewAuthor'],
        queryFn: viewAuthor
    })


    return { authors, error, isLoading }
}

