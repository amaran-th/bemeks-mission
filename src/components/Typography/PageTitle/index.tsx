interface PageTitleProps {
  title: string;
}

const PageTitle = ({ title }: PageTitleProps) => {
  return <p className="text-xl font-bold">{title}</p>;
};

export default PageTitle;
