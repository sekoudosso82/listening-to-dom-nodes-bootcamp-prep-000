

// Demonstrate Listening to Events on a DOM Node with addEventListener()

const main = document.getElementById('main');
 
main.addEventListener('click', function(event) {
  alert('I was clicked!');
});

// Demonstrate Triggering Events Listeners on DOM Nodes

const input = document.querySelector('input');
 
input.addEventListener('keydown', function(e) {
  console.log(e.key);
});

// Demonstrate Preventing the Default Behavior for DOM Nodes

const input = document.querySelector('input')
 
input.addEventListener('keydown', function(e) {
  if (e.key === "g") {
    return e.preventDefault()
  } else {
    console.log(e.key)
  }
});

// Explain the Difference Between Bubbling and Capturing Events

let divs = document.querySelectorAll('div');
 
function bubble(e) {
  
  console.log(this.firstChild.nodeValue.trim() + ' bubbled');
}

for (let i = 0; i < divs.length; i++) {
    divs[i].addEventListener('click', bubble);
  }

  divs = document.querySelectorAll('div');
 
function capture(e) {
  console.log(this.firstChild.nodeValue.trim() + ' captured');
}
 
for (let i = 0; i < divs.length; i++) {
  // set the third argument to `true`!
  divs[i].addEventListener('click', capture, true);
}

//Demonstrate Stopping Propagated Behaviors with stopPropagation()

const divs = document.querySelectorAll('div');
 
function bubble(e) {
  // stop! that! propagation!
  e.stopPropagation();
 
  console.log(this.firstChild.nodeValue.trim() + ' bubbled');
}
 
for (let i = 0; i < divs.length; i++) {
  divs[i].addEventListener('click', bubble);
}