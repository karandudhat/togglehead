import React from 'react';
import './Stats.css';

const Stats = () => {
  const statItems = [
    {
      subHeader: 'Lorem ipsum',
      number: '123+',
      title: 'Lorem ipsum',
      description:
        'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat',
    },
    {
      subHeader: 'Lorem ipsum',
      number: '12+',
      title: 'Lorem ipsum',
      description:
        'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et',
    },
    {
      subHeader: 'Lorem ipsum',
      number: '12+',
      title: 'Lorem ipsum',
      description:
        'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et',
    },
    {
      subHeader: 'Lorem ipsum',
      number: '123',
      title: 'Lorem ipsum',
      description:
        'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut',
    },
  ];

  return (
    <section className="stats-section">
      <div className="container stats-container">
        <div className="stats-grid">
          {statItems.map((item, idx) => (
            <div className="stat-column" key={idx}>

              {/* Small Heading */}
              <span className="stat-subheader">
                {item.subHeader}
              </span>

              {/* Number */}
              <h2 className="stat-number">
                {item.number}
              </h2>

              {/* Title */}
              <h3 className="stat-title">
                {item.title}
              </h3>

              {/* Description */}
              <p className="stat-description">
                {item.description}
              </p>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;