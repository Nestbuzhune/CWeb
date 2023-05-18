const selfClosing = /<\w+\s*(\w+=".*"\s*)*\/>/;

const valid = [
'<img src="foo.jpg" />',
'<img />',
'<a href="foo.html" id="stuff" />'
];

const invalid = [
'</>',
'<img src= />'
];

valid.forEach(tag => {
if (selfClosing.test(tag)) {
    const li = document.createElement('li');
    li.textContent = `${tag} is a valid self-closing HTML tag`;
    document.getElementById('valid-tags').appendChild(li);
} else {
    const li = document.createElement('li');
    li.textContent = `${tag} is not a valid self-closing HTML tag`;
    document.getElementById('invalid-tags').appendChild(li);
}
});

invalid.forEach(tag => {
if (selfClosing.test(tag)) {
    const li = document.createElement('li');
    li.textContent = `${tag} is a valid self-closing HTML tag`;
    document.getElementById('valid-tags').appendChild(li);
} else {
    const li = document.createElement('li');
    li.textContent = `${tag} is not a valid self-closing HTML tag`;
    document.getElementById('invalid-tags').appendChild(li);
}
});