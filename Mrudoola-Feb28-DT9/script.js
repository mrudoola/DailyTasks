function wordCount(str) 
{
    str = str.replace(/(^\s*)|(\s*$)/gi,"");
    str = str.replace(/[ ]{2,}/gi," ");
    str = str.replace(/\n /,"\n");
    count = str.split(' ').length;
    return "Words:"+count;
}

function countCharacters()
{
    var numChars = "CodeSpeedy is a great platform for $%klds$- self-learning".match(/[a-zA-Z]/g).length;
    console.log("Characters:"+numChars);
} 
function countSpecialChar()
{
    var sectionToCheck  = "CodeSpeedy is a great platform for $%klds$- self-learning"; 
    var splCharacters = sectionToCheck.match(/[@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/g);
    console.log("special characters:"+splCharacters.length);//count
}
function countSpaces()
{
    var checkSpace = "CodeSpeedy is a great platform for $%klds$- self-learning"
    var spaces = (checkSpace.match(/ /g) || []).length;
    console.log("Spaces:"+spaces)
}

console.log(wordCount("CodeSpeedy is a great platform for $%klds$- self-learning"));  // 7
countCharacters();
countSpecialChar();
countSpaces();