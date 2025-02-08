import ImageComponent from "./ImageComponent";
import TextComponent from "./TextComponent";

export default function ToolsSection({
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
}) {
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
              alt={imageAlt || ""}
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
}