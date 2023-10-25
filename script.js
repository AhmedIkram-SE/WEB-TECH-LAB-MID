const remove_but1=document.getElementById('rem1');
const answer1=document.getElementById('ans1');
const add_but1=document.getElementById('first_down');
const active1=document.getElementById('first-active');

const active2=document.getElementById('second_active')
const remove_but2=document.getElementById('rem2');
const add_but2=document.getElementById('second_down');
const answer2=document.getElementById('ans2');

const active3=document.getElementById('third_active')
const remove_but3=document.getElementById('rem3');
const add_but3=document.getElementById('third_down');
const answer3=document.getElementById('ans3');

const active4=document.getElementById('fourth_active')
const remove_but4=document.getElementById('rem4');
const add_but4=document.getElementById('fourth_down');
const answer4=document.getElementById('ans4');

const active5=document.getElementById('fifth_active')
const remove_but5=document.getElementById('rem5');
const add_but5=document.getElementById('fifth_down');
const answer5=document.getElementById('ans5');



remove_but1.addEventListener('click',()=> {
    active1.remove();
    /*answer1.remove();
    remove_but.remove();
    active.append(add_but);
    active.classList.remove('active');
    active.classList.add('faq1');*/

})
add_but1.addEventListener('click',()=>{
    active1.append (answer1);
    active1.classList.add('active');
    active1.classList.remove('faq1');
    add_but.remove()
    active1.append(remove_but);
    
})
remove_but2.addEventListener('click',()=> {
    active2.remove();})

add_but2.addEventListener('click',()=>{
    
    active2.append (answer2);
    active2.classList.add('active');
    active2.classList.remove('faq1');
    add_but2.remove()
    active2.append(remove_but);
        
})

remove_but3.addEventListener('click',()=> {
    active3.remove();})

add_but3.addEventListener('click',()=>{
    
    active3.append (answer3);
    active3.classList.add('active');
    active3.classList.remove('faq1');
    add_but3.remove()
    active3.append(remove_but);
        
})

remove_but4.addEventListener('click',()=> {
    active4.remove();})

add_but4.addEventListener('click',()=>{
    
    active4.append (answer4);
    active4.classList.add('active');
    active4.classList.remove('faq1');
    add_but4.remove()
    active4.append(remove_but);
        
})

remove_but5.addEventListener('click',()=> {
    active5.remove();})

add_but5.addEventListener('click',()=>{
    
    active5.append (answer5);
    active5.classList.add('active');
    active5.classList.remove('faq1');
    add_but5.remove()
    active5.append(remove_but);
        
})


