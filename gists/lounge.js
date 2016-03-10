
 /******
  * Text area
  * ******/

// This should allow enter to send and shift-enter to do newline
$('#mytextarea').keypress(function(e){
  if(e.keyCode == 13 && !e.shiftKey) {
   e.preventDefault();
   this.form.submit();
  }
});


/* Some CSS

#form {
  height: 96px; // This will probably have to expand based on the number of lines
  z-index: 1;
}

#submit {
  height: 100%;
}

#input {
  rows: 1;
  padding-left: 92px;
  resize: none;
  padding-top: 7px;
  padding-bottom: 7px;
  height: 200%;
}
*/

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
