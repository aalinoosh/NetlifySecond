/* eslint-disable no-undef */
class WebP {
  constructor() {}
  cb(isSupportA, _cb) {
    if (window.chrome || (window.opera && window.localStorage)) {
      window.localStorage.setItem("webpsupport", isSupportA)
    }
    _cb(isSupportA)
  }
  isSupported(cb) {
    if (!cb) return
    if (!window.chrome && !window.opera) return this.cb(false, cb)
    if (
      window.localStorage &&
      window.localStorage.getItem("webpsupport") !== null
    ) {
      var val = window.localStorage.getItem("webpsupport")
      this.cb(val === "true", cb)
      return
    }
    var img = new Image()
    img.src =
      "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA"
    let that = this
    img.onload = img.onerror = function() {
      that.cb(img.width === 2 && img.height === 2, cb)
    }
  }
  run() {
    this.isSupported(function(isSupport) {
      if (isSupport) this.cb()
    })
  }
}

export default WebP
