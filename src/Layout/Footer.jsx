

const Footer = () => {
  return (
    <footer className="py-8 max-w-[89%] w-full mx-auto">
      <div className="container mx-auto px-4">
        <div className="grid exo grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-10">
          {/* Column 1 */}
          <div>
            <h2 className=" text-lg text-red-500/50 font-bold mb-4">Services</h2>
            <ul className="text-gray-200 text-sm">
            <li className="nunito py-1">D2D business</li>
              <li className="nunito py-1">Quick Refunds</li>
              <li className="nunito py-1">Delivery</li>
              <li className="nunito py-1">24/7 Customer Support</li>
              <li className="nunito py-1">Secure Payment Options</li>
              <li className="nunito py-1">Personalized Recommendations</li>
              <li className="nunito py-1">Free Shipping on Orders Over $50</li>
            </ul>
          </div>

          {/* Column 2 */}
          <div>
          <h2 className=" text-red-500/55 font-bold mb-4">Quick Links</h2>
            <ul className="text-gray-200 text-sm">
            <li className="nunito py-1">Home</li>
              <li className="nunito py-1">About</li>
              <li className="nunito py-1">Contact</li>
              <li className="nunito py-1">FAQs</li>
              <li className="nunito py-1">Terms of Service</li>
              <li className="nunito py-1">Privacy Policy</li>
              <li className="nunito py-1">Blog</li>
              <li className="nunito py-1">Cart</li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
          <h2 className=" text-lg text-red-500/55 font-bold mb-4">Partnerships</h2>
            <ul className="text-gray-200 text-sm">
            <li className="nunito py-1">Local Farms</li>
              <li className="nunito py-1">Organic Food Suppliers</li>
              <li className="nunito py-1">Grocery Stores</li>
              <li className="nunito py-1">Smoothie Bars</li>
              <li className="nunito py-1">Online Fruit Retailers</li>
              <li className="nunito py-1">Healthy Snack Brands</li>
              <li className="nunito py-1">Juice Companies</li>
              <li className="nunito py-1">Food Co-ops</li>
              <li className="nunito py-1">Cafes and Restaurants</li>
              <li className="nunito py-1">Fitness Studios</li>
            </ul>
          </div>

          {/* Column 4 */}
          <div>
          <h2 className=" text-lg text-red-500/55 font-bold mb-4">Sponsors</h2>
            <ul className="text-gray-200 text-sm">
            <li className="nunito py-1">Brand X</li>
              <li className="nunito py-1">Company Y</li>
              <li className="nunito py-1">Organization Z</li>
              <li className="nunito py-1">Association A</li>
              <li className="nunito py-1">Enterprise B</li>
              <li className="nunito py-1">Foundation C</li>
            </ul>
          </div>
   
        </div>
      </div>
    </footer>
  );
};

export default Footer;
