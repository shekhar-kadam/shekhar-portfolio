export type Experience = {
  company: string
  role: string
  location: string
  start: string
  end: string
  summary: string
  highlights: string[]
  stack: string[]
}

export type CaseStudy = {
  title: string
  context: string
  description: string
  outcomes: string[]
  stack: string[]
}

export type SkillGroup = {
  title: string
  items: string[]
}

/** Career start date, used to keep "years of experience" accurate over time. */
export const CAREER_START = new Date(2020, 8, 1)

export const profile = {
  name: 'Shekhar Kadam',
  role: 'Senior Frontend Engineer',
  location: 'Faridabad, India',
  email: 'kadamshekhar851@gmail.com',
  resumeUrl: `${import.meta.env.BASE_URL}Shekhar_Kadam_Resume.pdf`,
  links: {
    github: 'https://github.com/shekhar-kadam',
    linkedin: 'https://www.linkedin.com/in/shekhar-kadam-705183222/',
  },
  tagline:
    'I build fast, accessible, SEO-friendly web applications with React, Next.js, and TypeScript.',
  about: [
    'I am a frontend engineer who cares about the details users feel: how quickly a page loads, how clearly an interface reads, and how smoothly it responds.',
    'Today I work as a Senior Software Engineer at Bold Technologies, building products that help people create resumes and cover letters that move their careers forward. Before that, I shipped 30+ SEO-optimized Next.js sites for international modeling agencies and worked on government and enterprise projects.',
    'I enjoy component architecture, performance work, and mentoring engineers, and I bring working knowledge of Node.js and backend systems to the table.',
  ],
}

export const stats = [
  { value: '30+', label: 'Next.js sites shipped' },
  { value: '40%', label: 'Search ranking lift' },
  { value: '98%', label: 'Client satisfaction' },
]

export const experience: Experience[] = [
  {
    company: 'Bold Technologies',
    role: 'Senior Software Engineer',
    location: 'Noida, India',
    start: 'Jan 2025',
    end: 'Present',
    summary:
      'Building platforms that help users create resumes and cover letters to improve their job market opportunities.',
    highlights: [
      'Lead development of scalable frontend features that improve system performance and user experience.',
      'Mentor junior engineers and promote shared coding standards and best practices.',
      'Work with cross-functional teams to define requirements and deliver high-quality software on schedule.',
      'Introduced agile practices that streamlined workflows and shortened sprint cycles.',
    ],
    stack: ['React', 'TypeScript', 'Next.js'],
  },
  {
    company: 'Mediaslide',
    role: 'Frontend Developer (React & Next.js)',
    location: 'Remote',
    start: 'Jun 2022',
    end: 'Jan 2025',
    summary: 'Remote company specializing in advanced web development for international clients.',
    highlights: [
      'Delivered 30+ SEO-optimized Next.js websites for leading modeling agencies, lifting organic traffic by up to 20%.',
      'Improved content visibility and search rankings by 40% through technical SEO strategy.',
      'Raised user engagement by 25% with modern, performant animations.',
      'Owned multiple projects end to end with full autonomy, reaching a 98% client satisfaction rate.',
    ],
    stack: ['Next.js', 'React', 'GSAP', 'SEO'],
  },
  {
    company: 'Dhwaniris',
    role: 'Frontend Developer',
    location: 'Gurgaon, India',
    start: 'Feb 2021',
    end: 'Jun 2022',
    summary: 'Web development company working on high-profile projects.',
    highlights: [
      'Improved application performance by 30% through targeted optimization.',
      'Delivered work across government initiatives, open-source contributions, and projects with Amazon and Walmart.',
      'Improved project efficiency and scalability by 20% with stronger development practices.',
      'Built depth in React, Angular, TypeScript, and GraphQL, with growing Node.js experience.',
    ],
    stack: ['React', 'Angular', 'TypeScript', 'GraphQL', 'Node.js'],
  },
  {
    company: 'Quicqo',
    role: 'Software Developer (Frontend)',
    location: 'Delhi, India',
    start: 'Sep 2020',
    end: 'Feb 2021',
    summary: 'First professional role, focused on responsive and accessible interfaces.',
    highlights: [
      'Reduced page load times by 20% and raised engagement by 25% through optimized UI.',
      'Led cross-functional collaboration that improved delivery timelines by 15%.',
      'Built strong foundations in HTML, CSS, and JavaScript for responsive, accessible UIs.',
    ],
    stack: ['HTML', 'CSS', 'JavaScript'],
  },
]

export const caseStudies: CaseStudy[] = [
  {
    title: 'Resume & cover letter platform',
    context: 'Bold Technologies',
    description:
      'Product surfaces that guide job seekers through creating resumes and cover letters, built for scale and a smooth editing experience.',
    outcomes: ['Scalable component architecture', 'Performance-focused UI', 'Mentoring and code standards'],
    stack: ['React', 'TypeScript', 'Next.js'],
  },
  {
    title: 'Modeling agency websites',
    context: 'Mediaslide',
    description:
      'A portfolio of 30+ image-rich, SEO-optimized sites for international modeling agencies, with motion that keeps visitors engaged.',
    outcomes: ['+40% search visibility', 'Up to +20% organic traffic', '+25% engagement from animation'],
    stack: ['Next.js', 'React', 'GSAP'],
  },
  {
    title: 'Enterprise & government projects',
    context: 'Dhwaniris',
    description:
      'Frontend delivery across public-sector initiatives and enterprise collaborations, including work with Amazon and Walmart.',
    outcomes: ['+30% app performance', '+20% delivery efficiency', 'React, Angular, and GraphQL'],
    stack: ['React', 'Angular', 'GraphQL'],
  },
]

export const skillGroups: SkillGroup[] = [
  {
    title: 'Frameworks',
    items: ['React', 'Next.js', 'Angular', 'Redux Toolkit', 'Node.js', 'Express.js'],
  },
  {
    title: 'Languages',
    items: ['TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'GraphQL'],
  },
  {
    title: 'UI & Motion',
    items: ['Tailwind CSS', 'GSAP', 'Responsive design', 'Accessibility', 'Design systems'],
  },
  {
    title: 'Quality & Delivery',
    items: ['SEO optimization', 'Web performance', 'Git & GitHub', 'Code review', 'Agile'],
  },
]

export const education = {
  degree: 'B.Tech',
  school: 'Ch. Devi Lal State Institute of Engineering and Technology',
  location: 'Panniwala Mota, Sirsa',
  year: '2020',
}
