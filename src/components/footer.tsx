import React from 'react';
import { Link } from 'react-router-dom';
import { 
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope
} from 'react-icons/fa';

// Interface untuk props
interface FooterProps {
  companyName?: string;
  className?: string;
}

// Interface untuk navigation link
interface NavLink {
  name: string;
  path: string;
}

// Interface untuk social media
interface SocialMedia {
  name: string;
  icon: JSX.Element;
  url: string;
}

const Footer: React.FC<FooterProps> = ({ 
  companyName = "KosFinder",
  className = "" 
}) => {
  
  // Navigation links data
  const navLinks: NavLink[] = [
    { name: "Beranda", path: "/" },
    { name: "Tentang Kami", path: "/about" },
    { name: "Cari Kos", path: "/kos" },
    { name: "Kontak", path: "/contact" },
    { name: "Blog", path: "/blog" },
    { name: "FAQ", path: "/faq" }
  ];

  // Contact info
  const contactInfo = {
    address: "Bandung, Indonesia",
    phone: "+62 123 4567 890",
    email: "info@kosfinder.com"
  };

  return (
    <footer className={`bg-gray-800 text-white py-8 ${className}`}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Company Info */}
          <div className="lg:col-span-2">
            <h3 className="text-xl font-bold mb-4">{companyName}</h3>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Platform terpercaya untuk menemukan kos-kosan terbaik di Indonesia. 
              Membantu Anda menemukan tempat tinggal yang nyaman dan sesuai kebutuhan.
            </p>
            
            {/* Social Media */}
            <div className="flex space-x-4">
              {socialMedia.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition duration-300"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {navLinks.slice(0, 4).map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.path}
                    className="text-gray-300 hover:text-white transition duration-300 block py-1"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Additional Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Lainnya</h4>
            <ul className="space-y-2">
              {navLinks.slice(4).map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.path}
                    className="text-gray-300 hover:text-white transition duration-300 block py-1"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="md:col-span-2 lg:col-span-1">
            <h4 className="text-lg font-semibold mb-4">Kontak Kami</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <FaMapMarkerAlt className="text-gray-300 mt-1 flex-shrink-0" />
                <span className="text-gray-300">{contactInfo.address}</span>
              </div>
              <div className="flex items-center space-x-3">
                <FaPhone className="text-gray-300 flex-shrink-0" />
                <span className="text-gray-300">{contactInfo.phone}</span>
              </div>
              <div className="flex items-center space-x-3">
                <FaEnvelope className="text-gray-300 flex-shrink-0" />
                <a 
                  href={`mailto:${contactInfo.email}`}
                  className="text-gray-300 hover:text-white transition duration-300"
                >
                  {contactInfo.email}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-300 text-sm">
              &copy; {new Date().getFullYear()} {companyName}. All rights reserved.
            </p>
            
            {/* Legal Links */}
            <div className="flex space-x-6">
              <Link 
                to="/privacy" 
                className="text-gray-300 hover:text-white transition duration-300 text-sm"
              >
                Kebijakan Privasi
              </Link>
              <Link 
                to="/terms" 
                className="text-gray-300 hover:text-white transition duration-300 text-sm"
              >
                Syarat & Ketentuan
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
