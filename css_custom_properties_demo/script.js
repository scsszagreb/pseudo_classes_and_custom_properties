const input = document.querySelector('input[type="range"]')

input.addEventListener('change', event => {
  document.documentElement.style.setProperty(
    '--hue-shift',
    event.target.value
  )
})
