export default (array, including, max) => {
  const half = Math.floor(max / 2)
    
  const start = including - half > 0 ? including - half : 0
  const end   = start + max

  return array.slice(start, end)
}