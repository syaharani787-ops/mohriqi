'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { Coffee, Utensils, Clock, MapPin, Phone, Mail, Star, Heart, Instagram, Facebook, Twitter } from 'lucide-react'

export default function Home() {
  const [activeCategory, setActiveCategory] = useState('all')

  const menuCategories = [
    { id: 'all', name: 'Semua Menu' },
    { id: 'coffee', name: 'Kopi' },
    { id: 'tea', name: 'Teh' },
    { id: 'juice', name: 'Jus' },
    { id: 'snack', name: 'Makanan Ringan' }
  ]

  const menuItems = [
    { id: 1, name: 'Espresso Kopi Jember', category: 'coffee', price: 'Rp 15.000', rating: 4.8, description: 'Kopi pilihan terbaik dari perkebunan Jember' },
    { id: 2, name: 'Cappuccino Premium', category: 'coffee', price: 'Rp 25.000', rating: 4.9, description: 'Kopi dengan busa susu yang lembut' },
    { id: 3, name: 'Teh Hijau Original', category: 'tea', price: 'Rp 12.000', rating: 4.6, description: 'Teh hijau alami dengan khasiat kesehatan' },
    { id: 4, name: 'Teh Manis Dingin', category: 'tea', price: 'Rp 8.000', rating: 4.7, description: 'Teh manis segar penyegar tenggorokan' },
    { id: 5, name: 'Jus Alpukat', category: 'juice', price: 'Rp 18.000', rating: 4.8, description: 'Jus alpukat creamy dan menyehatkan' },
    { id: 6, name: 'Jus Mangga', category: 'juice', price: 'Rp 15.000', rating: 4.9, description: 'Jus mangga manis dan segar' },
    { id: 7, name: 'Pisang Goreng', category: 'snack', price: 'Rp 10.000', rating: 4.5, description: 'Pisang goreng renyah dengan madu' },
    { id: 8, name: 'Roti Bakar', category: 'snack', price: 'Rp 12.000', rating: 4.6, description: 'Roti bakar dengan berbagai topping' }
  ]

  const filteredMenu = activeCategory === 'all' 
    ? menuItems 
    : menuItems.filter(item => item.category === activeCategory)

  const testimonials = [
    { id: 1, name: 'Ahmad', comment: 'Kopi terbaik di Jember! Suasana nyaman dan pelayanan ramah.', rating: 5 },
    { id: 2, name: 'Siti', comment: 'Jusnya segar-segar, harga terjangkau. Recommended!', rating: 5 },
    { id: 3, name: 'Budi', comment: 'Tempat nongkrong favorit saya. WiFi cepat dan banyak colokan listrik.', rating: 4 }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-orange-600 to-amber-600 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4 py-24 md:py-32">
          <div className="text-center">
            <div className="mb-6">
              <div className="inline-flex items-center justify-center w-24 h-24 bg-white/20 backdrop-blur-sm rounded-full mb-4">
                <Coffee className="w-12 h-12" />
              </div>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-pulse">
              MOH RIQI FAUZI
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-orange-100">
              Kedai Minuman Terbaik di Jember
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-orange-600 hover:bg-orange-50">
                <Utensils className="w-5 h-5 mr-2" />
                Lihat Menu
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-orange-600">
                <Phone className="w-5 h-5 mr-2" />
                Hubungi Kami
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-orange-50 to-transparent"></div>
      </section>

      {/* About Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-gray-800">Tentang Kedai Kami</h2>
              <p className="text-lg text-gray-600 mb-6">
                Selamat datang di <span className="font-bold text-orange-600">MOH RIQI FAUZI</span>, 
                kedai minuman pilihan favorit di Jember! Kami menyajikan berbagai minuman berkualitas 
                dari kopi pilihan terbaik hingga jus segar yang menyehatkan.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Dengan suasana yang nyaman dan pelayanan yang ramah, kami adalah tempat sempurna 
                untuk bersantai, bekerja, atau berkumpul dengan teman-teman.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                    <Clock className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <p className="font-semibold">Buka Setiap Hari</p>
                    <p className="text-sm text-gray-600">06:00 - 22:00</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <p className="font-semibold">Lokasi Strategis</p>
                    <p className="text-sm text-gray-600">Kaliglagah, Sumberbaru</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-amber-400 rounded-2xl transform rotate-3"></div>
              <Card className="relative bg-white p-8 rounded-2xl shadow-xl">
                <CardContent className="space-y-4">
                  <div className="text-center">
                    <h3 className="text-2xl font-bold mb-4">Fakta Menarik</h3>
                    <div className="grid grid-cols-2 gap-6">
                      <div>
                        <p className="text-3xl font-bold text-orange-600">50+</p>
                        <p className="text-gray-600">Menu Variasi</p>
                      </div>
                      <div>
                        <p className="text-3xl font-bold text-orange-600">1000+</p>
                        <p className="text-gray-600">Pelanggan Puas</p>
                      </div>
                      <div>
                        <p className="text-3xl font-bold text-orange-600">5★</p>
                        <p className="text-gray-600">Rating Rata-rata</p>
                      </div>
                      <div>
                        <p className="text-3xl font-bold text-orange-600">24/7</p>
                        <p className="text-gray-600">WiFi Gratis</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-gray-800">Menu Kami</h2>
            <p className="text-lg text-gray-600">Pilihan minuman dan makanan terbaik untuk Anda</p>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {menuCategories.map(category => (
              <Button
                key={category.id}
                variant={activeCategory === category.id ? "default" : "outline"}
                className={activeCategory === category.id ? "bg-orange-600 hover:bg-orange-700" : ""}
                onClick={() => setActiveCategory(category.id)}
              >
                {category.name}
              </Button>
            ))}
          </div>

          {/* Menu Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredMenu.map(item => (
              <Card key={item.id} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-lg font-semibold text-gray-800">{item.name}</h3>
                    <Badge variant="secondary" className="bg-orange-100 text-orange-800">
                      {item.price}
                    </Badge>
                  </div>
                  <p className="text-gray-600 text-sm mb-3">{item.description}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-medium">{item.rating}</span>
                    </div>
                    <Button size="sm" className="bg-orange-600 hover:bg-orange-700">
                      Pesan
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-gray-800">Apa Kata Pelanggan</h2>
            <p className="text-lg text-gray-600">Testimoni dari pelanggan setia kami</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map(testimonial => (
              <Card key={testimonial.id} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4 italic">"{testimonial.comment}"</p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-orange-200 rounded-full flex items-center justify-center">
                      <span className="font-semibold text-orange-800">{testimonial.name[0]}</span>
                    </div>
                    <span className="font-semibold text-gray-800">{testimonial.name}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4 bg-gray-800 text-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Hubungi Kami</h2>
            <p className="text-lg text-gray-300">Kunjungi kedai kami atau hubungi untuk informasi lebih lanjut</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <Card className="bg-gray-700 border-gray-600">
              <CardContent className="p-6 text-center">
                <MapPin className="w-8 h-8 mx-auto mb-4 text-orange-400" />
                <h3 className="font-semibold mb-2">Alamat</h3>
                <p className="text-sm text-gray-300">
                  Dusun Krajan, Kaliglagah<br />
                  Kec. Sumberbaru, Kab. Jember<br />
                  Prov. Jawa Timur
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-700 border-gray-600">
              <CardContent className="p-6 text-center">
                <Phone className="w-8 h-8 mx-auto mb-4 text-orange-400" />
                <h3 className="font-semibold mb-2">Telepon</h3>
                <p className="text-sm text-gray-300">0823-1059-8347</p>
              </CardContent>
            </Card>

            <Card className="bg-gray-700 border-gray-600">
              <CardContent className="p-6 text-center">
                <Mail className="w-8 h-8 mx-auto mb-4 text-orange-400" />
                <h3 className="font-semibold mb-2">Email</h3>
                <p className="text-sm text-gray-300">info@mohriqifauzi.com</p>
              </CardContent>
            </Card>

            <Card className="bg-gray-700 border-gray-600">
              <CardContent className="p-6 text-center">
                <Clock className="w-8 h-8 mx-auto mb-4 text-orange-400" />
                <h3 className="font-semibold mb-2">Jam Buka</h3>
                <p className="text-sm text-gray-300">Setiap Hari<br />06:00 - 22:00</p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <div className="flex justify-center gap-4 mb-8">
              <Button variant="outline" size="sm" className="border-gray-600 text-white hover:bg-orange-600 hover:border-orange-600">
                <Facebook className="w-5 h-5" />
              </Button>
              <Button variant="outline" size="sm" className="border-gray-600 text-white hover:bg-orange-600 hover:border-orange-600">
                <Instagram className="w-5 h-5" />
              </Button>
              <Button variant="outline" size="sm" className="border-gray-600 text-white hover:bg-orange-600 hover:border-orange-600">
                <Twitter className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-8 px-4">
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
              <a href="/privacy" className="text-gray-400 hover:text-orange-400 text-sm">
                Privacy Policy
              </a>
              <a href="/terms" className="text-gray-400 hover:text-orange-400 text-sm">
                Terms & Conditions
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}