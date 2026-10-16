var n=`{
 "registrations": [
  {
   "name": "native_loadFile",
   "helper": "member",
   "registered_in": "0x404f80",
   "call_site": "0x405039",
   "impl": "0x403d50",
   "thunk": "0x407db0",
   "owner": "Assets",
   "lua_uses": 1,
   "observed_argc": {
    "1": 1
   }
  },
  {
   "name": "native_loadFiles",
   "helper": "member",
   "registered_in": "0x404f80",
   "call_site": "0x405059",
   "impl": "0x403fe0",
   "thunk": "0x402c70",
   "owner": "Assets",
   "lua_uses": 1,
   "observed_argc": {
    "1": 1
   }
  },
  {
   "name": "native_unzipArchive",
   "helper": "res",
   "registered_in": "0x404f80",
   "call_site": "0x40506b",
   "impl": null,
   "thunk": "0x4045c0",
   "owner": "Assets",
   "lua_uses": 1,
   "observed_argc": {
    "3": 1
   }
  },
  {
   "name": "native_loadCloudSettings",
   "helper": "member",
   "registered_in": "0x406400",
   "call_site": "0x4064c2",
   "impl": "0x405db0",
   "thunk": "0x405800",
   "owner": "CloudSync",
   "lua_uses": 1,
   "observed_argc": {
    "0": 1
   }
  },
  {
   "name": "native_saveCloudSettings",
   "helper": "member",
   "registered_in": "0x406400",
   "call_site": "0x4064e2",
   "impl": "0x406180",
   "thunk": "0x406130",
   "owner": "CloudSync",
   "lua_uses": 1,
   "observed_argc": {
    "1": 1
   }
  },
  {
   "name": "native_setRequestTimeout",
   "helper": "member",
   "registered_in": "0x406400",
   "call_site": "0x406502",
   "impl": "0x4051c0",
   "thunk": "0x405880",
   "owner": "CloudSync",
   "lua_uses": 1,
   "observed_argc": {
    "1": 1
   }
  },
  {
   "name": "native_login",
   "helper": "member",
   "registered_in": "0x408800",
   "call_site": "0x408a22",
   "impl": "0x4086f0",
   "thunk": "0x406bc0",
   "owner": "RovioAccount",
   "lua_uses": 1,
   "observed_argc": {
    "2": 1
   }
  },
  {
   "name": "native_logout",
   "helper": "member",
   "registered_in": "0x408800",
   "call_site": "0x408a42",
   "impl": "0x406540",
   "thunk": "0x47bce0",
   "owner": "RovioAccount",
   "lua_uses": 1,
   "observed_argc": {
    "0": 1
   }
  },
  {
   "name": "native_createLeaderboardView",
   "helper": "member",
   "registered_in": "0x408800",
   "call_site": "0x408a62",
   "impl": "0x406e10",
   "thunk": "0x407db0",
   "owner": "RovioAccount",
   "lua_uses": 0,
   "observed_argc": {}
  },
  {
   "name": "native_closeLeaderboardView",
   "helper": "member",
   "registered_in": "0x408800",
   "call_site": "0x408a82",
   "impl": "0x4065e0",
   "thunk": "0x47bce0",
   "owner": "RovioAccount",
   "lua_uses": 0,
   "observed_argc": {}
  },
  {
   "name": "native_showLeaderboardView",
   "helper": "member",
   "registered_in": "0x408800",
   "call_site": "0x408aa2",
   "impl": "0x406ae0",
   "thunk": "0x406da0",
   "owner": "RovioAccount",
   "lua_uses": 0,
   "observed_argc": {}
  },
  {
   "name": "native_hideLeaderboardView",
   "helper": "member",
   "registered_in": "0x408800",
   "call_site": "0x408ac2",
   "impl": "0x406770",
   "thunk": "0x47bce0",
   "owner": "RovioAccount",
   "lua_uses": 0,
   "observed_argc": {}
  },
  {
   "name": "native_postScores",
   "helper": "member",
   "registered_in": "0x408800",
   "call_site": "0x408ae2",
   "impl": "0x406fa0",
   "thunk": "0x407db0",
   "owner": "RovioAccount",
   "lua_uses": 0,
   "observed_argc": {}
  },
  {
   "name": "spawnBGLayerParticles",
   "helper": "res",
   "registered_in": "0x4182a0",
   "call_site": "0x418368",
   "impl": null,
   "thunk": null,
   "owner": "themeSystem",
   "lua_uses": 26,
   "observed_argc": {
    "1": 1
   }
  },
  {
   "name": "spawnFGLayerParticles",
   "helper": "res",
   "registered_in": "0x4182a0",
   "call_site": "0x41837a",
   "impl": null,
   "thunk": "0x459ae0",
   "owner": "themeSystem",
   "lua_uses": 3,
   "observed_argc": {
    "1": 2
   }
  },
  {
   "name": "openBarnesAndNobleShop",
   "helper": "member",
   "registered_in": "0x447520",
   "call_site": "0x447f76",
   "impl": "0x41ada0",
   "thunk": "0x42c9d0",
   "owner": "_G",
   "lua_uses": 0,
   "observed_argc": {}
  },
  {
   "name": "requestExit",
   "helper": "member",
   "registered_in": "0x447520",
   "call_site": "0x447fb3",
   "impl": "0x41eba0",
   "thunk": "0x417b30",
   "owner": "_G",
   "lua_uses": 5,
   "observed_argc": {
    "0": 5
   }
  },
  {
   "name": "print",
   "helper": "member",
   "registered_in": "0x447520",
   "call_site": "0x447ff0",
   "impl": "0x41ada0",
   "thunk": "0x42c9d0",
   "owner": "_G",
   "lua_uses": 401,
   "observed_argc": {
    "1": 366,
    "2": 1,
    "3": 2
   }
  },
  {
   "name": "setBGColor",
   "helper": "member",
   "registered_in": "0x447520",
   "call_site": "0x44802d",
   "impl": "0x414890",
   "thunk": "0x41e020",
   "owner": "_G",
   "lua_uses": 4,
   "observed_argc": {
    "3": 4
   }
  },
  {
   "name": "getBGColor",
   "helper": "gamelua_extra",
   "registered_in": "0x447520",
   "call_site": "0x448043",
   "impl": "0x414830",
   "thunk": null,
   "owner": "_G",
   "lua_uses": 1,
   "observed_argc": {
    "0": 1
   }
  },
  {
   "name": "native_setMass",
   "helper": "gamelua_extra",
   "registered_in": "0x447520",
   "call_site": "0x448059",
   "impl": "0x4328e0",
   "thunk": null,
   "owner": "_G",
   "lua_uses": 0,
   "observed_argc": {}
  },
  {
   "name": "drawRubberband",
   "helper": "member",
   "registered_in": "0x447520",
   "call_site": "0x448096",
   "impl": "0x41cdd0",
   "thunk": "0x42ca20",
   "owner": "_G",
   "lua_uses": 3,
   "observed_argc": {
    "6": 3
   }
  },
  {
   "name": "checkForUpdates",
   "helper": "member",
   "registered_in": "0x447520",
   "call_site": "0x4480d3",
   "impl": "0x42e510",
   "thunk": "0x417b30",
   "owner": "_G",
   "lua_uses": 1,
   "observed_argc": {
    "0": 1
   }
  },
  {
   "name": "callVersionUpdater",
   "helper": "member",
   "registered_in": "0x447520",
   "call_site": "0x448110",
   "impl": "0x42c330",
   "thunk": "0x417b30",
   "owner": "_G",
   "lua_uses": 1,
   "observed_argc": {
    "0": 1
   }
  },
  {
   "name": "captureMouse",
   "helper": "member",
   "registered_in": "0x447520",
   "call_site": "0x44814d",
   "impl": "0x414b50",
   "thunk": "0x41d320",
   "owner": "_G",
   "lua_uses": 3,
   "observed_argc": {
    "1": 3
   }
  },
  {
   "name": "isMouseCaptured",
   "helper": "member",
   "registered_in": "0x447520",
   "call_site": "0x44818a",
   "impl": "0x414bb0",
   "thunk": "0x417b70",
   "owner": "_G",
   "lua_uses": 2,
   "observed_argc": {
    "0": 2
   }
  },
  {
   "name": "setFullScreenMode",
   "helper": "member",
   "registered_in": "0x447520",
   "call_site": "0x4481c7",
   "impl": "0x414b30",
   "thunk": "0x41d320",
   "owner": "_G",
   "lua_uses": 3,
   "observed_argc": {
    "3": 1,
    "6": 2
   }
  },
  {
   "name": "setResolution",
   "helper": "member",
   "registered_in": "0x447520",
   "call_site": "0x448204",
   "impl": "0x414b00",
   "thunk": "0x41e0b0",
   "owner": "_G",
   "lua_uses": 1,
   "observed_argc": {
    "2": 1
   }
  },
  {
   "name": "getFullScreenWidth",
   "helper": "member",
   "registered_in": "0x447520",
   "call_site": "0x448241",
   "impl": "0x487480",
   "thunk": "0x41d380",
   "owner": "_G",
   "lua_uses": 0,
   "observed_argc": {}
  },
  {
   "name": "getFullScreenHeight",
   "helper": "member",
   "registered_in": "0x447520",
   "call_site": "0x44827e",
   "impl": "0x487480",
   "thunk": "0x41d380",
   "owner": "_G",
   "lua_uses": 0,
   "observed_argc": {}
  },
  {
   "name": "isInFullScreenMode",
   "helper": "member",
   "registered_in": "0x447520",
   "call_site": "0x4482bb",
   "impl": "0x414bc0",
   "thunk": "0x417b70",
   "owner": "_G",
   "lua_uses": 5,
   "observed_argc": {
    "0": 5
   }
  },
  {
   "name": "getClipboardText",
   "helper": "member",
   "registered_in": "0x447520",
   "call_site": "0x4482f8",
   "impl": "0x42a1f0",
   "thunk": "0x41e130",
   "owner": "_G",
   "lua_uses": 1,
   "observed_argc": {
    "0": 1
   }
  },
  {
   "name": "setIsMultitouchMouseWheelSimulationEnabled",
   "helper": "member",
   "registered_in": "0x447520",
   "call_site": "0x448335",
   "impl": "0x414b70",
   "thunk": "0x41d320",
   "owner": "_G",
   "lua_uses": 2,
   "observed_argc": {
    "1": 2
   }
  },
  {
   "name": "doesMouseClickSetsTouchCount",
   "helper": "member",
   "registered_in": "0x447520",
   "call_site": "0x448372",
   "impl": "0x513120",
   "thunk": "0x417b70",
   "owner": "_G",
   "lua_uses": 0,
   "observed_argc": {}
  },
  {
   "name": "enableSmoothZooming",
   "helper": "member",
   "registered_in": "0x447520",
   "call_site": "0x4483af",
   "impl": "0x414b90",
   "thunk": "0x41d320",
   "owner": "_G",
   "lua_uses": 1,
   "observed_argc": {
    "1": 1
   }
  },
  {
   "name": "native_initPaymentProvider",
   "helper": "member",
   "registered_in": "0x447520",
   "call_site": "0x4483ec",
   "impl": "0x571c50",
   "thunk": "0x417b30",
   "owner": "_G",
   "lua_uses": 4,
   "observed_argc": {
    "0": 4
   }
  },
  {
   "name": "native_isPaymentInitialized",
   "helper": "member",
   "registered_in": "0x447520",
   "call_site": "0x448429",
   "impl": "0x5987f0",
   "thunk": "0x417b70",
   "owner": "_G",
   "lua_uses": 1,
   "observed_argc": {
    "0": 1
   }
  },
  {
   "name": "setAccelerometerSensitivity",
   "helper": "member",
   "registered_in": "0x447520",
   "call_site": "0x448466",
   "impl": "0x415740",
   "thunk": "0x41e1c0",
   "owner": "_G",
   "lua_uses": 1,
   "observed_argc": {
    "1": 1
   }
  },
  {
   "name": "registerKey",
   "helper": "member",
   "registered_in": "0x447520",
   "call_site": "0x4484a3",
   "impl": "0x421430",
   "thunk": "0x42ca70",
   "owner": "_G",
   "lua_uses": 4,
   "observed_argc": {
    "3": 1,
    "6": 2
   }
  },
  {
   "name": "verifyDeviceID",
   "helper": "member",
   "registered_in": "0x447520",
   "call_site": "0x4484e0",
   "impl": "0x41cc80",
   "thunk": "0x42cac0",
   "owner": "_G",
   "lua_uses": 1,
   "observed_argc": {
    "2": 1
   }
  },
  {
   "name": "getDeviceID",
   "helper": "member",
   "registered_in": "0x447520",
   "call_site": "0x44851d",
   "impl": "0x41cd20",
   "thunk": "0x41e130",
   "owner": "_G",
   "lua_uses": 1,
   "observed_argc": {
    "0": 1
   }
  },
  {
   "name": "checkRegistrationResult",
   "helper": "gamelua_extra",
   "registered_in": "0x447520",
   "call_site": "0x448533",
   "impl": "0x415750",
   "thunk": null,
   "owner": "_G",
   "lua_uses": 1,
   "observed_argc": {
    "0": 1
   }
  },
  {
   "name": "setGravityForceMultiplier",
   "helper": "member",
   "registered_in": "0x447520",
   "call_site": "0x448619",
   "impl": "0x414e20",
   "thunk": "0x41e1c0",
   "owner": "_G",
   "lua_uses": 0,
   "observed_argc": {}
  },
  {
   "name": "getGravityForceMultiplier",
   "helper": "member",
   "registered_in": "0x447520",
   "call_site": "0x448656",
   "impl": "0x414e30",
   "thunk": "0x41d3e0",
   "owner": "_G",
   "lua_uses": 0,
   "observed_argc": {}
  },
  {
   "name": "setWaterForceMultiplier",
   "helper": "member",
   "registered_in": "0x447520",
   "call_site": "0x448693",
   "impl": "0x414e40",
   "thunk": "0x41e1c0",
   "owner": "_G",
   "lua_uses": 0,
   "observed_argc": {}
  },
  {
   "name": "getWaterForceMultiplier",
   "helper": "member",
   "registered_in": "0x447520",
   "call_site": "0x4486d0",
   "impl": "0x414e50",
   "thunk": "0x41d3e0",
   "owner": "_G",
   "lua_uses": 0,
   "observed_argc": {}
  },
  {
   "name": "native_setBirdWaterDrag",
   "helper": "member",
   "registered_in": "0x447520",
   "call_site": "0x44870d",
   "impl": "0x414e60",
   "thunk": "0x41e1c0",
   "owner": "_G",
   "lua_uses": 2,
   "observed_argc": {
    "1": 2
   }
  },
  {
   "name": "native_setObjectWaterDrag",
   "helper": "member",
   "registered_in": "0x447520",
   "call_site": "0x44874a",
   "impl": "0x414e70",
   "thunk": "0x41e1c0",
   "owner": "_G",
   "lua_uses": 2,
   "observed_argc": {
    "1": 2
   }
  },
  {
   "name": "native_setWaterColor",
   "helper": "member",
   "registered_in": "0x447520",
   "call_site": "0x448787",
   "impl": "0x414e80",
   "thunk": "0x41e220",
   "owner": "_G",
   "lua_uses": 2,
   "observed_argc": {
    "4": 2
   }
  },
  {
   "name": "native_setAdditionalBirdGravityX",
   "helper": "member",
   "registered_in": "0x447520",
   "call_site": "0x4487c4",
   "impl": "0x414e00",
   "thunk": "0x41e1c0",
   "owner": "_G",
   "lua_uses": 1,
   "observed_argc": {
    "1": 1
   }
  },
  {
   "name": "native_setAdditionalBirdGravityY",
   "helper": "member",
   "registered_in": "0x447520",
   "call_site": "0x448801",
   "impl": "0x414e10",
   "thunk": "0x41e1c0",
   "owner": "_G",
   "lua_uses": 2,
   "observed_argc": {
    "1": 2
   }
  },
  {
   "name": "ClearSimulationTrajectory",
   "helper": "member",
   "registered_in": "0x447520",
   "call_site": "0x44883e",
   "impl": "0x42bfd0",
   "thunk": "0x417b30",
   "owner": "_G",
   "lua_uses": 4,
   "observed_argc": {
    "0": 4
   }
  },
  {
   "name": "setDeltaTimeMultiplier",
   "helper": "member",
   "registered_in": "0x447520",
   "call_site": "0x44887b",
   "impl": "0x414980",
   "thunk": "0x41e1c0",
   "owner": "_G",
   "lua_uses": 4,
   "observed_argc": {
    "1": 4
   }
  },
  {
   "name": "getDeltaTimeMultiplier",
   "helper": "member",
   "registered_in": "0x447520",
   "call_site": "0x4488b8",
   "impl": "0x414990",
   "thunk": "0x41d3e0",
   "owner": "_G",
   "lua_uses": 17,
   "observed_argc": {
    "0": 17
   }
  },
  {
   "name": "setSensorMinimumAndMaximumForces",
   "helper": "member",
   "registered_in": "0x447520",
   "call_site": "0x4488f5",
   "impl": "0x432730",
   "thunk": "0x42cb10",
   "owner": "_G",
   "lua_uses": 0,
   "observed_argc": {}
  },
  {
   "name": "setSensorGravityMask",
   "helper": "member",
   "registered_in": "0x447520",
   "call_site": "0x448932",
   "impl": "0x432650",
   "thunk": "0x42cb60",
   "owner": "_G",
   "lua_uses": 2,
   "observed_argc": {
    "2": 2
   }
  },
  {
   "name": "setObjectGravityCategory",
   "helper": "member",
   "registered_in": "0x447520",
   "call_site": "0x44896f",
   "impl": "0x4326c0",
   "thunk": "0x42cb60",
   "owner": "_G",
   "lua_uses": 14,
   "observed_argc": {
    "2": 14
   }
  },
  {
   "name": "GetDate",
   "helper": "member",
   "registered_in": "0x447520",
   "call_site": "0x4489ac",
   "impl": "0x413e10",
   "thunk": "0x41d380",
   "owner": "_G",
   "lua_uses": 0,
   "observed_argc": {}
  },
  {
   "name": "drawUITextNative",
   "helper": "gamelua_extra",
   "registered_in": "0x447520",
   "call_site": "0x4489c2",
   "impl": "0x41f5c0",
   "thunk": null,
   "owner": "_G",
   "lua_uses": 4,
   "observed_argc": {
    "3": 2,
    "6": 1,
    "7": 1
   }
  },
  {
   "name": "iapBuyItem",
   "helper": "member",
   "registered_in": "0x447520",
   "call_site": "0x4489ff",
   "impl": "0x423590",
   "thunk": "0x42cbb0",
   "owner": "_G",
   "lua_uses": 2,
   "observed_argc": {
    "2": 2
   }
  },
  {
   "name": "iapInitItemPurchase",
   "helper": "member",
   "registered_in": "0x447520",
   "call_site": "0x448a3c",
   "impl": "0x423620",
   "thunk": "0x42c9d0",
   "owner": "_G",
   "lua_uses": 0,
   "observed_argc": {}
  },
  {
   "name": "iapGetItemCount",
   "helper": "member",
   "registered_in": "0x447520",
   "call_site": "0x448a79",
   "impl": "0x4156f0",
   "thunk": "0x41d3e0",
   "owner": "_G",
   "lua_uses": 1,
   "observed_argc": {
    "0": 1
   }
  },
  {
   "name": "iapGetItemAt",
   "helper": "member",
   "registered_in": "0x447520",
   "call_site": "0x448ab6",
   "impl": "0x415700",
   "thunk": "0x41e270",
   "owner": "_G",
   "lua_uses": 1,
   "observed_argc": {
    "1": 1
   }
  },
  {
   "name": "iapSetItemDescription",
   "helper": "member",
   "registered_in": "0x447520",
   "call_site": "0x448af3",
   "impl": "0x41cbe0",
   "thunk": "0x42cc00",
   "owner": "_G",
   "lua_uses": 0,
   "observed_argc": {}
  },
  {
   "name": "iapRestoreItems",
   "helper": "member",
   "registered_in": "0x447520",
   "call_site": "0x448b30",
   "impl": "0x423620",
   "thunk": "0x42c9d0",
   "owner": "_G",
   "lua_uses": 2,
   "observed_argc": {
    "1": 2
   }
  },
  {
   "name": "native_iapRestorePurchases",
   "helper": "member",
   "registered_in": "0x447520",
   "call_site": "0x448b6d",
   "impl": "0x415740",
   "thunk": "0x41d320",
   "owner": "_G",
   "lua_uses": 2,
   "observed_argc": {
    "1": 2
   }
  },
  {
   "name": "iapIsAllowed",
   "helper": "member",
   "registered_in": "0x447520",
   "call_site": "0x448baa",
   "impl": "0x5987f0",
   "thunk": "0x417b70",
   "owner": "_G",
   "lua_uses": 1,
   "observed_argc": {
    "0": 1
   }
  },
  {
   "name": "resetTimer",
   "helper": "member",
   "registered_in": "0x447520",
   "call_site": "0x448be7",
   "impl": "0x414a00",
   "thunk": "0x417b30",
   "owner": "_G",
   "lua_uses": 3,
   "observed_argc": {
    "1": 2
   }
  },
  {
   "name": "logFlurryTimerEvent",
   "helper": "member",
   "registered_in": "0x447520",
   "call_site": "0x448c24",
   "impl": "0x437960",
   "thunk": "0x42c9d0",
   "owner": "_G",
   "lua_uses": 2,
   "observed_argc": {
    "1": 2
   }
  },
  {
   "name": "native_startURLThread",
   "helper": "gamelua_extra",
   "registered_in": "0x447520",
   "call_site": "0x448c3a",
   "impl": "0x435c80",
   "thunk": null,
   "owner": "_G",
   "lua_uses": 2,
   "observed_argc": {
    "2": 2
   }
  },
  {
   "name": "updateBirdTrajectoryTable",
   "helper": "member",
   "registered_in": "0x447520",
   "call_site": "0x448c77",
   "impl": "0x42fb60",
   "thunk": "0x417b30",
   "owner": "_G",
   "lua_uses": 1,
   "observed_argc": {
    "0": 1
   }
  },
  {
   "name": "populateAimingAid",
   "helper": "member",
   "registered_in": "0x447520",
   "call_site": "0x448cb4",
   "impl": "0x415db0",
   "thunk": "0x417b30",
   "owner": "_G",
   "lua_uses": 1,
   "observed_argc": {
    "0": 1
   }
  },
  {
   "name": "setSelectedBirdDuringSimulation",
   "helper": "member",
   "registered_in": "0x447520",
   "call_site": "0x448cf1",
   "impl": "0x4274a0",
   "thunk": "0x42c9d0",
   "owner": "_G",
   "lua_uses": 1,
   "observed_argc": {
    "1": 1
   }
  },
  {
   "name": "renderGravityVisualsNative",
   "helper": "gamelua_extra",
   "registered_in": "0x447520",
   "call_site": "0x448d07",
   "impl": "0x41ed60",
   "thunk": null,
   "owner": "_G",
   "lua_uses": 1,
   "observed_argc": {
    "4": 1
   }
  },
  {
   "name": "setNotificationsEnabled",
   "helper": "member",
   "registered_in": "0x447520",
   "call_site": "0x448d44",
   "impl": "0x4171c0",
   "thunk": "0x41d320",
   "owner": "_G",
   "lua_uses": 0,
   "observed_argc": {}
  },
  {
   "name": "addNotificationAfter",
   "helper": "member",
   "registered_in": "0x447520",
   "call_site": "0x448d81",
   "impl": "0x41cc00",
   "thunk": "0x42cc50",
   "owner": "_G",
   "lua_uses": 1,
   "observed_argc": {
    "4": 1
   }
  },
  {
   "name": "removeNotification",
   "helper": "member",
   "registered_in": "0x447520",
   "call_site": "0x448dbe",
   "impl": "0x41cc60",
   "thunk": "0x42cac0",
   "owner": "_G",
   "lua_uses": 1,
   "observed_argc": {
    "1": 1
   }
  },
  {
   "name": "removeAllNotifications",
   "helper": "member",
   "registered_in": "0x447520",
   "call_site": "0x448dfb",
   "impl": "0x416b30",
   "thunk": "0x417b30",
   "owner": "_G",
   "lua_uses": 0,
   "observed_argc": {}
  },
  {
   "name": "setNotificationCallback",
   "helper": "member",
   "registered_in": "0x447520",
   "call_site": "0x448e38",
   "impl": "0x421c10",
   "thunk": "0x42c9d0",
   "owner": "_G",
   "lua_uses": 1,
   "observed_argc": {
    "1": 1
   }
  },
  {
   "name": "setWorldGravity",
   "helper": "member",
   "registered_in": "0x447520",
   "call_site": "0x448e75",
   "impl": "0x4149d0",
   "thunk": "0x41e0b0",
   "owner": "_G",
   "lua_uses": 1,
   "observed_argc": {
    "2": 1
   }
  },
  {
   "name": "enableAimingAid",
   "helper": "member",
   "registered_in": "0x447520",
   "call_site": "0x448eb2",
   "impl": "0x413ca0",
   "thunk": "0x41d320",
   "owner": "_G",
   "lua_uses": 3,
   "observed_argc": {
    "1": 3
   }
  },
  {
   "name": "renderMaskedImageNative",
   "helper": "member",
   "registered_in": "0x447520",
   "call_site": "0x448eef",
   "impl": "0x42dfb0",
   "thunk": "0x42cca0",
   "owner": "_G",
   "lua_uses": 0,
   "observed_argc": {}
  },
  {
   "name": "drawString3D",
   "helper": "member",
   "registered_in": "0x447520",
   "call_site": "0x448f2c",
   "impl": "0x41c960",
   "thunk": "0x42ccf0",
   "owner": "_G",
   "lua_uses": 1,
   "observed_argc": {
    "9": 1
   }
  },
  {
   "name": "createBox",
   "helper": "member",
   "registered_in": "0x447520",
   "call_site": "0x448f69",
   "impl": "0x442470",
   "thunk": "0x42cd40",
   "owner": "_G",
   "lua_uses": 2,
   "observed_argc": {
    "12": 2
   }
  },
  {
   "name": "createCircle",
   "helper": "member",
   "registered_in": "0x447520",
   "call_site": "0x448fa6",
   "impl": "0x442b30",
   "thunk": "0x42cd90",
   "owner": "_G",
   "lua_uses": 2,
   "observed_argc": {
    "11": 2
   }
  },
  {
   "name": "createPolygon",
   "helper": "member",
   "registered_in": "0x447520",
   "call_site": "0x448fe3",
   "impl": "0x443840",
   "thunk": "0x42cd40",
   "owner": "_G",
   "lua_uses": 1,
   "observed_argc": {
    "12": 1
   }
  },
  {
   "name": "createLineShape",
   "helper": "member",
   "registered_in": "0x447520",
   "call_site": "0x449020",
   "impl": "0x443170",
   "thunk": "0x42cd40",
   "owner": "_G",
   "lua_uses": 1,
   "observed_argc": {
    "12": 1
   }
  },
  {
   "name": "createJoint",
   "helper": "gamelua_extra",
   "registered_in": "0x447520",
   "call_site": "0x449036",
   "impl": "0x4334c0",
   "thunk": null,
   "owner": "_G",
   "lua_uses": 7,
   "observed_argc": {
    "1": 7
   }
  },
  {
   "name": "createJoints",
   "helper": "gamelua_extra",
   "registered_in": "0x447520",
   "call_site": "0x44904c",
   "impl": "0x436ab0",
   "thunk": null,
   "owner": "_G",
   "lua_uses": 1,
   "observed_argc": {
    "1": 1
   }
  },
  {
   "name": "createThemeSprite",
   "helper": "member",
   "registered_in": "0x447520",
   "call_site": "0x449089",
   "impl": "0x43bf60",
   "thunk": "0x42cde0",
   "owner": "_G",
   "lua_uses": 2,
   "observed_argc": {
    "12": 2
   }
  },
  {
   "name": "removeThemeSprite",
   "helper": "member",
   "registered_in": "0x447520",
   "call_site": "0x4490c6",
   "impl": "0x43adf0",
   "thunk": "0x42ce30",
   "owner": "_G",
   "lua_uses": 0,
   "observed_argc": {}
  },
  {
   "name": "modifyThemeSprite",
   "helper": "member",
   "registered_in": "0x447520",
   "call_site": "0x449103",
   "impl": "0x41a810",
   "thunk": "0x42ce80",
   "owner": "_G",
   "lua_uses": 0,
   "observed_argc": {}
  },
  {
   "name": "rotateThemeSprites",
   "helper": "member",
   "registered_in": "0x447520",
   "call_site": "0x449140",
   "impl": "0x415dc0",
   "thunk": "0x41e1c0",
   "owner": "_G",
   "lua_uses": 0,
   "observed_argc": {}
  },
  {
   "name": "setThemeSprite",
   "helper": "member",
   "registered_in": "0x447520",
   "call_site": "0x44917d",
   "impl": "0x4230a0",
   "thunk": "0x42ced0",
   "owner": "_G",
   "lua_uses": 1,
   "observed_argc": {
    "3": 1
   }
  },
  {
   "name": "setThemeOffsetY",
   "helper": "member",
   "registered_in": "0x447520",
   "call_site": "0x4491ba",
   "impl": "0x41aaf0",
   "thunk": "0x42ce30",
   "owner": "_G",
   "lua_uses": 0,
   "observed_argc": {}
  },
  {
   "name": "native_setThemeLayerOffset",
   "helper": "member",
   "registered_in": "0x447520",
   "call_site": "0x4491f7",
   "impl": "0x416040",
   "thunk": "0x41e320",
   "owner": "_G",
   "lua_uses": 4,
   "observed_argc": {
    "4": 4
   }
  },
  {
   "name": "native_setThemeLayerScale",
   "helper": "member",
   "registered_in": "0x447520",
   "call_site": "0x449234",
   "impl": "0x4160b0",
   "thunk": "0x41e320",
   "owner": "_G",
   "lua_uses": 1,
   "observed_argc": {
    "4": 1
   }
  },
  {
   "name": "destroyJoint",
   "helper": "member",
   "registered_in": "0x447520",
   "call_site": "0x449271",
   "impl": "0x431990",
   "thunk": "0x42c9d0",
   "owner": "_G",
   "lua_uses": 2,
   "observed_argc": {
    "1": 2
   }
  },
  {
   "name": "setJointParameters",
   "helper": "gamelua_extra",
   "registered_in": "0x447520",
   "call_site": "0x449287",
   "impl": "0x419db0",
   "thunk": null,
   "owner": "_G",
   "lua_uses": 5,
   "observed_argc": {
    "1": 5
   }
  },
  {
   "name": "clearVertices",
   "helper": "member",
   "registered_in": "0x447520",
   "call_site": "0x4492c4",
   "impl": "0x42be80",
   "thunk": "0x417b30",
   "owner": "_G",
   "lua_uses": 2,
   "observed_argc": {
    "0": 2
   }
  },
  {
   "name": "addVertex",
   "helper": "member",
   "registered_in": "0x447520",
   "call_site": "0x449301",
   "impl": "0x42bec0",
   "thunk": "0x41e0b0",
   "owner": "_G",
   "lua_uses": 2,
   "observed_argc": {
    "2": 2
   }
  },
  {
   "name": "applyImpulse",
   "helper": "member",
   "registered_in": "0x447520",
   "call_site": "0x44933e",
   "impl": "0x4223f0",
   "thunk": "0x42cf20",
   "owner": "_G",
   "lua_uses": 44,
   "observed_argc": {
    "5": 34
   }
  },
  {
   "name": "applyForceNative",
   "helper": "member",
   "registered_in": "0x447520",
   "call_site": "0x44937b",
   "impl": "0x422480",
   "thunk": "0x42cf20",
   "owner": "_G",
   "lua_uses": 1,
   "observed_argc": {
    "5": 1
   }
  },
  {
   "name": "setPosition",
   "helper": "member",
   "registered_in": "0x447520",
   "call_site": "0x4493b8",
   "impl": "0x4300b0",
   "thunk": "0x42cb10",
   "owner": "_G",
   "lua_uses": 48,
   "observed_argc": {
    "2": 1,
    "3": 31,
    "5": 2
   }
  },
  {
   "name": "setRotation",
   "helper": "member",
   "registered_in": "0x447520",
   "call_site": "0x4493f5",
   "impl": "0x430600",
   "thunk": "0x42ce30",
   "owner": "_G",
   "lua_uses": 68,
   "observed_argc": {
    "2": 42,
    "4": 5,
    "5": 2,
    "6": 2,
    "9": 2,
    "11": 2,
    "18": 2,
    "20": 1
   }
  },
  {
   "name": "setSpriteRotation",
   "helper": "member",
   "registered_in": "0x447520",
   "call_site": "0x449432",
   "impl": "0x430420",
   "thunk": "0x42ce30",
   "owner": "_G",
   "lua_uses": 5,
   "observed_argc": {
    "2": 5
   }
  },
  {
   "name": "setDecorationObjects",
   "helper": "member",
   "registered_in": "0x447520",
   "call_site": "0x44946f",
   "impl": "0x4301e0",
   "thunk": "0x42c9d0",
   "owner": "_G",
   "lua_uses": 1,
   "observed_argc": {
    "1": 1
   }
  },
  {
   "name": "setPivotOffset",
   "helper": "member",
   "registered_in": "0x447520",
   "call_site": "0x4494ac",
   "impl": "0x430520",
   "thunk": "0x42cb10",
   "owner": "_G",
   "lua_uses": 1,
   "observed_argc": {
    "3": 1
   }
  },
  {
   "name": "setScale",
   "helper": "member",
   "registered_in": "0x447520",
   "call_site": "0x4494e9",
   "impl": "0x430750",
   "thunk": "0x42cb10",
   "owner": "_G",
   "lua_uses": 443,
   "observed_argc": {
    "2": 410,
    "3": 21
   }
  },
  {
   "name": "setPhysicsScale",
   "helper": "member",
   "registered_in": "0x447520",
   "call_site": "0x449526",
   "impl": "0x432f90",
   "thunk": "0x42cb10",
   "owner": "_G",
   "lua_uses": 0,
   "observed_argc": {}
  },
  {
   "name": "setVelocity",
   "helper": "member",
   "registered_in": "0x447520",
   "call_site": "0x449563",
   "impl": "0x422610",
   "thunk": "0x42cb10",
   "owner": "_G",
   "lua_uses": 38,
   "observed_argc": {
    "3": 27
   }
  },
  {
   "name": "setRestitution",
   "helper": "member",
   "registered_in": "0x447520",
   "call_site": "0x4495a0",
   "impl": "0x422690",
   "thunk": "0x42ce30",
   "owner": "_G",
   "lua_uses": 3,
   "observed_argc": {
    "2": 3
   }
  },
  {
   "name": "setFriction",
   "helper": "member",
   "registered_in": "0x447520",
   "call_site": "0x4495dd",
   "impl": "0x422700",
   "thunk": "0x42ce30",
   "owner": "_G",
   "lua_uses": 2,
   "observed_argc": {
    "2": 2
   }
  },
  {
   "name": "setAngularVelocity",
   "helper": "member",
   "registered_in": "0x447520",
   "call_site": "0x44961a",
   "impl": "0x422800",
   "thunk": "0x42ce30",
   "owner": "_G",
   "lua_uses": 13,
   "observed_argc": {
    "2": 13
   }
  },
  {
   "name": "getAngularVelocity",
   "helper": "member",
   "registered_in": "0x447520",
   "call_site": "0x449657",
   "impl": "0x422890",
   "thunk": "0x42cf70",
   "owner": "_G",
   "lua_uses": 7,
   "observed_argc": {
    "1": 5
   }
  },
  {
   "name": "getVelocity",
   "helper": "member",
   "registered_in": "0x447520",
   "call_site": "0x449694",
   "impl": "0x422920",
   "thunk": "0x42cf70",
   "owner": "_G",
   "lua_uses": 23,
   "observed_argc": {
    "1": 13
   }
  },
  {
   "name": "getLinearVelocity",
   "helper": "gamelua_extra",
   "registered_in": "0x447520",
   "call_site": "0x4496aa",
   "impl": "0x4369a0",
   "thunk": null,
   "owner": "_G",
   "lua_uses": 19,
   "observed_argc": {
    "1": 19
   }
  },
  {
   "name": "setFixedRotation",
   "helper": "member",
   "registered_in": "0x447520",
   "call_site": "0x4496e7",
   "impl": "0x422ac0",
   "thunk": "0x42cfc0",
   "owner": "_G",
   "lua_uses": 3,
   "observed_argc": {
    "2": 3
   }
  },
  {
   "name": "setAngularDamping",
   "helper": "member",
   "registered_in": "0x447520",
   "call_site": "0x449724",
   "impl": "0x422c40",
   "thunk": "0x42ce30",
   "owner": "_G",
   "lua_uses": 4,
   "observed_argc": {
    "2": 4
   }
  },
  {
   "name": "setLinearDamping",
   "helper": "member",
   "registered_in": "0x447520",
   "call_site": "0x449761",
   "impl": "0x422db0",
   "thunk": "0x42ce30",
   "owner": "_G",
   "lua_uses": 25,
   "observed_argc": {
    "2": 25
   }
  },
  {
   "name": "setAsSensor",
   "helper": "member",
   "registered_in": "0x447520",
   "call_site": "0x44979e",
   "impl": "0x422f20",
   "thunk": "0x42cfc0",
   "owner": "_G",
   "lua_uses": 4,
   "observed_argc": {
    "2": 4
   }
  },
  {
   "name": "multiplyVelocity",
   "helper": "member",
   "registered_in": "0x447520",
   "call_site": "0x4497db",
   "impl": "0x422770",
   "thunk": "0x42ce30",
   "owner": "_G",
   "lua_uses": 0,
   "observed_argc": {}
  },
  {
   "name": "setPhysicsSimulationScale",
   "helper": "member",
   "registered_in": "0x447520",
   "call_site": "0x449818",
   "impl": "0x4149b0",
   "thunk": "0x41e1c0",
   "owner": "_G",
   "lua_uses": 1,
   "observed_argc": {
    "1": 1
   }
  },
  {
   "name": "setPhysicsEnabled",
   "helper": "gamelua_extra",
   "registered_in": "0x447520",
   "call_site": "0x44982e",
   "impl": "0x432d10",
   "thunk": null,
   "owner": "_G",
   "lua_uses": 25,
   "observed_argc": {
    "1": 23,
    "2": 2
   }
  },
  {
   "name": "isPhysicsEnabled",
   "helper": "member",
   "registered_in": "0x447520",
   "call_site": "0x44986b",
   "impl": "0x4149c0",
   "thunk": "0x417b70",
   "owner": "_G",
   "lua_uses": 8,
   "observed_argc": {
    "0": 8
   }
  },
  {
   "name": "setTopLeft",
   "helper": "member",
   "registered_in": "0x447520",
   "call_site": "0x4498a8",
   "impl": "0x414a30",
   "thunk": "0x41e0b0",
   "owner": "_G",
   "lua_uses": 1,
   "observed_argc": {
    "2": 1
   }
  },
  {
   "name": "setMaxWorldScale",
   "helper": "member",
   "registered_in": "0x447520",
   "call_site": "0x4498e5",
   "impl": "0x414ae0",
   "thunk": "0x41e1c0",
   "owner": "_G",
   "lua_uses": 1,
   "observed_argc": {
    "26": 1
   }
  },
  {
   "name": "removeObject",
   "helper": "member",
   "registered_in": "0x447520",
   "call_site": "0x449922",
   "impl": "0x4418d0",
   "thunk": "0x42c9d0",
   "owner": "_G",
   "lua_uses": 12,
   "observed_argc": {
    "1": 12
   }
  },
  {
   "name": "setEditing",
   "helper": "member",
   "registered_in": "0x447520",
   "call_site": "0x44995f",
   "impl": "0x414800",
   "thunk": "0x41d320",
   "owner": "_G",
   "lua_uses": 2,
   "observed_argc": {
    "1": 2
   }
  },
  {
   "name": "setWorldScale",
   "helper": "member",
   "registered_in": "0x447520",
   "call_site": "0x44999c",
   "impl": "0x414a50",
   "thunk": "0x41e1c0",
   "owner": "_G",
   "lua_uses": 5,
   "observed_argc": {
    "1": 5
   }
  },
  {
   "name": "resetMouseWheelScale",
   "helper": "member",
   "registered_in": "0x447520",
   "call_site": "0x4499d9",
   "impl": "0x414a80",
   "thunk": "0x41e1c0",
   "owner": "_G",
   "lua_uses": 1,
   "observed_argc": {
    "1": 1
   }
  },
  {
   "name": "native_toggleZoomSteps",
   "helper": "member",
   "registered_in": "0x447520",
   "call_site": "0x449a16",
   "impl": "0x414ab0",
   "thunk": "0x41e3c0",
   "owner": "_G",
   "lua_uses": 1,
   "observed_argc": {
    "4": 1
   }
  },
  {
   "name": "drawSelectedTexturizedObject",
   "helper": "member",
   "registered_in": "0x447520",
   "call_site": "0x449a53",
   "impl": "0x4323f0",
   "thunk": "0x42d010",
   "owner": "_G",
   "lua_uses": 0,
   "observed_argc": {}
  },
  {
   "name": "native_onLevelInitComplete",
   "helper": "member",
   "registered_in": "0x447520",
   "call_site": "0x449a90",
   "impl": "0x415820",
   "thunk": "0x417b30",
   "owner": "_G",
   "lua_uses": 1,
   "observed_argc": {
    "0": 1
   }
  },
  {
   "name": "drawRect",
   "helper": "member",
   "registered_in": "0x447520",
   "call_site": "0x449acd",
   "impl": "0x414640",
   "thunk": "0x41e410",
   "owner": "_G",
   "lua_uses": 90,
   "observed_argc": {
    "9": 90
   }
  },
  {
   "name": "drawRectOwnState",
   "helper": "member",
   "registered_in": "0x447520",
   "call_site": "0x449b0a",
   "impl": "0x414550",
   "thunk": "0x41e460",
   "owner": "_G",
   "lua_uses": 3,
   "observed_argc": {
    "8": 3
   }
  },
  {
   "name": "drawTexturedRect",
   "helper": "member",
   "registered_in": "0x447520",
   "call_site": "0x449b47",
   "impl": "0x418bb0",
   "thunk": "0x42d060",
   "owner": "_G",
   "lua_uses": 0,
   "observed_argc": {}
  },
  {
   "name": "removeJointsFromObject",
   "helper": "member",
   "registered_in": "0x447520",
   "call_site": "0x449b84",
   "impl": "0x430fc0",
   "thunk": "0x42c9d0",
   "owner": "_G",
   "lua_uses": 1,
   "observed_argc": {
    "1": 1
   }
  },
  {
   "name": "setRevoluteJointSpeed",
   "helper": "member",
   "registered_in": "0x447520",
   "call_site": "0x449bc1",
   "impl": "0x419c90",
   "thunk": "0x42ce30",
   "owner": "_G",
   "lua_uses": 3,
   "observed_argc": {
    "2": 3
   }
  },
  {
   "name": "removeBreakableJointsFromObject",
   "helper": "member",
   "registered_in": "0x447520",
   "call_site": "0x449bfe",
   "impl": "0x438760",
   "thunk": "0x42ce30",
   "owner": "_G",
   "lua_uses": 4,
   "observed_argc": {
    "2": 3,
    "5": 1
   }
  },
  {
   "name": "linkSensor",
   "helper": "member",
   "registered_in": "0x447520",
   "call_site": "0x449c3b",
   "impl": "0x41ada0",
   "thunk": "0x42c9d0",
   "owner": "_G",
   "lua_uses": 0,
   "observed_argc": {}
  },
  {
   "name": "setRenderState",
   "helper": "gamelua_extra",
   "registered_in": "0x447520",
   "call_site": "0x449c51",
   "impl": "0x414290",
   "thunk": null,
   "owner": "_G",
   "lua_uses": 162,
   "observed_argc": {
    "4": 14,
    "5": 12,
    "6": 4,
    "7": 72,
    "8": 50,
    "10": 3,
    "12": 1,
    "15": 2,
    "18": 2
   }
  },
  {
   "name": "native_setAlpha",
   "helper": "member",
   "registered_in": "0x447520",
   "call_site": "0x449c8e",
   "impl": "0x4147e0",
   "thunk": "0x41e1c0",
   "owner": "_G",
   "lua_uses": 16,
   "observed_argc": {
    "1": 16
   }
  },
  {
   "name": "clearScreen",
   "helper": "member",
   "registered_in": "0x447520",
   "call_site": "0x449ccb",
   "impl": "0x414bd0",
   "thunk": "0x417b30",
   "owner": "_G",
   "lua_uses": 1,
   "observed_argc": {
    "0": 1
   }
  },
  {
   "name": "loadBlocksForEditing",
   "helper": "member",
   "registered_in": "0x447520",
   "call_site": "0x449d08",
   "impl": "0x429490",
   "thunk": "0x417b30",
   "owner": "_G",
   "lua_uses": 0,
   "observed_argc": {}
  },
  {
   "name": "loadLevel",
   "helper": "member",
   "registered_in": "0x447520",
   "call_site": "0x449d45",
   "impl": "0x440710",
   "thunk": "0x42c9d0",
   "owner": "_G",
   "lua_uses": 1,
   "observed_argc": {
    "1": 1
   }
  },
  {
   "name": "loadLevelFromAppData",
   "helper": "member",
   "registered_in": "0x447520",
   "call_site": "0x449d82",
   "impl": "0x440790",
   "thunk": "0x42c9d0",
   "owner": "_G",
   "lua_uses": 0,
   "observed_argc": {}
  },
  {
   "name": "saveLevel",
   "helper": "member",
   "registered_in": "0x447520",
   "call_site": "0x449dbf",
   "impl": "0x428190",
   "thunk": "0x42c9d0",
   "owner": "_G",
   "lua_uses": 0,
   "observed_argc": {}
  },
  {
   "name": "saveLuaFile",
   "helper": "member",
   "registered_in": "0x447520",
   "call_site": "0x449dfc",
   "impl": "0x41d700",
   "thunk": "0x42d0b0",
   "owner": "_G",
   "lua_uses": 1,
   "observed_argc": {
    "3": 1
   }
  },
  {
   "name": "savePersistentLuaFile",
   "helper": "member",
   "registered_in": "0x447520",
   "call_site": "0x449e39",
   "impl": "0x41d8b0",
   "thunk": "0x42cbb0",
   "owner": "_G",
   "lua_uses": 3,
   "observed_argc": {
    "2": 3
   }
  },
  {
   "name": "storePersistentData",
   "helper": "member",
   "registered_in": "0x447520",
   "call_site": "0x449e76",
   "impl": "0x571c50",
   "thunk": "0x417b30",
   "owner": "_G",
   "lua_uses": 3,
   "observed_argc": {
    "0": 3
   }
  },
  {
   "name": "getAimingTime",
   "helper": "member",
   "registered_in": "0x447520",
   "call_site": "0x449eb3",
   "impl": "0x415310",
   "thunk": "0x41d3e0",
   "owner": "_G",
   "lua_uses": 1,
   "observed_argc": {
    "0": 1
   }
  },
  {
   "name": "clearAimingAid",
   "helper": "member",
   "registered_in": "0x447520",
   "call_site": "0x449ef0",
   "impl": "0x416500",
   "thunk": "0x41e1c0",
   "owner": "_G",
   "lua_uses": 7,
   "observed_argc": {
    "1": 7
   }
  },
  {
   "name": "createDirectory",
   "helper": "member",
   "registered_in": "0x447520",
   "call_site": "0x449f2d",
   "impl": "0x41aca0",
   "thunk": "0x42c9d0",
   "owner": "_G",
   "lua_uses": 2,
   "observed_argc": {
    "1": 2
   }
  },
  {
   "name": "checkDirectory",
   "helper": "member",
   "registered_in": "0x447520",
   "call_site": "0x449f6a",
   "impl": "0x41ad40",
   "thunk": "0x42cac0",
   "owner": "_G",
   "lua_uses": 2,
   "observed_argc": {
    "1": 2
   }
  },
  {
   "name": "native_setZOrderRange",
   "helper": "member",
   "registered_in": "0x447520",
   "call_site": "0x449fa7",
   "impl": "0x4152f0",
   "thunk": "0x41e4b0",
   "owner": "_G",
   "lua_uses": 3,
   "observed_argc": {
    "2": 3
   }
  },
  {
   "name": "drawGameNative",
   "helper": "member",
   "registered_in": "0x447520",
   "call_site": "0x449fe4",
   "impl": "0x4447a0",
   "thunk": "0x41e530",
   "owner": "_G",
   "lua_uses": 3,
   "observed_argc": {
    "1": 3
   }
  },
  {
   "name": "drawBackgroundNative",
   "helper": "member",
   "registered_in": "0x447520",
   "call_site": "0x44a021",
   "impl": "0x41ba50",
   "thunk": "0x41e1c0",
   "owner": "_G",
   "lua_uses": 1,
   "observed_argc": {
    "1": 1
   }
  },
  {
   "name": "drawLayer",
   "helper": "member",
   "registered_in": "0x447520",
   "call_site": "0x44a05e",
   "impl": "0x415740",
   "thunk": "0x41e1c0",
   "owner": "_G",
   "lua_uses": 5,
   "observed_argc": {
    "3": 1
   }
  },
  {
   "name": "native_refreshThemeSystem",
   "helper": "member",
   "registered_in": "0x447520",
   "call_site": "0x44a09b",
   "impl": "0x415810",
   "thunk": "0x417b30",
   "owner": "_G",
   "lua_uses": 1,
   "observed_argc": {
    "0": 1
   }
  },
  {
   "name": "native_resetThemeSystem",
   "helper": "member",
   "registered_in": "0x447520",
   "call_site": "0x44a0d8",
   "impl": "0x415800",
   "thunk": "0x417b30",
   "owner": "_G",
   "lua_uses": 1,
   "observed_argc": {
    "0": 1
   }
  },
  {
   "name": "native_drawSimulationTrajectory",
   "helper": "member",
   "registered_in": "0x447520",
   "call_site": "0x44a115",
   "impl": "0x416530",
   "thunk": "0x417b30",
   "owner": "_G",
   "lua_uses": 1,
   "observed_argc": {
    "0": 1
   }
  },
  {
   "name": "native_drawBackgroundParticles",
   "helper": "member",
   "registered_in": "0x447520",
   "call_site": "0x44a152",
   "impl": "0x415380",
   "thunk": "0x417b30",
   "owner": "_G",
   "lua_uses": 1,
   "observed_argc": {
    "0": 1
   }
  },
  {
   "name": "native_drawForegroundParticles",
   "helper": "member",
   "registered_in": "0x447520",
   "call_site": "0x44a18f",
   "impl": "0x4153b0",
   "thunk": "0x417b30",
   "owner": "_G",
   "lua_uses": 1,
   "observed_argc": {
    "0": 1
   }
  },
  {
   "name": "drawMenuParticlesNative",
   "helper": "member",
   "registered_in": "0x447520",
   "call_site": "0x44a1cc",
   "impl": "0x4153e0",
   "thunk": "0x417b30",
   "owner": "_G",
   "lua_uses": 1,
   "observed_argc": {
    "0": 1
   }
  },
  {
   "name": "native_drawNotificationParticles",
   "helper": "member",
   "registered_in": "0x447520",
   "call_site": "0x44a209",
   "impl": "0x415400",
   "thunk": "0x417b30",
   "owner": "_G",
   "lua_uses": 1,
   "observed_argc": {
    "0": 1
   }
  },
  {
   "name": "updateMenuParticlesNative",
   "helper": "member",
   "registered_in": "0x447520",
   "call_site": "0x44a246",
   "impl": "0x415420",
   "thunk": "0x41e1c0",
   "owner": "_G",
   "lua_uses": 1,
   "observed_argc": {
    "1": 1
   }
  },
  {
   "name": "updateThemeParticlesNative",
   "helper": "member",
   "registered_in": "0x447520",
   "call_site": "0x44a283",
   "impl": "0x415450",
   "thunk": "0x41e1c0",
   "owner": "_G",
   "lua_uses": 1,
   "observed_argc": {
    "1": 1
   }
  },
  {
   "name": "setMenuParticlesScale",
   "helper": "member",
   "registered_in": "0x447520",
   "call_site": "0x44a2c0",
   "impl": "0x415480",
   "thunk": "0x41e1c0",
   "owner": "_G",
   "lua_uses": 3,
   "observed_argc": {
    "1": 3
   }
  },
  {
   "name": "clearParticlesNative",
   "helper": "member",
   "registered_in": "0x447520",
   "call_site": "0x44a2fd",
   "impl": "0x415470",
   "thunk": "0x417b30",
   "owner": "_G",
   "lua_uses": 2,
   "observed_argc": {
    "0": 2
   }
  },
  {
   "name": "clearParticlesWithTagNative",
   "helper": "member",
   "registered_in": "0x447520",
   "call_site": "0x44a33a",
   "impl": "0x420390",
   "thunk": "0x42c9d0",
   "owner": "_G",
   "lua_uses": 10,
   "observed_argc": {
    "1": 10
   }
  },
  {
   "name": "enableInGameParticlesNative",
   "helper": "member",
   "registered_in": "0x447520",
   "call_site": "0x44a377",
   "impl": "0x4154a0",
   "thunk": "0x41d320",
   "owner": "_G",
   "lua_uses": 4,
   "observed_argc": {
    "1": 4
   }
  },
  {
   "name": "setSprite",
   "helper": "member",
   "registered_in": "0x447520",
   "call_site": "0x44a3b4",
   "impl": "0x443f10",
   "thunk": "0x42cbb0",
   "owner": "_G",
   "lua_uses": 46,
   "observed_argc": {
    "2": 36
   }
  },
  {
   "name": "setVisible",
   "helper": "member",
   "registered_in": "0x447520",
   "call_site": "0x44a3f1",
   "impl": "0x431f90",
   "thunk": "0x42cfc0",
   "owner": "_G",
   "lua_uses": 115,
   "observed_argc": {
    "2": 107,
    "4": 2,
    "5": 1,
    "11": 1
   }
  },
  {
   "name": "setMaterial",
   "helper": "member",
   "registered_in": "0x447520",
   "call_site": "0x44a42e",
   "impl": "0x432000",
   "thunk": "0x42cbb0",
   "owner": "_G",
   "lua_uses": 5,
   "observed_argc": {
    "2": 5
   }
  },
  {
   "name": "setTexture",
   "helper": "member",
   "registered_in": "0x447520",
   "call_site": "0x44a46b",
   "impl": "0x432220",
   "thunk": "0x42cbb0",
   "owner": "_G",
   "lua_uses": 2,
   "observed_argc": {
    "2": 2
   }
  },
  {
   "name": "setTextureScale",
   "helper": "member",
   "registered_in": "0x447520",
   "call_site": "0x44a4a8",
   "impl": "0x432380",
   "thunk": "0x42ce30",
   "owner": "_G",
   "lua_uses": 2,
   "observed_argc": {
    "2": 2
   }
  },
  {
   "name": "setTheme",
   "helper": "member",
   "registered_in": "0x447520",
   "call_site": "0x44a4e5",
   "impl": "0x446cf0",
   "thunk": "0x42c9d0",
   "owner": "_G",
   "lua_uses": 5,
   "observed_argc": {
    "1": 5
   }
  },
  {
   "name": "setSleeping",
   "helper": "member",
   "registered_in": "0x447520",
   "call_site": "0x44a522",
   "impl": "0x422570",
   "thunk": "0x42cfc0",
   "owner": "_G",
   "lua_uses": 6,
   "observed_argc": {
    "2": 6
   }
  },
  {
   "name": "setActive",
   "helper": "member",
   "registered_in": "0x447520",
   "call_site": "0x44a55f",
   "impl": "0x422510",
   "thunk": "0x42cfc0",
   "owner": "_G",
   "lua_uses": 18,
   "observed_argc": {
    "2": 8
   }
  },
  {
   "name": "drawTexturedLine2D",
   "helper": "member",
   "registered_in": "0x447520",
   "call_site": "0x44a59c",
   "impl": "0x42e410",
   "thunk": "0x42d100",
   "owner": "_G",
   "lua_uses": 5,
   "observed_argc": {
    "10": 5
   }
  },
  {
   "name": "drawLine2D",
   "helper": "member",
   "registered_in": "0x447520",
   "call_site": "0x44a5d9",
   "impl": "0x4154b0",
   "thunk": "0x41e590",
   "owner": "_G",
   "lua_uses": 39,
   "observed_argc": {
    "9": 37
   }
  },
  {
   "name": "drawRectLines",
   "helper": "member",
   "registered_in": "0x447520",
   "call_site": "0x44a616",
   "impl": "0x415590",
   "thunk": "0x41e590",
   "owner": "_G",
   "lua_uses": 7,
   "observed_argc": {
    "9": 7
   }
  },
  {
   "name": "drawCompoSprite",
   "helper": "member",
   "registered_in": "0x447520",
   "call_site": "0x44a653",
   "impl": "0x423390",
   "thunk": "0x42cb10",
   "owner": "_G",
   "lua_uses": 0,
   "observed_argc": {}
  },
  {
   "name": "throwException",
   "helper": "member",
   "registered_in": "0x447520",
   "call_site": "0x44a690",
   "impl": "0x42d980",
   "thunk": "0x42c9d0",
   "owner": "_G",
   "lua_uses": 0,
   "observed_argc": {}
  },
  {
   "name": "drawForegroundNative",
   "helper": "member",
   "registered_in": "0x447520",
   "call_site": "0x44a6cd",
   "impl": "0x416580",
   "thunk": "0x417b30",
   "owner": "_G",
   "lua_uses": 1,
   "observed_argc": {
    "0": 1
   }
  },
  {
   "name": "drawForeground",
   "helper": "member",
   "registered_in": "0x447520",
   "call_site": "0x44a70a",
   "impl": "0x41ae20",
   "thunk": "0x417b30",
   "owner": "_G",
   "lua_uses": 0,
   "observed_argc": {}
  },
  {
   "name": "setObjectParameter",
   "helper": "member",
   "registered_in": "0x447520",
   "call_site": "0x44a747",
   "impl": "0x431500",
   "thunk": "0x42cb10",
   "owner": "_G",
   "lua_uses": 129,
   "observed_argc": {
    "3": 124,
    "13": 1
   }
  },
  {
   "name": "setCollisionEnabled",
   "helper": "member",
   "registered_in": "0x447520",
   "call_site": "0x44a784",
   "impl": "0x431cb0",
   "thunk": "0x42cfc0",
   "owner": "_G",
   "lua_uses": 3,
   "observed_argc": {
    "2": 3
   }
  },
  {
   "name": "native_setBlockCollisionEnabled",
   "helper": "member",
   "registered_in": "0x447520",
   "call_site": "0x44a7c1",
   "impl": "0x431d90",
   "thunk": "0x42cfc0",
   "owner": "_G",
   "lua_uses": 5,
   "observed_argc": {
    "2": 5
   }
  },
  {
   "name": "native_setIgnoreCollisionWithMaterials",
   "helper": "member",
   "registered_in": "0x447520",
   "call_site": "0x44a7fe",
   "impl": "0x431e00",
   "thunk": "0x42cfc0",
   "owner": "_G",
   "lua_uses": 1,
   "observed_argc": {
    "2": 1
   }
  },
  {
   "name": "setFlashAnimation",
   "helper": "member",
   "registered_in": "0x447520",
   "call_site": "0x44a83b",
   "impl": "0x431e70",
   "thunk": "0x42ca70",
   "owner": "_G",
   "lua_uses": 1,
   "observed_argc": {
    "3": 1
   }
  },
  {
   "name": "clipText",
   "helper": "member",
   "registered_in": "0x447520",
   "call_site": "0x44a878",
   "impl": "0x429e10",
   "thunk": "0x42ced0",
   "owner": "_G",
   "lua_uses": 2,
   "observed_argc": {
    "3": 2
   }
  },
  {
   "name": "startNewTrajectory",
   "helper": "member",
   "registered_in": "0x447520",
   "call_site": "0x44a8b5",
   "impl": "0x42f260",
   "thunk": "0x417b30",
   "owner": "_G",
   "lua_uses": 1,
   "observed_argc": {
    "0": 1
   }
  },
  {
   "name": "addToTrajectory",
   "helper": "member",
   "registered_in": "0x447520",
   "call_site": "0x44a8f2",
   "impl": "0x42bf90",
   "thunk": "0x41e020",
   "owner": "_G",
   "lua_uses": 2,
   "observed_argc": {
    "3": 2
   }
  },
  {
   "name": "addPuffToTrajectory",
   "helper": "member",
   "registered_in": "0x447520",
   "call_site": "0x44a92f",
   "impl": "0x416ae0",
   "thunk": "0x41e020",
   "owner": "_G",
   "lua_uses": 3,
   "observed_argc": {
    "3": 1
   }
  },
  {
   "name": "setLevelLimits",
   "helper": "member",
   "registered_in": "0x447520",
   "call_site": "0x44a96c",
   "impl": "0x414f60",
   "thunk": "0x41e220",
   "owner": "_G",
   "lua_uses": 1,
   "observed_argc": {
    "4": 1
   }
  },
  {
   "name": "goToTaskSwitcherLua",
   "helper": "member",
   "registered_in": "0x447520",
   "call_site": "0x44a9a9",
   "impl": "0x571c50",
   "thunk": "0x417b30",
   "owner": "_G",
   "lua_uses": 0,
   "observed_argc": {}
  },
  {
   "name": "setGameOn",
   "helper": "member",
   "registered_in": "0x447520",
   "call_site": "0x44a9e6",
   "impl": "0x413de0",
   "thunk": "0x41d320",
   "owner": "_G",
   "lua_uses": 4,
   "observed_argc": {
    "1": 3,
    "10": 1
   }
  },
  {
   "name": "checkForLuaFile",
   "helper": "member",
   "registered_in": "0x447520",
   "call_site": "0x44aa23",
   "impl": "0x418d90",
   "thunk": "0x42cac0",
   "owner": "_G",
   "lua_uses": 0,
   "observed_argc": {}
  },
  {
   "name": "setStartingCameraValue",
   "helper": "member",
   "registered_in": "0x447520",
   "call_site": "0x44aa60",
   "impl": "0x4152e0",
   "thunk": "0x41d320",
   "owner": "_G",
   "lua_uses": 0,
   "observed_argc": {}
  },
  {
   "name": "setCameraLimits",
   "helper": "member",
   "registered_in": "0x447520",
   "call_site": "0x44aa9d",
   "impl": "0x4152d0",
   "thunk": "0x41e1c0",
   "owner": "_G",
   "lua_uses": 1,
   "observed_argc": {
    "1": 1
   }
  },
  {
   "name": "initGameCenter",
   "helper": "member",
   "registered_in": "0x447520",
   "call_site": "0x44aada",
   "impl": "0x571c50",
   "thunk": "0x417b30",
   "owner": "_G",
   "lua_uses": 5,
   "observed_argc": {
    "0": 2,
    "1": 2
   }
  },
  {
   "name": "getLeaderboardScoresAroundPlayer",
   "helper": "member",
   "registered_in": "0x447520",
   "call_site": "0x44ab17",
   "impl": "0x41ad80",
   "thunk": "0x42cb10",
   "owner": "_G",
   "lua_uses": 1,
   "observed_argc": {
    "3": 1
   }
  },
  {
   "name": "getLeaderboardScoresForRange",
   "helper": "member",
   "registered_in": "0x447520",
   "call_site": "0x44ab54",
   "impl": "0x41ad80",
   "thunk": "0x42cb10",
   "owner": "_G",
   "lua_uses": 2,
   "observed_argc": {
    "3": 2
   }
  },
  {
   "name": "getLeaderboardScoresForFriends",
   "helper": "member",
   "registered_in": "0x447520",
   "call_site": "0x44ab91",
   "impl": "0x41ada0",
   "thunk": "0x42c9d0",
   "owner": "_G",
   "lua_uses": 1,
   "observed_argc": {
    "3": 1
   }
  },
  {
   "name": "showLeaderboards",
   "helper": "member",
   "registered_in": "0x447520",
   "call_site": "0x44abce",
   "impl": "0x571c50",
   "thunk": "0x417b30",
   "owner": "_G",
   "lua_uses": 1,
   "observed_argc": {
    "0": 1
   }
  },
  {
   "name": "showAchievements",
   "helper": "member",
   "registered_in": "0x447520",
   "call_site": "0x44ac0b",
   "impl": "0x571c50",
   "thunk": "0x417b30",
   "owner": "_G",
   "lua_uses": 1,
   "observed_argc": {
    "0": 1
   }
  },
  {
   "name": "postHighscore",
   "helper": "member",
   "registered_in": "0x447520",
   "call_site": "0x44ac48",
   "impl": "0x41adc0",
   "thunk": "0x42ce30",
   "owner": "_G",
   "lua_uses": 5,
   "observed_argc": {
    "2": 2,
    "3": 2
   }
  },
  {
   "name": "unlockAchievement",
   "helper": "member",
   "registered_in": "0x447520",
   "call_site": "0x44ac85",
   "impl": "0x41ade0",
   "thunk": "0x42cbb0",
   "owner": "_G",
   "lua_uses": 2,
   "observed_argc": {
    "2": 2
   }
  },
  {
   "name": "loadTableFromFile",
   "helper": "member",
   "registered_in": "0x447520",
   "call_site": "0x44acc2",
   "impl": "0x437a90",
   "thunk": "0x42cbb0",
   "owner": "_G",
   "lua_uses": 6,
   "observed_argc": {
    "2": 6
   }
  },
  {
   "name": "isIDSoftLaunchAvailable",
   "helper": "member",
   "registered_in": "0x447520",
   "call_site": "0x44acff",
   "impl": "0x41eae0",
   "thunk": "0x417b70",
   "owner": "_G",
   "lua_uses": 1,
   "observed_argc": {
    "0": 1
   }
  },
  {
   "name": "native_getCloudType",
   "helper": "member",
   "registered_in": "0x447520",
   "call_site": "0x44ad3c",
   "impl": "0x41eb70",
   "thunk": "0x41e130",
   "owner": "_G",
   "lua_uses": 1,
   "observed_argc": {
    "0": 1
   }
  },
  {
   "name": "setStat",
   "helper": "member",
   "registered_in": "0x447520",
   "call_site": "0x44ad79",
   "impl": "0x41adc0",
   "thunk": "0x42cb60",
   "owner": "_G",
   "lua_uses": 8,
   "observed_argc": {
    "2": 8
   }
  },
  {
   "name": "setStatFloat",
   "helper": "member",
   "registered_in": "0x447520",
   "call_site": "0x44adb6",
   "impl": "0x41adc0",
   "thunk": "0x42ce30",
   "owner": "_G",
   "lua_uses": 0,
   "observed_argc": {}
  },
  {
   "name": "activateGameOverlayToStore",
   "helper": "member",
   "registered_in": "0x447520",
   "call_site": "0x44adf3",
   "impl": "0x571c50",
   "thunk": "0x417b30",
   "owner": "_G",
   "lua_uses": 1,
   "observed_argc": {
    "0": 1
   }
  },
  {
   "name": "isGameOverlayActive",
   "helper": "member",
   "registered_in": "0x447520",
   "call_site": "0x44ae30",
   "impl": "0x571c50",
   "thunk": "0x417b30",
   "owner": "_G",
   "lua_uses": 0,
   "observed_argc": {}
  },
  {
   "name": "checkInstalledAppsOnline",
   "helper": "member",
   "registered_in": "0x447520",
   "call_site": "0x44ae6d",
   "impl": "0x42c5e0",
   "thunk": "0x42c9d0",
   "owner": "_G",
   "lua_uses": 1,
   "observed_argc": {
    "1": 1
   }
  },
  {
   "name": "checkInstalledAppsOffline",
   "helper": "member",
   "registered_in": "0x447520",
   "call_site": "0x44aeaa",
   "impl": "0x42c750",
   "thunk": "0x42c9d0",
   "owner": "_G",
   "lua_uses": 1,
   "observed_argc": {
    "7": 1
   }
  },
  {
   "name": "refreshCurrentLocale",
   "helper": "member",
   "registered_in": "0x447520",
   "call_site": "0x44aee7",
   "impl": "0x437de0",
   "thunk": "0x417b30",
   "owner": "_G",
   "lua_uses": 0,
   "observed_argc": {}
  },
  {
   "name": "logFlurryEvent",
   "helper": "member",
   "registered_in": "0x447520",
   "call_site": "0x44af24",
   "impl": "0x436b50",
   "thunk": "0x42c9d0",
   "owner": "_G",
   "lua_uses": 1,
   "observed_argc": {
    "1": 1
   }
  },
  {
   "name": "logFlurryEventWithParam",
   "helper": "member",
   "registered_in": "0x447520",
   "call_site": "0x44af61",
   "impl": "0x436c70",
   "thunk": "0x42ca70",
   "owner": "_G",
   "lua_uses": 1,
   "observed_argc": {
    "3": 1
   }
  },
  {
   "name": "logFlurryEventWithParams",
   "helper": "member",
   "registered_in": "0x447520",
   "call_site": "0x44af9e",
   "impl": "0x436e40",
   "thunk": "0x42cbb0",
   "owner": "_G",
   "lua_uses": 1,
   "observed_argc": {
    "2": 1
   }
  },
  {
   "name": "isTwitterSupported",
   "helper": "member",
   "registered_in": "0x447520",
   "call_site": "0x44afdb",
   "impl": "0x5987f0",
   "thunk": "0x417b70",
   "owner": "_G",
   "lua_uses": 0,
   "observed_argc": {}
  },
  {
   "name": "sendTweet",
   "helper": "member",
   "registered_in": "0x447520",
   "call_site": "0x44b018",
   "impl": "0x41cb60",
   "thunk": "0x42d150",
   "owner": "_G",
   "lua_uses": 0,
   "observed_argc": {}
  },
  {
   "name": "native_startQrScanner",
   "helper": "member",
   "registered_in": "0x447520",
   "call_site": "0x44b055",
   "impl": "0x414df0",
   "thunk": "0x417b30",
   "owner": "_G",
   "lua_uses": 2,
   "observed_argc": {
    "0": 2
   }
  },
  {
   "name": "native_stopQrScanner",
   "helper": "member",
   "registered_in": "0x447520",
   "call_site": "0x44b092",
   "impl": "0x414de0",
   "thunk": "0x417b30",
   "owner": "_G",
   "lua_uses": 2,
   "observed_argc": {
    "0": 2
   }
  },
  {
   "name": "native_isCameraSupported",
   "helper": "member",
   "registered_in": "0x447520",
   "call_site": "0x44b0cf",
   "impl": "0x414da0",
   "thunk": "0x417b70",
   "owner": "_G",
   "lua_uses": 1,
   "observed_argc": {}
  },
  {
   "name": "native_hasFrontCamera",
   "helper": "member",
   "registered_in": "0x447520",
   "call_site": "0x44b10c",
   "impl": "0x414dc0",
   "thunk": "0x417b70",
   "owner": "_G",
   "lua_uses": 1,
   "observed_argc": {
    "0": 1
   }
  },
  {
   "name": "native_setQrRecognizedCallback",
   "helper": "gamelua_extra",
   "registered_in": "0x447520",
   "call_site": "0x44b122",
   "impl": "0x417110",
   "thunk": null,
   "owner": "_G",
   "lua_uses": 2,
   "observed_argc": {
    "1": 2
   }
  },
  {
   "name": "native_getDeviceOrientation",
   "helper": "member",
   "registered_in": "0x447520",
   "call_site": "0x44b15f",
   "impl": "0x4144e0",
   "thunk": "0x41d380",
   "owner": "_G",
   "lua_uses": 1,
   "observed_argc": {
    "0": 1
   }
  },
  {
   "name": "loadTextFileToString",
   "helper": "member",
   "registered_in": "0x447520",
   "call_site": "0x44b19c",
   "impl": "0x421ed0",
   "thunk": "0x42d1a0",
   "owner": "_G",
   "lua_uses": 1,
   "observed_argc": {}
  },
  {
   "name": "native_loadTextFileToLuaTable",
   "helper": "gamelua_extra",
   "registered_in": "0x447520",
   "call_site": "0x44b1b2",
   "impl": "0x4220e0",
   "thunk": null,
   "owner": "_G",
   "lua_uses": 1,
   "observed_argc": {}
  },
  {
   "name": "playVideo",
   "helper": "member",
   "registered_in": "0x447520",
   "call_site": "0x44b1ef",
   "impl": "0x418b10",
   "thunk": "0x42c9d0",
   "owner": "_G",
   "lua_uses": 0,
   "observed_argc": {}
  },
  {
   "name": "drawBoxNative",
   "helper": "gamelua_extra",
   "registered_in": "0x447520",
   "call_site": "0x44b205",
   "impl": "0x420580",
   "thunk": null,
   "owner": "_G",
   "lua_uses": 5,
   "observed_argc": {
    "7": 2,
    "8": 3
   }
  },
  {
   "name": "getAngle",
   "helper": "member",
   "registered_in": "0x447520",
   "call_site": "0x44b242",
   "impl": "0x42faf0",
   "thunk": "0x42cf70",
   "owner": "_G",
   "lua_uses": 40,
   "observed_argc": {
    "1": 40
   }
  },
  {
   "name": "getIntersectingObjects",
   "helper": "gamelua_extra",
   "registered_in": "0x447520",
   "call_site": "0x44b258",
   "impl": "0x421c70",
   "thunk": null,
   "owner": "_G",
   "lua_uses": 2,
   "observed_argc": {
    "1": 2
   }
  },
  {
   "name": "getRayCastedObjects",
   "helper": "gamelua_extra",
   "registered_in": "0x447520",
   "call_site": "0x44b26e",
   "impl": "0x42b410",
   "thunk": null,
   "owner": "_G",
   "lua_uses": 4,
   "observed_argc": {
    "1": 4
   }
  },
  {
   "name": "checkJointLimits",
   "helper": "member",
   "registered_in": "0x447520",
   "call_site": "0x44b2ab",
   "impl": "0x41ea60",
   "thunk": "0x42c9d0",
   "owner": "_G",
   "lua_uses": 0,
   "observed_argc": {}
  },
  {
   "name": "handleJointLimits",
   "helper": "member",
   "registered_in": "0x447520",
   "call_site": "0x44b2e8",
   "impl": "0x418640",
   "thunk": "0x42cfc0",
   "owner": "_G",
   "lua_uses": 2,
   "observed_argc": {
    "2": 2
   }
  },
  {
   "name": "getWorldPoint",
   "helper": "gamelua_extra",
   "registered_in": "0x447520",
   "call_site": "0x44b2fe",
   "impl": "0x427630",
   "thunk": null,
   "owner": "_G",
   "lua_uses": 0,
   "observed_argc": {}
  },
  {
   "name": "getLocalPoint",
   "helper": "gamelua_extra",
   "registered_in": "0x447520",
   "call_site": "0x44b314",
   "impl": "0x427500",
   "thunk": null,
   "owner": "_G",
   "lua_uses": 0,
   "observed_argc": {}
  },
  {
   "name": "printGlobals",
   "helper": "member",
   "registered_in": "0x447520",
   "call_site": "0x44b351",
   "impl": "0x4143a0",
   "thunk": "0x417b30",
   "owner": "_G",
   "lua_uses": 0,
   "observed_argc": {}
  },
  {
   "name": "setGameParameters",
   "helper": "gamelua_extra",
   "registered_in": "0x447520",
   "call_site": "0x44b367",
   "impl": "0x413d20",
   "thunk": null,
   "owner": "_G",
   "lua_uses": 2,
   "observed_argc": {
    "1": 1
   }
  },
  {
   "name": "createThemeAnimation",
   "helper": "gamelua_extra",
   "registered_in": "0x447520",
   "call_site": "0x44b37d",
   "impl": "0x43ba60",
   "thunk": null,
   "owner": "_G",
   "lua_uses": 1,
   "observed_argc": {
    "1": 1
   }
  },
  {
   "name": "onLoadLuaFileFail",
   "helper": "member",
   "registered_in": "0x447520",
   "call_site": "0x44b3ba",
   "impl": "0x418420",
   "thunk": "0x42c9d0",
   "owner": "_G",
   "lua_uses": 2,
   "observed_argc": {}
  },
  {
   "name": "performBitwiseAnd",
   "helper": "member",
   "registered_in": "0x447520",
   "call_site": "0x44b3f7",
   "impl": "0x415690",
   "thunk": "0x41e5e0",
   "owner": "_G",
   "lua_uses": 0,
   "observed_argc": {}
  },
  {
   "name": "performBitwiseOr",
   "helper": "member",
   "registered_in": "0x447520",
   "call_site": "0x44b434",
   "impl": "0x4156c0",
   "thunk": "0x41e5e0",
   "owner": "_G",
   "lua_uses": 1,
   "observed_argc": {
    "2": 1
   }
  },
  {
   "name": "enableDolby",
   "helper": "member",
   "registered_in": "0x447520",
   "call_site": "0x44b471",
   "impl": "0x415ab0",
   "thunk": "0x41d440",
   "owner": "_G",
   "lua_uses": 2,
   "observed_argc": {
    "1": 2
   }
  },
  {
   "name": "setDolbyProfile",
   "helper": "member",
   "registered_in": "0x447520",
   "call_site": "0x44b4ae",
   "impl": "0x415ac0",
   "thunk": "0x41e670",
   "owner": "_G",
   "lua_uses": 1,
   "observed_argc": {
    "1": 1
   }
  },
  {
   "name": "getDolbyProfileName",
   "helper": "member",
   "registered_in": "0x447520",
   "call_site": "0x44b4eb",
   "impl": "0x4184c0",
   "thunk": "0x41e6f0",
   "owner": "_G",
   "lua_uses": 2,
   "observed_argc": {
    "1": 2
   }
  },
  {
   "name": "getDolbyProfileCount",
   "helper": "member",
   "registered_in": "0x447520",
   "call_site": "0x44b528",
   "impl": "0x415ae0",
   "thunk": "0x41d380",
   "owner": "_G",
   "lua_uses": 2,
   "observed_argc": {
    "0": 2
   }
  },
  {
   "name": "getCurrentTime",
   "helper": "member",
   "registered_in": "0x447520",
   "call_site": "0x44b565",
   "impl": "0x413f10",
   "thunk": "0x41d4b0",
   "owner": "_G",
   "lua_uses": 21,
   "observed_argc": {
    "0": 21
   }
  },
  {
   "name": "getTimeDifference",
   "helper": "gamelua_extra",
   "registered_in": "0x447520",
   "call_site": "0x44b57b",
   "impl": "0x415ba0",
   "thunk": null,
   "owner": "_G",
   "lua_uses": 6,
   "observed_argc": {
    "1": 1,
    "2": 4,
    "3": 1
   }
  },
  {
   "name": "getTimeDifferenceInSeconds",
   "helper": "gamelua_extra",
   "registered_in": "0x447520",
   "call_site": "0x44b591",
   "impl": "0x4141a0",
   "thunk": null,
   "owner": "_G",
   "lua_uses": 14,
   "observed_argc": {
    "2": 12,
    "6": 1,
    "8": 1
   }
  },
  {
   "name": "native_addSecondsToTime",
   "helper": "gamelua_extra",
   "registered_in": "0x447520",
   "call_site": "0x44b5a7",
   "impl": "0x415af0",
   "thunk": null,
   "owner": "_G",
   "lua_uses": 9,
   "observed_argc": {
    "2": 9
   }
  },
  {
   "name": "importJSONToLuaTable",
   "helper": "member",
   "registered_in": "0x447520",
   "call_site": "0x44b5e4",
   "impl": "0x4184f0",
   "thunk": "0x42cbb0",
   "owner": "_G",
   "lua_uses": 1,
   "observed_argc": {
    "2": 1
   }
  },
  {
   "name": "exportLuaTableAsJSON",
   "helper": "member",
   "registered_in": "0x447520",
   "call_site": "0x44b621",
   "impl": "0x42b750",
   "thunk": "0x42d1f0",
   "owner": "_G",
   "lua_uses": 1,
   "observed_argc": {
    "1": 1
   }
  },
  {
   "name": "GetJSONDiff",
   "helper": "member",
   "registered_in": "0x447520",
   "call_site": "0x44b65e",
   "impl": "0x42b8d0",
   "thunk": "0x42d240",
   "owner": "_G",
   "lua_uses": 0,
   "observed_argc": {}
  },
  {
   "name": "decodeBase64",
   "helper": "member",
   "registered_in": "0x447520",
   "call_site": "0x44b69b",
   "impl": "0x4185d0",
   "thunk": "0x42d1f0",
   "owner": "_G",
   "lua_uses": 0,
   "observed_argc": {}
  },
  {
   "name": "loadLuaFileToObject",
   "helper": "gamelua_extra",
   "registered_in": "0x447520",
   "call_site": "0x44b6b1",
   "impl": "0x42f120",
   "thunk": null,
   "owner": "_G",
   "lua_uses": 172,
   "observed_argc": {
    "3": 172
   }
  },
  {
   "name": "loadLuaFileFromAppDataToObject",
   "helper": "gamelua_extra",
   "registered_in": "0x447520",
   "call_site": "0x44b6c7",
   "impl": "0x4279e0",
   "thunk": null,
   "owner": "_G",
   "lua_uses": 0,
   "observed_argc": {}
  },
  {
   "name": "loadLuaFile",
   "helper": "member",
   "registered_in": "0x447520",
   "call_site": "0x44b704",
   "impl": "0x42d9d0",
   "thunk": "0x42d290",
   "owner": "_G",
   "lua_uses": 58,
   "observed_argc": {
    "4": 58
   }
  },
  {
   "name": "setNormalTrailSprite",
   "helper": "member",
   "registered_in": "0x447520",
   "call_site": "0x44b741",
   "impl": "0x4229e0",
   "thunk": "0x42c9d0",
   "owner": "_G",
   "lua_uses": 2,
   "observed_argc": {
    "1": 2
   }
  },
  {
   "name": "setSpecialTrailSprite",
   "helper": "member",
   "registered_in": "0x447520",
   "call_site": "0x44b77e",
   "impl": "0x422a50",
   "thunk": "0x42c9d0",
   "owner": "_G",
   "lua_uses": 2,
   "observed_argc": {
    "1": 2
   }
  },
  {
   "name": "setAimingAidSprite",
   "helper": "member",
   "registered_in": "0x447520",
   "call_site": "0x44b7bb",
   "impl": "0x4202c0",
   "thunk": "0x42c9d0",
   "owner": "_G",
   "lua_uses": 1,
   "observed_argc": {
    "1": 1
   }
  },
  {
   "name": "setChannelCountLimit",
   "helper": "member",
   "registered_in": "0x447520",
   "call_site": "0x44b7f8",
   "impl": "0x413cf0",
   "thunk": "0x41e4b0",
   "owner": "_G",
   "lua_uses": 7,
   "observed_argc": {
    "2": 7
   }
  },
  {
   "name": "native_redistributeInfiniteParticles",
   "helper": "member",
   "registered_in": "0x447520",
   "call_site": "0x44b835",
   "impl": "0x415230",
   "thunk": "0x417b30",
   "owner": "_G",
   "lua_uses": 2,
   "observed_argc": {
    "0": 2
   }
  },
  {
   "name": "native_resizeRadius",
   "helper": "member",
   "registered_in": "0x447520",
   "call_site": "0x44b872",
   "impl": "0x430830",
   "thunk": "0x42cf20",
   "owner": "_G",
   "lua_uses": 0,
   "observed_argc": {}
  },
  {
   "name": "native_setIsWater",
   "helper": "member",
   "registered_in": "0x447520",
   "call_site": "0x44b8af",
   "impl": "0x430ae0",
   "thunk": "0x42cfc0",
   "owner": "_G",
   "lua_uses": 1,
   "observed_argc": {
    "2": 1
   }
  },
  {
   "name": "native_setWaterDensity",
   "helper": "member",
   "registered_in": "0x447520",
   "call_site": "0x44b8ec",
   "impl": "0x430b50",
   "thunk": "0x42ce30",
   "owner": "_G",
   "lua_uses": 8,
   "observed_argc": {
    "2": 3,
    "3": 1,
    "5": 1,
    "11": 1,
    "13": 1,
    "20": 1
   }
  },
  {
   "name": "native_setControlled",
   "helper": "member",
   "registered_in": "0x447520",
   "call_site": "0x44b929",
   "impl": "0x430c30",
   "thunk": "0x42cfc0",
   "owner": "_G",
   "lua_uses": 1,
   "observed_argc": {
    "2": 1
   }
  },
  {
   "name": "native_setAffectedByForceMultipliers",
   "helper": "member",
   "registered_in": "0x447520",
   "call_site": "0x44b966",
   "impl": "0x430ca0",
   "thunk": "0x42cfc0",
   "owner": "_G",
   "lua_uses": 2,
   "observed_argc": {
    "2": 2
   }
  },
  {
   "name": "native_setKeepOrientation",
   "helper": "member",
   "registered_in": "0x447520",
   "call_site": "0x44b9a3",
   "impl": "0x430d10",
   "thunk": "0x42cfc0",
   "owner": "_G",
   "lua_uses": 0,
   "observed_argc": {}
  },
  {
   "name": "native_setTimeSinceCollision",
   "helper": "member",
   "registered_in": "0x447520",
   "call_site": "0x44b9e0",
   "impl": "0x430d80",
   "thunk": "0x42ce30",
   "owner": "_G",
   "lua_uses": 4,
   "observed_argc": {
    "2": 4
   }
  },
  {
   "name": "native_setIgnoresScore",
   "helper": "member",
   "registered_in": "0x447520",
   "call_site": "0x44ba1d",
   "impl": "0x430f50",
   "thunk": "0x42cfc0",
   "owner": "_G",
   "lua_uses": 1,
   "observed_argc": {
    "2": 1
   }
  },
  {
   "name": "setRecordVelocity",
   "helper": "member",
   "registered_in": "0x447520",
   "call_site": "0x44ba5a",
   "impl": "0x430df0",
   "thunk": "0x42cfc0",
   "owner": "_G",
   "lua_uses": 0,
   "observed_argc": {}
  },
  {
   "name": "setRevertGravity",
   "helper": "member",
   "registered_in": "0x447520",
   "call_site": "0x44ba97",
   "impl": "0x430e60",
   "thunk": "0x42cfc0",
   "owner": "_G",
   "lua_uses": 0,
   "observed_argc": {}
  },
  {
   "name": "setRevertGravityWithMultiplier",
   "helper": "member",
   "registered_in": "0x447520",
   "call_site": "0x44bad4",
   "impl": "0x430ed0",
   "thunk": "0x42d2e0",
   "owner": "_G",
   "lua_uses": 2,
   "observed_argc": {
    "4": 2
   }
  },
  {
   "name": "getUnlockRequestChecksum",
   "helper": "gamelua_extra",
   "registered_in": "0x447520",
   "call_site": "0x44baea",
   "impl": "0x42a9a0",
   "thunk": null,
   "owner": "_G",
   "lua_uses": 2,
   "observed_argc": {
    "3": 2
   }
  },
  {
   "name": "native_getLevelLimits",
   "helper": "gamelua_extra",
   "registered_in": "0x447520",
   "call_site": "0x44bb00",
   "impl": "0x4151d0",
   "thunk": null,
   "owner": "_G",
   "lua_uses": 0,
   "observed_argc": {}
  },
  {
   "name": "native_setScoreMultiplier",
   "helper": "member",
   "registered_in": "0x447520",
   "call_site": "0x44bb3d",
   "impl": "0x430bc0",
   "thunk": "0x42ce30",
   "owner": "_G",
   "lua_uses": 1,
   "observed_argc": {
    "2": 1
   }
  },
  {
   "name": "setGameRenderingDisabled",
   "helper": "gamelua_extra",
   "registered_in": "0x447520",
   "call_site": "0x44bb53",
   "impl": "0x415290",
   "thunk": null,
   "owner": "_G",
   "lua_uses": 0,
   "observed_argc": {}
  },
  {
   "name": "isGameRenderingDisabled",
   "helper": "gamelua_extra",
   "registered_in": "0x447520",
   "call_site": "0x44bb69",
   "impl": "0x4152b0",
   "thunk": null,
   "owner": "_G",
   "lua_uses": 0,
   "observed_argc": {}
  },
  {
   "name": "recoverRenderObjects",
   "helper": "member",
   "registered_in": "0x447520",
   "call_site": "0x44bba6",
   "impl": "0x4442f0",
   "thunk": "0x417b30",
   "owner": "_G",
   "lua_uses": 0,
   "observed_argc": {}
  },
  {
   "name": "cutsceneLoad",
   "helper": "member",
   "registered_in": "0x447520",
   "call_site": "0x44bbe3",
   "impl": "0x4196f0",
   "thunk": "0x42cbb0",
   "owner": "_G",
   "lua_uses": 7,
   "observed_argc": {
    "2": 7
   }
  },
  {
   "name": "cutsceneClose",
   "helper": "member",
   "registered_in": "0x447520",
   "call_site": "0x44bc20",
   "impl": "0x419780",
   "thunk": "0x42c9d0",
   "owner": "_G",
   "lua_uses": 8,
   "observed_argc": {
    "1": 8
   }
  },
  {
   "name": "cutsceneCloseAll",
   "helper": "member",
   "registered_in": "0x447520",
   "call_site": "0x44bc5d",
   "impl": "0x414c90",
   "thunk": "0x417b30",
   "owner": "_G",
   "lua_uses": 0,
   "observed_argc": {}
  },
  {
   "name": "cutsceneStart",
   "helper": "member",
   "registered_in": "0x447520",
   "call_site": "0x44bc9a",
   "impl": "0x4197e0",
   "thunk": "0x42ca70",
   "owner": "_G",
   "lua_uses": 8,
   "observed_argc": {
    "3": 8
   }
  },
  {
   "name": "cutsceneStop",
   "helper": "member",
   "registered_in": "0x447520",
   "call_site": "0x44bcd7",
   "impl": "0x419890",
   "thunk": "0x42cbb0",
   "owner": "_G",
   "lua_uses": 2,
   "observed_argc": {
    "2": 2
   }
  },
  {
   "name": "cutsceneStopAll",
   "helper": "member",
   "registered_in": "0x447520",
   "call_site": "0x44bd14",
   "impl": "0x414ca0",
   "thunk": "0x417b30",
   "owner": "_G",
   "lua_uses": 0,
   "observed_argc": {}
  },
  {
   "name": "cutsceneSeek",
   "helper": "member",
   "registered_in": "0x447520",
   "call_site": "0x44bd51",
   "impl": "0x419910",
   "thunk": "0x42ce30",
   "owner": "_G",
   "lua_uses": 1,
   "observed_argc": {
    "2": 1
   }
  },
  {
   "name": "cutsceneSetTranslation",
   "helper": "member",
   "registered_in": "0x447520",
   "call_site": "0x44bd8e",
   "impl": "0x419980",
   "thunk": "0x42cb10",
   "owner": "_G",
   "lua_uses": 8,
   "observed_argc": {
    "3": 8
   }
  },
  {
   "name": "cutsceneSetRotation",
   "helper": "member",
   "registered_in": "0x447520",
   "call_site": "0x44bdcb",
   "impl": "0x4199f0",
   "thunk": "0x42ce30",
   "owner": "_G",
   "lua_uses": 1,
   "observed_argc": {
    "2": 1
   }
  },
  {
   "name": "cutsceneSetScale",
   "helper": "member",
   "registered_in": "0x447520",
   "call_site": "0x44be08",
   "impl": "0x419a60",
   "thunk": "0x42cb10",
   "owner": "_G",
   "lua_uses": 6,
   "observed_argc": {
    "3": 6
   }
  },
  {
   "name": "updateCutscene",
   "helper": "member",
   "registered_in": "0x447520",
   "call_site": "0x44be45",
   "impl": "0x414cb0",
   "thunk": "0x41e1c0",
   "owner": "_G",
   "lua_uses": 1,
   "observed_argc": {
    "1": 1
   }
  },
  {
   "name": "drawCutscene",
   "helper": "member",
   "registered_in": "0x447520",
   "call_site": "0x44be82",
   "impl": "0x419ad0",
   "thunk": "0x42c9d0",
   "owner": "_G",
   "lua_uses": 7,
   "observed_argc": {
    "1": 7
   }
  },
  {
   "name": "fileExistsInAppData",
   "helper": "member",
   "registered_in": "0x447520",
   "call_site": "0x44bebf",
   "impl": "0x42ac30",
   "thunk": "0x42cac0",
   "owner": "_G",
   "lua_uses": 0,
   "observed_argc": {}
  },
  {
   "name": "native_createSpriteSheet",
   "helper": "member",
   "registered_in": "0x452480",
   "call_site": "0x4524b4",
   "impl": "0x4522e0",
   "thunk": "0x407db0",
   "owner": "ResourceManager",
   "lua_uses": 1,
   "observed_argc": {
    "1": 1
   }
  },
  {
   "name": "native_releaseSpriteSheet",
   "helper": "member",
   "registered_in": "0x452480",
   "call_site": "0x4524d4",
   "impl": "0x4523e0",
   "thunk": "0x407db0",
   "owner": "ResourceManager",
   "lua_uses": 1,
   "observed_argc": {
    "1": 1
   }
  },
  {
   "name": "native_createAudio",
   "helper": "res",
   "registered_in": "0x452480",
   "call_site": "0x4524e6",
   "impl": null,
   "thunk": "0x451e70",
   "owner": "ResourceManager",
   "lua_uses": 3,
   "observed_argc": {
    "4": 3
   }
  },
  {
   "name": "native_releaseAudio",
   "helper": "res",
   "registered_in": "0x452480",
   "call_site": "0x4524f8",
   "impl": null,
   "thunk": "0x451ce0",
   "owner": "ResourceManager",
   "lua_uses": 1,
   "observed_argc": {
    "1": 1
   }
  },
  {
   "name": "native_playAudio",
   "helper": "res",
   "registered_in": "0x452480",
   "call_site": "0x45250a",
   "impl": null,
   "thunk": "0x451da0",
   "owner": "ResourceManager",
   "lua_uses": 1,
   "observed_argc": {}
  },
  {
   "name": "getServerTimeInUTC",
   "helper": "member",
   "registered_in": "0x454c80",
   "call_site": "0x454d1d",
   "impl": "0x452aa0",
   "thunk": "0x452fa0",
   "owner": "ServerTime",
   "lua_uses": 1,
   "observed_argc": {
    "0": 1
   }
  },
  {
   "name": "getServerTimeInLocalTimeZone",
   "helper": "member",
   "registered_in": "0x454c80",
   "call_site": "0x454d3d",
   "impl": "0x452ad0",
   "thunk": "0x452fa0",
   "owner": "ServerTime",
   "lua_uses": 3,
   "observed_argc": {
    "0": 2
   }
  },
  {
   "name": "synchronizeServerTime",
   "helper": "res",
   "registered_in": "0x454c80",
   "call_site": "0x454d4f",
   "impl": null,
   "thunk": "0x454c40",
   "owner": "ServerTime",
   "lua_uses": 3,
   "observed_argc": {
    "0": 2,
    "1": 1
   }
  },
  {
   "name": "getStatus",
   "helper": "member",
   "registered_in": "0x454c80",
   "call_site": "0x454d6f",
   "impl": "0x4535a0",
   "thunk": "0x453030",
   "owner": "ServerTime",
   "lua_uses": 2,
   "observed_argc": {
    "0": 2
   }
  },
  {
   "name": "setPath",
   "helper": "member",
   "registered_in": "0x47ebb0",
   "call_site": "0x47ec21",
   "impl": "0x47bd90",
   "thunk": "0x407db0",
   "owner": "res",
   "lua_uses": 0,
   "observed_argc": {}
  },
  {
   "name": "createSpriteSheet",
   "helper": "res",
   "registered_in": "0x47ebb0",
   "call_site": "0x47ec33",
   "impl": null,
   "thunk": "0x47c510",
   "owner": "res",
   "lua_uses": 0,
   "observed_argc": {}
  },
  {
   "name": "createCompoSpriteSet",
   "helper": "res",
   "registered_in": "0x47ebb0",
   "call_site": "0x47ec45",
   "impl": null,
   "thunk": "0x47c600",
   "owner": "res",
   "lua_uses": 1,
   "observed_argc": {
    "1": 1
   }
  },
  {
   "name": "createBitmapFont",
   "helper": "res",
   "registered_in": "0x47ebb0",
   "call_site": "0x47ec57",
   "impl": null,
   "thunk": "0x47c6d0",
   "owner": "res",
   "lua_uses": 2,
   "observed_argc": {
    "1": 2
   }
  },
  {
   "name": "createSystemFont",
   "helper": "res",
   "registered_in": "0x47ebb0",
   "call_site": "0x47ec69",
   "impl": null,
   "thunk": "0x47c7a0",
   "owner": "res",
   "lua_uses": 1,
   "observed_argc": {
    "8": 1
   }
  },
  {
   "name": "createTextGroupSet",
   "helper": "res",
   "registered_in": "0x47ebb0",
   "call_site": "0x47ec7b",
   "impl": null,
   "thunk": "0x47c960",
   "owner": "res",
   "lua_uses": 1,
   "observed_argc": {
    "1": 1
   }
  },
  {
   "name": "createAudioOutput",
   "helper": "member",
   "registered_in": "0x47ebb0",
   "call_site": "0x47ec9b",
   "impl": "0x47b8b0",
   "thunk": "0x47c1a0",
   "owner": "res",
   "lua_uses": 8,
   "observed_argc": {
    "3": 8
   }
  },
  {
   "name": "createAudioInput",
   "helper": "member",
   "registered_in": "0x47ebb0",
   "call_site": "0x47ecbb",
   "impl": "0x47b8f0",
   "thunk": "0x47c1a0",
   "owner": "res",
   "lua_uses": 0,
   "observed_argc": {}
  },
  {
   "name": "createAudio",
   "helper": "res",
   "registered_in": "0x47ebb0",
   "call_site": "0x47eccd",
   "impl": null,
   "thunk": "0x47ca30",
   "owner": "res",
   "lua_uses": 571,
   "observed_argc": {
    "2": 1,
    "4": 485,
    "5": 84
   }
  },
  {
   "name": "createCompositeAudio",
   "helper": "member",
   "registered_in": "0x47ebb0",
   "call_site": "0x47eced",
   "impl": "0x47e800",
   "thunk": "0x47ea70",
   "owner": "res",
   "lua_uses": 3,
   "observed_argc": {
    "2": 2
   }
  },
  {
   "name": "captureSprite",
   "helper": "member",
   "registered_in": "0x47ebb0",
   "call_site": "0x47ed0d",
   "impl": "0x47bdf0",
   "thunk": "0x407db0",
   "owner": "res",
   "lua_uses": 1,
   "observed_argc": {
    "1": 1
   }
  },
  {
   "name": "releaseSpriteSheet",
   "helper": "res",
   "registered_in": "0x47ebb0",
   "call_site": "0x47ed1f",
   "impl": null,
   "thunk": "0x47cc10",
   "owner": "res",
   "lua_uses": 1,
   "observed_argc": {
    "1": 1
   }
  },
  {
   "name": "releaseCompoSpriteSet",
   "helper": "member",
   "registered_in": "0x47ebb0",
   "call_site": "0x47ed3f",
   "impl": "0x47be50",
   "thunk": "0x407db0",
   "owner": "res",
   "lua_uses": 1,
   "observed_argc": {
    "1": 1
   }
  },
  {
   "name": "releaseFont",
   "helper": "member",
   "registered_in": "0x47ebb0",
   "call_site": "0x47ed5f",
   "impl": "0x47beb0",
   "thunk": "0x407db0",
   "owner": "res",
   "lua_uses": 6,
   "observed_argc": {
    "1": 1,
    "2": 4
   }
  },
  {
   "name": "releaseTextGroupSet",
   "helper": "member",
   "registered_in": "0x47ebb0",
   "call_site": "0x47ed7f",
   "impl": "0x47bf10",
   "thunk": "0x407db0",
   "owner": "res",
   "lua_uses": 0,
   "observed_argc": {}
  },
  {
   "name": "releaseAudio",
   "helper": "res",
   "registered_in": "0x47ebb0",
   "call_site": "0x47ed91",
   "impl": null,
   "thunk": "0x47cd20",
   "owner": "res",
   "lua_uses": 0,
   "observed_argc": {}
  },
  {
   "name": "loadLocale",
   "helper": "member",
   "registered_in": "0x47ebb0",
   "call_site": "0x47edb1",
   "impl": "0x47bf70",
   "thunk": "0x47eac0",
   "owner": "res",
   "lua_uses": 2,
   "observed_argc": {
    "2": 2
   }
  },
  {
   "name": "useLocale",
   "helper": "member",
   "registered_in": "0x47ebb0",
   "call_site": "0x47edd1",
   "impl": "0x47bff0",
   "thunk": "0x407db0",
   "owner": "res",
   "lua_uses": 2,
   "observed_argc": {
    "1": 2
   }
  },
  {
   "name": "useFont",
   "helper": "member",
   "registered_in": "0x47ebb0",
   "call_site": "0x47edf1",
   "impl": "0x47c050",
   "thunk": "0x407db0",
   "owner": "res",
   "lua_uses": 12,
   "observed_argc": {
    "1": 10,
    "8": 1,
    "10": 1
   }
  },
  {
   "name": "getAvailableSystemFonts",
   "helper": "member",
   "registered_in": "0x47ebb0",
   "call_site": "0x47ee11",
   "impl": "0x47bc20",
   "thunk": "0x452fa0",
   "owner": "res",
   "lua_uses": 0,
   "observed_argc": {}
  },
  {
   "name": "drawSprite",
   "helper": "res",
   "registered_in": "0x47ebb0",
   "call_site": "0x47ee23",
   "impl": null,
   "thunk": "0x47cdd0",
   "owner": "res",
   "lua_uses": 131,
   "observed_argc": {
    "3": 96,
    "4": 5,
    "5": 4,
    "6": 11,
    "7": 3,
    "9": 10,
    "15": 2
   }
  },
  {
   "name": "drawCompoSprite",
   "helper": "res",
   "registered_in": "0x47ebb0",
   "call_site": "0x47ee35",
   "impl": null,
   "thunk": "0x47d080",
   "owner": "res",
   "lua_uses": 0,
   "observed_argc": {}
  },
  {
   "name": "drawString",
   "helper": "res",
   "registered_in": "0x47ebb0",
   "call_site": "0x47ee47",
   "impl": null,
   "thunk": "0x47d090",
   "owner": "res",
   "lua_uses": 31,
   "observed_argc": {
    "6": 30
   }
  },
  {
   "name": "setClipRect",
   "helper": "member",
   "registered_in": "0x47ebb0",
   "call_site": "0x47ee67",
   "impl": "0x47b930",
   "thunk": "0x47c230",
   "owner": "res",
   "lua_uses": 25,
   "observed_argc": {
    "4": 20,
    "9": 4
   }
  },
  {
   "name": "getClipRect",
   "helper": "res",
   "registered_in": "0x47ebb0",
   "call_site": "0x47ee79",
   "impl": null,
   "thunk": "0x47b9a0",
   "owner": "res",
   "lua_uses": 3,
   "observed_argc": {
    "0": 3
   }
  },
  {
   "name": "getString",
   "helper": "member",
   "registered_in": "0x47ebb0",
   "call_site": "0x47ee99",
   "impl": "0x47c420",
   "thunk": "0x47eb10",
   "owner": "res",
   "lua_uses": 52,
   "observed_argc": {
    "2": 52
   }
  },
  {
   "name": "playAudio",
   "helper": "res",
   "registered_in": "0x47ebb0",
   "call_site": "0x47eeab",
   "impl": null,
   "thunk": "0x47d210",
   "owner": "res",
   "lua_uses": 562,
   "observed_argc": {
    "1": 166,
    "2": 9,
    "3": 5
   }
  },
  {
   "name": "stopAudio",
   "helper": "res",
   "registered_in": "0x47ebb0",
   "call_site": "0x47eebd",
   "impl": null,
   "thunk": "0x47d320",
   "owner": "res",
   "lua_uses": 63,
   "observed_argc": {
    "0": 1,
    "1": 56
   }
  },
  {
   "name": "stopAllAudio",
   "helper": "member",
   "registered_in": "0x47ebb0",
   "call_site": "0x47eedd",
   "impl": "0x47ba20",
   "thunk": "0x47bce0",
   "owner": "res",
   "lua_uses": 4,
   "observed_argc": {
    "0": 4
   }
  },
  {
   "name": "isAudioPlaying",
   "helper": "res",
   "registered_in": "0x47ebb0",
   "call_site": "0x47eeef",
   "impl": null,
   "thunk": "0x47d400",
   "owner": "res",
   "lua_uses": 30,
   "observed_argc": {
    "1": 28
   }
  },
  {
   "name": "getSpriteBounds",
   "helper": "res",
   "registered_in": "0x47ebb0",
   "call_site": "0x47ef01",
   "impl": null,
   "thunk": "0x47d500",
   "owner": "res",
   "lua_uses": 175,
   "observed_argc": {
    "1": 172,
    "6": 1,
    "8": 1
   }
  },
  {
   "name": "getSpritePivot",
   "helper": "res",
   "registered_in": "0x47ebb0",
   "call_site": "0x47ef13",
   "impl": null,
   "thunk": "0x47d5f0",
   "owner": "res",
   "lua_uses": 46,
   "observed_argc": {
    "1": 45
   }
  },
  {
   "name": "getCompoSpriteBounds",
   "helper": "res",
   "registered_in": "0x47ebb0",
   "call_site": "0x47ef25",
   "impl": null,
   "thunk": "0x47d6e0",
   "owner": "res",
   "lua_uses": 0,
   "observed_argc": {}
  },
  {
   "name": "getCompoSpriteData",
   "helper": "res",
   "registered_in": "0x47ebb0",
   "call_site": "0x47ef37",
   "impl": null,
   "thunk": "0x47d900",
   "owner": "res",
   "lua_uses": 0,
   "observed_argc": {}
  },
  {
   "name": "getCompoSpriteEntry",
   "helper": "res",
   "registered_in": "0x47ebb0",
   "call_site": "0x47ef49",
   "impl": null,
   "thunk": "0x47db30",
   "owner": "res",
   "lua_uses": 0,
   "observed_argc": {}
  },
  {
   "name": "setCompoSpriteEntry",
   "helper": "res",
   "registered_in": "0x47ebb0",
   "call_site": "0x47ef5b",
   "impl": null,
   "thunk": "0x47ded0",
   "owner": "res",
   "lua_uses": 0,
   "observed_argc": {}
  },
  {
   "name": "getStringWidth",
   "helper": "member",
   "registered_in": "0x47ebb0",
   "call_site": "0x47ef7b",
   "impl": "0x47c0b0",
   "thunk": "0x47eb60",
   "owner": "res",
   "lua_uses": 46,
   "observed_argc": {
    "1": 42,
    "8": 3
   }
  },
  {
   "name": "getFontMaxAscending",
   "helper": "member",
   "registered_in": "0x47ebb0",
   "call_site": "0x47ef9b",
   "impl": "0x47ba30",
   "thunk": "0x47c280",
   "owner": "res",
   "lua_uses": 0,
   "observed_argc": {}
  },
  {
   "name": "getFontMaxDescending",
   "helper": "member",
   "registered_in": "0x47ebb0",
   "call_site": "0x47efbb",
   "impl": "0x47ba50",
   "thunk": "0x47c280",
   "owner": "res",
   "lua_uses": 0,
   "observed_argc": {}
  },
  {
   "name": "getFontLeading",
   "helper": "member",
   "registered_in": "0x47ebb0",
   "call_site": "0x47efdb",
   "impl": "0x47ba70",
   "thunk": "0x47c280",
   "owner": "res",
   "lua_uses": 92,
   "observed_argc": {
    "0": 27,
    "1": 61,
    "16": 1
   }
  },
  {
   "name": "getFontTracking",
   "helper": "member",
   "registered_in": "0x47ebb0",
   "call_site": "0x47effb",
   "impl": "0x47ba90",
   "thunk": "0x47c280",
   "owner": "res",
   "lua_uses": 0,
   "observed_argc": {}
  },
  {
   "name": "getFontHeight",
   "helper": "member",
   "registered_in": "0x47ebb0",
   "call_site": "0x47f01b",
   "impl": "0x47bab0",
   "thunk": "0x47c280",
   "owner": "res",
   "lua_uses": 8,
   "observed_argc": {
    "0": 8
   }
  },
  {
   "name": "getLocale",
   "helper": "member",
   "registered_in": "0x47ebb0",
   "call_site": "0x47f03b",
   "impl": "0x47c3e0",
   "thunk": "0x453030",
   "owner": "res",
   "lua_uses": 1,
   "observed_argc": {
    "0": 1
   }
  },
  {
   "name": "startAudioOutput",
   "helper": "member",
   "registered_in": "0x47ebb0",
   "call_site": "0x47f05b",
   "impl": "0x47bad0",
   "thunk": "0x405800",
   "owner": "res",
   "lua_uses": 3,
   "observed_argc": {
    "0": 3
   }
  },
  {
   "name": "stopAudioOutput",
   "helper": "member",
   "registered_in": "0x47ebb0",
   "call_site": "0x47f07b",
   "impl": "0x47bae0",
   "thunk": "0x47bce0",
   "owner": "res",
   "lua_uses": 3,
   "observed_argc": {
    "0": 3
   }
  },
  {
   "name": "startAudioInput",
   "helper": "member",
   "registered_in": "0x47ebb0",
   "call_site": "0x47f09b",
   "impl": "0x47baf0",
   "thunk": "0x47bce0",
   "owner": "res",
   "lua_uses": 0,
   "observed_argc": {}
  },
  {
   "name": "stopAudioInput",
   "helper": "member",
   "registered_in": "0x47ebb0",
   "call_site": "0x47f0bb",
   "impl": "0x47bb00",
   "thunk": "0x47bce0",
   "owner": "res",
   "lua_uses": 0,
   "observed_argc": {}
  },
  {
   "name": "setMasterVolume",
   "helper": "member",
   "registered_in": "0x47ebb0",
   "call_site": "0x47f0db",
   "impl": "0x47bb20",
   "thunk": "0x47c2e0",
   "owner": "res",
   "lua_uses": 0,
   "observed_argc": {}
  },
  {
   "name": "setTrackVolume",
   "helper": "member",
   "registered_in": "0x47ebb0",
   "call_site": "0x47f0fb",
   "impl": "0x47bb40",
   "thunk": "0x406da0",
   "owner": "res",
   "lua_uses": 8,
   "observed_argc": {
    "2": 8
   }
  },
  {
   "name": "getTrackVolume",
   "helper": "member",
   "registered_in": "0x47ebb0",
   "call_site": "0x47f11b",
   "impl": "0x47bb70",
   "thunk": "0x47c340",
   "owner": "res",
   "lua_uses": 0,
   "observed_argc": {}
  },
  {
   "name": "openURL",
   "helper": "member",
   "registered_in": "0x47ebb0",
   "call_site": "0x47f13b",
   "impl": "0x47c120",
   "thunk": "0x406130",
   "owner": "res",
   "lua_uses": 21,
   "observed_argc": {
    "1": 13,
    "4": 1,
    "5": 5,
    "6": 1
   }
  },
  {
   "name": "native_addParticlesWithMode",
   "helper": "res",
   "registered_in": "0x44ec20",
   "call_site": "0x44c28e",
   "impl": "0x44e4c0",
   "thunk": null,
   "owner": "particles",
   "lua_uses": 1,
   "observed_argc": {
    "1": 1
   }
  }
 ],
 "registering_functions": {
  "0x447520": 283,
  "0x47ebb0": 51,
  "0x408800": 7,
  "0x452480": 5,
  "0x454c80": 4,
  "0x404f80": 3,
  "0x406400": 3,
  "0x4182a0": 2,
  "0x44ec20": 1
 }
}`;export{n as default};
