
// This should allow enter to send and shift-enter to do newline
$('#mytextarea').keypress(function(e){
  if(e.keyCode == 13 && !e.shiftKey) {
   e.preventDefault();
   this.form.submit();
  }
});
