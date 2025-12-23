'use client';

import { useState, useEffect } from 'react';
import { Menu, X, ArrowLeft, FileText, Shield, AlertCircle, Users, Gavel } from 'lucide-react';
import Link from 'next/link';

export default function Terms() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <img src="/logo.png" alt="CLATECH Logo" className="h-10 w-10 rounded-lg" />
              <div>
                <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                  CLATECH
                </h1>
                <p className="text-xs text-gray-600">GEMILANG SEJAHTERA</p>
              </div>
            </div>

            <div className="flex items-center space-x-6">
              <Link href="/" className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition-colors">
                <ArrowLeft size={20} />
                <span>Kembali ke Beranda</span>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white p-4 rounded-2xl inline-block mb-6">
              <FileText size={48} />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Syarat dan Ketentuan
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Syarat dan ketentuan penggunaan layanan PT CLATECH GEMILANG SEJAHTERA.
            </p>
            <p className="text-sm text-gray-500 mt-4">
              Terakhir diperbarui: {new Date().toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>

          {/* Content Sections */}
          <div className="space-y-8">
            {/* Introduction */}
            <section className="bg-white p-8 rounded-2xl shadow-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <Gavel className="text-blue-600 mr-3" size={28} />
                Pendahuluan
              </h2>
              <div className="prose prose-gray max-w-none">
                <p className="text-gray-600 leading-relaxed">
                  Selamat datang di Syarat dan Ketentuan Layanan PT CLATECH GEMILANG SEJAHTERA. Dokumen ini mengatur 
                  penggunaan semua layanan yang kami sediakan, termasuk namun tidak terbatas pada konsultasi IT, 
                  pengembangan software, solusi cloud, dan layanan teknologi lainnya.
                </p>
                <p className="text-gray-600 leading-relaxed mt-4">
                  Dengan mengakses atau menggunakan layanan kami, Anda setuju untuk terikat oleh syarat dan ketentuan ini. 
                  Jika Anda tidak setuju dengan bagian mana pun dari syarat ini, Anda tidak boleh menggunakan layanan kami.
                </p>
              </div>
            </section>

            {/* Definitions */}
            <section className="bg-white p-8 rounded-2xl shadow-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Definisi</h2>
              <div className="space-y-4 text-gray-600">
                <div>
                  <p className="font-semibold text-gray-900">"Perusahaan"</p>
                  <p>Merujuk pada PT CLATECH GEMILANG SEJAHTERA, penyedia layanan teknologi.</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">"Layanan"</p>
                  <p>Merujuk pada semua layanan teknologi yang disediakan oleh Perusahaan, termasuk konsultasi IT, pengembangan software, solusi cloud, dan layanan terkait.</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">"Klien" atau "Anda"</p>
                  <p>Merujuk pada individu atau entitas yang menggunakan layanan Perusahaan.</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">"Data Klien"</p>
                  <p>Merujuk pada semua data, informasi, dan materi yang disediakan oleh Klien kepada Perusahaan dalam konteks penggunaan Layanan.</p>
                </div>
              </div>
            </section>

            {/* Service Description */}
            <section className="bg-white p-8 rounded-2xl shadow-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Deskripsi Layanan</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  PT CLATECH GEMILANG SEJAHTERA menyediakan berbagai layanan teknologi, termasuk:
                </p>
                <ul className="list-disc list-inside space-y-2">
                  <li>Konsultasi IT dan strategi teknologi</li>
                  <li>Pengembangan software kustom</li>
                  <li>Implementasi dan manajemen infrastruktur cloud</li>
                  <li>Keamanan siber dan proteksi data</li>
                  <li>Dukungan teknis dan maintenance</li>
                  <li>Pelatihan dan pengembangan sumber daya manusia</li>
                </ul>
                <p>
                  Perusahaan berhak untuk memodifikasi, menghentikan, atau menambah layanan sewaktu-waktu dengan pemberitahuan sebelumnya.
                </p>
              </div>
            </section>

            {/* User Responsibilities */}
            <section className="bg-white p-8 rounded-2xl shadow-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <Users className="text-blue-600 mr-3" size={28} />
                Tanggung Jawab Klien
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Sebagai pengguna layanan kami, Anda setuju untuk:
                </p>
                <ul className="list-disc list-inside space-y-2">
                  <li>Memberikan informasi yang akurat dan lengkap saat pendaftaran</li>
                  <li>Memelihara kerahasiaan kredensial akses Anda</li>
                  <li>Memberikan informasi yang benar dan relevan untuk pelaksanaan layanan</li>
                  <li>Tidak menggunakan layanan untuk aktivitas ilegal atau melanggar hukum</li>
                  <li>Mematuhi semua peraturan dan kebijakan yang berlaku</li>
                  <li>Melaporkan masalah atau keamanan kerentanan segera kepada kami</li>
                  <li>Memberikan kerjasama yang diperlukan untuk pelaksanaan layanan</li>
                </ul>
              </div>
            </section>

            {/* Payment Terms */}
            <section className="bg-white p-8 rounded-2xl shadow-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Syarat Pembayaran</h2>
              <div className="space-y-4 text-gray-600">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Harga dan Penagihan</h3>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Harga layanan akan ditentukan dalam proposal atau perjanjian terpisah</li>
                    <li>Pembayaran dapat dilakukan secara tunai, transfer bank, atau metode yang disepakati</li>
                    <li>Tagihan akan diterbitkan sesuai dengan jadwal yang disepakati</li>
                    <li>Biaya tambahan mungkin berlaku untuk layanan di luar cakupan perjanjian</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Jatuh Tempo dan Denda Keterlambatan</h3>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Pembayaran harus dilunasi sesuai dengan tanggal jatuh tempo yang tertera pada invoice</li>
                    <li>Keterlambatan pembayaran akan dikenakan bunga sebesar 2% per bulan</li>
                    <li>Perusahaan berhak menangguhkan layanan untuk pembayaran yang terlambat</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Confidentiality */}
            <section className="bg-white p-8 rounded-2xl shadow-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <Shield className="text-blue-600 mr-3" size={28} />
                Kerahasiaan
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Kedua belah pihak setuju untuk menjaga kerahasiaan informasi yang diperoleh selama hubungan bisnis:
                </p>
                <ul className="list-disc list-inside space-y-2">
                  <li>Informasi rahasia meliputi data teknis, finansial, operasional, dan strategis</li>
                  <li>Kerahasiaan berlaku selama hubungan bisnis dan 5 tahun setelahnya</li>
                  <li>Informasi rahasia tidak boleh dibagikan kepada pihak ketiga tanpa persetujuan tertulis</li>
                  <li>Kewajiban kerahasiaan tetap berlaku setelah terminasi perjanjian</li>
                </ul>
              </div>
            </section>

            {/* Intellectual Property */}
            <section className="bg-white p-8 rounded-2xl shadow-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Hak Kekayaan Intelektual</h2>
              <div className="space-y-4 text-gray-600">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Hak Milik Perusahaan</h3>
                  <p>
                    Semua hak kekayaan intelektual atas software, dokumentasi, metodologi, dan materi yang dikembangkan 
                    oleh Perusahaan dalam penyediaan layanan tetap menjadi milik Perusahaan.
                  </p>
                </div>
                
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Lisensi Klien</h3>
                  <p>
                    Klien mendapatkan lisensi non-eksklusif, tidak dapat dialihkan untuk menggunakan software atau solusi 
                    yang dikembangkan khusus untuk kebutuhan bisnis Klien, sesuai dengan ketentuan perjanjian.
                  </p>
                </div>
              </div>
            </section>

            {/* Limitation of Liability */}
            <section className="bg-white p-8 rounded-2xl shadow-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <AlertCircle className="text-blue-600 mr-3" size={28} />
                Pembatasan Tanggung Jawab
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Sejauh diizinkan oleh hukum:
                </p>
                <ul className="list-disc list-inside space-y-2">
                  <li>Total tanggung jawab Perusahaan tidak melebihi jumlah yang dibayarkan Klien untuk layanan terkait</li>
                  <li>Perusahaan tidak bertanggung jawab atas kerugian tidak langsung, insidental, atau konsekuensial</li>
                  <li>Perusahaan tidak menjamin kelangsungan operasi atau bebas dari gangguan</li>
                  <li>Perusahaan tidak bertanggung jawab atas kehilangan data atau kerusakan yang disebabkan oleh pihak ketiga</li>
                </ul>
              </div>
            </section>

            {/* Service Level Agreement */}
            <section className="bg-white p-8 rounded-2xl shadow-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Service Level Agreement (SLA)</h2>
              <div className="space-y-4 text-gray-600">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Ketersediaan Layanan</h3>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Uptime minimum 99.5% untuk layanan cloud hosting</li>
                    <li>Respons time maksimal 4 jam untuk tiket dukungan prioritas tinggi</li>
                    <li>Resolusi masalah dalam 24 jam untuk isu kritis</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Dukungan Teknis</h3>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Dukungan 24/7 untuk klien enterprise</li>
                    <li>Dukungan bisnis hours (09:00-17:00 WIB) untuk klien standar</li>
                    <li>Komunikasi melalui email, telepon, atau portal dukungan</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Termination */}
            <section className="bg-white p-8 rounded-2xl shadow-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Terminasi</h2>
              <div className="space-y-4 text-gray-600">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Terminasi oleh Klien</h3>
                  <p>
                    Klien dapat mengakhiri perjanjian dengan pemberitahuan tertulis 30 hari sebelumnya. 
                    Biaya yang telah dikeluarkan hingga tanggal terminasi tetap harus dibayar.
                  </p>
                </div>
                
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Terminasi oleh Perusahaan</h3>
                  <p>
                    Perusahaan dapat mengakhiri perjanjian jika:
                  </p>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Klien melanggar syarat dan ketentuan secara material</li>
                    <li>Klien gagal melakukan pembayaran selama 30 hari</li>
                    <li>Klien menggunakan layanan untuk aktivitas ilegal</li>
                    <li>Force majeure yang membuat penyediaan layanan tidak mungkin</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Force Majeure */}
            <section className="bg-white p-8 rounded-2xl shadow-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Force Majeure</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Perusahaan tidak bertanggung jawab atas kegagalan atau keterlambatan dalam melaksanakan kewajibannya 
                  jika disebabkan oleh kejadian di luar kendali wajar, termasuk:
                </p>
                <ul className="list-disc list-inside space-y-2">
                  <li>Bencana alam (gempa bumi, banjir, tsunami)</li>
                  <li>Perang, terorisme, atau kerusuhan sipil</li>
                  <li>Pemogokan atau aksi industrial</li>
                  <li>Gangguan listrik atau telekomunikasi yang luas</li>
                  <li>Kebijakan pemerintah atau peraturan baru</li>
                  <li>Pandemi atau wabah penyakit</li>
                </ul>
              </div>
            </section>

            {/* Dispute Resolution */}
            <section className="bg-white p-8 rounded-2xl shadow-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Penyelesaian Sengketa</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Sengketa yang timbul dari atau berhubungan dengan syarat dan ketentuan ini akan diselesaikan sebagai berikut:
                </p>
                <ol className="list-decimal list-inside space-y-2">
                  <li>Negosiasi baik hati antara para pihak</li>
                  <li>Mediasi melalui mediator independen</li>
                  <li>Arbitrase di Badan Arbitrase Nasional Indonesia (BANI)</li>
                  <li>Sebagai upaya terakhir, pengadilan negeri Serang</li>
                </ol>
                <p>
                  Hukum yang mengatur adalah hukum Republik Indonesia.
                </p>
              </div>
            </section>

            {/* General Provisions */}
            <section className="bg-white p-8 rounded-2xl shadow-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Ketentuan Umum</h2>
              <div className="space-y-4 text-gray-600">
                <ul className="list-disc list-inside space-y-2">
                  <li><strong>Keseluruhan Perjanjian:</strong> Syarat dan ketentuan ini merupakan keseluruhan perjanjian antara para pihak.</li>
                  <li><strong>Perubahan:</strong> Perusahaan berhak mengubah syarat dan ketentuan dengan pemberitahuan 30 hari.</li>
                  <li><strong>Pemisahan:</strong> Jika bagian mana pun dari syarat ini tidak sah, bagian lainnya tetap berlaku.</li>
                  <li><strong>Pengabaian:</strong> Kegagalan menegakkan hak tidak berarti pengabaian hak tersebut.</li>
                  <li><strong>Pemberitahuan:</strong> Semua pemberitahuan harus dalam bentuk tertulis dan dikirim ke alamat resmi.</li>
                </ul>
              </div>
            </section>

            {/* Contact Information */}
            <section className="bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-2xl border-2 border-blue-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Hubungi Kami</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Jika Anda memiliki pertanyaan tentang Syarat dan Ketentuan ini, silakan hubungi kami:
                </p>
                <div className="bg-white p-6 rounded-xl">
                  <p className="font-semibold text-gray-900 mb-2">PT CLATECH GEMILANG SEJAHTERA</p>
                  <p className="mb-2">
                    <strong>Alamat:</strong><br />
                    PERUMAHAN CIKANDE PERMAI BLOK P.20/17<br />
                    Desa/Kelurahan Cikande, Kec. Cikande<br />
                    Kab. Serang, Prov. Banten 42186
                  </p>
                  <p className="mb-2">
                    <strong>Email:</strong> legal@clatech.co.id<br />
                    <strong>Telepon:</strong> 0823-8246-6214
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <img src="/logo.png" alt="CLATECH Logo" className="h-8 w-8 rounded-lg" />
                <div>
                  <h3 className="text-lg font-bold">CLATECH</h3>
                  <p className="text-xs text-gray-400">GEMILANG SEJAHTERA</p>
                </div>
              </div>
              <p className="text-gray-400 text-sm">
                Solusi teknologi terdepan untuk kesuksesan bisnis Anda.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Navigasi</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><Link href="/" className="hover:text-white transition-colors">Beranda</Link></li>
                <li><Link href="/#about" className="hover:text-white transition-colors">Tentang Kami</Link></li>
                <li><Link href="/#services" className="hover:text-white transition-colors">Layanan</Link></li>
                <li><Link href="/#contact" className="hover:text-white transition-colors">Kontak</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Layanan</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Konsultasi IT</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Pengembangan Software</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Cloud Solutions</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Keamanan Siber</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
                <li><Link href="/terms" className="hover:text-white transition-colors">Terms & Conditions</Link></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
            <p>&copy; 2024 PT CLATECH GEMILANG SEJAHTERA. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}