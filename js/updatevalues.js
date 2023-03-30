
jQuery(document).ready(function($){
  $.ajax({
      url: 'https://stats.kudoge.io/?token=KuDoge&jsonpCallback=jsonCallback',
      dataType: 'jsonp',
      jsonpCallback: "jsonCallback",
      success: function(data){
        $("#kudo-stat-price").html(data.price);
        $("#kudo-stat-mcap").html(data.marketcap);
        $("#kudo-stat-holders").html(data.holder);
        $("#kudo-stat-supply").html("<span>Current Supply:</span>"+data.supply);
        $(".token-stats-container").removeClass("loading-data");
      }
  });

  $("#metamask-button").click(async function(event ) {
    event.preventDefault();
    try {
      const wasAdded = await window.ethereum.request({
        method: 'wallet_watchAsset',
        params: {
          type: 'ERC20',
          options: {
            address: "",
            symbol: "ZKPAD",
            decimals: 18,
            image: "https://zkpad.netlify.app/images/kudoge-social-icon.png",
          },
        },
      });
    } catch (error) {
      console.log(error);
    }
  });

  if(window.ethereum != undefined) {
    $("#metamask-button").css("display", "block");
  }
});
