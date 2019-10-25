import React from 'react';
import { Map, TileLayer } from 'react-leaflet';

export default function WorldMap() {
	return (
		<Map
			center={[70, -10]}
			zoom={4}
			maxBounds={[[114, 80], [-10, -176]]}
			easeLinearity={0.35}
			attributionControl
			zoomControl
			doubleClickZoom
			scrollWheelZoom
			dragging
			animate
		>
			<TileLayer url="/tiles/detailed/{z}/{x}_{y}.jpg" />
		</Map>
	);
}
