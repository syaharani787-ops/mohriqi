import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { Shield, Eye, Database, Users, Cookie, Lock } from 'lucide-react'
import Link from 'next/link'

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50">
      {/* Header */}
      <section className="bg-gradient-to-r from-orange-600 to-amber-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <Link href="/" className="inline-block mb-6">
              <div className="flex items-center justify-center w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full">
                <Shield className="w-8 h-8" />
              </div>
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
            <p className="text-xl text-orange-100 mb-6">
              Kebijakan Privasi MOH RIQI FAUZI
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
                  <Shield className="w-8 h-8 text-orange-600" />
                  Pendahuluan
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  Selamat datang di <span className="font-bold text-orange-600">MOH RIQI FAUZI</span>. 
                  Kami sangat menghargai privasi Anda dan berkomitmen untuk melindungi data pribadi Anda. 
                  Kebijakan Privasi ini menjelaskan bagaimana kami mengumpulkan, menggunakan, dan melindungi 
                  informasi pribadi Anda ketika Anda menggunakan layanan kami.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Dengan menggunakan layanan kami, Anda menyetujui praktik-praktik yang dijelaskan dalam 
                  kebijakan privasi ini.
                </p>
              </CardContent>
            </Card>

            {/* Data Collection */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl">
                  <Database className="w-8 h-8 text-orange-600" />
                  Informasi yang Kami Kumpulkan
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">Informasi Pribadi</h3>
                  <p className="text-gray-700 mb-3">
                    Kami dapat mengumpulkan informasi pribadi berikut:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                    <li>Nama lengkap</li>
                    <li>Nomor telepon</li>
                    <li>Alamat email</li>
                    <li>Alamat pengiriman</li>
                    <li>Informasi pembayaran</li>
                    <li>Tanggal lahir (untuk promosi ulang tahun)</li>
                  </ul>
                </div>

                <Separator />

                <div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">Informasi Penggunaan</h3>
                  <p className="text-gray-700 mb-3">
                    Kami juga mengumpulkan informasi tentang bagaimana Anda menggunakan layanan kami:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                    <li>Riwayat pesanan</li>
                    <li>Preferensi minuman</li>
                    <li>Frekuensi kunjungan</li>
                    <li>Feedback dan rating</li>
                    <li>Data lokasi (jika diizinkan)</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Data Usage */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl">
                  <Eye className="w-8 h-8 text-orange-600" />
                  Bagaimana Kami Menggunakan Informasi Anda
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  Kami menggunakan informasi yang kami kumpulkan untuk:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li>Menyediakan dan meningkatkan layanan kami</li>
                  <li>Memproses pesanan dan pembayaran</li>
                  <li>Mengirimkan konfirmasi pesanan</li>
                  <li>Memberikan penawaran khusus dan promosi</li>
                  <li>Merespons pertanyaan dan keluhan pelanggan</li>
                  <li>Menganalisis tren dan preferensi pelanggan</li>
                  <li>Meningkatkan pengalaman pengguna</li>
                  <li>Keperluan keamanan dan fraud prevention</li>
                </ul>
              </CardContent>
            </Card>

            {/* Cookies */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl">
                  <Cookie className="w-8 h-8 text-orange-600" />
                  Cookies dan Teknologi Pelacakan
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  Kami menggunakan cookies dan teknologi serupa untuk:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li>Mengingat preferensi Anda</li>
                  <li>Menyimpan item keranjang belanja</li>
                  <li>Menganalisis traffic website</li>
                  <li>Mempersonalisasi pengalaman Anda</li>
                  <li>Menampilkan iklan yang relevan</li>
                </ul>
                <p className="text-gray-700 leading-relaxed">
                  Anda dapat mengontrol cookies melalui pengaturan browser Anda.
                </p>
              </CardContent>
            </Card>

            {/* Data Protection */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl">
                  <Lock className="w-8 h-8 text-orange-600" />
                  Keamanan Data
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  Kami berkomitmen untuk melindungi keamanan data pribadi Anda dengan:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li>Enkripsi data sensitif</li>
                  <li>Akses terbatas ke informasi pribadi</li>
                  <li>Firewall dan sistem keamanan canggih</li>
                  <li>Update keamanan reguler</li>
                  <li>Training staf tentang keamanan data</li>
                </ul>
              </CardContent>
            </Card>

            {/* User Rights */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl">
                  <Users className="w-8 h-8 text-orange-600" />
                  Hak Anda sebagai Pengguna
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  Anda memiliki hak untuk:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li>Mengakses data pribadi Anda</li>
                  <li>Memperbaiki data yang tidak akurat</li>
                  <li>Menghapus data pribadi Anda</li>
                  <li>Menolak pemasaran langsung</li>
                  <li>Meminta salinan data Anda</li>
                  <li>Menarik persetujuan kapan saja</li>
                </ul>
              </CardContent>
            </Card>

            {/* Third Party Sharing */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="text-2xl">Berbagi dengan Pihak Ketiga</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  Kami tidak menjual, menyewakan, atau membagikan data pribadi Anda dengan pihak ketiga 
                  untuk keperluan pemasaran tanpa persetujuan Anda. Kami hanya membagikan data:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li>Dengan penyedia layanan pembayaran</li>
                  <li>Dengan layanan pengiriman</li>
                  <li>Untuk kepatuhan hukum</li>
                  <li>Dengan persetujuan eksplisit Anda</li>
                </ul>
              </CardContent>
            </Card>

            {/* Contact */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="text-2xl">Hubungi Kami</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  Jika Anda memiliki pertanyaan tentang kebijakan privasi ini atau ingin 
                  menggunakan hak Anda, silakan hubungi kami:
                </p>
                <div className="bg-orange-50 p-4 rounded-lg">
                  <p className="font-semibold text-orange-800 mb-2">MOH RIQI FAUZI</p>
                  <p className="text-gray-700">📍 Dusun Krajan, Kaliglagah, Kec. Sumberbaru, Kab. Jember, Prov. Jawa Timur</p>
                  <p className="text-gray-700">📞 0823-1059-8347</p>
                  <p className="text-gray-700">✉️ privacy@mohriqifauzi.com</p>
                </div>
              </CardContent>
            </Card>

            {/* Changes to Policy */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="text-2xl">Perubahan Kebijakan</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  Kami dapat memperbarui kebijakan privasi ini dari waktu ke waktu. Perubahan akan 
                  diberitahukan melalui website atau email. Penggunaan lanjutan dari layanan kami 
                  setelah perubahan berarti Anda menerima kebijakan yang diperbarui.
                </p>
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