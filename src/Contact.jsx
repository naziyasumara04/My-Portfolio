export default function Contact() {
  return (
    <div>
      <h1
        className="container"
        id="contact"
        style={{
          textAlign: "center",
          backgroundColor: "#D3D3D3",
        }}
      >
        Contact
      </h1>
      <div
        className="container mb-5"
        style={{ backgroundColor: "#D3D3D3", borderRadius: "10px" }}
      >
        <form>
          <div className="row mt-4">
            <div className="col-lg-2 col-md-2 col-sm-6 mt-4">
              <label for="name" class="form-label mt-4">
                Name:
              </label>
            </div>
            <div className="col-lg-10 col-md-10 col-sm-6 mt-4">
              <input
                type="name"
                class="form-control"
                id="name"
                placeholder="Enter your name"
              />
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-lg-2 col-md-2 col-sm-6">
              <label for="exampleInputEmail1" class="form-label">
                Email address:
              </label>
            </div>
            <div className="col-lg-10 col-md-10 col-sm-6">
              <input
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                placeholder="Enter email"
              />
            </div>
          </div>

          <div className="row mt-4">
            <div className="col-lg-2 col-md-2 col-sm-6">
              <label for="message" class="form-label">
                Enter Message:
              </label>
            </div>
            <div className="col-lg-10 col-md-10 col-sm-6">
              <textarea
                class="form-control"
                id="message"
                placeholder="Enter your message"
              />
            </div>
          </div>

          <button type="submit" class="btn btn-primary mt-3 mb-4">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
