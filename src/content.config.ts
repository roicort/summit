import { defineCollection } from 'astro:content';
import { glob, file } from 'astro/loaders';
import { z } from 'astro/zod';

const conferences = defineCollection({
	loader: glob({ base: './src/content/conferences', pattern: '**/*.{md,mdx}' }),
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string(),
			date: z.coerce.date(),
			day: z.number().int().positive(),
			startsAt: z.string(),
			endsAt: z.string().optional(),
			room: z.string(),
			heroImage: image().optional(),
			tags: z.array(z.string()).default([]),
			speakers: z.array(z.string()).default([]),
		}),
});

const rooms = defineCollection({
	loader: glob({ base: './src/content/rooms', pattern: '**/*.yml' }),
	schema: z.object({
		id: z.string(),
		name: z.string(),
		description: z.string(),
		capacity: z.number().int().positive().optional(),
	}),
});

const venue = defineCollection({
	loader: glob({ base: './src/content/venue', pattern: '**/*.yml' }),
	schema: ({ image }) => z.object({
		name: z.string(),
		address: z.string(),
		city: z.string(),
		description: z.string(),
		heroImage: image().optional(),
		arrival: z.string(),
		accessibility: z.string(),
	}),
});

const authors = defineCollection({
	loader: glob({ base: './src/content/authors', pattern: '**/*.yml' }),
	schema: ({ image }) => z.object({
		id: z.string(),
		name: z.string(),
		role: z.string(),
		bio: z.string(),
		avatar: image().optional(),
		location: z.string().optional(),
		focus: z.string().optional(),
	}),
});

const speakers = defineCollection({
	loader: glob({ base: './src/content/speakers', pattern: '**/*.yml' }),
	schema: ({ image }) =>
		z.object({
			id: z.string(),
			name: z.string(),
			bio: z.string(),
			avatar: image().optional(),
			role: z.string().optional(),
			company: z.string().optional(),
			location: z.string().optional(),
		}),
});

const socials = defineCollection({
	loader: file('src/content/socials.yml'),
	schema: z.object({
		id: z.string().optional(),
		label: z.string(),
		href: z.string(),
	}),
});

const news = defineCollection({
	loader: glob({ base: './src/content/news', pattern: '**/*.{md,mdx}' }),
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string(),
			pubDate: z.coerce.date(),
			updatedDate: z.coerce.date().optional(),
			heroImage: image().optional(),
		}),
});

const site = defineCollection({
	loader: file('src/site-config.yml'),
	schema: z.object({
		title: z.string(),
		description: z.string(),
		based: z.string().optional(),
		timezone: z.string().optional(),
		locale: z.string().optional(),
		registrationUrl: z.string().url().optional(),
	}),
});

const testimonials = defineCollection({
	loader: glob({ base: './src/content/testimonials', pattern: '**/*.yml' }),
	schema: ({ image }) =>
		z.object({
			quote: z.string(),
			author: z.string(),
			role: z.string().optional(),
			avatar: image().optional(),
		}),
});

export const collections = { authors, conferences, rooms, venue, socials, speakers, news, site, testimonials };
