
 

 const Btn = document.getElementById('btn');
 const Text =document.getElementById('text');



    Btn.addEventListener('click', () => {
    const change = document.getElementById('text');

    setTimeout(() => {     
    console.log(change.textContent);
    change.textContent = 'ボタンが押されました';
}, 2000);
  
  });


