import { TestimonialCard } from "./TestimonialCard";

export function ClientTestimonials() {
  return (
    <section className="max-w-6xl mx-auto p-4 py-20">
      <h3 className="mb-10 text-center bg-gradient-to-r from-white to-gray-300/60 bg-clip-text text-4xl sm:text-5xl md:text-6xl font-bold leading-none text-transparent">Client Testimonials</h3>
      <div className="grid gap-2 grid-cols-1 md:grid-cols-[repeat(auto-fill,minmax(20rem,1fr))] lg:grid-cols-[repeat(auto-fill,minmax(20rem,1fr))]">
        {[1, 2, 3].map((elem) => (
          <TestimonialCard key={elem} />
        ))}
      </div>
    </section>
  );
};