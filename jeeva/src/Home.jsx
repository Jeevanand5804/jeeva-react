import React from "react";

function Home(props) {
    return (
        <>
            <div style={{ margin: 40 }}>
                <h3 style={{ color:"blue" }}>From Home:</h3>
            <p>Name: {props.userDetails.Name}</p>
            <p>ID: {props.userDetails.Id}</p>
            <p>Age: {props.userDetails.age}</p>
            <p>Gender: {props.userDetails.gender}</p>
            <p>Location: {props.userDetails.location}</p>
                {/* <hr></hr> */}
            </div>
        </>
    )
}
export default Home