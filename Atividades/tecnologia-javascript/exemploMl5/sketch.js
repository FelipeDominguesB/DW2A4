
const classifier = ml5.imageClassifier('MobileNet', carregou);

function carregou() {
  console.log('Modelo carregado com sucesso!');
}

function classifyImage()
{
  classifier.classify(document.getElementById('image'), (err, results) => {
    let tableBody = document.querySelector('tbody');
    tableBody.innerHTML = '';
    
    results.forEach(element => {
        tableBody.innerHTML += `<tr><td>${element.label}</td><td>${element.confidence}</td></tr>`     
    });

    document.querySelector('table').style.display = 'table'
  });

}



document.querySelector('input').addEventListener('change', (e) =>{

    let photo = e.target.files;
   
    if(FileReader && photo)
    {
      
      var fr =new FileReader();
      fr.onload = () =>{ 
        
        document.querySelector('#image').src = fr.result;
        document.querySelector('#image').style.display = 'block';
        classifyImage();
      }
      fr.readAsDataURL(photo[0]);
    }


});