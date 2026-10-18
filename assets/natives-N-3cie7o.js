var n=`{
 "registrations": [
  {
   "name": "loadCloudSettings",
   "helper": "member",
   "registered_in": "0x408610",
   "call_site": "0x4086e1",
   "impl": "0x407130",
   "thunk": "0x405e70",
   "owner": "RovioAccount",
   "lua_uses": 1,
   "observed_argc": {
    "0": 1
   }
  },
  {
   "name": "saveCloudSettings",
   "helper": "member",
   "registered_in": "0x408610",
   "call_site": "0x408706",
   "impl": "0x407340",
   "thunk": "0x42bb10",
   "owner": "RovioAccount",
   "lua_uses": 1,
   "observed_argc": {
    "1": 1
   }
  },
  {
   "name": "loginRovioId",
   "helper": "member",
   "registered_in": "0x408610",
   "call_site": "0x40872b",
   "impl": "0x4075d0",
   "thunk": "0x4080a0",
   "owner": "RovioAccount",
   "lua_uses": 2,
   "observed_argc": {
    "2": 2
   }
  },
  {
   "name": "logoutRovioId",
   "helper": "member",
   "registered_in": "0x408610",
   "call_site": "0x408750",
   "impl": "0x405a60",
   "thunk": "0x41e260",
   "owner": "RovioAccount",
   "lua_uses": 2,
   "observed_argc": {
    "0": 2
   }
  },
  {
   "name": "showProfileView",
   "helper": "member",
   "registered_in": "0x408610",
   "call_site": "0x408775",
   "impl": "0x405a70",
   "thunk": "0x41e260",
   "owner": "RovioAccount",
   "lua_uses": 1,
   "observed_argc": {
    "0": 1
   }
  },
  {
   "name": "cancelProfileLoading",
   "helper": "member",
   "registered_in": "0x408610",
   "call_site": "0x40879a",
   "impl": "0x405a80",
   "thunk": "0x41e260",
   "owner": "RovioAccount",
   "lua_uses": 1,
   "observed_argc": {
    "0": 1
   }
  },
  {
   "name": "cancelRovioIdLogin",
   "helper": "member",
   "registered_in": "0x408610",
   "call_site": "0x4087bf",
   "impl": "0x405a90",
   "thunk": "0x41e260",
   "owner": "RovioAccount",
   "lua_uses": 1,
   "observed_argc": {
    "0": 1
   }
  },
  {
   "name": "setAccountParameter",
   "helper": "member",
   "registered_in": "0x408610",
   "call_site": "0x4087e4",
   "impl": "0x406230",
   "thunk": "0x42bd40",
   "owner": "RovioAccount",
   "lua_uses": 5,
   "observed_argc": {
    "2": 1,
    "3": 4
   }
  },
  {
   "name": "showProfileViewTemp",
   "helper": "member",
   "registered_in": "0x408610",
   "call_site": "0x408809",
   "impl": "0x405aa0",
   "thunk": "0x41e260",
   "owner": "RovioAccount",
   "lua_uses": 1,
   "observed_argc": {
    "0": 1
   }
  },
  {
   "name": "isAccountViewActive",
   "helper": "member",
   "registered_in": "0x408610",
   "call_site": "0x40882e",
   "impl": "0x405ab0",
   "thunk": "0x405e70",
   "owner": "RovioAccount",
   "lua_uses": 3,
   "observed_argc": {
    "0": 3
   }
  },
  {
   "name": "shouldCloudOverwriteLocalSave",
   "helper": "member",
   "registered_in": "0x408610",
   "call_site": "0x408853",
   "impl": "0x405ac0",
   "thunk": "0x405e70",
   "owner": "RovioAccount",
   "lua_uses": 1,
   "observed_argc": {
    "0": 1
   }
  },
  {
   "name": "setCloudRequestTimeout",
   "helper": "member",
   "registered_in": "0x408610",
   "call_site": "0x408878",
   "impl": "0x405ad0",
   "thunk": "0x406660",
   "owner": "RovioAccount",
   "lua_uses": 2,
   "observed_argc": {
    "1": 2
   }
  },
  {
   "name": "logEvent",
   "helper": "gamelua_extra",
   "registered_in": "0x40f6b0",
   "call_site": "0x40f940",
   "impl": "0x40ef70",
   "thunk": null,
   "owner": "RovioAnalytics",
   "lua_uses": 115,
   "observed_argc": {
    "1": 8,
    "2": 59,
    "3": 45,
    "4": 1
   }
  },
  {
   "name": "load",
   "helper": "res",
   "registered_in": "0x416980",
   "call_site": "0x416ab9",
   "impl": null,
   "thunk": "0x416700",
   "owner": "dynamic",
   "lua_uses": 10,
   "observed_argc": {
    "1": 7,
    "2": 1
   }
  },
  {
   "name": "queueload",
   "helper": "res",
   "registered_in": "0x416980",
   "call_site": "0x416acb",
   "impl": null,
   "thunk": "0x4167b0",
   "owner": "dynamic",
   "lua_uses": 0,
   "observed_argc": {}
  },
  {
   "name": "release",
   "helper": "res",
   "registered_in": "0x416980",
   "call_site": "0x416add",
   "impl": null,
   "thunk": "0x416860",
   "owner": "dynamic",
   "lua_uses": 22,
   "observed_argc": {
    "1": 4,
    "2": 1,
    "3": 2
   }
  },
  {
   "name": "delayrelease",
   "helper": "res",
   "registered_in": "0x416980",
   "call_site": "0x416aef",
   "impl": null,
   "thunk": "0x4168f0",
   "owner": "dynamic",
   "lua_uses": 8,
   "observed_argc": {
    "1": 5,
    "2": 1,
    "3": 1
   }
  },
  {
   "name": "clear",
   "helper": "member",
   "registered_in": "0x416980",
   "call_site": "0x416b0f",
   "impl": "0x414d70",
   "thunk": "0x450810",
   "owner": "dynamic",
   "lua_uses": 32,
   "observed_argc": {
    "0": 10,
    "1": 6
   }
  },
  {
   "name": "delayclear",
   "helper": "member",
   "registered_in": "0x416980",
   "call_site": "0x416b2f",
   "impl": "0x414d80",
   "thunk": "0x450810",
   "owner": "dynamic",
   "lua_uses": 0,
   "observed_argc": {}
  },
  {
   "name": "reload",
   "helper": "member",
   "registered_in": "0x416980",
   "call_site": "0x416b4f",
   "impl": "0x414440",
   "thunk": "0x450810",
   "owner": "dynamic",
   "lua_uses": 0,
   "observed_argc": {}
  },
  {
   "name": "printloaded",
   "helper": "member",
   "registered_in": "0x416980",
   "call_site": "0x416b6f",
   "impl": "0x412250",
   "thunk": "0x450810",
   "owner": "dynamic",
   "lua_uses": 0,
   "observed_argc": {}
  },
  {
   "name": "totalmemory",
   "helper": "member",
   "registered_in": "0x416980",
   "call_site": "0x416b8f",
   "impl": "0x411e60",
   "thunk": "0x4125c0",
   "owner": "dynamic",
   "lua_uses": 1,
   "observed_argc": {
    "0": 1
   }
  },
  {
   "name": "addreq",
   "helper": "res",
   "registered_in": "0x416980",
   "call_site": "0x416ba1",
   "impl": null,
   "thunk": "0x416350",
   "owner": "dynamic",
   "lua_uses": 1,
   "observed_argc": {
    "1": 1
   }
  },
  {
   "name": "resetTimer",
   "helper": "member",
   "registered_in": "0x43a620",
   "call_site": "0x43add3",
   "impl": "0x419c90",
   "thunk": "0x41e260",
   "owner": "_G",
   "lua_uses": 0,
   "observed_argc": {}
  },
  {
   "name": "getGameTimer",
   "helper": "gamelua_extra",
   "registered_in": "0x43a620",
   "call_site": "0x43ade9",
   "impl": "0x419cc0",
   "thunk": null,
   "owner": "_G",
   "lua_uses": 2,
   "observed_argc": {
    "0": 2
   }
  },
  {
   "name": "requestExit",
   "helper": "member",
   "registered_in": "0x43a620",
   "call_site": "0x43ae0e",
   "impl": "0x41a300",
   "thunk": "0x41e260",
   "owner": "_G",
   "lua_uses": 4,
   "observed_argc": {
    "0": 4
   }
  },
  {
   "name": "print",
   "helper": "member",
   "registered_in": "0x43a620",
   "call_site": "0x43ae33",
   "impl": "0x4cd4c0",
   "thunk": "0x42b890",
   "owner": "_G",
   "lua_uses": 279,
   "observed_argc": {
    "1": 242,
    "2": 3,
    "3": 1,
    "6": 3
   }
  },
  {
   "name": "printWarning",
   "helper": "member",
   "registered_in": "0x43a620",
   "call_site": "0x43ae58",
   "impl": "0x41efa0",
   "thunk": "0x42b890",
   "owner": "_G",
   "lua_uses": 8,
   "observed_argc": {
    "1": 7,
    "2": 1
   }
  },
  {
   "name": "printError",
   "helper": "member",
   "registered_in": "0x43a620",
   "call_site": "0x43ae7d",
   "impl": "0x41f050",
   "thunk": "0x42b890",
   "owner": "_G",
   "lua_uses": 6,
   "observed_argc": {
    "1": 5,
    "2": 1
   }
  },
  {
   "name": "setBGColor",
   "helper": "member",
   "registered_in": "0x43a620",
   "call_site": "0x43aea2",
   "impl": "0x41c770",
   "thunk": "0x421990",
   "owner": "_G",
   "lua_uses": 4,
   "observed_argc": {
    "3": 4
   }
  },
  {
   "name": "createDynamicHandler",
   "helper": "member",
   "registered_in": "0x43a620",
   "call_site": "0x43aec7",
   "impl": "0x4222f0",
   "thunk": "0x42b890",
   "owner": "_G",
   "lua_uses": 1,
   "observed_argc": {
    "1": 1
   }
  },
  {
   "name": "createBox",
   "helper": "member",
   "registered_in": "0x43a620",
   "call_site": "0x43aeec",
   "impl": "0x438ff0",
   "thunk": "0x42b8e0",
   "owner": "_G",
   "lua_uses": 3,
   "observed_argc": {
    "12": 3
   }
  },
  {
   "name": "createCircle",
   "helper": "member",
   "registered_in": "0x43a620",
   "call_site": "0x43af11",
   "impl": "0x439310",
   "thunk": "0x42b930",
   "owner": "_G",
   "lua_uses": 7,
   "observed_argc": {
    "10": 7
   }
  },
  {
   "name": "resizeCircle",
   "helper": "member",
   "registered_in": "0x43a620",
   "call_site": "0x43af36",
   "impl": "0x42ee50",
   "thunk": "0x42b980",
   "owner": "_G",
   "lua_uses": 3,
   "observed_argc": {
    "2": 3
   }
  },
  {
   "name": "getRadius",
   "helper": "member",
   "registered_in": "0x43a620",
   "call_site": "0x43af5b",
   "impl": "0x42eed0",
   "thunk": "0x42b9d0",
   "owner": "_G",
   "lua_uses": 1,
   "observed_argc": {
    "1": 1
   }
  },
  {
   "name": "createPolygon",
   "helper": "member",
   "registered_in": "0x43a620",
   "call_site": "0x43af80",
   "impl": "0x439650",
   "thunk": "0x42ba20",
   "owner": "_G",
   "lua_uses": 1,
   "observed_argc": {
    "11": 1
   }
  },
  {
   "name": "setColliderType",
   "helper": "member",
   "registered_in": "0x43a620",
   "call_site": "0x43afa5",
   "impl": "0x429140",
   "thunk": "0x42ba70",
   "owner": "_G",
   "lua_uses": 7,
   "observed_argc": {
    "2": 7
   }
  },
  {
   "name": "setVisible",
   "helper": "member",
   "registered_in": "0x43a620",
   "call_site": "0x43afca",
   "impl": "0x4291a0",
   "thunk": "0x42bac0",
   "owner": "_G",
   "lua_uses": 269,
   "observed_argc": {
    "2": 257,
    "3": 1,
    "4": 4,
    "5": 1,
    "6": 1,
    "11": 1
   }
  },
  {
   "name": "setFilterCategory",
   "helper": "member",
   "registered_in": "0x43a620",
   "call_site": "0x43afef",
   "impl": "0x429200",
   "thunk": "0x42ba70",
   "owner": "_G",
   "lua_uses": 1,
   "observed_argc": {
    "2": 1
   }
  },
  {
   "name": "setFilterMask",
   "helper": "member",
   "registered_in": "0x43a620",
   "call_site": "0x43b014",
   "impl": "0x429260",
   "thunk": "0x42ba70",
   "owner": "_G",
   "lua_uses": 26,
   "observed_argc": {
    "2": 26
   }
  },
  {
   "name": "setSensor",
   "helper": "member",
   "registered_in": "0x43a620",
   "call_site": "0x43b039",
   "impl": "0x4292c0",
   "thunk": "0x42bac0",
   "owner": "_G",
   "lua_uses": 1,
   "observed_argc": {
    "2": 1
   }
  },
  {
   "name": "setGravityEnabled",
   "helper": "member",
   "registered_in": "0x43a620",
   "call_site": "0x43b05e",
   "impl": "0x429320",
   "thunk": "0x42bac0",
   "owner": "_G",
   "lua_uses": 1,
   "observed_argc": {
    "2": 1
   }
  },
  {
   "name": "isGravityEnabled",
   "helper": "member",
   "registered_in": "0x43a620",
   "call_site": "0x43b083",
   "impl": "0x429380",
   "thunk": "0x42bb10",
   "owner": "_G",
   "lua_uses": 0,
   "observed_argc": {}
  },
  {
   "name": "useAsBackgroundMask",
   "helper": "member",
   "registered_in": "0x43a620",
   "call_site": "0x43b0a8",
   "impl": "0x4293f0",
   "thunk": "0x42b890",
   "owner": "_G",
   "lua_uses": 1,
   "observed_argc": {
    "1": 1
   }
  },
  {
   "name": "createJoint",
   "helper": "gamelua_extra",
   "registered_in": "0x43a620",
   "call_site": "0x43b0be",
   "impl": "0x431160",
   "thunk": null,
   "owner": "_G",
   "lua_uses": 19,
   "observed_argc": {
    "1": 16,
    "2": 2
   }
  },
  {
   "name": "setJointParameters",
   "helper": "gamelua_extra",
   "registered_in": "0x43a620",
   "call_site": "0x43b0d4",
   "impl": "0x41f100",
   "thunk": null,
   "owner": "_G",
   "lua_uses": 2,
   "observed_argc": {
    "1": 2
   }
  },
  {
   "name": "getJointList",
   "helper": "gamelua_extra",
   "registered_in": "0x43a620",
   "call_site": "0x43b0ea",
   "impl": "0x424830",
   "thunk": null,
   "owner": "_G",
   "lua_uses": 0,
   "observed_argc": {}
  },
  {
   "name": "checkJointLimits",
   "helper": "member",
   "registered_in": "0x43a620",
   "call_site": "0x43b10f",
   "impl": "0x41f660",
   "thunk": "0x42b890",
   "owner": "_G",
   "lua_uses": 1,
   "observed_argc": {
    "1": 1
   }
  },
  {
   "name": "destroyJoint",
   "helper": "member",
   "registered_in": "0x43a620",
   "call_site": "0x43b134",
   "impl": "0x42ea00",
   "thunk": "0x42b890",
   "owner": "_G",
   "lua_uses": 4,
   "observed_argc": {
    "1": 4
   }
  },
  {
   "name": "createThemeSprite",
   "helper": "member",
   "registered_in": "0x43a620",
   "call_site": "0x43b159",
   "impl": "0x432870",
   "thunk": "0x42bb60",
   "owner": "_G",
   "lua_uses": 1,
   "observed_argc": {
    "9": 1
   }
  },
  {
   "name": "removeThemeSprite",
   "helper": "member",
   "registered_in": "0x43a620",
   "call_site": "0x43b17e",
   "impl": "0x42fd20",
   "thunk": "0x42b980",
   "owner": "_G",
   "lua_uses": 0,
   "observed_argc": {}
  },
  {
   "name": "modifyThemeSprite",
   "helper": "member",
   "registered_in": "0x43a620",
   "call_site": "0x43b1a3",
   "impl": "0x41fd90",
   "thunk": "0x42bbb0",
   "owner": "_G",
   "lua_uses": 0,
   "observed_argc": {}
  },
  {
   "name": "setThemeRectColour",
   "helper": "member",
   "registered_in": "0x43a620",
   "call_site": "0x43b1c8",
   "impl": "0x41b7f0",
   "thunk": "0x421a20",
   "owner": "_G",
   "lua_uses": 10,
   "observed_argc": {
    "5": 7,
    "6": 2,
    "7": 1
   }
  },
  {
   "name": "setThemeForegroundOffsetY",
   "helper": "member",
   "registered_in": "0x43a620",
   "call_site": "0x43b1ed",
   "impl": "0x41b830",
   "thunk": "0x421a70",
   "owner": "_G",
   "lua_uses": 2,
   "observed_argc": {
    "2": 2
   }
  },
  {
   "name": "setThemeLayerTintColour",
   "helper": "member",
   "registered_in": "0x43a620",
   "call_site": "0x43b212",
   "impl": "0x41b860",
   "thunk": "0x421a20",
   "owner": "_G",
   "lua_uses": 0,
   "observed_argc": {}
  },
  {
   "name": "setThemeTintColour",
   "helper": "member",
   "registered_in": "0x43a620",
   "call_site": "0x43b237",
   "impl": "0x41b8a0",
   "thunk": "0x421af0",
   "owner": "_G",
   "lua_uses": 0,
   "observed_argc": {}
  },
  {
   "name": "applyImpulse",
   "helper": "gamelua_extra",
   "registered_in": "0x43a620",
   "call_site": "0x43b24d",
   "impl": "0x4243a0",
   "thunk": null,
   "owner": "_G",
   "lua_uses": 13,
   "observed_argc": {
    "3": 3,
    "5": 10
   }
  },
  {
   "name": "applyForceNative",
   "helper": "member",
   "registered_in": "0x43a620",
   "call_site": "0x43b272",
   "impl": "0x4244c0",
   "thunk": "0x42bc00",
   "owner": "_G",
   "lua_uses": 1,
   "observed_argc": {
    "5": 1
   }
  },
  {
   "name": "setPosition",
   "helper": "member",
   "registered_in": "0x43a620",
   "call_site": "0x43b297",
   "impl": "0x42e290",
   "thunk": "0x42bc50",
   "owner": "_G",
   "lua_uses": 33,
   "observed_argc": {
    "3": 32,
    "7": 1
   }
  },
  {
   "name": "setRotation",
   "helper": "member",
   "registered_in": "0x43a620",
   "call_site": "0x43b2bc",
   "impl": "0x42e3c0",
   "thunk": "0x42b980",
   "owner": "_G",
   "lua_uses": 40,
   "observed_argc": {
    "2": 38,
    "4": 1,
    "8": 1
   }
  },
  {
   "name": "setVelocity",
   "helper": "member",
   "registered_in": "0x43a620",
   "call_site": "0x43b2e1",
   "impl": "0x4245e0",
   "thunk": "0x42bc50",
   "owner": "_G",
   "lua_uses": 34,
   "observed_argc": {
    "3": 31,
    "5": 1
   }
  },
  {
   "name": "setAngularDamping",
   "helper": "member",
   "registered_in": "0x43a620",
   "call_site": "0x43b306",
   "impl": "0x42e4f0",
   "thunk": "0x42b980",
   "owner": "_G",
   "lua_uses": 0,
   "observed_argc": {}
  },
  {
   "name": "setAngularVelocity",
   "helper": "member",
   "registered_in": "0x43a620",
   "call_site": "0x43b32b",
   "impl": "0x424660",
   "thunk": "0x42b980",
   "owner": "_G",
   "lua_uses": 16,
   "observed_argc": {
    "2": 16
   }
  },
  {
   "name": "setLinearDamping",
   "helper": "member",
   "registered_in": "0x43a620",
   "call_site": "0x43b350",
   "impl": "0x4246d0",
   "thunk": "0x42b980",
   "owner": "_G",
   "lua_uses": 1,
   "observed_argc": {
    "2": 1
   }
  },
  {
   "name": "setFriction",
   "helper": "member",
   "registered_in": "0x43a620",
   "call_site": "0x43b375",
   "impl": "0x42e660",
   "thunk": "0x42b980",
   "owner": "_G",
   "lua_uses": 1,
   "observed_argc": {
    "2": 1
   }
  },
  {
   "name": "setRestitution",
   "helper": "member",
   "registered_in": "0x43a620",
   "call_site": "0x43b39a",
   "impl": "0x42e6d0",
   "thunk": "0x42b980",
   "owner": "_G",
   "lua_uses": 1,
   "observed_argc": {
    "2": 1
   }
  },
  {
   "name": "setDensity",
   "helper": "member",
   "registered_in": "0x43a620",
   "call_site": "0x43b3bf",
   "impl": "0x42e740",
   "thunk": "0x42b980",
   "owner": "_G",
   "lua_uses": 1,
   "observed_argc": {
    "2": 1
   }
  },
  {
   "name": "setPhysicsSimulationScale",
   "helper": "member",
   "registered_in": "0x43a620",
   "call_site": "0x43b3e4",
   "impl": "0x41a500",
   "thunk": "0x421b40",
   "owner": "_G",
   "lua_uses": 1,
   "observed_argc": {
    "1": 1
   }
  },
  {
   "name": "setPhysicsEnabled",
   "helper": "member",
   "registered_in": "0x43a620",
   "call_site": "0x43b409",
   "impl": "0x41a510",
   "thunk": "0x420a30",
   "owner": "_G",
   "lua_uses": 17,
   "observed_argc": {
    "1": 17
   }
  },
  {
   "name": "isPhysicsEnabled",
   "helper": "member",
   "registered_in": "0x43a620",
   "call_site": "0x43b42e",
   "impl": "0x41a520",
   "thunk": "0x405e70",
   "owner": "_G",
   "lua_uses": 17,
   "observed_argc": {
    "0": 17
   }
  },
  {
   "name": "setTopLeft",
   "helper": "member",
   "registered_in": "0x43a620",
   "call_site": "0x43b453",
   "impl": "0x41a560",
   "thunk": "0x421ba0",
   "owner": "_G",
   "lua_uses": 3,
   "observed_argc": {
    "2": 3
   }
  },
  {
   "name": "removeObject",
   "helper": "member",
   "registered_in": "0x43a620",
   "call_site": "0x43b478",
   "impl": "0x438490",
   "thunk": "0x42b890",
   "owner": "_G",
   "lua_uses": 12,
   "observed_argc": {
    "1": 12
   }
  },
  {
   "name": "setEditing",
   "helper": "member",
   "registered_in": "0x43a620",
   "call_site": "0x43b49d",
   "impl": "0x41a320",
   "thunk": "0x420a30",
   "owner": "_G",
   "lua_uses": 5,
   "observed_argc": {
    "1": 5
   }
  },
  {
   "name": "isEditing",
   "helper": "member",
   "registered_in": "0x43a620",
   "call_site": "0x43b4c2",
   "impl": "0x41a330",
   "thunk": "0x405e70",
   "owner": "_G",
   "lua_uses": 3,
   "observed_argc": {
    "0": 3
   }
  },
  {
   "name": "setWorldScale",
   "helper": "member",
   "registered_in": "0x43a620",
   "call_site": "0x43b4e7",
   "impl": "0x41a580",
   "thunk": "0x421b40",
   "owner": "_G",
   "lua_uses": 18,
   "observed_argc": {
    "1": 18
   }
  },
  {
   "name": "drawRect",
   "helper": "member",
   "registered_in": "0x43a620",
   "call_site": "0x43b50c",
   "impl": "0x41a180",
   "thunk": "0x421c20",
   "owner": "_G",
   "lua_uses": 21,
   "observed_argc": {
    "9": 21
   }
  },
  {
   "name": "drawTexturedRect",
   "helper": "member",
   "registered_in": "0x43a620",
   "call_site": "0x43b531",
   "impl": "0x41e890",
   "thunk": "0x42bca0",
   "owner": "_G",
   "lua_uses": 0,
   "observed_argc": {}
  },
  {
   "name": "clearParticles",
   "helper": "member",
   "registered_in": "0x43a620",
   "call_site": "0x43b556",
   "impl": "0x419d20",
   "thunk": "0x41e260",
   "owner": "_G",
   "lua_uses": 4,
   "observed_argc": {
    "0": 4
   }
  },
  {
   "name": "inheritTeleportation",
   "helper": "member",
   "registered_in": "0x43a620",
   "call_site": "0x43b57b",
   "impl": "0x42e050",
   "thunk": "0x42bcf0",
   "owner": "_G",
   "lua_uses": 1,
   "observed_argc": {
    "2": 1
   }
  },
  {
   "name": "setRenderState",
   "helper": "gamelua_extra",
   "registered_in": "0x43a620",
   "call_site": "0x43b591",
   "impl": "0x419d50",
   "thunk": null,
   "owner": "_G",
   "lua_uses": 91,
   "observed_argc": {
    "2": 1,
    "4": 16,
    "5": 16,
    "6": 10,
    "7": 35,
    "8": 12,
    "35": 1
   }
  },
  {
   "name": "setAlpha",
   "helper": "member",
   "registered_in": "0x43a620",
   "call_site": "0x43b5b6",
   "impl": "0x419e60",
   "thunk": "0x421b40",
   "owner": "_G",
   "lua_uses": 2,
   "observed_argc": {
    "1": 2
   }
  },
  {
   "name": "drawLevelParticlesNative",
   "helper": "member",
   "registered_in": "0x43a620",
   "call_site": "0x43b5db",
   "impl": "0x41a720",
   "thunk": "0x421b40",
   "owner": "_G",
   "lua_uses": 2,
   "observed_argc": {
    "1": 2
   }
  },
  {
   "name": "drawMenuParticlesInAdvance",
   "helper": "member",
   "registered_in": "0x43a620",
   "call_site": "0x43b600",
   "impl": "0x41a740",
   "thunk": "0x41e260",
   "owner": "_G",
   "lua_uses": 4,
   "observed_argc": {
    "0": 4
   }
  },
  {
   "name": "saveParticleFile",
   "helper": "member",
   "registered_in": "0x43a620",
   "call_site": "0x43b625",
   "impl": "0x428f50",
   "thunk": "0x42b890",
   "owner": "_G",
   "lua_uses": 1,
   "observed_argc": {
    "1": 1
   }
  },
  {
   "name": "setParticleEditorActive",
   "helper": "member",
   "registered_in": "0x43a620",
   "call_site": "0x43b64a",
   "impl": "0x41a610",
   "thunk": "0x420a30",
   "owner": "_G",
   "lua_uses": 0,
   "observed_argc": {}
  },
  {
   "name": "loadLevel",
   "helper": "member",
   "registered_in": "0x43a620",
   "call_site": "0x43b66f",
   "impl": "0x437770",
   "thunk": "0x42bd40",
   "owner": "_G",
   "lua_uses": 1,
   "observed_argc": {
    "2": 1
   }
  },
  {
   "name": "saveLevel",
   "helper": "member",
   "registered_in": "0x43a620",
   "call_site": "0x43b694",
   "impl": "0x428840",
   "thunk": "0x42b890",
   "owner": "_G",
   "lua_uses": 0,
   "observed_argc": {}
  },
  {
   "name": "removeTemporaryLevel",
   "helper": "member",
   "registered_in": "0x43a620",
   "call_site": "0x43b6b9",
   "impl": "0x430ec0",
   "thunk": "0x42b890",
   "owner": "_G",
   "lua_uses": 1,
   "observed_argc": {
    "1": 1
   }
  },
  {
   "name": "saveLuaFile",
   "helper": "member",
   "registered_in": "0x43a620",
   "call_site": "0x43b6de",
   "impl": "0x422700",
   "thunk": "0x42bd90",
   "owner": "_G",
   "lua_uses": 8,
   "observed_argc": {
    "3": 8
   }
  },
  {
   "name": "createDirectory",
   "helper": "member",
   "registered_in": "0x43a620",
   "call_site": "0x43b703",
   "impl": "0x41f8d0",
   "thunk": "0x42b890",
   "owner": "_G",
   "lua_uses": 3,
   "observed_argc": {
    "1": 3
   }
  },
  {
   "name": "checkDirectory",
   "helper": "member",
   "registered_in": "0x43a620",
   "call_site": "0x43b728",
   "impl": "0x41f960",
   "thunk": "0x42bb10",
   "owner": "_G",
   "lua_uses": 3,
   "observed_argc": {
    "1": 3
   }
  },
  {
   "name": "getDirectoryFileList",
   "helper": "member",
   "registered_in": "0x43a620",
   "call_site": "0x43b74d",
   "impl": "0x429450",
   "thunk": "0x42bde0",
   "owner": "_G",
   "lua_uses": 0,
   "observed_argc": {}
  },
  {
   "name": "removeParticleFile",
   "helper": "member",
   "registered_in": "0x43a620",
   "call_site": "0x43b772",
   "impl": "0x429700",
   "thunk": "0x42b890",
   "owner": "_G",
   "lua_uses": 0,
   "observed_argc": {}
  },
  {
   "name": "loadLuaFile",
   "helper": "member",
   "registered_in": "0x43a620",
   "call_site": "0x43b797",
   "impl": "0x420e80",
   "thunk": "0x42bd40",
   "owner": "_G",
   "lua_uses": 134,
   "observed_argc": {
    "2": 134
   }
  },
  {
   "name": "loadLuaFileToObject",
   "helper": "gamelua_extra",
   "registered_in": "0x43a620",
   "call_site": "0x43b7ad",
   "impl": "0x422470",
   "thunk": null,
   "owner": "_G",
   "lua_uses": 109,
   "observed_argc": {
    "3": 105,
    "4": 1,
    "5": 3
   }
  },
  {
   "name": "drawGameNative",
   "helper": "member",
   "registered_in": "0x43a620",
   "call_site": "0x43b7d2",
   "impl": "0x42f590",
   "thunk": "0x41e260",
   "owner": "_G",
   "lua_uses": 1,
   "observed_argc": {
    "0": 1
   }
  },
  {
   "name": "drawBackgroundNative",
   "helper": "member",
   "registered_in": "0x43a620",
   "call_site": "0x43b7f7",
   "impl": "0x41c890",
   "thunk": "0x41e260",
   "owner": "_G",
   "lua_uses": 2,
   "observed_argc": {
    "0": 2
   }
  },
  {
   "name": "drawLayer",
   "helper": "member",
   "registered_in": "0x43a620",
   "call_site": "0x43b81c",
   "impl": "0x41d060",
   "thunk": "0x421b40",
   "owner": "_G",
   "lua_uses": 0,
   "observed_argc": {}
  },
  {
   "name": "drawParticlesNative",
   "helper": "member",
   "registered_in": "0x43a620",
   "call_site": "0x43b841",
   "impl": "0x41a760",
   "thunk": "0x41e260",
   "owner": "_G",
   "lua_uses": 0,
   "observed_argc": {}
  },
  {
   "name": "setSprite",
   "helper": "member",
   "registered_in": "0x43a620",
   "call_site": "0x43b866",
   "impl": "0x42ef40",
   "thunk": "0x42bd40",
   "owner": "_G",
   "lua_uses": 46,
   "observed_argc": {
    "2": 46
   }
  },
  {
   "name": "setRollingSound",
   "helper": "member",
   "registered_in": "0x43a620",
   "call_site": "0x43b88b",
   "impl": "0x42f0e0",
   "thunk": "0x42bd40",
   "owner": "_G",
   "lua_uses": 1,
   "observed_argc": {
    "2": 1
   }
  },
  {
   "name": "setTexture",
   "helper": "member",
   "registered_in": "0x43a620",
   "call_site": "0x43b8b0",
   "impl": "0x42f180",
   "thunk": "0x42bd40",
   "owner": "_G",
   "lua_uses": 4,
   "observed_argc": {
    "2": 4
   }
  },
  {
   "name": "setTheme",
   "helper": "member",
   "registered_in": "0x43a620",
   "call_site": "0x43b8d5",
   "impl": "0x43a450",
   "thunk": "0x42b890",
   "owner": "_G",
   "lua_uses": 4,
   "observed_argc": {
    "1": 3,
    "3": 1
   }
  },
  {
   "name": "setSleeping",
   "helper": "member",
   "registered_in": "0x43a620",
   "call_site": "0x43b8fa",
   "impl": "0x424550",
   "thunk": "0x42bac0",
   "owner": "_G",
   "lua_uses": 1,
   "observed_argc": {
    "2": 1
   }
  },
  {
   "name": "drawLine2D",
   "helper": "member",
   "registered_in": "0x43a620",
   "call_site": "0x43b91f",
   "impl": "0x41a770",
   "thunk": "0x421c70",
   "owner": "_G",
   "lua_uses": 22,
   "observed_argc": {
    "9": 22
   }
  },
  {
   "name": "drawRectLines",
   "helper": "member",
   "registered_in": "0x43a620",
   "call_site": "0x43b944",
   "impl": "0x41a850",
   "thunk": "0x421c70",
   "owner": "_G",
   "lua_uses": 1,
   "observed_argc": {
    "9": 1
   }
  },
  {
   "name": "drawSlingScopeNative",
   "helper": "member",
   "registered_in": "0x43a620",
   "call_site": "0x43b969",
   "impl": "0x4351e0",
   "thunk": "0x421990",
   "owner": "_G",
   "lua_uses": 1,
   "observed_argc": {
    "3": 1
   }
  },
  {
   "name": "drawRubberband",
   "helper": "member",
   "registered_in": "0x43a620",
   "call_site": "0x43b98e",
   "impl": "0x420060",
   "thunk": "0x42be30",
   "owner": "_G",
   "lua_uses": 2,
   "observed_argc": {
    "6": 2
   }
  },
  {
   "name": "createTextInputField",
   "helper": "member",
   "registered_in": "0x43a620",
   "call_site": "0x43b9b3",
   "impl": "0x42de70",
   "thunk": "0x42b890",
   "owner": "_G",
   "lua_uses": 0,
   "observed_argc": {}
  },
  {
   "name": "removeTextInputField",
   "helper": "member",
   "registered_in": "0x43a620",
   "call_site": "0x43b9d8",
   "impl": "0x42df40",
   "thunk": "0x42b890",
   "owner": "_G",
   "lua_uses": 0,
   "observed_argc": {}
  },
  {
   "name": "activateTextInputField",
   "helper": "member",
   "registered_in": "0x43a620",
   "call_site": "0x43b9fd",
   "impl": "0x423de0",
   "thunk": "0x42bd40",
   "owner": "_G",
   "lua_uses": 0,
   "observed_argc": {}
  },
  {
   "name": "deactivateTextInputField",
   "helper": "member",
   "registered_in": "0x43a620",
   "call_site": "0x43ba22",
   "impl": "0x423f80",
   "thunk": "0x42b890",
   "owner": "_G",
   "lua_uses": 0,
   "observed_argc": {}
  },
  {
   "name": "getCurrentTime",
   "helper": "member",
   "registered_in": "0x43a620",
   "call_site": "0x43ba47",
   "impl": "0x41aa20",
   "thunk": "0x420a90",
   "owner": "_G",
   "lua_uses": 27,
   "observed_argc": {
    "0": 27
   }
  },
  {
   "name": "getTimeDifference",
   "helper": "gamelua_extra",
   "registered_in": "0x43a620",
   "call_site": "0x43ba5d",
   "impl": "0x41b8e0",
   "thunk": null,
   "owner": "_G",
   "lua_uses": 8,
   "observed_argc": {
    "2": 7,
    "8": 1
   }
  },
  {
   "name": "getTimeDifferenceInSeconds",
   "helper": "gamelua_extra",
   "registered_in": "0x43a620",
   "call_site": "0x43ba73",
   "impl": "0x41ab20",
   "thunk": null,
   "owner": "_G",
   "lua_uses": 3,
   "observed_argc": {
    "2": 3
   }
  },
  {
   "name": "toNewTimeFormat",
   "helper": "gamelua_extra",
   "registered_in": "0x43a620",
   "call_site": "0x43ba89",
   "impl": "0x41baf0",
   "thunk": null,
   "owner": "_G",
   "lua_uses": 2,
   "observed_argc": {
    "1": 2
   }
  },
  {
   "name": "drawForegroundNative",
   "helper": "member",
   "registered_in": "0x43a620",
   "call_site": "0x43baae",
   "impl": "0x41b1a0",
   "thunk": "0x41e260",
   "owner": "_G",
   "lua_uses": 2,
   "observed_argc": {
    "0": 2
   }
  },
  {
   "name": "setObjectParameter",
   "helper": "member",
   "registered_in": "0x43a620",
   "call_site": "0x43bad3",
   "impl": "0x42e7b0",
   "thunk": "0x42bc50",
   "owner": "_G",
   "lua_uses": 22,
   "observed_argc": {
    "3": 22
   }
  },
  {
   "name": "setScale",
   "helper": "member",
   "registered_in": "0x43a620",
   "call_site": "0x43baf8",
   "impl": "0x42e980",
   "thunk": "0x42bc50",
   "owner": "_G",
   "lua_uses": 11,
   "observed_argc": {
    "3": 11
   }
  },
  {
   "name": "getScale",
   "helper": "gamelua_extra",
   "registered_in": "0x43a620",
   "call_site": "0x43bb0e",
   "impl": "0x4350f0",
   "thunk": null,
   "owner": "_G",
   "lua_uses": 6,
   "observed_argc": {
    "1": 3,
    "2": 2
   }
  },
  {
   "name": "toggleZoomSteps",
   "helper": "member",
   "registered_in": "0x43a620",
   "call_site": "0x43bb33",
   "impl": "0x41a5e0",
   "thunk": "0x421cc0",
   "owner": "_G",
   "lua_uses": 1,
   "observed_argc": {}
  },
  {
   "name": "clipText",
   "helper": "member",
   "registered_in": "0x43a620",
   "call_site": "0x43bb58",
   "impl": "0x429b50",
   "thunk": "0x42be80",
   "owner": "_G",
   "lua_uses": 2,
   "observed_argc": {
    "3": 2
   }
  },
  {
   "name": "startNewTrajectory",
   "helper": "member",
   "registered_in": "0x43a620",
   "call_site": "0x43bb7d",
   "impl": "0x435670",
   "thunk": "0x41e260",
   "owner": "_G",
   "lua_uses": 1,
   "observed_argc": {
    "0": 1
   }
  },
  {
   "name": "addToTrajectory",
   "helper": "member",
   "registered_in": "0x43a620",
   "call_site": "0x43bba2",
   "impl": "0x42c1e0",
   "thunk": "0x421990",
   "owner": "_G",
   "lua_uses": 0,
   "observed_argc": {}
  },
  {
   "name": "addPuffToTrajectory",
   "helper": "member",
   "registered_in": "0x43a620",
   "call_site": "0x43bbc7",
   "impl": "0x42c220",
   "thunk": "0x421990",
   "owner": "_G",
   "lua_uses": 5,
   "observed_argc": {
    "3": 5
   }
  },
  {
   "name": "destroyBreakableJoints",
   "helper": "member",
   "registered_in": "0x43a620",
   "call_site": "0x43bbec",
   "impl": "0x4225e0",
   "thunk": "0x42b980",
   "owner": "_G",
   "lua_uses": 2,
   "observed_argc": {
    "2": 2
   }
  },
  {
   "name": "setLevelLimits",
   "helper": "member",
   "registered_in": "0x43a620",
   "call_site": "0x43bc11",
   "impl": "0x41a620",
   "thunk": "0x421d50",
   "owner": "_G",
   "lua_uses": 1,
   "observed_argc": {
    "4": 1
   }
  },
  {
   "name": "drawBoxNative",
   "helper": "gamelua_extra",
   "registered_in": "0x43a620",
   "call_site": "0x43bc27",
   "impl": "0x422880",
   "thunk": null,
   "owner": "_G",
   "lua_uses": 1,
   "observed_argc": {
    "8": 1
   }
  },
  {
   "name": "drawUITextNative",
   "helper": "gamelua_extra",
   "registered_in": "0x43a620",
   "call_site": "0x43bc3d",
   "impl": "0x438020",
   "thunk": null,
   "owner": "_G",
   "lua_uses": 3,
   "observed_argc": {
    "6": 1,
    "7": 1
   }
  },
  {
   "name": "goToTaskSwitcherLua",
   "helper": "member",
   "registered_in": "0x43a620",
   "call_site": "0x43bc62",
   "impl": "0x49a850",
   "thunk": "0x41e260",
   "owner": "_G",
   "lua_uses": 0,
   "observed_argc": {}
  },
  {
   "name": "checkForLuaFile",
   "helper": "member",
   "registered_in": "0x43a620",
   "call_site": "0x43bc87",
   "impl": "0x41eb80",
   "thunk": "0x42bb10",
   "owner": "_G",
   "lua_uses": 1,
   "observed_argc": {
    "1": 1
   }
  },
  {
   "name": "postHighscore",
   "helper": "member",
   "registered_in": "0x43a620",
   "call_site": "0x43bcac",
   "impl": "0x41fa10",
   "thunk": "0x42bed0",
   "owner": "_G",
   "lua_uses": 6,
   "observed_argc": {
    "3": 2
   }
  },
  {
   "name": "unlockAchievement",
   "helper": "member",
   "registered_in": "0x43a620",
   "call_site": "0x43bcd1",
   "impl": "0x41fa30",
   "thunk": "0x42bd40",
   "owner": "_G",
   "lua_uses": 3,
   "observed_argc": {
    "2": 1
   }
  },
  {
   "name": "captureScreen",
   "helper": "member",
   "registered_in": "0x43a620",
   "call_site": "0x43bcf6",
   "impl": "0x424ad0",
   "thunk": "0x42b890",
   "owner": "_G",
   "lua_uses": 0,
   "observed_argc": {}
  },
  {
   "name": "setAccelerometerActive",
   "helper": "member",
   "registered_in": "0x43a620",
   "call_site": "0x43bd1b",
   "impl": "0x41afe0",
   "thunk": "0x420a30",
   "owner": "_G",
   "lua_uses": 2,
   "observed_argc": {
    "1": 2
   }
  },
  {
   "name": "enableSpotlight",
   "helper": "member",
   "registered_in": "0x43a620",
   "call_site": "0x43bd40",
   "impl": "0x41d8d0",
   "thunk": "0x421da0",
   "owner": "_G",
   "lua_uses": 1,
   "observed_argc": {
    "2": 1
   }
  },
  {
   "name": "disableSpotlight",
   "helper": "member",
   "registered_in": "0x43a620",
   "call_site": "0x43bd65",
   "impl": "0x41d9b0",
   "thunk": "0x41e260",
   "owner": "_G",
   "lua_uses": 1,
   "observed_argc": {
    "0": 1
   }
  },
  {
   "name": "setWorldGravity",
   "helper": "member",
   "registered_in": "0x43a620",
   "call_site": "0x43bd8a",
   "impl": "0x41a530",
   "thunk": "0x421ba0",
   "owner": "_G",
   "lua_uses": 1,
   "observed_argc": {
    "2": 1
   }
  },
  {
   "name": "getCurrentLocale",
   "helper": "member",
   "registered_in": "0x43a620",
   "call_site": "0x43bdaf",
   "impl": "0x4361c0",
   "thunk": "0x41e260",
   "owner": "_G",
   "lua_uses": 3,
   "observed_argc": {
    "0": 3
   }
  },
  {
   "name": "initGameCenter",
   "helper": "member",
   "registered_in": "0x43a620",
   "call_site": "0x43bdd4",
   "impl": "0x49a850",
   "thunk": "0x41e260",
   "owner": "_G",
   "lua_uses": 4,
   "observed_argc": {
    "0": 2,
    "1": 1
   }
  },
  {
   "name": "getLeaderboardScoresForPlayers",
   "helper": "member",
   "registered_in": "0x43a620",
   "call_site": "0x43bdf9",
   "impl": "0x49a850",
   "thunk": "0x41e260",
   "owner": "_G",
   "lua_uses": 0,
   "observed_argc": {}
  },
  {
   "name": "getLeaderboardScoresForRange",
   "helper": "member",
   "registered_in": "0x43a620",
   "call_site": "0x43be1e",
   "impl": "0x41fa10",
   "thunk": "0x42bc50",
   "owner": "_G",
   "lua_uses": 1,
   "observed_argc": {
    "3": 1
   }
  },
  {
   "name": "showLeaderboards",
   "helper": "member",
   "registered_in": "0x43a620",
   "call_site": "0x43be43",
   "impl": "0x49a850",
   "thunk": "0x41e260",
   "owner": "_G",
   "lua_uses": 2,
   "observed_argc": {
    "0": 2
   }
  },
  {
   "name": "showAchievements",
   "helper": "member",
   "registered_in": "0x43a620",
   "call_site": "0x43be68",
   "impl": "0x49a850",
   "thunk": "0x41e260",
   "owner": "_G",
   "lua_uses": 2,
   "observed_argc": {
    "0": 2
   }
  },
  {
   "name": "setGCPopupAllowed",
   "helper": "member",
   "registered_in": "0x43a620",
   "call_site": "0x43be8d",
   "impl": "0x522570",
   "thunk": "0x420a30",
   "owner": "_G",
   "lua_uses": 5,
   "observed_argc": {
    "1": 5
   }
  },
  {
   "name": "native_startURLThread",
   "helper": "member",
   "registered_in": "0x43a620",
   "call_site": "0x43beb2",
   "impl": "0x4364c0",
   "thunk": "0x42b890",
   "owner": "_G",
   "lua_uses": 2,
   "observed_argc": {
    "1": 1
   }
  },
  {
   "name": "native_getUnlockRequestChecksum",
   "helper": "gamelua_extra",
   "registered_in": "0x43a620",
   "call_site": "0x43bec8",
   "impl": "0x42a0b0",
   "thunk": null,
   "owner": "_G",
   "lua_uses": 1,
   "observed_argc": {
    "2": 1
   }
  },
  {
   "name": "native_sumLuaIntegerTableToString",
   "helper": "member",
   "registered_in": "0x43a620",
   "call_site": "0x43beed",
   "impl": "0x42b0b0",
   "thunk": "0x421e20",
   "owner": "_G",
   "lua_uses": 2,
   "observed_argc": {
    "1": 1
   }
  },
  {
   "name": "setOffsetedViewport",
   "helper": "member",
   "registered_in": "0x43a620",
   "call_site": "0x43bf12",
   "impl": "0x41ad00",
   "thunk": "0x421ba0",
   "owner": "_G",
   "lua_uses": 5,
   "observed_argc": {
    "2": 5
   }
  },
  {
   "name": "loadTableFromFile",
   "helper": "member",
   "registered_in": "0x43a620",
   "call_site": "0x43bf37",
   "impl": "0x4297e0",
   "thunk": "0x42bd40",
   "owner": "_G",
   "lua_uses": 7,
   "observed_argc": {
    "2": 7
   }
  },
  {
   "name": "setNotificationsEnabled",
   "helper": "member",
   "registered_in": "0x43a620",
   "call_site": "0x43bf5c",
   "impl": "0x429890",
   "thunk": "0x420a30",
   "owner": "_G",
   "lua_uses": 5,
   "observed_argc": {
    "1": 2,
    "2": 2
   }
  },
  {
   "name": "activateDebugConsole",
   "helper": "member",
   "registered_in": "0x43a620",
   "call_site": "0x43bf81",
   "impl": "0x420530",
   "thunk": "0x42b890",
   "owner": "_G",
   "lua_uses": 3,
   "observed_argc": {
    "1": 3
   }
  },
  {
   "name": "deactivateDebugConsole",
   "helper": "member",
   "registered_in": "0x43a620",
   "call_site": "0x43bfa6",
   "impl": "0x41ad70",
   "thunk": "0x41e260",
   "owner": "_G",
   "lua_uses": 1,
   "observed_argc": {
    "0": 1
   }
  },
  {
   "name": "addNotificationAfter",
   "helper": "member",
   "registered_in": "0x43a620",
   "call_site": "0x43bfd8",
   "impl": "0x4237a0",
   "thunk": "0x42bf20",
   "owner": "_G",
   "lua_uses": 1,
   "observed_argc": {
    "3": 1
   }
  },
  {
   "name": "removeNotification",
   "helper": "member",
   "registered_in": "0x43a620",
   "call_site": "0x43bffd",
   "impl": "0x41fa70",
   "thunk": "0x42bb10",
   "owner": "_G",
   "lua_uses": 3,
   "observed_argc": {
    "1": 3
   }
  },
  {
   "name": "removeAllNotifications",
   "helper": "member",
   "registered_in": "0x43a620",
   "call_site": "0x43c022",
   "impl": "0x41b030",
   "thunk": "0x41e260",
   "owner": "_G",
   "lua_uses": 0,
   "observed_argc": {}
  },
  {
   "name": "setNotificationCallback",
   "helper": "member",
   "registered_in": "0x43a620",
   "call_site": "0x43c047",
   "impl": "0x423d80",
   "thunk": "0x42b890",
   "owner": "_G",
   "lua_uses": 0,
   "observed_argc": {}
  },
  {
   "name": "openProgram",
   "helper": "member",
   "registered_in": "0x43a620",
   "call_site": "0x43c06c",
   "impl": "0x41fae0",
   "thunk": "0x42bb10",
   "owner": "_G",
   "lua_uses": 0,
   "observed_argc": {}
  },
  {
   "name": "canOpenProgram",
   "helper": "member",
   "registered_in": "0x43a620",
   "call_site": "0x43c091",
   "impl": "0x41fb60",
   "thunk": "0x42bb10",
   "owner": "_G",
   "lua_uses": 0,
   "observed_argc": {}
  },
  {
   "name": "getOSName",
   "helper": "member",
   "registered_in": "0x43a620",
   "call_site": "0x43c0b6",
   "impl": "0x41fc10",
   "thunk": "0x421e70",
   "owner": "_G",
   "lua_uses": 1,
   "observed_argc": {
    "0": 1
   }
  },
  {
   "name": "getOSVersion",
   "helper": "member",
   "registered_in": "0x43a620",
   "call_site": "0x43c0db",
   "impl": "0x41fc80",
   "thunk": "0x421e70",
   "owner": "_G",
   "lua_uses": 1,
   "observed_argc": {
    "0": 1
   }
  },
  {
   "name": "getModel",
   "helper": "member",
   "registered_in": "0x43a620",
   "call_site": "0x43c100",
   "impl": "0x41fcf0",
   "thunk": "0x421e70",
   "owner": "_G",
   "lua_uses": 2,
   "observed_argc": {
    "0": 2
   }
  },
  {
   "name": "getManufacturer",
   "helper": "member",
   "registered_in": "0x43a620",
   "call_site": "0x43c125",
   "impl": "0x41fcf0",
   "thunk": "0x421e70",
   "owner": "_G",
   "lua_uses": 0,
   "observed_argc": {}
  },
  {
   "name": "getFullScreenWidth",
   "helper": "member",
   "registered_in": "0x43a620",
   "call_site": "0x43c14a",
   "impl": "0x41a710",
   "thunk": "0x420b20",
   "owner": "_G",
   "lua_uses": 0,
   "observed_argc": {}
  },
  {
   "name": "getFullScreenHeight",
   "helper": "member",
   "registered_in": "0x43a620",
   "call_site": "0x43c16f",
   "impl": "0x41a710",
   "thunk": "0x420b20",
   "owner": "_G",
   "lua_uses": 0,
   "observed_argc": {}
  },
  {
   "name": "getIntersectingObjects",
   "helper": "gamelua_extra",
   "registered_in": "0x43a620",
   "call_site": "0x43c185",
   "impl": "0x4240c0",
   "thunk": null,
   "owner": "_G",
   "lua_uses": 2,
   "observed_argc": {
    "1": 2
   }
  },
  {
   "name": "getWorldPoint",
   "helper": "gamelua_extra",
   "registered_in": "0x43a620",
   "call_site": "0x43c19b",
   "impl": "0x428720",
   "thunk": null,
   "owner": "_G",
   "lua_uses": 0,
   "observed_argc": {}
  },
  {
   "name": "getLocalPoint",
   "helper": "gamelua_extra",
   "registered_in": "0x43a620",
   "call_site": "0x43c1b1",
   "impl": "0x4284a0",
   "thunk": null,
   "owner": "_G",
   "lua_uses": 0,
   "observed_argc": {}
  },
  {
   "name": "getAngularVelocity",
   "helper": "member",
   "registered_in": "0x43a620",
   "call_site": "0x43c1d6",
   "impl": "0x4285d0",
   "thunk": "0x42b9d0",
   "owner": "_G",
   "lua_uses": 3,
   "observed_argc": {
    "1": 3
   }
  },
  {
   "name": "getTrajectory",
   "helper": "gamelua_extra",
   "registered_in": "0x43a620",
   "call_site": "0x43c1ec",
   "impl": "0x42f250",
   "thunk": null,
   "owner": "_G",
   "lua_uses": 2,
   "observed_argc": {
    "1": 2
   }
  },
  {
   "name": "getSpeed",
   "helper": "member",
   "registered_in": "0x43a620",
   "call_site": "0x43c211",
   "impl": "0x428660",
   "thunk": "0x42b9d0",
   "owner": "_G",
   "lua_uses": 1,
   "observed_argc": {
    "1": 1
   }
  },
  {
   "name": "printGlobals",
   "helper": "member",
   "registered_in": "0x43a620",
   "call_site": "0x43c236",
   "impl": "0x419e80",
   "thunk": "0x41e260",
   "owner": "_G",
   "lua_uses": 0,
   "observed_argc": {}
  },
  {
   "name": "playVideo",
   "helper": "member",
   "registered_in": "0x43a620",
   "call_site": "0x43c25b",
   "impl": "0x41e810",
   "thunk": "0x42b890",
   "owner": "_G",
   "lua_uses": 3,
   "observed_argc": {
    "1": 1
   }
  },
  {
   "name": "setChannelCountLimit",
   "helper": "member",
   "registered_in": "0x43a620",
   "call_site": "0x43c280",
   "impl": "0x419d30",
   "thunk": "0x421da0",
   "owner": "_G",
   "lua_uses": 7,
   "observed_argc": {
    "2": 7
   }
  },
  {
   "name": "setMaxTranslation",
   "helper": "member",
   "registered_in": "0x43a620",
   "call_site": "0x43c2a5",
   "impl": "0x41a160",
   "thunk": "0x421b40",
   "owner": "_G",
   "lua_uses": 1,
   "observed_argc": {
    "1": 1
   }
  },
  {
   "name": "checkForUpdates",
   "helper": "member",
   "registered_in": "0x43a620",
   "call_site": "0x43c2ca",
   "impl": "0x42c260",
   "thunk": "0x41e260",
   "owner": "_G",
   "lua_uses": 1,
   "observed_argc": {
    "0": 1
   }
  },
  {
   "name": "callVersionUpdater",
   "helper": "member",
   "registered_in": "0x43a620",
   "call_site": "0x43c2ef",
   "impl": "0x42ae00",
   "thunk": "0x41e260",
   "owner": "_G",
   "lua_uses": 1,
   "observed_argc": {
    "0": 1
   }
  },
  {
   "name": "captureMouse",
   "helper": "member",
   "registered_in": "0x43a620",
   "call_site": "0x43c314",
   "impl": "0x41ac60",
   "thunk": "0x420a30",
   "owner": "_G",
   "lua_uses": 1,
   "observed_argc": {
    "1": 1
   }
  },
  {
   "name": "isMouseCaptured",
   "helper": "member",
   "registered_in": "0x43a620",
   "call_site": "0x43c339",
   "impl": "0x41ac80",
   "thunk": "0x405e70",
   "owner": "_G",
   "lua_uses": 1,
   "observed_argc": {
    "0": 1
   }
  },
  {
   "name": "setFullScreenMode",
   "helper": "member",
   "registered_in": "0x43a620",
   "call_site": "0x43c35e",
   "impl": "0x41ac40",
   "thunk": "0x420a30",
   "owner": "_G",
   "lua_uses": 6,
   "observed_argc": {
    "1": 6
   }
  },
  {
   "name": "setResolution",
   "helper": "member",
   "registered_in": "0x43a620",
   "call_site": "0x43c383",
   "impl": "0x41ac10",
   "thunk": "0x421ba0",
   "owner": "_G",
   "lua_uses": 3,
   "observed_argc": {
    "2": 1,
    "3": 1
   }
  },
  {
   "name": "isInFullScreenMode",
   "helper": "member",
   "registered_in": "0x43a620",
   "call_site": "0x43c3a8",
   "impl": "0x41ac90",
   "thunk": "0x405e70",
   "owner": "_G",
   "lua_uses": 9,
   "observed_argc": {
    "0": 9
   }
  },
  {
   "name": "getClipboardText",
   "helper": "member",
   "registered_in": "0x43a620",
   "call_site": "0x43c3cd",
   "impl": "0x429fc0",
   "thunk": "0x421e70",
   "owner": "_G",
   "lua_uses": 1,
   "observed_argc": {
    "0": 1
   }
  },
  {
   "name": "setMousePosition",
   "helper": "member",
   "registered_in": "0x43a620",
   "call_site": "0x43c3f2",
   "impl": "0x41aca0",
   "thunk": "0x421f00",
   "owner": "_G",
   "lua_uses": 0,
   "observed_argc": {}
  },
  {
   "name": "enableMotion",
   "helper": "member",
   "registered_in": "0x43a620",
   "call_site": "0x43c417",
   "impl": "0x522570",
   "thunk": "0x420a30",
   "owner": "_G",
   "lua_uses": 4,
   "observed_argc": {
    "1": 4
   }
  },
  {
   "name": "isMotionEnabled",
   "helper": "member",
   "registered_in": "0x43a620",
   "call_site": "0x43c43c",
   "impl": "0x522580",
   "thunk": "0x405e70",
   "owner": "_G",
   "lua_uses": 0,
   "observed_argc": {}
  },
  {
   "name": "registerKey",
   "helper": "member",
   "registered_in": "0x43a620",
   "call_site": "0x43c461",
   "impl": "0x423a50",
   "thunk": "0x42bf70",
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
   "registered_in": "0x43a620",
   "call_site": "0x43c486",
   "impl": "0x420200",
   "thunk": "0x42bb10",
   "owner": "_G",
   "lua_uses": 1,
   "observed_argc": {
    "2": 1
   }
  },
  {
   "name": "getDeviceID",
   "helper": "member",
   "registered_in": "0x43a620",
   "call_site": "0x43c4ab",
   "impl": "0x4202a0",
   "thunk": "0x421e70",
   "owner": "_G",
   "lua_uses": 1,
   "observed_argc": {
    "0": 1
   }
  },
  {
   "name": "checkRegistrationResult",
   "helper": "gamelua_extra",
   "registered_in": "0x43a620",
   "call_site": "0x43c4c1",
   "impl": "0x41acc0",
   "thunk": null,
   "owner": "_G",
   "lua_uses": 1,
   "observed_argc": {
    "0": 1
   }
  },
  {
   "name": "exportLuaTableAsJSON",
   "helper": "member",
   "registered_in": "0x43a620",
   "call_site": "0x43c4e6",
   "impl": "0x42b2b0",
   "thunk": "0x42bfc0",
   "owner": "_G",
   "lua_uses": 0,
   "observed_argc": {}
  },
  {
   "name": "importJSONToLuaTable",
   "helper": "member",
   "registered_in": "0x43a620",
   "call_site": "0x43c50b",
   "impl": "0x4203f0",
   "thunk": "0x42bd40",
   "owner": "_G",
   "lua_uses": 0,
   "observed_argc": {}
  },
  {
   "name": "setUpdating",
   "helper": "member",
   "registered_in": "0x43a620",
   "call_site": "0x43c530",
   "impl": "0x419f40",
   "thunk": "0x420a30",
   "owner": "_G",
   "lua_uses": 10,
   "observed_argc": {
    "1": 5
   }
  },
  {
   "name": "native_reloadIngameSprites",
   "helper": "member",
   "registered_in": "0x43a620",
   "call_site": "0x43c555",
   "impl": "0x4213b0",
   "thunk": "0x41e260",
   "owner": "_G",
   "lua_uses": 1,
   "observed_argc": {
    "0": 1
   }
  },
  {
   "name": "registerStoreStatusListener",
   "helper": "member",
   "registered_in": "0x43a620",
   "call_site": "0x43ccaa",
   "impl": "0x49a850",
   "thunk": "0x41e260",
   "owner": "_G",
   "lua_uses": 2,
   "observed_argc": {
    "0": 2
   }
  },
  {
   "name": "fetchTimeStamp",
   "helper": "member",
   "registered_in": "0x43ec30",
   "call_site": "0x43ec93",
   "impl": "0x43e9f0",
   "thunk": "0x453770",
   "owner": "native.GetTimeStamp",
   "lua_uses": 3,
   "observed_argc": {
    "0": 1,
    "2": 1
   }
  },
  {
   "name": "hasResult",
   "helper": "member",
   "registered_in": "0x43ec30",
   "call_site": "0x43ecb3",
   "impl": "0x43e900",
   "thunk": "0x43e9a0",
   "owner": "native.GetTimeStamp",
   "lua_uses": 3,
   "observed_argc": {
    "0": 1,
    "1": 1
   }
  },
  {
   "name": "getTimeStamp",
   "helper": "res",
   "registered_in": "0x43ec30",
   "call_site": "0x43ecc5",
   "impl": null,
   "thunk": "0x43ead0",
   "owner": "native.GetTimeStamp",
   "lua_uses": 6,
   "observed_argc": {
    "0": 1,
    "2": 2
   }
  },
  {
   "name": "loadLuaScript",
   "helper": "res",
   "registered_in": "0x43f480",
   "call_site": "0x43f519",
   "impl": null,
   "thunk": "0x43f340",
   "owner": "native",
   "lua_uses": 1,
   "observed_argc": {
    "1": 1
   }
  },
  {
   "name": "logError",
   "helper": "member",
   "registered_in": "0x43f480",
   "call_site": "0x43f539",
   "impl": "0x43ee10",
   "thunk": "0x43f430",
   "owner": "native",
   "lua_uses": 1,
   "observed_argc": {
    "1": 1
   }
  },
  {
   "name": "logWarning",
   "helper": "member",
   "registered_in": "0x43f480",
   "call_site": "0x43f559",
   "impl": "0x43eef0",
   "thunk": "0x43f430",
   "owner": "native",
   "lua_uses": 0,
   "observed_argc": {}
  },
  {
   "name": "logInfo",
   "helper": "member",
   "registered_in": "0x43f480",
   "call_site": "0x43f579",
   "impl": "0x4cd4c0",
   "thunk": "0x43f430",
   "owner": "native",
   "lua_uses": 1,
   "observed_argc": {
    "2": 1
   }
  },
  {
   "name": "logVerbose",
   "helper": "member",
   "registered_in": "0x43f480",
   "call_site": "0x43f599",
   "impl": "0x4cd4c0",
   "thunk": "0x43f430",
   "owner": "native",
   "lua_uses": 0,
   "observed_argc": {}
  },
  {
   "name": "logDebug",
   "helper": "member",
   "registered_in": "0x43f480",
   "call_site": "0x43f5b9",
   "impl": "0x4cd4c0",
   "thunk": "0x43f430",
   "owner": "native",
   "lua_uses": 0,
   "observed_argc": {}
  },
  {
   "name": "addParticles",
   "helper": "member",
   "registered_in": "0x444870",
   "call_site": "0x4449cf",
   "impl": "0x4445c0",
   "thunk": "0x441e50",
   "owner": "particles",
   "lua_uses": 81,
   "observed_argc": {
    "5": 13,
    "6": 3,
    "9": 64
   }
  },
  {
   "name": "addLevelParticles",
   "helper": "member",
   "registered_in": "0x444870",
   "call_site": "0x4449ef",
   "impl": "0x444740",
   "thunk": "0x441ea0",
   "owner": "particles",
   "lua_uses": 3,
   "observed_argc": {
    "8": 3
   }
  },
  {
   "name": "setSoftLimit",
   "helper": "member",
   "registered_in": "0x444870",
   "call_site": "0x444a0f",
   "impl": "0x440f80",
   "thunk": "0x450e20",
   "owner": "particles",
   "lua_uses": 1,
   "observed_argc": {
    "2": 1
   }
  },
  {
   "name": "setHardLimit",
   "helper": "member",
   "registered_in": "0x444870",
   "call_site": "0x444a2f",
   "impl": "0x440fa0",
   "thunk": "0x441650",
   "owner": "particles",
   "lua_uses": 1,
   "observed_argc": {
    "1": 1
   }
  },
  {
   "name": "clear",
   "helper": "member",
   "registered_in": "0x444870",
   "call_site": "0x444a4f",
   "impl": "0x442320",
   "thunk": "0x43f430",
   "owner": "particles",
   "lua_uses": 32,
   "observed_argc": {
    "0": 10,
    "1": 6
   }
  },
  {
   "name": "setPath",
   "helper": "member",
   "registered_in": "0x4538b0",
   "call_site": "0x453921",
   "impl": "0x4508c0",
   "thunk": "0x43f430",
   "owner": "res",
   "lua_uses": 0,
   "observed_argc": {}
  },
  {
   "name": "createSpriteSheet",
   "helper": "res",
   "registered_in": "0x4538b0",
   "call_site": "0x453933",
   "impl": null,
   "thunk": "0x451080",
   "owner": "res",
   "lua_uses": 1,
   "observed_argc": {
    "1": 1
   }
  },
  {
   "name": "createCompoSpriteSet",
   "helper": "res",
   "registered_in": "0x4538b0",
   "call_site": "0x453945",
   "impl": null,
   "thunk": "0x451170",
   "owner": "res",
   "lua_uses": 1,
   "observed_argc": {
    "1": 1
   }
  },
  {
   "name": "createBitmapFont",
   "helper": "res",
   "registered_in": "0x4538b0",
   "call_site": "0x453957",
   "impl": null,
   "thunk": "0x451240",
   "owner": "res",
   "lua_uses": 4,
   "observed_argc": {
    "1": 4
   }
  },
  {
   "name": "createSystemFont",
   "helper": "res",
   "registered_in": "0x4538b0",
   "call_site": "0x453969",
   "impl": null,
   "thunk": "0x451310",
   "owner": "res",
   "lua_uses": 1,
   "observed_argc": {
    "8": 1
   }
  },
  {
   "name": "createTextGroupSet",
   "helper": "res",
   "registered_in": "0x4538b0",
   "call_site": "0x45397b",
   "impl": null,
   "thunk": "0x4514d0",
   "owner": "res",
   "lua_uses": 4,
   "observed_argc": {
    "1": 4
   }
  },
  {
   "name": "createAudioOutput",
   "helper": "member",
   "registered_in": "0x4538b0",
   "call_site": "0x45399b",
   "impl": "0x4503f0",
   "thunk": "0x450c50",
   "owner": "res",
   "lua_uses": 2,
   "observed_argc": {
    "3": 2
   }
  },
  {
   "name": "createAudioInput",
   "helper": "member",
   "registered_in": "0x4538b0",
   "call_site": "0x4539bb",
   "impl": "0x450430",
   "thunk": "0x450c50",
   "owner": "res",
   "lua_uses": 0,
   "observed_argc": {}
  },
  {
   "name": "createAudio",
   "helper": "res",
   "registered_in": "0x4538b0",
   "call_site": "0x4539cd",
   "impl": null,
   "thunk": "0x4515a0",
   "owner": "res",
   "lua_uses": 342,
   "observed_argc": {
    "1": 340,
    "3": 1
   }
  },
  {
   "name": "createCompositeAudio",
   "helper": "member",
   "registered_in": "0x4538b0",
   "call_site": "0x4539ed",
   "impl": "0x4534b0",
   "thunk": "0x453720",
   "owner": "res",
   "lua_uses": 0,
   "observed_argc": {}
  },
  {
   "name": "captureSprite",
   "helper": "member",
   "registered_in": "0x4538b0",
   "call_site": "0x453a0d",
   "impl": "0x450920",
   "thunk": "0x43f430",
   "owner": "res",
   "lua_uses": 0,
   "observed_argc": {}
  },
  {
   "name": "releaseSpriteSheet",
   "helper": "res",
   "registered_in": "0x4538b0",
   "call_site": "0x453a1f",
   "impl": null,
   "thunk": "0x451780",
   "owner": "res",
   "lua_uses": 1,
   "observed_argc": {
    "1": 1
   }
  },
  {
   "name": "releaseCompoSpriteSet",
   "helper": "member",
   "registered_in": "0x4538b0",
   "call_site": "0x453a3f",
   "impl": "0x450980",
   "thunk": "0x43f430",
   "owner": "res",
   "lua_uses": 1,
   "observed_argc": {
    "1": 1
   }
  },
  {
   "name": "releaseFont",
   "helper": "member",
   "registered_in": "0x4538b0",
   "call_site": "0x453a5f",
   "impl": "0x4509e0",
   "thunk": "0x43f430",
   "owner": "res",
   "lua_uses": 3,
   "observed_argc": {
    "1": 3
   }
  },
  {
   "name": "releaseTextGroupSet",
   "helper": "member",
   "registered_in": "0x4538b0",
   "call_site": "0x453a7f",
   "impl": "0x450a40",
   "thunk": "0x43f430",
   "owner": "res",
   "lua_uses": 0,
   "observed_argc": {}
  },
  {
   "name": "releaseAudio",
   "helper": "res",
   "registered_in": "0x4538b0",
   "call_site": "0x453a91",
   "impl": null,
   "thunk": "0x451890",
   "owner": "res",
   "lua_uses": 8,
   "observed_argc": {
    "1": 7
   }
  },
  {
   "name": "loadLocale",
   "helper": "member",
   "registered_in": "0x4538b0",
   "call_site": "0x453ab1",
   "impl": "0x450aa0",
   "thunk": "0x453770",
   "owner": "res",
   "lua_uses": 3,
   "observed_argc": {
    "2": 1,
    "7": 1,
    "10": 1
   }
  },
  {
   "name": "useLocale",
   "helper": "member",
   "registered_in": "0x4538b0",
   "call_site": "0x453ad1",
   "impl": "0x450b20",
   "thunk": "0x43f430",
   "owner": "res",
   "lua_uses": 1,
   "observed_argc": {
    "1": 1
   }
  },
  {
   "name": "useFont",
   "helper": "member",
   "registered_in": "0x4538b0",
   "call_site": "0x453af1",
   "impl": "0x450b80",
   "thunk": "0x43f430",
   "owner": "res",
   "lua_uses": 1,
   "observed_argc": {
    "3": 1
   }
  },
  {
   "name": "getAvailableSystemFonts",
   "helper": "member",
   "registered_in": "0x4538b0",
   "call_site": "0x453b11",
   "impl": "0x450750",
   "thunk": "0x450ce0",
   "owner": "res",
   "lua_uses": 1,
   "observed_argc": {
    "0": 1
   }
  },
  {
   "name": "drawSprite",
   "helper": "res",
   "registered_in": "0x4538b0",
   "call_site": "0x453b23",
   "impl": null,
   "thunk": "0x451940",
   "owner": "res",
   "lua_uses": 46,
   "observed_argc": {
    "3": 16,
    "4": 3,
    "5": 1,
    "6": 2,
    "7": 16,
    "8": 5,
    "9": 1,
    "34": 1
   }
  },
  {
   "name": "drawCompoSprite",
   "helper": "res",
   "registered_in": "0x4538b0",
   "call_site": "0x453b35",
   "impl": null,
   "thunk": "0x451bf0",
   "owner": "res",
   "lua_uses": 0,
   "observed_argc": {}
  },
  {
   "name": "drawString",
   "helper": "res",
   "registered_in": "0x4538b0",
   "call_site": "0x453b47",
   "impl": null,
   "thunk": "0x451c00",
   "owner": "res",
   "lua_uses": 15,
   "observed_argc": {
    "6": 15
   }
  },
  {
   "name": "setClipRect",
   "helper": "member",
   "registered_in": "0x4538b0",
   "call_site": "0x453b67",
   "impl": "0x450470",
   "thunk": "0x450d70",
   "owner": "res",
   "lua_uses": 2,
   "observed_argc": {
    "4": 2
   }
  },
  {
   "name": "getClipRect",
   "helper": "res",
   "registered_in": "0x4538b0",
   "call_site": "0x453b79",
   "impl": null,
   "thunk": "0x4504e0",
   "owner": "res",
   "lua_uses": 0,
   "observed_argc": {}
  },
  {
   "name": "getString",
   "helper": "member",
   "registered_in": "0x4538b0",
   "call_site": "0x453b99",
   "impl": "0x450fd0",
   "thunk": "0x4537c0",
   "owner": "res",
   "lua_uses": 35,
   "observed_argc": {
    "2": 33,
    "3": 1,
    "16": 1
   }
  },
  {
   "name": "playAudio",
   "helper": "res",
   "registered_in": "0x4538b0",
   "call_site": "0x453bab",
   "impl": null,
   "thunk": "0x451d80",
   "owner": "res",
   "lua_uses": 167,
   "observed_argc": {
    "1": 15,
    "3": 110,
    "4": 40
   }
  },
  {
   "name": "stopAudio",
   "helper": "res",
   "registered_in": "0x4538b0",
   "call_site": "0x453bbd",
   "impl": null,
   "thunk": "0x451e90",
   "owner": "res",
   "lua_uses": 43,
   "observed_argc": {
    "1": 41,
    "2": 1
   }
  },
  {
   "name": "stopAllAudio",
   "helper": "member",
   "registered_in": "0x4538b0",
   "call_site": "0x453bdd",
   "impl": "0x450560",
   "thunk": "0x450810",
   "owner": "res",
   "lua_uses": 13,
   "observed_argc": {
    "0": 13
   }
  },
  {
   "name": "isAudioPlaying",
   "helper": "res",
   "registered_in": "0x4538b0",
   "call_site": "0x453bef",
   "impl": null,
   "thunk": "0x451f70",
   "owner": "res",
   "lua_uses": 34,
   "observed_argc": {
    "1": 21,
    "3": 10,
    "5": 1,
    "9": 2
   }
  },
  {
   "name": "getSpriteBounds",
   "helper": "res",
   "registered_in": "0x4538b0",
   "call_site": "0x453c01",
   "impl": null,
   "thunk": "0x452070",
   "owner": "res",
   "lua_uses": 148,
   "observed_argc": {
    "1": 126,
    "2": 20
   }
  },
  {
   "name": "getSpritePivot",
   "helper": "res",
   "registered_in": "0x4538b0",
   "call_site": "0x453c13",
   "impl": null,
   "thunk": "0x452160",
   "owner": "res",
   "lua_uses": 54,
   "observed_argc": {
    "1": 41,
    "2": 12
   }
  },
  {
   "name": "getCompoSpriteBounds",
   "helper": "res",
   "registered_in": "0x4538b0",
   "call_site": "0x453c25",
   "impl": null,
   "thunk": "0x452250",
   "owner": "res",
   "lua_uses": 8,
   "observed_argc": {
    "1": 2,
    "2": 5
   }
  },
  {
   "name": "getCompoSpriteData",
   "helper": "res",
   "registered_in": "0x4538b0",
   "call_site": "0x453c37",
   "impl": null,
   "thunk": "0x452470",
   "owner": "res",
   "lua_uses": 0,
   "observed_argc": {}
  },
  {
   "name": "getCompoSpriteEntry",
   "helper": "res",
   "registered_in": "0x4538b0",
   "call_site": "0x453c49",
   "impl": null,
   "thunk": "0x4526f0",
   "owner": "res",
   "lua_uses": 0,
   "observed_argc": {}
  },
  {
   "name": "setCompoSpriteEntry",
   "helper": "res",
   "registered_in": "0x4538b0",
   "call_site": "0x453c5b",
   "impl": null,
   "thunk": "0x452a90",
   "owner": "res",
   "lua_uses": 0,
   "observed_argc": {}
  },
  {
   "name": "getStringWidth",
   "helper": "member",
   "registered_in": "0x4538b0",
   "call_site": "0x453c7b",
   "impl": "0x450be0",
   "thunk": "0x453810",
   "owner": "res",
   "lua_uses": 28,
   "observed_argc": {
    "1": 22,
    "3": 1,
    "4": 1,
    "8": 3,
    "17": 1
   }
  },
  {
   "name": "getFontMaxAscending",
   "helper": "member",
   "registered_in": "0x4538b0",
   "call_site": "0x453c9b",
   "impl": "0x450570",
   "thunk": "0x450dc0",
   "owner": "res",
   "lua_uses": 0,
   "observed_argc": {}
  },
  {
   "name": "getFontMaxDescending",
   "helper": "member",
   "registered_in": "0x4538b0",
   "call_site": "0x453cbb",
   "impl": "0x450590",
   "thunk": "0x450dc0",
   "owner": "res",
   "lua_uses": 0,
   "observed_argc": {}
  },
  {
   "name": "getFontLeading",
   "helper": "member",
   "registered_in": "0x4538b0",
   "call_site": "0x453cdb",
   "impl": "0x4505b0",
   "thunk": "0x450dc0",
   "owner": "res",
   "lua_uses": 39,
   "observed_argc": {
    "0": 26,
    "1": 11
   }
  },
  {
   "name": "getFontTracking",
   "helper": "member",
   "registered_in": "0x4538b0",
   "call_site": "0x453cfb",
   "impl": "0x4505d0",
   "thunk": "0x450dc0",
   "owner": "res",
   "lua_uses": 0,
   "observed_argc": {}
  },
  {
   "name": "getFontHeight",
   "helper": "member",
   "registered_in": "0x4538b0",
   "call_site": "0x453d1b",
   "impl": "0x4505f0",
   "thunk": "0x450dc0",
   "owner": "res",
   "lua_uses": 3,
   "observed_argc": {
    "0": 3
   }
  },
  {
   "name": "getLocale",
   "helper": "member",
   "registered_in": "0x4538b0",
   "call_site": "0x453d3b",
   "impl": "0x450f90",
   "thunk": "0x450f00",
   "owner": "res",
   "lua_uses": 9,
   "observed_argc": {
    "0": 8
   }
  },
  {
   "name": "startAudioOutput",
   "helper": "member",
   "registered_in": "0x4538b0",
   "call_site": "0x453d5b",
   "impl": "0x450610",
   "thunk": "0x43e9a0",
   "owner": "res",
   "lua_uses": 2,
   "observed_argc": {
    "0": 2
   }
  },
  {
   "name": "stopAudioOutput",
   "helper": "member",
   "registered_in": "0x4538b0",
   "call_site": "0x453d7b",
   "impl": "0x450620",
   "thunk": "0x450810",
   "owner": "res",
   "lua_uses": 1,
   "observed_argc": {
    "0": 1
   }
  },
  {
   "name": "startAudioInput",
   "helper": "member",
   "registered_in": "0x4538b0",
   "call_site": "0x453d9b",
   "impl": "0x450630",
   "thunk": "0x450810",
   "owner": "res",
   "lua_uses": 0,
   "observed_argc": {}
  },
  {
   "name": "stopAudioInput",
   "helper": "member",
   "registered_in": "0x4538b0",
   "call_site": "0x453dbb",
   "impl": "0x450640",
   "thunk": "0x450810",
   "owner": "res",
   "lua_uses": 0,
   "observed_argc": {}
  },
  {
   "name": "setMasterVolume",
   "helper": "member",
   "registered_in": "0x4538b0",
   "call_site": "0x453ddb",
   "impl": "0x450660",
   "thunk": "0x441650",
   "owner": "res",
   "lua_uses": 0,
   "observed_argc": {}
  },
  {
   "name": "setTrackVolume",
   "helper": "member",
   "registered_in": "0x4538b0",
   "call_site": "0x453dfb",
   "impl": "0x450680",
   "thunk": "0x450e20",
   "owner": "res",
   "lua_uses": 6,
   "observed_argc": {
    "2": 6
   }
  },
  {
   "name": "getTrackVolume",
   "helper": "member",
   "registered_in": "0x4538b0",
   "call_site": "0x453e1b",
   "impl": "0x4506b0",
   "thunk": "0x450e90",
   "owner": "res",
   "lua_uses": 15,
   "observed_argc": {
    "1": 15
   }
  },
  {
   "name": "openURL",
   "helper": "member",
   "registered_in": "0x4538b0",
   "call_site": "0x453e3b",
   "impl": "0x41fae0",
   "thunk": "0x453860",
   "owner": "res",
   "lua_uses": 13,
   "observed_argc": {
    "1": 12
   }
  }
 ],
 "registering_functions": {
  "0x43a620": 172,
  "0x4538b0": 51,
  "0x408610": 12,
  "0x416980": 10,
  "0x43f480": 6,
  "0x444870": 5,
  "0x43ec30": 3,
  "0x40f6b0": 1
 }
}`;export{n as default};
