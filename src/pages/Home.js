import { useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

export default function Home() {
  useEffect(function () {
    document.title = "Calc Repo";
  }, []);
  return (
    <section className="section">
      <Row style={{ textAlign: "center" }}>
        <Col sm={4} xs={4}>
          <Link to={"/bmi"} style={{ textDecoration: "none" }}>
            <Card style={{ height: "5rem" }}>
              <Card.Body>
                <Card.Title>BMI</Card.Title>
              </Card.Body>
            </Card>
          </Link>
        </Col>
        <Col sm={4} xs={4}>
          <Link to={"/pph21"} style={{ textDecoration: "none" }}>
            <Card style={{ height: "5rem" }}>
              <Card.Body>
                <Card.Title>PPh 21</Card.Title>
              </Card.Body>
            </Card>
          </Link>
        </Col>
        <Col sm={4} xs={4}>
          <Link to={"/maal"} style={{ textDecoration: "none" }}>
            <Card style={{ height: "5rem" }}>
              <Card.Body>
                <Card.Title>Zakat Maal</Card.Title>
              </Card.Body>
            </Card>
          </Link>
        </Col>
      </Row>

      <Row className="mt-3">
        <Col sm={4} xs={4}>
          <Link to={"/contact"} style={{ textDecoration: "none" }}>
            <Card style={{ height: "5rem" }}>
              <Card.Body>
                <Card.Title className="text-center">+Req</Card.Title>
              </Card.Body>
            </Card>
          </Link>
        </Col>
      </Row>
    </section>
  );
}
