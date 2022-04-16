// add enter key listener
document.addEventListener('keyup', function (e) {
    if (e.key === "Enter") {
        ok();
    }
});

function ok() {
    const input = document.querySelector('.myinput')
    const selected = document.querySelector('.selected').value
    if (input.value.trim() !== '') {
        console.log(input.value);
        console.log(selected);
        // hehe lol xd thik h bhai
        if (selected == 'K-Drama') {
            window.open('https://dramacool.sr/search?type=drama&keyword=' + input.value.split(' ').join('+'));
        } else if (selected == 'C-Drama') {
            window.open('https://dramacool9.ae/?s=' + input.value.split(' ').join('+'));
        } else if (selected == 'Anime') {
            window.open('https://zoro.to/search?keyword=' + input.value.split(' ').join('+'));
        } else if (selected == 'Movies') {
            window.open('https://hdtoday.cc/search/' + input.value.split(' ').join('+'));
        }
    }
}