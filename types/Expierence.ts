export type Experience = {
  id: number;
  title: string;
  job_icon: string;
  length: string;
  job_type: JobType;
  description: string;
  company: string;
  startDate: string;
  endDate: string;
  location: JobLocation;
  skills: Skill[];
};

type JobType = "Freelance" | "Contract" | "Full-Time" | "Part-Time";

type JobLocation = "Remote" | "On-Site" | "Hybrid";

type Skill = {
  name: string;
  id: number;
};
