import { Container } from "./styles";
import { Form } from "../Form/Form";

export function Contact() {
  return (
    <Container id="contact">
      <header>
        <h2>Contact</h2>
        <p>Ready to get started on your project? </p>
        <p>Contact me now for a Free consultation.</p>
      </header>
      <div className="contacts">
        <div>
          <a href="mailto:pavlo.dovbysh.dev@gmail.com">
            pavlo.dovbysh.dev@gmail.com
          </a>
        </div>
        <div>
          <a href="tel:+48573581351">+48 (573)-581-351</a>
        </div>
      </div>
      {/* <Form></Form> */}
    </Container>
  );
}
