import { useState, useEffect } from "react";

export const useInstagramFeed = ({ accessToken, photoCount }) => {
	const [photos, setPhotos] = useState([]);

	useEffect(() => {
		async function getInstaFeed() {
			const url = `https://instagram.olokoo.com/posts?accessToken=${accessToken}`;
			const response = await fetch(url);
			const { data } = await response.json();
			setPhotos(data);
		}
		getInstaFeed();
	}, []);

	return photos;
};