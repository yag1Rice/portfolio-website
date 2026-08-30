import { useEffect, useState } from 'react';
import ChessBoard from '../components/ChessBoard';
import david_styles from '../styles/david_page.module.css';



function Fun() {

  const [isMobile, setIsMobile] = useState(false);
  // const [selectedDot, setSelectedDot] = useState<any>(null);
  // const [hoveredDot, setHoveredDot] = useState<any>(null);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <>
    <div className={david_styles.cell4}>
            <ChessBoard />
          </div>
    </>
  )
}

export default Fun