import { applications } from '@/lib/data';

export default function Applications() {
  return (
    <section
      id="applications"
      data-section-name="Applications & Solutions"
      className="bg-steel-950 py-14 lg:py-20 relative overflow-hidden"
    >
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 h-64 w-[800px] bg-gold-500/5 blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 lg:mb-14 reveal">
          <p className="text-gold-500 font-medium text-sm uppercase tracking-wider mb-2">
            Applications &amp; Solutions
          </p>
          <h2 className="font-heading font-bold text-2xl sm:text-3xl lg:text-4xl text-white">
            Where Our Products Are Used
          </h2>
          <p className="text-steel-300 mt-3 text-sm lg:text-base max-w-2xl mx-auto">
            From residential staircases to commercial projects and modular kitchens — our stainless
            steel products serve a wide range of applications.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 lg:gap-5">
          {applications.map((app) => (
            <div
              key={app.title}
              className="reveal group relative rounded-xl overflow-hidden cursor-pointer"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={app.image}
                  alt={app.alt}
                  width={600}
                  height={450}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-steel-950 via-steel-950/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-3 lg:p-4">
                <h3 className="font-heading font-semibold text-white text-xs lg:text-sm leading-tight">
                  {app.title}
                </h3>
              </div>
              <div className="absolute inset-0 border-2 border-gold-500/0 group-hover:border-gold-500/40 rounded-xl transition-all duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
