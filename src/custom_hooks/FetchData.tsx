import {useState, useEffect} from 'react'
import { server_calls } from '../api/server';

export const useGetData = () => {
    const [ memeData, setData ] = useState<[]>([])

    async function handleDataFetch(){
        const result = await server_calls.get();
        setData(result)
    }

    //useEffect on mount
    useEffect( () =>{
        handleDataFetch();
    }, [])

    //with nothing after function- useEffect runs every time component it is used in changes
    //With empty list after function- useEffect will run on mount- ie) when it is first made - comes into exitence
    //With componentName in list- useEffect runs whenever compontnet name is changed

    return { memeData, getData:handleDataFetch }
}

