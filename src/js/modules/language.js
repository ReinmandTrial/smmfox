export function languageSwitcher() {
   const langList = document.querySelectorAll('.header__lang-item')
   langList.forEach((item) => {
      item.addEventListener('click', (el) => {
         if (!el.target.classList.contains('_active')) {
            resetLang()
            item.classList.add('_active')
         }
      })
   })
   function resetLang() {
      langList.forEach((item) => {
         item.classList.remove('_active')
      })
   }
}
