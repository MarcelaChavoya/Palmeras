ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:32614").setExtent([436126.191379, 2095827.466253, 534359.444261, 2222442.718362]);
var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_ACC_1 = new ol.format.GeoJSON();
var features_ACC_1 = format_ACC_1.readFeatures(json_ACC_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32614'});
var jsonSource_ACC_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ACC_1.addFeatures(features_ACC_1);
var lyr_ACC_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ACC_1, 
                style: style_ACC_1,
                interactive: true,
                title: '<img src="styles/legend/ACC_1.png" /> ACC'
            });
var format_pertinencia__baja_2 = new ol.format.GeoJSON();
var features_pertinencia__baja_2 = format_pertinencia__baja_2.readFeatures(json_pertinencia__baja_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32614'});
var jsonSource_pertinencia__baja_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_pertinencia__baja_2.addFeatures(features_pertinencia__baja_2);
var lyr_pertinencia__baja_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_pertinencia__baja_2, 
                style: style_pertinencia__baja_2,
                interactive: true,
                title: '<img src="styles/legend/pertinencia__baja_2.png" /> pertinencia__baja'
            });
var format_pertinencia__media_3 = new ol.format.GeoJSON();
var features_pertinencia__media_3 = format_pertinencia__media_3.readFeatures(json_pertinencia__media_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32614'});
var jsonSource_pertinencia__media_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_pertinencia__media_3.addFeatures(features_pertinencia__media_3);
var lyr_pertinencia__media_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_pertinencia__media_3, 
                style: style_pertinencia__media_3,
                interactive: true,
                title: '<img src="styles/legend/pertinencia__media_3.png" /> pertinencia__media'
            });
var format_pertinencia__alta_4 = new ol.format.GeoJSON();
var features_pertinencia__alta_4 = format_pertinencia__alta_4.readFeatures(json_pertinencia__alta_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32614'});
var jsonSource_pertinencia__alta_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_pertinencia__alta_4.addFeatures(features_pertinencia__alta_4);
var lyr_pertinencia__alta_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_pertinencia__alta_4, 
                style: style_pertinencia__alta_4,
                interactive: true,
                title: '<img src="styles/legend/pertinencia__alta_4.png" /> pertinencia__alta'
            });
var format_Frutales_5 = new ol.format.GeoJSON();
var features_Frutales_5 = format_Frutales_5.readFeatures(json_Frutales_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32614'});
var jsonSource_Frutales_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Frutales_5.addFeatures(features_Frutales_5);
var lyr_Frutales_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Frutales_5, 
                style: style_Frutales_5,
                interactive: true,
                title: '<img src="styles/legend/Frutales_5.png" /> Frutales'
            });
var format_Agroforestales_6 = new ol.format.GeoJSON();
var features_Agroforestales_6 = format_Agroforestales_6.readFeatures(json_Agroforestales_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32614'});
var jsonSource_Agroforestales_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Agroforestales_6.addFeatures(features_Agroforestales_6);
var lyr_Agroforestales_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Agroforestales_6, 
                style: style_Agroforestales_6,
                interactive: true,
                title: '<img src="styles/legend/Agroforestales_6.png" /> Agroforestales'
            });
var format_CDMX_7 = new ol.format.GeoJSON();
var features_CDMX_7 = format_CDMX_7.readFeatures(json_CDMX_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32614'});
var jsonSource_CDMX_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CDMX_7.addFeatures(features_CDMX_7);
var lyr_CDMX_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CDMX_7, 
                style: style_CDMX_7,
                interactive: true,
                title: '<img src="styles/legend/CDMX_7.png" /> CDMX'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_ACC_1.setVisible(true);lyr_pertinencia__baja_2.setVisible(true);lyr_pertinencia__media_3.setVisible(true);lyr_pertinencia__alta_4.setVisible(true);lyr_Frutales_5.setVisible(true);lyr_Agroforestales_6.setVisible(true);lyr_CDMX_7.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_ACC_1,lyr_pertinencia__baja_2,lyr_pertinencia__media_3,lyr_pertinencia__alta_4,lyr_Frutales_5,lyr_Agroforestales_6,lyr_CDMX_7];
