const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			baseURL: "https://swapi.dev/api/",
			baseImgUrl: "https://starwars-visualguide.com/assets/img/",
			characters: [],
			favorites: [],
			singleCharacter: [],
			detailCharacter: []
			
			
		},
		actions: {
			getCharacters: () => {
				fetch(getStore().baseURL + 'people')
				.then((res) => res.json())
				.then((data) => setStore({characters:data.results}))				
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
			// getSingleCharacter: (characterURL) => {
			// 	const {singleCharacter} = getStore()
			// 	fetch(characterURL)
			// 	.then(resp => resp.json())
			// 	.then(data => {
			// 		setStore({singleCharacter: {...data.result.properties, singleCharacter}})
			// 		console.log("Resultado:", data.result.properties)					
			// 	})					
			// 	.catch((error) => console.log(error));
			// },
			// getDetailCharacter: (uid) => {
			// 	fetch(getStore().baseURL + `people/${uid}`)
			// 	.then(resp => resp.json())
			// 	.then(data => {
			// 		setStore({singleCharacterDetail: data.result})					
			// 	})					
			// 	.catch((error) => console.log(error));
			// },
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
