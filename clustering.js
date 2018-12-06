
var cluster_mdd=cluster_8.eq(1).unmask(0)
var cluster_ucayali=cluster_8.eq(6).unmask(0)
var cluster_tarapoto=cluster_8.eq(4).unmask(0)
var cluster_iquitos=cluster_8.eq(3).unmask(0)
var cluster_pucallpa=cluster_8.eq(8).unmask(0)
var projection = deforestation.projection();
var N = 8; //Pre-defined number of regions of analysis
var limitsgeo = limits.geometry(); // Converting feature collection to geometry
deforestation=deforestation
srtm = srtm.rename('altitude');
//// CREATING CLUSTERS OF ANALYSIS////////////////////////////////////////////////////////////
// N numbers of regions were apriori selected. The clustering considers only latitude,longitude and altitude.

// var loss_LonLat = ee.Image.pixelLonLat().clip(limitsgeo); // Create coordinates layer with deforestation projection
// var loss = loss_LonLat.addBands(srtm).addBands(deforestation.select(['lossyear']).gte(11)).updateMask(deforestation.select(['lossyear']).gte(11)); // Adding loss band to coordinates layer
// // Clustering Deforestation
// // K-means method was selected, a prior sampling is required
// var training = loss.clip(limitsgeo).stratifiedSample({ //This sampling selects only values = 1, discards null
//     numPoints: 10000,
//     classBand: 'lossyear',
//     region: limits,
//     scale: 30});
    
// var clusterer = ee.Clusterer.wekaKMeans({
//   nClusters: N
// }).train(training); //training 
// var clusters = loss.clip(limitsgeo).cluster(clusterer).add(1); //classifying and adding 1 to avoid class=0

// Export.image.toAsset({
//   image:clusters, 
//   description:'clusters_8_2010_2017', 
//   assetId:'clusters_8_2010_2017',
//   scale:100,                                 //done, see users/glarrea/clusters_6_100px
//   region:geometry,
//   maxPixels: 1e12
// })

//C/////REATING DEFORESTATION IN AREA INDEX

// var newmap=cluster_8.clip(limits).unmask(0).reduceNeighborhood({
//   reducer: ee.Reducer.mean(),
//   kernel: ee.Kernel.square({radius:3, units:'pixels', normalize:false}),
//   skipMasked:false
// })


// Map.addLayer(newmap.reproject(projection.atScale(100)))

// Export.image.toAsset({
//   image: newmap,
//   region: geometry,
//   scale: 100,
//   description:'newmap',
//   maxPixels: 1e12
// });

////////////////////

Export.image.toAsset({
  image: cluster_iquitos,
  region: geometry,
  scale: 100,
  description:'cluster_iquitos_3',
  maxPixels: 1e12
});

Export.image.toAsset({
  image: cluster_ucayali,
  region: geometry,
  scale: 100,
  description:'cluster_ucayali_6',
  maxPixels: 1e12
});
Export.image.toAsset({
  image: cluster_tarapoto,
  region: geometry,
  scale: 100,
  description:'cluster_tarapoto_4',
  maxPixels: 1e12
});
Export.image.toAsset({
  image: cluster_pucallpa,
  region: geometry,
  scale: 100,
  description:'cluster_pucallpa_8',
  maxPixels: 1e12
});

///////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////boneyard
///////////////////////////////////////////////////////////////////
// var cluster_1= clusters.eq(1).unmask(0); //Ucayali region
// var cluster_2= clusters.eq(2).unmask(0); //Pucallpa region
// var cluster_3= clusters.eq(4).unmask(0); //Madre de Dios region
// var cluster_4= clusters.eq(4).unmask(0); //Tarapoto city
// var cluster_5= clusters.eq(5).unmask(0); //Iquitos city

// var clusterTot = ee.ImageCollection([ ee.Image.constant(0).rename(['cluster']).int8(),clusters]).mosaic();
// var cluster_3 = clusterTot.eq(3).aside(print)
// exports.cluster_1=cluster_1; //Ucayali region
// exports.cluster_2=cluster_2; //Pucallpa region
// exports.cluster_3=cluster_3; //Madre de Dios region
// exports.cluster_4=cluster_4; //Tarapoto city
// exports.cluster_5=cluster_5; //Iquitos city
// exports.loss_LonLat=loss_LonLat; //Forest loss including coordinates bands
// Map.addLayer(clusters.reproject(projection.atScale(1000)).randomVisualizer())
