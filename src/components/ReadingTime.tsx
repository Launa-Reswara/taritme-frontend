import { useMemo } from "react";
import word from "reading-time";
import Image from "./ui/image";
import { Paragraph } from "./ui/typography";

export default function ReadingTime({ content }: { content: string }) {
  const memoizedReadingTime = useMemo(() => word(content).text, [content]);

  return (
    <div className="flex items-center space-x-2 mb-2">
      <Image
        src="/images/electric-icon.svg"
        alt="electric icon"
        draggable={false}
        className="w-4 h-4"
      />
      <Paragraph className="text-xs">{memoizedReadingTime}</Paragraph>
    </div>
  );
}
