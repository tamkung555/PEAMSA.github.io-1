// Office Room 1 Welcome Start
function or1_welcome() {
    console.log("Activate Scene: Office Room 1 Welcome:");
    //
    console.log("POST method by jQuery");
    jQuery.ajax({
      url: "https://cors-anywhere.herokuapp.com/https://msr-api.herokuapp.com/api/scene",
      type: "POST",
      headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          "Authorization": "Token 2f1c9297dd604396c347e52746baf9703ceb93fd",
          "Access-Control-Allow-Origin": "https://cors-anywhere.herokuapp.com/https://msr-api.herokuapp.com/api/scene",
          "Access-Control-Allow-Methods": "POST",
          "Access-Control-Allow-Headers": "Content-Type, Authorization",
      },
      contentType: "application/x-www-form-urlencoded",
      data: {
        "scene_id": "fl2_scene011",
      },
    })
  .done(function (data, textStatus, jqXHR) {
        console.log("HTTP Request Succeeded: " + jqXHR.status);
        console.log(data);
      })
      .fail(function (jqXHR, textStatus, errorThrown) {
        console.log("HTTP Request Failed");
      })
      .always(function () {
        /* ... */
      });
    //
  }
// Office Room 1 Welcome End

// Office Room 1 Goodbye Start
function or1_goodbye() {
    console.log("Activate Scene: Office Room 1 Goodbye:");
    //
    console.log("POST method by jQuery");
    jQuery.ajax({
      url: "https://cors-anywhere.herokuapp.com/https://msr-api.herokuapp.com/api/scene",
      type: "POST",
      headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          "Authorization": "Token 2f1c9297dd604396c347e52746baf9703ceb93fd",
          "Access-Control-Allow-Origin": "https://cors-anywhere.herokuapp.com/https://msr-api.herokuapp.com/api/scene",
          "Access-Control-Allow-Methods": "POST",
          "Access-Control-Allow-Headers": "Content-Type, Authorization",
      },
      contentType: "application/x-www-form-urlencoded",
      data: {
        "scene_id": "fl2_scene012",
      },
    })
  .done(function (data, textStatus, jqXHR) {
        console.log("HTTP Request Succeeded: " + jqXHR.status);
        console.log(data);
      })
      .fail(function (jqXHR, textStatus, errorThrown) {
        console.log("HTTP Request Failed");
      })
      .always(function () {
        /* ... */
      });
    //
}

//Office Room 1 Curtain open Start
function or2_curtain_open() {
    console.log("Activate Scene: Office Room 1 Curtain Open:");
    //
    console.log("POST method by jQuery");
    jQuery.ajax({
      url: "https://cors-anywhere.herokuapp.com/https://msr-api.herokuapp.com/api/curtain",
      type: "POST",
      headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          "Authorization": "Token 2f1c9297dd604396c347e52746baf9703ceb93fd",
          "Access-Control-Allow-Origin": "https://cors-anywhere.herokuapp.com/https://msr-api.herokuapp.com/api/curtain",
          "Access-Control-Allow-Methods": "POST",
          "Access-Control-Allow-Headers": "Content-Type, Authorization",
      },
      contentType: "application/x-www-form-urlencoded",
      data: {
        "scene_id": "fl2_scene013",
      },
    })
  .done(function (data, textStatus, jqXHR) {
        console.log("HTTP Request Succeeded: " + jqXHR.status);
        console.log(data);
      })
      .fail(function (jqXHR, textStatus, errorThrown) {
        console.log("HTTP Request Failed");
      })
      .always(function () {
        /* ... */
      });
    //
  }

//Office Room 1 Curtain open end

//Office Room 1 Curtain close Start
function or1_curtain_close() {
    console.log("Activate Scene: Office Room 1 Curtain Close:");
    //
    console.log("POST method by jQuery");
    jQuery.ajax({
      url: "https://cors-anywhere.herokuapp.com/https://msr-api.herokuapp.com/api/curtain",
      type: "POST",
      headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          "Authorization": "Token 2f1c9297dd604396c347e52746baf9703ceb93fd",
          "Access-Control-Allow-Origin": "https://cors-anywhere.herokuapp.com/https://msr-api.herokuapp.com/api/curtain",
          "Access-Control-Allow-Methods": "POST",
          "Access-Control-Allow-Headers": "Content-Type, Authorization",
      },
      contentType: "application/x-www-form-urlencoded",
      data: {
        "scene_id": "fl2_scene014",
      },
    })
  .done(function (data, textStatus, jqXHR) {
        console.log("HTTP Request Succeeded: " + jqXHR.status);
        console.log(data);
      })
      .fail(function (jqXHR, textStatus, errorThrown) {
        console.log("HTTP Request Failed");
      })
      .always(function () {
        /* ... */
      });
    //
  
}

//Office Room 1 Curtain close end