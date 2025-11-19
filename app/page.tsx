export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-white dark:bg-black text-black dark:text-white px-6">
      <section className="max-w-2xl text-center space-y-6">
        <h1 className="text-4xl font-bold">Mehran Khan</h1>

        <h2 className="text-xl opacity-80">
          Full-Stack Developer on a continuous learning journey
        </h2>

        <p className="text-lg opacity-70">
          Escaping tutorial hell by building real projects and learning through action.
        </p>

        <a
          href="https://github.com/mehran4web"
          target="_blank"
          className="inline-block rounded-full bg-black text-white dark:bg-white dark:text-black px-6 py-3 font-medium hover:opacity-80 transition"
        >
          Visit My GitHub
        </a>
      </section>
    </main>
  );
}
