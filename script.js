const incomplete = document.getElementById('incomplete');
const todo = document.getElementById('todo');
const doing = document.getElementById('doing');
const underReview = document.getElementById('underReview');
const complete = document.getElementById('complete');
const overdone = document.getElementById('overdone');

fetch('subCardTemplate.html')
  .then((response) => response.text())
  .then((html) => {
    let cardHTML = '';
    for (let i = 0; i < 12; i++) {
      cardHTML += html;
    }

    incomplete.innerHTML = cardHTML;
    todo.innerHTML = cardHTML;
    doing.innerHTML = cardHTML;
    underReview.innerHTML = cardHTML;
    complete.innerHTML = cardHTML;
    overdone.innerHTML = cardHTML;
  })
  .catch((error) => console.error('Error fetching HTML:', error));
