var geometry = /* color: #00ffff */ee.Geometry.MultiPolygon(
        [[[[-74.5331097388347, -5.9027252366419205],
           [-74.1760540747722, -6.214086420365306],
           [-73.8409710669597, -6.164936136168247],
           [-73.5278607153972, -5.383405469790127],
           [-73.11190913426015, -4.388649375563811],
           [-71.54635737644765, -4.563894378044291],
           [-69.85446284519765, -4.640550711735484],
           [-69.84347651707265, -3.670828696108607],
           [-71.33488836309033, -3.3109781978195447],
           [-73.01030340215283, -2.8008420892017605],
           [-73.68596258184033, -2.7788954759687607],
           [-73.79788983653509, -3.3359676890505976],
           [-73.88578046153509, -3.670424079544004],
           [-73.80338300059759, -4.306084713487087],
           [-74.02860272716009, -4.262262193773503],
           [-74.06705487559759, -3.796498697704769],
           [-74.81961835216009, -3.3469353394096113],
           [-75.23160565684759, -3.6868696173132585],
           [-75.07230389903509, -3.8951529817247814],
           [-74.47354901622259, -3.873230796657779],
           [-74.44607219966088, -4.334537298167052],
           [-74.73720989497338, -4.422171420200803],
           [-74.57241497309838, -4.717858872564964],
           [-74.22085247309838, -4.778076323054813],
           [-74.76467571528588, -5.56586511344402]]],
         [[[-73.0499554419597, -5.990142929746676],
           [-72.7478314185222, -5.569320493049159],
           [-72.8357220435222, -5.038767020836019],
           [-73.1213665747722, -5.104426917766058],
           [-73.3960247778972, -5.935508498574297]]]]),
    geometry2 = /* color: #98ff00 */ee.Geometry.Polygon(
        [[[-75.23226891256496, -10.86611380504286],
          [-74.58954131409553, -11.663475005016721],
          [-74.27641629621803, -12.200948943869314],
          [-73.57874757418472, -12.930149752613799],
          [-73.80947251139571, -12.098911860146403],
          [-74.02371629286137, -11.302783913136448],
          [-73.63096500704148, -11.536995971356484],
          [-73.02394186883976, -11.878601586197602],
          [-72.3949401325504, -12.251949457910342],
          [-72.01207300358425, -12.461931633529387],
          [-71.01780864971926, -9.30121373749317],
          [-72.34911881842265, -8.856600380687976],
          [-73.76848562046558, -7.508802858238432],
          [-74.78811212614761, -7.7368366487098115],
          [-75.32096769226905, -8.291681213775307],
          [-76.46473941494202, -9.026543862863347]]]),
    geometry3 = /* color: #ffc82d */ee.Geometry.Polygon(
        [[[-77.09749347030942, -6.798973628088032],
          [-77.16890460312192, -7.256931266653196],
          [-76.65804034530942, -8.258409752891607],
          [-76.33943682968442, -8.106166935117042],
          [-75.96590167343442, -7.610985171565913],
          [-75.32869464218442, -7.207886141494287],
          [-75.15329119648618, -6.676505014351071],
          [-74.64792010273618, -5.693503255952669],
          [-75.29062029804868, -5.149480392260178],
          [-76.10360857929868, -4.749975655566555],
          [-77.58676287617368, -4.361193916831673],
          [-78.29538104023618, -4.394056747392274],
          [-78.53708025898618, -4.892292568349708],
          [-78.32284686054868, -5.280770557504933],
          [-77.87260907116024, -5.618401611903119]]]),
    geometry4 = /* color: #d63000 */ee.Geometry.Polygon(
        [[[-69.37209956527903, -14.009866460332363],
          [-68.21853511215403, -12.212358862733957],
          [-70.37185542465403, -9.352702600807644],
          [-70.99807612777903, -9.265969559373323],
          [-71.99783198715403, -12.491391077485986]]]),
    geometry5 = /* color: #0b4a8b */ee.Geometry.Polygon(
        [[[-78.71061871733042, -11.267850606331937],
          [-77.4720705219612, -10.115435241124056],
          [-76.96026202073062, -9.790053969357256],
          [-77.40646819064938, -8.491599062369746],
          [-78.57554977062586, -7.340985814535347],
          [-79.06518115075187, -7.4937236998456696],
          [-79.37762389712043, -8.04810245012129],
          [-79.4036169638506, -8.972576996728424],
          [-79.40430727486006, -9.629081179730868],
          [-79.56394852607787, -9.75384284842767],
          [-79.24478020165407, -10.384249640081496],
          [-79.1390320568816, -10.955886584066139]]]),
    geometry6 = /* color: #d63000 */ee.Geometry.Polygon(
        [[[-81.34473959890772, -3.743850664434975],
          [-79.6453626837328, -12.378291088305751],
          [-70.57127324545326, -18.526465792094584],
          [-69.03318730795326, -18.359713027526112],
          [-68.02244512045326, -12.431185331116218],
          [-69.25291387045326, -2.3339214788857783],
          [-75.18553105795326, 0.6097572310261093],
          [-79.49217168295326, -2.992385588096273]]]),
    pixlatlon = ee.Image("users/glarrea/pixlatlon"),
    limits = ee.FeatureCollection("users/glarrea/UntitledFolder/Perulimit"),
    geometry7 = /* color: #d63000 */ee.Geometry.Polygon(
        [[[-76.54665936358862, -11.36524337164761],
          [-68.41677655108862, -16.776576302429515],
          [-68.76833905108862, -2.474902746006816],
          [-74.92068280108862, 0.9080783155536591],
          [-79.66677655108862, -2.782195901867546]]]);
