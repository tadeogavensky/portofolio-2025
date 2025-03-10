import { The_Nautigal } from "next/font/google";

const theNautigal = The_Nautigal({
  subsets: ["latin"],
  weight: ["400"],
});

interface SignatureProps {
  name: string;
}

export default function Signature({ name }: SignatureProps) {
  return (
    <div className="text-gray-900 dark:text-white">
      <p className={`${theNautigal.className} text-5xl`}>{name}</p>
    </div>
  );
}
