const descimalInput = document.getElementById("descimal");
const binarioInput = document.getElementById("binario");

const inputs = document.getElementsByClassName("inputs");

for (let i = 0; i < inputs.length; i++) {
    let input = inputs[i];

    input.addEventListener("input", function (e) {
        let value = parseFloat(e.target.value);
        console.log("ativou a função")
        
        switch (e.target.name) {
            case "descimal":
                console.log(value)
                let binarionum = value.toString(2);
                let zeros = ""
                if(binarionum.length < 8){
                    let digit = 8 - binarionum.length 
                    for(let i = 0; i< digit; i++ ){
                        zeros += "0"
                    }
                }
                binarioInput.value = zeros + binarionum;
                break;
            case "binario":
                console.log(value)
                let binario = value.toString();
                let descimalnum = parseInt(binario, 2)
                descimalInput.value = descimalnum
                break;
        }
    });
}