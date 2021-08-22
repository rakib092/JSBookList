const title=document.querySelector('#title');
const author=document.querySelector('#author');
const year=document.querySelector('#year');
const btnStyle=document.querySelector('.btn');
const bookList=document.querySelector('#book-list');

btnStyle.addEventListener('click',function(e){
    e.preventDefault();
    if(title.value=='' && author.value=='' && year.value==''){
        alert('Enter a value');
    }else{
        const newRow=document.createElement('tr');
        const newTittle=document.createElement('th');
        newTittle.innerHTML=title.value;
        newRow.appendChild(newTittle);

        const newAuthor=document.createElement('th');
        newAuthor.innerHTML=author.value;
        newRow.appendChild(newAuthor);
        
        const newYear=document.createElement('th');
        newYear.innerHTML=year.value;
        newRow.appendChild(newYear);

        bookList.appendChild(newRow);

    }
});
