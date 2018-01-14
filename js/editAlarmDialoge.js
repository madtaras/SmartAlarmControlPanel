var dialog = document.querySelector('dialog');

var showDialogButton = document.querySelector('#show-dialog');

if (! dialog.showModal) {
    dialogPolyfill.registerDialog(dialog);
}

showDialogButton.addEventListener('click', function() {
    dialog.showModal();
});

dialog.querySelector('.close').addEventListener('click', function() {
    dialog.close();
});

dialog.querySelector('.reset-alarm').addEventListener('click', function() {
    console.log("SEND NEW TIME TO STM");
    dialog.close();
});
