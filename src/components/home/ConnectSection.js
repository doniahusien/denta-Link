import Image from "next/image";
import Button from "@/components/UI/Button/Button";

export default function ConnectSection() {
  return (
    <section className="py-10 md:py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Text Content */}
          <div className="max-w-[656px] text-center md:text-left">
            <h2 className="font-cairo text-[28px] leading-[40px] md:text-[40px] md:leading-[64px] font-semibold mb-6 md:mb-[51px]">
              Connect with your next loyal patient in just a few clicks.
            </h2>
            <Button title="Get Started" link="/" className="block md:hidden" />
          </div>
          {/* Image */}
          <div className="mt-6 md:mt-0">
            <Image
              src="/images/Home/3d-cartoon-doctor-character-face-mask1.svg"
              alt="Doctor illustration"
              width={381}
              height={374}
              className="object-contain w-[250px] h-[245px] md:w-[381px] md:h-[374px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}