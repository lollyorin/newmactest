document.addEventListener('mousemove', Event => {
Object.assign(document.documentElement, {
    style:`
    --move-x: ${(Event.clientX - window.innerWidth / 2) * .01}deg;
    --move-y: ${(Event.clientY - window.innerHeight / 2) * .01}deg;
    `
    
    
})
})