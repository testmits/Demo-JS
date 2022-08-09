// NGÀY 29/7/2022
// n 
// console.warn(myFullName)
// console.error(myFullName)

// alert('Xin chao ban')
// confirm('Ban co vui khi vao trang web nay k')
// prompt('Nhap ten ban vao')

// setTimeout(function() { 
//     console.log(myFullName)
// }, 1000) // 1000 miligiay = 1s va chay sau 1 thoi gian mo trinh duyet

// setInterval(function() {
//     console.log(myFullName + Math.random())
// }, 1000) // Cu sau 1s se chay

// var c = 2 ** 3 // nhan luy thua voi 3 la so mu cua 2
// console.log(c)

// var a, f
// a = 145
// f = 4
// // console.log(a%f) // chua lay du
// if (a % f) {
//     console.log('co du')
// } else {
//     console.log('k co du')
// }

// Các toán tử gán: =; +=; -=; *=; /=; **=.
// var a = 2
// a **= 5
// console.log(a)

// var a = 1;
// var b = ++a * a--;
// console.log(b); 
// console.log(a)


// NGÀY 30/07/2022
// var a = 4
// console.log(a++)
// console.log(++a)

// var a = 5
// var b = 4
// var output = ++a*2 - a--*2
// console.log('output:', output)
// console.log('output: ' + output)
// console.log(a, b)
// console.log(a + b)

// var firstName = 'Pham'
// var lastName = 'Tuan'
// console.log(firstName, lastName)
// console.log(firstName + lastName)

// var myName = 'Pham'
// myName = myName + ' Van'
// myName += ' Tuan'
// console.log(myName)

// var firstName = 'Kiều';
// var lastName = 'Trang';
// var fullName = firstName, lastName
// console.log(fullName)

// var a = 'Pham Van Tuan'
// var b = 'Pham Van tuan'
// if (a == b) {
//     console.log('Dieu kien dung!')
// } else {
//     console.log('Dieu kien sai!')
// }

// var a = 1
// var b = '1'
// var c = a == b
// var d = a === b
// console.log(c, d)
// console.log(c + d) // Cần tìm hiểu thêm

// console.log(true == 1) // Output: true
// console.log(true === 1) // Output: false
// console.log(true == '1') // Output: true
// console.log(true === '1') // Output: false

// if (false) {
//     console.log('Dieu kien dung!')
// } else {
//     console.log('Dieu kien sai!')
// }

// var myName = '0' // 6 gia tri khien myName thanh false: NaN, 0, '' - "", undefined, false, null
// if (myName) {
//     console.log('Dieu kien dung!')
// } else {
//     console.log('Dieu kien sai!')
// }

// var number = 13
// var remain = number % 2
// var a = remain === 1
// var b = remain == 1
// console.log(a, b)

// if (!(number < 0)) {
//     console.log('Dieu kien dung!')
// }

// var a = '1';
// var b = 2;
// var c = typeof a;
// var d = typeof b;
// var e = typeof d;
// console.log(c, d, e) // Output: ?

// var fullName = 'Tuan \'Mit\''
// console.log(fullName)

// undefined type: khi k gán giá trị cho biến
// var age;
// console.log(typeof age)

// Symbol type
// var a = Symbol('id') // unique
// var b = Symbol('id') // unique
// console.log(a == b)

// Function
// var myFunction = function() {
//     alert('Xin chao ban!')
// }
// myFunction();
// console.log(myFunction)
// console.log(typeof myFunction)
// console.log(myFunction())
// console.log(typeof myFunction())

// Object type
// var myObject = {
//     Name: 'Tuan',
//     age: 20,
//     address: 'Thai Binh',
//     myFunction: function () {
//     }
// }
// console.log(typeof myObject)

// var myArray = [
//     'JavaScript', function () {

//     }, '123'
// ]
// console.log(myArray)

// var a = 1
// var b = '1'
// console.log(a == b)
// console.log(a === b)
// console.log(a != b)
// console.log(a !== b)

