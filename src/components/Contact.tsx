import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Connect</h4>
            <p>
              <a
                href="mailto:abhishekkalligudd@gmail.com"
                data-cursor="disable"
              >
                abhishekkalligudd@gmail.com
              </a>
            </p>
            <p>
              <a
                href="tel:+919535654502"
                data-cursor="disable"
              >
                +91 9535654502
              </a>
            </p>
            <h4>Education</h4>
            <p>
              B.E. Computer Science &amp; Engg, SDM College of Engg &amp; Tech — 2022–2026 (CGPA: 8.4)
            </p>
            <p>
              PUC Science, Raja Lakamangouda P.U College — 2017–2019 (61.83%)
            </p>
            <p>
              SSLC CBSE, KLE M Munaavalli School — 2007–2017 (CGPA: 9.6)
            </p>
          </div>
          <div className="contact-box">
            <h4>Social</h4>
            <a
              href="https://github.com/Abhishek-kalligudd"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              GitHub <MdArrowOutward />
            </a>
            <a
              href="https://www.linkedin.com/in/abhishek-kalligudd-a666a4297"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              LinkedIn <MdArrowOutward />
            </a>
            <a
              href="mailto:abhishekkalligudd@gmail.com"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              Email <MdArrowOutward />
            </a>
            <a
              href="tel:+919535654502"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              Phone <MdArrowOutward />
            </a>
          </div>
          <div className="contact-box">
            <h2>
              Designed and Developed <br /> by <span>Abhishek Kalligudd</span>
            </h2>
            <h5>
              <MdCopyright /> 2026
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
