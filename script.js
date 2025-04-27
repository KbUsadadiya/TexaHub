
async function mergeAndCrop() {
    const { PDFDocument } = PDFLib;
    const files = document.getElementById('file-upload').files;

    if (files.length === 0) {
        alert('Please upload at least one PDF file.');
        return;
    }

    const mergedPdf = await PDFDocument.create();

    for (let file of files) {
        const arrayBuffer = await file.arrayBuffer();
        const pdf = await PDFDocument.load(arrayBuffer);
        const copiedPages = await mergedPdf.copyPages(pdf, pdf.getPageIndices());
        copiedPages.forEach((page) => {
            // Crop setting: fixed size (Flipkart Label Size)
            page.setCropBox(0, 0, 215, 340); // ~76mm x 120mm (in points)
            mergedPdf.addPage(page);
        });
    }

    const pdfBytes = await mergedPdf.save();

    const blob = new Blob([pdfBytes], { type: 'application/pdf' });
    const link = document.getElementById('download-link');
    link.href = URL.createObjectURL(blob);
    link.download = 'merged-cropped.pdf';
    link.style.display = 'block';
    link.textContent = 'Download Merged & Cropped PDF';
}
