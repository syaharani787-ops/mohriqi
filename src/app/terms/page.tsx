import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { FileText, AlertCircle, CheckCircle, Scale, Clock, Users } from 'lucide-react'
import Link from 'next/link'

export default function TermsAndConditions() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50">
      {/* Header */}
      <section className="bg-gradient-to-r from-orange-600 to-amber-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <Link href="/" className="inline-block mb-6">
              <div className="flex items-center justify-center w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full">
                <FileText className="w-8 h-8" />
              </div>
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Terms & Conditions</h1>
            <p className="text-xl text-orange-100 mb-6">
              Syarat dan Ketentuan MOH RIQI FAUZI
            </p>
            <p className="text-orange-100">
              Terakhir diperbarui: {new Date().toLocaleDateString('id-ID', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="prose prose-lg max-w-none">
            
            {/* Introduction */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl">
                  <FileText className="w-8 h-8 text-orange-600" />
                  Pendahuluan
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  Selamat datang di <span className="font-bold text-orange-600">MOH RIQI FAUZI</span>. 
                  Syarat dan Ketentuan ini mengatur penggunaan layanan kami, termasuk pembelian 
                  produk dan penggunaan fasilitas di kedai kami.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Dengan menggunakan layanan kami, Anda setuju untuk mematuhi syarat dan ketentuan 
                  yang berlaku. Jika Anda tidak setuju dengan bagian mana pun dari syarat ini, 
                  harap jangan gunakan layanan kami.
                </p>
              </CardContent>
            </Card>

            {/* Services */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl">
                  <CheckCircle className="w-8 h-8 text-orange-600" />
                  Layanan Kami
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">Produk yang Tersedia</h3>
                  <p className="text-gray-700 mb-3">
                    <span className="font-bold">MOH RIQI FAUZI</span> menyediakan:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                    <li>Berbagai jenis minuman (kopi, teh, jus, dll)</li>
                    <li>Makanan ringan dan pencuci mulut</li>
                    <li>Layanan pesan antar (delivery)</li>
                    <li>Fasilitas WiFi gratis</li>
                    <li>Ruang duduk yang nyaman</li>
                    <li>Layanan acara dan kumpul-kumpul</li>
                  </ul>
                </div>

                <Separator />

                <div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">Jam Operasional</h3>
                  <div className="bg-orange-50 p-4 rounded-lg">
                    <p className="text-gray-700">
                      <span className="font-semibold">Setiap Hari:</span> 06:00 - 22:00 WIB
                    </p>
                    <p className="text-gray-700 text-sm mt-2">
                      Jam operasional dapat berubah pada hari libur tertentu. 
                      Informasi perubahan akan diinformasikan melalui media sosial kami.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Ordering */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl">
                  <Users className="w-8 h-8 text-orange-600" />
                  Pemesanan dan Pembayaran
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">Cara Pemesanan</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                    <li>Pemesanan langsung di lokasi</li>
                    <li>Pemesanan melalui telepon: 0823-1059-8347</li>
                    <li>Pemesanan online melalui website</li>
                    <li>Pemesanan melalui aplikasi delivery partner</li>
                  </ul>
                </div>

                <Separator />

                <div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">Metode Pembayaran</h3>
                  <p className="text-gray-700 mb-3">
                    Kami menerima berbagai metode pembayaran:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                    <li>Tunai</li>
                    <li>Transfer Bank</li>
                    <li>E-Wallet (GoPay, OVO, DANA, dll)</li>
                    <li>Kartu Debit/Kredit</li>
                    <li>QRIS</li>
                  </ul>
                </div>

                <Separator />

                <div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">Kebijakan Pembatalan</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                    <li>Pembatalan dapat dilakukan maksimal 30 menit sebelum pengiriman</li>
                    <li>Untuk pesanan besar, pembatalan maksimal 2 jam sebelumnya</li>
                    <li>Pembayaran yang telah dilakukan tidak dapat dikembalikan</li>
                    <li>Kami berhak menolak pembatalan untuk alasan tertentu</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Delivery */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl">
                  <Clock className="w-8 h-8 text-orange-600" />
                  Layanan Pengiriman
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">Area Pengiriman</h3>
                  <p className="text-gray-700 mb-3">
                    Kami melayani pengiriman ke:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                    <li>Kecamatan Sumberbaru dan sekitarnya</li>
                    <li>Kota Jember (minimal order tertentu)</li>
                    <li>Area lain dapat disesuaikan dengan kesepakatan</li>
                  </ul>
                </div>

                <Separator />

                <div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">Biaya Pengiriman</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                    <li>Biaya pengiriman disesuaikan dengan jarak</li>
                    <li>Gratis ongkir untuk minimum pembelian Rp 100.000</li>
                    <li>Biaya tambahan untuk pengiriman malam hari</li>
                  </ul>
                </div>

                <Separator />

                <div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">Estimasi Waktu</h3>
                  <div className="bg-orange-50 p-4 rounded-lg">
                    <ul className="space-y-1 text-gray-700">
                      <li>• Area Sumberbaru: 15-30 menit</li>
                      <li>• Kota Jember: 45-60 menit</li>
                      <li>• Area lain: disesuaikan</li>
                    </ul>
                    <p className="text-sm text-gray-600 mt-2">
                      Waktu dapat berubah tergantung kondisi lalu lintas dan cuaca.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* User Responsibilities */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl">
                  <AlertCircle className="w-8 h-8 text-orange-600" />
                  Tanggung Jawab Pengguna
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  Sebagai pengguna layanan kami, Anda setuju untuk:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li>Memberikan informasi yang akurat dan lengkap</li>
                  <li>Memperlakukan fasilitas dan staf dengan sopan</li>
                  <li>Tidak membawa makanan dan minuman dari luar</li>
                  <li>Mematuhi peraturan yang berlaku di kedai</li>
                  <li>Menjaga kebersihan dan ketertiban</li>
                  <li>Tidak merokok di area dalam ruangan</li>
                  <li>Mematuhi batasan waktu penggunaan fasilitas</li>
                </ul>
              </CardContent>
            </Card>

            {/* Intellectual Property */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl">
                  <Scale className="w-8 h-8 text-orange-600" />
                  Hak Kekayaan Intelektual
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  Semua konten, merek, logo, dan materi milik <span className="font-bold text-orange-600">MOH RIQI FAUZI</span> 
                  dilindungi oleh hukum hak kekayaan intelektual. Anda tidak diperkenankan:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li>Menggunakan logo atau merek kami tanpa izin</li>
                  <li>Menyalin konten website untuk tujuan komersial</li>
                  <li>Mereproduksi materi promosi kami</li>
                  <li>Menggunakan nama kami untuk kepentingan pribadi</li>
                </ul>
              </CardContent>
            </Card>

            {/* Limitation of Liability */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="text-2xl">Batasan Tanggung Jawab</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  <span className="font-bold">MOH RIQI FAUZI</span> tidak bertanggung jawab atas:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li>Keterlambatan pengiriman di luar kendali kami</li>
                  <li>Alergi atau reaksi terhadap bahan makanan</li>
                  <li>Kehilangan barang pribadi di area kedai</li>
                  <li>Kerusakan akibat penggunaan fasilitas yang tidak tepat</li>
                  <li>Gangguan layanan akibat force majeure</li>
                </ul>
              </CardContent>
            </Card>

            {/* Privacy */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="text-2xl">Privasi Data</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  Kami berkomitmen melindungi privasi data pribadi Anda sesuai dengan 
                  Kebijakan Privasi kami. Dengan menggunakan layanan kami, Anda setuju 
                  dengan pengumpulan dan penggunaan data sesuai kebijakan yang berlaku.
                </p>
                <p className="text-gray-700">
                  Baca Kebijakan Privasi lengkap kami{" "}
                  <Link href="/privacy" className="text-orange-600 hover:underline">
                    di sini
                  </Link>
                </p>
              </CardContent>
            </Card>

            {/* Changes */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="text-2xl">Perubahan Syarat dan Ketentuan</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  Kami berhak mengubah syarat dan ketentuan ini kapan saja. Perubahan 
                  akan diberitahukan melalui website atau media sosial kami. Penggunaan 
                  lanjutan layanan setelah perubahan berarti Anda menerima syarat yang diperbarui.
                </p>
              </CardContent>
            </Card>

            {/* Contact */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="text-2xl">Hubungi Kami</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  Jika Anda memiliki pertanyaan tentang syarat dan ketentuan ini, 
                  silakan hubungi kami:
                </p>
                <div className="bg-orange-50 p-4 rounded-lg">
                  <p className="font-semibold text-orange-800 mb-2">MOH RIQI FAUZI</p>
                  <p className="text-gray-700">📍 Dusun Krajan, Kaliglagah, Kec. Sumberbaru, Kab. Jember, Prov. Jawa Timur</p>
                  <p className="text-gray-700">📞 0823-1059-8347</p>
                  <p className="text-gray-700">✉️ info@mohriqifauzi.com</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Back to Home */}
          <div className="text-center mt-12">
            <Link 
              href="/" 
              className="inline-flex items-center gap-2 bg-orange-600 text-white px-6 py-3 rounded-lg hover:bg-orange-700 transition-colors"
            >
              Kembali ke Beranda
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 px-4">
        <div className="container mx-auto text-center">
          <div className="mb-4">
            <h3 className="text-2xl font-bold mb-2 text-orange-400">MOH RIQI FAUZI</h3>
            <p className="text-gray-400">Kedai Minuman Terbaik di Jember</p>
          </div>
          <Separator className="bg-gray-700 mb-4" />
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © 2024 MOH RIQI FAUZI. Hak Cipta Dilindungi.
            </p>
            <div className="flex gap-6">
              <Link href="/privacy" className="text-gray-400 hover:text-orange-400 text-sm">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-orange-400 text-sm">
                Terms & Conditions
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}