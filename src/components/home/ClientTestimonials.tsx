import FadeInOnView from "../others/animation/FadeIn";
import { TestimonialCard } from "./TestimonialCard";

export function ClientTestimonials() {
  return (
    <section className="w-full gradient-bg-2">
      <div className="max-w-6xl mx-auto p-4 pb-20 pt-40">
        <FadeInOnView>
          <h3 className="mb-10 text-center bg-gradient-to-r from-white to-gray-300/60 bg-clip-text text-4xl sm:text-5xl md:text-6xl font-bold leading-none text-transparent">Client Testimonials</h3>
        </FadeInOnView>
        <div className="grid gap-2 grid-cols-1 md:grid-cols-[repeat(auto-fill,minmax(20rem,1fr))] lg:grid-cols-[repeat(auto-fill,minmax(20rem,1fr))]">
          {[1, 2, 3].map((elem) => (
            <FadeInOnView key={elem}>
              <TestimonialCard />
            </FadeInOnView>
          ))}
        </div>
      </div>
    </section>
  );
};