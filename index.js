const HoursEl = document.getElementById("Hour");
const MinutesEl = document.getElementById("Minutes");
const SecondsEl = document.getElementById("Seconds");
const ampmEl = document.getElementById("ampm");

//function to get data from computer
function Upclock(){
	let Hrs= new Date().getHours();
	let Min= new Date().getMinutes();
	let Sec= new Date().getSeconds();
	let ampm= "AM"

	if (Hrs>12) {
		Hrs = Hrs-12
		ampm ="AM"
	}

	Hrs = Hrs<10? "0"+Hrs:Hrs;
	Min = Min<10? "0"+Min:Min;
	Sec = Sec<10? "0"+Sec:Sec;


	HoursEl.innerText = Hrs;
	MinutesEl.innerText = Min;
	SecondsEl.innerText = Sec;
	ampmEl,(innerText = ampm);
	setTimeout(()=>{
		Upclock()
	},1000)
}

Upclock();
