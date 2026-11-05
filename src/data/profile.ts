export type Entry = {
  title: string;
  period?: string;
  description: string;
  url?: string;
};

// Edit this file to personalize every section of the portfolio.
// Leave optional fields empty until you are ready to share them.
export const profile: {
  name: string;
  shortName: string;
  location: string;
  role: string;
  bio: string[];
  about: string[];
  photo: string;
  photoCaption: string;
  email: string;
  links: { label: string; url: string }[];
  interests: string[];
  education: Entry[];
  experience: Entry[];
  projects: Entry[];
} = {
  name: "Youssef Abou Eljihad",
  shortName: "youssef.",
  location: "Mohammedia, Morocco",
  role: "",
  bio: [],
  about: [],
  // Add your photo to public/photos/profile.jpg and use "/photos/profile.jpg".
  photo: "",
  photoCaption: "",
  email: "",
  // Example: { label: "GitHub", url: "https://github.com/your-username" }
  links: [],
  interests: [],
  // Example: { title: "Your school", period: "2020–2024", description: "Your degree and focus." }
  education: [],
  experience: [],
  // A project can also include url: "https://your-project.com".
  projects: [],
};
