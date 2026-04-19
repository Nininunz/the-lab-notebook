import { generateStaticParamsFor, importPage } from 'nextra/pages'
import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { useMDXComponents as getMDXComponents } from '@/mdx-components.js'

export const generateStaticParams = generateStaticParamsFor('mdxPath')

interface RouteParams {
  mdxPath?: string[]
}

interface PageProps {
  params: Promise<RouteParams>
}

function isModuleNotFoundError(error: unknown): error is { code: string } {
  return (
    typeof error === 'object' &&
    error !== null &&
    'code' in error &&
    error.code === 'MODULE_NOT_FOUND'
  )
}

async function loadPage(mdxPath: string[]) {
  try {
    return await importPage(mdxPath)
  } catch (error) {
    if (isModuleNotFoundError(error)) {
      notFound()
    }
    throw error
  }
}

export async function generateMetadata(props: PageProps): Promise<Metadata> {
  const params = await props.params
  const { metadata } = await loadPage(params.mdxPath ?? [])
  return metadata
}

const Wrapper: React.ComponentType<any> = getMDXComponents().wrapper

export default async function Page(props: PageProps) {
  const params = await props.params
  const { default: MDXContent, toc, metadata, sourceCode } = await loadPage(params.mdxPath ?? [])
  return (
    <Wrapper toc={toc} metadata={metadata} sourceCode={sourceCode}>
      <MDXContent {...props} params={params} />
    </Wrapper>
  )
}
