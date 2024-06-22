var store = "";
var show = "";
var swiper = "";
var list = document.getElementById("list")
var typing = document.getElementById("typing")
var match = "first";


function sendMessage(){
    var count = 0;
if(event.keyCode === 13){
    var elem = event.target;
    store = elem.value.toLowerCase();
    list.innerHTML += `<div class='message sent'>` + elem.value + `<span class="metadata"><span class="time">${moment().format('LT')}</span><span class="tick"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="15" id="msg-dblcheck-ack" x="2063" y="2076"><path d="M15.01 3.316l-.478-.372a.365.365 0 0 0-.51.063L8.666 9.88a.32.32 0 0 1-.484.032l-.358-.325a.32.32 0 0 0-.484.032l-.378.48a.418.418 0 0 0 .036.54l1.32 1.267a.32.32 0 0 0 .484-.034l6.272-8.048a.366.366 0 0 0-.064-.512zm-4.1 0l-.478-.372a.365.365 0 0 0-.51.063L4.566 9.88a.32.32 0 0 1-.484.032L1.892 7.77a.366.366 0 0 0-.516.005l-.423.433a.364.364 0 0 0 .006.514l3.255 3.185a.32.32 0 0 0 .484-.033l6.272-8.048a.365.365 0 0 0-.063-.51z" fill="#4fc3f7"/></svg></span></span></div> ` 
    
//hhh
function appendMessage() {
	const message = document.getElementsByClassName('message')[0];
}

function getlist() {
	// Prior to getting your list.
  shouldScroll = list.scrollTop + list.clientHeight === list.scrollHeight;
  /*
   * Get your list, we'll just simulate it by appending a new one syncronously.
   */
  appendMessage();
  // After getting your list.
  if (!shouldScroll) {
    scrollToBottom();
  }
}

function scrollToBottom() {
  list.scrollTop = list.scrollHeight;
}

scrollToBottom();

setInterval(getlist, 100);
//hhh

    // typing.style.display = "block";
    var arr = "abcdefghijklmnopqrstuvwxyz"
    var arr1 = ['hel','al','sal'];
    var arr2 = ['fine',"hn",'alright','well',"better",'hum','goo','amazing','gre','bs','th','maze','me','great','doing','goo','fab','fant','awesome','magnificent'];
    var arr3 = ['bt','pchh','hn','yes'];
        for(var i = 0; i < store.length; i++){
        for(var j = 0; j < arr.length; j++){
     if(store.slice(i,i+2) == "hi" && store.slice(i+3,i+2) !== arr[j] && i == 0){
              arr1.unshift("hi");
              break;
     }
    }
    }
    for(var i = 0; i < arr1.length; i++){
        swiper = arr1[i]
        show = store.indexOf(swiper)
            if(show !== -1){   
                count = 1; 
                break;
                }
                show = "";
                swiper = "";
    }
    for(var i = 0; i < arr2.length; i++){
        swiper = arr2[i]
        show = store.indexOf(swiper)
            if(show !== -1 && match == "first"){ 
                count = 2;  
                break;
                }
                show = "";
                swiper = ""; 
    }
    for(var i = 0; i < arr3.length; i++){
        swiper = arr3[i]
        show = store.indexOf(swiper)
            if(show !== -1 && match == "second"){ 
                count = 3;  
                break;
                }
                show = "";
                swiper = ""; 
    }
    if(count == 1){
        setTimeout(function(){
            list.innerHTML +=`<div class="message received"><span id="random"> oho </span><span class="metadata"><span class="time">${moment().format('LT')}</span></span></div>`
        }, 1650)
        setTimeout(function(){
            list.innerHTML += `<div class="message received"><span id="random">gm hgyi apki? </span><span class="metadata"><span class="time">${moment().format('LT')}</span></span></div>`  
            // typing.style.display = "none";
        }, 3200)
    }
    else if(count == 2){
        match = "second";
        setTimeout(function(){
            list.innerHTML += `<div class="message received"><span id="random"> hmm... wese aik bt khn ?  </span><span class="metadata"><span class="time">${moment().format('LT')}</span></span></div>` 
        }, 2000)
        setTimeout(function(){
            list.innerHTML += `<div class="message received"><span id="random"> mjhy na tmse kch pxhna tha </span><span class="metadata"><span class="time">${moment().format('LT')}</span></span></div>` 
        }, 4100)
        setTimeout(function(){
            list.innerHTML += `<div class="message received"><span id="random"> wrning: no no's allowed </span><span class="metadata"><span class="time">${moment().format('LT')}</span></span></div>`  
            // typing.style.display = "none";
        }, 5500)
        setTimeout(function(){
            list.innerHTML += `<div class="message received"><span id="random"> plz plz plz... </span><span class="metadata"><span class="time">${moment().format('LT')}</span></span></div>`  
            // typing.style.display = "none";
        }, 6095)
    }
    else if(count == 3){
        setTimeout(function(){
            list.innerHTML += `<div class="message received"><span id="random"> ni chrdo </span><span class="metadata"><span class="time">${moment().format('LT')}</span></span></div>`
        }, 2000)
        setTimeout(function(){
            list.innerHTML += `<div class="message received"><span id="random"> tm yqin ni kroge </span><span class="metadata"><span class="time">${moment().format('LT')}</span></span></div>`
            // typing.style.display = "none";
        }, 4100)
    }
    else{
        setTimeout(function(){
            list.innerHTML += `<div class="message received"><span id="random"> dkho fzul hrktein mt kro plz </span><span class="metadata"><span class="time">${moment().format('LT')}</span></span></div>`
            // typing.style.display = "none";
        }, 2000)
    }


    elem.value = ""
}
}
console.log(moment().format('LT'))

