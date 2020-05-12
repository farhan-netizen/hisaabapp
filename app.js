
var x;
var add = 0;

function Given() {
    x = document.getElementById("give").value
    x = parseInt(x)
  
    if (x > 0) {
        add += x;   
    console.log(typeof(add));
    
    var prev = parseInt(localStorage.getItem("key1"));
    window.localStorage.setItem("key1", add + prev);
    window.localStorage.setItem("myhistory", window.localStorage.getItem("myhistory") + " Given: Rs " + x + " ");
        document.getElementById("btngive").disabled = true;
        document.getElementById("total").disabled = true;

    // var myData = window.localStorage.getItem("data");
    // myData.push(x);
    // window.localStorage.setItem("data", myData);    
    }    
}

var y;
var sub = 0;
function Taken() {
    y = document.getElementById("take").value
    y = parseInt(y)
    if (y>0) {
        sub += y;
        var prev = parseInt(localStorage.getItem("key2"));
        window.localStorage.setItem("key2", sub + prev);
        window.localStorage.setItem("myhistory", window.localStorage.getItem("myhistory") + " Taken: Rs " + y + " ");
        document.getElementById("btntake").disabled = true;
        document.getElementById("total").disabled = true;

    }
}

var msg1
function Message1() {
    document.getElementById("total").disabled = false;

    msg1 = document.getElementById("msg1").value;
    console.log(msg1);   
    d = new Date()
    var month_names =["Jan","Feb","Mar",
    "Apr","May","Jun",
    "Jul","Aug","Sep",
    "Oct","Nov","Dec"];
    window.localStorage.setItem("myhistory", window.localStorage.getItem("myhistory") + ": " + msg1 + " on " + d.getDate() + "/" + month_names[d.getMonth()]+ "/" + d.getFullYear() + "   ");
}

var msg2
function Message2() {
    document.getElementById("total").disabled = false;

    var msg2 = document.getElementById("msg2").value
    console.log(msg2); 
    d = new Date()
    var month_names =["Jan","Feb","Mar",
    "Apr","May","Jun",
    "Jul","Aug","Sep",
    "Oct","Nov","Dec"];
    window.localStorage.setItem("myhistory", window.localStorage.getItem("myhistory") + ": " + msg2 + " on " + d.getDate() + "/" + month_names[d.getMonth()]+ "/" + d.getFullYear() + "   ");
}

var total
function Total() {
    // var prev = parseInt(localStorage.getItem("key1"));
    // window.localStorage.setItem("key1", add + prev);
        
    total = (add - sub) + " lena hai" 
    document.getElementById("total1").innerHTML = total;
    document.getElementById("history").disabled = false;
    document.getElementById("total").addEventListener('click', calculate)
}

function history() {
    document.getElementById("history").disabled = true;
    var store = window.localStorage.getItem("myhistory")
    console.log(store);
    
    // const amount = document.createElement("li")
    // amount.id = 0
    // list1.appendChild(amount)
    // const amountText = document.createTextNode(store)
    // amount.appendChild(amountText) 
    document.getElementById("hist").innerHTML = "<div>" + store + "</div>" 
    
}

function refresh() {
    location.reload()
}


window.onload = (event) => {
    console.log('page is fully loaded');

    var input1 = document.getElementById("give");
    input1.addEventListener('change', updateValue);
    var input2 = document.getElementById("take");
    input2.addEventListener('change', updateValue);
    
  };

  function updateValue(e) {
    document.getElementById("btngive").disabled = false;
    document.getElementById("btntake").disabled = false;

  }

  function dlthist() {
      var userinput = prompt("sure? if yes! type Y")
      if (userinput === "Y") {
          localStorage.clear()
          document.getElementById("list1").innerHTML = window.localStorage.getItem("myhistory") 
      } else {
          if (userinput === "N") {
              {}
          }
      }
  }

  function calculate() {
    var sumGiven = 0
    var sumTaken = 0
    var store = window.localStorage.getItem("myhistory");
    list = store.split(" ")
    console.log(list);  
    len = list.length;
    for (i =0 ;  i < len; i++ ) {
        if (list[i] == "Given:") {
            sumGiven += parseFloat(list[i + 2])
        } else if (list[i] == "Taken:") {
            sumTaken += parseFloat(list[i + 2])
        }
    }
    console.log(sumGiven);
    document.getElementById("sumGiven").innerHTML = "Amount given: Rs" + sumGiven

    console.log(sumTaken);   
    document.getElementById("sumTaken").innerHTML = "Amount taken: Rs " + sumTaken

    if ((sumGiven - sumTaken) >= 0) {
    document.getElementById("netSum").innerHTML = "NET AMOUNT: Rs " + "<b>" + (sumGiven - sumTaken) + "</b>" + " yet to be recieved. "
    } else {
    document.getElementById("netSum").innerHTML = "NET AMOUNT: Rs " + "<b>" + (sumGiven - sumTaken) + "</b>" + " to be return. "

    }
  } 