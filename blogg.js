window.onload = () => {

    const foodTab = document.getElementById("foods");
    const homeTab = document.getElementById("home");
    const workoutTab = document.getElementById("workouts");
    const aboutTab = document.getElementById("about");
    const contactTab = document.getElementById("contact");
    const quizTab = document.getElementById("quiz");
    const nav = document.querySelector("nav");
    const navOption = nav.children
    
    
    // fruit class
    
    class Fruit{
        constructor(){
            this.details = {
                //your items
                1:["apple","apple.jpg","An apple is an edible fruit produced by an apple tree (Malus domestica). Apple trees are cultivated worldwide and are the most widely grown species in the genus Malus. The tree originated in Central Asia, where its wild ancestor, Malus sieversii, is still found today.<bh>Benefits of eating apple</bh><bp><b>Lowers high colesterol</b><b>Lowers high blood presure</b><b>Supports healthy immune system</b><b>Diabetes friendly</b><b>Helps in cancer preventation</b></bp><br>",["Iron","Vitamin c"]],
                2:["banana","Banana.jpg","A banana is an elongated, edible fruit – botanically a berry – produced by several kinds of large herbaceous flowering plants in the genus Musa. In some countries, bananas used for cooking may be called 'plantains', distinguishing them from dessert bananas.<bh>Benefits of eating banana</bh><bp><b>Moderate sugar levels</b><b>Improve digestive system</b><b>Helps in weight loss</b><b>Supports healthy heart</b><b>Contains powerfull antioxidants</b><b>Improve insulin sensitivity</b></bp><br>",["fiber","vitamin b6"]],
3:["avocado","avocado.jpg","The avocado, a tree likely originating from south-central Mexico, is classified as a member of the flowering plant family Lauraceae. The fruit of the plant, also called an avocado, is botanically a large berry containing a single large seed.<bh>Benefits of eating avocado</bh><bp><b>Helps in stress and anxiety</b><b>Promote satiety</b><b>Supports healthy digestion</b><b>More fiber and potasium</b></bp><br>",["fiber","pottasium"]],
4:["blueberry","blueberry.jpg","Blueberries are a widely distributed and widespread group of perennial flowering plants with blue or purple berries. They are classified in the section Cyanococcus within the genus Vaccinium. Vaccinium also includes cranberries, bilberries, huckleberries and Madeira blueberries.<bh>Benefits of eating blueberry</bh><bp><b>King of antioxidant foods</b><b>Reduces DNA damage</b><b>Prevent cholestrol damage</b><b>Lowers high blood presure</b><b>Maintain healthy bones</b><b>Prevent heart diseases</b></bp><br>",["calcium","fiber"]],
5:["orange","orange.jpg","The orange is the fruit of various citrus species in the family Rutaceae; it primarily refers to Citrus × sinensis, which is also called sweet orange, to distinguish it from the related Citrus × aurantium, referred to as bitter orange.<bh>Benefits of eating orange</bh><bp><b>Protect cells</b><b>Helps in preparation of collagen</b><b>Supports iron absorption</b><b>Boost immunity power</b></bp><br>",["immunity","tasty"]]
            }
        }
        create(parent,sr){
            let sec = document.createElement("section");
            parent.appendChild(sec);
            let h2 = document.createElement("h2");
            sec.appendChild(h2);
            let hr = document.createElement("hr");
            sec.appendChild(hr);
            let img = document.createElement("img");
            sec.appendChild(img);
            let tags = document.createElement("tags");
            sec.appendChild(tags);
            for(let i in fruit.details[sr][3]){
                let tag = document.createElement("tag");
                tags.appendChild(tag);
                tag.innerHTML = fruit.details[sr][3][i];
            }
            let p = document.createElement("p");
            sec.appendChild(p)
            
            h2.innerHTML = fruit.details[sr][0];
            img.src = fruit.details[sr][1];
            function reader2(){
            for(let i=0;i<100;i++){
             if(fruit.details[sr][2].length > 100){
                p.innerHTML += fruit.details[sr][2][i];
                }else{
                    p.innerHTML = fruit.details[sr][2];
                }
            }
            if(fruit.details[sr][2].length > 100){
                p.innerHTML += ".......";
                let button = document.createElement("button");
                button.innerHTML = "Read more";
                p.appendChild(button)
                button.addEventListener("click",() => {
                    p.innerHTML = fruit.details[sr][2];
                    let button2 = document.createElement("button");
                    button2.innerHTML = "Show less";
                    p.appendChild(button2);
                    
                    button2.addEventListener("click",() => {
                        p.innerHTML = "";
                        reader2();
                    })
                })
            }
        }
        reader2();
        }
    }
    
    
    // workout class
    
    class Workout{
        constructor(){
            this.details = {
                //workout sr no -> name -> image link -> description -> tags (array)
                1:["plank","plank.jpg","The plank is an isometric core strength exercise that involves maintaining a position similar to a push-up for the maximum possible time.<bh>Steps to do plank</bh><bp><b>Take push up position</b><b>Bend your arms from elbows</b><b>tighten your abs</b><b>Keep your body straight from head to feet</b><b>Stay in this position as much time you can</b></bp><br>",["arms","abs"]],
                2:["knee crunch","knee crunch.jpg","Lay down on the floor in a relaxed position with your knees up and palms lightly on either side of your head. Raise your legs perpendiculat to the floor and then bend at the knees so the calves are parallel to the floor.<bh>Benefits of doing knee crunches</bh><bp><b>Reduce belly fat</b><b>Tighten though</b><b>Tighten abdomen (abs)</b><b>Tight muscles</b><b>Loss weight if overweight</b></bp><br>",["legs","abs"]],
                3:["forward lunge","forward lunge.jpg","Go easy on your knees with this lunge. Stand with feet hip-width apart, engage your core, and take a big step backward. Activate your glutes as you bend front knee to lower your body so back knee lightly taps the floor while keeping upper body upright. Drive front heel into the floor to return to starting position.<bh>Benefits of doing forward lunged</bh><bp><b>weight loss</b><b>strong legs</b><b>healthy knees</b><b>reduce belly fat</b></bp><br>",["fat","legs"]],
                4:["Burpee","brupee.jpg","The burpee, a squat thrust with an additional stand between reps, is a full body exercise used in strength training. The movement itself is primarily an anaerobic exercise, but when done in succession over a longer period can be utilized in as an aerobic exercise.<bh>Benefits of doing burpee</bh><bp><b>weight loss</b><b>reduce belly fat</b><b>strong arms</b><b>good leg muscles</b><b>improve stamina</b></bp>",["weight","arms"]],
                5:["Bent over row","bent over row.jpg","A bent-over row is a weight training exercise that targets a variety of back muscles. Which ones are targeted varies on form. The bent over row is often used for both bodybuilding and powerlifting. It is a good exercise for increasing strength and size.",["weight","waist"]]
                
            }
        }
        create(parent,sr){
            let sec = document.createElement("section");
            parent.appendChild(sec);
            let h2 = document.createElement("h2");
            sec.appendChild(h2);
            let hr = document.createElement("hr");
            sec.appendChild(hr);
            let img = document.createElement("img");
            sec.appendChild(img);
            let tags = document.createElement("tags");
            sec.appendChild(tags);
            for(let i in workout.details[sr][3]){
                let tag = document.createElement("tag");
                tags.appendChild(tag);
                tag.innerHTML = workout.details[sr][3][i];
            }
            let p = document.createElement("p");
            sec.appendChild(p)
            
            h2.innerHTML = workout.details[sr][0];
            img.src = workout.details[sr][1];
            function reader(){
            for(let i=0;i<100;i++){
             if(workout.details[sr][2].length > 20){
                p.innerHTML += workout.details[sr][2][i];
                }else{
                    p.innerHTML = workout.details[sr][2];
                }
            }
            if(workout.details[sr][2].length > 100){
                p.innerHTML += ".......";
                let button = document.createElement("button");
                button.innerHTML = "Read more";
                p.appendChild(button)
                button.addEventListener("click",() => {
                    p.innerHTML = workout.details[sr][2];
                    let button2 = document.createElement("button");
                    button2.innerHTML = "Show less";
                    p.appendChild(button2);
                    
                    button2.addEventListener("click",() => {
                        p.innerHTML = "";
                        reader();
                    })
                })
            }
        }
        reader();
      }
    }
    
    
    // quiz class
    
    class Quiz{
        constructor(){
            this.details = {
                1:["How much time should we sleep a night ?",["10-12 hrs","7-9 hrs","4-6 hrs","no need"],1],
2:["Which of the following nutrient is best for healthy immunity system ?",["Phosphate","Iron","Calcium","Vitamin C"],3],
3:["Are fast foods good for health ?",["Yes","No","May me","Sometimes"],1],
4:["What should should be your first step if a small piece of grass goes in your eye ?",["wash with clean water","rub eyes roughly","cry out loud","go to doctor"],0],
5:["Is poliomyelitis (polio) a communicable disease ?",["yes","no","slightly","not a disease"],0]
            }
        }
        create(parent,sr){
            let sec = document.createElement("section");
            parent.appendChild(sec);
            let que = document.createElement("que");
            sec.appendChild(que);
            let opt1 = document.createElement("opt");
            sec.appendChild(opt1);
            let opt2 = document.createElement("opt");
            sec.appendChild(opt2);
            let opt3 = document.createElement("opt");
            sec.appendChild(opt3);
            let opt4 = document.createElement("opt");
            sec.appendChild(opt4);
            
            que.innerHTML = quiz.details[sr][0];
            opt1.innerHTML = quiz.details[sr][1][0];
            opt2.innerHTML = quiz.details[sr][1][1];
            opt3.innerHTML = quiz.details[sr][1][2];
            opt4.innerHTML = quiz.details[sr][1][3];
            let opts = [opt1,opt2,opt3,opt4];
            
for(let i in opts){
opts[i].addEventListener("click",(e) => {

for(let j in opts){
    opts[j].style.backgroundColor = "white";
    opts[j].style.color = "black";
}

if(e.target == opts[quiz.details[sr][2]]){
    e.target.style.backgroundColor = "blue";
    e.target.style.color = "white";
}else{
    e.target.style.backgroundColor = "red";
    e.target.style.color = "white";
    opts[quiz.details[sr][2]].style.color = "white";
    opts[quiz.details[sr][2]].style.backgroundColor = "green";
    navigator.vibrate(100)
}

                })
            }
        
        }
    }
    
    
    // switching tabs
    // tabs -> home,foods,workout,about & contact
    
    let currentTab = homeTab;
    const switchTab = () => {
        currentTab.style.display = "none";
        for(let i=1;i<=6;i++){
            navOption[i].style.color = "white";
        }
        event.target.style.color = "red";
        document.getElementById(""+event.target.innerHTML+"").style.display = "block";
        currentTab = document.getElementById(""+event.target.innerHTML+"");
        nav.style.display = "none";
    }
    
    for(let i=1;i<=6;i++){
        navOption[i].onclick = switchTab;
    }
    
    
    // setting foods tab
    
    const fruit = new Fruit();
    let sr = 1;
    
    const interval = setInterval(function(){
        if(sr >= Object.keys(fruit.details).length){
            clearInterval(interval)
        }
        fruit.create(foodTab,sr);
        sr+=1;
    },10)
    
    
    // setting workouts tab
    
    const workout = new Workout();
    let sr2 = 1;
    
    const interval2 = setInterval(function(){
        if(sr2 >= Object.keys(workout.details).length){
            clearInterval(interval2)
        }
        workout.create(workoutTab,sr2);
        sr2+=1;
    },10)
    
    
    // setting quiz tab
    
    const quiz = new Quiz();
    let sr3 = 1;
    
    const interval3 = setInterval(function(){
        if(sr3 >= Object.keys(quiz.details).length){
            clearInterval(interval3)
        }
        quiz.create(quizTab,sr3);
        sr3+=1;
    },10)
    
    
    // setting up the home page (tab)
    
    let foodno = 1;
    let workoutno = 1;
    let quizno = 1;
    let whichitem = "workout";
    
    const interval4 = setInterval(function(){
        if(foodno > Object.keys(fruit.details).length && workoutno > Object.keys(workout.details).length && quizno > Object.keys(quiz.details).length){
            clearInterval(interval4)
        }
        else{
            if(whichitem == "workout"){
                workout.create(homeTab,workoutno);
                workoutno += 1;
                if(foodno-1 < Object.keys(fruit.details).length){
                    whichitem = "food";
                }else if(quizno-1 < Object.keys(quiz.details).length){
                    whichitem = "quiz";
                }
            }
            else if(whichitem == "food"){
                fruit.create(homeTab,foodno);
                foodno += 1;
                if(quizno-1 < Object.keys(quiz.details).length){
                    whichitem = "quiz";
                }else if(workoutno-1 > Object.keys(workout.details).length){
                    whichitem = "workout";
                }
            }
            else if(whichitem == "quiz"){
                quiz.create(homeTab,quizno);
                quizno += 1;
                if(workoutno-1 < Object.keys(workout.details).length){
                    whichitem = "workout";
                }else if(foodno-1 > Object.keys(fruit.details).length){
                    whichitem = "food";
                }
            }
        }
    },10)
    
    
    // setting menu
    
    const menu = document.getElementById("menu");
    menu.onclick = () => {
        nav.style.display = "block";
    }
    const cross = document.getElementById("cross");
    cross.onclick = () => {
        nav.style.display = "none";
    }
    
}