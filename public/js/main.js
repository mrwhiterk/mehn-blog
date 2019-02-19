const showBtn = document.querySelector("#showBtn")
const editContainer = document.querySelector(".edit-container")

showBtn.addEventListener('click', () => {
  console.log(showBtn.innerText);
  if (showBtn.innerText == 'EDIT') {
    showBtn.innerText = 'cancel'
    editContainer.style.visibility = 'visible';
  } else {
    showBtn.innerText = 'EDIT'
    editContainer.style.visibility = 'hidden';
  }
})