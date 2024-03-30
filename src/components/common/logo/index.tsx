import React from "react";
import { Link } from "react-router-dom";

export default function Logo(props: any) {
  return (
    <div className="flex-shrink-0">
      <Link to="/" className="flex">
        <img
          className={`w-auto h-${props.height}  ${
            props.marginLeft ? `ml-${props.marginLeft}` : ""
          } ${props.margin ? `mx-${props.margin}` : ""}`}
          src="/images/logo.png"
          alt="logo"
        />
      </Link>
    </div>
  );
}
