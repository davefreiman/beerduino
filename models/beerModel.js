function getPercentage() {
	var density = 1.01;
	var mass = 14000;
	var maxVolume = 20000;
	var currentVolume  = mass * (1/density);
	var fillPercentage = currentVolume / maxVolume;

	return fillPercentage.toFixed(2);
}

exports.getPercentage = getPercentage;