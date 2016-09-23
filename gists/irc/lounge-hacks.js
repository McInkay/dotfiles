/*******
 * Copy with "<"
 * http://jsfiddle.net/m56af0je/104/
 * ******/
 
 function addLink(event) {
	event.preventDefault();

  var selection = window.getSelection(),
      copytext = "";
        
  var texts = selection.toString().split(" ");
  copytext = texts[0] + " <" + texts[1] + "> ";
  texts.splice(0, 2);
  copytext += texts.join(" ");

	if (event.clipboardData) {
		event.clipboardData.setData('Text', copytext);
	}
}

document.addEventListener('copy', addLink);
