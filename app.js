// getting buttons & other elements

var fonts = document.getElementById('fonts')
var fontSize = document.getElementById('fontSize')
var delText = document.getElementById('delText')
var color = document.getElementById('color')
var bgColor = document.getElementById('bgColor')
var aLeft = document.getElementById('aLeft')
var aCenter = document.getElementById('aCenter')
var aRight = document.getElementById('aRight')
var bold = document.getElementById('bold')
var italic = document.getElementById('italic')
var underline = document.getElementById('underline')
var textarea = document.getElementById('textarea')


// font family
fonts.addEventListener('click',()=>{
    textarea.style.fontFamily = fonts.value
})

// font size
fontSize.addEventListener('click',()=>{
     textarea.style.fontSize = fontSize.value+'px'
})

// line in text
delText.addEventListener('click',()=>{
    if(textarea.style.textDecoration == 'line-through'){
        textarea.style.textDecoration = 'none' 
    }
    else{
        textarea.style.textDecoration = 'line-through'
    }
})

// color text
color.addEventListener('change',()=>{
     textarea.style.color = color.value   
})

// background color text
bgColor.addEventListener('change',()=>{
    textarea.style.backgroundColor = bgColor.value   
})


// text align left
aLeft.addEventListener('click',()=>{
    textarea.style.textAlign = 'left'
})


// text align center
aCenter.addEventListener('click',()=>{
    textarea.style.textAlign = 'center'
})


// text align right
aRight.addEventListener('click',()=>{
    textarea.style.textAlign = 'right'
})

// bold text
bold.addEventListener('click',()=>{
    if(textarea.style.fontWeight == 'bold'){
        textarea.style.fontWeight = 'normal'
    }
    else{
        textarea.style.fontWeight = 'bold'
    }
})

// italic text
italic.addEventListener('click',()=>{
    if(textarea.style.fontStyle == 'italic'){
        textarea.style.fontStyle = 'normal'
    }
    else{
        textarea.style.fontStyle = 'italic'
    }
})


// underline text
underline.addEventListener('click',()=>{
    if(textarea.style.textDecoration == 'underline'){
        textarea.style.textDecoration = 'none'
    }
    else{
        textarea.style.textDecoration = 'underline'
    }
})
