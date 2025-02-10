import React, { memo } from 'react';
import Image from "next/image";

// Optimized ImageComponent
const ImageComponent = memo(({ src, alt, width, height, className }) => {
  if (!src) return null;
  
  return (
    <div className="relative">
      <Image
        src={src}
        alt={alt || ""}
        width={width}
        height={height}
        className={`object-contain ${className || ""}`}
        loading="lazy"
        sizes="(max-width: 768px) 100vw, 50vw"
        quality={85}
      />
    </div>
  );
});

// Optimized TextComponent
const TextComponent = memo(({ title, description, className, linkUrl, linkLabel }) => (
  <div className="flex flex-col">
    {title && <h2 className={className}>{title}</h2>}
    {description && <p className="text-gray-600 mb-6">{description}</p>}
    {linkUrl && linkLabel && (
      <a
        href={linkUrl}
        className="inline-flex items-center text-blue-500 hover:text-blue-600 transition-colors"
      >
        {linkLabel}
        <svg
          className="ml-2 w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </a>
    )}
  </div>
));

// Optimized ToolsSection
const ToolsSection = memo(({
  imageSrc,
  imageAlt,
  imageWidth,
  imageHeight,
  imageClassName,
  title,
  description,
  textClassName,
  reverseOrder,
  linkUrl,
  linkLabel,
}) => {
  return (
    <section className="py-[30px] md:py-[50px]">
      <div className="container mx-auto px-4">
        <div
          className={`flex flex-col ${
            reverseOrder ? "md:flex-row-reverse" : "md:flex-row"
          } items-center gap-[30px] md:gap-[100px]`}
        >
          {imageSrc && (
            <ImageComponent
              src={imageSrc}
              alt={imageAlt}
              width={imageWidth}
              height={imageHeight}
              className={imageClassName}
            />
          )}
          <TextComponent
            title={title}
            description={description}
            className={textClassName}
            linkUrl={linkUrl}
            linkLabel={linkLabel}
          />
        </div>
      </div>
    </section>
  );
});

// Add display names for debugging
ImageComponent.displayName = 'ImageComponent';
TextComponent.displayName = 'TextComponent';
ToolsSection.displayName = 'ToolsSection';

export default ToolsSection;