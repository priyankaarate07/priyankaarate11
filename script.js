let selectedSeat = "";

function selectSeat(seat){

    document.querySelectorAll(".seat").forEach(s=>{
        s.classList.remove("selected");
    });

    seat.classList.add("selected");

    selectedSeat = seat.innerText;

    document.getElementById("seat").value = selectedSeat;
}

document.getElementById("bookingForm").addEventListener("submit",function(e){

    e.preventDefault();

    const name = document.getElementById("name").value;
    const from = document.getElementById("from").value;
    const to = document.getElementById("to").value;
    const date = document.getElementById("date").value;

    if(selectedSeat==""){
        alert("Please select a seat");
        return;
    }

    document.getElementById("result").innerHTML=
    `
    <h2>Booking Successful 🎉</h2>
    <p><b>Name:</b> ${name}</p>
    <p><b>From:</b> ${from}</p>
    <p><b>To:</b> ${to}</p>
    <p><b>Date:</b> ${date}</p>
    <p><b>Seat:</b> ${selectedSeat}</p>
    `;
});