// =====  exercise ====

// query 1

for (let i = 1; i <= 10; i++)
 {
    result = 9 * i;
    console.log("9 x",i.toString() ,"->", result);
 }

// query 2

var word = "madam"
var isPalindrome = true;

word = word.toLowerCase();
//remove all spaces
word = word.replace(/\s+/g, '');

for (let i = 1; i < (word.length / 2) - 1; i++)
{
    if (word.charAt(i) !== word.charAt(word.length - 1 - i))
    {
        isPalindrome = false;
        break; 
    }
}
if(isPalindrome)
{
    console.log(word, "is a palindrome") 
}
else
{
    console.log(word, "is not a palindrome")
}

// easier way to understand

var word = "madam";
var tempWord = "";
var isPalindrome = true;

word = word.toLowerCase();

for (let i = (word.length-1); i >= 0; i--)
{
    tempWord += word[i];
}
console.log(tempWord);

if (tempWord === word)
{
   isPalindrome = true;
}
else
{
   isPalindrome = false;
}

if(isPalindrome)
{
    console.log(word, "is a palindrome") 
}
else
{
    console.log(word, "is not a palindrome")
}

// query 3

var num_cm = 100000;
var num_km = Math.floor(num_cm/ 100000);

console.log(num_cm, "cm -->",  num_km, "km" );

// query 4

var bal = 1000;
var string_bal = String(bal);
var formatted_bal = "";
var counter = 1;
var result = '';

for (var i = string_bal.length - 1; i >= 0; i--)
    {
        if (counter === 3 && i !==0)
        {
            formatted_bal += string_bal[i] + '.';
            counter = 1;
        }
        else
        {
            formatted_bal += string_bal[i];
            counter +=1;
        }

    }

for (var i = formatted_bal.length -1; i>= 0; i--)
    {
        result += formatted_bal[i];
    }

var str_format = "RP." + result + ",00";

console.log(str_format);

// query 5

var str = "Hello World";
var search_str = "ell";
var temp_str = "";

for (let i = 0; i < str.length; i++)
{
    let found = false;
    for (let j = 0; j < search_str.length; j++) 
    {
        if (str[i + j] !== search_str[j])
        {
            found = false;
            break;
        }
       //loops again checking if the next char of str == search str
        found = true;
    }
    if (!found)
    {
        temp_str += str[i];
    }
    else
    {
        //skips the deleted characters
        i += search_str.length - 1;
    }
}

console.log(temp_str);

// query 6 

var word = "hello world"
var word2 = ""

for (var i = 0; i < word.length; i++)
    {
        if (i === 0 || word[i-1] === " ")
        {
            word2 += word[i].toUpperCase();
        }
        else
        {
            word2 += word[i];
        }
    }
console.log(word2);

// query 7

var word = "hello world";
var word2 = "";

for (var i = word.length - 1; i >= 0; i--)
    {
        word2 += word[i];
    }

console.log(word2);

// query 8

var word = "The QuiCk BrOwN Fox";
var word2 = "";

for (var i = 0; i <= word.length -1; i++)
    {
        // ascii code dex of uppercase is less than 90
        if (word.charCodeAt(i) <= 90)
        {
            word2 += word[i].toLowerCase();
        }
        else 
        {
            word2 += word[i].toUpperCase();
        }
    }
    
    console.log( word , "----->", word2);

// query 9

var num1 = 42;
var num2 = 27;
var largest;

if (num1 > num2)
{
    largest = num1;
}
else
{
    largest = num2;
}


console.log("The largest number is: " + largest);

// query 10

var num1 = 42;
var num2 = 27;
var num3 = 18;
var temp = 0;

if (num3 > num1) {
    temp = num1;
    num1 = num3;
    num3 = temp;

    if (num1 > num2) {
        temp = num1;
        num1 = num2;
        num2 = temp;
    }
} else {
    if (num3 > num2) {
        temp = num3;
        num3 = num2;
        num2 = temp;
    }
    if (num2 > num1) {
        temp = num1;
        num1 = num2;
        num2 = temp;
    }
}

console.log("sorting from lowest to highest", num3, num2, num1);

// query 11

var data = "data";
var result;

if (typeof data === 'string')
    {
        result = 1;
        console.log("data is :", data);
        console.log("data is a string :", result);
    }
else if (typeof data === 'number')
    {
        console.log("data is :", data);
        result = 2;
        console.log("data is a number :", result);
    }
else
{
    result = 3
    console.log("data is :", data);
    console.log("data is a other data types :", result);
}

// query 12

var string = "An apple a day keeps the doctor away";
var modified_string = "";

for (var i = 0; i < string.length-1; i++)
    {
        if(string[i] == 'a' || string[i] == 'A')
            {
                modified_string += "＊";
            }
        else
        {
            modified_string += string[i];
        }
    }







console.log(modified_string);
