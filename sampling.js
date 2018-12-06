var deforestation = ee.Image("UMD/hansen/global_forest_change_2017_v1_5");
var data = ee.FeatureCollection('ft:1eGJLi8SCtStwyzHDpvgVOnEywOI3HK-lG17WM50x');
var projection = deforestation.projection()

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Export.image.toAsset({image:cluster_mdd, maxPixels:1e12, region:geometry3,scale:100})
var deforested = def_7x7.neq(0)
// var data_pre = ee.Image.cat(data_pre_v2,def_7x7,pixlonlat,cluster_mdd) //version 2
var data_pre = ee.Image.cat(data_pre_v3,def_7x7,pixlonlat,cluster_mdd) // version 3

// var training_deforested= roi_1.map(function(big_geom){
//   var points = cluster_mdd.stratifiedSample({
//   numPoints: 500 , //does not matter
//   classBand: 'cluster',
//   region: big_geom.geometry(),
//   classValues:[0,1],
//   classPoints:[10000,10000], 
//   tileScale:4,
//   scale: 100,
//   projection:projection,
//   geometries: true
//   }).map(function(point){
//     return data_pre.sample({
//         region: point.geometry(),
//         tileScale: 16,
//         projection: projection.atScale(100), //scaling to 300m to consider any pixel in an area of 300x300 m2
//         // scale:200
//         geometries: true
//     })
// }).flatten()
//   return points
// }).flatten()

// Export.table.toDrive({
//   collection: training_deforested,
//   description:'training_deforested_7x7_roi_1_v3',
//   fileFormat: 'CSV'
// });


//////////////////////////
var data_pre3 = ee.Image.cat(data_pre_v3,def_7x7,pixlonlat,cluster_iquitos) // version 3

var training_deforested3= geometry5.map(function(big_geom){
  var points = cluster_iquitos.stratifiedSample({
  numPoints: 500 , //does not matter
  classBand: 'cluster',
  region: big_geom.geometry(),
  classValues:[0,1],
  classPoints:[10000,10000], 
  tileScale:4,
  scale: 100,
  projection:projection,
  geometries: true
  }).map(function(point){
    return data_pre3.sample({
        region: point.geometry(),
        tileScale: 16,
        projection: projection.atScale(100), //scaling to 300m to consider any pixel in an area of 300x300 m2
        // scale:200
        geometries: true
    })
}).flatten()
  return points
}).flatten()

Export.table.toDrive({
  collection: training_deforested3,
  description:'training_deforested_7x7_roi_3_v3',
  fileFormat: 'CSV'
});


////////////////
var data_pre4 = ee.Image.cat(data_pre_v3,def_7x7,pixlonlat,cluster_tarapoto) // version 3

var training_deforested4= geometry6.map(function(big_geom){
  var points = cluster_tarapoto.stratifiedSample({
  numPoints: 500 , //does not matter
  classBand: 'cluster',
  region: big_geom.geometry(),
  classValues:[0,1],
  classPoints:[10000,10000], 
  tileScale:4,
  scale: 100,
  projection:projection,
  geometries: true
  }).map(function(point){
    return data_pre4.sample({
        region: point.geometry(),
        tileScale: 16,
        projection: projection.atScale(100), //scaling to 300m to consider any pixel in an area of 300x300 m2
        // scale:200
        geometries: true
    })
}).flatten()
  return points
}).flatten()

Export.table.toDrive({
  collection: training_deforested4,
  description:'training_deforested_7x7_roi_4_v3',
  fileFormat: 'CSV'
});

////////////////
var data_pre6 = ee.Image.cat(data_pre_v3,def_7x7,pixlonlat,cluster_ucayali) // version 3
var training_deforested6= geometry7.map(function(big_geom){
  var points = cluster_ucayali.stratifiedSample({
  numPoints: 500 , //does not matter
  classBand: 'cluster',
  region: big_geom.geometry(),
  classValues:[0,1],
  classPoints:[10000,10000], 
  tileScale:4,
  scale: 100,
  projection:projection,
  geometries: true
  }).map(function(point){
    return data_pre6.sample({
        region: point.geometry(),
        tileScale: 16,
        projection: projection.atScale(100), //scaling to 300m to consider any pixel in an area of 300x300 m2
        // scale:200
        geometries: true
    })
}).flatten()
  return points
}).flatten()

Export.table.toDrive({
  collection: training_deforested6,
  description:'training_deforested_7x7_roi_6_v3',
  fileFormat: 'CSV'
});


