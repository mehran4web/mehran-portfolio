import { Card, CardContent } from '@/components/ui/card';

export default function About() {
  return (
    <section className="py-32 px-6 flex flex-col items-center sm:items-start text-center sm:text-left gap-6">
      <Card className="w-full max-w-lg">
        <CardContent className="flex flex-col gap-4">
          <h2 className="text-2xl font-bold">What I'm Building</h2>
          <p className="text-zinc-700 dark:text-zinc-300">
            I’m focused on shipping real projects using Next.js, TypeScript, Tailwind, and Supabase.
            My goal is to grow into a Senior Developer role by November 2026. What makes me
            different? I don’t just follow tutorials — I ship projects that are public, reusable,
            and impactful.
          </p>
          <ul className="flex flex-wrap gap-3 mt-2">
            {['Next.js', 'TypeScript', 'Tailwind CSS', 'Supabase'].map(tech => (
              <li
                key={tech}
                className="px-3 py-1 bg-zinc-100 dark:bg-zinc-800 rounded-full text-sm font-medium"
              >
                {tech}
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </section>
  );
}
