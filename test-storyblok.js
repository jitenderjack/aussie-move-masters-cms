const token = '2oT82h2vMSGUe7pHq2VHowtt';
const url = `https://api.storyblok.com/v2/cdn/stories/home?token=${token}&version=draft`;

fetch(url)
  .then(res => res.json())
  .then(data => {
    if (data.story) {
      console.log('✅ Story found!');
      console.log('Sections:', data.story.content.body.length);
      console.log('Components:', data.story.content.body.map(s => s.component).join(', '));
    } else {
      console.log('❌ No story found');
      console.log(JSON.stringify(data, null, 2));
    }
  })
  .catch(err => console.error('Error:', err));
