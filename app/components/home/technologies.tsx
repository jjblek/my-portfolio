import React from 'react'
import Image from 'next/image'

interface TechnologyProps {
    technology: string;
    description?: string;
    imageSrc?: string;
    color?: string;
}

const Technology = ({technology, description, imageSrc, color }: TechnologyProps) => {
    return (
        <div className='flex gap-3 w-full bg-zinc-50 hover:bg-zinc-100 dark:bg-zinc-900 dark:hover:bg-zinc-800 p-2 rounded-md  brightness-95 hover:brightness-100 hover:shadow-sm'>
            {imageSrc ?
            <div className="rounded-md p-[2px] sm:p-1 flex justify-center items-center w-8 h-8 sm:w-10 sm:h-10"
                style={{backgroundColor: color ? color : '#eee'}}>
                <Image 
                    src={imageSrc}
                    alt=''
                    width={32}
                    height={32}
                />
            </div>
            : null}
            <div className='cursor-default'>
            <p className='text-xs sm:text-sm'>{technology}</p>
            <p className='text-[10px] text-zinc-600 dark:text-gray-200'>{description}</p>
            </div>
        </div>
    )
}

const technologies = [
    {
        name: "C++",
        description: "Programming Language",
        imageSrc: "/logos/cpp-logo.png",
        color: "#00549d35"
    },
    {
        name: "Python",
        description: "Programming Language",
        imageSrc: "/logos/python-logo.png",
        color: "#ffd03f35"
    },
    {
        name: "TypeScript",
        description: "Strongly Typed JavaScript",
        imageSrc: "/logos/typescript-logo.png",
        color: "#3178c635"
    },
    {
        name: "React",
        description: "JavaScript Library",
        imageSrc: "/logos/react-logo.png",
        color: "#00bcd435"
    },
    {
        name: "NextJS",
        description: "React Framework",
        imageSrc: "/logos/nextjs-logo.png",
        color: "#ffffff75"
    },
    {
        name: "Tailwind",
        description: "CSS Framework",
        imageSrc: "/logos/tailwind-logo.png",
        color: "#07b6d535"
    },
    {
        name: "Git",
        description: "Version Control",
        imageSrc: "/logos/git-logo.webp",
        color: "#f1605535"
    },
    {
        name: "MySQL",
        description: "Relational Database",
        imageSrc: "/logos/mysql-logo.png",
        color: "#ce8b2c35"
    },
    {
        name: "MongoDB",
        description: "Non-Relational Database",
        imageSrc: "/logos/mongodb-logo.png",
        color: "#4faa4135"
    },
]

const Technologies = () => {
    return (
        <div className='flex flex-col'>
            <div className='flex flex-col gap-2'>
            <h2 className='text-xl font-medium tracking-tight'>
                Core technologies
            </h2>
            <p className='text-sm prose prose-neutral dark:prose-invert mb-8'>
                I'm proficient in a variety of modern technologies that enable me to develop efficient and powerful solutions. 
                Here are some of the key technologies I work with.
            </p>
            </div>
            
            <div className='grid grid-cols-3 gap-2 justify-center'>
                {technologies.map((technology, index) => 
                    <div key={index} className='flex w-full max-w-[200px]'>
                        <Technology technology={technology.name} description={technology.description} imageSrc={technology.imageSrc} color={technology.color} />
                    </div>
                )}
            </div>
        </div>
    )
}

export default Technologies