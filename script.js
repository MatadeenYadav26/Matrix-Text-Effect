const para = document.querySelector("p")
const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
const text = para.innerText

para.addEventListener("mouseenter",() => {
    // console.log("Entered");
    
    setInterval(()=>{

        const str = text.split('').map((char,index)=> { 
            return characters.split("")[Math.floor(Math.random()*53) ]
        }).join("")
        
        para.innerText=str


    },30)
})


// notes:
// 1. .split("") : string ko array of characters me convert kardeta h , array of characters:- "aman" = ['a','m','a','n'];
//2..split(" ") : Conversion on basisi of space into array elements. "aman yadav don": ['aman' , 'yadav' , 'don']
//3. joins the elements of array to string : arr.join("") or arr.join(" "): join on basis of space.
 

