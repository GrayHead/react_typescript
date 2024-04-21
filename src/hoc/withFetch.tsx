import {FC, useEffect, useState} from "react";

const withFetch = (Component: FC<any>, endpoint: string) => {

    return (props: any) => {
        const [items, setItems] = useState<any>([]);

        useEffect(() => {
            fetch('https://jsonplaceholder.typicode.com' + endpoint)
                .then(value => value.json())
                .then(value => {
                    setItems(value);
                });

        }, []);
        return <Component items={items} {...props} />;

    }
}
export default withFetch;
