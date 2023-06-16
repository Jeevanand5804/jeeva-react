import React from "react";
import './Header.css';

function Header() {
  const header = {
    logo: {
      ImageUrl: "https://i.imgur.com/yXOvdOSs.jpg",
    },
    nav:['home','About','Feature'],
  };
  const linkItems = header.nav.map((link) => <a>{link}</a>);
    return (
      <div className="Header">
        {/* <div style={{ margin: 40 }}>
                <h3 style={{ color:"blue" }}>From Home:</h3>
            <p>Name: {props.userDetails.Name}</p>
            <p>ID: {props.userDetails.Id}</p>
            <p>Age: {props.userDetails.age}</p>
            <p>Gender: {props.userDetails.gender}</p>
            <p>Location: {props.userDetails.location}</p>
                <hr></hr>
            </div> */}
        <div className="img">
          <img
            className="Avatar"
            src={header.logo.ImageUrl}
            alt="Profile"
          />
        </div>
        <nav>
         {linkItems}
        </nav>
      </div>
    );
}
export default Header