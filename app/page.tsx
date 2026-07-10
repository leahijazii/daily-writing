export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
        <h1 className="text-6xl font-bold">
          Daily Writing
        </h1>

        <p className="mt-6 max-w-2xl text-lg text-gray-400">
          Improve your writing with a new prompt every day.
          Keep your writing private or share it with the world.
        </p>

        <div className="mt-10 flex gap-4">
          <button className="rounded-lg bg-blue-600 px-6 py-3 font-semibold hover:bg-blue-700">
            Get Started
          </button>

          <button className="rounded-lg border border-white px-6 py-3 hover:bg-white hover:text-black">
            Explore Public Stories
          </button>
        </div>
      </section>
    </main>
  );
}