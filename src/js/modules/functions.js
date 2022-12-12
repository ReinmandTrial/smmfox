export function isWebp() {
   // Проверка поддержки webp
   function testWebP(callback) {
      let webP = new Image()
      webP.onload = webP.onerror = function () {
         callback(webP.height == 2)
      }
      webP.src = 'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA'
   }
   testWebP(function (support) {
      let className = support === true ? 'webp' : 'no-webp'
      document.documentElement.classList.add(className)
   })
}
export function menuInit() {
   if (document.querySelector('.icon-menu')) {
      document.addEventListener('click', function (e) {
         if (bodyLockStatus && e.target.closest('.icon-menu')) {
            bodyLockToggle()
            document.documentElement.classList.toggle('menu-open')
         }
      })
   }
}
export function menuOpen() {
   bodyLock()
   document.documentElement.classList.add('menu-open')
}
export function menuClose() {
   bodyUnlock()
   document.documentElement.classList.remove('menu-open')
}
