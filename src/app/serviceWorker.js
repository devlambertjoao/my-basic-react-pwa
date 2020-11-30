function registerServiceWorker() {
    if ('serviceWorker' in navigator) {
    window.addEventListener('load', function () {
        navigator.serviceWorker.register('/sw.js', {
                scope: '/app/'
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

