async function mergePDFs() {
    const fileInput = document.getElementById('fileInput');
    const files = fileInput.files;

    if (files.length === 0) {
        alert('Please upload PDFs first.');
        return;
    }

    const mergedPdf = await PDFLib.PDFDocument.create();

    for (let i = 0; i < files.length; i++) {
        const arrayBuffer = await files[i].arrayBuffer();
        const pdf = await PDFLib.PDFDocument.load(arrayBuffer);
        const copiedPages = await mergedPdf.copyPages(pdf, pdf.getPageIndices());
        copiedPages.forEach(page => mergedPdf.addPage(page));
    }

    const mergedPdfFile = await mergedPdf.save();
    const blob = new Blob([mergedPdfFile], { type: 'application/pdf' });
    const url = URL.createObjectURL(blob);

    const downloadLink = document.getElementById('downloadLink');
    downloadLink.href = url;
    downloadLink.download = 'merged.pdf';
    downloadLink.style.display = 'block';
    downloadLink.innerText = 'Download Merged PDF';
}

async function cropPDF() {
    const fileInput = document.getElementById('fileInput');
    const files = fileInput.files;

    if (files.length === 0) {
        alert('Please upload PDFs first.');
        return;
    }

    const croppedPdf = await PDFLib.PDFDocument.create();

    for (let i = 0; i < files.length; i++) {
        const arrayBuffer = await files[i].arrayBuffer();
        const pdf = await PDFLib.PDFDocument.load(arrayBuffer);
        const pages = pdf.getPages();

        for (const page of pages) {
            const [newPage] = await croppedPdf.copyPages(pdf, [pdf.getPageIndex(page)]);
            newPage.setCropBox(0, 0, 220, 320); // Fixed crop size (example: 76mm x 120mm approx)
            croppedPdf.addPage(newPage);
        }
    }

    const croppedPdfFile = await croppedPdf.save();
    const blob = new Blob([croppedPdfFile], { type: 'application/pdf' });
    const url = URL.createObjectURL(blob);

    const downloadLink = document.getElementById('downloadLink');
    downloadLink.href = url;
    downloadLink.download = 'cropped.pdf';
    downloadLink.style.display = 'block';
    downloadLink.innerText = 'Download Cropped PDF';
}