var dialog = document.querySelector('dialog');

var showDialogButton = document.querySelector('#show-dialog');

var alarmState = document.getElementById('alarm-state');

if (! dialog.showModal) {
    dialogPolyfill.registerDialog(dialog);
}

showDialogButton.addEventListener('click', function() {
    dialog.showModal();
});

dialog.querySelector('.close').addEventListener('click', function() {
    dialog.close();
});

dialog.querySelector('.set-alarm').addEventListener('click', function() {
    var newAlarmTime = document.getElementById("alarm-time").value;
    console.log(newAlarmTime);

    if (newAlarmTime.length < 5){
        newAlarmTime = "0" + newAlarmTime;
    }
    console.log(newAlarmTime);

    document.getElementById("currentAlarmTime").innerHTML = newAlarmTime;
    send("SET_TIME__" + newAlarmTime);
    setAlarmToggleState(true);
    dialog.close();
});

alarmState.addEventListener('change', function(){
    if (!this.checked){
        send("DISABLE_ALARM");
    } else {
        var currentAlarmTime = document.getElementById("currentAlarmTime").innerHTML;
        console.log(currentAlarmTime);
        if (currentAlarmTime.length < 5){
            currentAlarmTime = "0" + currentAlarmTime;
        }
        console.log(currentAlarmTime);
        send("SET_TIME__" + currentAlarmTime);
    }
});


function getAlarmToggleState(){
    return document.getElementById("alarm-state").checked;
}

function setAlarmToggleState(newAlarmState){
    document.getElementById("alarm-state").checked = newAlarmState;
}
