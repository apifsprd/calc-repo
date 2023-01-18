import { useEffect } from "react";
export default function Contact() {
  useEffect(function () {
    document.title = "Contact | Calc Repo";
  }, []);
  return (
    <section className="section">
      <h4 className="section-title">Follow For More!</h4>
      <ul>
        <li>
          <a href="https://instagram.com/apifsprd">Instagram</a>
        </li>
        <li>
          <a href="https://github.com/apifsprd">Github</a>
        </li>
      </ul>
    </section>
  );
}
