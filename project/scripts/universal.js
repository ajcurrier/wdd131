// Menu

const menuContainer = document.getElementById('menu-container');

// Create an array of menu items
const menuItems = [
    {
      title: 'Home',
      link: 'index.html'
    },
    {
      title: 'Laws',
      link: 'laws-regulations.html'
    },
    {
      title: 'FAQs',
      link: 'faq.html'
     }, 
    // {
    //   title: 'Safety Tips',
    //   link: 'safety.html'
    // },
    // {
    //   title: 'Trails',
    //   link: 'trails-tips.html'
    // },
    {
      title: 'Sources',
      link: 'sources.html'
    }
  ];
  

menuItems.forEach(item => {
    const menuItem = document.createElement('li');
    const link = document.createElement('a');
    link.href = item.link;
    link.textContent = item.title;
    menuItem.appendChild(link);
    menuContainer.appendChild(menuItem);
  });

//   Footer

const footerContainer = document.getElementById('footer-box');

const footerLinks = [
    {
      title: 'Sources',
      link: 'sources.html'
    },
    {
      title: 'Contact Us',
      link: 'mailto:acurrier@byu.edu'
    },
    
  ];

  footerLinks.forEach(link => {
    const linkItem = document.createElement('a');
    linkItem.href = link.link;
    linkItem.textContent = link.title;
    linkItem.className = 'footer-link';
    footerContainer.appendChild(linkItem);
    footerContainer.appendChild(document.createElement('br'));
  });

const footerNotes = document.createElement('p');
  footerNotes.innerHTML = '&copy; <span id="currentYear"></span> Ashley Currier, Utah'
  footerContainer.appendChild(footerNotes);


  