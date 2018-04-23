const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');


let lastChecked;

function handleCheck(e) {
  //here we have to check if they had the shift key down
  // AND check that they are checking it
  let inBetween = false;
  if (e.shiftKey && this.checked) {
    //go ahead and do whatever we want to do
    // loop over every single Checkboxes
    checkboxes.forEach(checkbox => {
      console.log(checkbox);
      if (checkbox === this || checkbox === lastChecked) {
        inBetween = !inBetween; //flag variable
        console.log('Starting to check them inbetween!');
      }

      if (inBetween) {
        checkbox.checked = true;
      }
    });
  }

  lastChecked = this;
}

checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleCheck));
