import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  TwitterIcon,
} from '@/components/SocialIcons'
import portraitImage from '@/images/portrait.jpg'

function SocialLink({ className, href, children, icon: Icon }) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export default function About() {
  return (
    <>
      <Head>
        <title>Who is Vanshika Srivastava ?</title>
        <meta
          name="description"
          content="Meet Vanshika Srivastava, a tech evangelist with a knack of finance and content creation. She is working in Web3 field and takes interest in Open Source initiatives, projects and communities."
        />
      </Head>
      <Container className="mt-16 sm:mt-32">
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
          <div className="lg:pl-20">
            <div className="max-w-xs px-2.5 lg:max-w-none">
              <Image
                src={portraitImage}
                alt=""
                sizes="(min-width: 1024px) 32rem, 20rem"
                className="aspect-square rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-400"
              />
            </div>
          </div>
          <div className="lg:order-first lg:row-span-2">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-4xl">
              Hi, I’m Vanshika! Tech Evangelist and a developer without engineering degree - mostly by choice. 
            </h1>
            <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-300">
              <p>
                I began my journey in tech around 2020. At that point of time, I didn't know about open source or
                technically anything of how I would land 'my first job in tech'. I completed my 12th grade
                in commerce and along with CS/IT as my additional subject. I was pretty darn sure that I wanted to work
                in field of finance and tech. Fintech was still in its early age and remote work was just getting its actual meaning.


              </p>
              <p>
                I loved the idea of how finance could always leverage tech - using python you could predict data, or just graph them out, etc.
                As of today,I'm glad I took a leap of faith and gave in. I started off with open source communities, contributed
                as non-tech person by helping community folks around cloud native space, writing or organising some online events. That gave me exposure to understand how
                generally open source contributions and collaborations work.
              </p>
              <p>
                In the end of 2022, I transitioned to Web3, an intersection of finance, technology and most importantly open source.
                I worked at Biconomy - which is a Full Stack Account Abstraction SDK focused around smart account implementation.
                I had my fair set of experience building usecases and demo applications, while learning more on AA, defi and web3 in general.
              </p>
              <p>
               I have worked with multiple developer first products, couple of SaaS platforms and built a healthy personal brand who
               strongly advocate around Open Source, Web3 and Developer Experience. I enjoy backend more than frontend but my super-power is
               that I can connect the dots very well when it comes to code, and explain the concepts to you like a 5 year old!
    
              </p>
            </div>
          </div>
          <div className="lg:pl-20">
            <ul role="list">
              <SocialLink href="https://twitter.com/ThisisVanshika" icon={TwitterIcon}>
                Follow on Twitter
              </SocialLink>
              <SocialLink href="https://www.linkedin.com/in/vanshika-srivastava/" icon={LinkedInIcon} className="mt-4">
                Follow on LinkedIn
              </SocialLink>
              <SocialLink href="https://github.com/vanshika-srivastava" icon={GitHubIcon} className="mt-4">
                Follow on GitHub
              </SocialLink>
              <SocialLink href="https://www.instagram.com/vanshika.codes/" icon={InstagramIcon} className="mt-4">
                Follow on Instagram
              </SocialLink>
              
              <SocialLink
                href="mailto:vanshikasrivastava.business@gmail.com"
                icon={MailIcon}
                className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
              >
                vanshikasrivastava.business@gmail.com
              </SocialLink>
            </ul>
          </div>
        </div>
      </Container>
    </>
  )
}
