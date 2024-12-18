
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
    title: 'What options do I have for bike rentals in Provo?',
    content: 'Several local shops in Provo offer bike rentals for a variety of needs, including road bikes, mountain bikes, and electric bicycles. Popular rental locations often provide hourly, daily, and even multi-day rental options.',
  }, 
  
  {
    title: 'What if my bike has mechanical issues while riding?',
    content: 'Provo has installed several self-service bike repair stations along popular trails. These stations typically include tools for basic bike repairs, such as tire pumps and wrenches. Check the biking map provided by the city for locations of these amenities.',
  },
  {
    title: 'Winter Security Measures',
    content: 'Stay warm and avoid getting too cold. Stay off the ice'
  }
];
// Get the menu container element

const faqContainer = document.getElementById('faqContainer');

// Loop through the menu items and generate HTML for each item


faqArray.forEach(faqItem => {
  // create the elements
  const button = document.createElement('button');
  const panel = document.createElement('div');
  const panelContent = document.createElement('p');
  // const heading = document.createElement('h3');
  // Add classes to elements
  button.className = 'accordion';
  panel.className = 'accordion-panel';
  // heading.className = 'accordion-heading';
  panelContent.className = 'accordion-content';


  // assign the parts of the array to the elements
  // heading.textContent = faqItem.title;
  panelContent.textContent = faqItem.content;
  button.textContent = faqItem.title;
  // add the elements to the DOM
  faqContainer.appendChild(button);
  button.appendChild(panel);
  panel.appendChild(panelContent);
  // panel.appendChild(heading);

  })


  // Accordion Function
  // var accordionDiv = document.getElementsByClassName("accordion");
  var accordionDiv = document.querySelectorAll('.accordion');
  
function toggleAccordion(div) {
  for (var i = 0; i < div.length; i++) {
    div[i].addEventListener("click", function() {
      this.classList.toggle("active");
      console.log(div);
      // console.log(this);
      
      var panelSibling = this.querySelector(".accordion-panel");
      console.log(panelSibling);
      
      if (panelSibling.style.display === "block") {
        panelSibling.style.display = "none";
      } else {
        panelSibling.style.display = "block";
      }
    });
  }
}

toggleAccordion(accordionDiv);