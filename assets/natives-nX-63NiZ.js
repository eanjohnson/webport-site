var n=`{
 "registrations": [
  {
   "name": "spawnBGLayerParticles",
   "helper": "res",
   "registered_in": "0x410470",
   "call_site": "0x410538",
   "impl": null,
   "thunk": null,
   "owner": "themeSystem",
   "lua_uses": 0,
   "observed_argc": {}
  },
  {
   "name": "spawnFGLayerParticles",
   "helper": "res",
   "registered_in": "0x410470",
   "call_site": "0x41054a",
   "impl": null,
   "thunk": "0x44c700",
   "owner": "themeSystem",
   "lua_uses": 2,
   "observed_argc": {
    "1": 2
   }
  },
  {
   "name": "openBarnesAndNobleShop",
   "helper": "member",
   "registered_in": "0x43d9e0",
   "call_site": "0x43e52f",
   "impl": "0x4edf60",
   "thunk": "0x4241f0",
   "owner": "_G",
   "lua_uses": 0,
   "observed_argc": {}
  },
  {
   "name": "requestExit",
   "helper": "member",
   "registered_in": "0x43d9e0",
   "call_site": "0x43e56c",
   "impl": "0x4193a0",
   "thunk": "0x410010",
   "owner": "_G",
   "lua_uses": 3,
   "observed_argc": {
    "0": 3
   }
  },
  {
   "name": "print",
   "helper": "member",
   "registered_in": "0x43d9e0",
   "call_site": "0x43e5a9",
   "impl": "0x4edf60",
   "thunk": "0x4241f0",
   "owner": "_G",
   "lua_uses": 374,
   "observed_argc": {
    "1": 339,
    "2": 1,
    "3": 1
   }
  },
  {
   "name": "setBGColor",
   "helper": "member",
   "registered_in": "0x43d9e0",
   "call_site": "0x43e5e6",
   "impl": "0x40cf40",
   "thunk": "0x4154d0",
   "owner": "_G",
   "lua_uses": 4,
   "observed_argc": {
    "3": 4
   }
  },
  {
   "name": "getBGColor",
   "helper": "gamelua_extra",
   "registered_in": "0x43d9e0",
   "call_site": "0x43e5fc",
   "impl": "0x40cee0",
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
   "registered_in": "0x43d9e0",
   "call_site": "0x43e612",
   "impl": "0x429bb0",
   "thunk": null,
   "owner": "_G",
   "lua_uses": 2,
   "observed_argc": {
    "2": 2
   }
  },
  {
   "name": "drawRubberband",
   "helper": "member",
   "registered_in": "0x43d9e0",
   "call_site": "0x43e64f",
   "impl": "0x414a10",
   "thunk": "0x424240",
   "owner": "_G",
   "lua_uses": 2,
   "observed_argc": {
    "6": 2
   }
  },
  {
   "name": "checkForUpdates",
   "helper": "member",
   "registered_in": "0x43d9e0",
   "call_site": "0x43e68c",
   "impl": "0x425c20",
   "thunk": "0x410010",
   "owner": "_G",
   "lua_uses": 1,
   "observed_argc": {
    "0": 1
   }
  },
  {
   "name": "callVersionUpdater",
   "helper": "member",
   "registered_in": "0x43d9e0",
   "call_site": "0x43e6c9",
   "impl": "0x423b00",
   "thunk": "0x410010",
   "owner": "_G",
   "lua_uses": 1,
   "observed_argc": {
    "0": 1
   }
  },
  {
   "name": "captureMouse",
   "helper": "member",
   "registered_in": "0x43d9e0",
   "call_site": "0x43e706",
   "impl": "0x40d200",
   "thunk": "0x414e00",
   "owner": "_G",
   "lua_uses": 3,
   "observed_argc": {
    "1": 3
   }
  },
  {
   "name": "isMouseCaptured",
   "helper": "member",
   "registered_in": "0x43d9e0",
   "call_site": "0x43e743",
   "impl": "0x40d260",
   "thunk": "0x410050",
   "owner": "_G",
   "lua_uses": 2,
   "observed_argc": {
    "0": 2
   }
  },
  {
   "name": "setFullScreenMode",
   "helper": "member",
   "registered_in": "0x43d9e0",
   "call_site": "0x43e780",
   "impl": "0x40d1e0",
   "thunk": "0x414e00",
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
   "registered_in": "0x43d9e0",
   "call_site": "0x43e7bd",
   "impl": "0x40d1b0",
   "thunk": "0x415560",
   "owner": "_G",
   "lua_uses": 1,
   "observed_argc": {
    "2": 1
   }
  },
  {
   "name": "getFullScreenWidth",
   "helper": "member",
   "registered_in": "0x43d9e0",
   "call_site": "0x43e7fa",
   "impl": "0x47b1a0",
   "thunk": "0x414e60",
   "owner": "_G",
   "lua_uses": 1,
   "observed_argc": {
    "0": 1
   }
  },
  {
   "name": "getFullScreenHeight",
   "helper": "member",
   "registered_in": "0x43d9e0",
   "call_site": "0x43e837",
   "impl": "0x47b1a0",
   "thunk": "0x414e60",
   "owner": "_G",
   "lua_uses": 0,
   "observed_argc": {}
  },
  {
   "name": "isInFullScreenMode",
   "helper": "member",
   "registered_in": "0x43d9e0",
   "call_site": "0x43e874",
   "impl": "0x40d270",
   "thunk": "0x410050",
   "owner": "_G",
   "lua_uses": 5,
   "observed_argc": {
    "0": 5
   }
  },
  {
   "name": "getClipboardText",
   "helper": "member",
   "registered_in": "0x43d9e0",
   "call_site": "0x43e8b1",
   "impl": "0x4214a0",
   "thunk": "0x4155e0",
   "owner": "_G",
   "lua_uses": 1,
   "observed_argc": {
    "0": 1
   }
  },
  {
   "name": "setIsMultitouchMouseWheelSimulationEnabled",
   "helper": "member",
   "registered_in": "0x43d9e0",
   "call_site": "0x43e8ee",
   "impl": "0x40d220",
   "thunk": "0x414e00",
   "owner": "_G",
   "lua_uses": 2,
   "observed_argc": {
    "1": 2
   }
  },
  {
   "name": "doesMouseClickSetsTouchCount",
   "helper": "member",
   "registered_in": "0x43d9e0",
   "call_site": "0x43e92b",
   "impl": "0x44d3f0",
   "thunk": "0x410050",
   "owner": "_G",
   "lua_uses": 0,
   "observed_argc": {}
  },
  {
   "name": "enableSmoothZooming",
   "helper": "member",
   "registered_in": "0x43d9e0",
   "call_site": "0x43e968",
   "impl": "0x40d240",
   "thunk": "0x414e00",
   "owner": "_G",
   "lua_uses": 1,
   "observed_argc": {
    "1": 1
   }
  },
  {
   "name": "native_initPaymentProvider",
   "helper": "member",
   "registered_in": "0x43d9e0",
   "call_site": "0x43e9a5",
   "impl": "0x40d450",
   "thunk": "0x410010",
   "owner": "_G",
   "lua_uses": 2,
   "observed_argc": {
    "0": 2
   }
  },
  {
   "name": "native_isPaymentInitialized",
   "helper": "member",
   "registered_in": "0x43d9e0",
   "call_site": "0x43e9e2",
   "impl": "0x548180",
   "thunk": "0x410050",
   "owner": "_G",
   "lua_uses": 1,
   "observed_argc": {
    "0": 1
   }
  },
  {
   "name": "toggleZoomSteps",
   "helper": "member",
   "registered_in": "0x43d9e0",
   "call_site": "0x43ea1f",
   "impl": "0x40d130",
   "thunk": "0x415670",
   "owner": "_G",
   "lua_uses": 1,
   "observed_argc": {}
  },
  {
   "name": "setAccelerometerSensitivity",
   "helper": "member",
   "registered_in": "0x43d9e0",
   "call_site": "0x43ea5c",
   "impl": "0x466970",
   "thunk": "0x4156c0",
   "owner": "_G",
   "lua_uses": 1,
   "observed_argc": {
    "1": 1
   }
  },
  {
   "name": "registerKey",
   "helper": "member",
   "registered_in": "0x43d9e0",
   "call_site": "0x43ea99",
   "impl": "0x418b80",
   "thunk": "0x424290",
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
   "registered_in": "0x43d9e0",
   "call_site": "0x43ead6",
   "impl": "0x4148c0",
   "thunk": "0x4242e0",
   "owner": "_G",
   "lua_uses": 1,
   "observed_argc": {
    "2": 1
   }
  },
  {
   "name": "getDeviceID",
   "helper": "member",
   "registered_in": "0x43d9e0",
   "call_site": "0x43eb13",
   "impl": "0x414960",
   "thunk": "0x4155e0",
   "owner": "_G",
   "lua_uses": 1,
   "observed_argc": {
    "0": 1
   }
  },
  {
   "name": "checkRegistrationResult",
   "helper": "gamelua_extra",
   "registered_in": "0x43d9e0",
   "call_site": "0x43eb29",
   "impl": "0x40dd20",
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
   "registered_in": "0x43d9e0",
   "call_site": "0x43ec0f",
   "impl": "0x40d470",
   "thunk": "0x4156c0",
   "owner": "_G",
   "lua_uses": 0,
   "observed_argc": {}
  },
  {
   "name": "getGravityForceMultiplier",
   "helper": "member",
   "registered_in": "0x43d9e0",
   "call_site": "0x43ec4c",
   "impl": "0x40d480",
   "thunk": "0x414ec0",
   "owner": "_G",
   "lua_uses": 0,
   "observed_argc": {}
  },
  {
   "name": "setWaterForceMultiplier",
   "helper": "member",
   "registered_in": "0x43d9e0",
   "call_site": "0x43ec89",
   "impl": "0x40d490",
   "thunk": "0x4156c0",
   "owner": "_G",
   "lua_uses": 0,
   "observed_argc": {}
  },
  {
   "name": "getWaterForceMultiplier",
   "helper": "member",
   "registered_in": "0x43d9e0",
   "call_site": "0x43ecc6",
   "impl": "0x40d4a0",
   "thunk": "0x414ec0",
   "owner": "_G",
   "lua_uses": 0,
   "observed_argc": {}
  },
  {
   "name": "native_setBirdWaterDrag",
   "helper": "member",
   "registered_in": "0x43d9e0",
   "call_site": "0x43ed03",
   "impl": "0x40d4b0",
   "thunk": "0x4156c0",
   "owner": "_G",
   "lua_uses": 0,
   "observed_argc": {}
  },
  {
   "name": "native_setObjectWaterDrag",
   "helper": "member",
   "registered_in": "0x43d9e0",
   "call_site": "0x43ed40",
   "impl": "0x40d4c0",
   "thunk": "0x4156c0",
   "owner": "_G",
   "lua_uses": 0,
   "observed_argc": {}
  },
  {
   "name": "native_setWaterColor",
   "helper": "member",
   "registered_in": "0x43d9e0",
   "call_site": "0x43ed7d",
   "impl": "0x40d4d0",
   "thunk": "0x415720",
   "owner": "_G",
   "lua_uses": 0,
   "observed_argc": {}
  },
  {
   "name": "native_setAdditionalBirdGravity",
   "helper": "member",
   "registered_in": "0x43d9e0",
   "call_site": "0x43edba",
   "impl": "0x40d460",
   "thunk": "0x4156c0",
   "owner": "_G",
   "lua_uses": 0,
   "observed_argc": {}
  },
  {
   "name": "ClearSimulationTrajectory",
   "helper": "member",
   "registered_in": "0x43d9e0",
   "call_site": "0x43edf7",
   "impl": "0x4237a0",
   "thunk": "0x410010",
   "owner": "_G",
   "lua_uses": 4,
   "observed_argc": {
    "0": 4
   }
  },
  {
   "name": "setDeltaTimeMultiplier",
   "helper": "member",
   "registered_in": "0x43d9e0",
   "call_site": "0x43ee34",
   "impl": "0x40d030",
   "thunk": "0x4156c0",
   "owner": "_G",
   "lua_uses": 3,
   "observed_argc": {
    "1": 3
   }
  },
  {
   "name": "getDeltaTimeMultiplier",
   "helper": "member",
   "registered_in": "0x43d9e0",
   "call_site": "0x43ee71",
   "impl": "0x40d040",
   "thunk": "0x414ec0",
   "owner": "_G",
   "lua_uses": 9,
   "observed_argc": {
    "0": 9
   }
  },
  {
   "name": "setSensorMinimumAndMaximumForces",
   "helper": "member",
   "registered_in": "0x43d9e0",
   "call_site": "0x43eeae",
   "impl": "0x429a00",
   "thunk": "0x424330",
   "owner": "_G",
   "lua_uses": 0,
   "observed_argc": {}
  },
  {
   "name": "setSensorGravityMask",
   "helper": "member",
   "registered_in": "0x43d9e0",
   "call_site": "0x43eeeb",
   "impl": "0x429920",
   "thunk": "0x424380",
   "owner": "_G",
   "lua_uses": 2,
   "observed_argc": {
    "2": 2
   }
  },
  {
   "name": "setObjectGravityCategory",
   "helper": "member",
   "registered_in": "0x43d9e0",
   "call_site": "0x43ef28",
   "impl": "0x429990",
   "thunk": "0x424380",
   "owner": "_G",
   "lua_uses": 12,
   "observed_argc": {
    "2": 12
   }
  },
  {
   "name": "GetDate",
   "helper": "member",
   "registered_in": "0x43d9e0",
   "call_site": "0x43ef65",
   "impl": "0x40c730",
   "thunk": "0x414e60",
   "owner": "_G",
   "lua_uses": 1,
   "observed_argc": {
    "0": 1
   }
  },
  {
   "name": "drawUITextNative",
   "helper": "gamelua_extra",
   "registered_in": "0x43d9e0",
   "call_site": "0x43ef7b",
   "impl": "0x4167f0",
   "thunk": null,
   "owner": "_G",
   "lua_uses": 8,
   "observed_argc": {
    "3": 4,
    "6": 2,
    "7": 2
   }
  },
  {
   "name": "iapBuyItem",
   "helper": "member",
   "registered_in": "0x43d9e0",
   "call_site": "0x43efb8",
   "impl": "0x41aba0",
   "thunk": "0x4243d0",
   "owner": "_G",
   "lua_uses": 1,
   "observed_argc": {
    "2": 1
   }
  },
  {
   "name": "iapInitItemPurchase",
   "helper": "member",
   "registered_in": "0x43d9e0",
   "call_site": "0x43eff5",
   "impl": "0x41ac30",
   "thunk": "0x4241f0",
   "owner": "_G",
   "lua_uses": 0,
   "observed_argc": {}
  },
  {
   "name": "iapGetItemCount",
   "helper": "member",
   "registered_in": "0x43d9e0",
   "call_site": "0x43f032",
   "impl": "0x40dce0",
   "thunk": "0x414ec0",
   "owner": "_G",
   "lua_uses": 1,
   "observed_argc": {
    "0": 1
   }
  },
  {
   "name": "iapGetItemAt",
   "helper": "member",
   "registered_in": "0x43d9e0",
   "call_site": "0x43f06f",
   "impl": "0x40dcf0",
   "thunk": "0x415770",
   "owner": "_G",
   "lua_uses": 1,
   "observed_argc": {
    "1": 1
   }
  },
  {
   "name": "iapSetItemDescription",
   "helper": "member",
   "registered_in": "0x43d9e0",
   "call_site": "0x43f0ac",
   "impl": "0x414830",
   "thunk": "0x424420",
   "owner": "_G",
   "lua_uses": 0,
   "observed_argc": {}
  },
  {
   "name": "iapRestoreItems",
   "helper": "member",
   "registered_in": "0x43d9e0",
   "call_site": "0x43f0e9",
   "impl": "0x41ac30",
   "thunk": "0x4241f0",
   "owner": "_G",
   "lua_uses": 3,
   "observed_argc": {
    "1": 3
   }
  },
  {
   "name": "native_iapRestorePurchases",
   "helper": "member",
   "registered_in": "0x43d9e0",
   "call_site": "0x43f126",
   "impl": "0x40d450",
   "thunk": "0x410010",
   "owner": "_G",
   "lua_uses": 0,
   "observed_argc": {}
  },
  {
   "name": "iapIsAllowed",
   "helper": "member",
   "registered_in": "0x43d9e0",
   "call_site": "0x43f163",
   "impl": "0x548180",
   "thunk": "0x410050",
   "owner": "_G",
   "lua_uses": 1,
   "observed_argc": {
    "0": 1
   }
  },
  {
   "name": "resetTimer",
   "helper": "member",
   "registered_in": "0x43d9e0",
   "call_site": "0x43f1a0",
   "impl": "0x40d0b0",
   "thunk": "0x410010",
   "owner": "_G",
   "lua_uses": 0,
   "observed_argc": {}
  },
  {
   "name": "logFlurryTimerEvent",
   "helper": "member",
   "registered_in": "0x43d9e0",
   "call_site": "0x43f1dd",
   "impl": "0x42e790",
   "thunk": "0x4241f0",
   "owner": "_G",
   "lua_uses": 2,
   "observed_argc": {
    "1": 2
   }
  },
  {
   "name": "native_startURLThread",
   "helper": "gamelua_extra",
   "registered_in": "0x43d9e0",
   "call_site": "0x43f1f3",
   "impl": "0x42ced0",
   "thunk": null,
   "owner": "_G",
   "lua_uses": 1,
   "observed_argc": {
    "2": 1
   }
  },
  {
   "name": "updateBirdTrajectoryTable",
   "helper": "member",
   "registered_in": "0x43d9e0",
   "call_site": "0x43f230",
   "impl": "0x426f60",
   "thunk": "0x410010",
   "owner": "_G",
   "lua_uses": 1,
   "observed_argc": {
    "0": 1
   }
  },
  {
   "name": "populateAimingAid",
   "helper": "member",
   "registered_in": "0x43d9e0",
   "call_site": "0x43f26d",
   "impl": "0x40e2d0",
   "thunk": "0x410010",
   "owner": "_G",
   "lua_uses": 1,
   "observed_argc": {
    "0": 1
   }
  },
  {
   "name": "setSelectedBirdDuringSimulation",
   "helper": "member",
   "registered_in": "0x43d9e0",
   "call_site": "0x43f2aa",
   "impl": "0x41ea00",
   "thunk": "0x4241f0",
   "owner": "_G",
   "lua_uses": 1,
   "observed_argc": {
    "1": 1
   }
  },
  {
   "name": "renderGravityVisualsNative",
   "helper": "gamelua_extra",
   "registered_in": "0x43d9e0",
   "call_site": "0x43f2c0",
   "impl": "0x415f90",
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
   "registered_in": "0x43d9e0",
   "call_site": "0x43f2fd",
   "impl": "0x40f6d0",
   "thunk": "0x414e00",
   "owner": "_G",
   "lua_uses": 5,
   "observed_argc": {
    "1": 2,
    "2": 2
   }
  },
  {
   "name": "addNotificationAfter",
   "helper": "member",
   "registered_in": "0x43d9e0",
   "call_site": "0x43f33a",
   "impl": "0x418970",
   "thunk": "0x424470",
   "owner": "_G",
   "lua_uses": 0,
   "observed_argc": {}
  },
  {
   "name": "removeNotification",
   "helper": "member",
   "registered_in": "0x43d9e0",
   "call_site": "0x43f377",
   "impl": "0x414850",
   "thunk": "0x4242e0",
   "owner": "_G",
   "lua_uses": 0,
   "observed_argc": {}
  },
  {
   "name": "removeAllNotifications",
   "helper": "member",
   "registered_in": "0x43d9e0",
   "call_site": "0x43f3b4",
   "impl": "0x40f050",
   "thunk": "0x410010",
   "owner": "_G",
   "lua_uses": 0,
   "observed_argc": {}
  },
  {
   "name": "setNotificationCallback",
   "helper": "member",
   "registered_in": "0x43d9e0",
   "call_site": "0x43f3f1",
   "impl": "0x4190e0",
   "thunk": "0x4241f0",
   "owner": "_G",
   "lua_uses": 1,
   "observed_argc": {
    "1": 1
   }
  },
  {
   "name": "setWorldGravity",
   "helper": "member",
   "registered_in": "0x43d9e0",
   "call_site": "0x43f42e",
   "impl": "0x40d080",
   "thunk": "0x415560",
   "owner": "_G",
   "lua_uses": 1,
   "observed_argc": {
    "2": 1
   }
  },
  {
   "name": "enableAimingAid",
   "helper": "member",
   "registered_in": "0x43d9e0",
   "call_site": "0x43f46b",
   "impl": "0x40c540",
   "thunk": "0x414e00",
   "owner": "_G",
   "lua_uses": 3,
   "observed_argc": {
    "1": 3
   }
  },
  {
   "name": "renderMaskedImageNative",
   "helper": "member",
   "registered_in": "0x43d9e0",
   "call_site": "0x43f4a8",
   "impl": "0x4256c0",
   "thunk": "0x4244c0",
   "owner": "_G",
   "lua_uses": 0,
   "observed_argc": {}
  },
  {
   "name": "drawString3D",
   "helper": "member",
   "registered_in": "0x43d9e0",
   "call_site": "0x43f4e5",
   "impl": "0x4145b0",
   "thunk": "0x424510",
   "owner": "_G",
   "lua_uses": 1,
   "observed_argc": {
    "9": 1
   }
  },
  {
   "name": "createBox",
   "helper": "member",
   "registered_in": "0x43d9e0",
   "call_site": "0x43f522",
   "impl": "0x438950",
   "thunk": "0x424560",
   "owner": "_G",
   "lua_uses": 2,
   "observed_argc": {
    "12": 2
   }
  },
  {
   "name": "createCircle",
   "helper": "member",
   "registered_in": "0x43d9e0",
   "call_site": "0x43f55f",
   "impl": "0x439000",
   "thunk": "0x4245b0",
   "owner": "_G",
   "lua_uses": 2,
   "observed_argc": {
    "11": 2
   }
  },
  {
   "name": "createPolygon",
   "helper": "member",
   "registered_in": "0x43d9e0",
   "call_site": "0x43f59c",
   "impl": "0x439d10",
   "thunk": "0x424560",
   "owner": "_G",
   "lua_uses": 1,
   "observed_argc": {
    "12": 1
   }
  },
  {
   "name": "createLineShape",
   "helper": "member",
   "registered_in": "0x43d9e0",
   "call_site": "0x43f5d9",
   "impl": "0x439640",
   "thunk": "0x424560",
   "owner": "_G",
   "lua_uses": 1,
   "observed_argc": {
    "12": 1
   }
  },
  {
   "name": "createJoint",
   "helper": "gamelua_extra",
   "registered_in": "0x43d9e0",
   "call_site": "0x43f5ef",
   "impl": "0x42a710",
   "thunk": null,
   "owner": "_G",
   "lua_uses": 12,
   "observed_argc": {
    "1": 12
   }
  },
  {
   "name": "createJoints",
   "helper": "gamelua_extra",
   "registered_in": "0x43d9e0",
   "call_site": "0x43f605",
   "impl": "0x42d900",
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
   "registered_in": "0x43d9e0",
   "call_site": "0x43f642",
   "impl": "0x434c50",
   "thunk": "0x424600",
   "owner": "_G",
   "lua_uses": 2,
   "observed_argc": {
    "12": 2
   }
  },
  {
   "name": "removeThemeSprite",
   "helper": "member",
   "registered_in": "0x43d9e0",
   "call_site": "0x43f67f",
   "impl": "0x431d40",
   "thunk": "0x424650",
   "owner": "_G",
   "lua_uses": 0,
   "observed_argc": {}
  },
  {
   "name": "modifyThemeSprite",
   "helper": "member",
   "registered_in": "0x43d9e0",
   "call_site": "0x43f6bc",
   "impl": "0x412480",
   "thunk": "0x4246a0",
   "owner": "_G",
   "lua_uses": 0,
   "observed_argc": {}
  },
  {
   "name": "rotateThemeSprites",
   "helper": "member",
   "registered_in": "0x43d9e0",
   "call_site": "0x43f6f9",
   "impl": "0x40e2e0",
   "thunk": "0x4156c0",
   "owner": "_G",
   "lua_uses": 0,
   "observed_argc": {}
  },
  {
   "name": "setThemeSprite",
   "helper": "member",
   "registered_in": "0x43d9e0",
   "call_site": "0x43f736",
   "impl": "0x41a6b0",
   "thunk": "0x4246f0",
   "owner": "_G",
   "lua_uses": 1,
   "observed_argc": {
    "3": 1
   }
  },
  {
   "name": "setThemeOffsetY",
   "helper": "member",
   "registered_in": "0x43d9e0",
   "call_site": "0x43f773",
   "impl": "0x412760",
   "thunk": "0x424650",
   "owner": "_G",
   "lua_uses": 1,
   "observed_argc": {
    "2": 1
   }
  },
  {
   "name": "native_setThemeLayerOffset",
   "helper": "member",
   "registered_in": "0x43d9e0",
   "call_site": "0x43f7b0",
   "impl": "0x40e560",
   "thunk": "0x415820",
   "owner": "_G",
   "lua_uses": 0,
   "observed_argc": {}
  },
  {
   "name": "native_setThemeLayerScale",
   "helper": "member",
   "registered_in": "0x43d9e0",
   "call_site": "0x43f7ed",
   "impl": "0x40e5d0",
   "thunk": "0x415820",
   "owner": "_G",
   "lua_uses": 0,
   "observed_argc": {}
  },
  {
   "name": "destroyJoint",
   "helper": "member",
   "registered_in": "0x43d9e0",
   "call_site": "0x43f82a",
   "impl": "0x428cd0",
   "thunk": "0x4241f0",
   "owner": "_G",
   "lua_uses": 0,
   "observed_argc": {}
  },
  {
   "name": "setJointParameters",
   "helper": "gamelua_extra",
   "registered_in": "0x43d9e0",
   "call_site": "0x43f840",
   "impl": "0x411a20",
   "thunk": null,
   "owner": "_G",
   "lua_uses": 1,
   "observed_argc": {
    "1": 1
   }
  },
  {
   "name": "clearVertices",
   "helper": "member",
   "registered_in": "0x43d9e0",
   "call_site": "0x43f87d",
   "impl": "0x423650",
   "thunk": "0x410010",
   "owner": "_G",
   "lua_uses": 2,
   "observed_argc": {
    "0": 2
   }
  },
  {
   "name": "addVertex",
   "helper": "member",
   "registered_in": "0x43d9e0",
   "call_site": "0x43f8ba",
   "impl": "0x423690",
   "thunk": "0x415560",
   "owner": "_G",
   "lua_uses": 2,
   "observed_argc": {
    "2": 2
   }
  },
  {
   "name": "applyImpulse",
   "helper": "member",
   "registered_in": "0x43d9e0",
   "call_site": "0x43f8f7",
   "impl": "0x419a70",
   "thunk": "0x424740",
   "owner": "_G",
   "lua_uses": 44,
   "observed_argc": {
    "5": 24
   }
  },
  {
   "name": "applyForceNative",
   "helper": "member",
   "registered_in": "0x43d9e0",
   "call_site": "0x43f934",
   "impl": "0x419b00",
   "thunk": "0x424740",
   "owner": "_G",
   "lua_uses": 1,
   "observed_argc": {
    "5": 1
   }
  },
  {
   "name": "setPosition",
   "helper": "member",
   "registered_in": "0x43d9e0",
   "call_site": "0x43f971",
   "impl": "0x427460",
   "thunk": "0x424330",
   "owner": "_G",
   "lua_uses": 72,
   "observed_argc": {
    "3": 51
   }
  },
  {
   "name": "setRotation",
   "helper": "member",
   "registered_in": "0x43d9e0",
   "call_site": "0x43f9ae",
   "impl": "0x4279b0",
   "thunk": "0x424650",
   "owner": "_G",
   "lua_uses": 72,
   "observed_argc": {
    "2": 50,
    "23": 2
   }
  },
  {
   "name": "setSpriteRotation",
   "helper": "member",
   "registered_in": "0x43d9e0",
   "call_site": "0x43f9eb",
   "impl": "0x4277d0",
   "thunk": "0x424650",
   "owner": "_G",
   "lua_uses": 2,
   "observed_argc": {
    "2": 2
   }
  },
  {
   "name": "setDecorationObjects",
   "helper": "member",
   "registered_in": "0x43d9e0",
   "call_site": "0x43fa28",
   "impl": "0x427590",
   "thunk": "0x4241f0",
   "owner": "_G",
   "lua_uses": 1,
   "observed_argc": {
    "1": 1
   }
  },
  {
   "name": "setPivotOffset",
   "helper": "member",
   "registered_in": "0x43d9e0",
   "call_site": "0x43fa65",
   "impl": "0x4278d0",
   "thunk": "0x424330",
   "owner": "_G",
   "lua_uses": 1,
   "observed_argc": {
    "3": 1
   }
  },
  {
   "name": "setScale",
   "helper": "member",
   "registered_in": "0x43d9e0",
   "call_site": "0x43faa2",
   "impl": "0x427b00",
   "thunk": "0x424330",
   "owner": "_G",
   "lua_uses": 26,
   "observed_argc": {
    "2": 2,
    "3": 17
   }
  },
  {
   "name": "setPhysicsScale",
   "helper": "member",
   "registered_in": "0x43d9e0",
   "call_site": "0x43fadf",
   "impl": "0x42a1e0",
   "thunk": "0x424330",
   "owner": "_G",
   "lua_uses": 0,
   "observed_argc": {}
  },
  {
   "name": "setVelocity",
   "helper": "member",
   "registered_in": "0x43d9e0",
   "call_site": "0x43fb1c",
   "impl": "0x419c90",
   "thunk": "0x424330",
   "owner": "_G",
   "lua_uses": 60,
   "observed_argc": {
    "3": 39
   }
  },
  {
   "name": "setRestitution",
   "helper": "member",
   "registered_in": "0x43d9e0",
   "call_site": "0x43fb59",
   "impl": "0x419d10",
   "thunk": "0x424650",
   "owner": "_G",
   "lua_uses": 0,
   "observed_argc": {}
  },
  {
   "name": "setAngularVelocity",
   "helper": "member",
   "registered_in": "0x43d9e0",
   "call_site": "0x43fb96",
   "impl": "0x419e10",
   "thunk": "0x424650",
   "owner": "_G",
   "lua_uses": 6,
   "observed_argc": {
    "2": 6
   }
  },
  {
   "name": "getAngularVelocity",
   "helper": "member",
   "registered_in": "0x43d9e0",
   "call_site": "0x43fbd3",
   "impl": "0x419ea0",
   "thunk": "0x424790",
   "owner": "_G",
   "lua_uses": 1,
   "observed_argc": {
    "1": 1
   }
  },
  {
   "name": "getVelocity",
   "helper": "member",
   "registered_in": "0x43d9e0",
   "call_site": "0x43fc10",
   "impl": "0x419f30",
   "thunk": "0x424790",
   "owner": "_G",
   "lua_uses": 21,
   "observed_argc": {
    "1": 3
   }
  },
  {
   "name": "getLinearVelocity",
   "helper": "gamelua_extra",
   "registered_in": "0x43d9e0",
   "call_site": "0x43fc26",
   "impl": "0x42d7f0",
   "thunk": null,
   "owner": "_G",
   "lua_uses": 4,
   "observed_argc": {
    "1": 4
   }
  },
  {
   "name": "setFixedRotation",
   "helper": "member",
   "registered_in": "0x43d9e0",
   "call_site": "0x43fc63",
   "impl": "0x41a0d0",
   "thunk": "0x4247e0",
   "owner": "_G",
   "lua_uses": 5,
   "observed_argc": {
    "2": 5
   }
  },
  {
   "name": "setAngularDamping",
   "helper": "member",
   "registered_in": "0x43d9e0",
   "call_site": "0x43fca0",
   "impl": "0x41a250",
   "thunk": "0x424650",
   "owner": "_G",
   "lua_uses": 3,
   "observed_argc": {
    "2": 3
   }
  },
  {
   "name": "setLinearDamping",
   "helper": "member",
   "registered_in": "0x43d9e0",
   "call_site": "0x43fcdd",
   "impl": "0x41a3c0",
   "thunk": "0x424650",
   "owner": "_G",
   "lua_uses": 20,
   "observed_argc": {
    "2": 20
   }
  },
  {
   "name": "setAsSensor",
   "helper": "member",
   "registered_in": "0x43d9e0",
   "call_site": "0x43fd1a",
   "impl": "0x41a530",
   "thunk": "0x4247e0",
   "owner": "_G",
   "lua_uses": 6,
   "observed_argc": {
    "2": 6
   }
  },
  {
   "name": "multiplyVelocity",
   "helper": "member",
   "registered_in": "0x43d9e0",
   "call_site": "0x43fd57",
   "impl": "0x419d80",
   "thunk": "0x424650",
   "owner": "_G",
   "lua_uses": 0,
   "observed_argc": {}
  },
  {
   "name": "setPhysicsSimulationScale",
   "helper": "member",
   "registered_in": "0x43d9e0",
   "call_site": "0x43fd94",
   "impl": "0x40d060",
   "thunk": "0x4156c0",
   "owner": "_G",
   "lua_uses": 1,
   "observed_argc": {
    "1": 1
   }
  },
  {
   "name": "setPhysicsEnabled",
   "helper": "gamelua_extra",
   "registered_in": "0x43d9e0",
   "call_site": "0x43fdaa",
   "impl": "0x429f60",
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
   "registered_in": "0x43d9e0",
   "call_site": "0x43fde7",
   "impl": "0x40d070",
   "thunk": "0x410050",
   "owner": "_G",
   "lua_uses": 10,
   "observed_argc": {
    "0": 10
   }
  },
  {
   "name": "setTopLeft",
   "helper": "member",
   "registered_in": "0x43d9e0",
   "call_site": "0x43fe24",
   "impl": "0x40d0e0",
   "thunk": "0x415560",
   "owner": "_G",
   "lua_uses": 2,
   "observed_argc": {
    "2": 2
   }
  },
  {
   "name": "setMaxWorldScale",
   "helper": "member",
   "registered_in": "0x43d9e0",
   "call_site": "0x43fe61",
   "impl": "0x40d190",
   "thunk": "0x4156c0",
   "owner": "_G",
   "lua_uses": 1,
   "observed_argc": {
    "22": 1
   }
  },
  {
   "name": "removeObject",
   "helper": "member",
   "registered_in": "0x43d9e0",
   "call_site": "0x43fe9e",
   "impl": "0x437db0",
   "thunk": "0x4241f0",
   "owner": "_G",
   "lua_uses": 10,
   "observed_argc": {
    "1": 10
   }
  },
  {
   "name": "setEditing",
   "helper": "member",
   "registered_in": "0x43d9e0",
   "call_site": "0x43fedb",
   "impl": "0x40ceb0",
   "thunk": "0x414e00",
   "owner": "_G",
   "lua_uses": 2,
   "observed_argc": {
    "1": 2
   }
  },
  {
   "name": "setWorldScale",
   "helper": "member",
   "registered_in": "0x43d9e0",
   "call_site": "0x43ff18",
   "impl": "0x40d100",
   "thunk": "0x4156c0",
   "owner": "_G",
   "lua_uses": 15,
   "observed_argc": {
    "1": 15
   }
  },
  {
   "name": "resetMouseWheelScale",
   "helper": "member",
   "registered_in": "0x43d9e0",
   "call_site": "0x43ff55",
   "impl": "0x40d160",
   "thunk": "0x4156c0",
   "owner": "_G",
   "lua_uses": 1,
   "observed_argc": {
    "1": 1
   }
  },
  {
   "name": "drawSelectedTexturizedObject",
   "helper": "member",
   "registered_in": "0x43d9e0",
   "call_site": "0x43ff92",
   "impl": "0x4296c0",
   "thunk": "0x424830",
   "owner": "_G",
   "lua_uses": 0,
   "observed_argc": {}
  },
  {
   "name": "native_onLevelInitComplete",
   "helper": "member",
   "registered_in": "0x43d9e0",
   "call_site": "0x43ffcf",
   "impl": "0x40ddf0",
   "thunk": "0x410010",
   "owner": "_G",
   "lua_uses": 1,
   "observed_argc": {
    "0": 1
   }
  },
  {
   "name": "drawRect",
   "helper": "member",
   "registered_in": "0x43d9e0",
   "call_site": "0x44000c",
   "impl": "0x40cce0",
   "thunk": "0x4158c0",
   "owner": "_G",
   "lua_uses": 47,
   "observed_argc": {
    "9": 47
   }
  },
  {
   "name": "drawTexturedRect",
   "helper": "member",
   "registered_in": "0x43d9e0",
   "call_site": "0x440049",
   "impl": "0x410bd0",
   "thunk": "0x424880",
   "owner": "_G",
   "lua_uses": 0,
   "observed_argc": {}
  },
  {
   "name": "removeJointsFromObject",
   "helper": "member",
   "registered_in": "0x43d9e0",
   "call_site": "0x440086",
   "impl": "0x428300",
   "thunk": "0x4241f0",
   "owner": "_G",
   "lua_uses": 5,
   "observed_argc": {
    "1": 5
   }
  },
  {
   "name": "setRevoluteJointSpeed",
   "helper": "member",
   "registered_in": "0x43d9e0",
   "call_site": "0x4400c3",
   "impl": "0x411900",
   "thunk": "0x424650",
   "owner": "_G",
   "lua_uses": 3,
   "observed_argc": {
    "2": 3
   }
  },
  {
   "name": "removeBreakableJointsFromObject",
   "helper": "member",
   "registered_in": "0x43d9e0",
   "call_site": "0x440100",
   "impl": "0x42f510",
   "thunk": "0x424650",
   "owner": "_G",
   "lua_uses": 8,
   "observed_argc": {
    "2": 4,
    "5": 1,
    "9": 3
   }
  },
  {
   "name": "linkSensor",
   "helper": "member",
   "registered_in": "0x43d9e0",
   "call_site": "0x44013d",
   "impl": "0x4edf60",
   "thunk": "0x4241f0",
   "owner": "_G",
   "lua_uses": 0,
   "observed_argc": {}
  },
  {
   "name": "setRenderState",
   "helper": "gamelua_extra",
   "registered_in": "0x43d9e0",
   "call_site": "0x440153",
   "impl": "0x40ca20",
   "thunk": null,
   "owner": "_G",
   "lua_uses": 164,
   "observed_argc": {
    "4": 10,
    "5": 15,
    "6": 11,
    "7": 86,
    "8": 26,
    "10": 2,
    "11": 2,
    "13": 1,
    "16": 2,
    "23": 2,
    "26": 2,
    "35": 2,
    "40": 1
   }
  },
  {
   "name": "native_setAlpha",
   "helper": "member",
   "registered_in": "0x43d9e0",
   "call_site": "0x440190",
   "impl": "0x40ce90",
   "thunk": "0x4156c0",
   "owner": "_G",
   "lua_uses": 4,
   "observed_argc": {
    "1": 4
   }
  },
  {
   "name": "clearScreen",
   "helper": "member",
   "registered_in": "0x43d9e0",
   "call_site": "0x4401cd",
   "impl": "0x40d280",
   "thunk": "0x410010",
   "owner": "_G",
   "lua_uses": 0,
   "observed_argc": {}
  },
  {
   "name": "loadBlocksForEditing",
   "helper": "member",
   "registered_in": "0x43d9e0",
   "call_site": "0x44020a",
   "impl": "0x420740",
   "thunk": "0x410010",
   "owner": "_G",
   "lua_uses": 0,
   "observed_argc": {}
  },
  {
   "name": "loadLevel",
   "helper": "member",
   "registered_in": "0x43d9e0",
   "call_site": "0x440247",
   "impl": "0x436cf0",
   "thunk": "0x4241f0",
   "owner": "_G",
   "lua_uses": 1,
   "observed_argc": {
    "1": 1
   }
  },
  {
   "name": "loadLevelFromAppData",
   "helper": "member",
   "registered_in": "0x43d9e0",
   "call_site": "0x440284",
   "impl": "0x436d70",
   "thunk": "0x4241f0",
   "owner": "_G",
   "lua_uses": 0,
   "observed_argc": {}
  },
  {
   "name": "saveLevel",
   "helper": "member",
   "registered_in": "0x43d9e0",
   "call_site": "0x4402c1",
   "impl": "0x41f440",
   "thunk": "0x4241f0",
   "owner": "_G",
   "lua_uses": 0,
   "observed_argc": {}
  },
  {
   "name": "saveLuaFile",
   "helper": "member",
   "registered_in": "0x43d9e0",
   "call_site": "0x4402fe",
   "impl": "0x417020",
   "thunk": "0x4248d0",
   "owner": "_G",
   "lua_uses": 1,
   "observed_argc": {
    "3": 1
   }
  },
  {
   "name": "savePersistentLuaFile",
   "helper": "member",
   "registered_in": "0x43d9e0",
   "call_site": "0x44033b",
   "impl": "0x4171d0",
   "thunk": "0x4243d0",
   "owner": "_G",
   "lua_uses": 2,
   "observed_argc": {
    "2": 2
   }
  },
  {
   "name": "storePersistentData",
   "helper": "member",
   "registered_in": "0x43d9e0",
   "call_site": "0x440378",
   "impl": "0x40d450",
   "thunk": "0x410010",
   "owner": "_G",
   "lua_uses": 3,
   "observed_argc": {
    "0": 3
   }
  },
  {
   "name": "getAimingTime",
   "helper": "member",
   "registered_in": "0x43d9e0",
   "call_site": "0x4403b5",
   "impl": "0x40d910",
   "thunk": "0x414ec0",
   "owner": "_G",
   "lua_uses": 1,
   "observed_argc": {
    "0": 1
   }
  },
  {
   "name": "clearAimingAid",
   "helper": "member",
   "registered_in": "0x43d9e0",
   "call_site": "0x4403f2",
   "impl": "0x40ea20",
   "thunk": "0x4156c0",
   "owner": "_G",
   "lua_uses": 7,
   "observed_argc": {
    "1": 7
   }
  },
  {
   "name": "createDirectory",
   "helper": "member",
   "registered_in": "0x43d9e0",
   "call_site": "0x44042f",
   "impl": "0x412910",
   "thunk": "0x4241f0",
   "owner": "_G",
   "lua_uses": 2,
   "observed_argc": {
    "1": 2
   }
  },
  {
   "name": "checkDirectory",
   "helper": "member",
   "registered_in": "0x43d9e0",
   "call_site": "0x44046c",
   "impl": "0x4129b0",
   "thunk": "0x4242e0",
   "owner": "_G",
   "lua_uses": 2,
   "observed_argc": {
    "1": 2
   }
  },
  {
   "name": "native_setZOrderRange",
   "helper": "member",
   "registered_in": "0x43d9e0",
   "call_site": "0x4404a9",
   "impl": "0x40d8f0",
   "thunk": "0x415910",
   "owner": "_G",
   "lua_uses": 0,
   "observed_argc": {}
  },
  {
   "name": "drawGameNative",
   "helper": "member",
   "registered_in": "0x43d9e0",
   "call_site": "0x4404e6",
   "impl": "0x43ac70",
   "thunk": "0x415990",
   "owner": "_G",
   "lua_uses": 1,
   "observed_argc": {
    "1": 1
   }
  },
  {
   "name": "drawBackgroundNative",
   "helper": "member",
   "registered_in": "0x43d9e0",
   "call_site": "0x440523",
   "impl": "0x4136a0",
   "thunk": "0x4156c0",
   "owner": "_G",
   "lua_uses": 1,
   "observed_argc": {
    "1": 1
   }
  },
  {
   "name": "drawLayer",
   "helper": "member",
   "registered_in": "0x43d9e0",
   "call_site": "0x440560",
   "impl": "0x466970",
   "thunk": "0x4156c0",
   "owner": "_G",
   "lua_uses": 12,
   "observed_argc": {
    "1": 1,
    "3": 1
   }
  },
  {
   "name": "native_refreshThemeSystem",
   "helper": "member",
   "registered_in": "0x43d9e0",
   "call_site": "0x44059d",
   "impl": "0x40dde0",
   "thunk": "0x410010",
   "owner": "_G",
   "lua_uses": 1,
   "observed_argc": {
    "0": 1
   }
  },
  {
   "name": "native_resetThemeSystem",
   "helper": "member",
   "registered_in": "0x43d9e0",
   "call_site": "0x4405da",
   "impl": "0x40ddd0",
   "thunk": "0x410010",
   "owner": "_G",
   "lua_uses": 1,
   "observed_argc": {
    "0": 1
   }
  },
  {
   "name": "native_drawSimulationTrajectory",
   "helper": "member",
   "registered_in": "0x43d9e0",
   "call_site": "0x440617",
   "impl": "0x40ea50",
   "thunk": "0x410010",
   "owner": "_G",
   "lua_uses": 1,
   "observed_argc": {
    "0": 1
   }
  },
  {
   "name": "native_drawBackgroundParticles",
   "helper": "member",
   "registered_in": "0x43d9e0",
   "call_site": "0x440654",
   "impl": "0x40d980",
   "thunk": "0x410010",
   "owner": "_G",
   "lua_uses": 1,
   "observed_argc": {
    "0": 1
   }
  },
  {
   "name": "native_drawForegroundParticles",
   "helper": "member",
   "registered_in": "0x43d9e0",
   "call_site": "0x440691",
   "impl": "0x40d9b0",
   "thunk": "0x410010",
   "owner": "_G",
   "lua_uses": 1,
   "observed_argc": {
    "0": 1
   }
  },
  {
   "name": "drawMenuParticlesNative",
   "helper": "member",
   "registered_in": "0x43d9e0",
   "call_site": "0x4406ce",
   "impl": "0x40d9e0",
   "thunk": "0x410010",
   "owner": "_G",
   "lua_uses": 4,
   "observed_argc": {
    "0": 1,
    "1": 3
   }
  },
  {
   "name": "native_drawNotificationParticles",
   "helper": "member",
   "registered_in": "0x43d9e0",
   "call_site": "0x44070b",
   "impl": "0x40da00",
   "thunk": "0x410010",
   "owner": "_G",
   "lua_uses": 1,
   "observed_argc": {
    "0": 1
   }
  },
  {
   "name": "updateMenuParticlesNative",
   "helper": "member",
   "registered_in": "0x43d9e0",
   "call_site": "0x440748",
   "impl": "0x40da20",
   "thunk": "0x4156c0",
   "owner": "_G",
   "lua_uses": 4,
   "observed_argc": {
    "1": 4
   }
  },
  {
   "name": "updateThemeParticlesNative",
   "helper": "member",
   "registered_in": "0x43d9e0",
   "call_site": "0x440785",
   "impl": "0x40da50",
   "thunk": "0x4156c0",
   "owner": "_G",
   "lua_uses": 0,
   "observed_argc": {}
  },
  {
   "name": "setMenuParticlesScale",
   "helper": "member",
   "registered_in": "0x43d9e0",
   "call_site": "0x4407c2",
   "impl": "0x40da80",
   "thunk": "0x4156c0",
   "owner": "_G",
   "lua_uses": 3,
   "observed_argc": {
    "1": 3
   }
  },
  {
   "name": "clearParticlesNative",
   "helper": "member",
   "registered_in": "0x43d9e0",
   "call_site": "0x4407ff",
   "impl": "0x40da70",
   "thunk": "0x410010",
   "owner": "_G",
   "lua_uses": 2,
   "observed_argc": {
    "0": 2
   }
  },
  {
   "name": "clearParticlesWithTagNative",
   "helper": "member",
   "registered_in": "0x43d9e0",
   "call_site": "0x44083c",
   "impl": "0x4178d0",
   "thunk": "0x4241f0",
   "owner": "_G",
   "lua_uses": 2,
   "observed_argc": {
    "1": 2
   }
  },
  {
   "name": "enableInGameParticlesNative",
   "helper": "member",
   "registered_in": "0x43d9e0",
   "call_site": "0x440879",
   "impl": "0x40daa0",
   "thunk": "0x414e00",
   "owner": "_G",
   "lua_uses": 4,
   "observed_argc": {
    "1": 4
   }
  },
  {
   "name": "setSprite",
   "helper": "member",
   "registered_in": "0x43d9e0",
   "call_site": "0x4408b6",
   "impl": "0x43a3e0",
   "thunk": "0x4243d0",
   "owner": "_G",
   "lua_uses": 67,
   "observed_argc": {
    "2": 47
   }
  },
  {
   "name": "setVisible",
   "helper": "member",
   "registered_in": "0x43d9e0",
   "call_site": "0x4408f3",
   "impl": "0x429260",
   "thunk": "0x4247e0",
   "owner": "_G",
   "lua_uses": 117,
   "observed_argc": {
    "2": 114
   }
  },
  {
   "name": "setMaterial",
   "helper": "member",
   "registered_in": "0x43d9e0",
   "call_site": "0x440930",
   "impl": "0x4292d0",
   "thunk": "0x4243d0",
   "owner": "_G",
   "lua_uses": 2,
   "observed_argc": {
    "2": 2
   }
  },
  {
   "name": "setTexture",
   "helper": "member",
   "registered_in": "0x43d9e0",
   "call_site": "0x44096d",
   "impl": "0x4294f0",
   "thunk": "0x4243d0",
   "owner": "_G",
   "lua_uses": 2,
   "observed_argc": {
    "2": 2
   }
  },
  {
   "name": "setTextureScale",
   "helper": "member",
   "registered_in": "0x43d9e0",
   "call_site": "0x4409aa",
   "impl": "0x429650",
   "thunk": "0x424650",
   "owner": "_G",
   "lua_uses": 2,
   "observed_argc": {
    "2": 2
   }
  },
  {
   "name": "setTheme",
   "helper": "member",
   "registered_in": "0x43d9e0",
   "call_site": "0x4409e7",
   "impl": "0x43d1c0",
   "thunk": "0x4241f0",
   "owner": "_G",
   "lua_uses": 5,
   "observed_argc": {
    "1": 5
   }
  },
  {
   "name": "setSleeping",
   "helper": "member",
   "registered_in": "0x43d9e0",
   "call_site": "0x440a24",
   "impl": "0x419bf0",
   "thunk": "0x4247e0",
   "owner": "_G",
   "lua_uses": 6,
   "observed_argc": {
    "2": 6
   }
  },
  {
   "name": "setActive",
   "helper": "member",
   "registered_in": "0x43d9e0",
   "call_site": "0x440a61",
   "impl": "0x419b90",
   "thunk": "0x4247e0",
   "owner": "_G",
   "lua_uses": 30,
   "observed_argc": {
    "2": 10
   }
  },
  {
   "name": "drawTexturedLine2D",
   "helper": "member",
   "registered_in": "0x43d9e0",
   "call_site": "0x440a9e",
   "impl": "0x425b20",
   "thunk": "0x424920",
   "owner": "_G",
   "lua_uses": 4,
   "observed_argc": {
    "10": 4
   }
  },
  {
   "name": "drawLine2D",
   "helper": "member",
   "registered_in": "0x43d9e0",
   "call_site": "0x440adb",
   "impl": "0x40dab0",
   "thunk": "0x4159f0",
   "owner": "_G",
   "lua_uses": 49,
   "observed_argc": {
    "9": 47
   }
  },
  {
   "name": "drawRectLines",
   "helper": "member",
   "registered_in": "0x43d9e0",
   "call_site": "0x440b18",
   "impl": "0x40db90",
   "thunk": "0x4159f0",
   "owner": "_G",
   "lua_uses": 12,
   "observed_argc": {
    "9": 12
   }
  },
  {
   "name": "drawCompoSprite",
   "helper": "member",
   "registered_in": "0x43d9e0",
   "call_site": "0x440b55",
   "impl": "0x41a9a0",
   "thunk": "0x424330",
   "owner": "_G",
   "lua_uses": 0,
   "observed_argc": {}
  },
  {
   "name": "throwException",
   "helper": "member",
   "registered_in": "0x43d9e0",
   "call_site": "0x440b92",
   "impl": "0x425120",
   "thunk": "0x4241f0",
   "owner": "_G",
   "lua_uses": 0,
   "observed_argc": {}
  },
  {
   "name": "drawForegroundNative",
   "helper": "member",
   "registered_in": "0x43d9e0",
   "call_site": "0x440bcf",
   "impl": "0x40eaa0",
   "thunk": "0x410010",
   "owner": "_G",
   "lua_uses": 0,
   "observed_argc": {}
  },
  {
   "name": "drawForeground",
   "helper": "member",
   "registered_in": "0x43d9e0",
   "call_site": "0x440c0c",
   "impl": "0x412a70",
   "thunk": "0x410010",
   "owner": "_G",
   "lua_uses": 0,
   "observed_argc": {}
  },
  {
   "name": "setObjectParameter",
   "helper": "member",
   "registered_in": "0x43d9e0",
   "call_site": "0x440c49",
   "impl": "0x428840",
   "thunk": "0x424330",
   "owner": "_G",
   "lua_uses": 132,
   "observed_argc": {
    "3": 127,
    "13": 1
   }
  },
  {
   "name": "setCollisionEnabled",
   "helper": "member",
   "registered_in": "0x43d9e0",
   "call_site": "0x440c86",
   "impl": "0x428ff0",
   "thunk": "0x4247e0",
   "owner": "_G",
   "lua_uses": 16,
   "observed_argc": {
    "2": 16
   }
  },
  {
   "name": "native_setBlockCollisionEnabled",
   "helper": "member",
   "registered_in": "0x43d9e0",
   "call_site": "0x440cc3",
   "impl": "0x4290d0",
   "thunk": "0x4247e0",
   "owner": "_G",
   "lua_uses": 1,
   "observed_argc": {
    "2": 1
   }
  },
  {
   "name": "setFlashAnimation",
   "helper": "member",
   "registered_in": "0x43d9e0",
   "call_site": "0x440d00",
   "impl": "0x429140",
   "thunk": "0x424290",
   "owner": "_G",
   "lua_uses": 0,
   "observed_argc": {}
  },
  {
   "name": "clipText",
   "helper": "member",
   "registered_in": "0x43d9e0",
   "call_site": "0x440d3d",
   "impl": "0x4210c0",
   "thunk": "0x4246f0",
   "owner": "_G",
   "lua_uses": 3,
   "observed_argc": {
    "3": 3
   }
  },
  {
   "name": "startNewTrajectory",
   "helper": "member",
   "registered_in": "0x43d9e0",
   "call_site": "0x440d7a",
   "impl": "0x426710",
   "thunk": "0x410010",
   "owner": "_G",
   "lua_uses": 1,
   "observed_argc": {
    "0": 1
   }
  },
  {
   "name": "addToTrajectory",
   "helper": "member",
   "registered_in": "0x43d9e0",
   "call_site": "0x440db7",
   "impl": "0x423760",
   "thunk": "0x4154d0",
   "owner": "_G",
   "lua_uses": 2,
   "observed_argc": {
    "3": 2
   }
  },
  {
   "name": "addPuffToTrajectory",
   "helper": "member",
   "registered_in": "0x43d9e0",
   "call_site": "0x440df4",
   "impl": "0x40f000",
   "thunk": "0x4154d0",
   "owner": "_G",
   "lua_uses": 7,
   "observed_argc": {
    "3": 3
   }
  },
  {
   "name": "setLevelLimits",
   "helper": "member",
   "registered_in": "0x43d9e0",
   "call_site": "0x440e31",
   "impl": "0x40d5b0",
   "thunk": "0x415720",
   "owner": "_G",
   "lua_uses": 1,
   "observed_argc": {
    "4": 1
   }
  },
  {
   "name": "goToTaskSwitcherLua",
   "helper": "member",
   "registered_in": "0x43d9e0",
   "call_site": "0x440e6e",
   "impl": "0x40d450",
   "thunk": "0x410010",
   "owner": "_G",
   "lua_uses": 0,
   "observed_argc": {}
  },
  {
   "name": "setGameOn",
   "helper": "member",
   "registered_in": "0x43d9e0",
   "call_site": "0x440eab",
   "impl": "0x40c700",
   "thunk": "0x414e00",
   "owner": "_G",
   "lua_uses": 7,
   "observed_argc": {
    "1": 6,
    "10": 1
   }
  },
  {
   "name": "checkForLuaFile",
   "helper": "member",
   "registered_in": "0x43d9e0",
   "call_site": "0x440ee8",
   "impl": "0x410db0",
   "thunk": "0x4242e0",
   "owner": "_G",
   "lua_uses": 0,
   "observed_argc": {}
  },
  {
   "name": "setStartingCameraValue",
   "helper": "member",
   "registered_in": "0x43d9e0",
   "call_site": "0x440f25",
   "impl": "0x40d8e0",
   "thunk": "0x414e00",
   "owner": "_G",
   "lua_uses": 0,
   "observed_argc": {}
  },
  {
   "name": "setCameraLimits",
   "helper": "member",
   "registered_in": "0x43d9e0",
   "call_site": "0x440f62",
   "impl": "0x40d8d0",
   "thunk": "0x4156c0",
   "owner": "_G",
   "lua_uses": 1,
   "observed_argc": {
    "1": 1
   }
  },
  {
   "name": "initGameCenter",
   "helper": "member",
   "registered_in": "0x43d9e0",
   "call_site": "0x440f9f",
   "impl": "0x40d450",
   "thunk": "0x410010",
   "owner": "_G",
   "lua_uses": 4,
   "observed_argc": {
    "0": 2,
    "1": 1
   }
  },
  {
   "name": "getLeaderboardScoresAroundPlayer",
   "helper": "member",
   "registered_in": "0x43d9e0",
   "call_site": "0x440fdc",
   "impl": "0x4129f0",
   "thunk": "0x424330",
   "owner": "_G",
   "lua_uses": 1,
   "observed_argc": {
    "3": 1
   }
  },
  {
   "name": "getLeaderboardScoresForRange",
   "helper": "member",
   "registered_in": "0x43d9e0",
   "call_site": "0x441019",
   "impl": "0x4129f0",
   "thunk": "0x424330",
   "owner": "_G",
   "lua_uses": 2,
   "observed_argc": {
    "3": 2
   }
  },
  {
   "name": "getLeaderboardScoresForFriends",
   "helper": "member",
   "registered_in": "0x43d9e0",
   "call_site": "0x441056",
   "impl": "0x4edf60",
   "thunk": "0x4241f0",
   "owner": "_G",
   "lua_uses": 1,
   "observed_argc": {
    "3": 1
   }
  },
  {
   "name": "showLeaderboards",
   "helper": "member",
   "registered_in": "0x43d9e0",
   "call_site": "0x441093",
   "impl": "0x40d450",
   "thunk": "0x410010",
   "owner": "_G",
   "lua_uses": 1,
   "observed_argc": {
    "0": 1
   }
  },
  {
   "name": "showAchievements",
   "helper": "member",
   "registered_in": "0x43d9e0",
   "call_site": "0x4410d0",
   "impl": "0x40d450",
   "thunk": "0x410010",
   "owner": "_G",
   "lua_uses": 1,
   "observed_argc": {
    "0": 1
   }
  },
  {
   "name": "postHighscore",
   "helper": "member",
   "registered_in": "0x43d9e0",
   "call_site": "0x44110d",
   "impl": "0x412a10",
   "thunk": "0x424650",
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
   "registered_in": "0x43d9e0",
   "call_site": "0x44114a",
   "impl": "0x412a30",
   "thunk": "0x4243d0",
   "owner": "_G",
   "lua_uses": 2,
   "observed_argc": {
    "2": 2
   }
  },
  {
   "name": "setStat",
   "helper": "member",
   "registered_in": "0x43d9e0",
   "call_site": "0x441187",
   "impl": "0x412a10",
   "thunk": "0x424380",
   "owner": "_G",
   "lua_uses": 19,
   "observed_argc": {
    "2": 19
   }
  },
  {
   "name": "setStatFloat",
   "helper": "member",
   "registered_in": "0x43d9e0",
   "call_site": "0x4411c4",
   "impl": "0x412a10",
   "thunk": "0x424650",
   "owner": "_G",
   "lua_uses": 0,
   "observed_argc": {}
  },
  {
   "name": "activateGameOverlayToStore",
   "helper": "member",
   "registered_in": "0x43d9e0",
   "call_site": "0x441201",
   "impl": "0x40d450",
   "thunk": "0x410010",
   "owner": "_G",
   "lua_uses": 1,
   "observed_argc": {
    "0": 1
   }
  },
  {
   "name": "isGameOverlayActive",
   "helper": "member",
   "registered_in": "0x43d9e0",
   "call_site": "0x44123e",
   "impl": "0x40d450",
   "thunk": "0x410010",
   "owner": "_G",
   "lua_uses": 0,
   "observed_argc": {}
  },
  {
   "name": "checkInstalledAppsOnline",
   "helper": "member",
   "registered_in": "0x43d9e0",
   "call_site": "0x44127b",
   "impl": "0x423db0",
   "thunk": "0x4241f0",
   "owner": "_G",
   "lua_uses": 1,
   "observed_argc": {
    "1": 1
   }
  },
  {
   "name": "checkInstalledAppsOffline",
   "helper": "member",
   "registered_in": "0x43d9e0",
   "call_site": "0x4412b8",
   "impl": "0x423f20",
   "thunk": "0x4241f0",
   "owner": "_G",
   "lua_uses": 1,
   "observed_argc": {
    "7": 1
   }
  },
  {
   "name": "refreshCurrentLocale",
   "helper": "member",
   "registered_in": "0x43d9e0",
   "call_site": "0x4412f5",
   "impl": "0x42e8c0",
   "thunk": "0x410010",
   "owner": "_G",
   "lua_uses": 0,
   "observed_argc": {}
  },
  {
   "name": "logFlurryEvent",
   "helper": "member",
   "registered_in": "0x43d9e0",
   "call_site": "0x441332",
   "impl": "0x42d9a0",
   "thunk": "0x4241f0",
   "owner": "_G",
   "lua_uses": 1,
   "observed_argc": {
    "1": 1
   }
  },
  {
   "name": "logFlurryEventWithParam",
   "helper": "member",
   "registered_in": "0x43d9e0",
   "call_site": "0x44136f",
   "impl": "0x42dac0",
   "thunk": "0x424290",
   "owner": "_G",
   "lua_uses": 1,
   "observed_argc": {
    "3": 1
   }
  },
  {
   "name": "logFlurryEventWithParams",
   "helper": "member",
   "registered_in": "0x43d9e0",
   "call_site": "0x4413ac",
   "impl": "0x42dc90",
   "thunk": "0x4243d0",
   "owner": "_G",
   "lua_uses": 1,
   "observed_argc": {
    "2": 1
   }
  },
  {
   "name": "isTwitterSupported",
   "helper": "member",
   "registered_in": "0x43d9e0",
   "call_site": "0x4413e9",
   "impl": "0x548180",
   "thunk": "0x410050",
   "owner": "_G",
   "lua_uses": 2,
   "observed_argc": {
    "0": 2
   }
  },
  {
   "name": "sendTweet",
   "helper": "member",
   "registered_in": "0x43d9e0",
   "call_site": "0x441426",
   "impl": "0x4147b0",
   "thunk": "0x424970",
   "owner": "_G",
   "lua_uses": 2,
   "observed_argc": {
    "4": 2
   }
  },
  {
   "name": "native_startQrScanner",
   "helper": "member",
   "registered_in": "0x43d9e0",
   "call_site": "0x441463",
   "impl": "0x40d450",
   "thunk": "0x410010",
   "owner": "_G",
   "lua_uses": 0,
   "observed_argc": {}
  },
  {
   "name": "native_stopQrScanner",
   "helper": "member",
   "registered_in": "0x43d9e0",
   "call_site": "0x4414a0",
   "impl": "0x40d450",
   "thunk": "0x410010",
   "owner": "_G",
   "lua_uses": 0,
   "observed_argc": {}
  },
  {
   "name": "native_isCameraSupported",
   "helper": "member",
   "registered_in": "0x43d9e0",
   "call_site": "0x4414dd",
   "impl": "0x548180",
   "thunk": "0x410050",
   "owner": "_G",
   "lua_uses": 0,
   "observed_argc": {}
  },
  {
   "name": "native_hasFrontCamera",
   "helper": "member",
   "registered_in": "0x43d9e0",
   "call_site": "0x44151a",
   "impl": "0x548180",
   "thunk": "0x410050",
   "owner": "_G",
   "lua_uses": 0,
   "observed_argc": {}
  },
  {
   "name": "native_setQrRecognizedCallback",
   "helper": "gamelua_extra",
   "registered_in": "0x43d9e0",
   "call_site": "0x441530",
   "impl": "0x40f620",
   "thunk": null,
   "owner": "_G",
   "lua_uses": 0,
   "observed_argc": {}
  },
  {
   "name": "native_getDeviceOrientation",
   "helper": "member",
   "registered_in": "0x43d9e0",
   "call_site": "0x44156d",
   "impl": "0x40cc70",
   "thunk": "0x414e60",
   "owner": "_G",
   "lua_uses": 0,
   "observed_argc": {}
  },
  {
   "name": "loadTextFileToString",
   "helper": "member",
   "registered_in": "0x43d9e0",
   "call_site": "0x4415aa",
   "impl": "0x419560",
   "thunk": "0x4249c0",
   "owner": "_G",
   "lua_uses": 0,
   "observed_argc": {}
  },
  {
   "name": "native_loadTextFileToLuaTable",
   "helper": "gamelua_extra",
   "registered_in": "0x43d9e0",
   "call_site": "0x4415c0",
   "impl": "0x419760",
   "thunk": null,
   "owner": "_G",
   "lua_uses": 0,
   "observed_argc": {}
  },
  {
   "name": "playVideo",
   "helper": "member",
   "registered_in": "0x43d9e0",
   "call_site": "0x4415fd",
   "impl": "0x410b30",
   "thunk": "0x4241f0",
   "owner": "_G",
   "lua_uses": 0,
   "observed_argc": {}
  },
  {
   "name": "drawBoxNative",
   "helper": "gamelua_extra",
   "registered_in": "0x43d9e0",
   "call_site": "0x441613",
   "impl": "0x417ac0",
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
   "registered_in": "0x43d9e0",
   "call_site": "0x441650",
   "impl": "0x426ef0",
   "thunk": "0x424790",
   "owner": "_G",
   "lua_uses": 19,
   "observed_argc": {
    "1": 19
   }
  },
  {
   "name": "getIntersectingObjects",
   "helper": "gamelua_extra",
   "registered_in": "0x43d9e0",
   "call_site": "0x441666",
   "impl": "0x419140",
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
   "registered_in": "0x43d9e0",
   "call_site": "0x44167c",
   "impl": "0x422c00",
   "thunk": null,
   "owner": "_G",
   "lua_uses": 3,
   "observed_argc": {
    "1": 3
   }
  },
  {
   "name": "checkJointLimits",
   "helper": "member",
   "registered_in": "0x43d9e0",
   "call_site": "0x4416b9",
   "impl": "0x415f10",
   "thunk": "0x4241f0",
   "owner": "_G",
   "lua_uses": 1,
   "observed_argc": {
    "1": 1
   }
  },
  {
   "name": "handleJointLimits",
   "helper": "member",
   "registered_in": "0x43d9e0",
   "call_site": "0x4416f6",
   "impl": "0x410810",
   "thunk": "0x4247e0",
   "owner": "_G",
   "lua_uses": 0,
   "observed_argc": {}
  },
  {
   "name": "getWorldPoint",
   "helper": "gamelua_extra",
   "registered_in": "0x43d9e0",
   "call_site": "0x44170c",
   "impl": "0x41eb90",
   "thunk": null,
   "owner": "_G",
   "lua_uses": 0,
   "observed_argc": {}
  },
  {
   "name": "getLocalPoint",
   "helper": "gamelua_extra",
   "registered_in": "0x43d9e0",
   "call_site": "0x441722",
   "impl": "0x41ea60",
   "thunk": null,
   "owner": "_G",
   "lua_uses": 0,
   "observed_argc": {}
  },
  {
   "name": "printGlobals",
   "helper": "member",
   "registered_in": "0x43d9e0",
   "call_site": "0x44175f",
   "impl": "0x40cb30",
   "thunk": "0x410010",
   "owner": "_G",
   "lua_uses": 0,
   "observed_argc": {}
  },
  {
   "name": "setGameParameters",
   "helper": "gamelua_extra",
   "registered_in": "0x43d9e0",
   "call_site": "0x441775",
   "impl": "0x40c640",
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
   "registered_in": "0x43d9e0",
   "call_site": "0x44178b",
   "impl": "0x434750",
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
   "registered_in": "0x43d9e0",
   "call_site": "0x4417c8",
   "impl": "0x4105f0",
   "thunk": "0x4241f0",
   "owner": "_G",
   "lua_uses": 2,
   "observed_argc": {}
  },
  {
   "name": "performBitwiseAnd",
   "helper": "member",
   "registered_in": "0x43d9e0",
   "call_site": "0x441805",
   "impl": "0x40dc80",
   "thunk": "0x415a40",
   "owner": "_G",
   "lua_uses": 0,
   "observed_argc": {}
  },
  {
   "name": "performBitwiseOr",
   "helper": "member",
   "registered_in": "0x43d9e0",
   "call_site": "0x441842",
   "impl": "0x40dcb0",
   "thunk": "0x415a40",
   "owner": "_G",
   "lua_uses": 1,
   "observed_argc": {
    "2": 1
   }
  },
  {
   "name": "getCurrentTime",
   "helper": "member",
   "registered_in": "0x43d9e0",
   "call_site": "0x44187f",
   "impl": "0x40c830",
   "thunk": "0x414f20",
   "owner": "_G",
   "lua_uses": 14,
   "observed_argc": {
    "0": 14
   }
  },
  {
   "name": "getTimeDifference",
   "helper": "gamelua_extra",
   "registered_in": "0x43d9e0",
   "call_site": "0x441895",
   "impl": "0x40e0c0",
   "thunk": null,
   "owner": "_G",
   "lua_uses": 5,
   "observed_argc": {
    "2": 4,
    "3": 1
   }
  },
  {
   "name": "getTimeDifferenceInSeconds",
   "helper": "gamelua_extra",
   "registered_in": "0x43d9e0",
   "call_site": "0x4418ab",
   "impl": "0x40c930",
   "thunk": null,
   "owner": "_G",
   "lua_uses": 2,
   "observed_argc": {
    "6": 1,
    "8": 1
   }
  },
  {
   "name": "importJSONToLuaTable",
   "helper": "member",
   "registered_in": "0x43d9e0",
   "call_site": "0x4418e8",
   "impl": "0x4106c0",
   "thunk": "0x4243d0",
   "owner": "_G",
   "lua_uses": 1,
   "observed_argc": {
    "2": 1
   }
  },
  {
   "name": "exportLuaTableAsJSON",
   "helper": "member",
   "registered_in": "0x43d9e0",
   "call_site": "0x441925",
   "impl": "0x422f20",
   "thunk": "0x424a10",
   "owner": "_G",
   "lua_uses": 1,
   "observed_argc": {
    "1": 1
   }
  },
  {
   "name": "GetJSONDiff",
   "helper": "member",
   "registered_in": "0x43d9e0",
   "call_site": "0x441962",
   "impl": "0x4230a0",
   "thunk": "0x424a60",
   "owner": "_G",
   "lua_uses": 0,
   "observed_argc": {}
  },
  {
   "name": "decodeBase64",
   "helper": "member",
   "registered_in": "0x43d9e0",
   "call_site": "0x44199f",
   "impl": "0x4107a0",
   "thunk": "0x424a10",
   "owner": "_G",
   "lua_uses": 0,
   "observed_argc": {}
  },
  {
   "name": "loadLuaFileToObject",
   "helper": "gamelua_extra",
   "registered_in": "0x43d9e0",
   "call_site": "0x4419b5",
   "impl": "0x426540",
   "thunk": null,
   "owner": "_G",
   "lua_uses": 109,
   "observed_argc": {
    "3": 109
   }
  },
  {
   "name": "loadLuaFileFromAppDataToObject",
   "helper": "gamelua_extra",
   "registered_in": "0x43d9e0",
   "call_site": "0x4419cb",
   "impl": "0x41ecb0",
   "thunk": null,
   "owner": "_G",
   "lua_uses": 0,
   "observed_argc": {}
  },
  {
   "name": "loadLuaFile",
   "helper": "member",
   "registered_in": "0x43d9e0",
   "call_site": "0x441a08",
   "impl": "0x425170",
   "thunk": "0x424ab0",
   "owner": "_G",
   "lua_uses": 59,
   "observed_argc": {
    "4": 59
   }
  },
  {
   "name": "setNormalTrailSprite",
   "helper": "member",
   "registered_in": "0x43d9e0",
   "call_site": "0x441a45",
   "impl": "0x419ff0",
   "thunk": "0x4241f0",
   "owner": "_G",
   "lua_uses": 1,
   "observed_argc": {
    "1": 1
   }
  },
  {
   "name": "setSpecialTrailSprite",
   "helper": "member",
   "registered_in": "0x43d9e0",
   "call_site": "0x441a82",
   "impl": "0x41a060",
   "thunk": "0x4241f0",
   "owner": "_G",
   "lua_uses": 1,
   "observed_argc": {
    "1": 1
   }
  },
  {
   "name": "setAimingAidSprite",
   "helper": "member",
   "registered_in": "0x43d9e0",
   "call_site": "0x441abf",
   "impl": "0x417800",
   "thunk": "0x4241f0",
   "owner": "_G",
   "lua_uses": 1,
   "observed_argc": {
    "1": 1
   }
  },
  {
   "name": "setChannelCountLimit",
   "helper": "member",
   "registered_in": "0x43d9e0",
   "call_site": "0x441afc",
   "impl": "0x40c590",
   "thunk": "0x415910",
   "owner": "_G",
   "lua_uses": 7,
   "observed_argc": {
    "2": 7
   }
  },
  {
   "name": "native_resizeRadius",
   "helper": "member",
   "registered_in": "0x43d9e0",
   "call_site": "0x441b39",
   "impl": "0x427be0",
   "thunk": "0x424740",
   "owner": "_G",
   "lua_uses": 0,
   "observed_argc": {}
  },
  {
   "name": "native_setIsWater",
   "helper": "member",
   "registered_in": "0x43d9e0",
   "call_site": "0x441b76",
   "impl": "0x427e90",
   "thunk": "0x4247e0",
   "owner": "_G",
   "lua_uses": 1,
   "observed_argc": {
    "2": 1
   }
  },
  {
   "name": "native_setWaterDensity",
   "helper": "member",
   "registered_in": "0x43d9e0",
   "call_site": "0x441bb3",
   "impl": "0x427f00",
   "thunk": "0x424650",
   "owner": "_G",
   "lua_uses": 4,
   "observed_argc": {
    "2": 2,
    "5": 1,
    "13": 1
   }
  },
  {
   "name": "native_setControlled",
   "helper": "member",
   "registered_in": "0x43d9e0",
   "call_site": "0x441bf0",
   "impl": "0x427f70",
   "thunk": "0x4247e0",
   "owner": "_G",
   "lua_uses": 0,
   "observed_argc": {}
  },
  {
   "name": "native_setAffectedByForceMultipliers",
   "helper": "member",
   "registered_in": "0x43d9e0",
   "call_site": "0x441c2d",
   "impl": "0x427fe0",
   "thunk": "0x4247e0",
   "owner": "_G",
   "lua_uses": 2,
   "observed_argc": {
    "2": 2
   }
  },
  {
   "name": "native_setKeepOrientation",
   "helper": "member",
   "registered_in": "0x43d9e0",
   "call_site": "0x441c6a",
   "impl": "0x428050",
   "thunk": "0x4247e0",
   "owner": "_G",
   "lua_uses": 0,
   "observed_argc": {}
  },
  {
   "name": "native_setTimeSinceCollision",
   "helper": "member",
   "registered_in": "0x43d9e0",
   "call_site": "0x441ca7",
   "impl": "0x4280c0",
   "thunk": "0x424650",
   "owner": "_G",
   "lua_uses": 1,
   "observed_argc": {
    "2": 1
   }
  },
  {
   "name": "native_setIgnoresScore",
   "helper": "member",
   "registered_in": "0x43d9e0",
   "call_site": "0x441ce4",
   "impl": "0x428290",
   "thunk": "0x4247e0",
   "owner": "_G",
   "lua_uses": 1,
   "observed_argc": {
    "2": 1
   }
  },
  {
   "name": "setRecordVelocity",
   "helper": "member",
   "registered_in": "0x43d9e0",
   "call_site": "0x441d21",
   "impl": "0x428130",
   "thunk": "0x4247e0",
   "owner": "_G",
   "lua_uses": 0,
   "observed_argc": {}
  },
  {
   "name": "setRevertGravity",
   "helper": "member",
   "registered_in": "0x43d9e0",
   "call_site": "0x441d5e",
   "impl": "0x4281a0",
   "thunk": "0x4247e0",
   "owner": "_G",
   "lua_uses": 0,
   "observed_argc": {}
  },
  {
   "name": "setRevertGravityWithMultiplier",
   "helper": "member",
   "registered_in": "0x43d9e0",
   "call_site": "0x441d9b",
   "impl": "0x428210",
   "thunk": "0x424b00",
   "owner": "_G",
   "lua_uses": 2,
   "observed_argc": {
    "4": 2
   }
  },
  {
   "name": "getUnlockRequestChecksum",
   "helper": "gamelua_extra",
   "registered_in": "0x43d9e0",
   "call_site": "0x441db1",
   "impl": "0x421c50",
   "thunk": null,
   "owner": "_G",
   "lua_uses": 1,
   "observed_argc": {
    "3": 1
   }
  },
  {
   "name": "native_getLevelLimits",
   "helper": "gamelua_extra",
   "registered_in": "0x43d9e0",
   "call_site": "0x441dc7",
   "impl": "0x40d820",
   "thunk": null,
   "owner": "_G",
   "lua_uses": 0,
   "observed_argc": {}
  },
  {
   "name": "setGameRenderingDisabled",
   "helper": "gamelua_extra",
   "registered_in": "0x43d9e0",
   "call_site": "0x441ddd",
   "impl": "0x40d880",
   "thunk": null,
   "owner": "_G",
   "lua_uses": 0,
   "observed_argc": {}
  },
  {
   "name": "isGameRenderingDisabled",
   "helper": "gamelua_extra",
   "registered_in": "0x43d9e0",
   "call_site": "0x441df3",
   "impl": "0x40d8a0",
   "thunk": null,
   "owner": "_G",
   "lua_uses": 0,
   "observed_argc": {}
  },
  {
   "name": "recoverRenderObjects",
   "helper": "member",
   "registered_in": "0x43d9e0",
   "call_site": "0x441e30",
   "impl": "0x43a7c0",
   "thunk": "0x410010",
   "owner": "_G",
   "lua_uses": 0,
   "observed_argc": {}
  },
  {
   "name": "cutsceneLoad",
   "helper": "member",
   "registered_in": "0x43d9e0",
   "call_site": "0x441e6d",
   "impl": "0x411360",
   "thunk": "0x4243d0",
   "owner": "_G",
   "lua_uses": 3,
   "observed_argc": {
    "2": 3
   }
  },
  {
   "name": "cutsceneClose",
   "helper": "member",
   "registered_in": "0x43d9e0",
   "call_site": "0x441eaa",
   "impl": "0x4113f0",
   "thunk": "0x4241f0",
   "owner": "_G",
   "lua_uses": 4,
   "observed_argc": {
    "1": 4
   }
  },
  {
   "name": "cutsceneCloseAll",
   "helper": "member",
   "registered_in": "0x43d9e0",
   "call_site": "0x441ee7",
   "impl": "0x40d340",
   "thunk": "0x410010",
   "owner": "_G",
   "lua_uses": 0,
   "observed_argc": {}
  },
  {
   "name": "cutsceneStart",
   "helper": "member",
   "registered_in": "0x43d9e0",
   "call_site": "0x441f24",
   "impl": "0x411450",
   "thunk": "0x424290",
   "owner": "_G",
   "lua_uses": 3,
   "observed_argc": {
    "3": 3
   }
  },
  {
   "name": "cutsceneStop",
   "helper": "member",
   "registered_in": "0x43d9e0",
   "call_site": "0x441f61",
   "impl": "0x411500",
   "thunk": "0x4243d0",
   "owner": "_G",
   "lua_uses": 0,
   "observed_argc": {}
  },
  {
   "name": "cutsceneStopAll",
   "helper": "member",
   "registered_in": "0x43d9e0",
   "call_site": "0x441f9e",
   "impl": "0x40d350",
   "thunk": "0x410010",
   "owner": "_G",
   "lua_uses": 0,
   "observed_argc": {}
  },
  {
   "name": "cutsceneSeek",
   "helper": "member",
   "registered_in": "0x43d9e0",
   "call_site": "0x441fdb",
   "impl": "0x411580",
   "thunk": "0x424650",
   "owner": "_G",
   "lua_uses": 0,
   "observed_argc": {}
  },
  {
   "name": "cutsceneSetTranslation",
   "helper": "member",
   "registered_in": "0x43d9e0",
   "call_site": "0x442018",
   "impl": "0x4115f0",
   "thunk": "0x424330",
   "owner": "_G",
   "lua_uses": 4,
   "observed_argc": {
    "3": 4
   }
  },
  {
   "name": "cutsceneSetRotation",
   "helper": "member",
   "registered_in": "0x43d9e0",
   "call_site": "0x442055",
   "impl": "0x411660",
   "thunk": "0x424650",
   "owner": "_G",
   "lua_uses": 1,
   "observed_argc": {
    "2": 1
   }
  },
  {
   "name": "cutsceneSetScale",
   "helper": "member",
   "registered_in": "0x43d9e0",
   "call_site": "0x442092",
   "impl": "0x4116d0",
   "thunk": "0x424330",
   "owner": "_G",
   "lua_uses": 2,
   "observed_argc": {
    "3": 2
   }
  },
  {
   "name": "updateCutscene",
   "helper": "member",
   "registered_in": "0x43d9e0",
   "call_site": "0x4420cf",
   "impl": "0x40d360",
   "thunk": "0x4156c0",
   "owner": "_G",
   "lua_uses": 1,
   "observed_argc": {
    "1": 1
   }
  },
  {
   "name": "drawCutscene",
   "helper": "member",
   "registered_in": "0x43d9e0",
   "call_site": "0x44210c",
   "impl": "0x411740",
   "thunk": "0x4241f0",
   "owner": "_G",
   "lua_uses": 3,
   "observed_argc": {
    "1": 3
   }
  },
  {
   "name": "fileExistsInAppData",
   "helper": "member",
   "registered_in": "0x43d9e0",
   "call_site": "0x442149",
   "impl": "0x421ee0",
   "thunk": "0x4242e0",
   "owner": "_G",
   "lua_uses": 0,
   "observed_argc": {}
  },
  {
   "name": "native_createSpriteSheet",
   "helper": "member",
   "registered_in": "0x447740",
   "call_site": "0x447774",
   "impl": "0x4475a0",
   "thunk": "0x447120",
   "owner": "ResourceManager",
   "lua_uses": 1,
   "observed_argc": {
    "1": 1
   }
  },
  {
   "name": "native_releaseSpriteSheet",
   "helper": "member",
   "registered_in": "0x447740",
   "call_site": "0x447794",
   "impl": "0x4476a0",
   "thunk": "0x447120",
   "owner": "ResourceManager",
   "lua_uses": 1,
   "observed_argc": {
    "1": 1
   }
  },
  {
   "name": "native_createAudio",
   "helper": "res",
   "registered_in": "0x447740",
   "call_site": "0x4477a6",
   "impl": null,
   "thunk": "0x447240",
   "owner": "ResourceManager",
   "lua_uses": 2,
   "observed_argc": {
    "3": 2
   }
  },
  {
   "name": "native_releaseAudio",
   "helper": "res",
   "registered_in": "0x447740",
   "call_site": "0x4477b8",
   "impl": null,
   "thunk": "0x446fa0",
   "owner": "ResourceManager",
   "lua_uses": 1,
   "observed_argc": {
    "1": 1
   }
  },
  {
   "name": "native_playAudio",
   "helper": "res",
   "registered_in": "0x447740",
   "call_site": "0x4477ca",
   "impl": null,
   "thunk": "0x447170",
   "owner": "ResourceManager",
   "lua_uses": 1,
   "observed_argc": {}
  },
  {
   "name": "setPath",
   "helper": "member",
   "registered_in": "0x472ff0",
   "call_site": "0x473061",
   "impl": "0x46ff40",
   "thunk": "0x447120",
   "owner": "res",
   "lua_uses": 0,
   "observed_argc": {}
  },
  {
   "name": "createSpriteSheet",
   "helper": "res",
   "registered_in": "0x472ff0",
   "call_site": "0x473073",
   "impl": null,
   "thunk": "0x470820",
   "owner": "res",
   "lua_uses": 0,
   "observed_argc": {}
  },
  {
   "name": "createCompoSpriteSet",
   "helper": "res",
   "registered_in": "0x472ff0",
   "call_site": "0x473085",
   "impl": null,
   "thunk": "0x470910",
   "owner": "res",
   "lua_uses": 1,
   "observed_argc": {
    "1": 1
   }
  },
  {
   "name": "createBitmapFont",
   "helper": "res",
   "registered_in": "0x472ff0",
   "call_site": "0x473097",
   "impl": null,
   "thunk": "0x4709e0",
   "owner": "res",
   "lua_uses": 9,
   "observed_argc": {
    "1": 9
   }
  },
  {
   "name": "createSystemFont",
   "helper": "res",
   "registered_in": "0x472ff0",
   "call_site": "0x4730a9",
   "impl": null,
   "thunk": "0x470ab0",
   "owner": "res",
   "lua_uses": 1,
   "observed_argc": {
    "8": 1
   }
  },
  {
   "name": "createTextGroupSet",
   "helper": "res",
   "registered_in": "0x472ff0",
   "call_site": "0x4730bb",
   "impl": null,
   "thunk": "0x470c70",
   "owner": "res",
   "lua_uses": 1,
   "observed_argc": {
    "1": 1
   }
  },
  {
   "name": "createAudioOutput",
   "helper": "member",
   "registered_in": "0x472ff0",
   "call_site": "0x4730db",
   "impl": "0x46fa20",
   "thunk": "0x470350",
   "owner": "res",
   "lua_uses": 8,
   "observed_argc": {
    "3": 8
   }
  },
  {
   "name": "createAudioInput",
   "helper": "member",
   "registered_in": "0x472ff0",
   "call_site": "0x4730fb",
   "impl": "0x46fa60",
   "thunk": "0x470350",
   "owner": "res",
   "lua_uses": 0,
   "observed_argc": {}
  },
  {
   "name": "createAudio",
   "helper": "res",
   "registered_in": "0x472ff0",
   "call_site": "0x47310d",
   "impl": null,
   "thunk": "0x470d40",
   "owner": "res",
   "lua_uses": 476,
   "observed_argc": {
    "2": 1,
    "4": 322,
    "5": 150,
    "6": 2
   }
  },
  {
   "name": "createCompositeAudio",
   "helper": "member",
   "registered_in": "0x472ff0",
   "call_site": "0x47312d",
   "impl": "0x472bf0",
   "thunk": "0x472e60",
   "owner": "res",
   "lua_uses": 7,
   "observed_argc": {
    "2": 6
   }
  },
  {
   "name": "captureSprite",
   "helper": "member",
   "registered_in": "0x472ff0",
   "call_site": "0x47314d",
   "impl": "0x46ffa0",
   "thunk": "0x447120",
   "owner": "res",
   "lua_uses": 1,
   "observed_argc": {
    "1": 1
   }
  },
  {
   "name": "releaseSpriteSheet",
   "helper": "res",
   "registered_in": "0x472ff0",
   "call_site": "0x47315f",
   "impl": null,
   "thunk": "0x470f20",
   "owner": "res",
   "lua_uses": 1,
   "observed_argc": {
    "1": 1
   }
  },
  {
   "name": "releaseCompoSpriteSet",
   "helper": "member",
   "registered_in": "0x472ff0",
   "call_site": "0x47317f",
   "impl": "0x470000",
   "thunk": "0x447120",
   "owner": "res",
   "lua_uses": 1,
   "observed_argc": {
    "1": 1
   }
  },
  {
   "name": "releaseFont",
   "helper": "member",
   "registered_in": "0x472ff0",
   "call_site": "0x47319f",
   "impl": "0x470060",
   "thunk": "0x447120",
   "owner": "res",
   "lua_uses": 0,
   "observed_argc": {}
  },
  {
   "name": "releaseTextGroupSet",
   "helper": "member",
   "registered_in": "0x472ff0",
   "call_site": "0x4731bf",
   "impl": "0x4700c0",
   "thunk": "0x447120",
   "owner": "res",
   "lua_uses": 0,
   "observed_argc": {}
  },
  {
   "name": "releaseAudio",
   "helper": "res",
   "registered_in": "0x472ff0",
   "call_site": "0x4731d1",
   "impl": null,
   "thunk": "0x471030",
   "owner": "res",
   "lua_uses": 0,
   "observed_argc": {}
  },
  {
   "name": "loadLocale",
   "helper": "member",
   "registered_in": "0x472ff0",
   "call_site": "0x4731f1",
   "impl": "0x470120",
   "thunk": "0x472eb0",
   "owner": "res",
   "lua_uses": 1,
   "observed_argc": {
    "2": 1
   }
  },
  {
   "name": "useLocale",
   "helper": "member",
   "registered_in": "0x472ff0",
   "call_site": "0x473211",
   "impl": "0x4701a0",
   "thunk": "0x447120",
   "owner": "res",
   "lua_uses": 1,
   "observed_argc": {
    "1": 1
   }
  },
  {
   "name": "useFont",
   "helper": "member",
   "registered_in": "0x472ff0",
   "call_site": "0x473231",
   "impl": "0x470200",
   "thunk": "0x447120",
   "owner": "res",
   "lua_uses": 9,
   "observed_argc": {
    "1": 9
   }
  },
  {
   "name": "getAvailableSystemFonts",
   "helper": "member",
   "registered_in": "0x472ff0",
   "call_site": "0x473251",
   "impl": "0x46fd80",
   "thunk": "0x4703e0",
   "owner": "res",
   "lua_uses": 0,
   "observed_argc": {}
  },
  {
   "name": "drawSprite",
   "helper": "res",
   "registered_in": "0x472ff0",
   "call_site": "0x473263",
   "impl": null,
   "thunk": "0x4710e0",
   "owner": "res",
   "lua_uses": 99,
   "observed_argc": {
    "3": 83,
    "4": 4,
    "5": 1,
    "6": 7,
    "7": 3,
    "9": 1
   }
  },
  {
   "name": "drawCompoSprite",
   "helper": "res",
   "registered_in": "0x472ff0",
   "call_site": "0x473275",
   "impl": null,
   "thunk": "0x471390",
   "owner": "res",
   "lua_uses": 0,
   "observed_argc": {}
  },
  {
   "name": "drawString",
   "helper": "res",
   "registered_in": "0x472ff0",
   "call_site": "0x473287",
   "impl": null,
   "thunk": "0x4713a0",
   "owner": "res",
   "lua_uses": 41,
   "observed_argc": {
    "6": 41
   }
  },
  {
   "name": "setClipRect",
   "helper": "member",
   "registered_in": "0x472ff0",
   "call_site": "0x4732a7",
   "impl": "0x46faa0",
   "thunk": "0x470470",
   "owner": "res",
   "lua_uses": 14,
   "observed_argc": {
    "4": 9,
    "9": 4
   }
  },
  {
   "name": "getClipRect",
   "helper": "res",
   "registered_in": "0x472ff0",
   "call_site": "0x4732b9",
   "impl": null,
   "thunk": "0x46fb10",
   "owner": "res",
   "lua_uses": 1,
   "observed_argc": {
    "0": 1
   }
  },
  {
   "name": "getString",
   "helper": "member",
   "registered_in": "0x472ff0",
   "call_site": "0x4732d9",
   "impl": "0x470730",
   "thunk": "0x472f00",
   "owner": "res",
   "lua_uses": 51,
   "observed_argc": {
    "2": 51
   }
  },
  {
   "name": "playAudio",
   "helper": "res",
   "registered_in": "0x472ff0",
   "call_site": "0x4732eb",
   "impl": null,
   "thunk": "0x471520",
   "owner": "res",
   "lua_uses": 430,
   "observed_argc": {
    "1": 128,
    "2": 6,
    "3": 3
   }
  },
  {
   "name": "stopAudio",
   "helper": "res",
   "registered_in": "0x472ff0",
   "call_site": "0x4732fd",
   "impl": null,
   "thunk": "0x471630",
   "owner": "res",
   "lua_uses": 36,
   "observed_argc": {
    "0": 1,
    "1": 29
   }
  },
  {
   "name": "stopAllAudio",
   "helper": "member",
   "registered_in": "0x472ff0",
   "call_site": "0x47331d",
   "impl": "0x46fb90",
   "thunk": "0x46fe40",
   "owner": "res",
   "lua_uses": 4,
   "observed_argc": {
    "0": 4
   }
  },
  {
   "name": "isAudioPlaying",
   "helper": "res",
   "registered_in": "0x472ff0",
   "call_site": "0x47332f",
   "impl": null,
   "thunk": "0x471710",
   "owner": "res",
   "lua_uses": 23,
   "observed_argc": {
    "1": 21
   }
  },
  {
   "name": "getSpriteBounds",
   "helper": "res",
   "registered_in": "0x472ff0",
   "call_site": "0x473341",
   "impl": null,
   "thunk": "0x471810",
   "owner": "res",
   "lua_uses": 150,
   "observed_argc": {
    "1": 148
   }
  },
  {
   "name": "getSpritePivot",
   "helper": "res",
   "registered_in": "0x472ff0",
   "call_site": "0x473353",
   "impl": null,
   "thunk": "0x471900",
   "owner": "res",
   "lua_uses": 48,
   "observed_argc": {
    "1": 47
   }
  },
  {
   "name": "getCompoSpriteBounds",
   "helper": "res",
   "registered_in": "0x472ff0",
   "call_site": "0x473365",
   "impl": null,
   "thunk": "0x4719f0",
   "owner": "res",
   "lua_uses": 0,
   "observed_argc": {}
  },
  {
   "name": "getCompoSpriteData",
   "helper": "res",
   "registered_in": "0x472ff0",
   "call_site": "0x473377",
   "impl": null,
   "thunk": "0x471c10",
   "owner": "res",
   "lua_uses": 0,
   "observed_argc": {}
  },
  {
   "name": "getCompoSpriteEntry",
   "helper": "res",
   "registered_in": "0x472ff0",
   "call_site": "0x473389",
   "impl": null,
   "thunk": "0x471e40",
   "owner": "res",
   "lua_uses": 0,
   "observed_argc": {}
  },
  {
   "name": "setCompoSpriteEntry",
   "helper": "res",
   "registered_in": "0x472ff0",
   "call_site": "0x47339b",
   "impl": null,
   "thunk": "0x4721e0",
   "owner": "res",
   "lua_uses": 0,
   "observed_argc": {}
  },
  {
   "name": "getStringWidth",
   "helper": "member",
   "registered_in": "0x472ff0",
   "call_site": "0x4733bb",
   "impl": "0x470260",
   "thunk": "0x472f50",
   "owner": "res",
   "lua_uses": 35,
   "observed_argc": {
    "1": 32,
    "8": 3
   }
  },
  {
   "name": "getFontMaxAscending",
   "helper": "member",
   "registered_in": "0x472ff0",
   "call_site": "0x4733db",
   "impl": "0x46fba0",
   "thunk": "0x4704c0",
   "owner": "res",
   "lua_uses": 0,
   "observed_argc": {}
  },
  {
   "name": "getFontMaxDescending",
   "helper": "member",
   "registered_in": "0x472ff0",
   "call_site": "0x4733fb",
   "impl": "0x46fbc0",
   "thunk": "0x4704c0",
   "owner": "res",
   "lua_uses": 0,
   "observed_argc": {}
  },
  {
   "name": "getFontLeading",
   "helper": "member",
   "registered_in": "0x472ff0",
   "call_site": "0x47341b",
   "impl": "0x46fbe0",
   "thunk": "0x4704c0",
   "owner": "res",
   "lua_uses": 51,
   "observed_argc": {
    "0": 29,
    "1": 17,
    "16": 1
   }
  },
  {
   "name": "getFontTracking",
   "helper": "member",
   "registered_in": "0x472ff0",
   "call_site": "0x47343b",
   "impl": "0x46fc00",
   "thunk": "0x4704c0",
   "owner": "res",
   "lua_uses": 0,
   "observed_argc": {}
  },
  {
   "name": "getFontHeight",
   "helper": "member",
   "registered_in": "0x472ff0",
   "call_site": "0x47345b",
   "impl": "0x46fc20",
   "thunk": "0x4704c0",
   "owner": "res",
   "lua_uses": 4,
   "observed_argc": {
    "0": 4
   }
  },
  {
   "name": "getLocale",
   "helper": "member",
   "registered_in": "0x472ff0",
   "call_site": "0x47347b",
   "impl": "0x4706f0",
   "thunk": "0x470660",
   "owner": "res",
   "lua_uses": 0,
   "observed_argc": {}
  },
  {
   "name": "startAudioOutput",
   "helper": "member",
   "registered_in": "0x472ff0",
   "call_site": "0x47349b",
   "impl": "0x46fc40",
   "thunk": "0x46fef0",
   "owner": "res",
   "lua_uses": 3,
   "observed_argc": {
    "0": 3
   }
  },
  {
   "name": "stopAudioOutput",
   "helper": "member",
   "registered_in": "0x472ff0",
   "call_site": "0x4734bb",
   "impl": "0x46fc50",
   "thunk": "0x46fe40",
   "owner": "res",
   "lua_uses": 3,
   "observed_argc": {
    "0": 3
   }
  },
  {
   "name": "startAudioInput",
   "helper": "member",
   "registered_in": "0x472ff0",
   "call_site": "0x4734db",
   "impl": "0x46fc60",
   "thunk": "0x46fe40",
   "owner": "res",
   "lua_uses": 0,
   "observed_argc": {}
  },
  {
   "name": "stopAudioInput",
   "helper": "member",
   "registered_in": "0x472ff0",
   "call_site": "0x4734fb",
   "impl": "0x46fc70",
   "thunk": "0x46fe40",
   "owner": "res",
   "lua_uses": 0,
   "observed_argc": {}
  },
  {
   "name": "setMasterVolume",
   "helper": "member",
   "registered_in": "0x472ff0",
   "call_site": "0x47351b",
   "impl": "0x46fc90",
   "thunk": "0x470520",
   "owner": "res",
   "lua_uses": 0,
   "observed_argc": {}
  },
  {
   "name": "setTrackVolume",
   "helper": "member",
   "registered_in": "0x472ff0",
   "call_site": "0x47353b",
   "impl": "0x46fcb0",
   "thunk": "0x470580",
   "owner": "res",
   "lua_uses": 8,
   "observed_argc": {
    "2": 8
   }
  },
  {
   "name": "getTrackVolume",
   "helper": "member",
   "registered_in": "0x472ff0",
   "call_site": "0x47355b",
   "impl": "0x46fce0",
   "thunk": "0x4705f0",
   "owner": "res",
   "lua_uses": 0,
   "observed_argc": {}
  },
  {
   "name": "openURL",
   "helper": "member",
   "registered_in": "0x472ff0",
   "call_site": "0x47357b",
   "impl": "0x4702d0",
   "thunk": "0x472fa0",
   "owner": "res",
   "lua_uses": 23,
   "observed_argc": {
    "1": 16,
    "4": 1,
    "5": 5
   }
  },
  {
   "name": "native_addParticlesWithMode",
   "helper": "res",
   "registered_in": "0x444e10",
   "call_site": "0x442554",
   "impl": "0x460810",
   "thunk": null,
   "owner": "particles",
   "lua_uses": 1,
   "observed_argc": {
    "1": 1
   }
  }
 ],
 "registering_functions": {
  "0x43d9e0": 269,
  "0x472ff0": 51,
  "0x447740": 5,
  "0x410470": 2,
  "0x444e10": 1
 }
}`;export{n as default};
