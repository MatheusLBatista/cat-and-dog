import './style.css';

const select = document.querySelector<HTMLSelectElement>('#select')
const image = document.querySelector<HTMLImageElement>('#image')
const button = document.querySelector<HTMLButtonElement>('#btn')

button?.addEventListener('click', async() => {
  if (!image || !select) return;

  if(select.value === 'cat') {
    const response = await fetch('https://api.thecatapi.com/v1/images/search');
    const data = await response.json();
    image.src = data[0].url;
  } 
  else if(select.value === 'dog'){
    const response = await fetch ('https://api.thedogapi.com/v1/images/search');
    const data = await response.json();
    image.src = data[0].url;
  }
})

