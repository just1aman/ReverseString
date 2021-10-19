//create a fucntion that returns reverse of a string passed as input
//Example input": "Here we go"
//Expected Outout : "og ew ereh"

function reverseString(str)
{
  //check inputv
  var reverseStr = '';
    if(str && str.length>1 && typeof str == 'string')
    {
      
     const totalitems= str.length-1

     // console.log(totalitems)
        //logic to reverse string
      for(let i=totalitems; i>=0; i--)
       {

        // console.log(str[i])
          reverseStr = reverseStr.concat(str[i])
       } 
      //return reverse string
      
    }
    else
    {
      return "Input not in expected format"
    }
    //console.log(reverseStr)
return reverseStr
}

reverseString("My name is Aman")