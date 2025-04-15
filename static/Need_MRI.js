document.getElementById('search-mri').addEventListener('click', () => {
    // Open Google Maps with a search for MRI centers near the user's location
    window.open('https://www.google.com/maps/search/MRI+center+near+me/', '_blank');
});

document.getElementById('go-back').addEventListener('click', () => {
    window.history.back();
});

document.getElementById('go-mri-analysis').addEventListener('click', () => {
    // Redirect to the MRI analysis page
    window.location.href = '/MRI_Analysis';
});

