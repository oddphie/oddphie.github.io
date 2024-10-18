"use strict";

// Create skill bars
const skills = document.getElementById("skills");

skills.childNodes.forEach((skill) => {
	if (skill.nodeName == "LI") {
		let skill_container = document.createElement("div");
		skill.appendChild(skill_container);

		let skill_bar = document.createElement("div");
		skill_bar.style.width = skill.dataset.skill + "%";
		skill_container.appendChild(skill_bar);
	}
});

const nav = document.getElementById("nav-bar");
let currentSection = "me";

function createNav() {
	const list = document.createElement("ul");
	nav.appendChild(list);

	const nav_items = [
		["hero", "", ["mdi:star-four-points-outline", "mdi:star-four-points"]],
		["me", "Me", ["mingcute:user-3-line", "mingcute:user-3-fill"]],
		["my-stuff", "My stuff", ["mingcute:box-3-line", "mingcute:box-3-fill"]],
		["contact", "Contact", ["mingcute:send-plane-line", "mingcute:send-plane-fill"]],
	];

	nav_items.forEach((item) => {
		let section = document.getElementById(item[0]);

		let list_item = document.createElement("li");
		list.appendChild(list_item);

		let link = document.createElement("a");
		link.href = "#" + item[0];
		link.innerText = item[1];
		list_item.appendChild(link);

		let icon = document.createElement("iconify-icon");
		icon.icon = item[2][0];
		link.appendChild(icon);

		if (item[0] === "hero" || item[0] === currentSection) {
			section.style.display = "";
		} else {
			section.style.display = "none";
		}

		link.onclick = () => {
			if (item[0] != currentSection) {
				hideCurrentSection(nav_items);

				currentSection = item[0];
				section.style.display = "";
				icon.icon = item[2][1];
			} else {
				icon.icon = item[2][1];
			}
		};
	});
}

function hideCurrentSection(nav_items) {
	// Get the nav item array of the current section
	nav_items.forEach((item) => {
		if (item.includes(currentSection)) {
			// Set icon to line
			document.querySelector(`a[href='#${currentSection}']>iconify-icon`).icon = item[2][0];

			// Don't hide to hero section
			if (currentSection !== "hero") {
				// Hide section
				document.getElementById(item[0]).style.display = "none";
			}
		}
	});
}

createNav();
