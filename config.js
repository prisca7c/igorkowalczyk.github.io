import Link from "next/link";

export const config = {
 title: "Igor Kowalczyk",
 author: "Igor Kowalczyk",
 description: "I'm a full-stack developer based in Poland. I have a passion for building web applications and solving problems",
 header: {
  title: "Igor Kowalczyk",
  subtitle: "Full-stack developer",
  description: "I'm a full-stack developer based in Poland. I have a passion for building web applications and solving problems.",
  code: {
   default: {
    user: "igorkowalczyk",
   },
   lines: [
    {
     command: "contact --discord",
     user: "igorkowalczyk",
     response: (
      <>
       + <span className="font-semibold">User:</span>{" "}
       <Link href="https://discord.com/users/544164729354977282">
        <a target="_blank">Majonez.exe#2495</a>
       </Link>
       <br />+ <span className="font-semibold">Link:</span>{" "}
       <Link href="https://discord.gg/uxtSMtd2xZ">
        <a target="_blank">https://discord.gg/uxtSMtd2xZ</a>
       </Link>
      </>
     ),
    },
   ],
  },
 },
 url: "https://igorkowalczyk.vercel.app",
 theme_color: "#5485f2",
 type: "website",
 social: {
  image: "/banner.png",
  github: {
   username: "igorkowalczyk",
   repo: "igorkowalczyk.github.io",
  },
 },
 nav: {
  left: [
   {
    href: "/",
    title: "Home",
   },
   {
    href: "/work/",
    title: "Projects",
   },
  ],
  right: [
   {
    href: "/blog/",
    title: "Blog",
    target: "_blank",
   },
   {
    href: "/discord/",
    title: "Discord",
    target: "_blank",
   },
  ],
 },
 footer: {
  title: `© ${new Date().getFullYear()} Igor Kowalczyk`,
  links: {
   left: [
    {
     href: "/",
     title: "Home",
     target: "_self",
    },
    {
     href: "/about",
     title: "About",
     target: "_self",
    },
    {
     href: "/work",
     title: "Projects",
     target: "_self",
    },
   ],
   center: [
    {
     href: "/blog",
     title: "Blog",
     target: "_blank",
    },
    {
     href: "/discord",
     title: "Discord",
     target: "_blank",
    },
    {
     href: "/github",
     title: "GitHub",
     target: "_blank",
    },
   ],
   right: [
    {
     href: "/#contact",
     title: "Contact",
     target: "_self",
    },
    {
     href: "https://twitter.com/@majonezexe",
     title: "Twitter",
     target: "_blank",
    },
    {
     href: "https://stackoverflow.com/users/11860129/majonez-exe",
     title: "StackOverflow",
     target: "_blank",
    },
   ],
  },
 },
};