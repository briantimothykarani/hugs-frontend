import { Link } from "react-router-dom";

function Landingpagefooter() {
  return (
    <div className="flex justify-between bg-gray-800 text-white py-6">
      <div>
        <p>Hugs</p>
      </div>
      <div>
        <p>Quick Links</p>
        <ul>
          {/* Changed href -> to */}
          <li>
            <Link to="/about" className="text-white">
              About Us
            </Link>
          </li>
          <li>
            <Link to="/contact" className="text-white">
              Contact
            </Link>
          </li>
          <li>
            <Link to="/help" className="text-white">
              Help
            </Link>
          </li>
        </ul>
      </div>
      <div>
        <p>Follow Us</p>
        <ul className="space-x-4">
          <li>
            <Link to="#" className="text-white">
              Twitter
            </Link>
          </li>
          <li>
            <Link to="#" className="text-white">
              Instagram
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Landingpagefooter;


