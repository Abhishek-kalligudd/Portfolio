import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container" id="career">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Fullstack Developer Intern</h4>
                <h5>Ecometa Integrated Solutions · Huballi</h5>
              </div>
              <h3>2026</h3>
            </div>
            <p>
              Jan 2026 – July 2026. Built and scaled the Aarambh platform ecosystem
              within the ONDC network using Node.js and Angular. Developed a dynamic
              weather-based surge pricing engine with a hexagonal GPS grid algorithm,
              engineered microservices with PostgreSQL, deployed containerized AWS
              infrastructure using Docker and Kubernetes, and created a Redis-backed
              Live Order Map handling 50k+ streaming orders.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>B.E. Computer Science &amp; Engg</h4>
                <h5>SDM College of Engg &amp; Tech · Dharwad</h5>
              </div>
              <h3>2022–26</h3>
            </div>
            <p>
              Bachelor of Engineering, Computer Science and Engineering (8th Semester
              CGPA: 8.4). Built production-grade full-stack projects including LapKart,
              focused on distributed systems, modern web technologies, database design,
              and cloud deployment practices.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>PUC Science</h4>
                <h5>Raja Lakamangouda P.U College · Belagavi</h5>
              </div>
              <h3>2017–19</h3>
            </div>
            <p>
              Pre-University Course in Science (Percentage: 61.83%), focusing on Physics,
              Chemistry, and Mathematics.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>SSLC CBSE</h4>
                <h5>KLE M Munaavalli School · Gokak</h5>
              </div>
              <h3>2007–17</h3>
            </div>
            <p>
              Completed secondary education with a distinguished CGPA of 9.6, building
              strong analytical foundations in mathematics and science.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