// console.log(Boolean(1)) // true
// console.log(Boolean(['BMW'])) // true
// console.log(Boolean({ name: 'Miu' })) // true
// console.log(!!'0') // true
// console.log(!!0) // false


// NGÀY 01/08/2022
// var a = 'a' && 'b' && 'c'
// if (a) {
//     console.log('DIEU KIEN DUNG!')
// } else {
//     console.log('DIEU KIEN SAI!')
// }

// var b = 'a' && null && 'c'
// if (b) {
//     console.log('DIEU KIEN DUNG!')
// } else {
//     console.log('DIEU KIEN SAI!')
// }

// var c = NaN && '' && 'a'
// if (c) {
//     console.log('DIEU KIEN DUNG!')
// } else {
//     console.log('DIEU KIEN SAI!')
// }

// var hihi = null || 0 || undefined || false || NaN || '';
// if (hihi) {
//     console.log('Dieu kien dung!')
// } else {
//     console.log('Dieu kien sai!')
// }

// Hàm 
// function showDiaLog() {
//     alert('Hello world!')
// }
// showDiaLog()

// function showMe ssage(message) {
//     console.log(message);
// }
// showMessage("Hi anh em F8!");

// function writeLog(msg, msg1) {
//     if (msg) {
//         console.log(msg)
//     }

//     if (msg1) {
//         console.log(msg1)
//     }
// }
// writeLog( false, 'log 1')

// function writeLog() {
//     console.log(arguments) // arguments chỉ xuất hiện ở trong hàm
// }
// writeLog('log 1', 'log 2')

// function writeLog() {
//     for (var param of arguments) {
//         console.log(param)
//     }
// }
// writeLog('log 1', 'log 2', 'log 3')

// function writeLog() {
//     var myParam = ''
//     for (var param of arguments) {
//         myParam += `${param} -`
//     }
//     console.log(myParam)
// }
// writeLog('log 1', 'log 2', 'log 3', ['hihi', ' hello'])

// var a = prompt('Ban dang cam thay the nao')
// console.log(a)

// function cong(a, b) {
//     return a + b // sau return các câu lệnh phía sau sẽ k thực hiện
//     return a.toString() + b.toString() // sau return các câu lệnh phía sau sẽ k thực hiện
//     return [a, b] // sau return các câu lệnh phía sau sẽ k thực hiện
//     return [a + b] // sau return các câu lệnh phía sau sẽ k thực hiện
// }
// var c = cong(2, 1)
// console.log(c)

// Khi function đặt trùng tên thì function sau sẽ ghi đè function trước

// Các loại function
// 1. Declaration function
// 2. Expression function
// 3. Arrow function

// showMessage()
// function showMessage() {
//     console.log('Declaration function') // Có thể trc lúc định nghĩa
// }

// var showMessage2 = function() {
//     console.log('Expression function') // K thể gọi trc lúc định nghĩa
// }

// var myFullName = new String('Thanh Tuan')
// console.log(typeof myFullName)

// var a = 'Day la 2 dau\\\\'
// console.log(a)
// console.log(a.length)

// Template string ES6
// var firstName = 'Tuan'
// var lastName = 'Pham'
// console.log(`Toi la: ${firstName} ${lastName}`)


// NGÀY 02/08/2022
// Làm việc với chuỗi 
// var myString = 'Pham Van Van Tuan nn'

// 1. Length
// console.log(myString.length)
// function getContentLength(content) {
//     return content.length
// }
// console.log(getContentLength('JavaScript'));
// console.log(getContentLength('Hello World'));

// 2. Find index
// console.log(myString.indexOf('an'))
// console.log(myString.indexOf('an', 8))
// console.log(myString.lastIndexOf('n')) // Tìm vị trí ký tự 'n' cuối cùng
// console.log(myString.search('a')) // search k hỗ trợ chỉ số thứ 2 như indexOf

// 3. Cut string
// console.log(myString.slice(undefined))
// console.log(myString.slice(9))
// console.log(myString.slice(9, 13))
// console.log(myString.slice(-7, -3))

// 4. Replace
// console.log(myString.replace(' nn', ''))
// console.log(myString.replace(/Van /g, ''))

