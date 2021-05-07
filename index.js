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
    .formText('Strength', 40, 110,40,40)
    //Dexterity
    .text("Dexterity", 45, 160)
    .formText('Dexterity', 40, 170,40,40)
    //Constitution
    .text("Constitution", 45, 220)
    .formText('Constitution', 40, 230,40,40)
    //Intelligence
    .text("Intelligence", 45, 280)
    .formText('Intelligence', 40, 290,40,40)
    //Wisdom
    .text("Wisdom", 45, 340)
    .formText('Wisdom', 40, 350,40,40)
    //Charisma
    .text("Charisma", 45, 400)
    .formText('Charisma', 40, 410,40,40)


doc
    .fontSize(8)
    //Inspiration
    .text("Inspiration", 175, 110)
    .formAnnotation("Inspiration","combo", 120, 110, 40,40, {select: ["Yes", "No"]} )
    

doc.end();