if('serviceWorker' in navigator) {window.addEventListener('load', () => {navigator.serviceWorker.register('/pokedek/sw.js', { scope: '/pokedek/' })})}