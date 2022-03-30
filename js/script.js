let code = "WIFI:S:<SSID>;T:<WPA>;P:<PASSWORD>;;";

const button = document.querySelector('button');
const ssid = document.getElementById('ssid');
const password = document.getElementById('password');
const enc = document.getElementById('enc');
const qrcode = new QRCode(document.getElementById("qrcode"), code);

button.addEventListener('click', _ => {
    let newCode = code.replace('<SSID>', ssid.value).replace('<WPA>', enc.value);

    if (password.value === 'nopass') {
        qrcode.makeCode(newCode.replace('P:<PASSWORD>;', ''));
    } else {
        qrcode.makeCode(newCode.replace('<PASSWORD>', password.value));
    }
});

