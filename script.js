function showMessage(){

document.getElementById("msg1").innerText =
"🍳 Breakfast kare Suhani madam";

document.getElementById("msg2").innerText =
"🍱 Lunch kare Suhani madam";

document.getElementById("msg3").innerText =
"🍲 Dinner kare Suhani madam";

document.getElementById("foodQuestion").style.display="block";

}

function yesFood(){

document.getElementById("response").innerText =
"Veryyy Good Merii Pyariiiii Good Girllll 🤍";

document.getElementById("nextBtn").style.display="block";

heartBurst();

}

function noFood(){

document.getElementById("response").innerText =
"Please kuch kha lo na… tum to ache bacheee ho na 🥺 good girl ho na, so please kuch kha lo 🤍";

document.getElementById("nextBtn").style.display="block";

}

function showNote(){

document.getElementById("note").innerText =
"🤍 Meriii Suhaniiiii 🤍\n\nTum kabhi apne aap ko akela mat samajhna 🫶\nMain hamesha tumhare saath hoon har waqt, har ek time.\n\nAgar kuch bhi ho — chhota ya bada — mujhse zaroor share karna 💬\nTum important ho aur tumhari feelings bhi important hain.\n\nAlways take care of yourself Suhaniii 🌸";

}

function heartBurst(){

for(let i=0;i<25;i++){

let heart=document.createElement("div");

heart.className="heart";

heart.innerHTML="❤️";

heart.style.left=Math.random()*100+"vw";

heart.style.bottom="0px";

heart.style.fontSize=(Math.random()*25+15)+"px";

document.body.appendChild(heart);

setTimeout(()=>{
heart.remove();
},4000);

}

}
