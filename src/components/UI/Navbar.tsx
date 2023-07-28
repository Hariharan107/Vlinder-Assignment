import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "../Home.module.css";
import SearchBar from "./SearchBar";
import { useMediaQuery } from "react-responsive";
import MobileMenuIcon from "./MobileMenuIcon";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const mobileView = useMediaQuery({ maxWidth: 775 });

  useEffect(() => {
    setIsOpen(mobileView); // Set isOpen to mobileView value on initial render and whenever mobileView changes
  }, [mobileView]);

  return (
    <>
      <Link to='/' className={styles.logo}>
        <img
          src='https://www.freepnglogos.com/uploads/company-logo-png/bmw-car-company-logo-png-transparent-image-3.png'
          alt='logo'
          height={50}
          width={50}
        />
      </Link>
      {!mobileView ? (
        <ul>
          <li>
            <Link to='#'>Home</Link>
          </li>
          <li>
            <Link to='#'>Showcases</Link>
          </li>
          <li>
            <Link to='#'>About</Link>
          </li>
          <li>
            <Link to='#'>Portfolio</Link>
          </li>
          <li>
            <Link to='#'>Contact</Link>
          </li>
          <li>
            {" "}
            <SearchBar />
          </li>
        </ul>
      ) : (
        <>
          <MobileMenuIcon />
        </>
      )}
    </>
  );
};

export default Navbar;
