import "./contact.css";
import { useForm, ValidationError } from "@formspree/react";
import Lottie from "lottie-react";
import doneAnimation from "../../animation/done.json";
import contactAnimation from "../../animation/contact_us.json";

export default function Contact() {
  const [state, handleSubmit] = useForm("xldralyw");

  return (
    <section className="contact-us">
      <h1 className="title">
        <span className="icon-envelope"></span>
        Contact us
      </h1>
      <p className="sub-titel">
        "As a passionate frontend developer, I'm always eager to connect with
        fellow professionals, potential clients, and anyone interested in my
        work. If you have any questions, feedback, or project inquiries, please
        don't hesitate to reach out. I'm committed to delivering high-quality
        web solutions and would love to discuss how I can help bring your ideas
        to life. Feel free to drop me a message through the contact form or
        email, and I'll
      </p>

      <div style={{ justifyContent: "space-between" }} className="flex">
        <form className="" action="" onSubmit={handleSubmit}>
          <div className="flex">
            <label htmlFor="email">Email Address:</label>
            <input
              required
              type="email"
              id="email"
              name="email"
              placeholder="Email Address"
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>

          <div className="flex" style={{ marginTop: "24px" }}>
            <label htmlFor="message">Your message:</label>
            <textarea
              required
              name="message"
              id="message"
              placeholder="Message"
            ></textarea>
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </div>

          <button type="submit" disabled={state.submitting} className="submit">
            {state.submitting ? "Submitting ..." : "Submit"}
          </button>

          {state.succeeded && (
            <p
              className="send_p flex"
              style={{ fontSize: "18px", marginTop: "1.7rem" }}
            >
              <Lottie
                loop={false}
                style={{ height: 60 }}
                animationData={doneAnimation}
              />
              Your message has been sent successfuly 👌
            </p>
          )}
        </form>
        <div className="animation">
          <Lottie
            className="contactAnimation "
            style={{ height: 355 }}
            animationData={contactAnimation}
          />
        </div>
      </div>
    </section>
  );
}
