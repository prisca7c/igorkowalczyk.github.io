import { Switch as HeadlessSwitch } from "@headlessui/react";

export default function Switch({ enabled, onChange }) {
 return (
  <HeadlessSwitch
   checked={enabled}
   onChange={() => onChange()}
   className={`${enabled ? "" : ""}
   relative inline-flex h-[30px] w-[50px] shrink-0 cursor-pointer items-center  rounded-lg border-[1px] border-black/[10%] text-left text-gray-700 ring-0 transition-colors duration-200 ease-in-out hover:border-black/30 hover:text-gray-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 motion-reduce:transition-none dark:border-white/[15%] dark:text-gray-200/75  dark:hover:border-white/25 dark:hover:text-gray-200`}
  >
   <span className="sr-only">Use setting</span>
   <span
    aria-hidden="true"
    className={`${enabled ? "translate-x-[25px] bg-gray-700" : "translate-x-[5px]"}
     pointer-events-none mb-[1px] inline-block h-[20px] w-[20px] transform rounded-lg bg-gray-400 !ring-0 transition ease-in-out dark:bg-gray-200`}
   />
  </HeadlessSwitch>
 );
}
