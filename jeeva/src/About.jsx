import React from "react";

function About(props) {
    return (
        <>
            <div style={{margin:40}}>
            <hr></hr>
                <h3 style={{ color:"blue" }}>From About:</h3>
            <p>Name: {props.Name}</p>
            <p>Id: {props.Id}</p>
            <p>Age: {props.age}</p>
            <p>gender: {props.gender}</p>
            <p>location: {props.location}</p>
            </div>
        </>
    )
}
export default About