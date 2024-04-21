import React from 'react';
import withSomethingNew from "../hoc/withSomethingNew";

const OriginalComponent1 = () => {
    return (
        <div>
            <i>Lorem ipsum.</i>
        </div>
    );
};

export default withSomethingNew(OriginalComponent1);
