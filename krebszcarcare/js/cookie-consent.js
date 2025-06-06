document.addEventListener('DOMContentLoaded', function() {
    if (!getCookie('cookieConsent')) {
        showCookieConsent();
    }
});

function showCookieConsent() {
    const cookieConsent = document.createElement('div');
    cookieConsent.className = 'cookie-consent';
    cookieConsent.innerHTML = `
        <div class="cookie-text">
            Ez a weboldal sütiket használ a jobb felhasználói élmény érdekében. A weboldal használatával elfogadja a sütik használatát.
        </div>
        <div class="cookie-buttons">
            <button class="cookie-btn cookie-accept">Elfogadom</button>
            <button class="cookie-btn cookie-decline">Elutasítom</button>
        </div>
    `;
    
    document.body.appendChild(cookieConsent);
    
    // Show the banner with a small delay for smooth animation
    setTimeout(() => {
        cookieConsent.classList.add('show');
    }, 100);

    // Handle accept button click
    cookieConsent.querySelector('.cookie-accept').addEventListener('click', function() {
        setCookie('cookieConsent', 'accepted', 365);
        hideCookieConsent(cookieConsent);
    });

    // Handle decline button click
    cookieConsent.querySelector('.cookie-decline').addEventListener('click', function() {
        setCookie('cookieConsent', 'declined', 365);
        hideCookieConsent(cookieConsent);
    });
}

function hideCookieConsent(banner) {
    banner.classList.remove('show');
    setTimeout(() => {
        banner.remove();
    }, 300);
}

function setCookie(name, value, days) {
    let expires = '';
    if (days) {
        const date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = '; expires=' + date.toUTCString();
    }
    document.cookie = name + '=' + value + expires + '; path=/';
}

function getCookie(name) {
    const nameEQ = name + '=';
    const ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
} 