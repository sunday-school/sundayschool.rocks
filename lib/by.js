const by = prop => arr => {
  const output = {}

  arr.forEach(
    item => {
      const itemProp = item[prop]
      output[itemProp] = item
    })

  return output
}

export default by
