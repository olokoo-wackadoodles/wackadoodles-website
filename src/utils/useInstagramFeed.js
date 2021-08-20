import { useState, useEffect } from "react";

export const useInstagramFeed = ({ accessToken, integration, photoCount }) => {
	const [photos, setPhotos] = useState([]);

	useEffect(() => {
		async function getInstaFeed() {
			const url = `https://api.olokoo.com/instagram/feed?oat=${accessToken}&uuid=${integration}`;
			const response = await fetch(url);
			var { feed } = await response.json();

			var photos = [];

			feed.forEach(photo => {
				if (photo.type === 'IMAGE' || photo.type === 'CAROUSEL_ALBUM') {
					photos.push(photo);
				}
			});

			if (photos && photos.length > photoCount) {
				photos = photos.slice(0, photoCount);
			}

			setPhotos(photos);
		}
		getInstaFeed();
	}, []);

	console.log('photos:', photos);
	return photos;
};