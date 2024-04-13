const Button = ({
  label,
  iconUrl,
  alt,
  backgroundColor,
  borderColor,
  textColor,
  fullWidth,
}) => {
  return (
    <button
      className={`flex items-center justify-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none rounded-full max-sm:w-3/5 ${
        backgroundColor ? backgroundColor : "bg-coral-red"
      } ${borderColor ? borderColor : "border-coral-red"} ${
        textColor ? textColor : "text-white"
      } ${fullWidth && "w-full"}`}
    >
      {label}
      {iconUrl && (
        <img src={iconUrl} className="ml-2 rounded-full w-5 h-5" alt={alt} />
      )}
    </button>
  );
};

export default Button;
