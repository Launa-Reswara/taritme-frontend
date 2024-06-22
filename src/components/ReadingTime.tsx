import { useMemo } from "react";
import { readingTime } from "reading-time-estimator";
import Image from "./ui/image";
import { Paragraph } from "./ui/typography";

export default function ReadingTime({ content }: { content: string }) {
  const memoizedReadingTime = useMemo(
    () => readingTime(content).text,
    [content]
  );

  return (
    <div className="flex items-center space-x-2 mb-2">
      <Image
        src="/images/electric-icon.svg"
        alt="electric icon"
        draggable={false}
        className="w-6 h-6"
      />
      <Paragraph className="text-sm line-clamp-1">
        {memoizedReadingTime}
      </Paragraph>
    </div>
  );
}
