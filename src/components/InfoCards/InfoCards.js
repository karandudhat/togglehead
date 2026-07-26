import React, { useState, useEffect, useCallback, useRef } from 'react';
import './InfoCards.css';

const cards = [
  {
    title: 'Lorem ipsum',
    text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod',
  },
  {
    title: 'Lorem ipsum',
    text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod',
  },
  {
    title: 'Lorem ipsum',
    text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod',
  },
  {
    title: 'Lorem ipsum',
    text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod',
  },
   {
    title: 'Lorem ipsum',
    text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod',
  },
];

const InfoCards = () => {
  const [startIdx, setStartIdx] = useState(0);
  const [visibleCardsCount, setVisibleCardsCount] = useState(3);

  const touchStartX = useRef(null);
  const timerRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 640) {
        setVisibleCardsCount(1);
      } else if (window.innerWidth <= 920) {
        setVisibleCardsCount(2);
      } else {
        setVisibleCardsCount(3);
      }
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const maxIdx = Math.max(
    0,
    cards.length - visibleCardsCount
  );

  useEffect(() => {
    if (startIdx > maxIdx) {
      setStartIdx(maxIdx);
    }
  }, [visibleCardsCount, startIdx, maxIdx]);

  const next = useCallback(() => {
    setStartIdx((current) =>
      current + 1 > maxIdx ? 0 : current + 1
    );
  }, [maxIdx]);

  const prev = useCallback(() => {
    setStartIdx((current) =>
      current - 1 < 0 ? maxIdx : current - 1
    );
  }, [maxIdx]);

  const resetTimer = useCallback(() => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }

    timerRef.current = setInterval(next, 4500);
  }, [next]);

  useEffect(() => {
    resetTimer();

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [resetTimer]);

  const onTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const onTouchEnd = (e) => {
    if (touchStartX.current === null) return;

    const diff =
      touchStartX.current -
      e.changedTouches[0].clientX;

    if (Math.abs(diff) > 40) {
      if (diff > 0) {
        next();
      } else {
        prev();
      }

      resetTimer();
    }

    touchStartX.current = null;
  };

  return (
    <section className="info-cards-section">
      <div
        className="cards-track-wrapper container"
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        <div
          className="cards-track"
          style={{
            transform: `translateX(calc(-1 * ${startIdx} * (100% + var(--gap)) / var(--visible-cards)))`,
          }}
        >
          {cards.map((card, idx) => (
            <article
              key={idx}
              className="navy-info-card"
            >
              <h3 className="card-title">
                {card.title}
              </h3>

              <p className="card-text">
                {card.text}
              </p>

              <a
                href="#more"
                className="card-cta-link"
              >
                <span>Know More</span>

               <span className="arrow-circle">
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    aria-hidden="true"
  >
    <path
      d="M9 5L16 12L9 19"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
</span>
              </a>
            </article>
          ))}
        </div>
      </div>

      <div className="cards-dots container">
        {Array.from({ length: maxIdx + 1 }).map((_, idx) => (
          <button
            key={idx}
            type="button"
            className={`cards-dot ${
              idx === startIdx ? 'active' : ''
            }`}
            onClick={() => {
              setStartIdx(idx);
              resetTimer();
            }}
            aria-label={`Slide ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default InfoCards;