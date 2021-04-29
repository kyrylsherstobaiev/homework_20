const COUNTRIES = [
	{
		name: 'Planet Earth',
		data: `Earth is the third planet from the Sun and the only astronomical object known to harbor life. About 29.2% of Earth's surface is land consisting of continents and islands. The remaining 70.8% is covered with water, mostly by oceans, seas, gulfs, and other salt-water bodies, but also by lakes, rivers, and other fresh water, which together constitute the hydrosphere. Much of Earth's polar regions are covered in ice. Earth's outer layer is divided into several rigid tectonic plates that migrate across the surface over many millions of years, while its interior remains active with a solid iron inner core, a liquid outer core that generates Earth's magnetic field, and a convective mantle that drives plate tectonics. `
	},
	{
		name: 'China',
		data: `China, officially the People's Republic of China (PRC), is a country in East Asia. It is the world's most populous country, with a population of around 1.4 billion.[8] Covering approximately 9.6 million square kilometers (3.7 million mi2), it is the world's third or fourth-largest country by area.[k] The country is officially divided into 23 provinces,[l][18] five autonomous regions, four direct-controlled municipalities (Beijing, Tianjin, Shanghai, and Chongqing), and two special administrative regions of Hong Kong and Macau.`
	},
	{
		name: 'France',
		data: `France (French: [fʁɑ̃s] Listen), officially the French Republic (French: République française),[1] is a country primarily located in Western Europe, consisting of metropolitan France and several overseas regions and territories.[XIII] The metropolitan area of France extends from the Rhine to the Atlantic Ocean and from the Mediterranean Sea to the English Channel and the North Sea. The overseas territories include French Guiana in South America and several islands in the Atlantic, Pacific and Indian Oceans. France borders Belgium, Luxembourg and Germany to the northeast, Switzerland, Monaco and Italy to the east, Andorra and Spain to the south, as well as the Netherlands, Suriname and Brazil in the Americas. The country's eighteen integral regions (five of which are situated overseas) span a combined area of 643,801 km2 (248,573 sq mi) and a total population of 67.4 million (as of March 2021).[12] France is a unitary semi-presidential republic with its capital in Paris, the country's largest city and main cultural and commercial centre. Other major urban areas include Lyon, Marseille, Toulouse, Bordeaux, Lille and Nice. France, including its overseas territories, has the most time zones of any country, with a total of twelve.`
	},
	{
		name: 'Germany',
		data: `Germany (German: Deutschland, German pronunciation: [ˈdɔʏtʃlant]), officially the Federal Republic of Germany,[e] is a country in Central Europe. It is the second-most populous country in Europe after Russia, and the most populous member state of the European Union. Germany is situated between the Baltic and North seas to the north, and the Alps to the south; covering an area of 357,022 square kilometres (137,847 sq mi), with a population of over 83 million within its 16 constituent states. It borders Denmark to the north, Poland and the Czech Republic to the east, Austria and Switzerland to the south, and France, Luxembourg, Belgium, and the Netherlands to the west. The nation's capital and largest city is Berlin, and its financial centre is Frankfurt; the largest urban area is the Ruhr. `
	},
	{
		name: 'Italy',
		data: `Italy (Italian: Italia [iˈtaːlja] (About this soundlisten)), officially the Italian Republic (Italian: Repubblica Italiana [reˈpubːlika itaˈljaːna]),[16][17][18][19] is a country consisting of a continental part, delimited by the Alps, a peninsula and several islands surrounding it. Italy is located in Southern Europe,[20][21] and is also considered part of Western Europe.[22][23] A unitary parliamentary republic with Rome as its capital, the country covers a total area of 301,340 km2 (116,350 sq mi) and shares land borders with France, Switzerland, Austria, Slovenia, and the enclaved microstates of Vatican City and San Marino. Italy has a territorial enclave in Switzerland (Campione) and a maritime exclave in Tunisian waters (Lampedusa). With around 60 million inhabitants, Italy is the third-most populous member state of the European Union. `
	},
	{
		name: 'Spain',
		data: `Spain (Spanish: España, [esˈpaɲa] (About this soundlisten)), formally the Kingdom of Spain[13] (Spanish: Reino de España),[a][b] is a country in Southwestern Europe with some pockets of territory across the Strait of Gibraltar and the Atlantic Ocean.[13] Its continental European territory is situated on the Iberian Peninsula. Its territory also includes two archipelagos: the Canary Islands off the coast of North Africa, and the Balearic Islands in the Mediterranean Sea. The African exclaves of Ceuta, Melilla, and Peñón de Vélez de la Gomera[14] make Spain the only European country to have a physical border with an African country (Morocco).[h] Several small islands in the Alboran Sea are also part of Spanish territory. The country's mainland is bordered to the south and east by the Mediterranean Sea; to the north and northeast by France, Andorra, and the Bay of Biscay; and to the west and northwest by Portugal and the Atlantic Ocean respectively.`
	},
	{
		name: 'United Kingdom',
		data: `The United Kingdom of Great Britain and Northern Ireland, commonly known as the United Kingdom (UK) or Britain,[note 10] is a sovereign country in north-western Europe, off the north-­western coast of the European mainland.[15] The United Kingdom includes the island of Great Britain, the north-­eastern part of the island of Ireland, and many smaller islands within the British Isles.[16] Northern Ireland shares a land border with the Republic of Ireland. Otherwise, the United Kingdom is surrounded by the Atlantic Ocean, with the North Sea to the east, the English Channel to the south and the Celtic Sea to the south-west, giving it the 12th-longest coastline in the world. The Irish Sea separates Great Britain and Ireland. The total area of the United Kingdom is 94,000 square miles (240,000 km2). `
	},
	{
		name: 'United States',
		data: `The United States of America (USA), commonly known as the United States (U.S. or US) or America, is a country primarily located in North America. It consists of 50 states, a federal district, five major self-governing territories, 326 Indian reservations, and some minor possessions.[g] At 3.8 million square miles (9.8 million square kilometers), it is the world's third- or fourth-largest country by total area.[c] With a population of more than 331 million people, it is the third most populous country in the world. The national capital is Washington, D.C., and the most populous city is New York City. `
	},
];
const accordionFlags = document.querySelector('#accordionFlags');

class Countries {
	static createCountries(arr) {
		console.log(arr);

		let items = arr
			.map(country => new Country(country))
			.map(country => country.renderCountries())
			.join('');

		accordionFlags.innerHTML = items;
	}
}

class Country {
	constructor(country) {
		this.createCountry(country);
	}
	createCountry(country) {
		for (let key in country) {
			this[key] = country[key];
		}
	}
	renderCountries() {
		return `	<div class="accordion-item">
		<h2 class="accordion-header" id="heading${this.name.replace(' ', '')}">
			<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${this.name.replace(' ', '')}" aria-expanded="false" aria-controls="collapse${this.name.replace(' ', '')}">
				<img class="nameFlagsImg" src="./images/${this.name}.svg" width=25>
				${this.name}
			</button>
		</h2>
		<div id="collapse${this.name.replace(' ', '')}" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionFlags">
			<div class="accordion-body">
				${this.data}
			</div>
		</div>
	</div>`
	}
}

Countries.createCountries(COUNTRIES);