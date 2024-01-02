import Head from 'next/head'

import { SimpleLayout } from '@/components/SimpleLayout'

export default function ThankYou() {
  return (
    <>
      <Head>
        <title>Stay in touch with my work!</title>
        <meta
          name="description"
          content="Thanks for subscribing to my newsletter."
        />
      </Head>
      <SimpleLayout
        title="Thanks for subscribing to my work! Cheers, Vanshika!"
        intro="Subscribe for my new blog posts, projects and more!"
      />
    </>
  )
}
