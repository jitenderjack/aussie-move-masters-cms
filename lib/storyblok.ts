import { StoryblokClient } from '@storyblok/js';

const storyblokApi = new StoryblokClient({
  accessToken: process.env.NEXT_PUBLIC_STORYBLOK_PREVIEW_TOKEN || '2oT82h2vMSGUe7pHq2VHowtt',
});

export async function fetchStory(slug: string, version: 'draft' | 'published' = 'draft') {
  const { data } = await storyblokApi.get(`cdn/stories/${slug}`, {
    version,
    cv: Date.now(), // Cache bust
  });
  
  return data.story;
}

export default storyblokApi;
