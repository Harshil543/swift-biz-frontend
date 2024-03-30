import React from "react";

export default function Button(props: any) {
  return (
    <div>
      <button
        type={props.type}
        onClick={props.onClick}
        disabled={props.disabled}
        className="w-full bg-[#037cff] text-white my-5 rounded-xl px-5 py-2 hover:bg-[#52a6ff] focus:outline-none focus:bg-[#52a6ff] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#52a6ff] transition-colors duration-300"
      >
        {props.label}
      </button>
    </div>
  );
}
