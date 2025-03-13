import React from "react";
import Link from "next/link";
import Image from "next/image";
import { MDXRemote } from "next-mdx-remote/rsc";
import { highlight } from "sugar-high";
import { CaptionComponent } from "./caption";
import { YouTubeComponent } from "./youtube";
import { ImageGrid } from "./image-grid";
import rehypeKatex from "rehype-katex";
import remarkMath from "remark-math";
import "katex/dist/katex.min.css";
import { MdCode } from "react-icons/md";
import { MdPlayArrow } from "react-icons/md";

function CustomLink(props) {
  let href = props.href;
  if (href.startsWith("/")) {
    return (
      <Link href={href} {...props}>
        {props.children}
      </Link>
    );
  }
  if (href.startsWith("#")) {
    return <a {...props} />;
  }
  return <a target="_blank" rel="noopener noreferrer" {...props} />;
}

function RoundedImage(props) {
  return <Image alt={props.alt} className="rounded-lg" {...props} />;
}

function Code({ children, ...props }) {
  // Check if the code is inline
  if (typeof children === "string" && !/\n/.test(children)) {
    return (
      <code className="bg-[#F7F7F7] dark:bg-[#181818] px-1 rounded">
        {children.replace(/^`|`$/g, "")}
      </code>
    );
  }

  // Remove backticks from block-level code before highlighting
  let cleanedCode = typeof children === "string" ? children.replace(/^```[\w]*\n?|```$/g, "") : children;
  let codeHTML = highlight(cleanedCode);

  return <code dangerouslySetInnerHTML={{ __html: codeHTML }} {...props} />;
}

function Table({ data }) {
  let headers = data.headers.map((header, index) => (
    <th key={index}>{header}</th>
  ));
  let rows = data.rows.map((row, index) => (
    <tr key={index}>
      {row.map((cell, cellIndex) => (
        <td key={cellIndex}>{cell}</td>
      ))}
    </tr>
  ));
  return (
    <table>
      <thead>
        <tr className="text-left">{headers}</tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
}

function Strikethrough(props) {
  return <del {...props} />;
}

function Callout(props) {
  return (
    <div className="px-4 py-3 bg-[#F7F7F7] dark:bg-[#181818] rounded p-1 text-sm flex items-center text-neutral-900 dark:text-neutral-100 mb-8">
      <div className="flex items-center w-4 mr-4">{props.emoji}</div>
      <div className="w-full callout leading-relaxed">{props.children}</div>
    </div>
  );
}

function slugify(str) {
  return str
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-")
    .replace(/&/g, "-and-")
    .replace(/[^\w\-]+/g, "")
    .replace(/\-\-+/g, "-");
}

function createHeading(level) {
  const Heading = ({ children }) => {
    let slug = slugify(children);
    return React.createElement(
      `h${level}`,
      { id: slug },
      [
        React.createElement("a", {
          href: `#${slug}`,
          key: `link-${slug}`,
          className: "anchor",
        }),
      ],
      children
    );
  };
  Heading.displayName = `Heading${level}`;
  return Heading;
}

// 🔹 Source Code Button Component
function SourceCodeButton({ sourceUrl, demoUrl }) {
  return (
    <div className="flex gap-4">
    <a
      href={sourceUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2 text-sm font-medium rounded-md transition no-underline
      bg-gray-200 dark:bg-neutral-800 text-gray-900 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-700"
    >
      <button className="flex items-center justify-center gap-2 px-4 py-2">
      <MdCode className="w-5 h-5" />
      Source
      </button>
    </a>
    {demoUrl ? 
      <a
        href={demoUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center text-sm font-medium rounded-md transition 
        bg-blue-500 text-white hover:bg-blue-600 no-underline"
      >
        <button className="flex items-center justify-center gap-1 pl-3 pr-4 py-2">
        <MdPlayArrow className="w-5 h-5" />
          Demo
        </button>
      </a> 
    : null}
  </div>
  );
}



let components = {
  h1: createHeading(1),
  h2: createHeading(2),
  h3: createHeading(3),
  h4: createHeading(4),
  h5: createHeading(5),
  h6: createHeading(6),
  Image: RoundedImage,
  ImageGrid,
  a: CustomLink,
  Caption: CaptionComponent,
  YouTube: YouTubeComponent,
  code: Code,
  Table,
  del: Strikethrough,
  Callout,
  SourceCodeButton, // 🔹 Register the Source Code Button

};

export function CustomMDX(props) {
  return (
    <MDXRemote
      {...props}
      components={{ ...components, ...(props.components || {}) }}
      options={{
        mdxOptions: {
          remarkPlugins: [remarkMath],
          rehypePlugins: [rehypeKatex],
        },
      }}
    />
  );
}
