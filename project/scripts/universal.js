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
    },  {
      title: 'Safety Tips',
      link: 'safety.html'
    },
    {
      title: 'Trails',
      link: 'trails-tips.html'
    },
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