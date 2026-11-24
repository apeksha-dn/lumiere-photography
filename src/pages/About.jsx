import { Link } from 'react-router-dom';
import Img from '../components/Img';
import SectionHeading from '../components/SectionHeading';
import usePageMeta from '../hooks/usePageMeta';
import { IMG } from '../data/images';
import { initialPortfolio } from '../data/portfolioData';

const timeline = [['2014', 'First paid shoot: a friend’s engagement.'], ['2017', 'Opened the studio and began full-time wedding work.'], ['2020', 'Began fashion and editorial commissions.'], ['2024', 'Passed 150 weddings photographed.']];

export default function About() {
  usePageMeta('About', 'Meet the photographer behind the studio: story, philosophy and working approach.');
  return (
    <div className="container page">
      <div className="split">
        <Img src={IMG.about} w={1000} ratio="4/5" alt="Portrait of the lead photographer" eager />
        <div>
          <h1>I photograph people being themselves.</h1>
          <p>I’m Aarav (demo name). I started photographing family gatherings with a borrowed camera, and learnt that the best pictures happen in the minutes between the planned ones.</p>
          <p>Today the studio is a small team. Every project still begins with a conversation, not a package.</p>
        </div>
      </div>

      <section className="section">
        <SectionHeading title="The journey" />
        <ol className="timeline">{timeline.map(([y, t]) => <li key={y}><strong>{y}</strong><span>{t}</span></li>)}</ol>
      </section>

      <section className="section cols">
        <div><h3>Philosophy</h3><p>Photographs should feel like the day felt. We prefer natural light, quiet direction and honest expressions.</p></div>
        <div><h3>How we work</h3><p>A planning call, a location walk-through, the shoot, then a considered edit. You see a preview within three days.</p></div>
        <div><h3>Experience</h3><p>150+ weddings, featured in regional wedding magazines (demo claims: edit to match the real studio).</p></div>
      </section>

      <section className="section">
        <SectionHeading title="Behind the scenes" />
        <div className="bts">
          <Img src={IMG.behind} w={900} ratio="4/3" alt="Camera equipment ready for a shoot" />
          <Img src={initialPortfolio[7].src} w={900} ratio="4/3" alt="Guests at an event captured candidly" />
        </div>
      </section>
      <div className="cta inline"><h2>Let’s talk about your story.</h2><Link to="/booking" className="btn">Book a session</Link></div>
    </div>
  );
}
