"use client";

import { Transition, Popover } from "@headlessui/react";
import { meta } from "/config";
import { CodeBracketIcon, RectangleStackIcon, EnvelopeOpenIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export default function NavPopover(props) {
 return (
  <Popover {...props}>
   <>
    <Popover.Button className="group relative hidden rounded-lg p-1 text-gray-700 transition-all duration-200 hover:bg-black/10 hover:text-gray-800 ui-open:bg-black/10 ui-open:text-gray-800 motion-reduce:transition-none dark:text-neutral-400 dark:hover:bg-white/10 dark:hover:text-gray-200 dark:ui-open:bg-white/10 dark:ui-open:text-gray-200 sm:px-3 sm:py-2 md:flex md:items-center">
     <span>More</span>
     <ChevronRightIcon className="ml-1 h-4 w-4 text-gray-700 duration-150 ease-in-out group-hover:rotate-90 group-hover:text-gray-800 ui-open:rotate-90 ui-open:text-gray-800 dark:text-neutral-400 dark:group-hover:text-gray-400 dark:ui-open:text-gray-200" />
    </Popover.Button>
    <Transition enter="transition ease-out duration-100 motion-reduce:transition-none" enterFrom="transform opacity-0 duration-100 scale-95 motion-reduce:transition-none" enterTo="transform opacity-100 scale-100" leave="transition ease-in duration-100 motion-reduce:transition-none" leaveFrom="transform opacity-100 scale-100" leaveTo="transform opacity-0 scale-95">
     <Popover.Panel className="absolute left-1/2 z-10 mt-3 w-screen max-w-sm -translate-x-1/2 transform rounded-lg border-[1px] border-black/[10%] bg-white px-4 opacity-100 shadow-lg backdrop-blur-xl duration-100 dark:border-neutral-800 dark:bg-[#161617] sm:px-0 md:!bg-opacity-70 ">
      <div className="relative p-3">
       <Link target="_blank" href={`https://github.com/${meta.accounts.github.username}`} className="flex items-center rounded-lg p-3 transition hover:bg-blue-400/20 dark:hover:bg-white/5">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-400/20 text-white dark:bg-white/10 dark:text-neutral-800 sm:h-12 sm:w-12">
         <CodeBracketIcon className="inline h-[24px] w-[24px] stroke-black duration-200 motion-reduce:transition-none dark:stroke-white/[70%]" />
        </div>
        <div className="ml-4">
         <p className="text-sm font-medium text-gray-900 dark:text-white">My Github profile</p>
         <p className="text-sm text-gray-500 dark:text-neutral-400">Web development, Discord Bots, and more</p>
        </div>
       </Link>
       <Link href="/blog" className="mt-1 flex items-center rounded-lg p-3 transition duration-150 ease-in-out hover:bg-blue-400/20 dark:hover:bg-white/5">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-400/20 text-white dark:bg-white/10 dark:text-neutral-800 sm:h-12 sm:w-12">
         <RectangleStackIcon className="inline h-[24px] w-[24px] stroke-black duration-200 motion-reduce:transition-none dark:stroke-white/[70%]" />
        </div>
        <div className="ml-4">
         <p className="text-sm font-medium text-gray-900 dark:text-white">Developer Blog</p>
         <p className="text-sm text-gray-500 dark:text-neutral-400">About my projects, web security and design</p>
        </div>
       </Link>
       <Link href="/contact" className="mt-1 flex items-center rounded-lg p-3 transition duration-150 ease-in-out hover:bg-blue-400/20 dark:hover:bg-white/5">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-400/20 text-white dark:bg-white/10 dark:text-neutral-800 sm:h-12 sm:w-12">
         <EnvelopeOpenIcon className="inline h-[24px] w-[24px] stroke-black duration-200 motion-reduce:transition-none dark:stroke-white/[70%]" />
        </div>
        <div className="ml-4">
         <p className="text-sm font-medium text-gray-900 dark:text-white">Contact me</p>
         <p className="text-sm text-gray-500 dark:text-neutral-400">Do you have any questions? I always answer</p>
        </div>
       </Link>
      </div>
     </Popover.Panel>
    </Transition>
   </>
  </Popover>
 );
}
