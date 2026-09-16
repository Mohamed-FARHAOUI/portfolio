/* =========================================================
   PROJECTS DATA
   =========================================================
   This is the single source of truth for every project shown
   on the site: the homepage portfolio grid, the "All Projects"
   page, and each project's detail page.

   TO ADD A NEW PROJECT:
   1. Copy one of the objects below.
   2. Give it a unique "id" (no spaces, lowercase, dashes ok).
   3. Fill in the fields.
   4. Add your image(s) to the /image folder and reference them.
   That's it — it will automatically show up everywhere.
   ========================================================= */

   const projectsData = [
    {
      id: "portfolio-website",
      title: "Portfolio Website",
      category: "Portfolio",
      year: "2025",
      coverImage: "image/port1.jpg",
      gallery: ["image/port1.jpg"],
      shortDescription:
        "A clean and modern personal portfolio showcasing projects, skills, and contact information, built with smooth scroll and responsive design.",
      description:
        "A clean and modern personal portfolio site designed to showcase projects, skills, and contact information at a glance. Built mobile-first, with smooth scroll navigation between sections and a layout that adapts cleanly from large desktop screens down to small phones.",
      features: [
        "Smooth scroll single-page navigation",
        "Fully responsive across all screen sizes",
        "Animated on-scroll section reveals",
        "Integrated contact form"
      ],
      tech: ["HTML5", "CSS3", "JavaScript"],
      liveUrl: "",
      repoUrl: ""
    },
    {
      id: "luxury-jewelry",
      title: "Luxury Jewelry Webpage",
      category: "Brand / E-commerce",
      year: "2025",
      coverImage: "image/port2.jpg",
      gallery: ["image/port2.jpg"],
      shortDescription:
        "A luxury jewelry brand introduction website with elegant animations, high-resolution product displays, and captivating storytelling.",
      description:
        "A brand introduction site for a luxury jewelry label, designed to feel premium from the first scroll. High-resolution product displays are paired with elegant, restrained animation and a narrative flow that builds the brand story section by section rather than dumping everything on one page.",
      features: [
        "High-resolution product showcases",
        "Elegant scroll-triggered animations",
        "Brand storytelling section flow",
        "Responsive image galleries"
      ],
      tech: ["HTML5", "CSS3", "JavaScript"],
      liveUrl: "",
      repoUrl: ""
    },
    {
      id: "bakery-react",
      title: "Bakery Store",
      category: "E-commerce",
      year: "2025",
      coverImage: "image/port3.jpeg",
      gallery: ["image/port3.jpeg"],
      shortDescription:
        "A visually appealing bakery website with menu highlights, online ordering, and smooth React.js UI using modern Tailwind design.",
      description:
        "A visually driven bakery website built as a React single-page app. Menu items are highlighted with card-based layouts, and the online ordering flow was built to feel fast and lightweight, styled entirely with Tailwind's utility classes for a consistent, modern look.",
      features: [
        "Component-based React.js architecture",
        "Online ordering flow",
        "Menu highlight cards",
        "Tailwind CSS design system"
      ],
      tech: ["React.js", "Tailwind CSS"],
      liveUrl: "",
      repoUrl: ""
    },
    {
      id: "clothing-store",
      title: "Clothing Store",
      category: "E-commerce",
      year: "2025",
      coverImage: "image/port4.jpeg",
      gallery: ["image/port4.jpeg"],
      shortDescription:
        "An e-commerce clothing website with category filters, seasonal lookbooks, cart integration, and a custom admin panel.",
      description:
        "A full e-commerce build for a clothing brand, covering the whole loop from browsing to checkout. Shoppers can filter by category, browse seasonal lookbooks, and manage items in a persistent cart. On the backend, a custom admin panel lets the store owner manage inventory and orders directly.",
      features: [
        "Category filtering",
        "Seasonal lookbook pages",
        "Shopping cart integration",
        "Custom admin panel for inventory & orders"
      ],
      tech: ["HTML5", "CSS3", "JavaScript", "PHP", "MySQL"],
      liveUrl: "",
      repoUrl: ""
    },
    {
      id: "bakery-php",
      title: "Bakery Ordering Platform",
      category: "E-commerce",
      year: "2025",
      coverImage: "image/port5.jpg",
      gallery: ["image/port5.jpg"],
      shortDescription:
        "A dynamic bakery ordering platform featuring user login, real-time cart updates, and a custom-built PHP/MySQL backend for order management.",
      description:
        "A dynamic ordering platform for a bakery, built with a custom PHP/MySQL backend. Customers create accounts, log in, and see their cart update in real time as they add items. On the admin side, incoming orders are tracked and managed through the same backend.",
      features: [
        "User authentication & accounts",
        "Real-time cart updates",
        "Custom PHP/MySQL backend",
        "Order management for admins"
      ],
      tech: ["HTML5", "CSS3", "JavaScript", "PHP", "MySQL"],
      liveUrl: "",
      repoUrl: ""
    },
    {
      id: "restaurant-website",
      title: "Restaurant Website",
      category: "Hospitality",
      year: "2025",
      coverImage: "image/port6.jpg",
      gallery: ["image/port6.jpg"],
      shortDescription:
        "A modern restaurant website with a digital menu, reservation system, location map, and responsive design for mobile users.",
      description:
        "A modern restaurant site built around three things diners actually need: the menu, a way to book a table, and directions. The digital menu is easy to browse, the reservation system lets guests book directly from the page, and an embedded map handles the 'where is it' question — all wrapped in a design tuned for mobile visitors.",
      features: [
        "Digital, easy-to-browse menu",
        "Built-in table reservation system",
        "Embedded location map",
        "Mobile-first responsive design"
      ],
      tech: ["React.js", "Tailwind CSS"],
      liveUrl: "",
      repoUrl: ""
    }
  
    /* --------------------------------------------------------
       EXAMPLE — copy this block to add a new project, then
       delete this comment block:
  
    ,{
      id: "my-new-project",
      title: "My New Project",
      category: "E-commerce",           // shown as a small label/filter
      year: "2026",
      coverImage: "image/portX.jpg",    // shown on the grid card
      gallery: [                        // shown on the detail page
        "image/portX.jpg",
        "image/portX-2.jpg",
        "image/portX-3.jpg"
      ],
      shortDescription: "One or two sentences for the grid card.",
      description: "Longer paragraph(s) for the detail page.",
      features: [
        "Feature one",
        "Feature two",
        "Feature three"
      ],
      tech: ["HTML5", "CSS3", "JavaScript"],
      liveUrl: "https://example.com",   // optional, leave "" to hide the button
      repoUrl: "https://github.com/..." // optional, leave "" to hide the button
    }
    -------------------------------------------------------- */
  ];