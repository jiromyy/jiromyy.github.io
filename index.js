const oper = ["∧", "∨", "→", "⟷"];
const prop = ["T", "F", "¬T", "¬F"];
const labels = ["TRUE", "FALSE", "NOT TRUE", "NOT FALSE"]
const operLabel = ["AND", "OR", "IMPLIES", "IF AND ONLY IF"]
var clkOpr = 1 , clkProp1 = 1, clkProp2 = 1;
let prop1 = document.getElementById("s1");
let opr = document.getElementById("s2");
let prop2 = document.getElementById("s3");
let con = document.getElementById("s4");
let lbl1 = document.getElementById("label1");
let lbl2 = document.getElementById("label2");
let lbl3 = document.getElementById("label3");
let lbl5 = document.getElementById("label5");

function check(){
    //if AND
    if(opr.innerHTML == "∧"){
        if (((prop1.innerHTML == "T" || prop1.innerHTML == "¬F")) && 
            ((prop2.innerHTML == "T" || prop2.innerHTML == "¬F" ))){
            con.innerHTML = "T";
        } 
        else{
            con.innerHTML = "F";
        }
    }
    //if OR
    else if (opr.innerHTML == "∨"){
        if (prop1.innerHTML == "T" || prop1.innerHTML == "¬F"){
            con.innerHTML = "T";
        }
        else{
            if (prop2.innerHTML == "T" || prop2.innerHTML == "¬F"){
                    con.innerHTML = "T";
                }
            else{
                con.innerHTML = "F";
            }
        }
    }

    //if IMPLIES
    else if (opr.innerHTML == "→"){
        if (prop1.innerHTML == "T" || prop1.innerHTML == "¬F"){
            if (prop2.innerHTML == "T" || prop2.innerHTML == "¬F"){
                con.innerHTML = "T";
            }
            else{
                con.innerHTML = "F";
            }
        }
        else{
            con.innerHTML = "T";
        }
    }

    //if BICONDITIONAL
    else if (opr.innerHTML == "⟷"){
        if((prop1.innerHTML == "T" || prop1.innerHTML == "¬F") && 
           (prop2.innerHTML == "T" || prop2.innerHTML == "¬F")){
            con.innerHTML = "T";
           }
        else if ((prop1.innerHTML == "F" || prop1.innerHTML == "¬T") && 
                 (prop2.innerHTML == "F" || prop2.innerHTML == "¬T")){
            con.innerHTML = "T";
            }
        else{
            con.innerHTML = "F";
        }
    }
    

    //Labels for Conclusion
    if (con.innerHTML == "T"){
        lbl5.innerHTML = "TRUE";
    }
    else if(con.innerHTML == "F"){
        lbl5.innerHTML = "FALSE";
    }
    

}

opr.addEventListener("click", clickOpr);
prop1.addEventListener("click", clickProp1);
prop2.addEventListener("click", clickProp2);


function clickProp1() {
    prop1.innerHTML = prop[clkProp1];
    lbl1.innerHTML = labels[clkProp1];
    
    increaseClick("clkProp1");
    check();
}

function clickProp2() {
    prop2.innerHTML = prop[clkProp2];
    lbl3.innerHTML = labels[clkProp2];
    increaseClick("clkProp2");
    check();
}

function clickOpr() {
    opr.innerHTML = oper[clkOpr];
    lbl2.innerHTML = operLabel[clkOpr];
    check();
    increaseClick("clkOpr");
    
}

function increaseClick(clk){
    window[clk]++;

    if (window[clk] == 4){
        window[clk] = 0;
    }
}