import React from 'react';

function Buttons(props) {

    let {value, takeinput} = props
    return (
        <div>
            <button onClick={() => {takeinput(value)}}>{value}</button>
        </div>
    );
}

export default Buttons;