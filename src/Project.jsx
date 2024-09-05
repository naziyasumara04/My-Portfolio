import "./project.css";
import todoImage from "./assets/images/todo.png";
import calImage from "./assets/images/calculator.png";
import wanImage from "./assets/images/wanderlust.png";
import qrImage from "./assets/images/qrcode.png";
import flavImage from "./assets/images/flavor.png";

export default function Project() {
  return (
    <div id="project">
      <h1
        className="container mt-5"
        style={{
          textAlign: "center",
          backgroundColor: "#D3D3D3",
        }}
      >
        Project
      </h1>

      <div className="container mt-3">
        <div className="row">
          <div className="col-sm-12 col-md-6 col-lg-6 p-2 ml-4 d-flex justify-content-center">
            <div className="card" style={{ width: "18rem" }}>
              <img src={todoImage} className="card-img-top" alt="todo_image" />
              <div className="card-body">
                <h5 className="card-title">Todo-App</h5>
                <p className="card-text fs-6">
                  This Todo list App made by me using HTML,CSS and JS.User can
                  add and delete their task.
                </p>
                <a
                  href="https://github.com/naziyasumara04/Todo-App"
                  class="btn btn-outline-secondary"
                >
                  Code
                </a>
                &nbsp;&nbsp;&nbsp;
                <a
                  href="https://naziyasumara04.github.io/Todo-App/"
                  class="btn btn-outline-secondary"
                >
                  View
                </a>
              </div>
            </div>
          </div>

          <div className="col-sm-12 col-md-6 col-lg-6 p-2 d-flex justify-content-center ">
            <div className="card" style={{ width: "18rem" }}>
              <img src={calImage} className="card-img-top" alt="todo_image" />
              <div className="card-body">
                <h5 className="card-title">Calculator</h5>
                <p className="card-text fs-6">
                  This calculator made by me using HTML,CSS nad JavaScript for
                  performing different operations.
                </p>
                <a
                  href="https://github.com/naziyasumara04/Calculator"
                  class="btn btn-outline-secondary"
                >
                  Code
                </a>
                &nbsp;&nbsp;&nbsp;
                <a
                  href="https://naziyasumara04.github.io/Calculator/"
                  class="btn btn-outline-secondary"
                >
                  View
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-sm-12 col-md-6 col-lg-6 p-2 ml-4 d-flex justify-content-center">
            <div className="card" style={{ width: "18rem" }}>
              <img src={wanImage} className="card-img-top" alt="todo_image" />
              <div className="card-body">
                <h5 className="card-title">Wanderlust</h5>
                <p className="card-text fs-6">
                  A wanderlust is for booking tours and picnics. I made it using
                  frontend and backend technologies.
                </p>
                <a
                  href="https://github.com/naziyasumara04/Airbnb"
                  class="btn btn-outline-secondary"
                >
                  Code
                </a>
                &nbsp;&nbsp;&nbsp;
                <a
                  href="https://airbnb-1-gan2.onrender.com"
                  class="btn btn-outline-secondary"
                >
                  View
                </a>
              </div>
            </div>
          </div>

          <div className="col-sm-12 col-md-6 col-lg-6 p-2 d-flex justify-content-center">
            <div className="card" style={{ width: "18rem" }}>
              <img src={qrImage} className="card-img-top" alt="todo_image" />
              <div className="card-body">
                <h5 className="card-title">QR code Generator</h5>
                <p className="card-text fs-6">
                  This QR code Generator make Qr code when user enter any URL or
                  text.
                </p>
                <a
                  href="https://github.com/naziyasumara04/Calculator"
                  class="btn btn-outline-secondary"
                >
                  Code
                </a>
                &nbsp;&nbsp;&nbsp;
                <a
                  href="https://naziyasumara04.github.io/QR-Code-Generator/"
                  class="btn btn-outline-secondary"
                >
                  View
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-sm-12 col-md-6 col-lg-6 p-2 ml-4 d-flex justify-content-center">
            <div className="card" style={{ width: "18rem" }}>
              <img src={flavImage} className="card-img-top" alt="todo_image" />
              <div className="card-body">
                <h5 className="card-title">flavourFusion</h5>
                <p className="card-text fs-6">
                  I made flavourFusion app using technologies are
                  HTML,CSS,JS,Bootstrap,Nodejs and MySQL
                </p>
                <a
                  href="https://github.com/naziyasumara04/flavourFusion"
                  class="btn btn-outline-secondary"
                >
                  Code
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
