import './SectionTitle.css';

type SectionTitleProps = {
  title: string;
};

function SectionTitle({ title }: SectionTitleProps) {
  return (
    <div className="SectionTitle">
      <h3>{title}</h3>
    </div>
  );
}

export default SectionTitle;
