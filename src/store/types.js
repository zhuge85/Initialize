function keyMirror(obj) {
  if (obj instanceof Object) {
    var _obj = Object.assign({}, obj)
    var _keyArray = Object.keys(obj)
    _keyArray.forEach(key => (_obj[key] = key))
    return _obj
  }
}
export default keyMirror({
  SET_TOKEN: null,
  SET_USER: null,
  SET_NEWANIMATION: null
})
