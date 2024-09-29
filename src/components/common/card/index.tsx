export default function Card({ onClick, name, jobTitle, image }: any) {
  const style = {
    background: "rgba(255, 255, 255, 0.53)",
    borderRadius: "16px",
    boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
    backdropFilter: "blur(19.2px)",
    border: "1px solid rgba(255, 255, 255, 0.71)",
    cursor: "pointer"
  };

  return (
    <>
      <div
        style={style}
        className="flex flex-col rounded-lg"
        onClick={onClick}
      >
        <img
          className="w-full h-[310px] rounded-lg object-cover md:h-[310px] md:rounded-l-lg"
          src={`${image}`}
          alt=""
        />
        <div className="flex flex-col justify-start p-4  md:p-6">
          <h5 className="mb-2 text-lg md:text-xl font-medium">{name}</h5>
          <p className="text-xs md:text-sm text-surface/75 dark:text-grey-100">
            {jobTitle}
          </p>
        </div>
      </div>
    </>
  );
}
