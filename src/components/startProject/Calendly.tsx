'use client';

import { InlineWidget } from 'react-calendly';
import FadeInOnView from '../others/animation/FadeIn';

interface ICalendlyProps {
  ref: React.Ref<HTMLDivElement | null>;
  url: string;
}

export default function Calendly({ url, ref }: ICalendlyProps) {
  const pageSettings = {
    backgroundColor: '#0A0A0A',
    hideEventTypeDetails: false,
    hideLandingPageDetails: false,
    primaryColor: '#8247F5',
    textColor: 'ffffff'
  };

  return (
    <FadeInOnView>
      <div
        className="w-full text-center overflow-hidden my-20 p-4 gradient-bg-2"
      >
        <h3 ref={ref} className="py-5 text-center bg-gradient-to-r from-white to-gray-300/60 bg-clip-text text-4xl sm:text-5xl md:text-6xl font-bold leading-none text-transparent">
          Schedule your call
        </h3>
        <span className="text-muted-foreground">Check the next available slot to book your meeting appointment.</span>

        <div
          className="w-full h-[500px] sm:h-[600px] md:h-[650px] lg:h-[700px] mt-10"
        >
          <InlineWidget
            url={url}
            pageSettings={pageSettings}
            styles={{
              height: '100%',
              width: '100%',
            }}
          />
        </div>
      </div>

    </FadeInOnView >
  );
};