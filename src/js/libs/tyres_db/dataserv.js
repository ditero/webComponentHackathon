define(['knockout', 'jquery'], function (ko, $, ais) {



  function getItemsAPI() {
    // use a promise for async data
    const df = $.Deferred();
    var headers = {

      'customer-locations': 'Customer Locations',
      'number_Customers': 'No. of customers'
    };

    // var table2 = {
    //   'customer-locations': 'Customer Locations',
    //   'number_Customers': 'No. of customers'
    // }



    return df.promise()
  }

  function getItemsStatic() {
    // filter-table requires an observable for the rows
    // let stockLevel = ko.observableArray();
    let storeLocation = ko.observableArray();

    let headers = []
    // let table2 = []
    var items;
//     $.ajax({url: "https://tyre-api.herokuapp.com/api/shops", type: 'get', success: function(result){
// //            let brands = [];
//     items = result
//     let cnt = 0; // var for our rowIndex prop
//     // add the rowIndex
//     items.forEach(function (oneItem) {
//       oneItem.rowIndex = cnt; // add rowIndex since our rows do not have unique keys
//       cnt++
//     })
//         // for (var i in result) {
//         //     self.storeData.push(result[i]);
//         // }
//         // console.log(result);
//         // add the mutated rows to our observable
//         stockLevel(result);
// //
//     }})
var items;

    $.ajax({
         url: "https://tyre-api.herokuapp.com/api/shops/",
         type: 'get',
         success: function(result) {
           // console.log(result);
            //  var cus_loc = []
            //  var newArr = {}
            //  var data =[]
             items = result
          //  for (var i in result) {
          //    cus_loc.push(result[i].customers_locations);
           //
          //    }
          //    for (var i = 0; i < cus_loc.length; i++) {
           //
           //
          //      for (var x = 0; x < cus_loc[i].length; x++) {
          //        if (newArr[cus_loc[i][x]] === undefined){
          //          newArr[cus_loc[i][x]] = 1;
          //        }else {
          //          newArr[cus_loc[i][x]]++;
          //        }
          //      }
          //    }
          //    data.push(newArr)
          //             console.log(result);
          let cnt = 0; // var for our rowIndex prop
          // add the rowIndex
          items.forEach(function (oneItem) {
            oneItem.rowIndex = cnt; // add rowIndex since our rows do not have unique keys
            cnt++
          })
                      storeLocation(result)
                      console.log(result.customer_locations);
            }
       })
       .fail(function(jqXHR) {
         console.log(jqXHR)
       });

        // set our headers object
        // key is used to fetch the data from rows
        // value is displayed as the filter-table headers
        headers = {
          'customer-locations': 'Customer Locations',
          'number_Customers': 'No. of customers'
        };

        //  table2 = {
        //   'customer-locations': 'Customer Locations',
        //   'number_Customers': 'No. of customers'
        // };

        // return an object we can use in filter-table
        return {
          rows: storeLocation,
          headers: headers
        }
      }

      return {
        getItemsStatic: getItemsStatic,
        getItemsAPI: getItemsAPI
      }
    });
