"use strict";
const sendList = [
    {
        currency_code: "AED",
        currency_name: "UAE Dirham",
        country: "United Arab Emirates"
    },
    {
        currency_code: "AFN",
        currency_name: "Afghan Afghani",
        country: "Afghanistan"
    },
    {
        currency_code: "ALL",
        currency_name: "Albanian Lek",
        country: "Albania"
    },
    {
        currency_code: "AMD",
        currency_name: "Armenian Dram",
        country: "Armenia"
    },
    {
        currency_code: "AOA",
        currency_name: "Angolan Kwanza",
        country: "Angola"
    },
    {
        currency_code: "ARS",
        currency_name: "Argentine Peso",
        country: "Argentina"
    },
    {
        currency_code: "AUD",
        currency_name: "Australian Dollar",
        country: "Australia"
    },
    {
        currency_code: "AWG",
        currency_name: "Aruban Florin",
        country: "Aruba"
    },
    {
        currency_code: "AZN",
        currency_name: "Azerbaijani Manat",
        country: "Azerbaijan"
    },
    {
        currency_code: "BAM",
        currency_name: "Bosnia and Herzegovina Mark",
        country: "Bosnia and Herzegovina"
    },
    {
        currency_code: "BBD",
        currency_name: "Barbados Dollar",
        country: "Barbados"
    },
    {
        currency_code: "BDT",
        currency_name: "Bangladeshi Taka",
        country: "Bangladesh"
    },
    {
        currency_code: "BGN",
        currency_name: "Bulgarian Lev",
        country: "Bulgaria"
    },
    {
        currency_code: "BHD",
        currency_name: "Bahraini Dinar",
        country: "Bahrain"
    },
    {
        currency_code: "BIF",
        currency_name: "Burundian Franc",
        country: "Burundi"
    },
    {
        currency_code: "BMD",
        currency_name: "Bermudian Dollar",
        country: "Bermuda"
    },
    {
        currency_code: "BND",
        currency_name: "Brunei Dollar",
        country: "Brunei Darussalam"
    },
    {
        currency_code: "BOB",
        currency_name: "Bolivian Boliviano",
        country: "Bolivia"
    },
    {
        currency_code: "BRL",
        currency_name: "Brazilian Real",
        country: "Brazil"
    },
    {
        currency_code: "BSD",
        currency_name: "Bahamian Dollar",
        country: "The bahamas"
    },
    {
        currency_code: "BTN",
        currency_name: "Bhutanese Ngultrum",
        country: "Bhutan"
    },
    {
        currency_code: "BWP",
        currency_name: "Botswana Pula",
        country: "Botswana"
    },
    {
        currency_code: "BYN",
        currency_name: "Belarusian Ruble",
        country: "Belarus"
    },
    {
        currency_code: "BZD",
        currency_name: "Belize Dollar",
        country: "Belize"
    },
    {
        currency_code: "CAD",
        currency_name: "Canadian Dollar",
        country: "Canada"
    },
    {
        currency_code: "CDF",
        currency_name: "Congolese Franc",
        country: "Democratic Republic Of Congo"
    },
    {
        currency_code: "CHF",
        currency_name: "Swiss Franc",
        country: "Switzerland"
    },
    {
        currency_code: "CLP",
        currency_name: "Chilean Peso",
        country: "Chile"
    },
    {
        currency_code: "CNY",
        currency_name: "Chinese Renminbi",
        country: "China"
    },
    {
        currency_code: "COP",
        currency_name: "Colombian Peso",
        country: "Colombia"
    },
    {
        currency_code: "CRC",
        currency_name: "Costa Rican Colon",
        country: "Costa Rica"
    },
    {
        currency_code: "CUP",
        currency_name: "Cuban Peso",
        country: "Cuba"
    },
    {
        currency_code: "CVE",
        currency_name: "Cabo Verde",
        country: "Cabo Verde"
    },
    {
        currency_code: "CZK",
        currency_name: "Czech Koruna",
        country: "Czechia"
    },
    {
        currency_code: "DJF",
        currency_name: "Djiboutian Franc",
        country: "Djibouti"
    },
    {
        currency_code: "DKK",
        currency_name: "Danish Krone",
        country: "Denmark"
    },
    {
        currency_code: "DOP",
        currency_name: "Dominican Peso",
        country: "Dominican Republic"
    },
    {
        currency_code: "DZD",
        currency_name: "Algerian Dinar",
        country: "Algeria"
    },
    {
        currency_code: "EGP",
        currency_name: "Egyptian Pound",
        country: "Egypt"
    },
    {
        currency_code: "ERN",
        currency_name: "Eritrean Nakfa",
        country: "Eritrea"
    },
    {
        currency_code: "ETB",
        currency_name: "Ethiopian Birr",
        country: "Ethiopia"
    },
    {
        currency_code: "EUR",
        currency_name: "Euro",
        country: "European Union"
    },
    {
        currency_code: "FJD",
        currency_name: "Fiji Dollar",
        country: "Fiji"
    },
    {
        currency_code: "FKP",
        currency_name: "The Falkland Islands Pound",
        country: "The Falkland Islands"
    },
    {
        currency_code: "FOK",
        currency_name: "Faroese Kr\xf3na",
        country: "The Faroe Islands"
    },
    {
        currency_code: "GBP",
        currency_name: "Pound Sterling",
        country: "United Kingdom"
    },
    {
        currency_code: "GEL",
        currency_name: "Georgian Lari",
        country: "Georgia"
    },
    {
        currency_code: "GGP",
        currency_name: "Guernsey Pound",
        country: "Guernsey"
    },
    {
        currency_code: "GHS",
        currency_name: "Ghanaian Cedi",
        country: "Ghana"
    },
    {
        currency_code: "GIP",
        currency_name: "Gibraltar Pound",
        country: "Gibraltar"
    },
    {
        currency_code: "GMD",
        currency_name: "Gambian Dalasi",
        country: "Gambia"
    },
    {
        currency_code: "GNF",
        currency_name: "Guinean Franc",
        country: "Guinea"
    },
    {
        currency_code: "GTQ",
        currency_name: "Guatemalan Quetzal",
        country: "Guatemala"
    },
    {
        currency_code: "GYD",
        currency_name: "Guyanese Dollar",
        country: "Guyana"
    },
    {
        currency_code: "HKD",
        currency_name: "Hong Kong Dollar",
        country: "Hong Kong"
    },
    {
        currency_code: "HNL",
        currency_name: "Honduran Lempira",
        country: "Honduras"
    },
    {
        currency_code: "HRK",
        currency_name: "Croatian Kuna",
        country: "Croatia"
    },
    {
        currency_code: "HTG",
        currency_name: "Haitian Gourde",
        country: "Haiti"
    },
    {
        currency_code: "HUF",
        currency_name: "Hungarian Forint",
        country: "Hungary"
    },
    {
        currency_code: "IDR",
        currency_name: "Indonesian Rupiah",
        country: "Indonesia"
    },
    {
        currency_code: "ILS",
        currency_name: "Israeli New Shekel",
        country: "Israel"
    },
    {
        currency_code: "IMP",
        currency_name: "Manx Pound",
        country: "Isle of Man"
    },
    {
        currency_code: "INR",
        currency_name: "Indian Rupee",
        country: "India"
    },
    {
        currency_code: "IQD",
        currency_name: "Iraqi Dinar",
        country: "Iraq"
    },
    {
        currency_code: "IRR",
        currency_name: "Iranian Rial",
        country: "Iran"
    },
    {
        currency_code: "ISK",
        currency_name: "Icelandic Kr\xf3na",
        country: "Iceland"
    },
    {
        currency_code: "JEP",
        currency_name: "Jersey Pound",
        country: "Jersey"
    },
    {
        currency_code: "JMD",
        currency_name: "Jamaican Dollar",
        country: "Jamaica"
    },
    {
        currency_code: "JOD",
        currency_name: "Jordanian Dinar",
        country: "Jordan"
    },
    {
        currency_code: "JPY",
        currency_name: "Japanese Yen",
        country: "Japan"
    },
    {
        currency_code: "KES",
        currency_name: "Kenyan Shilling",
        country: "Kenya"
    },
    {
        currency_code: "KGS",
        currency_name: "Kyrgyzstani Som",
        country: "Kyrgyzstan"
    },
    {
        currency_code: "KHR",
        currency_name: "Cambodian Riel",
        country: "Cambodia"
    },
    {
        currency_code: "KID",
        currency_name: "Kiribati Dollar",
        country: "Kiribati"
    },
    {
        currency_code: "KMF",
        currency_name: "Comorian Franc",
        country: "The Comoros"
    },
    {
        currency_code: "KRW",
        currency_name: "South Korean Won",
        country: "The Republic Of Korea"
    },
    {
        currency_code: "KWD",
        currency_name: "Kuwaiti Dinar",
        country: "Kuwait"
    },
    {
        currency_code: "KYD",
        currency_name: "The Cayman Islands Dollar",
        country: "The Cayman Islands"
    },
    {
        currency_code: "KZT",
        currency_name: "Kazakhstani Tenge",
        country: "Kazakhstan"
    },
    {
        currency_code: "LAK",
        currency_name: "Lao Kip",
        country: "Laos"
    },
    {
        currency_code: "LBP",
        currency_name: "Lebanese Pound",
        country: "Lebanon"
    },
    {
        currency_code: "LKR",
        currency_name: "Sri Lanka Rupee",
        country: "Sri Lanka"
    },
    {
        currency_code: "LRD",
        currency_name: "Liberian Dollar",
        country: "Liberia"
    },
    {
        currency_code: "LSL",
        currency_name: "Lesotho Loti",
        country: "Lesotho"
    },
    {
        currency_code: "LYD",
        currency_name: "Libyan Dinar",
        country: "Libya"
    },
    {
        currency_code: "MAD",
        currency_name: "Moroccan Dirham",
        country: "Morocco"
    },
    {
        currency_code: "MDL",
        currency_name: "Moldovan Leu",
        country: "Moldova"
    },
    {
        currency_code: "MGA",
        currency_name: "Malagasy Ariary",
        country: "Madagascar"
    },
    {
        currency_code: "MKD",
        currency_name: "Macedonian Denar",
        country: "Republic Of North Macedonia"
    },
    {
        currency_code: "MMK",
        currency_name: "Burmese Kyat",
        country: "Myanmar"
    },
    {
        currency_code: "MNT",
        currency_name: "Mongolian T\xf6gr\xf6g",
        country: "Mongolia"
    },
    {
        currency_code: "MOP",
        currency_name: "Macanese Pataca",
        country: "Macao"
    },
    {
        currency_code: "MRU",
        currency_name: "Mauritanian Ouguiya",
        country: "Mauritania"
    },
    {
        currency_code: "MUR",
        currency_name: "Mauritian Rupee",
        country: "Mauritius"
    },
    {
        currency_code: "MVR",
        currency_name: "Maldivian Rufiyaa",
        country: "Maldives"
    },
    {
        currency_code: "MWK",
        currency_name: "Malawian Kwacha",
        country: "Malawi"
    },
    {
        currency_code: "MXN",
        currency_name: "Mexican Peso",
        country: "Mexico"
    },
    {
        currency_code: "MYR",
        currency_name: "Malaysian Ringgit",
        country: "Malaysia"
    },
    {
        currency_code: "MZN",
        currency_name: "Mozambican Metical",
        country: "Mozambique"
    },
    {
        currency_code: "NAD",
        currency_name: "Namibian Dollar",
        country: "Namibia"
    },
    {
        currency_code: "NGN",
        currency_name: "Nigerian Naira",
        country: "Nigeria"
    },
    {
        currency_code: "NIO",
        currency_name: "Nicaraguan C\xf3rdoba",
        country: "Nicaragua"
    },
    {
        currency_code: "NOK",
        currency_name: "Norwegian Krone",
        country: "Norway"
    },
    {
        currency_code: "NPR",
        currency_name: "Nepalese Rupee",
        country: "Nepal"
    },
    {
        currency_code: "NZD",
        currency_name: "New Zealand Dollar",
        country: "New Zealand"
    },
    {
        currency_code: "OMR",
        currency_name: "Omani Rial",
        country: "Oman"
    },
    {
        currency_code: "PAB",
        currency_name: "Panamanian Balboa",
        country: "Panama"
    },
    {
        currency_code: "PEN",
        currency_name: "Peruvian Sol",
        country: "Peru"
    },
    {
        currency_code: "PGK",
        currency_name: "Papua New Guinean Kina",
        country: "Papua New Guinea"
    },
    {
        currency_code: "PHP",
        currency_name: "Philippine Peso",
        country: "Philippines"
    },
    {
        currency_code: "PKR",
        currency_name: "Pakistani Rupee",
        country: "Pakistan"
    },
    {
        currency_code: "PLN",
        currency_name: "Polish Złoty",
        country: "Poland"
    },
    {
        currency_code: "PYG",
        currency_name: "Paraguayan Guaran\xed",
        country: "Paraguay"
    },
    {
        currency_code: "QAR",
        currency_name: "Qatari Riyal",
        country: "Qatar"
    },
    {
        currency_code: "RON",
        currency_name: "Romanian Leu",
        country: "Romania"
    },
    {
        currency_code: "RSD",
        currency_name: "Serbian Dinar",
        country: "Serbia"
    },
    {
        currency_code: "RUB",
        currency_name: "Russian Federation Ruble",
        country: "Russian Federation"
    },
    {
        currency_code: "RWF",
        currency_name: "Rwandan Franc",
        country: "Rwanda"
    },
    {
        currency_code: "SAR",
        currency_name: "Saudi Riyal",
        country: "Saudi Arabia"
    },
    {
        currency_code: "SBD",
        currency_name: "Solomon Islands Dollar",
        country: "Solomon Islands"
    },
    {
        currency_code: "SCR",
        currency_name: "Seychellois Rupee",
        country: "Seychelles"
    },
    {
        currency_code: "SDG",
        currency_name: "Sudanese Pound",
        country: "Sudan"
    },
    {
        currency_code: "SEK",
        currency_name: "Swedish Krona",
        country: "Sweden"
    },
    {
        currency_code: "SGD",
        currency_name: "Singapore Dollar",
        country: "Singapore"
    },
    {
        currency_code: "SHP",
        currency_name: "Saint Helena Pound",
        country: "Saint Helena"
    },
    {
        currency_code: "SLE",
        currency_name: "Sierra Leonean Leone",
        country: "Sierra Leone"
    },
    {
        currency_code: "SOS",
        currency_name: "Somali Shilling",
        country: "Somalia"
    },
    {
        currency_code: "SRD",
        currency_name: "Surinamese Dollar",
        country: "Suriname"
    },
    {
        currency_code: "SSP",
        currency_name: "South Sudanese Pound",
        country: "South Sudan"
    },
    {
        currency_code: "STN",
        currency_name: "Sao Tome And Principe Dobra",
        country: "Sao Tome And Principe"
    },
    {
        currency_code: "SYP",
        currency_name: "Syrian Arab Republic Pound",
        country: "Syrian Arab Republic"
    },
    {
        currency_code: "SZL",
        currency_name: "Eswatini Lilangeni",
        country: "Eswatini"
    },
    {
        currency_code: "THB",
        currency_name: "Thai Baht",
        country: "Thailand"
    },
    {
        currency_code: "TJS",
        currency_name: "Tajikistani Somoni",
        country: "Tajikistan"
    },
    {
        currency_code: "TMT",
        currency_name: "Turkmenistan Manat",
        country: "Turkmenistan"
    },
    {
        currency_code: "TND",
        currency_name: "Tunisian Dinar",
        country: "Tunisia"
    },
    {
        currency_code: "TOP",
        currency_name: "Tongan Paʻanga",
        country: "Tonga"
    },
    {
        currency_code: "TRY",
        currency_name: "Turkish Lira",
        country: "Turkey"
    },
    {
        currency_code: "TTD",
        currency_name: "Trinidad and Tobago Dollar",
        country: "Trinidad and Tobago"
    },
    {
        currency_code: "TVD",
        currency_name: "Tuvaluan Dollar",
        country: "Tuvalu"
    },
    {
        currency_code: "TWD",
        currency_name: "New Taiwan Dollar",
        country: "Taiwan"
    },
    {
        currency_code: "TZS",
        currency_name: "Tanzanian Shilling",
        country: "Tanzania"
    },
    {
        currency_code: "UAH",
        currency_name: "Ukrainian Hryvnia",
        country: "Ukraine"
    },
    {
        currency_code: "UGX",
        currency_name: "Ugandan Shilling",
        country: "Uganda"
    },
    {
        currency_code: "USD",
        currency_name: "United States Dollar",
        country: "United States"
    },
    {
        currency_code: "UYU",
        currency_name: "Uruguayan Peso",
        country: "Uruguay"
    },
    {
        currency_code: "UZS",
        currency_name: "Uzbekistani So'm",
        country: "Uzbekistan"
    },
    {
        currency_code: "VES",
        currency_name: "Venezuelan Bol\xedvar Soberano",
        country: "Venezuela"
    },
    {
        currency_code: "VND",
        currency_name: "Vietnamese Đồng",
        country: "Vietnam"
    },
    {
        currency_code: "VUV",
        currency_name: "Vanuatu Vatu",
        country: "Vanuatu"
    },
    {
        currency_code: "WST",
        currency_name: "Samoan Tālā",
        country: "Samoa"
    },
    {
        currency_code: "YER",
        currency_name: "Yemeni Rial",
        country: "Yemen"
    },
    {
        currency_code: "ZAR",
        currency_name: "South African Rand",
        country: "South Africa"
    },
    {
        currency_code: "ZMW",
        currency_name: "Zambian Kwacha",
        country: "Zambia"
    },
    {
        currency_code: "ZWL",
        currency_name: "Zimbabwean Dollar",
        country: "Zimbabwe"
    }, 
];
const API = "53b82b6e6d8f794c6cb34fed";
function inputSetCurrency() {
    const dropdownList = document.querySelector(".send__content-list");
    const dropdownInput = document.querySelector(".send__content-input");
    function renderList() {
        function createList(country, symbol) {
            const dropdownDiv = document.createElement("div");
            dropdownDiv.classList.add("currencies__content-field");
            dropdownDiv.classList.add("send__content-field");
            dropdownDiv.dataset.symbol = symbol;
            dropdownDiv.dataset.country = country;
            dropdownDiv.innerHTML = `
        <div class="currencies__country send__country">
          <img class="currencies__img send__img" src="https://countryflagsapi.com/png/${country.toLocaleLowerCase()}"></img>
          <p class="send__txt currencies__txt">${country}</p>
        </div>
        <p class="currencies__symbol send__symbol">${symbol}</p>  `;
            dropdownList.append(dropdownDiv);
        }
        sendList.map((item)=>{
            let country = Object.values(item)[2];
            let symbol = Object.values(item)[0];
            createList(country, symbol);
        });
    }
    renderList();
    function filterList() {
        let dropdownFields = [
            ...document.querySelectorAll(".send__content-field")
        ];
        dropdownInput.addEventListener("input", ()=>{
            let dropdownFieldsFiltered = [];
            dropdownFieldsFiltered = dropdownFields.filter((field)=>{
                let input = dropdownInput.value.toLowerCase();
                let symbol = field.getAttribute("data-symbol").toLowerCase();
                let country = field.getAttribute("data-country").toLowerCase();
                return country.includes(input) || symbol.includes(input);
            });
            dropdownFields.forEach((item)=>item.remove());
            dropdownFieldsFiltered.forEach((item)=>{
                dropdownList.append(item);
            });
        });
    }
    filterList();
    function dropdownBtn() {
        const dropdownBtn = document.querySelector(".send__dropdown-btn");
        const dropdownContent = document.querySelector(".send__content");
        const backElement = document.querySelectorAll(".send__back-element");
        dropdownBtn.addEventListener("click", ()=>{
            dropdownContent.classList.remove("hide");
            dropdownContent.classList.add("show");
            document.querySelector(".send").style.boxShadow = "none";
            document.querySelector(".get").style.display = "none";
            backElement.forEach((item)=>{
                item.style.display = "none";
            });
        });
        document.querySelectorAll(".send__content-field").forEach((item)=>{
            item.addEventListener("click", ()=>{
                dropdownContent.classList.remove("show");
                dropdownContent.classList.add("hide");
                setImg(item.dataset.country.toLowerCase());
                setTxt(item.dataset.symbol);
                fetchBaseData();
                backElement.forEach((item)=>{
                    item.style.display = "flex";
                });
                document.querySelector(".send").style.boxShadow = "0 0 0 1px #a09ea347";
                document.querySelector(".get").style.display = "flex";
            });
        });
        function setImg(data) {
            let img = document.querySelector(".send__dropdown-img img");
            img.src = `https://countryflagsapi.com/png/${data}`;
        }
        async function setTxt(data) {
            let txt = document.querySelector(".send__dropdown-txt");
            txt.innerHTML = data;
        }
    }
    dropdownBtn();
}
inputSetCurrency();
function inputGetCurrency() {
    const dropdownList = document.querySelector(".get__content-list");
    const dropdownInput = document.querySelector(".get__content-input");
    function renderList() {
        function createList(country, symbol) {
            const dropdownDiv = document.createElement("div");
            dropdownDiv.classList.add("currencies__content-field");
            dropdownDiv.classList.add("get__content-field");
            dropdownDiv.dataset.symbol = symbol;
            dropdownDiv.dataset.country = country;
            dropdownDiv.innerHTML = `
        <div class="currencies__country get__country">
          <img class="currencies__img get__img" src="https://countryflagsapi.com/png/${country.toLocaleLowerCase()}"></img>
          <p class="get__txt currencies__txt">${country}</p>
        </div>
        <p class="currencies__symbol get__symbol">${symbol}</p>  `;
            dropdownList.append(dropdownDiv);
        }
        sendList.map((item)=>{
            let country = Object.values(item)[2];
            let symbol = Object.values(item)[0];
            createList(country, symbol);
        });
    }
    renderList();
    function filterList() {
        let dropdownFields = [
            ...document.querySelectorAll(".get__content-field")
        ];
        dropdownInput.addEventListener("input", ()=>{
            let dropdownFieldsFiltered = [];
            dropdownFieldsFiltered = dropdownFields.filter((field)=>{
                let input = dropdownInput.value.toLowerCase();
                let symbol = field.getAttribute("data-symbol").toLowerCase();
                let country = field.getAttribute("data-country").toLowerCase();
                return country.includes(input) || symbol.includes(input);
            });
            dropdownFields.forEach((item)=>item.remove());
            dropdownFieldsFiltered.forEach((item)=>{
                dropdownList.append(item);
            });
        });
    }
    filterList();
    function dropdownBtn() {
        const dropdownBtn = document.querySelector(".get__dropdown-btn");
        const dropdownContent = document.querySelector(".get__content");
        const backElement = document.querySelectorAll(".get__back-element");
        dropdownBtn.addEventListener("click", ()=>{
            dropdownContent.classList.remove("hide");
            dropdownContent.classList.add("show");
            document.querySelector(".get").style.boxShadow = "none";
            backElement.forEach((item)=>{
                item.style.display = "none";
            });
        });
        document.querySelectorAll(".get__content-field").forEach((item)=>{
            item.addEventListener("click", ()=>{
                dropdownContent.classList.remove("show");
                dropdownContent.classList.add("hide");
                setImg(item.dataset.country.toLowerCase());
                setTxt(item.dataset.symbol);
                fetchGetData();
                backElement.forEach((item)=>{
                    item.style.display = "flex";
                });
                document.querySelector(".get").style.boxShadow = "0 0 0 1px #a09ea347";
            });
        });
        function setImg(data) {
            let img = document.querySelector(".get__dropdown-img img");
            img.src = `https://countryflagsapi.com/png/${data}`;
        }
        function setTxt(data) {
            let txt = document.querySelector(".get__dropdown-txt");
            txt.innerHTML = data;
        }
    }
    dropdownBtn();
    function inputHelper() {
        const inputNumber = document.querySelector(".get__input");
        if (inputNumber.value > 0) inputNumber.nextElementSibling.classList.add("active");
        else inputNumber.nextElementSibling.classList.remove("active");
        inputNumber.addEventListener("input", ()=>{
            let text = inputNumber.value;
            if (text.length > 0) inputNumber.nextElementSibling.classList.add("active");
            else inputNumber.nextElementSibling.classList.remove("active");
        });
    }
    inputHelper();
}
inputGetCurrency();
async function fetchBaseData() {
    let first = document.querySelector(".send__dropdown-txt").textContent;
    let second = document.querySelector(".get__dropdown-txt").textContent;
    let inputSend = document.querySelector(".send__input");
    let inputGet = document.querySelector(".get__input");
    let feeTxt = document.querySelector(".currencies__txt-fee");
    let rateTxt = document.querySelector(".currencies__txt-rate");
    let response = await fetch(`https://v6.exchangerate-api.com/v6/${API}/pair/${first}/${second}`);
    if (response.status === 200) {
        let data = await response.json();
        let fee = await data.conversion_rate * inputSend.value * 0.015;
        inputGet.value = convert(await data.conversion_rate * inputSend.value - fee);
        feeTxt.textContent = `${convert(inputSend.value * 0.015)} ${first}`;
        rateTxt.textContent = `Today’s Rate: 1.00 ${first} = ${data.conversion_rate} ${second}`;
    }
    inputHelper(".get__input");
}
async function fetchGetData() {
    let first = document.querySelector(".send__dropdown-txt").textContent;
    let second = document.querySelector(".get__dropdown-txt").textContent;
    let inputSend = document.querySelector(".send__input");
    let inputGet = document.querySelector(".get__input");
    let feeTxt = document.querySelector(".currencies__txt-fee");
    let rateTxt = document.querySelector(".currencies__txt-rate");
    let response = await fetch(`https://v6.exchangerate-api.com/v6/${API}/pair/${first}/${second}`);
    if (response.status === 200) {
        let data = await response.json();
        let fee = inputGet.value / await data.conversion_rate * 0.015;
        inputSend.value = convert(inputGet.value / await data.conversion_rate + fee);
        feeTxt.textContent = `${convert(inputSend.value * 0.015)} ${first}`;
        rateTxt.textContent = `Today’s Rate: 1.00 ${first} = ${data.conversion_rate} ${second}`;
    }
    inputHelper(".get__input");
}
let send = document.querySelector(".send__input");
let get = document.querySelector(".get__input");
send.addEventListener("change", ()=>{
    fetchBaseData();
});
get.addEventListener("change", ()=>{
    fetchGetData();
});
fetchBaseData();
function convert(num) {
    return (Math.round(num * Math.pow(10, 2)) / Math.pow(10, 2)).toFixed(2);
}
inputHelper(".send__input");
async function inputHelper(className) {
    const inputNumber = document.querySelector(className);
    if (inputNumber.value > 0) inputNumber.nextElementSibling.classList.add("active");
    else inputNumber.nextElementSibling.classList.remove("active");
    inputNumber.addEventListener("input", ()=>{
        let text = inputNumber.value;
        if (text.length > 0) inputNumber.nextElementSibling.classList.add("active");
        else inputNumber.nextElementSibling.classList.remove("active");
    });
}
document.addEventListener("click", (event)=>{
    function className(className) {
        return event.target.classList.contains(className);
    }
    if (!(className("currencies__content-input") || className("currencies__symbol") || className("currencies__img") || className("currencies__txt") || className("currencies__country") || className("currencies__content-field") || className("currencies__dropdown-btn") || className("currencies__dropdown-img") || className("currencies__dropdown-flag") || className("currencies__dropdown-txt") || className("currencies__dropdown-arrow"))) {
        document.querySelectorAll(".currencies__content").forEach((element)=>{
            element.classList.remove("show");
            element.classList.add("hide");
        });
        document.querySelectorAll(".currencies__item").forEach((element)=>{
            element.style.boxShadow = "0 0 0 1px #a09ea347";
            element.style.display = "flex";
        });
        document.querySelectorAll(".get__back-element").forEach((item)=>{
            item.style.display = "flex";
        });
        document.querySelectorAll(".send__back-element").forEach((item)=>{
            item.style.display = "flex";
        });
    }
});

//# sourceMappingURL=index.6efc6676.js.map
