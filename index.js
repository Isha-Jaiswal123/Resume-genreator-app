let inputfeilds=document.querySelector(".input-feild");
let output=document.querySelector(".output");

let projectdetails;
ClassicEditor
.create( document.querySelector( '#editor' ) )

.then(nEditor=>{
    projectdetails=nEditor;
})
.catch( error => {
    console.error( error );
} );


let acedmicde;
ClassicEditor
.create( document.querySelector( '#editor2' ) )
.then(nEditor=>{
    acedmicde=nEditor;
})
.catch( error => {
    console.error( error );
} );

let skilldetail;
ClassicEditor
.create( document.querySelector( '#editor3' ) )
.then(nEditor=>{
    skilldetail=nEditor;
})
.catch( error => {
    console.error( error );
} );


let contactdetails;
ClassicEditor
.create( document.querySelector( '#editor6' ) )
.then(nEditor=>{
    contactdetails=nEditor;
})
.catch( error => {
    console.error( error );
} );
let build=document.querySelector(".resume_build");

let inputshow=true;
function toggle(){
    if(inputshow){
        inputfeilds.style .display="none";
        inputshow=false;
        build.style.width="100vw";
        build.style.height="240vh";
        output.innerHTML=`
        <div class="hero">

        <h1 id="size1">${inputfeilds["name"].value}</h1>
        <h1 id="size2">${inputfeilds["title"].value}</h1>
        
        </div>
        
<div class="main">

<div class="left">
<h2>Objective</h2>
<p> ${inputfeilds["objective"].value}</p>

<h2>Skills</h2>
${skilldetail.getData()}

<h2>Achievements</h2>
<p> ${inputfeilds["achievements"].value}</p>

<h2>Contact</h2>
${contactdetails.getData()}
</div>
<div class="right">
<h2>Work Experience</h2>
<p> ${inputfeilds["workex"].value}</p>

<h2>Acedemic details</h2>
${acedmicde.getData()}

<h2>Projects</h2>
${projectdetails.getData()}
</div>
</div>
       
       
        `
    }else{
        inputfeilds.style .display="flex";
        inputshow=true;
        output.innerHTML="";
        
    }
}