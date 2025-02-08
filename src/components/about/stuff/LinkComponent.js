export default function LinkComponent({ url, label, className }) {
  if (!url || !label) return null;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-block ${className || ""}`}
      style={{
        opacity: 1,
        fontFamily: "Cairo, sans-serif",
        fontSize: "16px", // Adjusted for mobile
        fontWeight: "400",
        lineHeight: "24px", // Adjusted for mobile
        letterSpacing: "-0.3px",
        textAlign: "left",
        textDecoration: "none",
        cursor: "pointer",
      }}
    >
      {label}
    </a>
  );
}