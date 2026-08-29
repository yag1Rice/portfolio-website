import { useEffect, useState } from "react";
import TiltPhoto from "../components/TiltPhoto";
import styles from '../styles/david_page.module.css';
import Globe from "../components/Globe";
import myself from '../assets/myself.jpg'



const dots = [
    { id: 1, lat: 44.6456, lon: -63.5762, color: '#00ff00', size: 4, label: 'Halifax', subtitle: '2004-2007', description: 'Born here' },
    { id: 2, lat: 29.7604, lon: -95.3698, color: '#00ff00', size: 4, label: 'Houston', subtitle: '2022-2026', description: 'Undergrad' },
    { id: 3, lat: 30.2852, lon: -97.7340, color: '#00ff00', size: 4, label: 'Austin', subtitle: '2026-present', description: 'Grad School' },
    { id: 4, lat: 42.3867, lon: -71.0982, color: '#00ff00', size: 4, label: 'Boston', subtitle: '2007-2022', description: 'Grew up here' },
    { id: 5, lat: 30.0548, lon: 31.1995, color: '#00ff00', size: 4, label: 'Cairo', subtitle: '', description: 'From here' },
    { id: 6, lat: 15.5518, lon: 32.5324, color: '#00ff00', size: 4, label: 'Khartoum', subtitle: '', description: 'From here' },
];



function About() {

  // Not sure what this does {
  const [hoveredDot, setHoveredDot] = useState<any>(null);
  // const [selectedDot, setSelectedDot] = useState<any>(null);
  const [, setSelectedDot] = useState<any>(null);

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  // Not sure what this does }

  return (
    <div className="min-h-screen bg-slate-950 text-white flex items-center">
      <div className="max-w-4xl mx-auto px-6">
        <p className="text-cyan-400 text-sm uppercase tracking-widest mb-4">
          Greek Philopher
        </p>
        <h1 className="text-6xl font-light mb-4">
          La Peace
        </h1>
      </div>

      <div>
        <TiltPhoto src={myself} alt="Picture of Me!" />
      </div>

      <div className={styles.globeWrapper}>
        <div className={styles.globeLabel}>
          {hoveredDot && <><span className={styles.globeLabelLocation}>{hoveredDot.label}</span><span className={styles.globeLabelSubtitle}>{hoveredDot.subtitle}</span><span className={styles.globeLabelDescription}>{hoveredDot.description}</span></>}
        </div>
        <Globe size={isMobile ? 300 : 500} dots={dots} onDotClick={setSelectedDot} onDotHover={setHoveredDot} dotSizeMultiplier={0.3} />
      </div>


    </div>
    )
}

export default About