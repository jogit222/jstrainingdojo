
 

function changeText()    {
  greetingText.innerText = 'Hello, welcome to Javascript Dojo';
}

if (document.getElementById(greeting-text))   {
  const greetingText = document.getElementById('greeting-text');
  const greetingTextButton = document.getElementById('btn-change-text');
  greetingTextButton.addEventListener('click', changeText);
}
