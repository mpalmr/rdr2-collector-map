import L from 'leaflet';

export default function createMap() {
	const map = L
		.map('map', {
			preferCanvas: true,
			minZoom: 2,
			maxZoom: 7,
			zoomControl: false,
			crs: L.CRS.Simple,
			layers: [L.tileLayer('/tiles/detailed/{z}/{x}_{y}.jpg', {
				noWrap: true,
				bounds: L.latLngBounds(L.latLng(-144, 0), L.latLng(0, 176)),
			})],
		});
		// .setView([-70, 111.75]);
	L.control
		.zoom({ position: 'bottomright' })
		.addTo(map);
	map.setMaxBounds(L.latLngBounds(
		L.latLng(-170.712, -25.227),
		L.latLng(10.774, 200.125),
	));
	L.control.layers().addTo(map);
	return map;
}
