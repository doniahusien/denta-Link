import Link from "next/link";
export default function LinkComponent({ url, label, className }) {
  if (!url || !label) return null;

  return (
    <Link
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-block ${className || ""}`}
      style={{
        opacity: 1,
        fontFamily: "Cairo, sans-serif",
        fontSize: "16px",
        fontWeight: "400",
        lineHeight: "24px", 
        letterSpacing: "-0.3px",
        textAlign: "left",
        textDecoration: "none",
        cursor: "pointer",
      }}
    >
      {label}
    </Link>
  );
}