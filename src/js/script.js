document.addEventListener("DOMContentLoaded", function () {
    const memorySection = document.querySelector(".about_main__memory");
    const childhoodSection = document.querySelector(".about_main__childhood");
  
    function toggleSection() {
      memorySection.classList.toggle("active");
      childhoodSection.classList.toggle("active");
    }
  

    toggleSection();
  

    setInterval(toggleSection, 3000);
  });
  
  $(window).scroll(function() {
    if ($(".navbar").offset().top > 10) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
});

document.addEventListener("DOMContentLoaded", function () {
  const navLinks = [
      { text: 'Home', href: 'home.html' },
      { text: 'About', href: 'about.html' },
      { text: 'Experience', href: 'experience.html' },
      { text: 'Hobbies', href: 'hobbies.html' },
      { text: 'Contact', href: 'contact.html' },
      { text: 'Resume', href: 'images/resume.pdf', download: 'nahoms_resume.pdf' }
  ];

  const navbar = document.getElementById('dynamicNavbar');
  const ul = document.createElement('ul');
  ul.className = 'navbar__list';

  navLinks.forEach(link => {
      const li = document.createElement('li');
      const a = document.createElement('a');
      a.textContent = link.text;
      a.href = link.href;

      if (link.download) {
          a.setAttribute('download', link.download);
      }

      li.appendChild(a);
      ul.appendChild(li);
  });

  navbar.appendChild(ul);
});




//experince page slider

document.addEventListener("DOMContentLoaded", function () {
  const articles = document.querySelectorAll('.experience_main article');
  let currentIndex = 0;


  showArticle(currentIndex);

  document.getElementById('nextButton').addEventListener('click', function () {
      currentIndex = (currentIndex + 1) % articles.length;
      showArticle(currentIndex);
  });

  function showArticle(index) {
      articles.forEach((article, i) => {
          if (i === index) {
              article.style.display = 'block';
          } else {
              article.style.display = 'none';
          }
      });
  }
});


//hobbies page slider for cards

document.addEventListener("DOMContentLoaded", function () {
  const cards = document.querySelectorAll('.hobbies_main article');
  let currentIndex = 0;
  showCard(currentIndex);

  document.getElementById('nextButton').addEventListener('click', function () {
      currentIndex = (currentIndex + 1) % cards.length;
      showCard(currentIndex);
  });

  function showCard(index) {
      cards.forEach((card, i) => {
          if (i === index) {
              card.style.display = 'block';
          } else {
              card.style.display = 'none';
          }
      });
  }
});
