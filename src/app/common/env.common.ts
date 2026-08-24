const API_URL = import.meta.env.VITE_API_URL;

export const sendContact = async (data: {
  name: string;
  email: string;
  subject: string;
  message: string;
}) => {
  const res = await fetch(`${API_URL}/contact`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    throw new Error("Failed to send message");
  }

  return res;
};

export interface ProjectDto {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: Array<{ name: string; color: "blue" | "emerald" | "violet" | "coral" | "gold" }>;
  liveUrl?: string;
  githubUrl?: string;
}

export interface TimelineEntryDto {
  id: string;
  year: string;
  title: string;
  company: string;
  description: string;
  color: string;
}

export interface ContactDetailDto {
  id: string;
  icon: "mail" | "phone" | "map-pin";
  label: string;
  value: string;
  href?: string;
  colorVar: string;
}

async function getJson<T>(path: string): Promise<T> {
  const res = await fetch(`${API_URL}${path}`);
  if (!res.ok) {
    throw new Error(`Failed to load ${path}`);
  }
  return res.json();
}

export const getProjects = () => getJson<ProjectDto[]>("/projects");
export const getExperience = () => getJson<TimelineEntryDto[]>("/experience");
export const getEducation = () => getJson<TimelineEntryDto[]>("/education");
export const getContactDetails = () => getJson<ContactDetailDto[]>("/contact-details");