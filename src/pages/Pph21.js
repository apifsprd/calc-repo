import { useEffect } from "react";
import Alert from "react-bootstrap/Alert";

export default function Pph21() {
  useEffect(function () {
    document.title = "PPh 21 | Calc Repo";
  }, []);
  return (
    <section className="section">
      <h3 className="section-title">PPh 21</h3>
      <Alert key={"info"} variant={"info"}>
        &#x1F6A7; Under Construction &#x1F6A7;
      </Alert>
    </section>
  );
}
