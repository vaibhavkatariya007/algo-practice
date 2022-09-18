let arr = {
    fName: "Vaibhav",
    lName: "Katariya"
}

function fullName() {
    console.log("Full Name", this.fName + '_' + this.lName);
}

fullName.call(arr);
