
 

function changeText()    {
  greeting-text.innerText = 'Hello, welcome to Javascript Dojo'
}

if (greeting-text)   {
  const greeting-text = document.getElementById('greeting-text')
  const greeting-text-button = document.getElementById('btn-change-text')
  greeting-text-button.addEventListener('click', changeText)
