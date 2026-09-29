export interface Project {
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  tags: string[];
  github: string;
  features: string[];
  role: string;
  year: string;
}

export const projects: Project[] = [
  {
    slug: "mountain-peak-outfitters",
    title: "Mountain Peak Outfitters Analysis",
    description:
      "Database analysis for a national outdoor retailer with 25 stores. SQL-driven insights into sales performance, inventory, and operations.",
    longDescription:
      "A comprehensive database analysis project for Mountain Peak Outfitters, a national outdoor retailer operating 25 stores across the country. The project involved designing and executing complex SQL queries to extract meaningful business insights from large datasets, covering sales trends, inventory management, and operational efficiency across all store locations.",
    tags: ["SQL", "PostgreSQL", "Data Analysis"],
    github:
      "https://github.com/Kosi-Kyrian/Mountain-Peak-Outfitters-Database-Analysis",
    features: [
      "Complex SQL queries for multi-store sales analysis",
      "Inventory tracking and optimization insights",
      "Operational performance metrics across 25 locations",
      "Data-driven recommendations for business decisions",
    ],
    role: "Data Analyst",
    year: "2026",
  },
  {
    slug: "data-science-notebooks",
    title: "Data Science Notebooks",
    description:
      "A collection of data science assignments and analysis projects exploring statistical methods, visualization, and data wrangling.",
    longDescription:
      "A curated collection of data science projects built in Jupyter notebooks, covering a range of analytical techniques from statistical analysis to data visualization. Each notebook tackles a real-world dataset, applying Python's data science ecosystem to clean, analyze, and present findings in a clear, reproducible format.",
    tags: ["Jupyter", "Python", "Data Science"],
    github: "https://github.com/Kosi-Kyrian/Data-Science-Assignments-",
    features: [
      "Statistical analysis and hypothesis testing",
      "Data visualization with matplotlib and seaborn",
      "Data wrangling and cleaning pipelines",
      "Exploratory data analysis on real-world datasets",
    ],
    role: "Data Scientist",
    year: "2026",
  },
  {
    slug: "market-run-backend",
    title: "Market Run Backend",
    description:
      "Collaborative backend for a market application — vendor routes, authentication, login endpoints with JWT token generation.",
    longDescription:
      "A team-built backend system for a market application, developed as part of the SmartHub training program. The project involved building vendor management routes, implementing secure authentication with password hashing and JWT token generation, and designing a clean API architecture that supports multiple user roles and market operations.",
    tags: ["Python", "Authentication", "Team Project"],
    github: "https://github.com/SmartHub-trainings/market-run-backend",
    features: [
      "Vendor application and management routes",
      "Secure authentication with password hashing",
      "JWT token generation and verification",
      "Collaborative development with pull request workflow",
    ],
    role: "Backend Developer",
    year: "2026",
  },
  {
    slug: "personal-notes-api",
    title: "Personal Notes API",
    description:
      "A RESTful API for managing personal notes, built with Python. Features CRUD operations and persistent SQLite storage.",
    longDescription:
      "A clean, well-structured RESTful API for personal note management. Built with Python, the API provides full CRUD functionality with persistent SQLite storage, proper error handling, and a clear endpoint structure. Designed as a practical exercise in API architecture and backend best practices.",
    tags: ["Python", "REST API", "SQLite"],
    github: "https://github.com/Kosi-Kyrian/personal_notes_api",
    features: [
      "Full CRUD operations for notes",
      "Persistent SQLite database storage",
      "RESTful endpoint design",
      "Environment-based configuration",
    ],
    role: "Backend Developer",
    year: "2026",
  },
  {
    slug: "bookstore-api",
    title: "Bookstore API",
    description:
      "A backend API for a bookstore application with full CRUD functionality, database integration, and structured endpoint design.",
    longDescription:
      "A backend API powering a bookstore application, featuring complete CRUD operations for managing books, structured database integration with SQLite, and a well-organized codebase following Python backend conventions. The project demonstrates clean API design, proper data validation, and scalable endpoint architecture.",
    tags: ["Python", "REST API", "SQLite"],
    github: "https://github.com/Kosi-Kyrian/Bookstore-API",
    features: [
      "Book management with full CRUD operations",
      "Structured database integration",
      "Input validation and error handling",
      "Clean, maintainable codebase",
    ],
    role: "Backend Developer",
    year: "2026",
  },
  {
    slug: "restaurant-menu-api",
    title: "Restaurant Menu API",
    description:
      "Backend API for a restaurant menu system. Covers structured data modeling, endpoint design, and Python backend patterns.",
    longDescription:
      "A backend API for managing a restaurant's menu system, built as a deep dive into structured data modeling and Python backend patterns. The project covers menu item management, category organization, and clean endpoint design, serving as a foundation for understanding real-world API architecture.",
    tags: ["Python", "REST API", "Backend"],
    github: "https://github.com/Kosi-Kyrian/Backend_repo",
    features: [
      "Menu item and category management",
      "Structured data modeling",
      "RESTful endpoint architecture",
      "Python backend design patterns",
    ],
    role: "Backend Developer",
    year: "2026",
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