////////////////
var data_pre8 = ee.Image.cat(data_pre_v3,def_7x7,pixlonlat,cluster_pucallpa) // version 3

var training_deforested8= geometry8.map(function(big_geom){
  var points = cluster_pucallpa.stratifiedSample({
  numPoints: 500 , //does not matter
  classBand: 'cluster',
  region: big_geom.geometry(),
  classValues:[0,1],
  classPoints:[10000,10000], 
  tileScale:4,
  scale: 100,
  projection:projection,
  geometries: true
  }).map(function(point){
    return data_pre8.sample({
        region: point.geometry(),
        tileScale: 16,
        projection: projection.atScale(100), //scaling to 300m to consider any pixel in an area of 300x300 m2
        // scale:200
        geometries: true
    })
}).flatten()
  return points
}).flatten()

Export.table.toDrive({
  collection: training_deforested8,
  description:'training_deforested_7x7_roi_8_v3',
  fileFormat: 'CSV'
});





// //All raster layers are in 30m resolution 
// exports.dist_allroad; //distance to any existing road
// exports.dist_vecroad; //distance to local roads
// exports.dist_deproad; //distance to departament roads
// exports.dist_nacroad; //distance to national roads
// exports.dist_allroad_proj; //distance to any projected road
// exports.dist_deproad_proj; //distance to departament projected roads
// exports.dist_nacroad_proj; //distance to national projected roads
// exports.carbondensity; //carbon density map from Asner et al. (2013)
// exports.srtm; //Digital elevation map
// exports.limitsgeo; //Geometry of Peru limits
// exports.loss; //Forest loss including coordinates bands
// exports.cluster_1; //Ucayali region
// exports.cluster_2; //Pucallpa region
// exports.cluster_3; //Madre de Dios region
// exports.cluster_4; //Tarapoto city
// exports.cluster_5; //Iquitos city

////////////////////////////////Preparation and hiperparameters////////////////////////////////////////////////////////
var class_viz =  {"opacity":1,
                    "bands":["classification"],
                    "palette":["000000","000000","000000","000000","000000","000000","000000","00ff00","ff0000","ff0000"]};
                    //threshold:0,10,20,30,40,50,60,70,80,90,100
// Calling repos
// var db  = require('users/glarrea/tesis_roads:data_preparation');

// var db  = require('users/glarrea/tesis_roads:data_ingestion_unprojected');

//Convert all to float only if exporting
// var loss = loss.addBands(deforestationloss).float();

//IMportant:
// Tthis model considers only built roads without distinguishing among year of construction. 
// It assumes that the predicted effect is accounted in a considerable period of time after road construction.
// To account for time considerations(year of construcction, years after construcction, prediction year, etc.) more variables
// need to be considered. at least 2 periods of analysis must be included
/////////



// var data_pre = ee.Image.cat(db.dist_deproad, db.dist_vecroad, db.dist_nacroad, 
//                             db.carbondensity, db.srtm, db.loss_LonLat, db.dist_buffer,
//                             db.dist_parks, db.dist_villages,db.cluster_3)
// var data_pre = ee.Image.cat(data_base,cluster_mdd,pixlonlat)


// var training_mixed= geometry4.map(function(big_geom){
//   var points = cluster_mdd.stratifiedSample({
//   numPoints: 500 , //does not matter
//   classBand: 'cluster',
//   region: big_geom.geometry(),
//   classValues:[0,1] ,
//   classPoints:[5000,5000], 
//   tileScale:4,
//   scale: 100,
//   projection:projection,
//   geometries: true
//   }).map(function(point){
//     return data_pre.sample({
//         region: point.geometry(),
//         tileScale: 16,
//         projection: projection.atScale(300), //scaling to 300m to consider any pixel in an area of 300x300 m2
//         // scale:200
//         geometries: true
//     })
// }).flatten()
//   return points
// }).flatten()


// Export.table.toDrive({
//   collection: training_mixed,
//   description:'training_mixed',
//   fileFormat: 'CSV'
// });
// Map.addLayer(roi_3,{},'roi3')
// Map.addLayer(roi_4,{},'roi4')
// Map.addLayer(roi_6,{},'roi6')
// Map.addLayer(roi_8,{},'roi8')
// Map.addLayer(roi_1,{},'roi1')
// Map.addLayer(cluster_iquitos)
// // Map.addLayer(data_pre_v3)
// print(roi_3)