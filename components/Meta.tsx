interface MetaProps {
  title: string;
  description: string;
}

export default function Meta({ title, description }: MetaProps) {
  return (
    <div className="flex flex-col items-start gap-2">
      <p className="dark:text-gray-400 font-semibold uppercase text-xs">
        {title}
      </p>
      <p className="dark:text-white text-xl">{description}</p>
    </div>
  );
}
