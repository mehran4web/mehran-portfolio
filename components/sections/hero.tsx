import { Button } from '@/components/ui/button';
export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen px-6 text-center sm:text-left sm:items-start bg-gradient-to-b from-zinc-50 to-white dark:from-black dark:to-zinc-900">
      {/* Your Name with gradient */}
      <h1 className="text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500 mb-4">
        Mehran Khan
      </h1>
      {/* Short tagline */}
      <p className="text-lg text-zinc-700 dark:text-zinc-300 mb-6 max-w-lg">

        Full-Stack Developer breaking free from tutorial hell.{' '}
      </p>
      {/* CTA Buttons */}
      <div className="flex flex-col sm:flex-row gap-4">

        <Button
          asChild
          className="px-6 py-3 rounded-full bg-black text-white dark:bg-white dark:text-black font-medium hover:opacity-80 transition"
        >

          <a href="https://github.com/mehran4web" target="_blank" rel="noopener noreferrer">
            {' '}
            Visit My GitHub
          </a>
        </Button>
        <Button
          asChild
          className="px-6 py-3 rounded-full bg-zinc-200 text-black dark:bg-zinc-800 dark:text-white font-medium hover:opacity-80 transition"
        >

          <a href="mailto:mehran4web@gmail.com">Contact Me</a>
        </Button>
      </div>
    </section>
  );
}
