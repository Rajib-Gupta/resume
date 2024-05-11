import * as React from "react";
import Header from "../../shared/header/header";
import ReactRoundedImage from "react-rounded-image";
import "./home.css";
import { Divider } from "@mui/material";
const Home = () => {
  return (
    <>
      {/* <Header /> */}
      <div className="container">
        <div className="home">
          <div className="profileImg">
            <ReactRoundedImage
              imageWidth="170"
              imageHeight="170"
              roundedSize="13"
              image={"/images/rajib.jpg"}
              hoverColor="linear-gradient(90deg, #3fff56 6.04%, #29ffdb 51.35%)"
              
            />
          </div>
          <div className="content">
            <h1>Hello! I'm Rajib</h1>
            <h2>
              Fullstack Developer, Technical Consultant, Typescript ReactJS
              NextJS AWS
            </h2>
            <h3>
              I am currently working as a Software Developer at Ogma Conceptions
              Pvt. Ltd.
            </h3>

            <div className="social">
              <a className="socila-logo">
                <img src="/images/github.png" />
              </a>
              <a className="socila-logo">
                <img src="/images/linkedin-24.png" />
              </a>
              <a className="socila-logo">
                <img src="/images/twitter-24.png" />
              </a>
              <a className="socila-logo">
                <img src="/images/instagram.png" />
              </a>
            </div>
              <hr className="solid"></hr>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
