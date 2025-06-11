import Image from "next/image";

type Props = {
  title: string;
  imageSrc: string;
};

export default function ServiceCard({ title, imageSrc }: Props) {
  return (
    <div className="flex flex-col items-center group hover:scale-105 transition-transform">
      <Image
        src={imageSrc}
        alt={title}
        width={96}
        height={96}
        className="rounded-full object-cover shadow w-24 h-24"
      />
      <span className="mt-2 text-sm font-medium text-gray-700 group-hover:text-blue-600 text-center">
        {title}
      </span>
    </div>
  );
}