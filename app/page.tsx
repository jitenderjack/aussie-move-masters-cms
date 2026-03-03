import { fetchStory } from '@/lib/storyblok';
import { Components, ComponentType } from '@/components/storyblok';

export default async function Home() {
  const story = await fetchStory('home');
  const sections = story.content.sections || [];

  return (
    <main className="min-h-screen">
      {sections.map((section: any) => {
        const Component = Components[section.component as ComponentType];
        
        if (!Component) {
          console.warn(`Component not found: ${section.component}`);
          return null;
        }

        return <Component key={section._uid} blok={section} />;
      })}
    </main>
  );
}
