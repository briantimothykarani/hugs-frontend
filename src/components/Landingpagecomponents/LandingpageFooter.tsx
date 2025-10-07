import { Link } from "react-router";
function LandingPageFooter() {
    return (
        <div className="flex justify-between bg-gray-800 text-white py-6">
        <div>
        <p>Hugs</p>
        </div>
        <div>
        <p>Quick Links</p>
        <ul>
        <li><Link href="/about" className="text-white">About Us</Link></li>
        <li><Link href="/contact" className="text-white">Contact</Link></li>
         <li><Link href="/help" className="text-white">Help</Link></li>
           </ul>
          </div>
          <div>
                    <p>Follow Us</p>
                  <ul className=" space-x-4">
                    <li><Link href="#" className="text-white">Twitter</Link></li>
                    <li><Link href="#" className="text-white">Instagram</Link></li>
                    </ul>
                </div>
        </div>
    );
}

export default LandingPageFooter;
