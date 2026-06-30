const tabs = document.querySelectorAll('#tabs ul li a');
const articles = document.querySelectorAll('.tabs-content article');
tabs.forEach(tab => {
  tab.addEventListener('click', e => {
    e.preventDefault();
    tabs.forEach(t=>t.classList.remove('active'));
    articles.forEach(a=>a.classList.remove('active'));
    tab.classList.add('active');
    document.querySelector(tab.getAttribute('href')).classList.add('active');
  });
});


const burger = document.querySelector('.burger');
const nav = document.querySelector('nav');
burger.addEventListener('click', () => {
  nav.classList.toggle('show');
  burger.classList.toggle('active');
});


fetch('trainers.json')
  .then(res => res.json())
  .then(data => {
    const container = document.getElementById('trainers-list');
    data.forEach(trainer => {
      const div = document.createElement('div');
      div.classList.add('trainer-item');
      div.innerHTML = `
        <img src="${trainer.photo}" alt="${trainer.name}">
        <h4>${trainer.name}</h4>
        <p>${trainer.description}</p>
        <a href="${trainer.facebook}" target="_blank">Facebook</a>
      `;
      container.appendChild(div);
    });
  })
  .catch(err => console.error(err));




document.querySelectorAll('nav ul li a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    if(target){
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});





const header = document.querySelector('header');

window.addEventListener('scroll', () => {
  if(window.scrollY > 0){
    
    header.classList.add('sticky');
  } else {
    
    header.classList.remove('sticky');
  }
});
