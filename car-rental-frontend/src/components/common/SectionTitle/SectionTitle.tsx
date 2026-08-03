import "./SectionTitle.css";

interface SectionTitleProps {
  subtitle: string;
  title: string;
}

const SectionTitle = ({ subtitle, title }: SectionTitleProps) => {
  return (
    <div className="section-title">

      <span>{subtitle}</span>

      <h2>{title}</h2>

    </div>
  );
};

export default SectionTitle;