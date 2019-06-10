import React from 'react';

const btnStyle= {
    float:"right",
    marginBottom:10
}
export function Input(props) {
    return (
        <div className="form-group">
            <input className="form-control" {...props} />
        </div>
    );
}

export function FormBtn(props){
return (
    <button {...props} style={btnStyle} className="btn btn-success">
        {props.children}
    </button>
);
}