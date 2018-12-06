var defo = {"opacity":1,"bands":["cluster"],"min":1,"max":8,"palette":["0400ff"]},
    table = ee.FeatureCollection("users/glarrea/UntitledFolder/Perulimit"),
    image = ee.Image("users/glarrea/classified_train_mdd_29oct"),
    image2 = ee.Image("users/glarrea/clusters_8_2010_2017"),
    hansen = ee.Image("UMD/hansen/global_forest_change_2017_v1_5"),
    clusters = ee.Image("users/glarrea/clusters_8_2010_2017"),
    vis_cluster = {"opacity":1,"bands":["cluster"],"min":0,"max":1,"palette":["fbff01"]},
    rf_no_lat_long = ee.Image("users/glarrea/predicted_all_nocarb_noclus_nolonlat_prob_mdd"),
    vis_rf_no_lat_long = {"opacity":1,"bands":["classification"],"palette":["000000","03ff00","ff0000","0000ff","001fff"]},
    rf_reg_no_lat_lon = ee.Image("users/glarrea/predicted_all_nocarb_nolonlat_reg_mdd");
	
// var map1=ui.Map(), map2 =ui.Map();
// map1.setCenter(-73, -9.74, 6)
// map2.setCenter(-73, -9.74, 6)
// map1.setOptions("SATELLITE")
// map1.addLayer(clusters,vis_cluster,'real')
// map2.addLayer(rf_reg_no_lat_lon,vis_rf_no_lat_long, 'Random forest - regression');
// map2.addLayer(rf_no_lat_long,vis_rf_no_lat_long, 'Random forest - No coordinates');



// ui.root.clear();
// ui.root.add(map1);
// ui.root.add(map2);
// ui.Map.Linker([map1, map2], 'change-bounds');


Map.setOptions("SATELLITE")
Map.addLayer(clusters,vis_cluster,'real')

var linkedMap = new ui.Map();
linkedMap.addLayer(rf_reg_no_lat_lon,vis_rf_no_lat_long, 'Random forest - regression');
linkedMap.addLayer(rf_no_lat_long,vis_rf_no_lat_long , 'Random forest - No coordinates');

// Link the default Map to the other map.
var linker = ui.Map.Linker([ui.root.widgets().get(0), linkedMap]);



// Create a SplitPanel which holds the linked maps side-by-side.
var splitPanel = new ui.SplitPanel({
  firstPanel: linker.get(0),
  secondPanel: linker.get(1),
  orientation: 'horizontal',
  wipe: true,
  style: {stretch: 'both'}
});

// Set the SplitPanel as the only thing in root.
ui.root.widgets().reset([splitPanel]);
linkedMap.setCenter(-73, -9.74, 6);




// var slider1 = ui.Slider().setMax(100).setMin(0).setStep(10);
// slider1.setValue(50);  // Set a default value.
// slider1.onChange(function(value) {
//   var value_2=value/100
//   Map.layers().get(1).setVisParams(colors[value_2]);
// });



// var slider2 = ui.Slider();
// slider2.setValue(0.6);  // Set a default value.
// slider2.onChange(function(value) {
//   Map.layers().get(1).setOpacity(value);
// });
// var pan = ui.Panel([slider1,slider2], ui.Panel.Layout.flow('horizontal'))
// ui.root.add(pan)
