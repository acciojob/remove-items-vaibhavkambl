//your JS code here. If required.
const removeColor = () => {
  const select = document.getElementById('colorSelect');
  select.remove(select.selectedIndex);
};

document.querySelector('input[type="button"]').addEventListener('click', removeColor);