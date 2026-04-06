// www/inject.js
// این کد روی صفحه سایت اجرا می‌شود

function extractAndSendData() {
    // اینجا باید سلکتور دقیق قیمت را پیدا کنید. مثلاً:
    // var price = document.querySelector('.price-class').innerText;
    
    // فعلاً یک داده تستی می‌فرستیم تا مطمئن شویم ارتباط برقرار است
    var mockData = {
        type: 'DATA_EXTRACTED',
        price: '2500.50',
        time: new Date().toLocaleTimeString()
    };

    // ارسال داده به لایه نیتیو Capacitor
    if (window.Capacitor && window.Capacitor.Plugins.MyBridge) {
        window.Capacitor.Plugins.MyBridge.receiveData({ json: JSON.stringify(mockData) });
    } else {
        console.log("Capacitor not ready or plugin missing");
    }
}

// اجرا بعد از لود شدن صفحه
window.addEventListener('load', () => {
    setTimeout(extractAndSendData, 5000); // 5 ثانیه صبر کن تا سایت لود شود
});