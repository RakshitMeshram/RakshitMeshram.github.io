import { Icons } from "@/components/icons";

export const RESUME_DATA = {
	name: 'Rakshit Meshram',
	initials: 'RM',
	location: 'Amravati - MH, India',
	about: 'AI Engineer (Claude) @Anthropic',
	summary:
		`Hello 👋, I work as an AI Engineer (Claude) at Anthropic. 
		This place is home to my learning notes, reflections and opinions.`,
	// 'I am trying my best to improve a little bit every day. I am super courious and love to be a little nerd. I think there are so many things to being a good engineer other than just code. A well designed product is a product that is easy to use',
	avatarUrl: './avatar.png',
	personalWebsiteUrl: 'https://rakshitmeshram.github.io',
	contact: {
		email: 'hire.rakshit"gmail.com',
		social: [
			{
				name: 'GitHub',
				url: 'https://github.com/rakshitmeshram/',
				icon: Icons.gitHub
			},
			{
				name: 'X',
				url: 'https://x.com/rakshitmeshram',
				icon: Icons.twitter
			},
		]
	},
	education: [
		{
			school: 'Indian Institute of Science Education and Research, Bhopal',
			degree: "BSMS in Computer Science & Electrical Engineering (Minor in Physics)",
			start: '2017',
			end: '2022'
		}
	],
	work: [
		{
			company: 'Programming Pathshala',
			link: 'https://programmingpathshala.com',
			badges: [],
			title: 'Software Developer',
			logo: '',
			start: '2022',
			end: '2023',
			description: `Helped building and growing from delivering 2500 courses weekly to 8000. Built a lot of new features and helped improve current features.
				 Improved our internal tools, took part in rewriting our router, more.
				 Helped with architecture and design of data models and systems.
				`,
			stack: ['React', 'Tailwind', 'AWS']
		},
		{
			company: 'Muffin',
			link: 'https://muffin.com',
			badges: ['Remote'],
			title: 'Software Developer',
			logo: '',
			start: '2023',
			end: 'Present',
			description: `Helped take the product from 0 to 1. Built the first version of the product, implemented new features, and more.
				 Spent time in Copenhagen to help with integration of system, solve ad-hoc problems and more.
				`,
			stack: ['React', 'Tailwind', 'AWS']
		},
	],
	skills: [
		'JavaScript',
		'TypeScript',
		'React/Next.js/Remix',
		'Tailwind',
		'Chakra-Ui',
		'Node.js',
		'AWS',
        'Django'
	],
	projects: [
		{
			title: 'Personal  Website',
			techStack: ['Side Project', 'TypeScript', 'Next.js', 'TailwindCSS'],
			description: 'A minimal personal website',
			logo: '',
			link: {
				label: 'rakshitmeshram.vercel.app',
				href: 'https://rakshitmeshram.vercel.app/'
			}
		},
		{
			title: 'Breeze',
			techStack: ['Side Project', 'TypeScript', 'Remix', 'Prisma', 'In progress'],
			description: 'A job board',
			logo: '',
			link: {
				label: 'breeze-rakshit.vercel.app',
				href: 'https://breeze-rakshit.vercel.app/'
			}
		},
		{
			title: 'Learning Management System',
			techStack: ['Side Project', 'Next.js', 'MDX'],
			description: 'An ambitious project to manage my learning',
			logo: '',
			link: {
				label: 'lms.vercel.app',
				href: 'https://lms.vercel.app/'
			}
		},
		{
			title: 'Airbnb Clone',
			techStack: ['Side Project', 'Django', 'React', 'Tailwind'],
			description: 'A fullstack AirBnb Clone built with Django',
			logo: '',
			link: {
				label: 'airbnb.vercel.app',
				href: 'https://airbnb.vercel.app/'
			}
		},
	]
} as const;