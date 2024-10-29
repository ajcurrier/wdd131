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

const faqArray = [
  {
    title: 'Is Provo Bicycle-Friendly?',
    content: 'Provo has earned recognition as a Silver Bicycle Friendly Community from the League of American Bicyclists. The city features numerous bike lanes and dedicated trails, making it accessible and welcoming for cyclists. Furthermore, local initiatives and organizations like BikeWalk Provo are actively working to create a safer and more pedestrian-friendly environment.'
  },
  {
    title: 'Is Provo Bicycle Commuter-friendly?',
    content: 'For those considering cycling as a means of transportation, Provo offers various resources to support bike commuters. Designated bike-friendly employers, such as Utah Valley Hospital, provide essential facilities such as bike racks and shower services to accommodate cycling to work. Additionally, the city has made strides in enhancing bike infrastructure, which benefits all cyclists in the area.'
  },
  {
    title: 'Securing your Bicycle',
    content: 'There are multiple strategic locations throughout Provo where cyclists can securely lock their bikes. Designated bike racks are available in various areas, including parks and commercial district locations. The Provo City Code specifies design standards for bike parking to optimize safety.'
  },
  {
    title: 'Bicycle Theft Concerns',
    content: 'Bicycle theft has become a growing issue in Provo, with a noted increase in reported thefts. To mitigate this risk, consider investing in high-quality U-locks and ensuring that your bike is securely locked. Additionally, registering your bike increases the chances of recovery if it is stolen.'
  },
  {
    title: 'Security Measures',
    content: 'Stay warm and avoid getting too cold.'
  }
];
// Get the menu container element
const menuContainer = document.getElementById('menu-container');
const faqContainer = document.getElementById('faqContainer');

// Loop through the menu items and generate HTML for each item
menuItems.forEach(item => {
  const menuItem = document.createElement('li');
  const link = document.createElement('a');
  link.href = item.link;
  link.textContent = item.title;
  menuItem.appendChild(link);
  menuContainer.appendChild(menuItem);
});

faqArray.forEach(faqItem => {
  const faq = document.createElement('input');
  faq.type = 'radio';
  faq.name = 'faq';
  faq.value = faqItem.title;
  faq.textContent = faqItem.content;
  faqContainer.appendChild(faq);
  

  // const faqContent = document.createElement('p');
  // faqTitle.textContent = faqItem.title;
  // faqContent.textContent = faqItem.content;
  // faqContainer.appendChild(faqTitle);
  // faqContainer.appendChild(faqContent);
  // faqContainer.appendChild(document.createElement('hr')); // Add a horizontal rule after each FAQ item

  })