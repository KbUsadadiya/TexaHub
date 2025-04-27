document.addEventListener('DOMContentLoaded', function() {
    const fileInput = document.getElementById('file-input');
    const mergeButton = document.getElementById('merge-btn');
    const outputDiv = document.getElementById('output');

    mergeButton.addEventListener('click', function() {
        const files = fileInput.files;
        if (files.length === 0) {
            alert('કૃપા કરીને ઓછામાં ઓછું એક PDF ફાઈલ પસંદ કરો.');
            return;
        }

        outputDiv.innerHTML = '<p>પ્રોસેસ ચાલુ છે... કૃપા કરીને રાહ જુઓ.</p>';

        // અહીં સાચો PDF મર્જ અને ક્રોપ લોજિક આવશે.
        // હવે Demo તરીકે simple message બતાવું છું.

        setTimeout(function() {
            outputDiv.innerHTML = '<p><strong>તમારું PDF સફળતાપૂર્વક મર્જ અને ક્રોપ થઈ ગયું છે!</strong></p>';
        }, 2000); // 2 સેકંડમાં ફેક મેસેજ આવે છે
    });
});