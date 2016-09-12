import noop from 'util/noop'

export default (arg, callback = noop) => {
  return typeof callback === 'function'
    ? () => callback(arg)
    : () => noop(arg)
}