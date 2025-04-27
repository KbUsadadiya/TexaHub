function mergeAndCrop() {
    const fileInput = document.getElementById('fileInput');
    if (fileInput.files.length === 0) {
        alert('Please upload at least one PDF file.');
        return;
    }

    // Simulated download link (In production, you would merge PDFs server-side)
    const downloadLink = document.getElementById('downloadLink');
    downloadLink.style.display = 'block';
    downloadLink.href = '#'; // Replace with actual file URL after processing
    downloadLink.download = 'merged-cropped.pdf';
    downloadLink.textContent = 'Click here to Download';
    alert('Simulated Merge and Crop done. Ready for download.');
}
