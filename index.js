const PDFDocument = require('pdfkit');
const fs = require('fs');


const doc = new PDFDocument();

doc.pipe(fs.createWriteStream('output.pdf'));

//Title Text
doc
    .fontSize(25)
    .text('Dungeons and Dragons', 10, 10);


doc
    .initForm()
    .fontSize(12)
    .text("Character Name:", 30, 40)
    .formText("name",30, 50, 200, 30)
    //Character class and level
    .text("Class & Level", 300, 40)
    .formText("class_level", 300, 20, 100, 20)
    //Character Background
    .text("Background", 400, 40)
    .formText("Background", 400, 20, 100, 20)
    //Player Name
    .text("Player Name", 500, 40,{width: 100})
    .formText("player_name", 500, 20, 100, 20)
    //Character race
    .text("Race", 300, 90)
    .formText("race", 300, 60, 100, 20)
    //Character Alignment
    .text("Alignment", 400, 90)
    .formText("alignment", 400, 60, 100, 20)
    //Character experience
    .text("Experience Points", 500, 90, {width: 100})
    .formText("Experience", 500, 60, 100, 20)


//Character Stats
doc
    .fontSize(8)
    //Strength
    .text("Strength", 45, 100)
    .formText('Strength', 40, 110,40,40, {align:'center'})
    .formText('Strength-mod', 55, 150, 10, 10)
    //Dexterity
    .text("Dexterity", 45, 160)
    .formText('Dexterity', 40, 170,40,40, {align:'center'})
    .formText('Dext-mod', 55, 210, 10, 10)
    //Constitution
    .text("Constitution", 45, 220)
    .formText('Constitution', 40, 230,40,40, {align:'center'})
    .formText('Con-mod', 55, 270,10, 10)
    //Intelligence
    .text("Intelligence", 45, 280)
    .formText('Intelligence', 40, 290,40,40, {align:'center'})
    .formText('Intelligence-mod', 55, 330, 10, 10)
    //Wisdom
    .text("Wisdom", 45, 340)
    .formText('Wisdom', 40, 350,40,40, {align:'center'})
    .formText('wisdom-mod', 55, 390, 10, 10)
    //Charisma
    .text("Charisma", 45, 400)
    .formText('Charisma', 40, 410,40,40, {align:'center'})
    .formText('Charisma-mod', 55, 450, 10, 10)


    const opts = {
        backgroundColor: 'black',
        
      };
      
doc
    .fontSize(8)
    //Inspiration
    .text("Inspiration", 140, 110)   
    .formCheckbox('Checked', 120, 110, 10,10, opts)
    //Prof Bonus
    .text("Proficency Bonus", 140, 140,{width: 100})   
    .formText('Prof Bonus', 120, 130, 20, 20)

//Saving throws
doc
      .fontSize(8)
      //Strength Save
      .text("Strength", 160, 160)
      .formText("Strength-save", 140, 160, 20,10)
      .formCheckbox('strength-save-check', 120, 160, 10,10, opts)
      //Dex Save
      .text("Dexterity", 160, 175)
      .formText("Dexterity-save", 140, 175, 20,10)
      .formCheckbox('Dexterity-save-check', 120, 175, 10,10, opts)
      //Con Save
      .text("Constitution", 160, 190)
      .formText("Constitution-save", 140, 190, 20,10)
      .formCheckbox('Constitution-save-check', 120, 190, 10,10, opts)
      //Intelligence Save
      .text("Intelligence", 160, 205)
      .formText("Intelligence-save", 140, 205, 20,10)
      .formCheckbox('Intelligence-save-check', 120, 205, 10,10, opts)
      //Wisdom Save
      .text("Wisdom", 160, 220)
      .formText("Wisdom-save", 140, 220, 20,10)
      .formCheckbox('Wisdom-save-check', 120, 220, 10,10, opts)
      //Charisma Save
      .text("Charisma", 160, 235)
      .formText("Charisma-save", 140, 235, 20,10)
      .formCheckbox('Charisma-save-check', 120, 235, 10,10, opts)
      //Saving throws
      .text("Savinig Throws", 140, 250)


doc.end();