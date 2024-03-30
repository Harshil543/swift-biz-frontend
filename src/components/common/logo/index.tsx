import React from "react";
import { Link } from "react-router-dom";

export default function Logo(props: any) {
  const logoStyle = {
    height: props.height,
    marginLeft: props.marginLeft ? `${props.marginLeft}` : "0",
    margin: props.margin ? `${props.margin}` : "0"
  };
  return (
    <div className="flex-shrink-0">
      <Link to="/" className="flex">
        <img style={logoStyle} src="/images/logo.png" alt="logo" />
      </Link>
    </div>
  );
}
