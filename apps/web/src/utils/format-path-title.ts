export const formatPathTitle = (path: string) => {
  const pathWithoutSlash = path.replace(/\//g, '')

  const pathWithSpaces = pathWithoutSlash.replace(/-/g, ' ')

  return pathWithSpaces
}
