import Image from "next/image";

export default function ImageComponent({ src, alt, width, height, className }) {
  if (!src) return null; // Don't render if src is missing

  return (
    <Image
      src={src}
      alt={alt || ""}
      width={width}
      height={height}
      className={`object-contain ${className || ""}`}
    />
  );
}