const button = document.getElementById('advice-btn')
const output = document.querySelector('.advice__container-output')
button.addEventListener('click', fetchAdvice)

function fetchAdvice() {
  fetch('https://api.adviceslip.com/advice')
    .then(function (response) {
      if (response.status !== 200) {
        console.log(
          'Looks like there was a problem. Status Code: ' + response.status
        )
        return
      }
      response.json().then(function (data) {
        console.log(data)
        output.innerHTML = data.slip.advice
      })
    })
    .catch(function (err) {
      console.log('Fetch Error :-S', err)
    })
}
