interface HeadingProps {
  title: string;
}

const Heading: React.FC<HeadingProps> = ({ title }) => (
  <h1 className="my-heading">{title}</h1>
);

export default Heading;
