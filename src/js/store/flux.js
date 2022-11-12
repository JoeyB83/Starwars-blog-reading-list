const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			baseURL: "https://swapi.dev/api/",
			baseImgUrl: "https://starwars-visualguide.com/assets/img/",
			characters: [],
			planets: [],
			starships: [],
			favorites: [],
			singleCharacter: [],
			singlePlanet: [],
			singleStarship: [],
			detailCharacter: []
			
			
		},
		actions: {
			getCharacters: () => {
				fetch(getStore().baseURL + 'people')
				.then((res) => res.json())
				.then((data) => setStore({characters:data.results}))				
				.catch((error) => console.log(error));
			},
			getPlanets: () => {
				fetch(getStore().baseURL + 'planets')
				.then((res) => res.json())
				.then((data) => setStore({planets:data.results}))				
				.catch((error) => console.log(error));
			},
			getShips: () => {
				fetch(getStore().baseURL + 'starships')
				.then((res) => res.json())
				.then((data) => setStore({starships:data.results}))				
				.catch((error) => console.log(error));
			},	
			addFavorites: (favorite) => {
				const newFavorites = getStore().favorites
				newFavorites.push(favorite)
				setStore({favorites: newFavorites})
			},
			getSingleCharacter: (characterURL) => {
				fetch(characterURL)
				.then(resp => resp.json())
				.then(data => {
					setStore({singleCharacter: data})
					console.log("Resultado:", data)					
				})					
				.catch((error) => console.log(error));
			},
			getSinglePlanet: (planetURL) => {
				fetch(planetURL)
				.then(resp => resp.json())
				.then(data => {
					setStore({singlePlanet: data})
					console.log("Resultado:", data)					
				})					
				.catch((error) => console.log(error));
			},
			getSingleShip: (shipURL) => {
				fetch(shipURL)
				.then(resp => resp.json())
				.then(data => {
					setStore({singleStarship: data})
					console.log("Resultado:", data)					
				})					
				.catch((error) => console.log(error));
			},												
			deleteSingleCharacter: (favoriteIndex) => {
				setStore({
					favorites: getStore().favorites.filter(
					(favorite, index) => index !== favoriteIndex
					),
				});				
			}
		}		
	};
};

export default getState;
