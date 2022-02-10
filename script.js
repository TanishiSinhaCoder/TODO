var default_li = document.getElementsByTagName('LI');
for(let i =0 ; i < default_li.length; i++){
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);

  default_li[i].appendChild(span);
}



function newelement() {
  var li = document.createElement("li");
  li.className = 'li';
  var inputValue = document.getElementById("myinput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.getElementById("myul").appendChild(li);
  }
  document.getElementById("myinput").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  var close = document.getElementsByClassName('close');

  for(let i = 0; i < close.length; i++) {
    close[i].onclick = function () {
      var p = this.parentElement;
      p.style.display = 'none';
    }
  }
    
  }

// On Click
var ul = document.querySelector('ul');
ul.addEventListener('click', function (event) {
  if (event.target.tagName === 'LI') {
    event.target.classList.toggle('checked');
  }
},false);

// Close
var close = document.getElementsByClassName('close');
for(let i = 0; i < close.length; i++) {
  close[i].onclick = function () {
    // alert('I worked')
    var a = this.parentElement;
    a.style.display = "none";
  }
}

