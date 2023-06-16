 import React from "react";
function Profile(props) {
    return (
        <>
            <h1>{props.user.name}</h1>
            <img
                className="avatar"
                src={props.user.imageUrl}
                alt={'Photo of ' + props.user.name}
                style={{
                    width: props.user.imageSize,
                    height: props.user.imageSize,
                    borderRadius:50,
                }}

            />
        </>
    );
}
export default Profile

export function Profile1() {
    return (
        <div>
            <h1>Hello World</h1>
           <h2>hi</h2>
        </div>
    );
}
export function Profile2() {
    return (
        <>
            <h1>Hello World</h1>
            <h2>hi</h2>
        </>
    );
}