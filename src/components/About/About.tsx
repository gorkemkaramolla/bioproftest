import React from 'react';
import { useSpring, animated } from '@react-spring/web';
import { hakkimizda } from '@/util/hakkimizda/hakkimizda';
type Props = {};

const About = (props: Props) => {
  const animProps = useSpring({
    from: { opacity: 0, transform: 'translate3d(0, 50%, 0)' },
    to: { opacity: 1, transform: 'translate3d(0, 0, 0)' },
    config: { duration: 1000 },
  });
  return (
    <animated.div style={animProps}>
      <div className='mx-auto px-4 sm:px-8 container my-4 sm:my-8'>
        <h1 className='text-3xl text-center font-bold mb-8'>Hakkımızda</h1>
        {hakkimizda.map((paragraph) => (
          <p className='mt-4 leading-7  '>{paragraph}</p>
        ))}
      </div>
    </animated.div>
  );
};

export default About;
