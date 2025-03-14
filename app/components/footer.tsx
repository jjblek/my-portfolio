"use client";

import React from "react";
import {
  FaGithub,
  FaRss,
  FaLinkedinIn,
} from "react-icons/fa6";
import { TbMailFilled } from "react-icons/tb";
import { metaData, socialLinks } from "app/config";

const YEAR = new Date().getFullYear();

function SocialLink({ href, icon: Icon }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="transition-opacity duration-300 hover:opacity-80">
      <Icon />
    </a>
  );
}

function SocialLinks() {
  return (
    <div className="flex text-lg gap-3.5 float-right">
      <SocialLink href={socialLinks.github} icon={FaGithub} />
      <SocialLink href={socialLinks.linkedin} icon={FaLinkedinIn} />
      <SocialLink href={socialLinks.email} icon={TbMailFilled} />
      <a href="/rss.xml" target="_self" className="transition-opacity duration-300 hover:opacity-80">
        <FaRss />
      </a>
    </div>
  );
}

export default function Footer() {
  return (
    <small className="flex flex-grow items-end justify-between mt-10 pb-10 lg:pb-20 text-[#1C1C1C] dark:text-[#D4D4D4]">
      <div className="flex gap-1 transition-opacity duration-300 hover:opacity-80">
        <time>© {YEAR}</time>{" "}
        <p
        >
          {metaData.name}
        </p>
      </div>
      <style jsx>{`
        @media screen and (max-width: 480px) {
          article {
            padding-top: 2rem;
            padding-bottom: 4rem;
          }
        }
      `}</style>
      <SocialLinks />
    </small>
  );
}
