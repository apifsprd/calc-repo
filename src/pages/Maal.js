import { useEffect, useState } from "react";
import Alert from "react-bootstrap/Alert";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CurrencyInput from "react-currency-input-field";

export default function Maal() {
  const [income, setIncome] = useState("");
  const [bonus, setBonus] = useState("");
  const [notif, setNotif] = useState("");
  const [result, setResult] = useState("");
  const [status, setStatus] = useState("");

  function saveTodoHandler(event) {
    event.preventDefault();
    if (!income || !bonus) {
      return setNotif("Pendapatan dan bonus harus anda isi");
    }
    setNotif("");

    if (
      parseInt(income.replace(/,/g, "")) + parseInt(bonus.replace(/,/g, "")) >=
      6828806
    ) {
      const result =
        ((parseInt(income.replace(/,/g, "")) +
          parseInt(bonus.replace(/,/g, ""))) *
          2.5) /
        100;
      setResult(result);
      setStatus("Penghasilan Anda telah mencapai atau melebihi nishab");
    } else {
      setResult(0);
      setStatus("Penghasilan Anda belum mencapai nishab");
    }
  }

  useEffect(function () {
    document.title = "Zakat Maal | Calc Repo";
  }, []);
  return (
    <section className="section">
      {/* <h3 className="section-title">Zakat Penghasilan</h3> */}
      <p
        className="section-description"
        style={{ fontSize: "14px", lineHeight: "25px" }}
      >
        <b>Zakat penghasilan</b> dapat ditunaikan setiap bulan dengan nilai
        nishab per bulannya adalah setara dengan nilai seperduabelas dari 85
        gram emas{" "}
        <b>(Nishab zakat penghasilan sebesar 85 gram emas per tahun.)</b>,
        dengan kadar 2,5%. Jadi apabila penghasilan setiap bulan telah melebihi
        nilai nishab bulanan, maka wajib dikeluarkan zakatnya sebesar 2,5% dari
        penghasilannya tersebut.
      </p>

      {status && (
        <Card className="mb-3">
          <Card.Body className="text-center">
            <p style={{ fontSize: "12px" }}>Jumlah zakat penghasilan anda</p>{" "}
            <CurrencyInput
              name="bonus"
              disabled
              intlConfig={{ locale: "id-ID", currency: "IDR" }}
              suffix=",-/bulan"
              value={result}
              decimalsLimit={2}
              style={{
                width: "100%",
                height: "80px",
                padding: "3%",
                border: "0",
                backgroundColor: "#CFF4FC",
                fontWeight: "600",
                fontSize: "24px",
                textAlign: "center",
              }}
            />
            <p style={{ fontWeight: "600", marginTop: "1%" }}>{status}</p>
          </Card.Body>
          <Card.Footer style={{ fontSize: "10px" }}>
            Note : Perhitungan Zakat penghasilan ini mengacu pada {""}
            <b>
              SK BAZNAS Nomor 01 Tahun 2023 Tentang Nisab Zakat Pendapatan dan
              Jasa,
            </b>
          </Card.Footer>
        </Card>
      )}

      {notif && (
        <Alert key={"warning"} variant={"warning"}>
          {notif}
        </Alert>
      )}

      <Card>
        <Card.Body>
          <Form onSubmit={saveTodoHandler}>
            <InputGroup className="mb-3">
              <InputGroup.Text id="basic-addon1">Rp.</InputGroup.Text>
              <CurrencyInput
                name="income"
                placeholder="Pendapatan per bulan"
                // defaultValue={1000}
                decimalsLimit={2}
                onChange={function (event) {
                  setIncome(event.target.value);
                }}
                style={{ width: "80%", height: "40px", padding: "3%" }}
              />
            </InputGroup>
            <InputGroup className="mb-3">
              <InputGroup.Text id="basic-addon1">Rp.</InputGroup.Text>
              <CurrencyInput
                name="bonus"
                placeholder="Bonus, THR dan lainnya"
                // defaultValue={1000}
                decimalsLimit={2}
                onChange={function (event) {
                  setBonus(event.target.value);
                }}
                style={{ width: "80%", height: "40px", padding: "3%" }}
              />
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
