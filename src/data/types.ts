export type Project = {
  slug: string;
  title: string;
  client: string;
  tag: string;
  summary: string;
  image: string;
  header: {
    bg: string;
    darkBg: string;
  };
  main: {
    description?: string;
    sections?: {
      heading: string;
      content: string[];
    }[];
    sidebar?: {
      role: string[];
      results: { label: string; value: string }[];
    };
  };
  nextProject: {
    slug: string;
    client: string;
    title: string;
  };
}; 