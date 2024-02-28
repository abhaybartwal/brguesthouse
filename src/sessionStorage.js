import Cookies from 'js-cookie';

export const setSessionStorageItem = (key, value) => {
    if (process.browser) {
        window.sessionStorage.setItem(key, value);
    } else {
        Cookies.set(key, value);
    }
};

export const getSessionStorageItem = (key) => {
    return process.browser
        ? window.sessionStorage.getItem(key)
        : Cookies.get(key);
};

export const removeSessionStorageItem = (key) => {
    if (process.browser) {
        window.sessionStorage.removeItem(key);
    } else {
        Cookies.remove(key);
    }
};
