const joke=["Why do we tell actors to break a leg <br> <br>Because every play has a cast.","My name is little dancing man but you can call me dark and every day I do a jig from morning until dark. Fine lassies come from far and wide to watch me shake my touch and if they start to crowd me 1 yell 'ladies' please don't push!","Pappu went to a doctor to get a solution of loose motions. Doctor: tell me, what's your problem? Pappu: Suffering from unlimited free outgoing with different ringtones.","Manager: What is your qualification? Pappu: I'm Ph.D. Manager: What do you mean by Ph.D.? Pappu: Passed high school with difficulty.","Once Rajnikanth went to Switzerland and accidentally dropped his wallet in a building. Since then the building is known as 'Swiss Bank'","The best day for you in the whole year is April 1 because that's the day that suits you best.",
"Whenever you feel worthless, remember. You were once the quickest sperm cell.","Every new year’s I resolve to lose 20 pounds and I do. The problem is that I gain 30.",
"Wife: whenever we keep the money in the bags our son steals it, I don’t know what to do? Husband: Keep it in his books. I know he will never touch them!",
"A cute Nurse came for interview. Doctor: What salary do you expect? Nurse: Rs 10,000 Doctor was overjoyed and said: My pleasure. Nurse: With pleasure its Rs 25,000",
"New way of writing answers in exams. If you do not  know the answer, then put lines like this: |||||||||| and write below: 'Scratch here for ANSWERS",
"Seriously first time in Indian history. Latest funny event occurred Friends, Petrol is cheaper then Onions in India!",
"Husband and Wife had a Fight. Wife called Mom: He fought with me again, I am coming to you. Mom: No Sun, he must pay for his mistake, I am coming to stay with you!",
"Height of Shame. At bus stop a girl was standing with her face covered. A man on bike stops and says 'Let's have fun today!' Girl replies: Papa it's me!",
"One boy on his way to home with his mom after school, Saw a couple kissing on the road, He suddenly shouted and said look mom, They are fighting for CHEWING GUM."];
let len=joke.length;
console.log(len);
let num=Math.floor(Math.random()*len);
let num2=Math.floor(Math.random()*len);
let num3=Math.floor(Math.random()*len);
console.log(joke[num]);
document.getElementById("p-1").innerHTML=joke[num];
document.getElementById("p-2").innerHTML=joke[num2];
document.getElementById("p-3").innerHTML=joke[num3];
