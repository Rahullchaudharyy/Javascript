var GlobalVariable = {
    value:"This is the varibale outside of the scope and it can be acccess anyware in the code"
}

if(true) {
    let GlobalVariable = " I am Global Variable "

    if (true) {
         console.table(GlobalVariable)
    }
}



var GlobalVariable = {
    value:"This is the varibale outside of the scope and it can be acccess anyware in the code"
}
if (true) {
    console.log(GlobalVariable)
}


console.log(GlobalVariable)


function New() {
    console.log(GlobalVariable)
}
New()
