// export default function Home() {
//     return (
//       <>
//         <span className="font-bold text-4xl">Home</span>
//         <div className="border-dashed border border-zinc-500 w-full h-12 rounded-lg"></div>
//         <div className="border-dashed border border-zinc-500 w-full h-64 rounded-lg"></div>
//         <div className="border-dashed border border-zinc-500 w-full h-64 rounded-lg"></div>
//         <div className="border-dashed border border-zinc-500 w-full h-64 rounded-lg"></div>
//         <div className="border-dashed border border-zinc-500 w-full h-64 rounded-lg"></div>
//         <div className="border-dashed border border-zinc-500 w-full h-64 rounded-lg"></div>
//       </>
//     );
//   }
  
import { Content } from "@/components/dashboard/components/home/content";
import type { NextPage } from "next";

const Home: NextPage = () => {
  return <Content />;
  // return <h1>Home</h1>

};

export default Home;