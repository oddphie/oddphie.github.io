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

// Create sidebar
function createSidebar() {
	const sidebar = document.getElementById("sidebar");

	// Create heading
	let heading = document.createElement("h1");
	let link = document.createElement("a");
	link.href = "/";
	link.innerText = "Sophie Martin";
	heading.appendChild(link);
	sidebar.appendChild(heading);

	// Create description
	let p1 = document.createElement("p");
	p1.innerText = `Hi, I'm a 19 year old student from Brisbane, Australia and consider myself an artist and designer.`;
	sidebar.appendChild(p1);

	let p2 = document.createElement("p");
	p2.innerText = `I'm currently in my third and final year studying at QUT completing a Bachelor of Creative Industries, majoring in Interactive and Visual Design, as well as taking a minor in Programming and having already completed a minor in Design and Visual Storytelling for Animation.`;
	sidebar.appendChild(p2);

	// Link item information
	let link_items = [
		["https://github.com/sophmxm", "mingcute:github-fill", "github.com/sophmxm"],
		["www.linkedin.com/in/sophmxm", "mdi:linkedin", "linkedin.com/sophmxm"],
		["mailto:sophie.martin@connect.qut.edu.au", "ic:round-email", "sophie.martin@connect.qut.edu.au"],
	];

	// Add each link item to the sidebar
	let list = document.createElement("ul");
	list.classList.add("links");
	sidebar.appendChild(list);
	link_items.forEach((item) => {
		list_item = document.createElement("li");
		list.appendChild(list_item);

		let link = document.createElement("a");
		link.href = item[0];
		link.classList.add("underlined");
		link.innerText = " " + item[2];
		list_item.appendChild(link);

		let icon = document.createElement("iconify-icon");
		icon.icon = item[1];
		icon.classList.add("txt-size");
		link.prepend(icon);
	});

	let p3 = document.createElement("p");
	p3.innerText = `Website portfolio made by me from scratch with HTML, CSS, and JavaScript.`;
	sidebar.appendChild(p3);
}

// Run main fuctions
createNav();
createSidebar();
revealSidebar();

// Run page specific functions
revealTitle();

// Expand image
function expandImage(img_src) {
	let img_preview = document.createElement("div");
	img_preview.classList.add("img-preview");

	let img = document.createElement("img");
	img.src = img_src;
	img_preview.appendChild(img);

	document.body.appendChild(img_preview);

	img_preview.addEventListener("click", function () {
		img_preview.remove();
	});
}