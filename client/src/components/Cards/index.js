import React from "react";

const cardStyle = {
    width: "18rem",
    // padding: "5px 5px"
}
export default  function Cards(children,id){
    return(
        <div key={id} className="card" style={cardStyle}>
  <div className="card-body">
    <h5 className="card-title">{children}</h5>
    <p className="card-text">{children}</p>
    <a href="/" className="btn btn-primary">Go somewhere</a>
  </div>
</div>
    )
}

// export function CardTitle(children,id){
//     return <h5 className="card-title">{children}</h5>
// }