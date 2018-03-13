function makeQuery(obj) {
  let result = '?'

  for (let key in obj) {
    let str = obj[key] && obj[key].replace(/\s/g, '+')
    if (str) {
      result += `${key}=${str}&`
    }
  }

  return result.slice(0, -1)
}

module.exports = {
  makeQuery
}