lyr_ACC_1.set('fieldAliases', {'Name': 'Name', 'Área_Ha': 'Área_Ha', 'Área_m2': 'Área_m2', });
lyr_pertinencia__baja_2.set('fieldAliases', {'PGOEDF': 'PGOEDF', 'CLAVE': 'CLAVE', 'VegUSo_200': 'VegUSo_200', 'fid': 'fid', 'pertinenci': 'pertinenci', 'area': 'area', 'perimeter': 'perimeter', 'superficie': 'superficie', });
lyr_pertinencia__media_3.set('fieldAliases', {'PGOEDF': 'PGOEDF', 'CLAVE': 'CLAVE', 'VegUSo_200': 'VegUSo_200', 'fid': 'fid', 'pertinenci': 'pertinenci', 'area': 'area', 'perimeter': 'perimeter', 'superficie': 'superficie', });
lyr_pertinencia__alta_4.set('fieldAliases', {'PGOEDF': 'PGOEDF', 'CLAVE': 'CLAVE', 'VegUSo_200': 'VegUSo_200', 'fid': 'fid', 'pertinenci': 'pertinenci', 'area': 'area', 'perimeter': 'perimeter', 'superficie': 'superficie', });
lyr_Frutales_5.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'snippet': 'snippet', });
lyr_Agroforestales_6.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'snippet': 'snippet', });
lyr_CDMX_7.set('fieldAliases', {'CVE_ENT': 'CVE_ENT', 'NOM_ENT': 'NOM_ENT', 'CVE_CAP': 'CVE_CAP', 'NOM_CAP': 'NOM_CAP', 'COV_': 'COV_', 'COV_ID': 'COV_ID', 'AREA': 'AREA', 'PERIMETER': 'PERIMETER', });
lyr_ACC_1.set('fieldImages', {'Name': '', 'Área_Ha': '', 'Área_m2': '', });
lyr_pertinencia__baja_2.set('fieldImages', {'PGOEDF': '', 'CLAVE': '', 'VegUSo_200': '', 'fid': '', 'pertinenci': '', 'area': '', 'perimeter': '', 'superficie': '', });
lyr_pertinencia__media_3.set('fieldImages', {'PGOEDF': '', 'CLAVE': '', 'VegUSo_200': '', 'fid': '', 'pertinenci': '', 'area': '', 'perimeter': '', 'superficie': '', });
lyr_pertinencia__alta_4.set('fieldImages', {'PGOEDF': '', 'CLAVE': '', 'VegUSo_200': '', 'fid': '', 'pertinenci': '', 'area': '', 'perimeter': '', 'superficie': '', });
lyr_Frutales_5.set('fieldImages', {'Name': '', 'descriptio': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMo': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', 'snippet': '', });
lyr_Agroforestales_6.set('fieldImages', {'Name': '', 'descriptio': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMo': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', 'snippet': '', });
lyr_CDMX_7.set('fieldImages', {'CVE_ENT': '', 'NOM_ENT': '', 'CVE_CAP': '', 'NOM_CAP': '', 'COV_': '', 'COV_ID': '', 'AREA': '', 'PERIMETER': '', });
lyr_ACC_1.set('fieldLabels', {'Name': 'inline label', 'Área_Ha': 'no label', 'Área_m2': 'no label', });
lyr_pertinencia__baja_2.set('fieldLabels', {'PGOEDF': 'no label', 'CLAVE': 'no label', 'VegUSo_200': 'no label', 'fid': 'no label', 'pertinenci': 'no label', 'area': 'no label', 'perimeter': 'no label', 'superficie': 'no label', });
lyr_pertinencia__media_3.set('fieldLabels', {'PGOEDF': 'no label', 'CLAVE': 'no label', 'VegUSo_200': 'no label', 'fid': 'no label', 'pertinenci': 'no label', 'area': 'no label', 'perimeter': 'no label', 'superficie': 'no label', });
lyr_pertinencia__alta_4.set('fieldLabels', {'PGOEDF': 'no label', 'CLAVE': 'no label', 'VegUSo_200': 'no label', 'fid': 'no label', 'pertinenci': 'no label', 'area': 'no label', 'perimeter': 'no label', 'superficie': 'no label', });
lyr_Frutales_5.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'snippet': 'no label', });
lyr_Agroforestales_6.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'snippet': 'no label', });
lyr_CDMX_7.set('fieldLabels', {'CVE_ENT': 'no label', 'NOM_ENT': 'no label', 'CVE_CAP': 'no label', 'NOM_CAP': 'no label', 'COV_': 'no label', 'COV_ID': 'no label', 'AREA': 'no label', 'PERIMETER': 'no label', });
lyr_CDMX_7.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});