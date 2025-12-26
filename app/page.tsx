import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <Image
        src="/homescreen.png"
        alt="Home Screen"
        width={1200}
        height={800}
        priority
      />
    </div>
  );
}
