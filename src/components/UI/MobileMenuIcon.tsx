import { useState } from "react";
import { MobileNavBar } from "../Styled/Hero/Hero";
// import SearchBar from "./SearchBar";

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
          </>
        )}
      </MobileNavBar>
    </>
  );
};

export default MobileMenuIcon;
