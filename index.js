// Animate products on scroll
const products = document.querySelectorAll('.product');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.style.opacity = 1;
      entry.target.style.transform = 'translateY(0)';
      entry.target.style.transition = 'all 0.8s ease-out';
    }
  });
}, { threshold: 0.2 });

products.forEach(product => observer.observe(product));

// Smooth scroll for anchor links (if not supported by CSS)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e){
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
  });
});
  // Open image in popup
  function openImage(src) {
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("modalImage");

    modal.style.display = "flex";
    modalImg.src = src;
  }

  // Close popup
  document.querySelector(".close-btn").onclick = function () {
    document.getElementById("imageModal").style.display = "none";
  };

  // Close when clicking outside image
  document.getElementById("imageModal").onclick = function (e) {
    if (e.target.id === "imageModal") {
      this.style.display = "none";

  };



document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const id = link.getAttribute('href');
    const section = document.querySelector(id);
    if (section) section.scrollIntoView({ behavior: 'smooth' });
  });
});


document.querySelectorAll('.product-card').forEach(card => {
  card.addEventListener('click', () => {
    const name = card.dataset.name;
    const desc = card.dataset.desc;
    showModal(name, desc);
  });

  card.addEventListener('mouseenter', () => {
    card.style.transform = 'scale(1.05)';
  });

  card.addEventListener('mouseleave', () => {
    card.style.transform = 'scale(1)';
  });
});


function showModal(title, description) {
  let modal = document.querySelector('.modal');

  if (!modal) {
    modal = document.createElement('div');
    modal.className = 'modal';
    modal.innerHTML = `
      <div class="modal-box">
        <span class="close">&times;</span>
        <h2></h2>
        <p></p>
        <button>Contact to Order</button>
      </div>
    `;
    document.body.appendChild(modal);
  }

  modal.querySelector('h2').textContent = title;
  modal.querySelector('p').textContent = description;
  modal.style.display = 'flex';

  modal.querySelector('.close').onclick = () => modal.style.display = 'none';
  modal.onclick = e => { if (e.target === modal) modal.style.display = 'none'; };
}
  }

  


