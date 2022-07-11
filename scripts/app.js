
var settings = {
    "async": true,
    "scrossDomain": true,
    // "url": "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Cdogecoin&vs_currencies=usd",
    "url": "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Ctether%2Cxrp%2Ccardano%2Csolana%2Cdogecoin%2Cpolkadot%2Cdai%2Ctron%2Cuniswap&vs_currencies=usd&include_market_cap=true&include_24hr_vol=true&include_24hr_change=true&include_last_updated_at=true",
    // "url": "https://api.coingecko.com/api/v3/coins/list?include_platform=true",
    "method": "GET",
    "header": {}


}

function AddItem(name,price,mkc,volume24h, change24h) {
    
    const listUser = document.querySelector(".container-list-user-wrap");
    const newDiv = document.createElement("div");
    // console.log(newDiv);
    newDiv.className = "container-list-user";
    newDiv.innerHTML = 
                        `
                            <div class="container-list-user-detail">
                                <div class="container-list-user-detail-infor">
                                    <div class="container-list-user-detail-infor__img">
                                        <img src="./img/${name}.png" alt="">
                                    </div>
    
                                    <div class="container-list-user-detail-infor__name">
                                        <p>${name}</p>
                                        <span>Contract Explore</span>
                                    </div>
                                </div>
    
                                <div class="container-list-user-detail-depa">
                                    <p>${price}</p>
                                </div>
    
                                <div class="container-list-user-detail-date">
                                    <p>${mkc}</p>
                                </div>
    
                                <div class="container-list-user-detail-login">
                                    <p>${volume24h}</p>
                                </div>
    
                                <div class="container-list-user-detail-logout">
                                    <p>${change24h}</p>
                                </div>
    
                                <div class="container-list-user-detail-btn">
    
                                    <div class="container-list-user-detail-btn__view">
                                        <p>Buy</p>
                                    </div>
                                </div>
                            </div>
                        `
    
    listUser.appendChild(newDiv);
}



function AddItem_trend(name,down,up) {
    
    const listUser = document.querySelector(".container-infor");
    const newDiv = document.createElement("div");
    // console.log(newDiv);
    newDiv.className = "container-infor-tab";
    newDiv.innerHTML = 
                        `
                        <div class="container-infor-tab__img">
                            <img src="./img/${name}.png" alt="">
                        </div>
        
                        <div class="container-infor-tab__name">
                            <p>${name}</p>
                            <span>Smart Contract</span>
                        </div>
        
                        <div class="container-infor-tab__perform">
                            <div class="container-infor-tab__perform__month">
                                <div class="container-infor-tab__perform__month_circle">
                                    <p>${down}%</p>
                                </div>
        
                                <span>Down</span>
                            </div>
        
                            <div class="container-infor-tab__perform__devide">
                                
                            </div>
        
                            <div class="container-infor-tab__perform__year">
                                <div class="container-infor-tab__perform__year__circle">
                                    <p>${up}%</p>
                                </div>
                                
                                <span>Up</span>
                            </div>
                        </div>
        
                        <div class="container-infor-tab__detail">
                            <p>Contract's Details</p>
                        </div>
                        `
    
    listUser.appendChild(newDiv);
}

$.ajax(settings).done(function(response) {
    // console.log(response)

    var listCoin = Object.keys(response);

    var dataCoin = [];
    var dataPrice = [];
    var dataMkc = [];
    var dataVol24 = [];
    var dataCha24 = [];
    for (var i = 0; i < listCoin.length; ++i) {
        


        var dataCoin_temp = listCoin[i];

        var dataPrice_temp = `dataPrice_temp = response.${listCoin[i]}.usd`;
        eval(dataPrice_temp); // thực thi lệnh từ string
        dataPrice.push(dataPrice_temp);

        var dataMkc_temp = `dataMkc_temp = response.${listCoin[i]}.usd_market_cap`;
        eval(dataMkc_temp);
        dataMkc_temp = dataMkc_temp.toFixed(0);
        dataMkc.push(dataMkc_temp);

        var dataVol24_temp = `dataVol24_temp = response.${listCoin[i]}.usd_24h_vol`;
        eval(dataVol24_temp);
        dataVol24_temp = dataVol24_temp.toFixed(0);
        dataVol24.push(dataVol24_temp);


        var dataCha24_temp = `dataCha24_temp = response.${listCoin[i]}.usd_24h_change`;
        eval(dataCha24_temp);
        dataCha24_temp = dataCha24_temp.toFixed(3);
        dataCha24.push(dataCha24_temp);

        AddItem(dataCoin_temp, dataPrice_temp, dataMkc_temp, dataMkc_temp, dataCha24_temp)

    }

    for (var j = 0; j < 7; ++j) {


        var dataCoin_temp = listCoin[j];

        var dataCha24_temp = `dataCha24_temp = response.${listCoin[j]}.usd_24h_change`;
        eval(dataCha24_temp);
        dataCha24_temp = dataCha24_temp.toFixed(1);
        dataCha24.push(dataCha24_temp);

        if (dataCha24_temp > 0) {
            var trend = 0;
            AddItem_trend(dataCoin_temp,trend, dataCha24_temp)
        } else {
            trend = 0;
            AddItem_trend(dataCoin_temp, dataCha24_temp, trend)
        }
    }

    // console.log(dataPrice)
    // console.log(dataMkc)
    // console.log(dataVol24)
    // console.log(dataCha24)

})