import { useState, useEffect } from "react";

export const useInstagramFeed = ({ accessToken, integration, photoCount }) => {
	const [photos, setPhotos] = useState([]);

	useEffect(() => {
		async function getInstaFeed() {
			const url = `https://api.olokoo.com/instagram/feed?oat=${accessToken}&uuid=${integration}`;
			const response = await fetch(url);
			const { feed } = await response.json();

			setPhotos(feed);
		}
		getInstaFeed();
	}, []);

	console.log('photos:', photos);
	return photos;
};