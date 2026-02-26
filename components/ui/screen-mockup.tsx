import Image from "next/image";
import { cn } from "@/lib/utils";

interface ScreenMockupProps {
  /** Video source URL */
  videoSrc?: string;
  /** Image source URL (used as poster for video, or standalone image) */
  imageSrc?: string;
  /** Alt text for image */
  alt?: string;
  /** Additional class names for the outer container */
  className?: string;
}

/**
 * A screen mockup component with browser-like header and traffic lights.
 */
export function ScreenMockup({
  videoSrc,
  imageSrc,
  alt = "Screen mockup",
  className,
}: ScreenMockupProps) {
  return (
    <div
      className={cn(
        "relative rounded-xl overflow-hidden shadow-xl bg-neutral-100 dark:bg-neutral-800",
        className
      )}
    >
      {/* Header bar with traffic lights */}
      <div className="flex items-center gap-1.5 px-3 py-2 bg-neutral-200/80 dark:bg-neutral-700/80">
        <div className="w-2 h-2 rounded-full bg-red-400" />
        <div className="w-2 h-2 rounded-full bg-yellow-400" />
        <div className="w-2 h-2 rounded-full bg-green-400" />
      </div>

      {/* Content area */}
      <div className="relative aspect-video w-full">
        {videoSrc ? (
          <video
            autoPlay
            muted
            loop
            playsInline
            poster={imageSrc}
            className="w-full h-full object-cover"
          >
            <source src={videoSrc} type="video/mp4" />
          </video>
        ) : imageSrc ? (
          <Image
            src={imageSrc}
            alt={alt}
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-neutral-500">
            No content
          </div>
        )}
      </div>
    </div>
  );
}
