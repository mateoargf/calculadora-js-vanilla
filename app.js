let pantalla = document.querySelector('.screen');

const inicio = () => {
     if (pantalla.value === '') {
          return pantalla.value = '0'
     }
}
inicio()

pantalla.addEventListener('keydown', (e) => {
     const allowedKeys = ['Enter', 'Backspace', 'Delete', 'ArrowLeft', 'ArrowRight', '.', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9']

     if (allowedKeys.includes(e.key)) {
          if (e.key === 'Backspace') {
               pantalla.value = pantalla.value.slice(0, -1)
          }
     } else {
          e.preventDefault()
     }

})
