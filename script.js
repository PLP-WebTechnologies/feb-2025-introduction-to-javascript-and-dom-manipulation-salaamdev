// Change text content dynamically
document.getElementById('change-text-btn').addEventListener('click', () => {
    const heading = document.querySelector('h2#countries');
    heading.textContent = 'East African Nations';
});

// Add a new element dynamically
document.getElementById('add-element-btn').addEventListener('click', () => {
    const newParagraph = document.createElement('p');
    newParagraph.textContent = 'Welcome to the dynamic content section!';
    newParagraph.style.color = 'blue';
    document.getElementById('dynamic-content').appendChild(newParagraph);
});

// Remove the last added element
document.getElementById('remove-element-btn').addEventListener('click', () => {
    const dynamicContent = document.getElementById('dynamic-content');
    if (dynamicContent.lastChild) {
        dynamicContent.removeChild(dynamicContent.lastChild);
    }
});
