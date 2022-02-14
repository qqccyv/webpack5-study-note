function List(num) {
  let str = '<ul>'
  for (let index = 0; index < num; index++) {
    str += `<li>${index}</li>`

  }
  return str += '</ul>'
}

export default List