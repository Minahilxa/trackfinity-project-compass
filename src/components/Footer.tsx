
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-secondary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-primary to-white rounded-lg flex items-center justify-center">
                <span className="text-secondary font-bold text-lg">T</span>
              </div>
              <span className="text-xl font-bold font-poppins">Trackfinity</span>
            </div>
            <p className="text-green-100 text-sm font-inter">
              Smart project management built for growth. Empowering teams worldwide.
            </p>
            <div className="flex space-x-1">
              <span className="px-2 py-1 bg-primary/20 text-primary text-xs rounded font-inter">English</span>
              <span className="px-2 py-1 bg-white/10 text-white text-xs rounded font-inter">العربية</span>
              <span className="px-2 py-1 bg-white/10 text-white text-xs rounded font-inter">Français</span>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4 font-poppins">Navigation</h3>
            <ul className="space-y-2 text-sm font-inter">
              <li><Link to="/" className="text-green-100 hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-green-100 hover:text-white transition-colors">About</Link></li>
              <li><Link to="/features" className="text-green-100 hover:text-white transition-colors">Features</Link></li>
              <li><Link to="/solutions" className="text-green-100 hover:text-white transition-colors">Solutions</Link></li>
              <li><Link to="/pricing" className="text-green-100 hover:text-white transition-colors">Pricing</Link></li>
              <li><Link to="/contact" className="text-green-100 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 font-poppins">Solutions</h3>
            <ul className="space-y-2 text-sm font-inter">
              <li><span className="text-green-100">Government Agencies</span></li>
              <li><span className="text-green-100">Construction Companies</span></li>
              <li><span className="text-green-100">Engineering Firms</span></li>
              <li><span className="text-green-100">Tech Startups</span></li>
              <li><span className="text-green-100">Educational Institutions</span></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 font-poppins">Contact</h3>
            <div className="space-y-2 text-sm text-green-100 font-inter">
              <p>contact@trackfinity.io</p>
              <p>+966 (Saudi) | +974 (Qatar) | +44 (UK)</p>
              <p>Offices: Riyadh | Doha | London</p>
              <div className="flex space-x-4 mt-4">
                <a href="#" className="text-green-100 hover:text-white transition-colors">LinkedIn</a>
                <a href="#" className="text-green-100 hover:text-white transition-colors">YouTube</a>
                <a href="#" className="text-green-100 hover:text-white transition-colors">X</a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-green-300/20 mt-8 pt-8 text-center text-sm text-green-100 font-inter">
          <p>© 2025 Trackfinity Technologies. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
