import Image from "next/image";
import Card from "./Card";

export default function Grid() {
  return (
    <div className="grid grid-cols-8 grid-rows-7 gap-4">
      <div className="col-span-4 col-start-5 row-start-1">
        <Card size="large" content={<div>1</div>} />
      </div>
      <div className="col-span-2 row-span-2 col-start-5 row-start-2">
        <Card size="large" content={<div>2</div>} />
      </div>
      <div className="col-span-2 row-span-2 col-start-7 row-start-2">
        <Card size="large" content={<div>3</div>} />
      </div>
      <div className="col-span-4 row-span-2 col-start-3 row-start-4">
        <Card size="large" content={<div>4</div>} />
      </div>
      <div className="col-span-4 row-span-3 col-start-1 row-start-1">
        <Card
          size="large"
          content={
            <div className="flex items-center justify-between gap-4">
              <Image
                src={"/pic.jpeg"}
                alt="pic"
                width={150}
                height={150}
                objectFit="contain"
                className="rounded-2xl"
              />
              <div className="flex flex-col gap-2">
                <p className="dark:text-gray-400 font-semibold uppercase text-sm">
                  Web Developer
                </p>
                <p className="dark:text-white font-semibold text-lg">
                  Tadeo <br /> Gavensky.
                </p>
                <p className="dark:text-gray-400 text-sm">
                  I am a web developer with a passion for creating beautiful and
                  functional websites.
                </p>
              </div>
            </div>
          }
        />
      </div>
      <div className="col-span-2 row-span-2 col-start-1 row-start-4">
        <Card size="large" content={<div>6</div>} />
      </div>
      <div className="col-span-2 row-span-2 col-start-7 row-start-4">
        <Card size="large" content={<div>7</div>} />
      </div>
      <div className="col-span-4 row-span-2 row-start-6">
        <Card size="large" content={<div>8</div>} />
      </div>
      <div className="col-span-4 row-span-2 col-start-5 row-start-6">
        <Card size="large" content={<div>9</div>} />
      </div>
    </div>
  );
}
