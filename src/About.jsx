import "./About.css";
import myImage from "./assets/images/naziya.jpg";
export default function About() {
  return (
    <div className="container" id="about">
      <div className="about">About me</div>
      <div className="row">
        <div className="col-md-6 col-lg-6 col-sm-12 mr-5 mt-5">
          <img src={myImage} alt="My Image" />
        </div>
        <div
          className="col-md-6 col-lg-6 col-sm-12  mt-5 ml-5 p-4"
          style={{
            backgroundColor: "#D3D3D3",
            borderRadius: "10px",
          }}
        >
          <h1>Hello!</h1>
          <h4>My name is Naziya</h4>
          <p>
            As a passionate and innovative web developer,I have successfully
            developed various projects using the MERN stack, leveraging MongoDB,
            Express.js, React, and Node.js to build full-stack applications. My
            experience with the MERN stack allows me to create seamless,
            end-to-end solutions that effectively meet both client and user
            needs."
          </p>
          <div className="links">
            <a href="https://github.com/naziyasumara04">
              <i class="fa-brands fa-github"></i>&nbsp;&nbsp;Github
            </a>
            <a href="https://www.linkedin.com/in/naziyasumara/" target="_blank">
              <i class="fa-brands fa-linkedin"></i>&nbsp;&nbsp; Linkdln
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
