/**********************
** whoisjohngalm.com **
**       2013        **
**********************/

!function(num, rate) {
  var colors = [
    'fff', 
    'deedee', 
    '426f42', 
    '666', 
    'ffff00', 
    '00ffff', 
    'ff1493', 
    'adff2f', 
    'ff0000'],
  colsCount = colors.length,
  width = window.innerWidth, 
  height = window.innerHeight, 
  body = document.body,
  
  xpos, ypos, i, randcol, span, qmark;
  
  // let's start the show
  setInterval(function () {
    
    // if we've got children hanging around, get 'em out of there
    while(body.hasChildNodes()) {
      body.removeChild(body.lastChild);
    }
    
    for(i = 0; i < num; i++) {
      // generate random x, y positions relative to the width/height
      xpos = Math.floor((Math.random() * width)) + 'px';
      ypos = Math.floor((Math.random() * width)) + 'px';
      
      // create a question mark within a span
      span = document.createElement('span');    
      qmark = document.createTextNode('?');
      
      // append the qmart onto the span
      span.appendChild(qmark);
            
      // set the styles for the qmark
      randcol = colors[Math.floor((Math.random() * colsCount))];
      span.style.position = 'absolute';
      span.style.top = ypos;
      span.style.left = xpos;
      span.style.color = '#' + randcol;
      body.appendChild(span);
    }
  }, rate);

}(25, 1000);