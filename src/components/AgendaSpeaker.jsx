export default function AgendaSpeaker() {
  return (
    <section id="agenda" className="relative w-full bg-gray-50">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-start">
          <div>
            <h2 className="text-2xl font-semibold md:text-3xl">Agenda Singkat</h2>
            <ul className="mt-4 space-y-3 text-gray-700">
              <li className="rounded-lg bg-white p-4 shadow-sm">18.30 – 18.45: Registrasi & Ice Breaking</li>
              <li className="rounded-lg bg-white p-4 shadow-sm">18.45 – 19.00: Tilawah & Pembukaan</li>
              <li className="rounded-lg bg-white p-4 shadow-sm">19.00 – 20.00: Sesi Materi Utama</li>
              <li className="rounded-lg bg-white p-4 shadow-sm">20.00 – 20.20: Tanya Jawab</li>
              <li className="rounded-lg bg-white p-4 shadow-sm">20.20 – 20.30: Penutup & Foto Bersama</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold md:text-3xl">Pembicara</h2>
            <div className="mt-4 flex items-center gap-4 rounded-xl bg-white p-5 shadow-sm">
              <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=240&auto=format&fit=crop" alt="Pembicara" className="h-20 w-20 rounded-full object-cover" />
              <div>
                <p className="text-lg font-semibold">Ustadz Ahmad Fikri</p>
                <p className="text-sm text-gray-600">Dai muda, pengajar akidah & pemikiran Islam</p>
                <p className="mt-2 text-sm text-gray-500">Menyampaikan materi yang hangat, ringan, dan logis—dekat dengan kehidupan pemuda.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
