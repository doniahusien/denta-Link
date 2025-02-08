import Image from "next/image";

export default function ToolsSection() {
  return (
    <section className="py-10 md:py-[50px]">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-6 md:gap-[100px]">
          {/* Image */}
          <div className="w-full md:w-auto">
            <Image
              src="/images/Home/tools.svg"
              alt="Dental tools"
              width={491}
              height={327}
              className="object-contain w-[300px] h-[200px] md:w-[491px] md:h-[327px]"
            />
          </div>
          {/* Text Content */}
          <div className="max-w-[615px] text-center md:text-left">
            <h2 className="font-cairo text-[28px] leading-[36px] md:text-[40px] md:leading-[48px] font-semibold mb-4">
              Buy, sell, or exchange dental tools,
              <br />
              all in one convenient platform.
            </h2>
            <p className="font-cairo text-[18px] leading-[24px] md:text-[32px] md:leading-[36px] text-[#918E8E]">
              Turn your dental training into real-life success stories, with{" "}
              <span className="text-[#247CFF]">DENTALINK</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}