export default function Input(props: any) {
  return (
    <div className="pt-1">
      {props.label && (
        <label
          htmlFor={props.name}
          className="block text-sm font-medium text-gray-700"
        >
          {props.label}
        </label>
      )}
      <input
        onChange={props.onChange}
        placeholder={props.placeholder}
        type={props.type}
        onBlur={props.onBlur}
        id={props.name}
        name={props.name}
        className="my-2 p-2 w-full border border-[#037cff] rounded-md focus:border-[#52a6ff] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#52a6ff] transition-colors duration-300"
      />
      {props.touched && props.isError && (
        <p className="text-[#e24c4c] absolute text-xs leading-[20px]">
          {props.errorMessage}
        </p>
      )}
    </div>
  );
}
