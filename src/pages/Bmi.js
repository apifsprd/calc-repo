import { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Alert from "react-bootstrap/Alert";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function Bmi() {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bmi, setBmi] = useState("");
  const [low, setLow] = useState("");
  const [high, setHigh] = useState("");
  const [notif, setNotif] = useState("");
  const [status, setStatus] = useState("");

  function saveTodoHandler(event) {
    event.preventDefault();

    if (!height || !weight) {
      return setNotif("Data berat dan tinggi harus di isi");
    }

    setNotif("");

    const heightSquared = (height / 100) * (height / 100);
    var bmi = weight / heightSquared;
    const low = Math.round(18.5 * heightSquared);
    const high = Math.round(24.99 * heightSquared);

    if (bmi >= 18.5 && bmi <= 24.99) {
      setStatus("NORMAL");
    } else if (bmi >= 25 && bmi <= 29.9) {
      setStatus("KEGEMUKAN / OVERWEIGHT");
    } else if (bmi >= 30) {
      setStatus("OBESITAS / OBESE");
    } else if (bmi < 18.5) {
      setStatus("KURUS / UNDERWEIGHT");
    }

    setBmi(bmi.toFixed(2));
    setLow(low);
    setHigh(high);
  }

  useEffect(function () {
    document.title = "BMI | Calc Repo";
  }, []);

  return (
    <section className="section">
      {/* <h3 className="section-title">BMI</h3> */}
      <p className="section-description">
        <b>Body mass index (BMI)</b> atau indeks massa tubuh adalah perkiraan
        lemak tubuh yang didasarkan pada berat dan tinggi badan. Perhitungan ini
        dapat membantu menentukan apakah kamu memiliki berat badan yang kurang,
        berat badan sehat, kelebihan berat badan, atau obesitas.
      </p>

      {notif && (
        <Alert key={"warning"} variant={"warning"}>
          {notif}
        </Alert>
      )}

      {status && (
        <>
          <Card className="mb-3">
            <Card.Body className="text-center">
              <Alert key={"info"} variant={"info"}>
                {bmi} | <b>{status}</b>
              </Alert>
              <b>
                Your suggested weight : {low} - {high} Kg
              </b>{" "}
            </Card.Body>
            <Card.Footer>
              Note : <br />
              {`Kurus / Underweight < 18`} <br />
              {`Normal 18.00 - 24.99`} <br />
              {`Kegemukan / Overweight 25.00 - 26.99`} <br />
              {`Obesitas / Obese >= 27`}
            </Card.Footer>
          </Card>
        </>
      )}

      <Card>
        <Card.Body>
          <Form onSubmit={saveTodoHandler}>
            {/* <Form.Group className="mb-3">
              <Form.Select aria-label="Default select example">
                <option>Gender</option>
                <option value="1">Male / Laki-laki</option>
                <option value="2">Female / Perempuan</option>
              </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Control type="number" placeholder="Age / Umur" />
            </Form.Group> */}

            <InputGroup className="mb-3">
              <Form.Control
                type="number"
                placeholder="Height / Tinggi"
                aria-label="Height / Tinggi"
                aria-describedby="basic-addon2"
                value={height}
                onChange={function (event) {
                  setHeight(event.target.value);
                }}
              />
              <InputGroup.Text id="basic-addon2">Cm</InputGroup.Text>
            </InputGroup>

            <InputGroup className="mb-3">
              <Form.Control
                type="number"
                placeholder="Weight / Berat"
                aria-label="Weight / Berat"
                aria-describedby="basic-addon2"
                value={weight}
                onChange={function (event) {
                  setWeight(event.target.value);
                }}
              />
              <InputGroup.Text id="basic-addon2">Kg</InputGroup.Text>
            </InputGroup>

            <Row>
              <Col>
                <div className="d-grid gap-2">
                  <Button variant="info" size="md" type="submit">
                    Calculate &rarr;
                  </Button>
                </div>
              </Col>
            </Row>
          </Form>
        </Card.Body>
      </Card>
    </section>
  );
}
