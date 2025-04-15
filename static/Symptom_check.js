// Handle Age Form Submission
let main = document.querySelector("main");
let age_form = document.querySelector(".age-form");
let age_popup = document.querySelector(".age-popup");
let age_para = document.querySelector("#age-para");
let submit_age = document.querySelector("#pop-submit");
let symptoms = document.querySelector(".symptom-selection");
document.getElementById('age-input-form').addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent form from refreshing the page
    const age = document.getElementById('user-age').value;
    if (age<40) {
        age_form.style.display = "none";
        age_popup.style.visibility = "visible";
    } else {
        age_form.style.display = "none";
        age_para.innerText = "Breast Cancer risk increase with age. Please ensure reguler check-ups.";
        age_popup.style.visibility = "visible";
    }
});
 submit_age.addEventListener('click',()=>{
    age_popup.style.visibility = "hidden";
    symptoms.style.display = "block";
 });

 const selectsymp = new Set();
 let imgs = document.querySelectorAll("img");
 imgs.forEach((img) =>{
    img.addEventListener('click',()=>{
        const symalt = img.alt;
        if(selectsymp.has(symalt)){
            selectsymp.delete(symalt);
            img.style.filter = "none";
        }
        else{
            selectsymp.add(symalt);
            img.style.filter = "grayscale(100%)";
        }
     });
 });
let sym_submit = document.querySelector("#submit-symptoms");
sym_submit.addEventListener("click",()=>{
    const normal = ["Breast Pain", "Fever", "Family History"];
    const check_normal = Array.from(selectsymp).some(x => normal.includes(x));
    const check_notnormal = Array.from(selectsymp).some(x => !normal.includes(x));
    if(check_normal && check_notnormal){    
        window.location.href = "/Need_MRI";        
    }
    else if(check_normal || selectsymp.size===1){
        window.location.href = '/self';
    }
    else if(check_notnormal){
        window.location.href = "/Need_MRI";
    }
    console.log(Array.from(selectsymp).join(', '));
    console.log((selectsymp));
});