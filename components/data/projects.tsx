
export const DATA = {
  

  projects: [
    {
      title: "InfoodSys",
      href: "https://chatcollect.com",
      dates: "Jan 2024 - Feb 2024",
      active: true,
      description:
        "An online Food ordering platform which also allows restaurants to manage orders and assign delivery drivers",
      links: [
        {
          type: "Website",
          href: "https://chatcollect.com",
          
        },
      ],
      image: "",
      video:
        "/videos/infoodsys.mp4"
    },
    {
      title: "3D Portfolio",
      href: "https://chander-thakur-portfolio.vercel.app",
      dates: "June 2023 - Present",
      active: true,
      description:
        "Designed, developed and sold animated UI components for developers.",
      
      links: [
        {
          type: "Website",
          href: "https://chander-thakur-portfolio.vercel.app",
          
        },
        {
          type: "Source",
          href: "https://github.com/magicuidesign/magicui",
          
        },
      ],
      image: "",
      video: "/videos/portfolio.mp4",
    },
    {
      title: "llm.report",
      href: "https://llm.report",
      dates: "April 2023 - September 2023",
      active: true,
      description:
        "Developed an open-source logging and analytics platform for OpenAI: Log your ChatGPT API requests, analyze costs, and improve your prompts.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Stripe",
        "Cloudflare Workers",
      ],
      links: [
        {
          type: "Website",
          href: "https://llm.report",
          
        },
        {
          type: "Source",
          href: "https://github.com/dillionverma/llm.report",
          
        },
      ],
      image: "",
      video: "https://cdn.llm.report/openai-demo.mp4",
    },
    {
      title: "Automatic Chat",
      href: "https://automatic.chat",
      dates: "April 2023 - March 2024",
      active: true,
      description:
        "Developed an AI Customer Support Chatbot which automatically responds to customer support tickets using the latest GPT models.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Stripe",
        "Cloudflare Workers",
      ],
      links: [
        {
          type: "Website",
          href: "https://automatic.chat",
          
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/automatic-chat.mp4",
    },
  ],
 
} as const;
