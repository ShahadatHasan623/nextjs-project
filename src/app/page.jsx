import Image from "next/image";
import image from "../../public/hero.png";

export default function Home() {
  return (
    <div className="flex lg:flex-row flex-col-reverse items-center gap-5 py-15 px-8 ">
      <div className="flex-1 space-y-8">
        <h1 className="text-7xl font-bold great-vibes-regular bg-gradient-to-b from-[#5fb585] to-gray-300 bg-clip-text text-transparent">Better design <br /> for  your digital <br /> product</h1>
        <button className="btn border-0 px-8 py-7 rounded-xl bg-[#5fb585] text-xl text-[#ffffff]">
          See Our Work
        </button>
      </div>
      <div>
        <Image src={image} width={500} height={500} alt="Hero Image" />
      </div>
    </div>
  );
}
