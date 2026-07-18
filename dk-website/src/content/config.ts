import { defineCollection, z } from 'astro:content';

const shows = defineCollection({
  type: 'content',
  schema: z.object({
    date: z.string(),        // Format: DD.MM.YY, e.g. "19.09.26"
    act: z.string(),         // e.g. "loophole" or "Elena Flury"
    venue: z.string(),       // e.g. "Kiff Aarau"
    city: z.string(),        // e.g. "Aarau"
    url: z.string().optional()
  })
});

const collaborations = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),        // e.g. "loophole"
    url: z.string().optional(),
    image: z.string().optional(),  // e.g. "/images/james-gruntz.jpg"
    order: z.number().default(0)
  })
});

export const collections = { shows, collaborations };
