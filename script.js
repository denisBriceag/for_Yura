let disabledNameInput = -1;
let inputToChangeValue = "";
let dateCustom = new Date();
console.log(dateCustom + 2);

let container = document.getElementById("dateTimeId");
console.log(container);

const interval = setInterval(() => {
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let options = { weekday: "long" };
  let dateCommon = new Date();
  let hour = new Date().getHours();
  let minutes = new Date().getMinutes();
  let seconds = new Date().getSeconds();
  let year = new Date().getFullYear();
  let month = monthNames[dateCommon.getMonth()];
  let day = new Intl.DateTimeFormat("en-US", options).format(dateCommon);
  let date = new Date().getDate();

  let description = date + " " + month + " " + year + ", " + day;
  let blockDescription = document.getElementById("descriptionDate");
  // blockDescription.innerHTML = description;
  let time = hour + ":" + minutes + ":" + seconds;
  let spanBlock = document.getElementById("currentDate");
  // spanBlock.innerHTML = time;

  let container = document.getElementById("dateTimeId");
}, 1000);

let alex = document.getElementById("ALexId");

const startTime = () => {
  const today = new Date();
  let h = today.getHours();
  let m = today.getMinutes();
  let s = today.getSeconds();
  let d = today.getDate();
  let mn = today.toLocaleDateString("en-US", { month: "long" });
  let y = today.getFullYear();
  let wd = today.toLocaleDateString("en-US", { weekday: "long" });
  m = checkTime(m);
  s = checkTime(s);
  document.getElementById("clock").innerHTML = `
  ${d} ${mn} ${y}, ${wd}
  <div> ${h}:${m}:${s}</div> `;

  h + ":" + m + ":" + s;
  document.getElementById("clock").className = "clock";
  setTimeout(startTime, 1000);
};

function checkTime(i) {
  if (i < 10) {
    i = "0" + i;
  } // add zero in front of numbers < 10
  return i;
}

const renamePerson = (id) => {
  let nameInput = document.getElementById(id);
  inputToChangeValue = nameInput.value;
  nameInput.disabled = false;
  nameInput.nextSibling.nextSibling.classList.remove("none");
};

const dismissRename = (id) => {
  let nameInput = document.getElementById(id);
  nameInput.value = inputToChangeValue;
  nameInput.disabled = true;
  nameInput.nextSibling.nextSibling.classList.add("none");
};

const submitRename = (id) => {
  let nameInput = document.getElementById(id);
  inputToChangeValue = "";
  nameInput.disabled = true;
  nameInput.nextSibling.nextSibling.classList.add("none");
};

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
const openModal = () => {
  modal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
const modalClose = () => {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
