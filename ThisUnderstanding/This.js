const UserOjb = {
    Name: " Trah",
    Age: 23 , 
    GetDetails:function(){
        console.log(this.Name)
    }
}

// UserOjb.GetDetails()



function GetName(){
    let username = "Nothing elde"
    console.log("This inside the function : -", this.username)
    
}

GetName()

// console.log("This in the Global : -", this)

