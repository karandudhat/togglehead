import React from "react";
import "./Examinations.css";

const Examinations = () => {
  const examList = [
    {
      date: "02th October 2014",
      level: "Level 1 exam",
      lines: null,
    },
    {
      date: "Nov-Dec 2016",
      level: "Level 2 / Lorem Ipsum / Lorem Ipsum",
      lines: null,
    },
    {
      date: "Ongoing this year",
      level: "Level 3 (Grad)",
      lines: null,
    },
  ];

  return (
    <section className="examinations-section" id="examinations">
      <div className="examinations-container">
        {/* Left Side Header */}
        <div className="exam-intro">
          <h2 className="exam-title">Upcoming Examinations</h2>
          <p className="exam-subtitle">
            Enquire about the examination &amp; register for the exams
          </p>
        </div>

        {/* Vertical Divider Line */}
        <div className="exam-divider"></div>

        {/* Right Side Exam Cards */}
        <div className="exam-cards-grid">
          {examList.map((exam, idx) => (
            <div key={idx} className="exam-card">
              <div className="exam-icon-wrapper">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="3"
                    y="5"
                    width="18"
                    height="16"
                    rx="2"
                    stroke="#12406F"
                    strokeWidth="1.6"
                  />
                  <path d="M3 9H21" stroke="#12406F" strokeWidth="1.6" />
                  <path
                    d="M7 3V6"
                    stroke="#12406F"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                  />
                  <path
                    d="M17 3V6"
                    stroke="#12406F"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                  />
                </svg>
              </div>

              <div className="exam-info">
                <h3 className="exam-date">{exam.date}</h3>
                <p className="exam-level">{exam.level}</p>
                {exam.lines &&
                  exam.lines.map((line, lIdx) => (
                    <p key={lIdx} className="exam-extra-text">
                      {line}
                    </p>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Examinations;