const hotels = {

    "mara-serena":{

        name:"Mara Serena Safari Lodge",

        image:"images/mara-serena.jpg",

        location:"Maasai Mara National Reserve",

        price:"$320 per night",

        description:
        "Enjoy breathtaking views overlooking the Maasai Mara with luxurious rooms, excellent dining and unforgettable game drives.",

        facilities:[
            "Swimming Pool",
            "Free Wi-Fi",
            "Restaurant",
            "Bar",
            "Game Drives",
            "Airport Transfers"
        ]

    },

    "oltukai":{

        name:"Ol Tukai Lodge",

        image:"images/oltukai.jpg",

        location:"Amboseli National Park",

        price:"$280 per night",

        description:
        "Luxury lodge offering spectacular views of Mount Kilimanjaro and Amboseli's elephants.",

        facilities:[
            "Restaurant",
            "Swimming Pool",
            "Wi-Fi",
            "Nature Walks",
            "Game Drives"
        ]

    },

    "medina":{

        name:"Medina Palms Resort",

        image:"images/medina.jpg",

        location:"Watamu Beach",

        price:"$240 per night",

        description:
        "Luxury beachfront resort with spacious suites, spa facilities and direct access to Watamu Beach.",

        facilities:[
            "Beach Access",
            "Spa",
            "Swimming Pool",
            "Restaurant",
            "Free Wi-Fi"
        ]

    }

};
const modal = document.getElementById("hotelModal");

const details = document.getElementById("hotelDetails");

document.querySelectorAll(".details-btn").forEach(button=>{

    button.onclick=function(e){

        e.preventDefault();

        const hotel=hotels[this.dataset.hotel];

        details.innerHTML=`

        <img src="${hotel.image}" style="width:100%;border-radius:10px;margin-bottom:20px;">

        <h2>${hotel.name}</h2>

        <p><strong>📍 ${hotel.location}</strong></p>

        <p>${hotel.description}</p>

        <h3>Facilities</h3>

        <ul>

            ${hotel.facilities.map(f=>`<li>✅ ${f}</li>`).join("")}

        </ul>

        <h3 style="color:#D4AF37;">
            ${hotel.price}
        </h3>

        <a class="btn"
        target="_blank"
        href="https://wa.me/254703158470?text=Hello Joy, I would like to book ${encodeURIComponent(hotel.name)}">

        Book This Hotel

        </a>

        `;

        modal.style.display="block";

    }

});
document.querySelector(".close").onclick=function(){

    modal.style.display="none";

}

window.onclick=function(e){

    if(e.target==modal){

        modal.style.display="none";

    }

}
