/////////////////////////////////////////
// RASDASH SETTINGS (C)2019: Ben Sykes //
/////////////////////////////////////////

// Setting management.
function getSetting(key) {
	localStorage.getItem(key);
}
function setSetting(key, value) {
	localStorage.setItem(key, value);
}
function remSetting(key) {
	localStorage.removeItem(key);
}
function clrSettings() {
	localStorage.clear();
}
