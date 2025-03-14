import { MdDownload } from "react-icons/md";

export default function DownloadResume() {
    return (
        <a href="/Justin Blechel_resume.pdf" download className="no-underline">
            <button
            className="cursor-pointer group/download relative flex items-center gap-1 px-4 py-2 bg-neutral-200 hover:bg-neutral-300 dark:bg-neutral-800 dark:hover:bg-neutral-700
            rounded-md active:shadow-inner transition-none hover:transition-all duration-300"
            >
            <MdDownload/>
            Resume
            <div
                className="absolute text-xs uppercase scale-0 rounded-md py-2 px-2 bg-neutral-300 dark:bg-neutral-700 left-2/4 mb-3 bottom-full group-hover/download:scale-100 origin-bottom transition-all duration-300 shadow-lg 
                before:content-[''] before:absolute before:top-full before:left-2/4 before:w-3 before:h-3 before:border-solid before:bg-neutral-300 before:dark:bg-neutral-700 before:rotate-45 before:-translate-y-2/4 before:-translate-x-2/4"
            >
                64KB
            </div>
            </button>
        </a>
    );
}