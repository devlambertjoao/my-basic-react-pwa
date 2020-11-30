function registerServiceWorker() {
    if ('serviceWorker' in navigator) {
    window.addEventListener('load', function () {
            navigator.serviceWorker.register('/my-basic-react-pwa/sw.js', {
                scope: '/my-basic-react-pwa/'
            })
            .then((registration) => {
                console.log('ServiceWorker registration successful with scope: ', 
                    registration.scope);
            })
            .catch(err => {
                console.error(err);
            });
        });
    }
}

export default registerServiceWorker

