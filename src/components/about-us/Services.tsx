'use client'

import FadeInOnView from '../others/animation/FadeIn';
import { RainbowButton } from '../magicui/rainbow-button';
import { MdKeyboardArrowRight } from 'react-icons/md';
import { useRouter } from 'next/navigation';
import { services } from '@/constants/services';

export default function Services() {
  const router = useRouter();

  return (
    <section className="px-4 my-20 gradient-bg-2">
      <div className="max-w-7xl mx-auto">
        <FadeInOnView>
          <div className="text-center mb-16">
            <h2 className="py-5 text-center bg-gradient-to-r from-white to-gray-300/50 bg-clip-text text-4xl sm:text-5xl md:text-6xl font-bold leading-none text-transparent">
              Our Services
            </h2>
            <p className="text-sm md:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              We provide comprehensive technology solutions to help your business grow and succeed in the digital landscape.
            </p>
          </div>
        </FadeInOnView>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
          {services.map((service, index) => (
            <div
              key={index}
              className="group rounded-2xl p-4 md:p-6 lg:p-8 border transition-all duration-300 hover:scale-[1.02]"
            >
              <FadeInOnView>
                <div className={`inline-flex p-2 md:p-3 rounded-2xl bg-gradient-to-r ${service.gradient} mb-6`}>
                  {service.icon}
                </div>

                <h3 className="text-xl md:text-2xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300/50 bg-clip-text text-transparent">
                  {service.title}
                </h3>

                <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                  {service.description}
                </p>

                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-muted-foreground text-sm">
                      <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${service.gradient} mr-3 flex-shrink-0`} />
                      {feature}
                    </li>
                  ))}
                </ul>
              </FadeInOnView>
            </div>
          ))}
        </div>

        <FadeInOnView>
          <div className="text-center mt-20">
            <h2 className="py-5 text-center bg-gradient-to-r from-white to-gray-300/50 bg-clip-text text-xl sm:text-2xl md:text-3xl font-bold leading-none text-transparent">
              Ready to Start Your Project?
            </h2>
            <p className="text-muted-foreground text-sm mb-8 max-w-2xl mx-auto">
              Let&apos;s discuss how we can help bring your ideas to life with our expert development services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <RainbowButton
                className="rounded-full py-6 min-w-xs mt-5 text-white flex items-center justify-center"
                onClick={() => router.push("/start-project")}
              >
                Start a project <MdKeyboardArrowRight className="mt-0.5" />
              </RainbowButton>
            </div>
          </div>
        </FadeInOnView>
      </div>
    </section>
  );
};