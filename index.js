const PDFDocument = require('pdfkit');
const fs = require('fs');


const doc = new PDFDocument();

doc.pipe(fs.createWriteStream('output.pdf'));

doc
    .fontSize(25)
    .text('Dungeons and Dragons', 10, 50);


doc
    .initForm()
    .fontSize(12)
    .text("Character Name:", 100, 120)
    .formText("name", 100, 90, 200, 30)

doc.end();