import { useEffect } from "react";
import Alert from "react-bootstrap/Alert";

export default function Maal() {
  useEffect(function () {
    document.title = "Zakat Maal | Calc Repo";
  }, []);
  return (
    <section className="section">
      <h3 className="section-title">Zakat Maal</h3>
      <Alert key={"info"} variant={"info"}>
        &#x1F6A7; Under Construction &#x1F6A7;
      </Alert>
    </section>
  );
}
