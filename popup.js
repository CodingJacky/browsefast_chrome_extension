if (document.getElementById("pop")) {
	let btw = document.getElementById("bt_w");
	let bts = document.getElementById("bt_s");
	let bta = document.getElementById("bt_a");
	let btd = document.getElementById("bt_d");

	btw.addEventListener("click", function () {
		chrome.tabs.create({ url: "https://i.ibb.co/zJf69rv/w-op.png" });
	});

     bts.addEventListener("click", function () {
		chrome.tabs.create({ url: "https://i.ibb.co/P92VpPM/s-op.png" });
	});

     bta.addEventListener("click", function () {
		chrome.tabs.create({ url: "https://i.ibb.co/MNRsZZc/a-op.png" });
	});

     btd.addEventListener("click", function () {
		chrome.tabs.create({ url: "https://i.ibb.co/Zd7BMtJ/d-op.png" });
	});
}
