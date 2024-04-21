import {FC} from "react";

const withSomethingNew = (Component: FC) => {


    const WrappedComponent = (props: any) => {
        return (
            <div>
                <h2>some new feature</h2>
                <h2>some new feature</h2>
                <h2>some new feature</h2>
                <Component {...props}/>
                <h3>some new feature</h3>
                <h3>some new feature</h3>
                <h3>some new feature</h3>
                <h3>some new feature</h3>
            </div>

        )
    }
    return WrappedComponent;


}

export default withSomethingNew;