var deforestation = ee.Image("UMD/hansen/global_forest_change_2017_v1_5"),
    srtm = ee.Image("USGS/SRTMGL1_003"),
    access = ee.Image("Oxford/MAP/accessibility_to_cities_2015_v1_0"),
    carbondensity = ee.Image("users/glarrea/UntitledFolder/CarbonDensity"),
    limits = ee.FeatureCollection("users/glarrea/UntitledFolder/Perulimit"),
    deproad = ee.FeatureCollection("users/glarrea/UntitledFolder/SECONDROADS3"),
    nacroad = ee.FeatureCollection("users/glarrea/UntitledFolder/Firstroads2"),
    allroad = ee.FeatureCollection("users/glarrea/UntitledFolder/TOTAL"),
    villages = ee.FeatureCollection("users/glarrea/UntitledFolder/villages"),
    parks = ee.FeatureCollection("users/glarrea/UntitledFolder/protected"),
    buffer = ee.FeatureCollection("users/glarrea/UntitledFolder/buffer"),
    vecroad = ee.FeatureCollection("users/glarrea/UntitledFolder/third_roads_corrected"),
    geom_clus_3 = /* color: #d63000 */geometry4,
    geom_clus_1 = /* color: #98ff00 */geometry2,
    geom_clus_2 = /* color: #0b4a8b */geometry5,
    geom_clus_4 = /* color: #ffc82d */geometry3,
    geom_clus_5 = /* color: #00ffff */geometry;

var fc = ee.FeatureCollection('ft:11SfWB6oBS1iWGiQxEOqF_wUgBJL7Bux-pWU-mqd5');
//data on http://www.geoidep.gob.pe/servicios-idep/catalogo-nacional-de-servicios-web/servicios-de-publicacion-de-objetos-wfs
var visu = {"opacity":1,"bands":["distance_villages"],"max":50000,"palette":["ff0000","fff700","00f3ff","002bff"]};

///////////////////////////////////////////////////
///////////////// Data preparation  /////////////// 
///////////////////////////////////////////////////
//In the uploaded files, for roads, 'Estado' = 0 refers to existing and 'Estado' = 1 referes to projected

