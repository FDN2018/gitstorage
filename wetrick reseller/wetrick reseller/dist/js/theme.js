let theme=sessionStorage.getItem("theme");
    var element = document.body;
    if(theme==="light"){
        $('#theme_mode').attr("href", 'css/portal.css');
        document.getElementById('theme_mode').removeAttribute('href');
        document.getElementById('theme_mode').setAttribute('href', 'css/portal.css');
    }
    else if(theme==="dark"){
        $('#theme_mode').attr("href", 'css/dark.css');
        document.getElementById('theme_mode').removeAttribute('href');
        document.getElementById('theme_mode').setAttribute('href', 'css/dark.css');
        element.classList.add("dark");
    }