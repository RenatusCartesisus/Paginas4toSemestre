// Add event listeners sets up a function that will be called whenever the specified event is delivered to the target

const text = document.querySelector('div');

text.addEventListener("click", clickOutcome);

function clickOutcome(){
    alert(`I HAVE BEEN ALERTED`)
}
