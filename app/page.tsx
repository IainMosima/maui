import Body from "@/components/Body/Body";
import Navbar from "@/components/Navbar/Navbar";
import { Images } from "@/constants";
import Image from "next/image";
import Link from "next/link";


export default function Home() {
  return (
    <main className="bg-black h-auto w-full text-white">
      {/* navbar section */}
      <div className="flex justify-between place-items-start sm:h-auto h-[25rem] gap-3">
        <Link href='/' className="pl-[1.5rem] pt-3 sm:pl-[4rem] sm:pt-[4rem]">
          <Image src={Images.logo} alt="logo" priority={true} width={200} />
        </Link>
        <Navbar />
      </div>

      {/* body section */}
      <Body/>

      <br/>
    </main>
  );
}
