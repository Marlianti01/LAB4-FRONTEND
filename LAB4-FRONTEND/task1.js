//TASK 1

//1.
function squareNum(num){
    return num * num;
}

document.write("Square of 6 is: "+ squareNum(6));

//2.
function sumOfCubes(num1, num2){
    var i = 0;
    var j = 0;
    var result = 0;
    i = num1 * num1 * num1;
    j = num2 * num2 * num2;
    return i + j;
}

document.write("Sum of cubes of two numbers: "+sumOfCubes(5,6));

//3.

function reverseNum(num){
    let reverse = 0;
    while( num > 0){
        reverse = reverse * 10 + (num % 10);
        num = Math.floor(num / 10);

    }

    return reverse;
}

    document.write(reverseNum(12345));

//4. 
function divisibleNum(z){
    for(let i = 1; i <=100; i++){
        if( i % x == 0){
            document.write(i);
        }
    }
}

    document.write("Numbers divisible by 5 between 1 and 100: " + divisibleNum(4));

//TASK 2
//1. (a)

function sum(num){
    if(num == 0){
        return 0;
    }
    else{
        return (num % 10) + sum(Math.floor(num/10));
    }
}
    document.write("Sum of Digit 456: "+sum(456));

//1. (b)

function power(x,y){
    if( y == 0){
        return 1;
    } else{
        return x * power(x, y-1);
    }
}

    document.write("2 power of 3 is: "+power(2,3));

//2. a

var product = {
    prodName: "laptop",
    prodQty: 10,
    price: 1200
};

document.write("Product Name: "+product.prodName);
document.write("Quantity: "+product.prodQty);
document.write("Price: RM"+product.price);

//2. b

function Book(bookName, authorName) {
    this.bookName = bookName;
    this.authorName =  authorName;
};

Book.prototype.price = 60;
var b = new Book("CS - FrontEnd", "John Doe");
document.write(b.bookName);
document.write(b.authorName);
document.write(b.price);

//3. c
var Employee = function() {
    this.employeeName = "John Smith";
    this.employeeId = "E12345";
    this.salary = 60000;
}


var Manager = function() {
    this.managerName = "Alice Johnson";
    this.branch = "Engineering";
}
Manager.prototype = new Employee();

var data = new Manager();
document.write("Employee Name: " + data.employeeName);
document.write("Employee ID: " + data.employeeId);
document.write("Salary: $" + data.salary);
document.write("Manager Name: " + data.managerName);
document.write("Branch: " + data.branch);



