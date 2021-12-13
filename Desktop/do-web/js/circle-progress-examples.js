$('.first.circle').circleProgress({
    value: 1.0
}).on('circle-animation-progress', function(event, progress) {
    $(this).find('strong').html(parseInt(100 * progress) + '+');
});
$('.second.circle').circleProgress({
    value: 1
}).on('circle-animation-progress', function(event, progress) {
    $(this).find('strong').html(parseInt(2000 * progress) + '+');
});
$('.third.circle').circleProgress({
    value: 1
}).on('circle-animation-progress', function(event, progress) {
    $(this).find('strong').html(parseInt(150000 * progress) + '$');
});
$('.fourth.circle').circleProgress({
    value: 0.90
}).on('circle-animation-progress', function(event, progress) {
    $(this).find('strong').html(parseInt(90 * progress) + '<i>%</i>');
});
$('.fifth.circle').circleProgress({
    value: 0.30
}).on('circle-animation-progress', function(event, progress) {
    $(this).find('strong').html(parseInt(30 * progress) + '<i>%</i>');
});
$('.sixth.circle').circleProgress({
    value: 0.60
}).on('circle-animation-progress', function(event, progress) {
    $(this).find('strong').html(parseInt(60 * progress) + '<i>%</i>');
});