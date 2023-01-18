import { useEffect } from "react";
export default function About() {
  useEffect(function () {
    document.title = "About | Calc Repo";
  }, []);
  return (
    <section className="section">
      <h3 className="section-title">Hi! &#128400;</h3>
      <p className="section-description">
        CALC REPO adalah kumpulan atau repositori calculator, semoga bisa
        membantu. <br />
        <br />
        Regards, <br />
        @apifsprd
      </p>
    </section>
  );
}
