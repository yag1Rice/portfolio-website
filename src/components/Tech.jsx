import { motion } from 'framer-motion';
import { BallCanvas } from './moyin_canvas';
import { SectionWrapper } from '../utils/moyin_hoc';
import { technologies } from '../utils/moyin_constants';
import { styles } from '../utils/moyin_styles';
import { textVariant } from '../utils/moyin_motion';

const Tech = () => {
  return (
    <>

      <div className="flex flex-wrap justify-center gap-10 mt-14">
        {technologies.map((technology) => (
          <div className="w-28 h-28" key={technology.name}>
            <BallCanvas icon={technology.icon} />
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, '');
