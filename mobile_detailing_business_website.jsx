export default function MobileDetailingWebsite() {
  const services = [
    {
      title: "Exterior Detail",
      description:
        "Hand wash, wheel cleaning, tire shine, windows, and a glossy finish that makes your vehicle stand out.",
      price: "Starting at $80",
    },
    {
      title: "Interior Detail",
      description:
        "Vacuum, wipe-down, carpet and seat cleaning, door jambs, and a fresh clean interior feel.",
      price: "Starting at $100",
    },
    {
      title: "Full Detail",
      description:
        "Inside and out complete detail for a deep clean and showroom-style refresh.",
      price: "Starting at $160",
    },
  ];

  const highlights = [
    "Mobile service at your home or work",
    "Fast, reliable, and attention to detail",
    "Cars, trucks, SUVs, and family vehicles",
    "Easy booking by phone or text",
  ];

  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-gradient-to-br from-sky-500/20 via-transparent to-cyan-300/10" />
        <div className="relative mx-auto max-w-6xl px-6 py-20 md:py-28">
          <div className="grid gap-12 md:grid-cols-2 md:items-center">
            <div>
              <p className="mb-4 inline-block rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-1 text-sm font-medium text-cyan-200">
                Mobile Detailing in Your Area
              </p>
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                Ricky’s Quick & Easy
                <span className="block text-cyan-300">Mobile Detailing</span>
              </h1>
              <p className="mt-6 max-w-xl text-lg text-white/75">
                Professional mobile detailing that brings the clean to you. We help your vehicle look fresh, glossy, and ready to impress.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="tel:+15309459583"
                  className="rounded-2xl bg-cyan-400 px-6 py-3 font-semibold text-neutral-950 shadow-lg transition hover:scale-[1.02]"
                >
                  Call Now
                </a>
                <a
                  href="#services"
                  className="rounded-2xl border border-white/20 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
                >
                  View Services
                </a>
              </div>
              <div className="mt-6 text-sm text-white/60">
                Call or text: <span className="font-semibold text-white">(530) 945-9583</span>
              </div>
            </div>

            <div>
              <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur">
                <div className="rounded-3xl bg-neutral-900 p-6">
                  <div className="mb-4 flex items-center justify-between">
                    <h2 className="text-xl font-semibold">Why choose us?</h2>
                    <span className="rounded-full bg-cyan-400/10 px-3 py-1 text-xs font-medium text-cyan-200">
                      Fast & Clean
                    </span>
                  </div>
                  <div className="grid gap-3">
                    {highlights.map((item) => (
                      <div
                        key={item}
                        className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white/85"
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-10 max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
            Services
          </p>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Detail packages built for real results</h2>
          <p className="mt-4 text-white/70">
            Choose a quick refresh or a full deep clean. Pricing can vary by vehicle size and condition.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-lg"
            >
              <h3 className="text-2xl font-semibold">{service.title}</h3>
              <p className="mt-4 text-white/70">{service.description}</p>
              <div className="mt-6 text-lg font-bold text-cyan-300">{service.price}</div>
              <a
                href="tel:+15309459583"
                className="mt-6 inline-block rounded-2xl border border-cyan-400/30 px-5 py-2 font-medium text-cyan-200 transition hover:bg-cyan-400/10"
              >
                Book This Service
              </a>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/5">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="grid gap-10 md:grid-cols-2">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
                About
              </p>
              <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Clean cars. Easy booking. Mobile convenience.</h2>
              <p className="mt-5 text-white/70">
                Ricky’s Quick & Easy Mobile Detailing is focused on making your car look its best without wasting your time. We come to you and handle the hard work so your ride stays clean, fresh, and protected.
              </p>
            </div>

            <div className="grid gap-4">
              <div className="rounded-3xl border border-white/10 bg-neutral-900 p-5">
                <div className="text-sm text-white/50">Service Area</div>
                <div className="mt-2 text-xl font-semibold">Mobile service available locally</div>
              </div>
              <div className="rounded-3xl border border-white/10 bg-neutral-900 p-5">
                <div className="text-sm text-white/50">Booking</div>
                <div className="mt-2 text-xl font-semibold">Call or text for availability</div>
              </div>
              <div className="rounded-3xl border border-white/10 bg-neutral-900 p-5">
                <div className="text-sm text-white/50">Contact</div>
                <div className="mt-2 text-xl font-semibold">(530) 945-9583</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-20 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
          Book Today
        </p>
        <h2 className="mt-3 text-3xl font-bold sm:text-5xl">Give your vehicle a fresh, detailed look</h2>
        <p className="mt-5 text-lg text-white/70">
          Ready to get started? Reach out now and schedule your mobile detail.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a
            href="tel:+15309459583"
            className="rounded-2xl bg-cyan-400 px-6 py-3 font-semibold text-neutral-950 shadow-lg transition hover:scale-[1.02]"
          >
            Call (530) 945-9583
          </a>
          <a
            href="sms:+15309459583"
            className="rounded-2xl border border-white/20 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
          >
            Text to Book
          </a>
        </div>
      </section>

      <footer className="border-t border-white/10 px-6 py-8 text-center text-sm text-white/50">
        © 2026 Ricky’s Quick & Easy Mobile Detailing. All rights reserved.
      </footer>
    </div>
  );
}
