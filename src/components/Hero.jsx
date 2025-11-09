import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-[90vh] w-full bg-black text-white overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/zks9uYILDPSX-UX6/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-6 pt-24 pb-16 md:pt-32">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-sm backdrop-blur">
          <span className="inline-block h-2 w-2 rounded-full bg-emerald-400" />
          Kajian Pemuda TRUST ISLAM
        </div>

        <h1 className="mt-6 text-3xl leading-tight font-semibold md:text-5xl md:leading-[1.15]">
          Ketika logika dan iman seolah tak sejalan, ke mana seharusnya kita percaya?
        </h1>
        <p className="mt-4 max-w-2xl text-base text-white/80 md:text-lg">
          Temukan kembali keyakinan bahwa Islam adalah solusi sejati dari setiap keresahan.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row gap-3">
          <a href="#booking" className="inline-flex items-center justify-center rounded-lg bg-emerald-500 px-5 py-3 text-sm font-semibold text-black transition hover:bg-emerald-400">
            Daftar Gratis
          </a>
          <a href="#agenda" className="inline-flex items-center justify-center rounded-lg border border-white/20 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10">
            Lihat Agenda
          </a>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-black to-transparent" />
    </section>
  );
}
