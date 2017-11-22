define(['knockout', 'jquery'], function (ko, $, ais) {



  function getItemsAPI() {
    // use a promise for async data
    const df = $.Deferred();
    var headers = {

      'store_location': 'Store Location',
      'stock': 'Stock Level'
    };



    return df.promise()
  }

  function getItemsStatic() {
    // filter-table requires an observable for the rows
    let itemsHolder = ko.observableArray();
    let headers = []
    var items;
    $.ajax({url: "https://tyre-api.herokuapp.com/api/shops", type: 'get', success: function(result){
//            let brands = [];
    items = result
    let cnt = 0; // var for our rowIndex prop
    // add the rowIndex
    items.forEach(function (oneItem) {
      oneItem.rowIndex = cnt; // add rowIndex since our rows do not have unique keys
      cnt++
    })
        // for (var i in result) {
        //     self.storeData.push(result[i]);
        // }
        console.log(result);
        // add the mutated rows to our observable
        itemsHolder(result);
//
    }})

        // set our headers object
        // key is used to fetch the data from rows
        // value is displayed as the filter-table headers
        headers = {
          'store_location': 'Store Location',
          'stock': 'Stock Level'
        };

        // return an object we can use in filter-table
        return {
          rows: itemsHolder,
          headers: headers
        }
      }

      return {
        getItemsStatic: getItemsStatic,
        getItemsAPI: getItemsAPI
      }
    });
