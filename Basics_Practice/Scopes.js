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
    // console.log(GlobalVariable)
}


// console.log(GlobalVariable)


function New() {
    // console.log(GlobalVariable)
}
New()


function Outer() {

    let Name = " New Rahul"
    console.log("Secrere here is the ", secrete)
    function Inner(){
        let secrete = 'mt123'
        console.log(Name)
        function InnerInner(){
            console.log(Name,"With the innet inner ",secrete)
        }
        InnerInner()
    }

    function NewNew(){
        // console.log(secrete)
    }
    NewNew()
    Inner()
}
Outer()
// console.log(Name)
