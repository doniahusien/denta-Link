import Image from "next/image";
import Button from "@/components/UI/Button/Button";

export default function HeroSection() {
  return (
    <div className="min-h-screen bg-[url('/images/header.svg')] bg-cover bg-center bg-no-repeat">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between pt-[80px] md:pt-[150px]">
          {/* Text Content */}
          <div className="max-w-[608px] text-center md:text-left">
            <h1 className="font-cairo text-[36px] leading-[44px] md:text-[56px] md:leading-[64px] font-semibold mb-6">
              Struggling to find patients?
              <br />
              We've got you covered!
            </h1>
            <p className="font-cairo text-[18px] leading-[24px] md:text-[24px] md:leading-[32px] text-[#918E8E] mb-8">
              Turn your dental training into real-life success stories, with{" "}
              <span className="text-[#247CFF]">DENTALINK</span>
            </p>
            <Button
              title="Get Started"
              link="/"
              className="block w-full md:w-auto px-8 py-3 bg-[#247CFF] text-white rounded-lg text-lg font-semibold hover:bg-[#1e6ad8] transition-colors"
            />
          </div>
          {/* Image */}
          <div className="mt-10 md:mt-0">
            <Image
              src="/images/Home/earth.svg"
              alt="Globe with medical glove"
              width={600}
              height={500}
              className="object-contain w-[300px] h-[220px] md:w-[600px] md:h-[500px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}