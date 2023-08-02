import { useState } from "react";
import { MobileNavBar } from "../Styled/Hero/Hero";

const MobileMenuIcon = () => {
  const [open, setOpen] = useState(false);
  const handleToggle = () => setOpen((prev) => !prev);
  return (
    <>
      {/* <SearchBar /> */}
      <MobileNavBar onClick={handleToggle}>
        {!open ? (
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='#fff'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5'
            />
          </svg>
        ) : (
          <>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='#fff'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M6 18L18 6M6 6l12 12'
              />
            </svg>
            <nav className="mobile_nav">
              <ul>
                <li>Home</li>
                <li>About</li>
                <li>Services</li>
              </ul>
            </nav>
          </>
        )}
      </MobileNavBar>
    </>
  );
};

export default MobileMenuIcon;
