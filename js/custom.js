$(document).ready(function() {
		// slideshow with play/pause
		var slideShow = $('.playPauseExample').slideShow({
			interval: 3
		});
		// now add logic to play/pause button
		$('.playPauseExample a.togglePlayback').click(function() {
			if (slideShow.isPlaying()) {
				$(this).addClass('togglePlayback1');
			} else {
				$(this).removeClass('togglePlayback1');
				$(this).addClass('togglePlayback');
			}
			slideShow.togglePlayback();
			return false;
		});
});