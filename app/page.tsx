import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-slate-900 text-white">
      <h1 className="text-6xl font-bold">
        Daily Writing
      </h1>

      <p className="mt-6 text-xl text-gray-300">
        Practice writing every day.
      </p>

      <button className="mt-8 bg-blue-600 px-6 py-3 rounded-lg hover:bg-blue-700">
        Get Started
      </button>
    </main>
  );
}