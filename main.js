function startClassification() {
    navigator.mediaDevices.getUserMedia({ audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/hA0GguhBh/model.json',modelReady)
}

var dog = 0
var cat = 0
var tiger = 0
var cow = 0    
function modelReady() {
    classifier.classify(gotResults)
}

function gotResults(error,results) {
    
        if (error) {
          console.error(error);
        } else {
          console.log(results);
          random_number_r = Math.floor(Math.random() * 255) + 1;
          random_number_g = Math.floor(Math.random() * 255) + 1;
          random_number_b = Math.floor(Math.random() * 255) + 1;


          document.getElementById("sound_label").innerHTML = results[0].label;
    document.getElementById("count_label").innerHTML = "dog = " + dog + " , " +"cat = " + cat + " , " + "cow = " + cow + " , " + "tiger = " + tiger 
    document.getElementById("count_label").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_r+")";
    document.getElementById("sound_label").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_r+")";

    img=document.getElementById("img") ;


    if (results[0].label == "dog") {
        img.src = 'barking gif.gif';
        dog=dog+1

       
      } else if (results[0].label == "cat") {
        img.src = 'meowing gif.gif';
        cat=cat+1
        
        
      } else if (results[0].label == "cow") {
        img.src = 'mooing gif.gif';
        cow=cow+1
        
        
      }else{ img.src = 'roaring.gif';
      tiger=tiger+1
       
        
      }


        }

          

}

