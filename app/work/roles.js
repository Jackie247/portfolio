export const roles = [
  {
    company: "Good Growth",
    role: "Software Developer",
    dates: "2026 - Present",
    clients: ["Tractor Supply Company", "AO"],
    projects: [
      {
        title: "Checkout Login Optimisation",
        client: "Tractor Supply Company",
        description:
          "Redesigned the checkout login experience for Tractor Supply Company, bringing sign-in directly into the checkout flow. Users can clearly choose to continue as a guest or sign in to sync their cart, making the available options more visible and accessible.",
        videos: { mobile: "/videos/gg_vid1.mp4" },
      },
      {
        title: "Product Listing Page Redesign",
        client: "Tractor Supply Company",
        description:
          "Redesigned the product listing page experience by introducing a hero banner and additional product banners, improving content visibility and creating a more engaging shopping experience.",
        videos: { mobile: "/videos/gg_vid2.mp4" },
      },
      {
        title: "E-commerce Experimentation",
        client: "Tractor Supply Company",
        description:
          "Developed and tested customer-facing UI experiments using React and TypeScript, working across product detail pages, product listings, cart and checkout for major e-commerce clients including Tractor Supply Company and AO.",
        videos: { mobile: "/videos/gg_vid3.mp4" },
      },
    ],
  },
  {
    company: "Source Mogul",
    role: "Software Developer",
    dates: "2023 - 2025",
    previousRole: { role: "Junior Developer", dates: "2022 - 2023" },
    description:
      "Developed and maintained backend systems, REST APIs and web crawlers using JavaScript, TypeScript, Node.js, Express, MongoDB and Python. Managed production crawler jobs through PM2, debugged issues, reviewed code and coordinated outsourced developers. Led the migration from Apify to Scrapy, saving approximately $3,000 per month, while optimising proxy usage to reduce costs by a further $1,000 per month.",
  },
  {
    company: "CodeClan",
    role: "Junior Frontend Developer",
    dates: "2021 - 2022",
    description:
      "Built responsive web interfaces using HTML, CSS, JavaScript and React. Developed reusable components, implemented forms and client-side validation.",
  },
];
