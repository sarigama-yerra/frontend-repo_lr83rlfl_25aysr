export default function DocsInfo() {
  const ticketSpec = {
    id: 'TRUST-ABCDE12345',
    name: 'Nama Lengkap Peserta',
    email: 'email@domain.com',
    phone: '08xxxxxxxxxx',
    org: 'Instansi/Kampus/Komunitas',
    qty: 1,
    event: {
      name: 'Kajian Pemuda TRUST ISLAM',
      date: 'Sabtu, 21 Desember 2025',
      time: '19.00 WIB',
      venue: 'Auditorium TRUST ISLAM, Jakarta',
    },
    verifyUrl: 'https://domainkamu.com/verify/TRUST-ABCDE12345',
    createdAt: new Date().toISOString(),
  };

  const emailText = `Assalamu'alaikum, {NAMA}!
\nTerima kasih sudah mendaftar Kajian Pemuda TRUST ISLAM.
\nDetail Tiket:
- ID Tiket: {ID_TIKET}
- Nama: {NAMA}
- Email: {EMAIL}
- Acara: Kajian Pemuda TRUST ISLAM
- Waktu: Sabtu, 21 Desember 2025 — 19.00 WIB
- Lokasi: Auditorium TRUST ISLAM, Jakarta
\nE‑Tiket & QR: {LINK_VERIFIKASI}
Simpan email ini dan tunjukkan QR saat registrasi.
\nSampai jumpa, insyaAllah!`;

  return (
    <section id="docs" className="bg-white">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <h2 className="text-2xl font-semibold md:text-3xl">Spesifikasi & Panduan</h2>
        <div className="mt-6 grid gap-8 md:grid-cols-2">
          <div className="rounded-xl border border-gray-200 p-5">
            <h3 className="font-semibold">Struktur Section (HTML)</h3>
            <ol className="mt-3 list-decimal space-y-1 pl-5 text-sm text-gray-700">
              <li>Hero (Spline 3D + Tagline + CTA “Daftar Gratis”)</li>
              <li>Latar Belakang Singkat</li>
              <li>Tujuan (4 poin)</li>
              <li>Agenda Singkat</li>
              <li>Pembicara</li>
              <li>Formulir Booking (nama, email, no. HP, instansi, jumlah tiket=1)</li>
              <li>Halaman/Panel Tiket (nama, ID unik, detail acara, QR code)</li>
            </ol>
          </div>

          <div className="rounded-xl border border-gray-200 p-5">
            <h3 className="font-semibold">Teks Email Konfirmasi</h3>
            <pre className="mt-3 whitespace-pre-wrap rounded-md bg-gray-50 p-3 text-xs text-gray-800">{emailText}</pre>
          </div>

          <div className="rounded-xl border border-gray-200 p-5">
            <h3 className="font-semibold">Spesifikasi Data Tiket (JSON)</h3>
            <pre className="mt-3 overflow-auto rounded-md bg-gray-50 p-3 text-xs text-gray-800">{JSON.stringify(ticketSpec, null, 2)}</pre>
          </div>

          <div className="rounded-xl border border-gray-200 p-5">
            <h3 className="font-semibold">Petunjuk Generate QR</h3>
            <ul className="mt-3 list-disc pl-5 text-sm text-gray-700">
              <li>Format data: gunakan URL verifikasi yang valid, contoh: <code className="rounded bg-gray-100 px-1">https://domainkamu.com/verify/ID_TIKET</code>.</li>
              <li>Contoh layanan QR siap pakai: <code className="rounded bg-gray-100 px-1">https://api.qrserver.com/v1/create-qr-code/?size=220x220&data=ENCODED_URL</code>.</li>
              <li>Jika ingin lokal/offline, pakai library di frontend seperti <code className="rounded bg-gray-100 px-1">qrcode</code> atau <code className="rounded bg-gray-100 px-1">qrcode.react</code>.</li>
              <li>Gunakan <code className="rounded bg-gray-100 px-1">encodeURIComponent(url)</code> sebelum disisipkan ke query <code className="rounded bg-gray-100 px-1">data</code>.</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 rounded-xl bg-gray-50 p-5 text-sm text-gray-700">
          <p className="font-semibold">Microcopy yang digunakan</p>
          <ul className="mt-2 list-disc pl-5">
            <li>Tombol utama: “Daftar Gratis”, “Dapatkan E‑Tiket Gratis”</li>
            <li>Link sekunder: “Lihat Agenda”, “Link verifikasi”</li>
            <li>Helper: “Maksimal 1 tiket per pendaftar.”, “Tunjukkan QR ini saat registrasi.”</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
