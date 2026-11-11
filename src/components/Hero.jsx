import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import NeuralBackground from './NeuralBackground';
import { personalInfo, typingLines, heroStats } from '../utils/data';

/* ─── useCountUp Hook ─── */
function useCountUp(end, duration = 2000, decimals = 0) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let startTime;
    let frame;
    const animate = (ts) => {
      if (!startTime) startTime = ts;
      const p = Math.min((ts - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setCount(parseFloat((eased * end).toFixed(decimals)));
      if (p < 1) frame = requestAnimationFrame(animate);
    };
    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, [end, duration, decimals]);
  return count;
}

/* ─── Styles ─── */
const heroStyles = `
  .hero {
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    overflow: hidden;
    padding: 100px 0 40px;
  }
  .hero-backdrop-glow {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 92vw;
    max-width: 1100px;
    height: 82%;
    background: radial-gradient(ellipse 75% 65% at 50% 50%, rgba(6, 9, 26, 0.82) 0%, rgba(6, 9, 26, 0.45) 60%, transparent 85%);
    pointer-events: none;
    z-index: 1;
  }
  .hero-content {
    position: relative;
    z-index: 2;
    max-width: 1140px;
    margin: 0 auto;
    padding: 0 24px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
  .hero-greeting {
    font-family: 'DM Mono', monospace;
    font-size: 12px;
    color: #4F7FFF;
    letter-spacing: 3px;
    text-transform: uppercase;
    margin-bottom: 12px;
  }
  .hero-name {
    font-family: 'Plus Jakarta Sans', 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    font-weight: 700;
    font-size: clamp(44px, 6.4vw, 76px);
    color: #FFFFFF;
    line-height: 1.1;
    letter-spacing: -0.025em;
    margin: 0 0 14px 0;
  }
  .hero-role {
    font-family: 'Plus Jakarta Sans', 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    font-size: clamp(19px, 2.4vw, 22px);
    font-weight: 600;
    letter-spacing: -0.01em;
    background: linear-gradient(90deg, #4F7FFF, #9B6DFF);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    margin: 0 0 10px 0;
  }
  .hero-uni {
    font-family: 'DM Mono', monospace;
    font-size: 14px;
    color: #6B7A99;
    margin: 0 0 24px 0;
    letter-spacing: 0.3px;
  }
  .hero-typing {
    font-family: 'DM Mono', monospace;
    font-size: 16px;
    color: #6B7A99;
    min-height: 28px;
    margin-bottom: 36px;
  }
  .hero-typing-prefix {
    color: #4F7FFF;
  }
  @keyframes blink { 0%, 100% { opacity: 1; } 50% { opacity: 0; } }
  .hero-cursor {
    animation: blink 0.8s step-end infinite;
    color: #4F7FFF;
  }
  .hero-buttons {
    display: flex;
    gap: 16px;
    justify-content: center;
    align-items: center;
    margin-bottom: 44px;
    flex-wrap: wrap;
  }
  .hero-btn-primary {
    font-family: 'Syne', sans-serif;
    font-weight: 600;
    font-size: 15px;
    background: #4F7FFF;
    color: #06091A;
    padding: 14px 32px;
    border-radius: 8px;
    border: none;
    text-decoration: none;
    transition: all 0.3s ease;
    display: inline-block;
  }
  .hero-btn-primary:hover {
    background: #6A93FF;
    transform: translateY(-2px);
    color: #06091A;
    box-shadow: 0 4px 20px rgba(79, 127, 255, 0.4);
  }
  .hero-btn-outline {
    font-family: 'Syne', sans-serif;
    font-weight: 600;
    font-size: 15px;
    background: transparent;
    color: #4F7FFF;
    padding: 14px 32px;
    border-radius: 8px;
    border: 1.5px solid #4F7FFF;
    text-decoration: none;
    transition: all 0.3s ease;
    display: inline-block;
  }
  .hero-btn-outline:hover {
    background: rgba(79, 127, 255, 0.08);
    transform: translateY(-2px);
    color: #4F7FFF;
    box-shadow: 0 4px 20px rgba(79, 127, 255, 0.2);
  }
  .hero-stats {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 16px;
    width: 100%;
    max-width: 1040px;
    margin: 0 auto;
  }
  .hero-stat-card {
    background: #0D1230;
    border-radius: 14px;
    padding: 22px 18px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    transition: all 0.3s ease;
    min-height: 116px;
  }
  .hero-stat-card.accent-teal {
    border: 1px solid rgba(79, 127, 255, 0.3);
    box-shadow: 0 0 24px rgba(79, 127, 255, 0.12);
  }
  .hero-stat-card.accent-blue {
    border: 1px solid rgba(155, 109, 255, 0.3);
    box-shadow: 0 0 24px rgba(155, 109, 255, 0.12);
  }
  .hero-stat-card:hover {
    transform: translateY(-5px);
  }
  .hero-stat-card.accent-teal:hover {
    box-shadow: 0 0 32px rgba(79, 127, 255, 0.32);
  }
  .hero-stat-card.accent-blue:hover {
    box-shadow: 0 0 32px rgba(155, 109, 255, 0.32);
  }
  .hero-stat-value {
    font-family: 'Syne', sans-serif;
    font-size: 30px;
    font-weight: 700;
    line-height: 1;
    margin-bottom: 6px;
  }
  .hero-stat-value.teal {
    color: #4F7FFF;
  }
  .hero-stat-value.blue {
    color: #9B6DFF;
  }
  .hero-stat-label {
    font-family: 'DM Mono', monospace;
    font-size: 11px;
    color: #6B7A99;
    text-transform: uppercase;
    letter-spacing: 1px;
    line-height: 1.35;
  }
  .hero-stat-sub {
    font-family: 'DM Mono', monospace;
    font-size: 9.5px;
    color: #556677;
    margin-top: 6px;
    letter-spacing: 0.5px;
  }
  .hero-scroll {
    margin-top: 32px;
    display: inline-flex;
    flex-direction: column;
    align-items: center;
    gap: 6px;
    opacity: 0.85;
    transition: opacity 0.2s;
    cursor: pointer;
    text-decoration: none;
  }
  .hero-scroll:hover {
    opacity: 1;
  }
  .hero-scroll-text {
    font-family: 'DM Mono', monospace;
    font-size: 10px;
    color: #4F7FFF;
    letter-spacing: 2px;
    text-transform: uppercase;
  }
  @keyframes bounceChevron {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(6px); }
  }
  .hero-chevron {
    color: #4F7FFF;
    font-size: 18px;
    line-height: 1;
    animation: bounceChevron 1.5s ease-in-out infinite;
  }
  @media (max-width: 900px) {
    .hero { padding-top: 85px; }
    .hero-stats { grid-template-columns: repeat(2, 1fr); max-width: 540px; }
  }
  @media (max-width: 540px) {
    .hero { padding-top: 75px; }
    .hero-stats { grid-template-columns: 1fr; max-width: 320px; }
    .hero-buttons { flex-direction: column; width: 100%; }
    .hero-btn-primary, .hero-btn-outline { width: 100%; text-align: center; }
  }
`;

