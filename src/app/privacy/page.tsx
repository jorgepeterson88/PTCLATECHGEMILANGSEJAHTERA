'use client';

import { useState, useEffect } from 'react';
import { Menu, X, ArrowLeft, Shield, Eye, Lock, User, Database } from 'lucide-react';
import Link from 'next/link';

export default function Privacy() {
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
              <Shield size={48} />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Kebijakan Privasi
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              PT CLATECH GEMILANG SEJAHTERA berkomitmen untuk melindungi privasi dan keamanan data pribadi Anda.
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
                <Eye className="text-blue-600 mr-3" size={28} />
                Pendahuluan
              </h2>
              <div className="prose prose-gray max-w-none">
                <p className="text-gray-600 leading-relaxed">
                  Selamat datang di Kebijakan Privasi PT CLATECH GEMILANG SEJAHTERA. Dokumen ini menjelaskan bagaimana kami mengumpulkan, 
                  menggunakan, melindungi, dan membagikan informasi pribadi Anda ketika menggunakan layanan kami, termasuk website, 
                  aplikasi, dan layanan konsultasi teknologi kami.
                </p>
                <p className="text-gray-600 leading-relaxed mt-4">
                  Kami menghargai privasi Anda dan berkomitmen untuk melindungi data pribadi Anda dengan standar keamanan tertinggi. 
                  Dengan menggunakan layanan kami, Anda menyetujui praktik-praktik yang dijelaskan dalam kebijakan ini.
                </p>
              </div>
            </section>

            {/* Data Collection */}
            <section className="bg-white p-8 rounded-2xl shadow-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <Database className="text-blue-600 mr-3" size={28} />
                Informasi yang Kami Kumpulkan
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Data Pribadi</h3>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>Nama lengkap dan informasi identitas</li>
                    <li>Alamat email dan nomor telepon</li>
                    <li>Alamat fisik dan informasi lokasi</li>
                    <li>Informasi pekerjaan dan perusahaan</li>
                    <li>Informasi pembayaran dan penagihan</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Data Teknis</h3>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>Alamat IP dan informasi perangkat</li>
                    <li>Data browser dan sistem operasi</li>
                    <li>Informasi penggunaan website</li>
                    <li>Cookies dan data tracking</li>
                    <li>Log aktivitas dan interaksi</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Data Usage */}
            <section className="bg-white p-8 rounded-2xl shadow-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <User className="text-blue-600 mr-3" size={28} />
                Penggunaan Informasi
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Kami menggunakan informasi yang kami kumpulkan untuk tujuan-tujuan berikut:
                </p>
                <ul className="list-disc list-inside space-y-2">
                  <li>Menyediakan dan mengelola layanan teknologi yang Anda minta</li>
                  <li>Memproses transaksi dan mengelola akun pelanggan</li>
                  <li>Mengkomunikasikan informasi penting tentang layanan kami</li>
                  <li>Memberikan dukungan teknis dan layanan pelanggan</li>
                  <li>Meningkatkan kualitas dan pengalaman layanan kami</li>
                  <li>Mengembangkan produk dan layanan baru</li>
                  <li>Melindungi keamanan dan integritas sistem kami</li>
                  <li>Mematuhi kewajiban hukum dan peraturan yang berlaku</li>
                </ul>
              </div>
            </section>

            {/* Data Protection */}
            <section className="bg-white p-8 rounded-2xl shadow-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <Lock className="text-blue-600 mr-3" size={28} />
                Keamanan Data
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  PT CLATECH GEMILANG SEJAHTERA mengimplementasikan langkah-langkah keamanan yang komprehensif untuk melindungi 
                  informasi pribadi Anda:
                </p>
                <ul className="list-disc list-inside space-y-2">
                  <li>Enkripsi data selama transmisi dan penyimpanan</li>
                  <li>Akses terbatas ke informasi pribadi untuk staf yang berwenang</li>
                  <li>Firewall dan sistem deteksi intrusi yang canggih</li>
                  <li>Audit keamanan rutin dan penilaian kerentanan</li>
                  <li>Backup data terenkripsi dan recovery plan</li>
                  <li>Kompliance dengan standar keamanan industri</li>
                </ul>
              </div>
            </section>

            {/* Third Party Sharing */}
            <section className="bg-white p-8 rounded-2xl shadow-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Pembagian dengan Pihak Ketiga</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Kami tidak menjual, menyewakan, atau membagikan informasi pribadi Anda dengan pihak ketiga untuk tujuan pemasaran. 
                  Kami hanya membagikan informasi Anda dalam keadaan berikut:
                </p>
                <ul className="list-disc list-inside space-y-2">
                  <li>Dengan persetujuan eksplisit Anda</li>
                  <li>Kepada penyedia layanan yang membantu operasi bisnis kami</li>
                  <li>Untuk mematuhi kewajiban hukum atau perintah pengadilan</li>
                  <li>Untuk melindungi hak, properti, atau keselamatan kami atau pihak lain</li>
                  <li>Dalam hubungan dengan merger, akuisisi, atau penjualan aset</li>
                </ul>
              </div>
            </section>

            {/* User Rights */}
            <section className="bg-white p-8 rounded-2xl shadow-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Hak Anda sebagai Pengguna</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Sebagai pemilik data, Anda memiliki hak-hak berikut sesuai dengan peraturan perlindungan data:
                </p>
                <ul className="list-disc list-inside space-y-2">
                  <li>Hak untuk mengakses data pribadi yang kami simpan tentang Anda</li>
                  <li>Hak untuk memperbaiki data yang tidak akurat atau tidak lengkap</li>
                  <li>Hak untuk menghapus data pribadi Anda dalam keadaan tertentu</li>
                  <li>Hak untuk membatasi pemrosesan data Anda</li>
                  <li>Hak untuk memindahkan data Anda ke layanan lain</li>
                  <li>Hak untuk menolak pemrosesan data untuk tujuan pemasaran</li>
                </ul>
              </div>
            </section>

            {/* Cookies */}
            <section className="bg-white p-8 rounded-2xl shadow-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Kebijakan Cookies</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Website kami menggunakan cookies untuk meningkatkan pengalaman pengguna:
                </p>
                <ul className="list-disc list-inside space-y-2">
                  <li><strong>Cookies Esensial:</strong> Diperlukan untuk fungsi dasar website</li>
                  <li><strong>Cookies Performa:</strong> Membantu kami memahami cara pengguna berinteraksi dengan website</li>
                  <li><strong>Cookies Fungsionalitas:</strong> Mengingat preferensi dan pengaturan Anda</li>
                  <li><strong>Cookies Pemasaran:</strong> Digunakan untuk menampilkan iklan yang relevan</li>
                </ul>
                <p>
                  Anda dapat mengatur preferensi cookies melalui pengaturan browser Anda.
                </p>
              </div>
            </section>

            {/* International Data */}
            <section className="bg-white p-8 rounded-2xl shadow-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Transfer Data Internasional</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Data pribadi Anda disimpan dan diproses terutama di Indonesia. Jika kami perlu mentransfer data ke luar negeri, 
                  kami akan memastikan bahwa transfer tersebut dilakukan dengan perlindungan yang memadai sesuai dengan 
                  peraturan yang berlaku.
                </p>
              </div>
            </section>

            {/* Changes to Policy */}
            <section className="bg-white p-8 rounded-2xl shadow-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Perubahan Kebijakan</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Kami dapat memperbarui kebijakan privasi ini dari waktu ke waktu untuk mencerminkan perubahan dalam praktik kami 
                  atau perubahan dalam peraturan yang berlaku. Setiap perubahan akan diposting di halaman ini dengan tanggal 
                  pembaruan terbaru.
                </p>
              </div>
            </section>

            {/* Contact Information */}
            <section className="bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-2xl border-2 border-blue-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Hubungi Kami</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Jika Anda memiliki pertanyaan tentang Kebijakan Privasi ini atau ingin menggunakan hak Anda, 
                  silakan hubungi kami:
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
                    <strong>Email:</strong> privacy@clatech.co.id<br />
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