interface InputLabelProps {
  label: string;
  required?: boolean;
}

const InputLabel = ({ label, required }: InputLabelProps) => {
  return (
    <label className="block text-label text-md mb-1">
      {required && "*"}
      {label}
    </label>
  );
};

export default InputLabel;
