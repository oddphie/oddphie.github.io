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

const sections = [document.getElementById("me-section"), document.getElementById("my-stuff-section"), document.getElementById("contact-section")];

for (let i = 0; i < sections.length; i++) {
	if (i != 0) {
		sections[i].style.display = "none";
	}
}

const nav = document.querySelectorAll("nav>ul>li>a");

for (let i = 0; i < nav.length; i++) {
	nav[i].onclick = () => {
		for (let j = 0; j < sections.length; j++) {
            console.log(i, j, i == j)
			if (i == j) sections[j].style.display = "";
            else sections[j].style.display = "none";
		}
	};
}
