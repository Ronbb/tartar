import React, { FC } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";

export interface CodePreviewProps {
  language?: string;
  value?: string;
}

const CodePreview: FC<CodePreviewProps> = (props: CodePreviewProps) => {
  console.log(1, props);

  return (
    <div className="code-preview">
      <SyntaxHighlighter language={props.language} style={docco} >
        {props.value}
      </SyntaxHighlighter>
    </div>
  );
};

export default CodePreview;
