export default async function TestPage() {
  const token = '2oT82h2vMSGUe7pHq2VHowtt';
  const url = `https://api.storyblok.com/v2/cdn/stories/home?token=${token}&version=draft`;
  
  try {
    const res = await fetch(url, { cache: 'no-store' });
    const data = await res.json();
    
    const components = data.story?.content?.body?.map((s: any) => s.component) || [];
    
    return (
      <div className="p-8 max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">Storyblok API Test</h1>
        <div className="bg-green-50 border border-green-200 p-4 rounded mb-4">
          <p className="text-green-800 font-semibold">✅ API Connected Successfully</p>
          <p className="text-green-700 text-sm mt-2">Found {components.length} sections</p>
        </div>
        <div className="bg-gray-50 p-4 rounded">
          <h2 className="font-bold mb-2">Components:</h2>
          <ul className="list-disc list-inside space-y-1">
            {components.map((comp: string, i: number) => (
              <li key={i} className="text-gray-700">{comp}</li>
            ))}
          </ul>
        </div>
        <div className="mt-4 bg-yellow-50 border border-yellow-200 p-4 rounded">
          <p className="text-yellow-800 text-sm">
            If you see components listed above, the API is working correctly.
            The issue is likely with the main page rendering.
          </p>
        </div>
      </div>
    );
  } catch (error) {
    return (
      <div className="p-8">
        <h1 className="text-2xl font-bold mb-4 text-red-600">❌ API Error</h1>
        <pre className="bg-red-50 border border-red-200 p-4 rounded text-sm">
          {String(error)}
        </pre>
      </div>
    );
  }
}
