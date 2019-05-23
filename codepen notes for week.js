const btnID = document.getElementById('custom-btn');

console.log(`getElement: `,btnID);

const tagNameTest = document.getElementsByTagName('p');

console.log(tagNameTest);

console.log(tagNameTest[0]);

const btnQuery = document.querySelector('.lambda-button');

console.log(`query: `,btnQuery);

const pQueryAll = document.querySelectorAll('p')

console.log(pQueryAll);

const classNameTest = document.getElementsByClassName('content-area');

console.log(classNameTest);

const btnListener = document.getElementById("custom-btn");
btnListener.addEventListener('click', function(){
  console.log(`button was clicked`)
});
btnListener.addEventListener('dblclick', event => {
  console.log("button was double clicked")
});

const firstName = document.querySelector('.first-name');
firstName.addEventListener('keydown', event = > {
  console.log("First name entered")
});
const formButton = document.querySelector('.container');
formButton.addEventListener('click', event => {
  console.log(`This is my target: ${event.target}`);

  console.log(`This is my current target: ${event.currentTarget}`);
    event.stopPropagation();
});

const formSubmit = document.querySelector('.form-submit');
formSubmit.addEventListener('click', event => {
  event.preventDefault();
  console.log('form submit was pressed');
})

class Panel {
  constructor(panel){
    this.panelButtons = panel.querySelector('.panel-buttons');
    this.panelBtnOpen = panel.querySelector('.panel-btn-open');
    this.panelBtnClose = panel.querySelector('.panel-btn-close');
    this.panelContent = panel.querySelector('.panel-content');
    this.panelBar = panel.querySelector('.panel-bar');
    this.panelButtons.addEventListener('click', () => this.togglePanel());
    this.panelBar.addEventListener('click', () => this.changeBar());
  }
  togglePanel(){
    this.panelBtnOpen.classList.toggle('hide-btn');
    this.panelBtnClose.classList.toggle('hide-btn');
    this.panelContent.classList.toggle('toggle-on');
    event.stopPropagation();
  }
  changeBar(){
    this.panelBar.style.backgroundColor = "dodgerblue";
  }
}

// Step 1 selected the panels
const panels = document.querySelectorALl('.panel')

const panels = document.getElementsByClassName('panel')
console.log(panels)

// Step 2 iterate over the nodelist to create new components using the Panel class
const panelsArray = Array.from(panels)
console.log(panelsArray);

panelsArray.map(function(panel){
  console.log(panel)
  return new Panel(panel)
});

// Step 3: Create TabLink class definition and pass in the link reference to the DOM element
class TabLink {
    constructor(link){
      // Step 4: Match the data-set values between our link and the content
      // .content[data-tab="1"]
      this.tabContent = document.querySelector(`.content[data-tab="${link.dataset.tab}"]`)
      // console.log('inside TabLink class: ', this.tabContent)
      
      // Step 5: Create a new content object from our matched data-set content tab
      this.tabContent = new Content(this.tabContent);
      
      // Step 8: Add event listener for our link and pass in the implicit of the the 'this' keyword using an arrow function
      link.addEventListener('click', () => this.linkClick());
    }
    // Step 10: Have the tabContent toggle off and on based on our Content class' method
    linkClick() {
      this.tabContent.toggleContent();
    }
  }
  
  // Step 6: Create Content class definition and pass in the tabContent reference to the DOM element
  class Content {
    constructor(tabContent){
      // console.log('inside Content class',tabContent);
      // Step 7: Properly setting up the 'this' keyword for the Content class using our tabContent
      this.tabElement = tabContent;
    }
    // Step 9: Create a method that can be called to toggle our tabElement off and on
    toggleContent(){
      this.tabElement.classList.toggle('change')
    }
  }
  
  // Step 1: Get all the elements from the DOM into a Nodelist
  const links = document.querySelectorAll('.link');
  // Step 2: Iterate over each element from our Nodelist and send them to the class TabLink.
  links.forEach( function(link){
    // console.log('Link: ',link.dataset.tab);
    return new TabLink(link);
  })