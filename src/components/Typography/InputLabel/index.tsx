interface InputLabelProps {
  label: string;
}

const InputLabel = ({ label }: InputLabelProps) => {
  return <label className="block text-label text-md mb-1">{label}</label>;
};

export default InputLabel;