// 5. Convert to upper case
// console.log(myString.toUpperCase())

// 6. Convert to lower case
// console.log(myString.toLowerCase())

// 7. Trim 
// var myName = '   Tuan    '
// console.log(myName.trim())

// 8. Split
// console.log(myString.split(''))
// console.log(myString.split('a'))

// var coursesStr = 'HTML & CSS, JavaScript, ReactJS';
// function strToArray(str) {
//     return str.split(', ');
// }
// Expected results
// var result = strToArray(coursesStr)
// console.log(result) 
// Output: ['HTML & CSS', 'JavaScript', 'ReactJS']

// let text = "How are you doing today?";
// const myArray = text.split(" ");
// console.log(myArray)

// 9. Get a character by index
// console.log(myString.charAt(0))
// console.log(myString[0])

// 61. Kiểu dữ liệu số(number)
// Number.isFinite(2 / 0); // false
// Number.isFinite(20 / 5); // true
// Number.isFinite(0 / 0); // false

// Number.isInteger(999999999); // true
// Number.isInteger(0.2);       // false
// Number.isInteger(Math.PI);   // false

// Number.parseFloat('10') // 10
// Number.parseFloat('10.00') // 10
// Number.parseFloat('238,21') // 238
// Number.parseFloat('237.22') // 237.22
// Number.parseFloat('34 56 78') // 34
// Number.parseFloat(' 37 ') // 37
// Number.parseFloat('18 is my age') // 18

// Number.parseInt('10') // 10
// Number.parseInt('10.00') // 10
// Number.parseInt('238,21') // 238
// Number.parseInt('237.22') // 237
// Number.parseInt('34 56 78') // 34
// Number.parseInt(' 37 ') // 37
// Number.parseInt('18 is my age') // 18

// var numberObject = 1234.56789;

// numberObject.toFixed(); // '1235'
// numberObject.toFixed(1); // '1234.6'
// numberObject.toFixed(6); // '1234.567890'

// (11).toString();    // '11'
// (18).toString();     // '18'
// (17.3).toString();   // '17.3'

// 62. Số và làm việc với số
// var result = 20 / 'abc'
// console.log(result)
// console.log(typeof result)
// console.log(isNaN(result)) // isNaN() kiếm tra có phải NaN k

// var age = 20
// console.log(age.toString())
// console.log(typeof age.toString())

// var a = 20.124545
// console.log(a.toFixed())
// console.log(a.toFixed(3))

// function isNumber(value) {
//     if (Number.isFinite(value)) {
//         return true
//     } else {
//         return false
//     }
// }
// console.log(isNumber(3))

// function isNumber(value) {
//     return typeof value === 'number' && Number.isFinite(value)
// }
// console.log(isNumber('4'))
// console.log(Number.isFinite(NaN))


// NGÀY 03/08/2022

// 66. Mảng Array

// var languages = [
//     'JavaScript',
//     'PHP',
//     'Golang',
//     'Python'
// ]
// console.log(Array.isArray(languages))
// console.log(Array.isArray({}))
// console.log(languages.length)
// console.log(languages.indexOf('PHP'))
// console.log(languages[3])

// 69. Làm việc với mảng

// var languages = [
//     'JavaScript',
//     'PHP',
//     'Golang',
//     'Python'
// ]

// 1. To string
// console.log(languages.toString())
// console.log(typeof languages.toString())

// 2. Join
// console.log(languages.join(' '))
// console.log(languages.join(', '))
// console.log(typeof languages.join(' - '))

// VD
// function joinWithCharacter(array, charactor) {
//     return array.join(charactor)
// }
// Ví dụ khi sử dụng
// var cars = ['Honda', 'Mazda', 'Mercedes'];
// var result = joinWithCharacter(cars, ' - ');
// console.log(result); // Expected: "Honda - Mazda - Mercedes"

// 3. Pop: xóa phần tử cuối của mảng
        // và trả về mảng mới khi gọi mảng đó và k có phần tử đã xóa
// console.log(languages.pop())
// console.log(languages)

// 4. Push: Thêm phần tử cuối mảng
// console.log(languages.push('Java', 'C-Sharp'))
// console.log(languages)

