import { useMemo, useState } from 'react';

const EVENT = {
  name: 'Kajian Pemuda TRUST ISLAM',
  date: 'Sabtu, 21 Desember 2025',
  time: '19.00 WIB',
  venue: 'Auditorium TRUST ISLAM, Jakarta',
};

function generateTicketId() {
  const base = Date.now().toString(36) + Math.random().toString(36).slice(2, 8);
  return `TRUST-${base.toUpperCase()}`;
}

export default function Booking() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', org: '', qty: 1 });
  const [ticket, setTicket] = useState(null);
  const ticketId = useMemo(() => generateTicketId(), []);

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    // In real app: call backend to save + email + QR. Here we simulate and render ticket page locally.
    const t = {
      id: ticketId,
      name: form.name.trim(),
      email: form.email.trim().toLowerCase(),
      phone: form.phone.trim(),
      org: form.org.trim(),
      qty: 1,
      event: EVENT,
      verifyUrl: `${window.location.origin}/?verify=${ticketId}`,
      createdAt: new Date().toISOString(),
    };
    setTicket(t);
    // Scroll to ticket
    setTimeout(() => {
      document.getElementById('ticket').scrollIntoView({ behavior: 'smooth' });
    }, 100);
  }

  return (
    <section id="booking" className="relative w-full bg-white">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-semibold md:text-3xl">Daftar Gratis</h2>
            <p className="mt-2 text-gray-600">Isi data diri kamu dengan benar. E-tiket akan otomatis dikirim ke email kamu.</p>

            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Nama Lengkap</label>
                <input required name="name" value={form.name} onChange={handleChange} className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-emerald-500 focus:outline-none" placeholder="Nama kamu" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input required type="email" name="email" value={form.email} onChange={handleChange} className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-emerald-500 focus:outline-none" placeholder="emailkamu@mail.com" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">No. HP</label>
                <input required name="phone" value={form.phone} onChange={handleChange} className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-emerald-500 focus:outline-none" placeholder="08xxxxxxxxxx" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Instansi</label>
                <input name="org" value={form.org} onChange={handleChange} className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-emerald-500 focus:outline-none" placeholder="Kampus/Komunitas (opsional)" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Jumlah Tiket</label>
                <input disabled value={1} className="mt-1 w-full rounded-lg border border-gray-200 bg-gray-50 px-4 py-2 text-gray-500" />
                <p className="mt-1 text-xs text-gray-500">Maksimal 1 tiket per pendaftar.</p>
              </div>

              <button type="submit" className="w-full rounded-lg bg-emerald-500 px-5 py-3 font-semibold text-black transition hover:bg-emerald-400">
                Dapatkan E‑Tiket Gratis
              </button>
              <p className="text-xs text-gray-500">Dengan menekan tombol ini, kamu setuju untuk menerima email konfirmasi dan pengingat acara.</p>
            </form>
          </div>

          <div id="ticket" className="md:pl-10">
            <TicketPreview ticket={ticket} />
          </div>
        </div>
      </div>
    </section>
  );
}

function TicketPreview({ ticket }) {
  if (!ticket) {
    return (
      <div className="sticky top-6 rounded-xl border border-gray-200 bg-gray-50 p-6 text-gray-600">
        Tiket kamu akan tampil di sini setelah pendaftaran berhasil.
      </div>
    );
  }

  const qrData = encodeURIComponent(ticket.verifyUrl);
  const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=220x220&data=${qrData}`;

  return (
    <div className="sticky top-6 rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
      <h3 className="text-lg font-semibold">E‑Tiket Kamu</h3>
      <p className="mt-1 text-sm text-gray-600">Tunjukkan QR ini saat registrasi.</p>

      <div className="mt-4 grid gap-6 md:grid-cols-[1fr,220px] md:items-start">
        <div>
          <div className="rounded-lg bg-gray-50 p-4">
            <p className="text-sm text-gray-500">Nama Pemegang</p>
            <p className="font-semibold">{ticket.name}</p>
            <div className="mt-3 grid grid-cols-2 gap-3 text-sm">
              <div>
                <p className="text-gray-500">ID Tiket</p>
                <p className="font-mono text-xs">{ticket.id}</p>
              </div>
              <div>
                <p className="text-gray-500">Email</p>
                <p>{ticket.email}</p>
              </div>
            </div>
          </div>

          <div className="mt-4 rounded-lg bg-gray-50 p-4 text-sm">
            <p className="text-gray-500">Detail Acara</p>
            <p className="font-semibold">{ticket.event.name}</p>
            <p className="mt-1">{ticket.event.date} • {ticket.event.time}</p>
            <p className="text-gray-600">{ticket.event.venue}</p>
            <a href={ticket.verifyUrl} className="mt-3 inline-block text-emerald-600 hover:text-emerald-500">Link verifikasi</a>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center gap-2">
          <img src={qrUrl} alt="QR Ticket" className="h-[220px] w-[220px] rounded-md border border-gray-200 bg-white p-2" />
          <p className="text-xs text-gray-500">QR memuat URL verifikasi yang valid.</p>
        </div>
      </div>

      <div className="mt-6 flex gap-3">
        <button onClick={() => window.print()} className="rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium hover:bg-gray-50">Cetak</button>
        <a href={`mailto:${ticket.email}?subject=Tiket%20${encodeURIComponent(ticket.event.name)}&body=${encodeURIComponent(`Halo ${ticket.name},%0D%0A%0D%0ABerikut detail tiketmu:%0D%0AID: ${ticket.id}%0D%0AEvent: ${ticket.event.name}%0D%0AWaktu: ${ticket.event.date} ${ticket.event.time}%0D%0ATempat: ${ticket.event.venue}%0D%0ALink verifikasi: ${ticket.verifyUrl}%0D%0A%0D%0ASampai jumpa!`)}`} className="rounded-lg bg-black px-4 py-2 text-sm font-semibold text-white hover:bg-gray-900">Kirim ke Email</a>
      </div>
    </div>
  );
}
