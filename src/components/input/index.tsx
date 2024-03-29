export default function Input(props: any) {
  return (
    <>
      <label
        htmlFor={props.name}
        className="block text-sm font-medium text-gray-700"
      >
        {props.label}
      </label>
      <input
        type={props.type}
        id={props.name}
        name={props.name}
        className="mt-1 p-2 w-full border border-[#037cff] rounded-md focus:border-[#52a6ff] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#52a6ff] transition-colors duration-300"
      />
    </>
  );
}
