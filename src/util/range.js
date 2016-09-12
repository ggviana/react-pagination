import take from 'util/take'

export default (start, end, { including, max, elasticCount }) => {
  const range = Array.from({
      length: end - start + 1
    }, (x, i) => i + start)
  
  if (typeof max === 'number' && typeof including === 'number' && range.length > max) {
    return take(range, including, max, elasticCount)
  }

  return range
}