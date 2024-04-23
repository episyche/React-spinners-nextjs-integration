import Image from "next/image";
import { Inter } from "next/font/google";
import { Form } from "@/components/form";


const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    
    <div className="bg-white h-screen ">
      <Form/>
    </div>
    
  );
}
