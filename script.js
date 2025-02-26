// Show the login popup when the page loads
window.onload = function () {
  document.getElementById('loginPopup').style.display = 'flex';
};

// Optional: Close the popup when clicking outside the login box
document.addEventListener('click', function (event) {
  const loginPopup = document.getElementById('loginPopup');
  if (event.target === loginPopup) {
    loginPopup.style.display = 'none';
  }
});
