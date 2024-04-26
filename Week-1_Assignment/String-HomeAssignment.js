let str_1 = "Hello World";
let char_1 = str_1.split(' ');
console.log(char_1[char_1.length-1].length);


let str_2 = "fly me  to the moon";
let char_2 = str_2.trim().split(' ');
console.log(char_2[char_2.length-1].length);


function isAnagram(str_3, str_4) {
    trim_Str3 = str_3.trim().toLowerCase().split('').sort().join('');
    trim_Str4 = str_4.trim().toLowerCase().split('').sort().join('');
    if(trim_Str3==trim_Str4){
        return true;
    }else{
        return false;
    }
}

console.log(isAnagram('hello', 'world'));

console.log(isAnagram('listen', 'silent'));