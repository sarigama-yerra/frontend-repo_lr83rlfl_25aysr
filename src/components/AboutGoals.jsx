export default function AboutGoals() {
  return (
    <section id="about" className="relative w-full bg-white text-gray-900">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-10 md:grid-cols-2 md:gap-16">
          <div>
            <h2 className="text-2xl font-semibold md:text-3xl">Latar Belakang Singkat</h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Di tengah derasnya arus informasi, banyak dari kita merasa goyah: mana yang harus diikuti—logika atau iman? Kajian pemuda TRUST ISLAM hadir untuk menuntun kembali pada jawaban yang jernih: Islam bukan sekadar ajaran, melainkan solusi hidup yang menyeluruh.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold md:text-3xl">Tujuan Acara</h2>
            <ul className="mt-4 grid gap-3 text-gray-700">
              <li className="rounded-lg border border-gray-200 p-4">1) Menguatkan keyakinan lewat dalil dan logika yang sehat.</li>
              <li className="rounded-lg border border-gray-200 p-4">2) Menjawab keresahan seputar isu-isu iman dan kehidupan modern.</li>
              <li className="rounded-lg border border-gray-200 p-4">3) Menghubungkan pemuda dalam komunitas yang saling menguatkan.</li>
              <li className="rounded-lg border border-gray-200 p-4">4) Menginspirasi langkah praktis untuk menjadi muslim yang berdampak.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
