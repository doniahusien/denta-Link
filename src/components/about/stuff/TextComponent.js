import LinkComponent from "./LinkComponent";

export default function TextComponent({
  title,
  description,
  className,
  linkUrl,
  linkLabel,
}) {
  return (
    <div className={`max-w-[615px] ${className || ""}`}>
      <h2 className="font-['cairo'] text-[28px] leading-[32px] md:text-[40px] md:leading-[48px] font-semibold mb-4">
        {title}
      </h2>
      <p
        className="font-['cairo'] text-[18px] leading-[24px] md:text-[32px] md:leading-[36px] text-[#918E8E]"
        dangerouslySetInnerHTML={{ __html: description }}
      />
      {linkUrl && linkLabel && (
        <div className="mt-4">
          <LinkComponent
            url={linkUrl}
            label={linkLabel}
            className="font-['cairo'] text-[#247CFF] text-[16px] md:text-[20px] hover:underline"
          />
        </div>
      )}
    </div>
  );
}