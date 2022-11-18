console.log(window);
window.alert('Boas Vindas!');

document.title = "manipulando dom pt1";
console.log(document.title);

const sec = document.createElement('section')
document.body.appendChild(sec)

const  h = document.createElement('h1')
h.innerHTML = "lorem"
sec.appendChild(h)

const  p1 = document.createElement('p')
p1.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ligula eu lectus lobortis condimentum. Aliquam nonummy auctor massa."
sec.appendChild(p1)

const art = document.createElement('article')
document.body.appendChild(art)

const  h2 = document.createElement('h1')
h2.innerHTML = "lorem"
art.appendChild(h2)

const  p2 = document.createElement('p')
p2.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ligula eu lectus lobortis condimentum. Aliquam nonummy auctor massa."
art.appendChild(p2)