// 5. Shift: Ngược pop
// console.log(languages.shift())
// console.log(languages.shift())
// console.log(languages.shift())
// console.log(languages.shift())
// console.log(languages.shift())
// console.log(languages)

// 6. Unshift: Ngược Push
// languages.unshift('Java', 'Ruby')
// console.log(languages.unshift('Java', 'Ruby'))
// console.log(languages)

// 7. Splice: xóa đi số phần tử bắt đầu từ 
            // Vừa xóa vừa chèn
// languages.splice(1, 2) // xóa
// console.log(languages)
// languages.splice(1, 0, 'Java') // chèn
// console.log(languages)
// languages.splice(1, 2, 'HTML')
// console.log(languages)

// 8. Concat: Nối array
// var languages2 = [
//     'TypeScript',
//     'C Sharp'
// ]
// console.log(languages.concat(languages2))

// 9. Slicing: cắt
// console.log(languages)
// console.log(languages.slice(0))
// console.log(languages.slice(1))
// console.log(languages.slice(1, 2))

// Viết hàm tại đây
// function getLastElement(animal) {
    // return animal.slice().pop();
// }

// Ví dụ sử dụng
// var animals = ['Monkey', 'Tiger', 'Elephant'];
// var result = getLastElement(animals);

// console.log(result); // Expected: "Elephant"
// console.log(animals); // Expected: ['Monkey', 'Tiger', 'Elephant']


// NGÀY 04/08/2022

// 74. Object
// var myKey = 'colorCar'
// var myObject = {
//     fullName: 'Thanh Tuan',
//     age: 20,
//     'the-village': 'Vien Ngoai',
//     [myKey]: 'Black',
//     getName: function() {
//         return this["the-village"]
//     }
// }

// console.log(myObject)

// myObject.address = 'Thai Binh' // cách thêm cặp key value
// myObject['add-ress'] = 'Tien Hai' // cách thêm cặp key value

// console.log(myObject)
// console.log(myObject.age)
// console.log(myObject['the-village'])

// var myName = 'fullName'
// console.log(myObject[myName])

// console.log(myObject.getName)
// console.log(myObject.getName())

// function Animal(name, leg, speed) {
//     this.name = name
//     this.leg = leg
//     this.speed = speed
    // this.getName = function() {
    //     return `${this.name} ${this.leg}`
    // }
// }
// var parrot = new Animal('vet', '2 chan', 'Nam My')
// var rot = new Animal('vet', '2 chan 8 ngon', 'Nam My')
// parrot.type = 'hihi'
// console.log(parrot)
// console.log(parrot.constructor)
// console.log(parrot.constructor === Animal)
// console.log(parrot.getName())
// console.log(rot.getName())

// 78. Object prototype
// function User(firstName, lastName, avatar) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.avatar = avatar;
//     this.getName = function() {
//         return `${firstName} ${lastName}`
//     }
// }

// User.prototype.className = 'C9';
// User.prototype.getClassName = function() {
//     return this.className
// }

// var id = new User('Pham', 'Tuan', 'Anh')

// console.log(id)

// Làm bài tại đây
// function Student(firstName, lastName) {
//     this.firstName = firstName;
//     this.lastName = lastName;
// }
// Student.prototype.getFullName = function() {
//     return `${this.firstName} ${this.lastName}`;
// }
// Ví dụ khi sử dụng
// var student = new Student('Long', 'Bui');
// console.log(student.firstName);  // 'Long'
// console.log(student.lastName);  // 'Bui'
// console.log(student.getFullName());  // 'Long Bui'

// 80. Đối tượng Date 

// var date = new Date();
// var year = date.getFullYear()
// var month = date.getMonth()
// var day = date.getDay()
// console.log(`${day}/${month}/${year}`);

// function getNextYear() {
//     var date = new Date();
//     return date.getFullYear() + 1;
// }
// console.log(typeof getNextYear());

// 82. Math object

