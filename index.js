if (document.getElementById('pageOne')) {
    setTimeout(function() {
        document.getElementById('top_heading').textContent = 'This is the new content'
        setTimeout(function() {
            document.getElementById('top_heading').textContent = 'All of the cities that I have gosh darn lived in!'
        }, 2000);
    }, 2000);    
} else if (document.getElementById('pageTwo')) {
    document.addEventListener('submit', (event) => {
        event.preventDefault();
        alert(event.target);
    })
};


