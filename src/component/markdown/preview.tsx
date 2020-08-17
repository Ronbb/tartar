import React, { FC } from "react";
import ReactMarkdown from "react-markdown";
import mock from "./mock";
import { Typography } from "antd";
import { CodePreview } from "../code";

export interface MarkdownPreviewProps {
  source?: string
}

const MarkdownPreview: FC<MarkdownPreviewProps> = (
  props: MarkdownPreviewProps
) => {
  return (
    <ReactMarkdown
      source={props.source ?? mock}
      skipHtml={false}
      escapeHtml={false}
      renderers={{
        root: Typography,
        paragraph: Typography.Paragraph,
        heading: Typography.Title,
        // text: Typography.Text,
        link: Typography.Link,
        code: CodePreview
      }}
    />
  );
};

export default MarkdownPreview;
