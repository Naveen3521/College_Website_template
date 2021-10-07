for(let i=1;i<=4; i++){

    var alertPlaceholder = document.getElementById('liveAlertPlaceholder')
    var alertTrigger = document.getElementById(`liveAlertBtn${i}`)

    function alert(message, type) {
    var wrapper = document.createElement('div')
    wrapper.innerHTML = '<div class="alert alert-' + type + ' alert-dismissible" role="alert">' + message + '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>'

    alertPlaceholder.append(wrapper)
    }

    if (alertTrigger) {
    alertTrigger.addEventListener('click', function () {
        alert(`You have Registered for Event ${i}`, 'dark')
    })
    }
}