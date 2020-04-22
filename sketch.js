input, button, greeting, radio, email, mail,key,emailid, voteNumber = 0
   index;

 function setup() {
     createCanvas(600, 600);


     input = createInput();
     input.position(650, 155);
     emailid = createElement('h4',"Name:");
     emailid.position(585,80);

     email = createInput();
     email.position(650, 100);
     key = createElement('h4',"Email.id:")
     key.position(585,140);

     text = createElement('h1', "COVID-19 - SURVEY");
     text.position(600, 5);

     question1 = createElement('h3', "Q1. Do you think lockdown will prevent the spread of COVID-19?");
     question1.position(470, 200)
     radio = createRadio();
     radio.position(470, 260)
     radio.option('Yes');
     radio.option('No');

 question2 = createElement('h3', "Q2. Would you be willing to contribute a small amount for a family that has been affected?");
 question2.position(470, 300)
 radio1 = createRadio();
 radio1.position(470, 350)
 radio1.option('Yes');
 radio1.option('No');

 question3 = createElement('h3', "Q3. How much per family would you be willing to pay?");
 question3.position(470, 400)
 radio2 = createRadio();
 radio2.position(470, 460)
 radio2.option('Rs.2000');
 radio2.option('Rs.2000 - 3000');
 radio2.option('Rs.3000 - 5000');
 radio2.option('Rs.5000 and above');
 radio2.option('Not at all')

 button = createButton('Submit');
 button.position(700, 600);
 button.mousePressed(greet);

 greeting = createElement('h2', ' Type your name in the input box');
 greeting.position(600, 105);

     mail = createElement('h2', 'Put your email id in the below input box');
     mail.position(600, 200);

     textAlign(CENTER);
     textSize(50);
 }
