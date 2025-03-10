"use client";

import Image from "next/image";
import { Card } from "./Card";
import Signature from "./Signature";
import Meta from "./Meta";
import { stack } from "@/constants/stack";
import { useState } from "react";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import Link from "next/link";
export default function Grid() {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  return (
    <div className="grid grid-cols-8 grid-rows-7 gap-6">
      <div className="col-span-4 col-start-5 row-start-1">
        <Card
          size="large"
          content={<div></div>}
          modalContent={<div>1</div>}
          displayButton={false}
        />
      </div>
      <div className="col-span-2 row-span-2 col-start-5 row-start-2">
        <Card
          size="large"
          modalContent={<div>2</div>}
          content={
            <div className="flex flex-col justify-center gap-6">
              <div className="flex items-center justify-center">
                <Signature name="Tadeo" />
              </div>
              <Meta title="More about me" description="Credentials" />
            </div>
          }
        />
      </div>
      <div className="col-span-2 row-span-2 col-start-7 row-start-2">
        <Card
          size="large"
          content={
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
          }
          modalContent={<div>3</div>}
        />
      </div>
      <div className="col-span-4 row-span-2 col-start-3 row-start-4">
        <Card
          size="large"
          content={
            <div className="flex flex-col gap-6">
              <div className="flex justify-center gap-12 w-full items-center px-8">
                {stack.slice(0, 4).map((skill) => (
                  <div
                    key={skill.name}
                    className="flex flex-col items-center gap-2 hover:bg-gray-100 dark:hover:bg-gray-700/50 rounded-full p-2 transition-colors cursor-pointer"
                    onMouseEnter={() => setHoveredSkill(skill.name)}
                    onMouseLeave={() => setHoveredSkill(null)}
                  >
                    <skill.icon
                      size={52}
                      className="text-gray-700 dark:text-gray-400 transition-colors"
                      style={{
                        color:
                          hoveredSkill === skill.name ? skill.color : undefined,
                        transition: "color 0.2s ease",
                      }}
                    />
                    <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
              <Meta title="Skills" description="Tech Stack" />
            </div>
          }
          modalContent={<div>4</div>}
        />
      </div>
      <div className="col-span-4 row-span-3 col-start-1 row-start-1">
        <Card
          size="large"
          content={
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
                  Web Developer
                </p>
                <p className="dark:text-white font-medium text-4xl">
                  Tadeo <br /> Gavensky.
                </p>
                <p className="dark:text-gray-400 text-sm">
                  I am a Web Developer based in Buenos Aires.
                </p>
              </div>
            </div>
          }
          modalContent={<div>1</div>}
        />
      </div>
      <div className="col-span-2 row-span-2 col-start-1 row-start-4">
        <Card size="large" content={<div>6</div>} modalContent={<div>6</div>} />
      </div>
      <div className="col-span-2 row-span-2 col-start-7 row-start-4">
        <Card
          size="large"
          content={
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
          }
          modalContent={<div>7</div>}
        />
      </div>
      <div className="col-span-4 row-span-2 row-start-6">
        <Card
          size="large"
          content={
            <div className="flex justify-between items-center w-full">
              <div className="w-[180px] flex flex-col items-center justify-between p-6 rounded-2xl bg-gradient-to-tl from-gray-100 to-gray-50 dark:from-gray-800 dark:to-gray-900 border border-gray-200 dark:border-gray-700/50 shadow-md">
                <p className="text-4xl font-semibold">03</p>
                <div className="mt-4 flex flex-col items-center">
                  <p className="text-sm font-medium text-gray-500 uppercase">
                    Years
                  </p>
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
                  <p className="text-sm font-medium text-gray-500 uppercase">
                    Tech
                  </p>
                  <p className="text-sm font-medium text-gray-500 uppercase">
                    Stack
                  </p>
                </div>
              </div>
            </div>
          }
          modalContent={<div>8</div>}
          displayButton={false}
        />
      </div>
      <div className="col-span-4 row-span-2 col-start-5 row-start-6">
        <Card size="large" content={<div>9</div>} modalContent={<div>9</div>} />
      </div>
    </div>
  );
}
