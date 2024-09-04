interface InputLabelProps {
  label: string;
}

const InputLabel = ({ label }: InputLabelProps) => {
  return <p className="text-label text-md mb-1">{label}</p>;
};

export default InputLabel;
