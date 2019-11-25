javascript:(function(){
    fetch(location.href + '/video', {useCredentials: true}).then(res => res.json())
    .then(data => {
        var video = data[0].link.replace(/\/hls/, '').replace(/\/index.m3u8/,'');
        window.open('https://caelum.github.io/alura-transcritor/transcritor.html?video=' + encodeURIComponent(video) + '&admin=' + encodeURIComponent(document.querySelector('.settings-box-item-edit a').href) + '&task=' + encodeURIComponent(location.href) + '&posicao=' + document.querySelector('.task-body-header-title small').innerText + '&aula=' + document.querySelector('.task-menu-section-title-number strong').innerText, 'transcritor');
    });
})()