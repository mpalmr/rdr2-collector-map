import L from 'leaflet';

export default function createMap() {
	const southWestTiles = L.latLng(-144, 0);
	const northEastTiles = L.latLng(0, 176);
  const boundsTiles = L.latLngBounds(southWestTiles, northEastTiles);

  const mapLayers = [];
	mapLayers['Default'] = L.tileLayer('https://s.rsg.sc/sc/images/games/RDR2/map/game/{z}/{x}/{y}.jpg', {
		noWrap: true,
		bounds: boundsTiles,
	});
	mapLayers['Detailed'] = L.tileLayer('/tiles/detailed/{z}/{x}_{y}.jpg', {
		noWrap: true,
		bounds: boundsTiles,
	});
	mapLayers['Dark'] = L.tileLayer('assets/maps/darkmode/{z}/{x}_{y}.jpg', {
		noWrap: true,
		bounds: boundsTiles,
	});

	const baseMap = L.map('map', {
		preferCanvas: true,
		minZoom: Map.minZoom,
		maxZoom: Map.maxZoom,
		zoomControl: false,
		crs: L.CRS.Simple,
		layers: [mapLayers['Detailed']],
	})
		.setView([-70, 111.75], 3);

	const baseMapsLayers = {
		Default: mapLayers['Default'],
		Detailed: mapLayers['Detailed'],
		Dark: mapLayers['Dark'],
	};

	L.control.zoom({ position:'bottomright' }).addTo(baseMap);
	L.control.layers(baseMapsLayers).addTo(baseMap);

	const southWest = L.latLng(-170.712, -25.227);
	const northEast = L.latLng(10.774, 200.125);
	const bounds = L.latLngBounds(southWest, northEast);
	baseMap.setMaxBounds(bounds);
	Map.loadWeeklySet();
}
