import { defineField, defineType } from "sanity";

export const project = defineType({
	name: "project",
	title: "Project / Case Study",
	type: "document",
	fields: [
		defineField({
			name: "name",
			type: "string",
			title: "Project Name",
			validation: Rule => Rule.required(),
		}),
		defineField({
            name: "slug",
            type: "slug",
            title: "Project Slug",
            options:{
                source: "name",
            },
			validation: Rule => Rule.required(),
        }),
		defineField({
			name: "tagline",
			type: "string",
			title: "Tagline",
			description: "A short, catchy phrase describing the project.",
		}),
		defineField({
			name: "category",
			type: "string",
			title: "Category",
			description: "e.g., Web Development, Mobile App, UI/UX Design",
		}),
		defineField({
			name: "year",
			type: "string",
			title: "Year",
			description: "The year the project was completed.",
		}),
        defineField({
			name: "description",
			type: "text",
			title: "Project Description",
		}),
		defineField({
			name: "challenge",
			type: "text",
			title: "The Challenge",
			description: "What was the core problem to solve?",
		}),
		defineField({
			name: "solution",
			type: "text",
			title: "The Solution",
			description: "How was the problem solved?",
		}),
		defineField({
			name: "result",
			type: "text",
			title: "The Result",
			description: "What was the outcome?",
		}),
		defineField({
			name: "stack",
			type: "array",
			title: "Tech Stack",
			of: [{ type: "string" }],
			description: "Technologies used (e.g., React, Next.js, Sanity, Tailwind CSS)",
		}),
        defineField({
			name: "images",
			type: "array",
			title: "Project Images",
			of: [{ type: "image", options: { hotspot: true } }],
			description: "Upload one or more images. The first image will be used as the main thumbnail.",
		}),
		defineField({
			name: "accentColor",
			type: "string",
			title: "Accent Color (Hex)",
			description: "A hex code for the project's brand color (e.g., #2bbdd7)",
		}),
        defineField({
            name:"projectLink",
            type:"url",
            title:"Live Project Link"
        }),
	],
});