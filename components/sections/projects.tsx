import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export default function Projects() {
  const projects = [
    {
      title: 'Developer Portfolio',
      tech: 'Next.js, TypeScript, Tailwind',
      status: '✅ Deployed',
      description: 'Week 1 - My public commitment to build',
      demo: '#',
      github: 'https://github.com/mehran4web',
    },
    { title: 'Coming Week 3', tech: '', status: '', description: '' },
    { title: 'Coming Week 5', tech: '', status: '', description: '' },
  ];

  return (
    <section className="py-32 px-6">
      <h2 className="text-3xl font-bold mb-10 text-center sm:text-left">Projects</h2>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map(project => (
          <Card key={project.title} className="p-6">
            <CardContent className="flex flex-col gap-4">
              <h3 className="text-xl font-semibold">{project.title}</h3>
              {project.tech && (
                <p className="text-sm text-zinc-600 dark:text-zinc-400">{project.tech}</p>
              )}
              {project.description && <p>{project.description}</p>}

              {(project.demo || project.github) && (
                <div className="flex gap-3 mt-2 flex-wrap">
                  {project.demo && (
                    <Button asChild size="sm" variant="outline">
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        Live Demo
                      </a>
                    </Button>
                  )}
                  {project.github && (
                    <Button asChild size="sm" variant="outline">
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        GitHub
                      </a>
                    </Button>
                  )}
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
