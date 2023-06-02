import React, { useState } from "react";
import images from "../../assets/images.png";
import emoji from "../../assets/emoji.png";
import "./index.css";
import styled from "styled-components";
import CSS from "./styling.module.css";
const Home = () => {
  const [data, setdata] = useState(false);
  const tampil = () => {
    setdata(!data);
  };
  return (
    <div style={{ flex: 1 }}>
      <div style={styles}>
        {data ? (
          <div
            style={{
              position: "absolute",
              top: 50,
            }}
          >
            <img src={emoji} className="emoji" alt="error" />
          </div>
        ) : (
          false
        )}

        <div
          style={{
            position: "absolute",
            width: 400,
            textAlign: "center",
          }}
        >
          <h4 style={{ fontSize: 20, fontFamily: "revert" }}>
            CTO & Co-Founder Eduwork
          </h4>
          <h1 style={{ fontSize: 50, letterSpacing: 7, paddingTop: 5 }}>
            Edi Hartono
          </h1>
          <Buttons onClick={tampil} type="button">
            Linkedln profil
          </Buttons>
        </div>
        <div className={CSS.style}>
          <img src={images} style={{ height: 300 }} alt="error" />
        </div>
      </div>
      <div style={{ textAlign: "center", padding: 20 }}>
        <h2 style={{ fontSize: "bold" }}>My Bio</h2>
        <p style={{ fontFamily: "fantasy" }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
          mollitia, molestiae quas vel sint commodi repudiandae consequuntur
          voluptatum laborum numquam blanditiis harum quisquam eius sed odit
          fugiat iusto fuga praesentium optio, eaque rerum! Provident similique
          accusantium nemo autem.Veritatis obcaecati tenetur iure eius earum ut
          molestias architecto voluptate aliquam nihil, eveniet aliquid culpa
          officia aut! Impedit sit sunt quaerat, odit, tenetur error, harum
          nesciunt ipsum debitis quas aliquid. Reprehenderit, quia. Quo neque
          error repudiandae fuga? Ipsa laudantium molestias eos sapiente
          officiis modi at sunt excepturi expedita sint? Sed quibusdam
          recusandae alias error harum maxime adipisci amet laborum.
        </p>
      </div>
    </div>
  );
};

export default Home;
const styles = {
  backgroundColor: "#f1b701",
  flex: 1,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "600px",
};
const Buttons = styled.button`
  border: 2px solid #534b3e;
  box-shadow: 1px 2px 9px grey;
  background-color: #df9006;
  margin-top: 40px;
  padding: 6px 15px;
  border-radius: 5px;
  &:hover {
    background-color: #fce4a8;
  }
`;
