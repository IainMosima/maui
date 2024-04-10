import Body from "@/components/Body/Body";
import Navbar from "@/components/Navbar/Navbar";
import { Images } from "@/constants";
import Image from "next/image";
import Link from "next/link";


export default function Home() {
  return (
    <main className="bg-black h-auto w-full text-white">
      

      {/* body section */}
      <Body/>

      <br/>
    </main>
  );
}
