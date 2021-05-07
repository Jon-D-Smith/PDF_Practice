const PDFDocument = require('pdfkit');
const fs = require('fs');


const doc = new PDFDocument();

doc.pipe(fs.createWriteStream('output.pdf'));

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
doc.end();