import NTW from './numToWord.json';


export function ntw(num) {
  return NTW.reduce((prev, curr) => {
    return curr.num == num ? curr.word : prev
  }, '')
}

export function wtn(word) {
  return NTW.reduce((prev, curr) => {
    return curr.word === (word && word.toLowerCase()) ? curr.num : prev
  }, -1)
}