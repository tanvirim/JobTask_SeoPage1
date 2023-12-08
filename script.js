function subCardDisplay() {
  const incomplete = document.getElementById('incomplete');
  const todo = document.getElementById('todo');
  const doing = document.getElementById('doing');
  const underReview = document.getElementById('underReview');
  const complete = document.getElementById('complete');
  const overdone = document.getElementById('overdone');

  let cardHTML = '';

  for (let i = 0; i < 12; i++) {
    cardHTML += `
  <div class="subCard">
  <!-- section 1 -->
  <div class="section1">
    <div class="part1">
      <img src="./assets/dp1.jpg" alt="image" class="dp" />
      <p>Client Name</p>
    </div>
    <div class="part2">
      <img src="./assets/dp2.jpg" alt="image" class="dp" />
      <p>Tanvir MItul</p>
    </div>
  </div>

  <!-- section 2 -->
  <div class="section2">
    <div class="part1">
      <i class="fa-solid fa-layer-group"></i>
      <p>Lorem ipsum dolor sit amet ...</p>
    </div>

    <div class="part2">
      <i class="fa-solid fa-clipboard-list"></i>
      <p>1/2</p>
    </div>
  </div>

  <!-- section 3 -->
  <div class="section3">
    <div class="part1">
      <img src="./assets/dp4.jpg" alt="image" class="dp" />
      <img src="./assets/dp3.jpg" alt="image" class="dp" />
      <p>12+</p>
    </div>
    <div class="part2">
      <i class="fa-regular fa-comments"></i>
      <p>15</p>
    </div>
    <div class="part3">
      <i class="fa fa-upload uploadButton" aria-hidden="true"></i>
      <p>25</p>
    </div>

    <div class="part4">
      <i class="fa-regular fa-calendar-days"></i>
      <p class="date"></p>
    </div>
  </div>
</div>

  `;
  }

  incomplete.innerHTML = cardHTML;
  todo.innerHTML = cardHTML;
  doing.innerHTML = cardHTML;
  underReview.innerHTML = cardHTML;
  complete.innerHTML = cardHTML;
  overdone.innerHTML = cardHTML;
}

function showDate() {
  const date = new Date();

  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = date.getFullYear();

  const formattedDate = `${day}-${month}-${year}`;

  const dateElements = document.querySelectorAll('.date');

  dateElements.forEach((element) => {
    element.innerHTML = formattedDate;
  });
}

function uploadButton() {
  const uploadButtons = document.querySelectorAll('.uploadButton');

  uploadButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const modal = document.getElementById('myModal');
      modal.style.display = 'block';
    });
  });
}

//modal functionality
function displayModal() {
  function openModal() {
    const modal = document.getElementById('myModal');
    modal.style.display = 'block';
  }

  function closeModal() {
    const modal = document.getElementById('myModal');
    modal.style.display = 'none';
  }

  document.addEventListener('DOMContentLoaded', function () {
    const uploadButton = document.querySelector('.uploadButton');
    uploadButton.addEventListener('click', openModal);
  });

  document.addEventListener('DOMContentLoaded', function () {
    const closeBtn = document.querySelector('.close');
    closeBtn.addEventListener('click', closeModal);
  });

  // Close the modal when clicking outside the modal content
  window.addEventListener('click', function (event) {
    const modal = document.getElementById('myModal');
    if (event.target === modal) {
      modal.style.display = 'none';
    }
  });
}

subCardDisplay();
showDate();
uploadButton();
displayModal();