// console.log(Math.PI);
// console.log(Math.round(1.3)); // làm tròn
// console.log(Math.round(1.6)); // làm tròn
// console.log(Math.abs(-8)); // Giá trị tuyệt đối
// console.log(Math.ceil(21.0000001)); // Làm tròn trên
// console.log(Math.floor(4.99999999)); // Làm tròn dưới
 
// console.log(Math.random()); // Returns a pseudorandom number between 0 and 1.
// console.log(Math.floor(Math.random() * 10)); // Trả về ngẫu nhiên trong đoạn [0 - 9]

// var random = Math.floor(Math.random() * 5)
// var coin = [
//     '1 coin',
//     '2 coin',
//     '3 coin',
//     '4 coin',
//     '5 coin'
// ]
// console.log(coin[random]);

// var randoms = Math.floor(Math.random() * 100)
// if (randoms < 5) {
//     console.log('Quay thanh cong!');
// }

// console.log(Math.min(1223, 4, 23, 23, 42, 1));
// console.log(Math.max(1223, 4, 23, 23, 42, 1));

// function getRandomItem(araays) {
//     var random = Math.floor(Math.random() * araays.length);
//     return araays[random];
// }

// var coin = ['1 coin', '2 coin', '3 coin'];

// console.log(getRandomItem(coin));

// let getRandomItems = function(arr) {
//     return arr[Math.floor(Math.random() * arr.length)];
// }

// 9. LỆNH RẼ NHÁNH, TOÁN TỬ 3 NGÔI

// 84. Lệnh rẽ nhánh if else

// function run(a) {
//     if (a % 15 == 0) {
//         return 3;
//     } else if (a % 3 == 0) {
//         return 1;
//     } else if (a % 5 == 0) {
//         return 2;
//     }
// }
// Kỳ vọng
// console.log(run(3)) // 1
// console.log(run(5)) // 2
// console.log(run(15)) // 3

// 86. Lệnh rẽ nhánh Switch
// var date = 3
// switch (date) {
//     case 2:
//         console.log('Hom nay la thu 2');
//         break;
//     case 3:
//         console.log('Hom nay la thu 3');
//         break;
//     case 4:
//         console.log('Hom nay la thu 4');
//         break;
//     default:
//         console.log('K co ngay nao ca');
// }

// switch (date) {
//     case 2:
//     case 3:
//     case 4:
//         console.log('Hom nay la thu 2, 3, 4');
//         break;
//     default:
//         console.log('K co ngay nao ca');
// }

// function run(fruits) {
//     var result;
//     switch (fruits) {
//         case "Banana":
//             result = "This is a Banana";
//             break;
//         case "Apple":
//             result = "This is an Apple";
//             break;
//         default:
//             result = "No fruits";
//     }
//     return result;
// }

// 89. Toán tử 3 ngôi (Ternary operator)

// var course = {
//     nameCourse: 'PHP',
//     coin: 200
// }
// var result = course.coin > 0 ? `Giá ${course.coin} coin` : 'Free'
// console.log(result);

// Làm bài
// function getCanVoteMessage(age) {
//     return age >= 18 ? 'Bạn có thể bỏ phiếu' : 'Bạn chưa được bỏ phiếu'
// }
// Kỳ vọng
// console.log(getCanVoteMessage(18)) // 'Bạn có thể bỏ phiếu'
// console.log(getCanVoteMessage(15)) // 'Bạn chưa được bỏ phiếu'


// NGÀY 06/08/2022

// 10. Vòng lặp

/*
VÒNG LẶP - LOOP
1. for - Lặp với điều kiện đúng
2. for/in - Lặp qua key của đối tượng
3. for/of - Lặp qua value của đối tượng
4. while - Lặp khi điều kiện đúng
5. do/while - Lặp ít nhất 1 lần, sau đó lặp khi điều kiện đúng
*/

// 92. Vòng lặp For

// VD 1: for (var i = 0; i < 100; i--) // i++ mới đúng
// VD 2: for (var i = 100; i >= 0; i++) // i-- mới đúng

// for (var i = 0; i <= 10; i++) {
//     console.log(`${i}. Anh yeu em`);
// }

