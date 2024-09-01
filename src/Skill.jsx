import "./skill.css";

export default function Skill() {
  return (
    <div id="skill">
      <h1
        className="container mt-5"
        style={{ textAlign: "center", backgroundColor: "#D3D3D3" }}
      >
        Skills
      </h1>
      {/* <form> */}
      <div
        className="container p-5"
        style={{ backgroundColor: "#D3D3D3", borderRadius: "10px" }}
      >
        <div className="row">
          <div className="col-md-6 col-lg-6 col-sm-12">
            <label for="html">HTML:</label>
            <br />
            <input
              id="js"
              type="range"
              min="0"
              max="100"
              value="90"
              class="slider"
            />
            <br />
            <label for="js">Javascript</label>
            <br />
            <input
              id="html"
              type="range"
              min="0"
              max="100"
              value="80"
              class="slider"
            />
            <br />
            <label for="node">NodeJS</label>
            <br />
            <input
              id="node"
              type="range"
              min="0"
              max="100"
              value="70"
              class="slider"
            />
          </div>
          <div className="col-md-6 col-lg-6 col-sm-12">
            <label for="css">CSS:</label>
            <br />
            <input
              id="css"
              type="range"
              min="0"
              max="100"
              value="75"
              class="slider"
            />
            <br />
            <label for="react">ReactJS:</label>
            <br />
            <input
              id="react"
              type="range"
              min="0"
              max="100"
              value="60"
              class="slider"
            />
            <br />

            <label for="mon">MongoDB:</label>
            <br />
            <input
              id="mon"
              type="range"
              min="0"
              max="100"
              value="80"
              class="slider"
            />
          </div>
        </div>
      </div>

      {/* </form> */}
    </div>
  );
}
