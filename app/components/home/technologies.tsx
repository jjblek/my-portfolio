'use client'
import React from 'react'
import Image from 'next/image'
import { motion } from 'motion/react';

interface TechnologyProps {
    technology: string;
    description?: string;
    imageSrc?: string;
    color?: string;
    invert?: boolean;
}


const Technology = ({technology, description, imageSrc, color, invert }: TechnologyProps) => {
    return (
        <motion.div className='flex gap-2 items-center sm:gap-3 w-full bg-neutral-100 hover:bg-neutral-200 dark:bg-neutral-900 dark:hover:bg-neutral-800 p-2 rounded-md hover:shadow-sm'
        whileHover={{
            scale: [null, 1.06, 1.04],
            transition: {
                duration: 0.5,
                times: [0, 0.6, 1],
                ease: ["easeInOut", "easeOut"],
            },
        }}
        transition={{
            duration: 0.3,
            ease: "easeOut",
        }}>
            
            {imageSrc ?
            <div className="rounded-md p-1 flex justify-center items-center flex-shrink-0"
                style={{
                    backgroundColor: color ? color : '#cccccc25',
                }}
            >
                <Image className={`${invert ? 'dark:invert' : 'invert-0'} h-6 w-6 sm:h-8 sm:w-8`}
                    src={imageSrc}
                    alt=''
                    width={32}
                    height={32}
                />
            </div>
            : null}
            <div className='cursor-default flex-1 min-w-0'>
            <p className='text-xs sm:text-sm whitespace-nowrap overflow-x-hidden text-ellipsis'>{technology}</p>
            <p className='text-[10px] text-zinc-600 dark:text-gray-200 whitespace-nowrap overflow-x-hidden text-ellipsis'>{description}</p>
            </div>
        </motion.div>
    )
}

const technologies = [
    {
        name: "C++",
        description: "Programming Language",
        imageSrc: "/logos/cpp-logo.png",
        color: "#00549d25"
    },
    {
        name: "Python",
        description: "Programming Language",
        imageSrc: "/logos/python-logo.png",
        color: "#ffd03f25"
    },
    {
        name: "TypeScript",
        description: "Typed JavaScript",
        imageSrc: "/logos/typescript-logo.png",
        color: "#3178c625"
    },
    {
        name: "React",
        description: "JavaScript Library",
        imageSrc: "/logos/react-logo.png",
        color: "#00bcd425"
    },
    {
        name: "NextJS",
        description: "React Framework",
        imageSrc: "/logos/nextjs-logo.png",
        invert: true
    },
    {
        name: "Tailwind",
        description: "CSS Framework",
        imageSrc: "/logos/tailwind-logo.png",
        color: "#07b6d525"
    },
    {
        name: "Git",
        description: "Version Control",
        imageSrc: "/logos/git-logo.webp",
        color: "#f1605525"
    },
    {
        name: "MySQL",
        description: "Relational Database",
        imageSrc: "/logos/mysql-logo.png",
        color: "#ce8b2c25"
    },
    {
        name: "MongoDB",
        description: "NoSQL Database",
        imageSrc: "/logos/mongodb-logo.png",
        color: "#4faa4125"
    },
]

const Technologies = () => {
    return (
        <div className='flex flex-col'>
            <div className='flex flex-col gap-4'>
            <h2 className='text-2xl font-medium tracking-tight'>
                Core technologies
            </h2>
            <p className='prose prose-neutral dark:prose-invert mb-8'>
                I'm proficient in a variety of modern technologies that enable me to develop efficient and powerful solutions. 
                Here are some of the key technologies I work with.
            </p>
            </div>
            
            <div className='grid grid-cols-3 gap-1 sm:gap-2 justify-normal'>
                {technologies.map((technology, index) => 
                    <div key={index} className='flex w-full max-w-[170px] sm:max-w-[180px] md:max-w-[200px]'>
                        <Technology technology={technology.name} description={technology.description} imageSrc={technology.imageSrc} color={technology.color} invert={technology.invert} />
                    </div>
                )}
            </div>
        </div>
    )
}

export default Technologies