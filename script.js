//your JS code here. If required.
function removecolor () {
	var selectElement = document.getElementById('colorSelect');
	var selectedValue = selectElement.value;
	for(var i=0; i<selectElement.length; i++);{
        if (selectElement.options[i].value === selectedValue) {
          selectElement.remove(i);
          break;
        }
      }
}