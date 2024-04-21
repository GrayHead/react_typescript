import React from 'react';
import withSomethingNew from "../hoc/withSomethingNew";

const OriginalComponent2 = () => {
    return (
        <div>
            <i>Lorem ipsum dolor sit.</i>
        </div>
    );
};

export default withSomethingNew(OriginalComponent2);
