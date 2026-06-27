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
async function pdfOlustur(){

    const { jsPDF } = window.jspdf;

    const pdf = new jsPDF();

    pdf.setFontSize(20);
    pdf.text("KARSU PEN",20,20);

    pdf.setFontSize(12);

    pdf.text("Müşteri : " + document.getElementById("musteri").value,20,40);
    pdf.text("Telefon : " + document.getElementById("telefon").value,20,50);
    pdf.text("Adres : " + document.getElementById("adres").value,20,60);

    pdf.text("Yatay : " + document.getElementById("yatay").innerText,20,80);
    pdf.text("Dikey : " + document.getElementById("dikey").innerText,20,90);
    pdf.text("Kanat : " + document.getElementById("kanat").innerText,20,100);
    pdf.text("Tül : " + document.getElementById("tul").innerText,20,110);
    pdf.text("Tepe : " + document.getElementById("tepe").innerText,20,120);
    pdf.text("İp : " + document.getElementById("ip").innerText,20,130);
    pdf.text("İp x2 : " + document.getElementById("ip2").innerText,20,140);
    pdf.text("Takoz : 33",20,150);

    pdf.save("KARSU_PEN.pdf");

}
function siparisKaydet(){

const siparis = {

musteri:document.getElementById("musteri").value,
telefon:document.getElementById("telefon").value,
adres:document.getElementById("adres").value,
renk:document.getElementById("renk").value,
adet:document.getElementById("adet").value,
en:document.getElementById("en").value,
boy:document.getElementById("boy").value,
yatay:document.getElementById("yatay").innerText,
dikey:document.getElementById("dikey").innerText,
kanat:document.getElementById("kanat").innerText,
tul:document.getElementById("tul").innerText,
tepe:document.getElementById("tepe").innerText,
ip:document.getElementById("ip").innerText,
ip2:document.getElementById("ip2").innerText,
takoz:"33"

};

let liste = JSON.parse(localStorage.getItem("siparisler")) || [];

liste.push(siparis);

localStorage.setItem("siparisler",JSON.stringify(liste));

alert("Sipariş Kaydedildi.");

}