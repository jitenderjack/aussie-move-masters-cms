import { fetchStory } from '@/lib/storyblok';
import { components as Components } from '@/components/storyblok';

export default async function Home() {
  try {
    const story = await fetchStory('home', 'draft');
    const sections = story.content.body || [];

    console.log('✅ Story loaded, sections:', sections.length);

    return (
      <main className="min-h-screen">
        {sections.map((section: any) => {
          const Component = Components[section.component as keyof typeof Components];
          
          if (!Component) {
            console.warn(`Component not found: ${section.component}`);
            return null;
          }

          return <Component key={section._uid} blok={section} />;
        })}
      </main>
    );
  } catch (error) {
    console.error('❌ Error loading story:', error);
    // Fallback when story doesn't exist yet
    return (
      <main className="min-h-screen flex items-center justify-center bg-gray-50 p-8">
        <div className="max-w-2xl bg-white rounded-2xl shadow-lg p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4 font-['Montserrat']">
            🚀 Aussie Move Masters - Setup Required
          </h1>
          <div className="space-y-4 text-gray-700">
            <p className="font-semibold">The site is deployed successfully! Now follow these steps:</p>
            <ol className="list-decimal list-inside space-y-2">
              <li>Go to Storyblok: <a href="https://app.storyblok.com" className="text-blue-600 underline">app.storyblok.com</a></li>
              <li>Follow the instructions in <code className="bg-gray-100 px-2 py-1 rounded">MANUAL-SETUP.md</code></li>
              <li>Create all components and the "home" story</li>
              <li>Fill in content using <code className="bg-gray-100 px-2 py-1 rounded">COMPLETE-CONTENT-GUIDE.md</code></li>
              <li>Publish the story</li>
            </ol>
            <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
              <p className="text-sm text-blue-900">
                <strong>📝 Note:</strong> All components are already coded and ready! 
                You just need to set up the content structure in Storyblok.
              </p>
            </div>
          </div>
        </div>
      </main>
    );
  }
}
