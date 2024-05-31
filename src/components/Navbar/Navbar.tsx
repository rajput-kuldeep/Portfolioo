
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div className="flex justify-between items-center p-5">
        <div>logo</div>
        <nav className=" hidden text-md font-semibold md:flex flex-row flex-wrap gap-12  ">
          <Link to="/">Home</Link>
          <Link to="/Services">Services</Link>
          <Link to="/Case Studies">Case Studies</Link>
          <Link to="/Testimonials">Testimonials</Link>
          <Link to="/Prices">Prices</Link>
          <Link to="/contact">contact</Link>
        </nav>

       </div>
    </div>
  );
};

export default Navbar;
