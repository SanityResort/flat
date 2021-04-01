console.log('Starting');

let popup;

popup = WA.onEnterZone('start', () => {
    WA.openPopup('popup', 'Willkommen in der Wohnung von Dani und Christian.', [{
        label: 'Weiter',
        className: 'primary',
        callback: (localPopup) => {
            console.log('Button');
            localPopup.close();
            popup = WA.openPopup('popup', 'Zweites Popup', {
                label: 'Zu',
                className: 'success',
                callback: (popup) => {
                    popup.close();
                }
            });
        }
    },
        {
            label: 'Schließen',
            className: 'normal',
            callback: (popup) => {
                popup.close();
            }
        }
    ])

});

console.log('Popup created');

function start() {

}