// src/components/Skeleton.tsx
export default function Skeleton({ className = "" }: { className?: string }) {
  return (
    <div
      className={`bg-gray-200 relative overflow-hidden rounded-md ${className}`}
    >
      <div className="absolute inset-0 bg-shimmer bg-[length:200%_100%] animate-shimmer opacity-70" />
    </div>
  );
}