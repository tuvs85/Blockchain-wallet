
export function bufToHex (buffer) { // buffer is an ArrayBuffer
    return Array.prototype.map.call(new Uint8Array(buffer), x => ('00' + x.toString(16)).slice(-2)).join('');
}

export function hexToBuf (hex) {
    var typedArray = new Uint8Array(hex.match(/[\da-f]{2}/gi).map(function (h) {
        return parseInt(h, 16)
    }));

    return typedArray.buffer;
}

export function hexToString (hex) {
    var arr = hex.split("");
    var out = "";

    for (var i = 0; i < arr.length / 2; i++) {
        var tmp = "0x" + arr[i * 2] + arr[i * 2 + 1];
        var charValue = String.fromCharCode(tmp);
        out += charValue;
    }

    return out;
}

export function stringToHex (str) {
    var val = "";

    for (var i = 0; i < str.length; i++) {
        if (val == "")
            val = str.charCodeAt(i).toString(16);
        else
            val += str.charCodeAt(i).toString(16);
    }
    val += "0a";

    return val;
}
