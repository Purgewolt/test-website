const BTC = document.getElementById('BTC');
BTC.addEventListener('click', function() {
    window.location.href = "https://tr.tradingview.com/chart/7KfCXaqu/?symbol=BINANCE%3ABTCUSDT"; });


const ETH = document.getElementById('ETH');
ETH.addEventListener('click', function() {
    // CoinGecko API'sinden Ethereum fiyatını çek
    fetch("https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd")
        .then(response => response.json()) // Yanıtı JSON olarak al
        .then(data => {
            // Ethereum fiyatını al ve ekranda göster
            const ethFiyat = data.ethereum.usd;
            document.getElementById("fiyatGoster").innerText = `Ethereum Fiyatı: $${ethFiyat}`;
        })
        .catch(error => {
            console.error("Hata:", error);
            document.getElementById("fiyatGoster").innerText = "Fiyat alınırken bir hata oluştu.";
        });
});
const VANRY = document.getElementById('VANRY');
VANRY.addEventListener('click', function() {
    window.location.href = "https://tr.tradingview.com/chart/7KfCXaqu/?symbol=BINANCE%3AVANRYUSDT"; });

const AnaSayfa = document.getElementById('AnaSayfa');
AnaSayfa.addEventListener('click', function() {
    window.location.href = "https://purgewolt.github.io/test-website"; });

    // Popup'ı açma ve kapama işlevleri
document.getElementById("pencere").addEventListener("click", function() {
    document.getElementById("popup").style.display = "flex";
});

document.getElementById("closePopup").addEventListener("click", function() {
    document.getElementById("popup").style.display = "none";
});

// Popup dışına tıklanınca kapatma
window.addEventListener("click", function(event) {
    if (event.target === document.getElementById("popup")) {
        document.getElementById("popup").style.display = "none";
    }
});

    const ins = document.getElementById('ins');
ins.addEventListener('click', function() {
    window.location.href = "https://www.instagram.com/sezaikaymak/"; });

    const you = document.getElementById('you');
you.addEventListener('click', function() {
    window.location.href = "https://www.youtube.com/@arragardmusic"; });

    const face = document.getElementById('face');
face.addEventListener('click', function() {
    window.location.href = "https://www.facebook.com/sezai.kaymak.5"; });
