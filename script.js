let el = document.querySelectorAll ('.el')
let youWin = document.querySelector ('.youWin')
let restart = document.querySelector ('.restart')

let symbol = '✖'

restart.addEventListener ('click', function () {
    location.reload()
})


for (let i = 0; i < el.length; i++) {
    el[i].addEventListener ('click', function () {
        if (el[i].textContent != '') {
            return
        }
        el[i].textContent = symbol
        if (symbol == '✖') {
            symbol = '⭕'
        }
      else  if (symbol == '⭕') {
            symbol = '✖'
        }
         
        if (el[0].textContent == el[1].textContent && el[1].textContent == el[2].textContent && el[0].textContent != '' ) {
           youWin.style.display = 'flex'
           restart.style.display = 'flex'
        }

        if (el[3].textContent == el[4].textContent && el[4].textContent == el[5].textContent && el[3].textContent != '' ) {
            youWin.style.display = 'flex'
            restart.style.display = 'flex'
        }

         if (el[6].textContent == el[7].textContent && el[7].textContent == el[8].textContent && el[6].textContent != '' ) {
            youWin.style.display = 'flex'
            restart.style.display = 'flex'
        }
        
           if (el[0].textContent == el[4].textContent && el[4].textContent == el[8].textContent && el[0].textContent != '' ) {
            youWin.style.display = 'flex'
            restart.style.display = 'flex'
        }

           if (el[2].textContent == el[4].textContent && el[4].textContent == el[6].textContent && el[2].textContent != '' ) {
            youWin.style.display = 'flex'
            restart.style.display = 'flex'
        }

           if (el[0].textContent == el[3].textContent && el[3].textContent == el[6].textContent && el[0].textContent != '' ) {
            youWin.style.display = 'flex'
            restart.style.display = 'flex'
        }

           if (el[1].textContent == el[4].textContent && el[4].textContent == el[7].textContent && el[1].textContent != '' ) {
            youWin.style.display = 'flex'
            restart.style.display = 'flex'
        }

            if (el[2].textContent == el[5].textContent && el[5].textContent == el[8].textContent && el[2].textContent != '' ) {
            youWin.style.display = 'flex'
            restart.style.display = 'flex'
        }

           if (el[0].textContent != '' &&
            el[1].textContent != '' &&
            el[2].textContent != '' &&
            el[3].textContent != '' &&
            el[4].textContent != '' &&

            el[5].textContent != '' &&
            el[6].textContent != '' &&
            el[7].textContent != '' &&
            el[8].textContent != '' 
            ) {
            alert ('Nichuya')
        }

    })
}

























































