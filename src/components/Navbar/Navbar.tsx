import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "../Home/Home.module.css";
import SearchBar from "./SearchBar/SearchBar";
import { useMediaQuery } from "react-responsive";
import MobileMenuIcon from "./MobileMenuIcon/MobileMenuIcon";
import { StyledScrollLink } from "./style";

interface NavbarProps {
  navLinks: string;
}

const Navbar = ({ NavBar }: { NavBar: NavbarProps[] }) => {
  const [isOpen, setIsOpen] = useState(false);
  const mobileView = useMediaQuery({ maxWidth: 775 });

  useEffect(() => {
    setIsOpen(mobileView);
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
          {NavBar.map((navItem, index) => (
            <li key={index}>
              <StyledScrollLink
                to={`${navItem.navLinks
                  .toLowerCase()
                  .replace(" ", "-")}-section`}
                smooth={true}
                duration={500}
              >
                {navItem.navLinks}
              </StyledScrollLink>
            </li>
          ))}
          <li>
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
