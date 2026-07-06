// ==========================================
// CONTACT PAGE
// ==========================================

const success = document.getElementById("success-message");

if(success){

    const params = new URLSearchParams(window.location.search);

    if(params.get("success")==="true"){

        success.style.display="block";

        setTimeout(function(){

            success.style.display="none";

        },5000);

    }

}
