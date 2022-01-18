/* eslint-disable react/require-default-props */
import './PageTitle.css';

type PageTitleProps = {
  title: string;
  subtitle: string;
  error?: boolean;
};

export function PageTitle({ title, subtitle, error }: PageTitleProps) {
  return (
    <div className={`PageTitle ${error ? 'error' : ''}`}>
      <h1>{title}</h1>
      <h2>{subtitle}</h2>
    </div>
  );
}
