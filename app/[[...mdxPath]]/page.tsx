import { generateStaticParamsFor, importPage } from 'nextra/pages'
import { Metadata } from 'next'
import { useMDXComponents as getMDXComponents } from '@/mdx-components.js'

export const generateStaticParams = generateStaticParamsFor('mdxPath')

interface PageProps {
  params: Promise<any>
}

export async function generateMetadata(props: PageProps): Promise<Metadata> {
  const params = await props.params
  const { metadata } = await importPage(params.mdxPath)
  return metadata
}

const Wrapper: React.ComponentType<any> = getMDXComponents().wrapper

export default async function Page(props: PageProps) {
  const params = await props.params
  const {
    default: MDXContent,
    toc,
    metadata,
    sourceCode,
  } = await importPage(params.mdxPath)
  return (
    <Wrapper toc={toc} metadata={metadata} sourceCode={sourceCode}>
      <MDXContent {...props} params={params} />
    </Wrapper>
  )
}
