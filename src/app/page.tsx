import Image from "next/image";
import Footer from "./ui/Footer";

export default function Home() {
  return (
    <>
      <main className="main-bg text-white h-[100vh] flex flex-col items-center p-3">
        <div className="card-bg flex flex-col text-center w-[80%] h-[80%] sm:w-[30%] sm:h-[80%] border-solid rounded-lg p-4 my-auto ">
          <Image
            src="/avatar-jessica.jpeg"
            alt="jessica"
            width={70}
            height={60}
            className="mx-auto rounded-full"
          />
          <h1>Jessica Randall</h1>
          <p className="location text-sm">London, United Kingdom</p>
          <p className="text-center text-[14px] my-2">
          &quot;Front-end developer and avid reader.&quot;
          </p>
          <div className="grid gap-x-6 m-2">
            <span className="my-2 w-full rounded-md p-2 hover:cursor-pointer hover:bg-blue-400">
              GitHub
            </span>
            <span className="my-2 w-full rounded-md p-2 hover:cursor-pointer hover:bg-blue-400">
              Frontend Mentor
            </span>
            <span className="my-2 w-full rounded-md p-2 hover:cursor-pointer hover:bg-blue-400">
              LinkedIn
            </span>
            <span className="my-2 w-full rounded-md p-2 hover:cursor-pointer hover:bg-blue-400">
              Twitter
            </span>
            <span className="my-2 w-full rounded-md p-2 hover:cursor-pointer hover:bg-blue-400">
              Instagram
            </span>
          </div>
        </div>
        <Footer />
      </main>
    </>
  );
}
