var analytics={enabled:!0,screens:{main:"Main screen",about:"About",achievements:"Achievements",info:"Physics information"},events:{categoryResearch:"Research",categoryHR:"HR",categoryUpgrades:"Upgrades",actionResearch:"Research",actionHire:"Hire",actionBuy:"Buy"},init:function(){void 0!==Helpers.analytics&&""!=Helpers.analytics?(ga("create",Helpers.analytics),ga("set",{appName:"Particle Clicker",appId:"ch.cern.particle-clicker",appVersion:"0.9"}),ga("set","anonymizeIp",!0),$("#myModal").on("show.bs.modal",(function(e){analytics.sendScreen(analytics.screens.about)})),$("#myModal").on("hide.bs.modal",(function(e){analytics.sendScreen(analytics.screens.main)})),$("#achievements-modal").on("show.bs.modal",(function(e){analytics.sendScreen(analytics.screens.achievements)})),$("#achievements-modal").on("hide.bs.modal",(function(e){analytics.sendScreen(analytics.screens.main)})),$("#infoBox").on("show.bs.modal",(function(e){analytics.sendScreen(analytics.screens.info)})),$("#infoBox").on("hide.bs.modal",(function(e){analytics.sendScreen(analytics.screens.main)}))):analytics.enabled=!1},sendScreen:function(e){analytics.enabled&&void 0!==e&&ga("send","screenview",{screenName:e})},sendEvent:function(e,n,a,s){analytics.enabled}};
