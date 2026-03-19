
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-secondary text-secondary-foreground border-t border-border/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img 
                src="https://horizons-cdn.hostinger.com/5dbc3b26-e6fe-4c9c-b160-1d09298323f8/57e362a64de622b37f7b9f05d1f58251.png" 
                alt="Mehfil e haq Studio logo"
                className="h-10 w-10 rounded-full object-cover ring-2 ring-primary/30"
              />
              <span className="text-lg font-bold text-primary">Mehfil e haq Studio</span>
            </div>
            <p className="text-sm text-secondary-foreground/80 leading-relaxed">
              Experience the spiritual essence of traditional Sufi qawwali music
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-base font-semibold text-primary mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm text-secondary-foreground/80 hover:text-primary transition-colors duration-200">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="text-sm text-secondary-foreground/80 hover:text-primary transition-colors duration-200">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-sm text-secondary-foreground/80 hover:text-primary transition-colors duration-200">
                  About
                </Link>
              </li>
              <li>
                <Link to="/events" className="text-sm text-secondary-foreground/80 hover:text-primary transition-colors duration-200">
                  Events
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-secondary-foreground/80 hover:text-primary transition-colors duration-200">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-base font-semibold text-primary mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2 text-sm text-secondary-foreground/80">
                <Phone className="w-4 h-4 mt-0.5 flex-shrink-0 text-primary" />
                <span>+92 300 1234567</span>
              </li>
              <li className="flex items-start space-x-2 text-sm text-secondary-foreground/80">
                <Mail className="w-4 h-4 mt-0.5 flex-shrink-0 text-primary" />
                <span>info@mehfilehaqstudio.com</span>
              </li>
              <li className="flex items-start space-x-2 text-sm text-secondary-foreground/80">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-primary" />
                <span>Lahore, Pakistan</span>
              </li>
            </ul>
          </div>
          
          {/* Social Media */}
          <div>
            <h3 className="text-base font-semibold text-primary mb-4">Follow Us</h3>
            <div className="flex space-x-3">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-200 active:scale-[0.98]"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-200 active:scale-[0.98]"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="https://youtube.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-200 active:scale-[0.98]"
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-border/20">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-secondary-foreground/60">
              © {currentYear} Mehfil e haq Studio. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link to="/privacy" className="text-sm text-secondary-foreground/60 hover:text-primary transition-colors duration-200">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-sm text-secondary-foreground/60 hover:text-primary transition-colors duration-200">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
