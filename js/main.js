
var planets = [

	{
		name: "earth",
		image: "img/earth.png",
		description: "The smallest planet in our solar system and nearest to the Sun, Mercury is only slightly larger than Earth's moon. From the surface of Mercury, the Sun would appear more than three times as large as it does when viewed from Earth, and the sunlight would be as much as 11 times brighter."	
	},
	{
		name: "jupiter",
		image: "img/jupiter.png",
		description: "Jupiter is the fifth planet from our Sun and the largest planet in the solar system. Jupiter's stripes and swirls are cold, windy clouds of ammonia and water. The atmosphere is mostly hydrogen and helium, and its iconic Great Red Spot is a giant storm bigger than Earth that has raged for hundreds of years."
	},
	{
		name: "mars",
		image: "img/mars.png",
		description: "The fourth planet from the Sun, Mars is a cold desert world with evidence of ancient floods. This dynamic planet has seasons, polar ice caps, volcanoes, canyons and weather. Mars is one of the most explored bodies in our solar system, and it's the only planet we've sent rovers to roam the alien landscape."
	},
	{
		name: "mercury",
		image:"img/mercury.png",
		description: "The smallest planet in our solar system and nearest to the Sun, Mercury is only slightly larger than Earth's moon. From the surface of Mercury, the Sun would appear more than three times as large as it does when viewed from Earth, and the sunlight would be as much as 11 times brighter."
	},
	{
		name: "moon",
		image: "img/moon.png",
		description: "The fifth largest moon in the solar system, Earth's moon is the only place beyond Earth where humans have set foot. The brightest and largest object in our night sky, the moon makes Earth a more livable planet by moderating our home planet's wobble on its axis, leading to a relatively stable climate. It also causes tides, creating a rhythm that has guided humans for thousands of years. The moon was likely formed after a Mars-sized body collided with Earth."
	},
	{
		name: "neptune",
		image: "img/neptune.png",
		description: "Neptune's dark vortices are high-pressure systems and are usually accompanied by bright companion clouds, which are also now visible on the distant planet. The bright clouds form when the flow of ambient air is perturbed and diverted upward over the dark vortex, causing gases to likely freeze into methane ice crystals."
	},
	{
		name: "saturn",
		image: "img/saturn.png",
		description: "Surrounded by 53 confirmed and nine provisional moons, Saturn is home to some of the most fascinating landscapes in our solar system. From the jets of Enceladus to the methane lakes on smoggy Titan, the Saturn system is a rich source of scientific discovery and still holds many mysteries."
	},
	{
		name: "sun",
		image: "img/sun.png",
		description: "The Sun, at the heart of our solar system, is a yellow dwarf star, a hot ball of glowing gases. Its gravity holds the solar system together, keeping everything from the biggest planets to the smallest particles of debris in its orbit. Electric currents in the Sun generate a magnetic field that is carried out through the solar system by the solar wind—a stream of electrically charged gas blowing outward from the Sun in all directions."
	},
	{
		name: "uranus",
		image: "img/uranus.png",
		description: "The seventh planet from the sun with the third largest diameter in our solar system, Uranus is very cold and windy. The ice giant is surrounded by 13 faint rings and 27 small moons as it rotates at a nearly 90-degree angle from the plane of its orbit. This unique tilt makes Uranus appear to spin on its side, orbiting the sun like a rolling ball."
	},
	{
		name: "venus",
		image: "img/venus.png",
		description: "Second planet from the Sun and our closest planetary neighbor, Venus is similar in structure and size to Earth, but it is now a very different world. Venus spins slowly in the opposite direction most planets do. Its thick atmosphere traps heat in a runaway greenhouse effect, making it the hottest planet in our solar system—with surface temperatures hot enough to melt lead. "
	}
]

function searchGo() {

	//collect input
	var userInput = document.getElementById("userInput").value
	document.getElementById('addHere').innerHTML = '';
	//loops though planets
	for (i = 0; i < planets.length; i++) {
		if (userInput.toLowerCase() === planets[i].name) {
			var mainDiv = document.getElementById("addHere")
			var h2 = document.createElement("h2")
			var name = planets[i].name
			var nameText = document.createTextNode(name)
				h2.appendChild(nameText)
				mainDiv.appendChild(h2)
			var planetsImg = document.createElement("img")
				planetsImg.setAttribute("src", planets[i].image)
				mainDiv.appendChild(planetsImg)

			var p = document.createElement("p")
			var description = planets[i].description
			var descriptionText = document.createTextNode(description)
				p.appendChild(descriptionText)
				mainDiv.appendChild(p)

		}
	}
}











