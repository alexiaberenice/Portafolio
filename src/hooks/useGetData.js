import { useState, useEffect} from 'react';
const api="hola"
const useGetData = () => {
    const [mydata, setData] = usestate([]);

    useEffect(() => {
        fetch(api)
        .then(response=> response.json())
        .then(data => setData(data))
    }, []);

    return mydata;
}

export default userGetData;