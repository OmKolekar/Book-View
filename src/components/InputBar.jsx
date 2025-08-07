const InputBar = ({ placeholder, value, onChange, inputRef }) => {
  return (
    <input
      type="text"
      className="form-control"
      placeholder={placeholder}
      value={value}
      ref={inputRef}
      onChange={(e) => onChange(e.target.value)}
    />
  );
};

export default InputBar;
