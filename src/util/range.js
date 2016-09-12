import take from 'util/take'

export default (start, end, { including, max }) => {
  const range = Array.from({
      length: end - start + 1
    }, (x, i) => i + start)
  
  if (typeof max === 'number' && typeof including === 'number') {
    return take(range, including, max)
  }

  return range
}