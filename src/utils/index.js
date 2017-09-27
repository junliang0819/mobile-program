export function copyObjProperty(obj){
  let newObj = {}
  for(let i in obj){
    newObj[i] = obj[i]
  }
  return newObj
}