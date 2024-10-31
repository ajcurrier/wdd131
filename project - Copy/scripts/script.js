// objectArray of laws

const lawobjectArray = [
  {
    title: 'Legal Requirements for Bicycle Lighting',
    content: 'In Provo, cyclists are legally required to equip their bicycles with lights after dark. According to local laws, a white front lig= ht and a red rear light or reflector must be visible at specific distances to enhance safety for both the rider and other road users.*'
  },
  {
    title: 'Riding on Sidewalks',
    content: 'While riding on sidewalks in Provo is allowed, local regulations prohibit bicycle use on sidewalks along certain busy streets, s= uch as contiguous to University Avenue in designated areas. Cyclists must yield= to pedestrians and follow posted signals when riding in these zones.*'
  },
  {
    title: 'Designated Bicycle Lanes',
    content: 'Provo has established numerous designated bike lanes throughout the city to ensure safe travel for cyclists. Noteworthy bike lan= es include the Murdock Canal Trail, Provo River Parkway, and Lakeview Parkway Trail, among others. These lanes allow cyclists to navigate the city comfortably and securely.*'
  },
  {
    title: 'Helmet Requirements',
    content: 'While Provo does not have a statewide helmet requireme= nt for cyclists of any age, wearing a helmet is highly recommended for safety. Helmets can greatly reduce the risk of serious head injuries in the event of accidents.*',
  }
  
  ];

  // run laws accordion


// Create an objectArray of menu items
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

const faqobjectArray = [
  {
    title: 'Is Provo Bicycle-Friendly?',
    content: 'Provo has earned recognition as a Silver Bicycle Friendly Community from the League of American Bicyclists. The city features numerous bike lanes and dedicated trails, making it accessible and welcoming for cyclists. Furthermore, local initiatives and organizations like BikeWalk Provo are actively working to create a safer and more pedestrian-friendly environment.*'
  },
  {
    title: 'Is Provo Bicycle Commuter-friendly?',
    content: 'For those considering cycling as a means of transportation, Provo offers various resources to support bike commuters. Designated bike-friendly employers, such as Utah Valley Hospital, provide essential facilities such as bike racks and shower services to accommodate cycling to work. Additionally, the city has made strides in enhancing bike infrastructure, which benefits all cyclists in the area.*'
  },
  {
    title: 'Securing your Bicycle',
    content: 'There are multiple strategic locations throughout Provo where cyclists can securely lock their bikes. Designated bike racks are available in various areas, including parks and commercial district locations. The Provo City Code specifies design standards for bike parking to optimize safety.*'
  },
  {
    title: 'Bicycle Theft Concerns',
    content: 'Bicycle theft has become a growing issue in Provo, with a noted increase in reported thefts. To mitigate this risk, consider investing in high-quality U-locks and ensuring that your bike is securely locked. Additionally, registering your bike increases the chances of recovery if it is stolen.*'
  },   
  {
    title: 'What options do I have for bike rentals in Provo?',
    content: 'Several local shops in Provo offer bike rentals for a variety of needs, including road bikes, mountain bikes, and electric bicycles. Popular rental locations often provide hourly, daily, and even multi-day rental options.*',
  }, 
  
  {
    title: 'What if my bike has mechanical issues while riding?',
    content: 'Provo has installed several self-service bike repair stations along popular trails. These stations typically include tools for basic bike repairs, such as tire pumps and wrenches. Check the biking map provided by the city for locations of these amenities.*',
  },
  {
    title: 'Safety Concerns for Pedal Cycling',
    content: 'Safety is a priority in Provo. Despite being a bicycle-friendly city, cyclists should remain vigilant and aware of their surroundings. In recent years, bicycle accidents have occurred, so adhering to rules and regulations is crucial for a safe cycling experience.*'
  },
    {
    title: 'Winter Security Measures',
    content: 'Stay warm and avoid getting too cold. Stay off the ice'
  }
];


// Get the menu container element
const menuContainer = document.getElementById('menu-container');
var faqContainer = document.getElementById('faqContainer');

// Loop through the menu items and generate HTML for each item
menuItems.forEach(item => {
  const menuItem = document.createElement('li');
  const link = document.createElement('a');
  link.href = item.link;
  link.textContent = item.title;
  menuItem.appendChild(link);
  menuContainer.appendChild(menuItem);
});

// function write objectArray to dom

function writeobjectArrayToDOM(objectArray, domContainer) {
  objectArray.forEach(item => {
    // create the elements
    const button = document.createElement('button');
    const panel = document.createElement('div');
    const panelContent = document.createElement('p');
    // const heading = document.createElement('h3');
    // Add classes to elements
    button.className = 'accordionPrint';
    panel.className = 'accordion-panel';
    // heading.className = 'accordion-heading';
    panelContent.className = 'accordion-content';


    // assign the parts of the objectArray to the elements
    // heading.textContent = faqItem.title;
    panelContent.textContent = item.content;
    button.textContent = item.title;
    // add the elements to the DOM
    domContainer.appendChild(button);
    button.appendChild(panel);
    panel.appendChild(panelContent);
    // panel.appendChild(heading);

    })
}
const lawsContainer = document.getElementById('lawsContainer');

// write FAQ objectArray to DOM(faqobjectArray, faqContainer)
writeobjectArrayToDOM(faqobjectArray, faqContainer);
// write law objectArray to dom
// writeobjectArrayToDOM(lawobjectArray, lawsContainer);


  // Accordion Function in FAQ page
  var accordionDiv = document.querySelector(".accordionPrint");
  
  toggleAccordion(accordionDiv, ".accordion-panel");

  // Accordion Function in Laws and Regulations page

  toggleAccordion(accordionDiv, ".accordion-panel");


  
function toggleAccordion(objectArraylist, elementandClass) {
    for (var i = 0; i < objectArraylist.length; i++) {
      objectArraylist[i].addEventListener("click", function() {
        this.classList.toggle("active");
        console.log(objectArraylist);
        // console.log(this);
        
        var panelSibling = this.querySelector(elementandClass);
        console.log(panelSibling);
        
        if (panelSibling.style.display === "block") {
          panelSibling.style.display = "none";
        } else {
          panelSibling.style.display = "block";
        }
      });
    }
  }