// Làm bài
// function getRandNumbers(min, max, length) {
//     var arr = [];
//     for (var i = 0; i < length; i++) {
//         var number = Math.floor(Math.random() * (max - min) + min)
//         arr.push(number)
//     }
//     return arr;
// }  
// console.log(getRandNumbers(1,10,4)); // Trả về giá trị ngẫu nhiên thuộc (1; 10)


// function getTotal(arr) {
//     var results = 0;
//     for (var i = 0; i < arr.length; i++) {
//         results += arr[i];
//     }
//     return results;
// }
// Hoặc: const getTotal = arr => arr.reduce((sum, item) => sum + item, 0);
// Expected results
// console.log(getTotal([1, 2, 3])); // Output: 6
// console.log(getTotal([4, 5, -3])); // Output: 6
// console.log(getTotal([4, 5, 3, 5])); // Output: 17

// var myArray = [
//     'HTML',
//     'CSS',
//     'JavaScript',
//     'PHP',
//     'Python'
// ]
// var arrayLength = myArray.length;
// for (var i = 0; i < arrayLength; i++) {
//     console.log(myArray[i]);
// }

// var orders = [
//     {
//         name: 'Khóa học HTML - CSS Pro',
//         price: 3000000
//     },
//     {
//         name: 'Khóa học Javascript Pro',
//         price: 3000000
//     },
//     {
//         name: 'Khóa học React Pro',
//         price: 3000000
//     }
// ]

// function getTotal(array) {
//     var arrayLength = orders.length
//     var sum = 0;
//     for (var i = 0; i < arrayLength; i++) {
//         sum += array[i].price
//     }   
//     return sum
// }
// // Expected results:
// console.log(getTotal(orders));

// 98. Vòng lặp for..in
// var myObject = { 
//     class: 'c9',
//     address: 'Nam Hong',
//     country: 'Viet Nam'
// }
// for (var key in myObject) {
//     console.log(key);
//     console.log(myObject[key]);
// }

// var myString = 'Thanh Tuan'
// for (var key in myString) {
//     console.log(key);
//     console.log(myString[key]);
// }

// function run(object) {
//     var araays = [];
//     for (const key in object) {
//         araays.push(`Thuộc tính ${key} có giá trị ${object[key]}`);
//     }
//     return araays
// }
// // Expected results:
// console.log(run({ name: 'Nguyen Van A', age: 16 }));
// // Output:
// // [
// //     "Thuộc tính name có giá trị Nguyen Van A",
// //     "Thuộc tính age có giá trị 16"
// // ]

// 100. Vòng lặp for...of
// var myCourse = 'JavaScript'
// for (var key of myCourse) {
//     console.log(key);
// }

// var myArray = [
//     'C9',
//     'Ngoc Khanh',
//     'Ha Noi'
// ]
// for (var key of myArray) {
    // console.log(key);
// }

// var myObject = {
//     class: 'C9',
//     address: 'Ngoc Khanh',
//     City: 'Ha Noi'
// }
// console.log(Object.values(myObject));
// for (var key of Object.values(myObject)) {
//     console.log(key);
// }
// console.log(Object.keys(myObject));
// for (var key of Object.keys(myObject)) {
    // console.log(key);
    // console.log(myObject[key]);
// }

// 101. Vòng lặp while
// var myArray = [
//     'Thai Binh',
//     'Ha Noi',
//     'Nam Dinh'
// ]
// var i = 0;
// while (i < myArray.length) {
//     console.log(myArray[i]);
//     i++;
// }

// 102. Vòng lặp do..while
// var i = 0
// var isSuccess = false;
// var account = 'tentaikhoan';
// var password = 'matkhau'
// console.log(!isSuccess)
// do {
//     i++;
//     var nhapAccount = prompt('Nhập tên tài khoản')
//     var nhapPassword = prompt('Nhập Mật khẩu')
//     if (nhapAccount === account) {
//         if (nhapPassword === password) {
//             alert('Đăng nhập thành công')
//             isSuccess = true

