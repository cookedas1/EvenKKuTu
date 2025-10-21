/**
 * 마지막 수정
 * 2025.10.21 (Resolve punycode deprecation warnings.)
 */
const fetch = require('./fetch');
const GLOBAL = require("./global.json");

exports.verifyRecaptcha = function (responseToken, remoteIp, callback) {
    const verifyUrl = `https://google.com/recaptcha/api/siteverify?secret=${GLOBAL.GOOGLE_RECAPTCHA_SECRET_KEY}&response=${responseToken}&remoteip=${remoteIp}`;
    fetch(verifyUrl)
        .then(res => res.json())
        .then((json) => callback(json.success))
        .catch(() => callback(false));
};