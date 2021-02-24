import React from "react";
import rainbowImg from "../../images/Color-stroke.png";
import StyledCard from "./StyledCard";
import { CardProps } from "./types";

const Card: React.FC<CardProps> = ({ ribbon, children, ...props }) => {
  return (
    <StyledCard {...props}>
      {ribbon}
      {children}
      {props.isRainbow && <img className="rainbow" src={rainbowImg} />}
    </StyledCard>
  );
};
export default Card;
