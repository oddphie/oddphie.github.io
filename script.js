const main = document.getElementsByTagName("main")[0];
const sidebar = document.getElementById("sidebar");
const content = document.getElementById("content");

// Staggered reveal sidebar effect
function revealSidebar() {
	for (let i = 0; i < sidebar.children.length; i++) {
		// Add animation delay effect to each sidebar element
		sidebar.children[i].style.animationDelay = `calc(500ms + ${i * 150}ms)`;
	}
}

revealSidebar();

// Staggered reveal title words effect
function revealTitle() {
	let titles = document.querySelectorAll(".title");

	titles.forEach((title) => {
		let words = title.textContent.split(" ");
		title.innerText = "";

		words.forEach((word) => {
			// Append each word to span
			let span = document.createElement("span");
			span.append(word + " ");
			title.appendChild(span);
		});

		for (let i = 0; i < title.children.length; i++) {
			// Add animation delay effect to each span
			title.children[i].style.animationDelay = `calc(1350ms + ${i * 150}ms)`;
		}
	});
}

revealTitle();

// Staggered reveal content effect
function revealContent() {
	for (let i = 0; i < content.children.length; i++) {
		// Add animation delay effect to each section in content
		content.children[i].style.animationDelay = `calc(1000ms + ${i * 150}ms)`;
	}
}

// Create navigation bar
function createNav() {
	const nav = document.getElementById("nav-bar");
	const current_tab = nav.dataset.currentTab;

	let list = document.createElement("ul");
	nav.appendChild(list);

	// Nav item information
	const nav_items = [
		["websites.html", "majesticons:browser", "Websites"],
		["art.html", "ep:picture-filled", "Art"],
		["other.html", "fluent:list-16-filled", "Other"],
		["about-me.html", "akar-icons:info-fill", "About me"],
	];

	// Add each nav item on the nav bar
	nav_items.forEach((item) => {
		let list_item = document.createElement("li");
		list.appendChild(list_item);

		let link = document.createElement("a");
		link.href = item[0];
		link.innerText = item[2];
		list_item.appendChild(link);

		let icon = document.createElement("iconify-icon");
		icon.icon = item[1];
		link.prepend(icon);

		// Check if tab is the current tab
		if (current_tab == item[2].toLowerCase()) {
			// Add class
			list_item.classList.add("current");

			// Remove link
			link.href = "#";
		}
	});
}

createNav();

{
	/* <ul>
<li><a href="#"><iconify-icon icon="majesticons:browser"></iconify-icon>Websites</a></li>
<li><a href="#"><iconify-icon icon="ep:picture-filled"></iconify-icon>Art</a></li>
<li><a href="#"><iconify-icon icon="fluent:list-16-filled"></iconify-icon>Other</a></li>
<li class="current"><a href="#"><iconify-icon icon="akar-icons:info-fill"></iconify-icon>About me</a></li>
</ul> */
}
