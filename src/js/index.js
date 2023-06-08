function loadPage() {
    const page = document.querySelector(`[x-data]`);
    const currentPage = page.getAttribute('x-data').page;
    const contentDivs = page.querySelectorAll(`[x-show]`);
  
    contentDivs.forEach(div => {
      if (div.getAttribute('x-show') === `page === '${currentPage}'`) {
        div.style.display = 'block';
      } else {
        div.style.display = 'none';
      }
    });

    window.addEventListener('DOMContentLoaded', loadPage);
  }
  