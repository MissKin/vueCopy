var vueCopy = require('./vue-copy.js')

global.copy = vueCopy

window.Vue && global.Vue.use(vueCopy)
