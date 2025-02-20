import React, { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import styles from './Map.module.css';
import ContactAddress from '../../components/ContactAddress/ContactAddress';
import Whatsapp from '../../components/Whatsapp/Whatsapp';

const Map = () => {
    const mapRef = useRef(null);

    useEffect(() => {
        if (mapRef.current) return;

        mapRef.current = L.map('map', {
            center: [41.54931, -8.42677], // Coordenadas do mapa
            zoom: 14, // Nível de zoom inicial
            dragging: false, // Desativa o arraste do mapa
            zoomControl: false, // Desativa o controlo de zoom
            scrollWheelZoom: false, // Desativa o zoom com scroll
            touchZoom: false, // Desativa o zoom com toques em dispositivos móveis
            doubleClickZoom: false, // Desativa o zoom com duplo clique
            boxZoom: false, // Desativa a seleção de zoom por caixa
            attributionControl: false
        });

        // Adiciona a camada CartoDB Positron (preto e branco)
        L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, &copy; <a href="https://carto.com/attributions">CartoDB</a>',
        }).addTo(mapRef.current);
    }, []);

    return <div id="map" className={styles.map}>
        <ContactAddress />
        <Whatsapp />
    </div>;
};

export default Map;
