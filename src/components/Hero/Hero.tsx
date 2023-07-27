import React from "react";
interface Props {
  children: React.ReactNode;
}
const Hero = ({ children }: Props) => {
  return <div>{children}</div>;
};

export default Hero;