//         } else {
//             alert('Sai Mật khẩu')
//             do {
//                 var nhapPassword = prompt('Nhập lại Mật khẩu')
//                 if (nhapPassword === password) {
//                     alert('Đăng nhập thành công')
//                     isSuccess = true
//                 }
//             } while (nhapAccount !== password && !isSuccess);
//         }
//     } else if (i === 5) {
//         alert('Tài khoảng bạn bị khóa')

//     } else {
//         alert('Sai tài khoản' + '\nNếu sai 5 lần thì sẽ khóa tài khoản ' + i)

//     }


// } while (!isSuccess && i <= 5);

// var a = 0
// var b = false
// do {
//     a++
//     console.log(a);

//     if (true) {
//         b = true
//     }
// } while (!b && a < 3)

// 103. Break và Continue trong vòng lặp
// var i = 0
// while (true) {
//     i++;
//     console.log(i);
//     if (i >= 10) {
//         break;
//     }
// }

// for (var i = 0; i < 10; i++) {
//     if (i % 2 !== 0) {
//         continue;
//     }
//     console.log(i);
// }

// 104. Vòng lặp lồng nhau(Nested loop)
// var myArray = [
//     [1, 2],
//     [3, 4], 
//     [5, 45]
// ]
// for (var i = 0; i < myArray.length; i++) {
//     for (var j = 0; j < myArray[i].length; j++) {
//         console.log(myArray[i][j]);              // => Cách 1
//     }
// }
// for (var key in myArray) {
//     for (var keys in myArray[key]) {
//         console.log(myArray[key][keys]);         // => Cách 2
//     }
// }
// for (var key of myArray) {
//     for (var keys of key) {                      // => Cách 3
//         console.log(keys);
//     }
// }
// => Vòng for cha khi chạy lần đầu rồi tiếp theo đến vòng for con
    // for con sẽ chạy hết rồi đến for cha

// var array = [
//     [[1, 2, 3], [4, 5, 6]],
//     [[7, 8, 9], [10, 11, 12]],
//     [[13, 14, 15], [16, 17, 18]]
// ]
// for (var i = 0; i < array.length; i++) {
//     for (var i2 = 0; i2 < array[i].length; i2++) {
//         for (var i3 = 0; i3 < array[i][i2].length; i3++) {
//             console.log(array[i][i2][i3])
//         }
//     }
// }

// for (var i = 100; i >= 0; i -= 5) {
//     console.log(i);
// }


// NGÀY 08/08/2022

// var arr = ['a', 'b', 'c', 'a', 'c', 'b']
// console.log(Array.isArray([...(new Set(arr))])); // Loại bỏ các phần tử trùng lặp và Set sẽ chuyển thành mảng

// 106. Đệ quy
// 1. Xác định điểm dừng
// 2. Logic handle => Tạo ra điểm dừng

// function countDown(num) {
//     if (num > 0) {
//         console.log(num);
//         return countDown(num - 1)
//     }
//     return num
// }
// countDown(10)

// function lop(start, end, cb) {
//     if (start < end) {
//         cb(start);
//         return lop(start + 1, end, cb);     
//     }
// }
// var languages = ['JavaScript', 'PHP', 'Golang']
// lop(0, languages.length, function(index) {
//     console.log(index);
//     console.log(languages[index]);
// }) 

// Tính giai thừa
// Cách thường
// function giaiThua(x) {
//     var output = 1;
//     if (x > 0) {
//         for (var i = x; i > 0; i--) {
//             output *= i
//         }
//         return console.log(output);
//     } else {
//         return console.log('Vui lòng kiểm tra lại tham số');;
//     }
// }
// giaiThua(4)

// function giaithua(number){
//     if(number > 1){
//     return number * giaithua(number - 1);
//     }
//     return number;
// }
// console.log(giaithua(3));
        
// Cách đệ quy
// function giaiThua(x) {
//     if (x > 0) {
//         return x * giaiThua(x - 1)
//     }
//     return 6
// }
// console.log(giaiThua(2));
// lần 1: trả về là 2 * giaiThua(1)
// lần 2: trả về là 2 * 1 * giaiThua(0)
// lần 3: trả về là 2 * 1 * 6
// => kết quả là 12

