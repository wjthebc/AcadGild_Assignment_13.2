//stores fetch in var and specifies source
var test = fetch("https://api.github.com/users/wjthebc")
//converts from string to json
.then(response => response.json()).then(products => {
//determines where data goes in HTML and turns back into string
document.querySelector("#result").innerHTML = JSON.stringify(products)
})


//var jsonObject = JSON.parse(test);
