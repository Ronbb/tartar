import React, { FC } from "react";
import MarkdownPreview from "./preview";

export interface MarkdownProps {}

const Markdown: FC<MarkdownProps> = (props: MarkdownProps) => {
  return (
    <div>
      <MarkdownPreview />
    </div>
  );
};

export default Markdown;
