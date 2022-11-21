export const getLocal = (key: string) => {
  const storedValues = localStorage.getItem(key)
  if (!storedValues) {
    return null
  } else {
    return JSON.parse(storedValues)
  }
}
