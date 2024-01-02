import Head from 'next/head'

import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function ToolsSection({ children, ...props }) {
  return (
    <Section {...props}>
      <ul role="list" className="space-y-16">
        {children}
      </ul>
    </Section>
  )
}

function Tool({ title, href, children }) {
  return (
    <Card as="li">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Description>{children}</Card.Description>
    </Card>
  )
}

export default function Setup() {
  return (
    <>
      <Head>
        <title>Gadgets</title>
        <meta
          name="description"
          content="Software I use, gadgets I love, and other things I recommend."
        />
      </Head>
      <SimpleLayout
        title="Get to know my entire work setup! "
        intro="I recently have setup my home office, you might have seen some of the pictures clicked by me on twitter. I'm adding here all the links to products I own, and the tools I usually would like to suggest."
      >
        <div className="space-y-20">
          <ToolsSection title="Workstation">
            <Tool title="13” MacBook M2 Air, 8 GB RAM with 256 GB SSD (2022)">
            
            </Tool>
            
          </ToolsSection>

          <ToolsSection title="Development tools">
            <Tool title="VSCode">
              
            </Tool>
            
          </ToolsSection>

          <ToolsSection title="Design">
            <Tool title="Figma">
              
            </Tool>
          </ToolsSection>
          <ToolsSection title="Productivity">
            
            
            <Tool title="Calendly">
              
            </Tool>
            
          </ToolsSection>
        </div>
      </SimpleLayout>
    </>
  )
}
