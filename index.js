if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(showLocation);
}

function showLocation(position){
    const long = position.coords.longitude
    const lat = position.coords.latitude
  
    const url = `https://maps.google.com/maps?q=${lat},${long}&t=&z=13&ie=UTF8&iwloc=&output=embed`

    window.open(url, 'map')
}

function getNotification(){
    if(!("Notification" in window)){
        console.log("Navegador nao suporta Notif.")
    } 
    else if(Notification.permission === "granted"){
        const notify = new Notification("Welcome Back!")
    } 
    else if(Notification.permission !=="denied"){
        Notification.requestPermission( function(permission){
            if(Notification.permission === "granted"){
                const notify = new Notification("Welcome")
            }
        })
    }   
}