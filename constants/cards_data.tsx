import Image from "next/image";
import { FaLinkedinIn, FaGithub, FaWhatsapp, FaEnvelope, FaStackOverflow } from "react-icons/fa";
import Link from "next/link";
import Signature from "@/components/Signature";
import Meta from "@/components/Meta";
import { stack } from "./stack";
import { MdWorkspacePremium } from "react-icons/md";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experience } from "./expierence";
import { Timeline } from "@/components/Timeline";
import { FaAt } from "react-icons/fa6";
import Projects from "@/components/Projects";

export interface CardData {
  id: number;
  content: React.ReactNode;
  modalContent: React.ReactNode;
  displayButton?: boolean;
  gridPosition: {
    colSpan: number;
    rowSpan: number;
    colStart: number;
    rowStart: number;
  };
}

export const cards: CardData[] = [
  {
    id: 1,
    content: (
      <div className="flex items-center justify-start gap-4">
        <Image
          src={"/pic.jpeg"}
          alt="pic"
          width={150}
          height={150}
          objectFit="contain"
          className="rounded-tl-xl rounded-br-xl"
        />
        <div className="flex flex-col gap-1">
          <p className="dark:text-gray-400 font-semibold uppercase text-xs">
            Full Stack Developer
          </p>
          <p className="dark:text-white font-medium text-4xl">
            Tadeo <br /> Gavensky.
          </p>
          <p className="dark:text-gray-400 text-sm">
            I am a Full Stack Developer based in Buenos Aires.
          </p>
        </div>
      </div>
    ),
    modalContent: (
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-4">
          <div className="w-full aspect-[16/9] relative rounded-2xl overflow-hidden">
            <Image
              src={"/pic.jpeg"}
              alt="profile"
              fill
              className="object-cover"
            />
          </div>
          <div className="flex flex-col gap-2">
            <h1 className="text-3xl font-bold">Tadeo Gavensky</h1>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Full Stack Developer
            </p>
            <p className="text-base text-gray-600 dark:text-gray-400">
              I'm a Full Stack Dev, trying to learn new things each time I wake
              up. Very passionate about building solutions to everyday problems.
            </p>
          </div>
        </div>
      </div>
    ),
    gridPosition: {
      colSpan: 4,
      rowSpan: 3,
      colStart: 1,
      rowStart: 1,
    },
  },
  {
    id: 2,
    content: (
      <div className="flex flex-col justify-center gap-6">
        <div className="flex items-center justify-center">
          <Signature name="Tadeo" />
        </div>
        <Meta title="More about me" description="Credentials" />
      </div>
    ),
    modalContent: <div>2</div>,
    gridPosition: {
      colSpan: 2,
      rowSpan: 2,
      colStart: 5,
      rowStart: 2,
    },
  },
  {
    id: 3,
    content: (
      <div className="flex flex-col justify-center gap-6">
        <div className="flex items-center justify-center">
          <Image
            src={"/thumbnails/make-it-bilingual.png"}
            alt="pic"
            width={100}
            height={100}
            objectFit="contain"
            className="rounded-md"
          />
        </div>
        <Meta title="Showcase" description="Projects" />
      </div>
    ),
    modalContent: <Projects />,
    gridPosition: {
      colSpan: 2,
      rowSpan: 2,
      colStart: 7,
      rowStart: 2,
    },
  },
  {
    id: 4,
    content: (
      <div className="flex flex-col gap-6">
        <div className="flex justify-center gap-12 w-full items-center px-8">
          {stack.slice(0, 4).map((skill) => (
            <div
              key={skill.name}
              className="flex flex-col items-center gap-2 hover:bg-gray-100 dark:hover:bg-gray-700/50 rounded-full p-2 transition-colors cursor-pointer"
            >
              <skill.icon
                size={52}
                className="text-gray-700 dark:text-gray-400 transition-colors"
              />
            </div>
          ))}
        </div>
        <Meta title="Skills" description="Tech Stack" />
      </div>
    ),
    modalContent: (
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-4">
          <h1 className="text-3xl font-bold">Skills</h1>
          <ul className="flex flex-col gap-4">
            {stack.map((skill) => (
              <li key={skill.name} className="flex items-center gap-4">
                <div className="flex items-center justify-center rounded-full hover:bg-gray-100 dark:hover:bg-gray-700/50 p-2 transition-colors cursor-pointer">
                  <skill.icon size={52} color={skill.color} />
                </div>
                <p className="text-xl font-bold">{skill.name}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    ),
    gridPosition: {
      colSpan: 4,
      rowSpan: 2,
      colStart: 3,
      rowStart: 4,
    },
  },
  {
    id: 5,
    content: <div>5</div>,
    modalContent: <div>5</div>,
    gridPosition: {
      colSpan: 4,
      colStart: 5,
      rowStart: 1,
      rowSpan: 1,
    },
    displayButton: false,
  },
  {
    id: 6,
    content: (
      <div className="flex flex-col justify-center gap-6">
        <div className="flex items-center justify-center">
          <MdWorkspacePremium size={52} />
        </div>
        <Meta title="Experience" description="Jobs" />
      </div>
    ),
    modalContent: (
      <div className="flex flex-col gap-6w-full max-w-4xl mx-auto">
        <Timeline
          items={experience}
          type={"jobs"}
          title="Experience"
          subtitle="My professional journey so far"
        />
      </div>
    ),
    gridPosition: {
      colSpan: 2,
      rowSpan: 2,
      colStart: 1,
      rowStart: 4,
    },
  },
  {
    id: 7,
    content: (
      <div className="flex flex-col gap-6 justify-center">
        <div className="flex justify-center gap-6">
          <Link
            href="https://www.linkedin.com/in/tadeogavensky/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-500 transition-colors"
          >
            <FaLinkedinIn size={48} />
          </Link>
          <Link
            href="https://github.com/tadeogavensky"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-500 transition-colors"
          >
            <FaGithub size={48} />
          </Link>
        </div>
        <Meta title="Connect with me" description="Profiles" />
      </div>
    ),
    modalContent: (
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-bold">Connect with me</h1>
          <p className="text-gray-600 dark:text-gray-400">
            Find me around the web
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <Link 
            href="https://www.linkedin.com/in/tadeo-gavensky-0595b9205" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-3 p-4 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300"
          >
            <FaLinkedinIn className="text-[#0077B5] text-2xl" />
            <div className="flex flex-col">
              <span className="font-medium">LinkedIn</span>
              <span className="text-sm text-gray-600 dark:text-gray-400">Professional Network</span>
            </div>
          </Link>

          <Link 
            href="https://github.com/tadeogavensky" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-3 p-4 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300"
          >
            <FaGithub className="text-[#333] dark:text-white text-2xl" />
            <div className="flex flex-col">
              <span className="font-medium">GitHub</span>
              <span className="text-sm text-gray-600 dark:text-gray-400">Code Repository</span>
            </div>
          </Link>

          <Link
            href="https://wa.me/5491160204654"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 p-4 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300"
          >
            <FaWhatsapp className="text-[#25D366] text-2xl" />
            <div className="flex flex-col">
              <span className="font-medium">WhatsApp</span>
              <span className="text-sm text-gray-600 dark:text-gray-400">Direct Message</span>
            </div>
          </Link>

          <Link href="mailto:tadeogavensky@gmail.com" className="flex items-center gap-3 p-4 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300">
            <FaAt className="text-2xl" color="red" />
            <div className="flex flex-col">
              <span className="font-medium">Email</span>
              <span className="text-sm text-gray-600 dark:text-gray-400">Send an email
              </span>
            </div>
          </Link>
          <Link href="https://stackoverflow.com/users/17142509/tadeogavensky" className="flex items-center gap-3 p-4 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300">
            <FaStackOverflow className="text-2xl" color="orange" />
            <div className="flex flex-col">
              <span className="font-medium">Stack Overflow</span>
              <span className="text-sm text-gray-600 dark:text-gray-400">Q&A Community</span>
            </div>
          </Link>
        </div>
      </div>
    ),
    gridPosition: {
      colSpan: 2,
      rowSpan: 2,
      colStart: 7,
      rowStart: 4,
    },
  },
  {
    id: 8,
    content: (
      <div className="flex justify-between items-center w-full gap-4">
        <div className="w-[180px] flex flex-col items-center justify-between p-6 rounded-2xl bg-gradient-to-tl from-gray-100 to-gray-50 dark:from-gray-800 dark:to-gray-900 border border-gray-200 dark:border-gray-700/50 shadow-md">
          <p className="text-4xl font-semibold">03</p>
          <div className="mt-4 flex flex-col items-center">
            <p className="text-sm font-medium text-gray-500 uppercase">Years</p>
            <p className="text-sm font-medium text-gray-500 uppercase">
              Experience
            </p>
          </div>
        </div>
        <div className="w-[180px] flex flex-col items-center justify-between p-6 rounded-2xl bg-gradient-to-tl from-gray-100 to-gray-50 dark:from-gray-800 dark:to-gray-900 border border-gray-200 dark:border-gray-700/50 shadow-md">
          <p className="text-4xl font-semibold">+7</p>
          <div className="mt-4 flex flex-col items-center">
            <p className="text-sm font-medium text-gray-500 uppercase">
              Projects
            </p>
            <p className="text-sm font-medium text-gray-500 uppercase">
              Completed
            </p>
          </div>
        </div>
        <div className="w-[180px] flex flex-col items-center justify-between p-6 rounded-2xl bg-gradient-to-tl from-gray-100 to-gray-50 dark:from-gray-800 dark:to-gray-900 border border-gray-200 dark:border-gray-700/50 shadow-md">
          <p className="text-4xl font-semibold">+10</p>
          <div className="mt-4 flex flex-col items-center">
            <p className="text-sm font-medium text-gray-500 uppercase">Tech</p>
            <p className="text-sm font-medium text-gray-500 uppercase">Stack</p>
          </div>
        </div>
      </div>
    ),
    modalContent: <div>8</div>,
    gridPosition: {
      colSpan: 4,
      rowSpan: 2,
      rowStart: 6,
      colStart: 1,
    },
    displayButton: false,
  },
  {
    id: 9,
    content: <div>9</div>,
    modalContent: <div>9</div>,
    gridPosition: {
      colSpan: 4,
      rowSpan: 2,
      colStart: 5,
      rowStart: 6,
    },
  },
];
