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
    .text("Character Name:", 100, 30)
    .formText("name", 100, 40, 200, 30)

doc.end();