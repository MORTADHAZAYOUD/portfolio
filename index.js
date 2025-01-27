let sections= document.querySelectorAll('section');
onscroll=function(){
    let scrollposition=document.documentElement.scrollTop;
    sections.forEach(section =>{
        if(scrollposition>=section.offsetTop -section.offsetHeight*0.25 && scrollposition<
            section.offsetTop + section.offsetHeight -section.offsetHeight*0.25){
                let currentId=section.attributes.id.value;
                removeactiveclass();
                addactiveclass(currentId);
            }
    })
}
let removeactiveclass=function(){
    document.querySelectorAll('nav a').forEach(el=>{
        el.classList.remove("active")
    })
}
let addactiveclass=function(currentId){
    let selector = `nav a[href="#${currentId}"]`;
    document.querySelector(selector).classList.add("active")
}
const html=document.getElementById("bhtml")
const htmltext=document.getElementById("html-text")
html.addEventListener("mouseover",event=>{
    console.log("mouse")
    htmltext.style.opacity=100
})
html.addEventListener("mouseleave",event=>{
    htmltext.style.opacity=0
})
const css=document.getElementById("bcss")
const csstext=document.getElementById("css-text")
css.addEventListener("mouseover",event=>{
    csstext.style.opacity=100
})
css.addEventListener("mouseleave",event=>{
    csstext.style.opacity=0
})
const js=document.getElementById("bjs")
const jstext=document.getElementById("js-text")
js.addEventListener("mouseover",event=>{
    jstext.style.opacity=100
})
js.addEventListener("mouseleave",event=>{
    jstext.style.opacity=0
})
const java=document.getElementById("bjava")
const javatext=document.getElementById("java-text")
java.addEventListener("mouseover",event=>{
    javatext.style.opacity=100
})
java.addEventListener("mouseleave",event=>{
    javatext.style.opacity=0
})
const python=document.getElementById("bpython")
const pythontext=document.getElementById("python-text")
python.addEventListener("mouseover",event=>{
    pythontext.style.opacity=100
})
python.addEventListener("mouseleave",event=>{
    pythontext.style.opacity=0
})
const cplus=document.getElementById("bcplus")
const cplustext=document.getElementById("cplus-text")
cplus.addEventListener("mouseover",event=>{
    cplustext.style.opacity=100
})
cplus.addEventListener("mouseleave",event=>{
    cplustext.style.opacity=0
})

const github=document.getElementById("bgithub")
const githubtext=document.getElementById("github-text")
github.addEventListener("mouseover",event=>{
    console.log("mouse")
    githubtext.style.opacity=100
})
github.addEventListener("mouseleave",event=>{
    githubtext.style.opacity=0
})
const git=document.getElementById("bgit")
const gittext=document.getElementById("git-text")
git.addEventListener("mouseover",event=>{
    console.log("mouse")
    gittext.style.opacity=100
})
git.addEventListener("mouseleave",event=>{
    gittext.style.opacity=0
})
const npm=document.getElementById("bnpm")
const npmtext=document.getElementById("npm-text")
npm.addEventListener("mouseover",event=>{
    console.log("mouse")
    npmtext.style.opacity=100
})
npm.addEventListener("mouseleave",event=>{
    npmtext.style.opacity=0
})
const vs=document.getElementById("bvs")
const vstext=document.getElementById("vs-text")
vs.addEventListener("mouseover",event=>{
    console.log("mouse")
    vstext.style.opacity=100
})
vs.addEventListener("mouseleave",event=>{
    vstext.style.opacity=0
})
const premier=document.getElementById("bpremier")
const premiertext=document.getElementById("premier-text")
premier.addEventListener("mouseover",event=>{
    console.log("mouse")
    premiertext.style.opacity=100
})
premier.addEventListener("mouseleave",event=>{
    premiertext.style.opacity=0
})
const after=document.getElementById("bafter")
const aftertext=document.getElementById("after-text")
after.addEventListener("mouseover",event=>{
    console.log("mouse")
    aftertext.style.opacity=100
})
after.addEventListener("mouseleave",event=>{
    aftertext.style.opacity=0
})


function showbar(){
    const sidebar=document.querySelector('.sidebar')
    sidebar.style.display='flex'
}
function hidebar(){
    const sidebar=document.querySelector('.sidebar')
    sidebar.style.display='none'
}
