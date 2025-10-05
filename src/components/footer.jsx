import React from 'react';
import Link from 'next/link';
import { 
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope
} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-xl font-bold mb-4">KosFinder</h3>
            <p className="text-gray-300 mb-4">
              Platform Penemu Kos Terbaik Sesuai Kebutuhanmu!
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white transition">
                <FaFacebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition">
                <FaTwitter size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition">
                <FaInstagram size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition">
                <FaLinkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white transition">
                  Beranda
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white transition">
                  Tentang Kami
                </Link>
              </li>
              <li>
                <Link href="/kos" className="text-gray-300 hover:text-white transition">
                  Cari Kos
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white transition">
                  Kontak
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Kontak</h4>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <FaMapMarkerAlt className="text-gray-300" />
                <span className="text-gray-300">Jakarta, Indonesia</span>
              </div>
              <div className="flex items-center space-x-2">
                <FaPhone className="text-gray-300" />
                <span className="text-gray-300">+62 123 4567 890</span>
              </div>
              <div className="flex items-center space-x-2">
                <FaEnvelope className="text-gray-300" />
                <span className="text-gray-300">info@kosfinder.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-4 text-center">
          <p className="text-gray-300">
            &copy; {new Date().getFullYear()} KosFinder. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
