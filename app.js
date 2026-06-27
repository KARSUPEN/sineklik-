function hesapla() {

    let en = parseInt(document.getElementById("en").value) || 0;
    let boy = parseInt(document.getElementById("boy").value) || 0;

    let yatay = en - 80;
    let dikey = boy - 80;
    let kanat = boy - 80;
    let tul = boy - 65;
    let tepe = Math.floor(en / 30);
    let ip = en + boy;
    let ip2 = ip * 2;
    let takoz = 33;

    document.getElementById("yatay").innerHTML = "2 × " + yatay;
    document.getElementById("dikey").innerHTML = "2 × " + dikey;
    document.getElementById("kanat").innerHTML = "1 × " + kanat;
    document.getElementById("tul").innerHTML = "1 × " + tul;
    document.getElementById("tepe").innerHTML = tepe;
    document.getElementById("ip").innerHTML = ip;
    document.getElementById("ip2").innerHTML = ip2;
    document.getElementById("takoz").innerHTML = takoz;

    document.getElementById("sonuc").style.display = "block";

}