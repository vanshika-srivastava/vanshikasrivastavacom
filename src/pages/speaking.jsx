import Head from 'next/head'

import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function SpeakingSection({ children, ...props }) {
  return (
    <Section {...props}>
      <div className="space-y-16">{children}</div>
    </Section>
  )
}

function Appearance({ title, description, event, cta, href }) {
  return (
    <Card as="article">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Eyebrow decorate>{event}</Card.Eyebrow>
      <Card.Description>{description}</Card.Description>
      <Card.Cta>{cta}</Card.Cta>
    </Card>
  )
}

export default function Speaking() {
  return (
    <>
      <Head>
        <title>Speaker Sessions by Vanshika Srivastava</title>
        <meta
          name="description"
          content="I enjoy public speaking - here are some of my best presentations!"
        />
      </Head>
      <SimpleLayout
        title="Proof of Work - Speaker Sessions, conferences, panels and podcasts!"
        intro="I've spoken at multiple conferences, wrote few CFP and accepted too! I've been interviewed for multiple podcasts on youtube and enjoy twitter spaces sessions sometimes!
         - here are some of the appearances so far"
      >
        <div className="space-y-20">
          <SpeakingSection title="Conferences">
            <Appearance
              href="#"
              title=""
              description=""
              event=""
              cta=""
            />
            
          </SpeakingSection>

          <SpeakingSection title="Podcasts">

            <Appearance
              href="#"
              title=""
              description=""
              event=""
              cta=""
            />
            
          </SpeakingSection>
        </div>
      </SimpleLayout>
    </>
  )
}