var allroad_existing = nacroad.merge(deproad).merge(vecroad).filterMetadata({
  name:'Estado',
  operator: 'equals',
  value: 0
})


//defining scale for the whole analysis, corresponds to Hansen et al. (2013) map
var projection = deforestation.projection();
var N = 6; //Pre-defined number of regions of analysis
var scale_def = deforestation.projection().nominalScale(); 
var defo = deforestation;
//renaming bands
var carbondensity = carbondensity.rename('carbon_density'); 
var srtm = srtm.rename('altitude');
var limitsgeo = limits.geometry(); // Converting feature collection to geometry


//creating raster layers from shapes (featurecollections)
var allroadRaw = allroad.reduceToImage({
  properties: ['Estado'],
  reducer: ee.Reducer.first()
});

var vecroadRaw = vecroad.reduceToImage({
  properties: ['Estado'],
  reducer: ee.Reducer.first()
});

var nacroadRaw = nacroad.reduceToImage({
  properties: ['Estado'],
  reducer: ee.Reducer.first()
}); 
var deproadRaw = deproad.reduceToImage({
  properties: ['Estado'],
  reducer: ee.Reducer.first()
});


buffer = buffer.map(function(x){//adding property 'id'
  var y = x.set('id',1)
  return y
})
var bufferRaw = buffer.reduceToImage({
  properties: ['id'],
  reducer: ee.Reducer.first()
}).rename('buffer').unmask(0); // 1: inside the buffer zone, 0: outside the buffer zone

parks = parks.map(function(x){//adding property 'id'
  var y = x.set('id',1)
  return y
})
var parksRaw = parks.reduceToImage({
  properties: ['id'],
  reducer: ee.Reducer.first()
}).rename('parks').unmask(0); //1: inside the park, 0: outside the park

var villagesRaw = villages.reduceToImage({
  properties: ['TOT_POB'],
  reducer: ee.Reducer.first()
});

//// SEPARATING EXISTING ROADS FROM PROJECTED ROADS BY MASKING //////////////////////////////////////////////////////////////////////////////////////
//In the uploaded files 'Estado' = 0 refers to existing and 'Estado' = 1 referes to projected

var allroadRas = allroadRaw.not().updateMask(allroadRaw.not());
var allroadRas_proj = allroadRaw.updateMask(allroadRaw);

var nacroadRas = nacroadRaw.not().updateMask(nacroadRaw.not());  //Existing raster
var nacroadRas_proj = nacroadRaw.updateMask(nacroadRaw); //Projected raster

var deproadRas = deproadRaw.not().updateMask(deproadRaw.not());
var deproadRas_proj = deproadRaw.updateMask(deproadRaw);

var vecroadRas = vecroadRaw.add(1); //There is not information of projected roads, only existing

//// CREATING DISTANCES RASTER////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//The distance from each pixel to infraestructure is calculated

var pixel_size = ee.Image.pixelArea().sqrt(); //not yet projected

//distances to existing roads
var dist_allroadpix = allroadRas.fastDistanceTransform(1000, 'pixels', 'squared_euclidean').sqrt(); //calculating distance, not projected yet
var dist_allroad = dist_allroadpix.multiply(pixel_size).rename('distance_any').toInt32(); //reprojecting and calculating distance in meters

var dist_vecroadpix = vecroadRas.fastDistanceTransform(1000, 'pixels', 'squared_euclidean').sqrt(); 
var dist_vecroad = dist_vecroadpix.multiply(pixel_size).rename('distance_vec').toInt32(); 

var dist_deproadpix = deproadRas.fastDistanceTransform(1000, 'pixels', 'squared_euclidean').sqrt();
var dist_deproad = dist_deproadpix.multiply(pixel_size).rename('distance_dep').toInt32();

var dist_nacroadpix = nacroadRas.fastDistanceTransform(1000, 'pixels', 'squared_euclidean').sqrt();
var dist_nacroad = dist_nacroadpix.multiply(pixel_size).rename('distance_nac').toInt32();


