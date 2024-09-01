import "./home.css";
// import './App.css';

export default function Home() {
  return (
    <div
      className="container-fluid"
      id="home"
      style={{
        height: "300px",
        backgroundColor: "rgb(172, 169, 175)",
        display: "flex",
        alignContent: "center",
        justifyContent: "center",
      }}
    >
      <div className="row" style={{ textAlign: "center" }}>
        <h1 className="home">
          I'm
          <br />
          Web Developer
        </h1>
        <a href="/doc/NaziyaSumara.pdf" download className="download-button">
          <button>Download CV</button>
        </a>
      </div>
    </div>
  );
}
