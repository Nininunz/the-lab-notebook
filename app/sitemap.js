import { getPageMap } from 'nextra/page-map'

export default async function sitemap() {
  const pageMap = await getPageMap()
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'
  
  const extractRoutes = (items, parentPath = '') => {
    const routes = []
    
    for (const item of items) {
      if (item.kind === 'Folder' && item.children) {
        routes.push(...extractRoutes(item.children, `${parentPath}/${item.name}`))
      } else if (item.kind === 'MdxPage') {
        const path = parentPath + (item.route || `/${item.name}`)
        const cleanPath = path.replace(/\/index$/, '') || '/'
        
        routes.push({
          url: `${baseUrl}${cleanPath}`,
          lastModified: new Date(),
          changeFrequency: 'weekly',
          priority: cleanPath === '/' ? 1 : 0.8,
        })
      }
    }
    
    return routes
  }
  
  return extractRoutes(pageMap)
}