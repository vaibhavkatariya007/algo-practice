//Factory Of Employees

//Types Of Employees
function Developer(name) {
    this.name = name;
    this.type = "Developer";
}
function Tester(name) {
    this.name = name;
    this.type = "Tester";
}

// Employee Factory
const EmployeeFactory = function () {
    this.createEmployee = function (name, type) {
        switch (type) {
            case 1:
                return new Developer(name);
            case 2:
                return new Tester(name);
            default:
                return false;
        };
    }
}

const empFactory = new EmployeeFactory();
const employeeDB = [];
employeeDB.push(empFactory.createEmployee("vaibhav", 1));
employeeDB.push(empFactory.createEmployee("Simran", 2));
employeeDB.push(empFactory.createEmployee("Meher", 1));

console.log(employeeDB);

function say() {
    console.log(`Hi, My name is ${this.name}, I am a ${this.type}`);
}

(function () {
    employeeDB.forEach(emp => {
        say.call(emp);
    })
})();



// Create gadget Factory


const Laptop = function ({ ram, hdd, name }) {
    this.ram = ram || 0;
    this.hdd = hdd || 0;
    this.name = name || '';
}

const Tablet = function ({ ram, hdd, name, network }) {
    this.ram = ram || 0;
    this.hdd = hdd || 0;
    this.name = name || '';
    this.network = network || 0;
}


const gadgetType = { Laptop, Tablet };

const gadgetFactory = function (type, attributes) {
    const GadgetType = gadgetType[type];
    return new GadgetType(attributes);
}


const MacBook = new gadgetFactory('Laptop', {
    ram: '16gb',
    hdd: '1tb',
    name: 'Macbook Air'
});

const Tab = new gadgetFactory('Tablet', {
    ram: '16gb',
    hdd: '1tb',
    name: 'iPad',
    network: '5G'
});

console.log("LAPTOP:", MacBook);
console.log("TABLET:", Tab);