//distances to projected roads
var dist_allroadPropix = allroadRaw.fastDistanceTransform(1000, 'pixels', 'squared_euclidean').sqrt(); //calculating distance, not projected yet
var dist_allroad_proj = dist_allroadPropix.multiply(pixel_size).rename('distance_any').toInt32(); //reprojecting and calculating distance in meters

//there is not projected vec_road

var dist_deproadPropix = deproadRas_proj.fastDistanceTransform(1000, 'pixels', 'squared_euclidean').sqrt();
var dist_deproad_proj = dist_deproadPropix.multiply(pixel_size).rename('distance_dep_proj').toInt32();

var dist_nacroadPropix = nacroadRas_proj.fastDistanceTransform(1000, 'pixels', 'squared_euclidean').sqrt();
var dist_nacroad_proj = dist_nacroadPropix.multiply(pixel_size).rename('distance_nac_proj').toInt32();



//distances to buffer zones, protected parks, and villages
var dist_bufferpix = bufferRaw.fastDistanceTransform(3000, 'pixels', 'squared_euclidean').sqrt();
var dist_buffer = dist_bufferpix.multiply(pixel_size).rename('distance_buffer').toInt32();

var dist_parkspix = parksRaw.fastDistanceTransform(3000, 'pixels', 'squared_euclidean').sqrt();
var dist_parks = dist_parkspix.multiply(pixel_size).rename('distance_parks').toInt32();

var dist_villagespix = villagesRaw.fastDistanceTransform(3000, 'pixels', 'squared_euclidean').sqrt();
var dist_villages = dist_villagespix.multiply(pixel_size).rename('distance_villages').toInt32();

//CREATING FINALS RASTER IMAGES////////////////////////////////////////////////////////////////////
// Exporting image with training data
var data_pre = ee.Image.cat(dist_allroad,dist_deproad, dist_vecroad, dist_nacroad, dist_buffer,
                            dist_parks, dist_villages, carbondensity, srtm)

// Export.image.toAsset({image:data_pre, 
// description:'data_pre_v3', 
// assetId:'data_pre_v3', 
// region:geometry7,                                             //uncomment for exporting
// scale:100, 
// maxPixels:1e12})

// Exporting data with data for prediction
var data_to_predict = ee.Image.cat(dist_deproad_proj, dist_vecroad, 
                                  dist_nacroad_proj, dist_buffer, 
                                  dist_parks, dist_villages, srtm,pixlatlon,dist_allroad_proj,carbondensity).clip(limits)

// Map.addLayer(data_to_predict)
Export.image.toAsset({image:data_to_predict, 
description:'data_to_predict_v5', 
assetId:'data_to_predict_v5', 
region:geometry6,                                            //uncomment for exporting
scale:100, 
maxPixels:1e12})

//EXPORTING ALL RASTER LAYERS//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//For inserting layers must call the object: data_preparation in a new script

//All raster layers are in 30m resolution 
exports.dist_allroad=dist_allroad; //distance to any existing road
exports.dist_vecroad=dist_vecroad; //distance to local roads
exports.dist_deproad=dist_deproad; //distance to departament roads
exports.dist_nacroad=dist_nacroad; //distance to national roads
exports.dist_allroad_proj=dist_allroad_proj; //distance to any projected road
exports.dist_deproad_proj=dist_deproad_proj; //distance to departament projected roads
exports.dist_nacroad_proj=dist_nacroad_proj; //distance to national projected roads
exports.carbondensity=carbondensity; //carbon density map from Asner et al. (2013)
exports.srtm=srtm; //Digital elevation map
exports.limitsgeo=limitsgeo; //Geometry of Peru limits
exports.dist_buffer=dist_buffer; //distance to buffer zone
exports.dist_parks=dist_parks; //distance to national park
exports.dist_villages=dist_villages; //distance to village
exports.geom_clus_3 = geom_clus_3