// /* Meme */

// var memes = [
//   'Dude, you smashed my turtle saying "I\'M MARIO BROS!"',
//   'Dude, you grabed seven oranges and yelled "I GOT THE DRAGON BALLS!"',
//   'Dude, you threw my hamster across the room and said "PIKACHU I CHOOSE YOU!"',
//   'Dude, you congratulated a potato for getting a part in Toy Story',
//   'Dude, you were hugging an old man with a beard screaming "DUMBLEDORE YOU\'RE ALIVE!"',
//   'Dude, you were cutting all my pinapples yelling "SPONGEBOB! I KNOW YOU\'RE THERE!"',
// ];

// var random = document.querySelector('#random');

// random.innerHTML = memes[Math.floor(Math.random() * memes.length)];

// /* Time */

// var deviceTime = document.querySelector('.status-bar .time');
// var messageTime = document.querySelectorAll('.message .time');

// deviceTime.innerHTML = moment().format('h:mm');

// setInterval(function() {
//   deviceTime.innerHTML = moment().format('h:mm');
// }, 1000);

// for (var i = 0; i < messageTime.length; i++) {
//   messageTime[i].innerHTML = moment().format('h:mm A');
// }

// /* Message */

// var form = document.querySelector('.conversation-compose');
// var conversation = document.querySelector('.conversation-container');

// form.addEventListener('submit', newMessage);

// function newMessage(e) {
//   var input = e.target.input;

//   if (input.value) {
//     var message = buildMessage(input.value);
//     conversation.appendChild(message);
//     animateMessage(message);
//   }

//   input.value = '';
//   conversation.scrollTop = conversation.scrollHeight;

//   e.preventDefault();
// }

// function buildMessage(text) {
//   var element = document.createElement('div');

//   element.classList.add('message', 'sent');

//   element.innerHTML = text +
//     '<span class="metadata">' +
//       '<span class="time">' + moment().format('h:mm A') + '</span>' +
//       '<span class="tick tick-animation">' +
//         '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="15" id="msg-dblcheck" x="2047" y="2061"><path d="M15.01 3.316l-.478-.372a.365.365 0 0 0-.51.063L8.666 9.88a.32.32 0 0 1-.484.032l-.358-.325a.32.32 0 0 0-.484.032l-.378.48a.418.418 0 0 0 .036.54l1.32 1.267a.32.32 0 0 0 .484-.034l6.272-8.048a.366.366 0 0 0-.064-.512zm-4.1 0l-.478-.372a.365.365 0 0 0-.51.063L4.566 9.88a.32.32 0 0 1-.484.032L1.892 7.77a.366.366 0 0 0-.516.005l-.423.433a.364.364 0 0 0 .006.514l3.255 3.185a.32.32 0 0 0 .484-.033l6.272-8.048a.365.365 0 0 0-.063-.51z" fill="#92a58c"/></svg>' +
//         '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="15" id="msg-dblcheck-ack" x="2063" y="2076"><path d="M15.01 3.316l-.478-.372a.365.365 0 0 0-.51.063L8.666 9.88a.32.32 0 0 1-.484.032l-.358-.325a.32.32 0 0 0-.484.032l-.378.48a.418.418 0 0 0 .036.54l1.32 1.267a.32.32 0 0 0 .484-.034l6.272-8.048a.366.366 0 0 0-.064-.512zm-4.1 0l-.478-.372a.365.365 0 0 0-.51.063L4.566 9.88a.32.32 0 0 1-.484.032L1.892 7.77a.366.366 0 0 0-.516.005l-.423.433a.364.364 0 0 0 .006.514l3.255 3.185a.32.32 0 0 0 .484-.033l6.272-8.048a.365.365 0 0 0-.063-.51z" fill="#4fc3f7"/></svg>' +
//       '</span>' +
//     '</span>';

//   return element;
// }

// function animateMessage(message) {
//   setTimeout(function() {
//     var tick = message.querySelector('.tick');
//     tick.classList.remove('tick-animation');
//   }, 500);
// }