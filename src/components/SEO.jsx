import { useEffect } from 'react';

export default function SEO() {
  useEffect(() => {
    const title = 'TRUST ISLAM - Kajian Pemuda | Daftar Gratis & E‑Tiket QR';
    const desc = 'Ketika logika dan iman seolah tak sejalan, ke mana seharusnya kita percaya? Temukan kembali keyakinan bahwa Islam adalah solusi sejati. Daftar gratis, dapatkan e‑tiket dengan QR.';
    document.title = title;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute('content', desc);
    else {
      const m = document.createElement('meta');
      m.name = 'description';
      m.content = desc;
      document.head.appendChild(m);
    }
  }, []);
  return null;
}
