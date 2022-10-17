import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import landingVideo from "../assets//pexels-kindel-media-8164311.mp4";
import Button from "react-bootstrap/esm/Button";
import { Link } from "react-router-dom";

function Home() {
  return (
    <Row>
      <Col xs={12} className="p-0 position-relative">
        <div
          style={{ backgroundColor: "black", padding: "100%", height: "100vh" }}
          className="position-absolute"
        ></div>
        <video width="100%" autoPlay loop muted className=" opacity-75">
          <source src={landingVideo} type="video/mp4" />
        </video>

        <div className="position-absolute top-50 start-50 translate-middle text-white text-center">
          <h3 className="fw-bold text-white ">Sé parte del cambio</h3>
          <p>Apúntate a cambiar la realidad de mas de x miles de personas</p>
          <Button variant="outline-light" as={Link} to="/dashboard">
            Conoce más
          </Button>
        </div>
      </Col>
    </Row>
  );
}
export default Home;
