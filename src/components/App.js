import React from 'react';

const App = (props) => {
    const { firstValue, secondValue } = props;
    return (
        <div>
            <div>
                <strong>First Value:</strong><span>{ firstValue }</span>
            </div>
            <div>
                <strong>Second Value:</strong><span>{ secondValue }</span>
            </div>
        </div>
    );
}

export default App;