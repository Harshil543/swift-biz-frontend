import React from "react";

export default function Card() {
  const style = {
    background: "rgba(255, 255, 255, 0.53)",
    borderRadius: "16px",
    boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
    backdropFilter: "blur(19.2px)",
    border: "1px solid rgba(255, 255, 255, 0.71)"
  };

  return (
    <div
      style={style}
      className="flex flex-col rounded-lg md:max-w-xl md:flex-row"
    >
      <img
        className="w-full rounded-t-lg object-cover md:h-auto md:w-48 md:!rounded-none md:!rounded-s-lg"
        src="https://atfxlambprrpulkkghjt.supabase.co/storage/v1/object/public/card-images/images/1710420671125-4373272_atlassian_logo_logos_icon.png"
        alt=""
      />
      <div className="flex flex-col justify-start p-6">
        <h5 className="mb-2 text-xl font-medium">Name please</h5>
        <p className="mb-4 text-base">
          This is a wider card with supporting text below as a natural lead-in
          to additional content. This content is a little bit longer.
        </p>
        <p className="text-xs text-surface/75 dark:text-neutral-300">
          Last updated 3 mins ago
        </p>
      </div>
    </div>
  );
}
