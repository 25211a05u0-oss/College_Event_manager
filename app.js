const events=[
{id:1,cat:"technical",icon:"🤖",title:"AI & Robotics Summit",date:"10 Oct 2026",time:"10:00 AM",venue:"Innovation Lab",seats:120},
{id:2,cat:"cultural",icon:"🎤",title:"Cultural Night 2026",date:"12 Oct 2026",time:"6:30 PM",venue:"Main Auditorium",seats:450},
{id:3,cat:"sports",icon:"⚽",title:"Inter-College Football",date:"15 Oct 2026",time:"4:00 PM",venue:"BVRIT Ground",seats:80},
{id:4,cat:"workshop",icon:"💻",title:"Full Stack Workshop",date:"18 Oct 2026",time:"9:30 AM",venue:"Seminar Hall 2",seats:60},
{id:5,cat:"technical",icon:"🧠",title:"CodeSprint Hackathon",date:"22 Oct 2026",time:"9:00 AM",venue:"CSE Block",seats:200},
{id:6,cat:"cultural",icon:"🎨",title:"Art & Photography Expo",date:"25 Oct 2026",time:"11:00 AM",venue:"Student Centre",seats:100}
];
const grid=document.getElementById("eventGrid");
function render(filter="all"){
 const list=filter==="all"?events:events.filter(e=>e.cat===filter);
 grid.innerHTML=list.map(e=>`<article class="event-card"><div class="event-banner">${e.icon}</div><div class="event-info"><span class="tag">${e.cat}</span><h3>${e.title}</h3><div class="event-meta">📅 ${e.date} • ${e.time}<br>📍 ${e.venue}</div><div class="event-bottom"><span class="seat">${e.seats} seats left</span><button class="btn btn-primary register" onclick="registerEvent(${e.id})">Register</button></div></div></article>`).join("");
}
document.querySelectorAll(".filter").forEach(b=>b.onclick=()=>{document.querySelectorAll(".filter").forEach(x=>x.classList.remove("active"));b.classList.add("active");render(b.dataset.cat)});
function openLogin(){document.getElementById("modalContent").innerHTML=`<h2>Student Login</h2><p style="color:#9eacc0">Access your registrations and personalized dashboard.</p><input class="input" id="email" placeholder="College email"><input class="input" id="pass" type="password" placeholder="Password"><button class="btn btn-primary" onclick="login()">Continue</button><p style="font-size:11px;color:#74849b;text-align:center;margin-bottom:0">Demo: any email/password</p>`;document.getElementById("modal").classList.remove("hidden")}
function login(){const email=document.getElementById("email").value||"student";document.getElementById("modalContent").innerHTML=`<h2>Welcome back 👋</h2><p style="color:#9eacc0">Signed in as ${email}</p><button class="btn btn-primary" onclick="showDashboard()">Open Dashboard</button>`}
function showDashboard(){document.getElementById("modalContent").innerHTML=`<h2>My Dashboard</h2><div style="background:#101f35;padding:15px;border-radius:12px;margin:15px 0"><b>Upcoming</b><p style="color:#9eacc0;margin-bottom:0">Your registered events will appear here.</p></div><div style="background:#101f35;padding:15px;border-radius:12px"><b>Quick Stats</b><p style="color:#9eacc0;margin-bottom:0">0 registrations • 0 attended</p></div>`}
function registerEvent(id){const e=events.find(x=>x.id===id);document.getElementById("modalContent").innerHTML=`<h2>Register for ${e.title}</h2><p style="color:#9eacc0">${e.date} • ${e.time}<br>${e.venue}</p><input class="input" id="studentName" placeholder="Full name"><input class="input" id="studentEmail" placeholder="College email"><button class="btn btn-primary" onclick="confirmRegistration(${id})">Confirm Registration</button>`;document.getElementById("modal").classList.remove("hidden")}
function confirmRegistration(id){const e=events.find(x=>x.id===id);document.getElementById("modalContent").innerHTML=`<div style="text-align:center"><div style="font-size:55px">🎉</div><h2>You're registered!</h2><p style="color:#9eacc0">${e.title}<br>Confirmation has been created for your event.</p><button class="btn btn-primary" onclick="closeModal()">Done</button></div>`}
function closeModal(){document.getElementById("modal").classList.add("hidden")}
document.getElementById("modal").addEventListener("click",e=>{if(e.target.id==="modal")closeModal()});
render();