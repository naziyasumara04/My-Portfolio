import "./About.css";

export default function About() {
  return (
    <div className="container" id="about">
      <div className="about">About me</div>
      <div className="row mt-5">
        <div className="col-6-md col-6-lg col-12-sm">
          <img src="/image/naziya.jpg" alt="myimage" />
        </div>
        <div
          className="col-6-md col-6-lg col-12-sm mt-3 ml-5 p-4"
          style={{ backgroundColor: "rgb(172, 169, 175)" }}
        >
          <h1>Hello!</h1>
          <h4>My name is Naziya</h4>
          <p>
            As a passionate and innovative web developer,I have successfully
            developed various projects using the MERN stack, leveraging MongoDB,
            Express.js, React, and Node.js to build full-stack applications. My
            projects range from dynamic, responsive web applications to complex
            platforms with robust back-end functionality and interactive user
            interfaces. Through these projects, I have honed my skills in
            RESTful API development, database design, state management, and
            deploying scalable applications. My experience with the MERN stack
            allows me to create seamless, end-to-end solutions that effectively
            meet both client and user needs."
          </p>
          <div className="links">
            <a href="https://github.com/naziyasumara04">
              <i class="fa-brands fa-github"></i>Github
            </a>
            <a href="www.linkedin.com/in/naziyasumara" target="_blank">
              <i class="fa-brands fa-linkedin"></i>
              Linkdln
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
