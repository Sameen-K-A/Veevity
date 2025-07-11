import Spline from '@splinetool/react-spline/next';

export default function Spinner() {
  return (
    <Spline
      scene="https://prod.spline.design/PRAtEV7rAOLbwGpM/scene.splinecode"
      className='absolute top-0 pointer-events-none opacity-50'
    />
  );
};