/* ─── StatCard ─── */
function StatCard({ stat, delay }) {
  const count = useCountUp(stat.value, 2000, stat.decimals || 0);
  const formattedCount = stat.decimals
    ? count.toLocaleString(undefined, { minimumFractionDigits: stat.decimals, maximumFractionDigits: stat.decimals })
    : Math.round(count).toLocaleString();

  return (
    <motion.div
      className={`hero-stat-card accent-${stat.accent}`}
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
    >
      <div className={`hero-stat-value ${stat.accent}`}>
        {formattedCount}{stat.suffix}
      </div>
      <div className="hero-stat-label">{stat.label}</div>
      {stat.tooltip && (
        <div className="hero-stat-sub">
          {stat.tooltip}
        </div>
      )}
    </motion.div>
  );
}

/* ─── Hero ─── */
export default function Hero() {
  const [typedText, setTypedText] = useState(typingLines[0]);
  const lineIdx = useRef(0);
  const charIdx = useRef(typingLines[0].length);
  const isDeleting = useRef(true);

  useEffect(() => {
    let timeout;
    const tick = () => {
      const currentLine = typingLines[lineIdx.current];
      if (!isDeleting.current) {
        charIdx.current++;
        setTypedText(currentLine.substring(0, charIdx.current));
        if (charIdx.current >= currentLine.length) {
          isDeleting.current = true;
          timeout = setTimeout(tick, 2000);
        } else {
          timeout = setTimeout(tick, 45);
        }
      } else {
        charIdx.current--;
        setTypedText(currentLine.substring(0, charIdx.current));
        if (charIdx.current <= 0) {
          isDeleting.current = false;
          lineIdx.current = (lineIdx.current + 1) % typingLines.length;
          timeout = setTimeout(tick, 400);
        } else {
          timeout = setTimeout(tick, 28);
        }
      }
    };
    timeout = setTimeout(tick, 1000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      <style>{heroStyles}</style>
      <section className="hero" id="home">
        <NeuralBackground />
        <div className="hero-backdrop-glow" />
        <div className="hero-content">
          <motion.p
            className="hero-greeting"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            HELLO, I'M
          </motion.p>

          <motion.h1
            className="hero-name"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Sushmitha Lavanuru
          </motion.h1>

          <motion.p
            className="hero-role"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.45 }}
          >
            {personalInfo.role}
          </motion.p>

          <motion.p
            className="hero-uni"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.55 }}
          >
            B.Tech @ {personalInfo.university} · {personalInfo.location}
          </motion.p>

          <motion.div
            className="hero-typing"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            <span className="hero-typing-prefix">▸ </span>
            {typedText}
            <span className="hero-cursor">|</span>
          </motion.div>

          <motion.div
            className="hero-buttons"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.85 }}
          >
            <a href="#projects" className="hero-btn-primary">See My Work</a>
            <a href="/sushmitha-cv.pdf" download className="hero-btn-outline">Download CV ↓</a>
          </motion.div>

          <div className="hero-stats">
            {heroStats.map((stat, i) => (
              <StatCard key={stat.label} stat={stat} delay={1.0 + i * 0.1} />
            ))}
          </div>

          <motion.a
            href="#about"
            className="hero-scroll"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.5 }}
            aria-label="Scroll to about"
          >
            <span className="hero-scroll-text">SCROLL</span>
            <span className="hero-chevron">⌄</span>
          </motion.a>
        </div>
      </section>
    </>
  );
}
