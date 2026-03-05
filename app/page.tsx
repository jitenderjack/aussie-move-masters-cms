import { components as Components } from '@/components/storyblok';

async function getStory() {
  const token = '2oT82h2vMSGUe7pHq2VHowtt';
  const url = `https://api.storyblok.com/v2/cdn/stories/home?token=${token}&version=draft&cv=${Date.now()}`;
  
  const res = await fetch(url, { cache: 'no-store' });
  const data = await res.json();
  return data.story;
}

export default async function Home() {
  try {
    const story = await getStory();
    
    if (!story || !story.content || !story.content.body) {
      throw new Error('No story content found');
    }
    
    const sections = story.content.body;

    return (
      <main className="min-h-screen">
        {sections.map((section: any) => {
          const Component = Components[section.component as keyof typeof Components];
          
          if (!Component) {
            return null;
          }

          return <Component key={section._uid} blok={section} />;
        })}
      </main>
    );
  } catch (error) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-red-50 p-8">
        <div className="max-w-2xl bg-white rounded-2xl shadow-lg p-8 border-2 border-red-200">
          <h1 className="text-3xl font-bold text-red-600 mb-4">⚠️ Error Loading Content</h1>
          <p className="text-gray-700 mb-4">Failed to load site content from Storyblok.</p>
          <pre className="bg-gray-100 p-4 rounded text-sm overflow-auto">
            {error instanceof Error ? error.message : String(error)}
          </pre>
          <div className="mt-4 text-sm text-gray-600">
            <p>If you're the site owner, check that:</p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Storyblok API token is correct</li>
              <li>Story "home" exists in Storyblok</li>
              <li>Story has content in the body field</li>
            </ul>
          </div>
        </div>
      </main>
    );
  }
}
