import React, { Component } from "react";
export class Footer extends Component {
  render() {
    return (
      <>
        <div
          className="row"
          style={{
            backgroundColor: "blue",
            marginTop: "70px",
            backgroundColor: "#f2bc50",
          }}
        >
          <div className="col-md-4">
            <h5 style={{ color: "#89a832" }}>Visit Us in Ghana</h5>

            <h6 style={{ color: "brown" }}>Accra Ghana</h6>

            <p>Kumasi</p>
            <p>Cape Coast</p>
          </div>

          <div className="col-md-4">
            <h5 style={{ color: "#89a832" }}>Visit Us In Nigeria</h5>
            <h6 style={{ color: "brown" }}>Lagos</h6>
            <p> Kwara State</p>
            <p>Behind my house</p>
            <p>And anywhere you see me</p>
          </div>
          <div className="col-md-4">
            <h5 style={{ color: "#89a832" }}>Visit Us In Kenya</h5>
            <h6 style={{ color: "brown" }}>Nairobi,Kenya</h6>
            <p>Belgravia Center,14 Rivierside drive,5th floor</p>
            <p>Off Reverside Drive Hanover Center</p>
            <p>You are always welcome</p>
          </div>
        </div>
      </>
    );
  }
}

export default Footer;
