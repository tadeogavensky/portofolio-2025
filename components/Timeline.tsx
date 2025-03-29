import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { Experience } from "@/types/Expierence";
import { MdWorkspacePremium, MdSchool } from "react-icons/md";
import "../styles/timeline.css";
import Image from "next/image";
import { LuDot } from "react-icons/lu";
import { BiDiamond } from "react-icons/bi";

interface TimelineProps {
  items: Experience[];
  title?: string;
  subtitle?: string;
  type: "jobs" | "education";
}

export const Timeline = ({ items, title, subtitle, type }: TimelineProps) => {
  return (
    <div className="flex flex-col gap-6 pb-8">
      {(title || subtitle) && (
        <div className="flex flex-col gap-2">
          {title && (
            <h2 className="text-4xl font-bold text-black dark:text-white">
              {title}
            </h2>
          )}
          {subtitle && (
            <p className="text-gray-600 dark:text-gray-400">{subtitle}</p>
          )}
        </div>
      )}

      <div className="flex flex-col gap-4">
        {items.map((item) => (
          <Box key={item.id}>
            <div className="flex items-start gap-4">
              <div className="flex items-center justify-center w-10 h-10 rounded-full  dark:bg-gray-900">
                <Image
                  src={item.job_icon}
                  alt={item.company}
                  width={30}
                  height={52}
                />
              </div>
              <div className="flex flex-col gap-1">
                <h3 className="text-xl font-bold text-black dark:text-white">{item.title}</h3>
                <div className="flex items-center justify-start">
                  <p>{item.company}</p>
                  <p>
                    <LuDot className="dark:text-white" />
                  </p>
                  <p>{item.job_type}</p>
                </div>
                <div className="flex items-center justify-evenly text-gray-400">
                  <p className="">{item.startDate}</p>
                  <p style={{ marginLeft: "5px", marginRight: "5px" }}>-</p>
                  <p className="">{item.endDate}</p>
                  <p>
                    <LuDot />
                  </p>
                  <p>{item.length}</p>
                </div>

                <p className="text-gray-400 my-2">{item.description}</p>

                <div className="flex items-center justify-start gap-2 mb-2">
                  <BiDiamond className="dark:text-white" />
                  <p className="font-bold">Skills</p>
                </div>
                <div className="grid grid-cols-3 gap-2 max-h-24 overflow-y-auto no-scrollbar ">
                  {item.skills.map((skill) => (
                    <span
                      key={skill.id}
                      className="px-2 py-1 text-xs font-medium bg-gray-300 dark:bg-gray-800/50 text-black dark:text-white font-bold rounded-full text-center"
                    >
                      {skill.name}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Box>
        ))}
      </div>
    </div>
  );
};

const Box = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col bg-white dark:bg-gray-900  shadow-lg p-4 rounded-2xl">
      {children}
    </div>
  );
};
