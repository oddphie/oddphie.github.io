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
