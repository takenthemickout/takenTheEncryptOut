function eSubmit() {
    let eCipher = document.getElementById("eCipherKey").value;
    let eMessage = document.getElementById("eMsgValue").value;
    let ciphertext = CryptoJS.AES.encrypt(eMessage, eCipher);
    alert(ciphertext);
}

function dSubmit() {
    var dmessage = document.getElementById('dMsgValue').value;
    var dCipherKey = document.getElementById('dCipherKey').value;
    var bytes = CryptoJS.AES.decrypt(dmessage, dCipherKey);
    var decryptedMessage = bytes.toString(CryptoJS.enc.Utf8);
    alert(decryptedMessage);
}


if (document.getElementById("encryptButton").addEventListener("click", eSubmit)) {
    
}

if (document.getElementById("decryptButton").addEventListener("click", dSubmit)) {
}
