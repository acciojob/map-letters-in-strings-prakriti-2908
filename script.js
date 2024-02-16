//your JS code here. If required.
function mapLetters(str){
    let obj = {};
    for(let i = 0; i < str.length; i++){
        let char = str.charAt(i);
        if(obj[char]){
            obj[char].push(i);
        } else {
            obj[char] = [i];
        }
    }
    return obj;
}