import {useEffect, useState} from "react";


const useFetch = <T, >(endpoint: string, init: T) => {

    const [data, setData] = useState(init);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com' + endpoint)
            .then(value => value.json())
            .then(value => {
                setData(value);
            });

    }, []);

    return data;
}

export {useFetch}
