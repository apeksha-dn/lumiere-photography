export default function SectionHeading({ title, text, align = 'left' }) {
  return (
    <div className={`section-heading ${align}`}>
      <h2>{title}</h2>
      {text && <p>{text}</p>}
    </div>
  );
}
