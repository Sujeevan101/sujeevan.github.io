// Common JS extracted from all HTML files

function toggleTheme() {
    if (typeof isDark === 'undefined') window.isDark = true;
    isDark = !isDark;
    const root = document.documentElement;
    if (isDark) {
        root.style.setProperty('--bg-color', '#121212');
        root.style.setProperty('--text-color', '#ffffff');
        root.style.setProperty('--input-bg', '#1e1e1e');
        root.style.setProperty('--button-bg', '#333333');
        root.style.setProperty('--button-hover', '#555555');
        root.style.setProperty('--button-text', '#ffffff');
    } else {
        root.style.setProperty('--bg-color', '#ffffff');
        root.style.setProperty('--text-color', '#000000');
        root.style.setProperty('--input-bg', '#f0f0f0');
        root.style.setProperty('--button-bg', '#cccccc');
        root.style.setProperty('--button-hover', '#aaaaaa');
        root.style.setProperty('--button-text', '#000000');
    }
}
