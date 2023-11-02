 

 const Btn = document.getElementById('btn');
 const Text =document.getElementById('text');

 Btn.addEventListener('click', () => {
    const change = document.getElementById('text');
    //console.log(change);
    console.log(change.textContent);
    change.textContent = 'ボタンが押されました';
  
  });

