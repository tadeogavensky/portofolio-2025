"use client";

import Image from "next/image";
import { Card } from "./Card";
import Signature from "./Signature";
import Meta from "./Meta";
import { stack } from "@/constants/stack";
import { useState, useEffect } from "react";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import Link from "next/link";
import { cards, CardData } from "@/constants/cards_data";

export default function Grid() {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
  const [activeDrawer, setActiveDrawer] = useState<number | null>(null);

  useEffect(() => {
    if (activeDrawer) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [activeDrawer]);

  const handleDrawerToggle = (cardIndex: number) => {
    setActiveDrawer(activeDrawer === cardIndex ? null : cardIndex);
  };

  return (
    <>
      <div className="md:hidden">
        <MobileGrid />
      </div>
      <div className="hidden md:grid">
        <DesktopGrid
          hoveredSkill={hoveredSkill}
          setHoveredSkill={setHoveredSkill}
          activeDrawer={activeDrawer}
          onDrawerToggle={handleDrawerToggle}
        />
      </div>
    </>
  );
}

const DesktopGrid = ({
  hoveredSkill,
  setHoveredSkill,
  activeDrawer,
  onDrawerToggle,
}: {
  hoveredSkill: string | null;
  setHoveredSkill: (skill: string | null) => void;
  activeDrawer: number | null;
  onDrawerToggle: (index: number) => void;
}) => {
  const getGridClasses = (card: CardData) => {
    const classes = {
      1: "col-span-4 row-span-3 col-start-1 row-start-1",
      2: "col-span-2 row-span-2 col-start-5 row-start-2",
      3: "col-span-2 row-span-2 col-start-7 row-start-2",
      4: "col-span-4 row-span-2 col-start-3 row-start-4",
      5: "col-span-4 col-start-5 row-start-1 row-span-1",
      6: "col-span-2 row-span-2 col-start-1 row-start-4",
      7: "col-span-2 row-span-2 col-start-7 row-start-4",
      8: "col-span-4 row-span-2 row-start-6 col-start-1",
      9: "col-span-4 row-span-2 col-start-5 row-start-6",
    };
    return classes[card.id as keyof typeof classes] || "";
  };

  return (
    <div className="grid grid-cols-8 grid-rows-7 gap-6">
      {cards.map((card) => (
        <div
          key={card.id}
          className={getGridClasses(card)}
        >
          <Card
            size="large"
            content={card.content}
            modalContent={card.modalContent}
            displayButton={card.displayButton}
            isDrawerOpen={activeDrawer === card.id}
            onDrawerOpen={() => onDrawerToggle(card.id)}
          />
        </div>
      ))}
    </div>
  );
};

const MobileGrid = () => {
  return (
    <div>
      <h1>hola</h1>
    </div>
  );
};
