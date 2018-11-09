TDV.PlayerAPI.defineScript({ "definitions": [
 {
  "thumbnailUrl": "media/panorama_F7AC0FB6_FA49_E27C_41DF_04888DD8730C_t.jpg",
  "hfov": 360,
  "hfovMax": 120,
  "id": "panorama_F7AC0FB6_FA49_E27C_41DF_04888DD8730C",
  "class": "Panorama",
  "partial": false,
  "frames": [
   {
    "thumbnailUrl": "media/panorama_F7AC0FB6_FA49_E27C_41DF_04888DD8730C_t.jpg",
    "stereoCube": {
     "levels": [
      {
       "height": 1536,
       "width": 18432,
       "url": "media/panorama_F7AC0FB6_FA49_E27C_41DF_04888DD8730C_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 1274,
       "width": 15288,
       "url": "media/panorama_F7AC0FB6_FA49_E27C_41DF_04888DD8730C.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    },
    "overlays": [
     {
      "useHandCursor": true,
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 57.83,
        "image": {
         "levels": [
          {
           "height": 84,
           "width": 200,
           "url": "media/panorama_F7AC0FB6_FA49_E27C_41DF_04888DD8730C_0_HS_0_1_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "yaw": -95.21,
        "pitch": -24.6
       }
      ],
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.showWindow(this.window_F5AB0087_FA48_5E1C_41DE_663A932245B4, null, false)",
        "mapColor": "#FF0000"
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "data": {
       "label": "Poligon"
      },
      "rollOverDisplay": true,
      "id": "overlay_F412698B_FA48_6E14_41E3_0421DF4EECEA",
      "items": [
       {
        "image": {
         "levels": [
          {
           "height": 359,
           "width": 848,
           "url": "media/panorama_F7AC0FB6_FA49_E27C_41DF_04888DD8730C_0_HS_0_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "yaw": -95.21,
        "hfov": 57.83,
        "class": "HotspotPanoramaOverlayImage",
        "roll": 0,
        "pitch": -24.6
       }
      ]
     },
     {
      "useHandCursor": true,
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 24.48,
        "image": {
         "levels": [
          {
           "height": 16,
           "width": 19,
           "url": "media/panorama_F7AC0FB6_FA49_E27C_41DF_04888DD8730C_0_HS_1_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "yaw": -62.93,
        "pitch": 6.06
       }
      ],
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "enabledInCardboard": true,
      "class": "HotspotPanoramaOverlay",
      "data": {
       "label": "y este cuadro! oh es chillida!"
      },
      "rollOverDisplay": false,
      "id": "overlay_F5F01717_FA48_623C_41B9_4970E3821719",
      "items": [
       {
        "image": {
         "levels": [
          {
           "height": 276,
           "width": 329,
           "url": "media/panorama_F7AC0FB6_FA49_E27C_41DF_04888DD8730C_0_HS_1_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "yaw": -62.93,
        "hfov": 24.48,
        "class": "HotspotPanoramaOverlayImage",
        "pitch": 6.06
       }
      ]
     },
     {
      "useHandCursor": true,
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 39.1,
        "image": {
         "levels": [
          {
           "height": 116,
           "width": 200,
           "url": "media/panorama_F7AC0FB6_FA49_E27C_41DF_04888DD8730C_0_HS_2_1_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "yaw": -95.09,
        "pitch": 5.81
       }
      ],
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.showWindow(this.window_EA299ECF_FA48_622B_41D8_EFB546C19A83, null, true); this.playList_EE011348_FA58_2214_41ED_AF609F746F2D.set('selectedIndex', 0); ; this.viewer_uidEE014348_FA58_2214_41EB_D2890C4EEA7DVideoPlayer.play(); ",
        "mapColor": "#FF0000"
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "data": {
       "label": "Poligon"
      },
      "rollOverDisplay": false,
      "id": "overlay_EA4CCA0D_FA48_222F_41D2_545804756567",
      "items": [
       {
        "image": {
         "levels": [
          {
           "height": 317,
           "width": 545,
           "url": "media/panorama_F7AC0FB6_FA49_E27C_41DF_04888DD8730C_0_HS_2_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "yaw": -95.09,
        "hfov": 39.1,
        "class": "HotspotPanoramaOverlayImage",
        "roll": 0,
        "pitch": 5.81
       }
      ]
     },
     {
      "bleaching": 0.7,
      "bleachingDistance": 0.4,
      "id": "overlay_EA3E8E3C_FA7B_E26C_41E1_B8AE0AADAC1F",
      "class": "LensFlarePanoramaOverlay",
      "yaw": -137.79,
      "pitch": 12.59
     },
     {
      "useHandCursor": true,
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 18.55,
        "image": {
         "levels": [
          {
           "height": 112,
           "width": 143,
           "url": "media/panorama_F7AC0FB6_FA49_E27C_41DF_04888DD8730C_0_HS_3_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "yaw": 3.8,
        "pitch": -29.95
       }
      ],
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_F419A5F6_FA48_21FD_41D0_498F6C69C9F3, this.camera_EE0D2360_FA58_2214_41E3_A23D814B4096); this.mainPlayList.set('selectedIndex', 1)",
        "mapColor": "#FF0000"
       }
      ],
      "enabledInCardboard": true,
      "class": "HotspotPanoramaOverlay",
      "data": {
       "label": "Image"
      },
      "rollOverDisplay": false,
      "id": "overlay_EE80E462_FA48_6614_41C4_4F1C9C9A42AE",
      "items": [
       {
        "image": {
         "levels": [
          {
           "height": 224,
           "width": 287,
           "url": "media/panorama_F7AC0FB6_FA49_E27C_41DF_04888DD8730C_0_HS_3_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "yaw": 3.8,
        "hfov": 18.55,
        "class": "HotspotPanoramaOverlayImage",
        "pitch": -29.95
       }
      ]
     }
    ],
    "class": "CubicPanoramaFrame"
   }
  ],
  "pitch": 0,
  "label": "ESPRONCEDA VISTA INTERIOR VR",
  "adjacentPanoramas": [
   {
    "panorama": {
     "thumbnailUrl": "media/panorama_F419A5F6_FA48_21FD_41D0_498F6C69C9F3_t.jpg",
     "hfov": 360,
     "hfovMax": 120,
     "id": "panorama_F419A5F6_FA48_21FD_41D0_498F6C69C9F3",
     "class": "Panorama",
     "partial": false,
     "frames": [
      {
       "thumbnailUrl": "media/panorama_F419A5F6_FA48_21FD_41D0_498F6C69C9F3_t.jpg",
       "stereoCube": {
        "levels": [
         {
          "height": 1536,
          "width": 18432,
          "url": "media/panorama_F419A5F6_FA48_21FD_41D0_498F6C69C9F3_hq.jpeg",
          "class": "ImageResourceLevel"
         },
         {
          "height": 1274,
          "width": 15288,
          "url": "media/panorama_F419A5F6_FA48_21FD_41D0_498F6C69C9F3.jpeg",
          "class": "ImageResourceLevel"
         }
        ],
        "class": "ImageResource"
       },
       "overlays": [
        {
         "useHandCursor": true,
         "maps": [
          {
           "class": "HotspotPanoramaOverlayMap",
           "hfov": 14.33,
           "image": {
            "levels": [
             {
              "height": 96,
              "width": 96,
              "url": "media/panorama_F419A5F6_FA48_21FD_41D0_498F6C69C9F3_0_HS_1_0_0_map.gif",
              "class": "ImageResourceLevel"
             }
            ],
            "class": "ImageResource"
           },
           "yaw": -90.94,
           "pitch": 0.4
          }
         ],
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "click": "this.startPanoramaWithCamera(this.panorama_F7AC0FB6_FA49_E27C_41DF_04888DD8730C, this.camera_EEFB6370_FA58_22F4_41D1_619DD9D22E87); this.mainPlayList.set('selectedIndex', 0)",
           "mapColor": "#FF0000"
          }
         ],
         "enabledInCardboard": true,
         "class": "HotspotPanoramaOverlay",
         "data": {
          "label": "Image"
         },
         "rollOverDisplay": false,
         "id": "overlay_EFB1B8D1_FA48_2E37_41EE_1E57A3F4535D",
         "items": [
          {
           "image": {
            "levels": [
             {
              "height": 192,
              "width": 192,
              "url": "media/panorama_F419A5F6_FA48_21FD_41D0_498F6C69C9F3_0_HS_1_0.png",
              "class": "ImageResourceLevel"
             }
            ],
            "class": "ImageResource"
           },
           "yaw": -90.94,
           "hfov": 14.33,
           "class": "HotspotPanoramaOverlayImage",
           "pitch": 0.4
          }
         ]
        }
       ],
       "class": "CubicPanoramaFrame"
      }
     ],
     "pitch": 0,
     "label": "VR2",
     "adjacentPanoramas": [
      {
       "panorama": "this.panorama_F7AC0FB6_FA49_E27C_41DF_04888DD8730C",
       "yaw": -90.94,
       "backwardYaw": 3.8,
       "distance": 1,
       "class": "AdjacentPanorama"
      }
     ],
     "vfov": 180,
     "hfovMin": 60
    },
    "yaw": 3.8,
    "backwardYaw": -90.94,
    "distance": 1,
    "class": "AdjacentPanorama"
   }
  ],
  "vfov": 180,
  "hfovMin": 60
 },
 {
  "buttonMoveUp": {
   "horizontalAlign": "center",
   "verticalAlign": "middle",
   "iconURL": "skin/IconButton_52D2AE7E_5F01_65BC_41C0_0D9AC1FD02F0.png",
   "paddingRight": 0,
   "mode": "push",
   "paddingLeft": 0,
   "width": 40,
   "height": 40,
   "transparencyActive": true,
   "borderSize": 0,
   "rollOverIconURL": "skin/IconButton_52D2AE7E_5F01_65BC_41C0_0D9AC1FD02F0_rollover.png",
   "pressedIconURL": "skin/IconButton_52D2AE7E_5F01_65BC_41C0_0D9AC1FD02F0_pressed.png",
   "minWidth": 0,
   "shadow": false,
   "paddingTop": 0,
   "cursor": "hand",
   "id": "IconButton_52D2AE7E_5F01_65BC_41C0_0D9AC1FD02F0",
   "class": "IconButton",
   "data": {
    "name": "Button8709"
   },
   "borderRadius": 0,
   "backgroundOpacity": 0,
   "minHeight": 0,
   "paddingBottom": 0
  },
  "gyroscopeVerticalDraggingEnabled": true,
  "buttonPlayLeft": {
   "horizontalAlign": "center",
   "verticalAlign": "middle",
   "iconURL": "skin/IconButton_52D2AE7E_5F01_65BC_41BD_FF5C3FFC5E7D.png",
   "paddingRight": 0,
   "mode": "push",
   "paddingLeft": 0,
   "width": 40,
   "height": 40,
   "transparencyActive": true,
   "borderSize": 0,
   "rollOverIconURL": "skin/IconButton_52D2AE7E_5F01_65BC_41BD_FF5C3FFC5E7D_rollover.png",
   "pressedIconURL": "skin/IconButton_52D2AE7E_5F01_65BC_41BD_FF5C3FFC5E7D_pressed.png",
   "minWidth": 0,
   "shadow": false,
   "paddingTop": 0,
   "cursor": "hand",
   "id": "IconButton_52D2AE7E_5F01_65BC_41BD_FF5C3FFC5E7D",
   "class": "IconButton",
   "data": {
    "name": "Button8706"
   },
   "borderRadius": 0,
   "backgroundOpacity": 0,
   "minHeight": 0,
   "paddingBottom": 0
  },
  "buttonMoveRight": {
   "horizontalAlign": "center",
   "verticalAlign": "middle",
   "iconURL": "skin/IconButton_52D2AE7E_5F01_65BC_41CE_DD2209EF2508.png",
   "paddingRight": 0,
   "mode": "push",
   "paddingLeft": 0,
   "width": 40,
   "height": 40,
   "transparencyActive": true,
   "borderSize": 0,
   "rollOverIconURL": "skin/IconButton_52D2AE7E_5F01_65BC_41CE_DD2209EF2508_rollover.png",
   "pressedIconURL": "skin/IconButton_52D2AE7E_5F01_65BC_41CE_DD2209EF2508_pressed.png",
   "minWidth": 0,
   "shadow": false,
   "paddingTop": 0,
   "cursor": "hand",
   "id": "IconButton_52D2AE7E_5F01_65BC_41CE_DD2209EF2508",
   "class": "IconButton",
   "data": {
    "name": "Button8712"
   },
   "borderRadius": 0,
   "backgroundOpacity": 0,
   "minHeight": 0,
   "paddingBottom": 0
  },
  "buttonPlayRight": {
   "horizontalAlign": "center",
   "verticalAlign": "middle",
   "iconURL": "skin/IconButton_52D2AE7E_5F01_65BC_41B6_407705DA163F.png",
   "paddingRight": 0,
   "mode": "push",
   "paddingLeft": 0,
   "width": 40,
   "height": 40,
   "transparencyActive": true,
   "borderSize": 0,
   "rollOverIconURL": "skin/IconButton_52D2AE7E_5F01_65BC_41B6_407705DA163F_rollover.png",
   "pressedIconURL": "skin/IconButton_52D2AE7E_5F01_65BC_41B6_407705DA163F_pressed.png",
   "minWidth": 0,
   "shadow": false,
   "paddingTop": 0,
   "cursor": "hand",
   "id": "IconButton_52D2AE7E_5F01_65BC_41B6_407705DA163F",
   "class": "IconButton",
   "data": {
    "name": "Button8713"
   },
   "borderRadius": 0,
   "backgroundOpacity": 0,
   "minHeight": 0,
   "paddingBottom": 0
  },
  "buttonMoveLeft": {
   "horizontalAlign": "center",
   "verticalAlign": "middle",
   "iconURL": "skin/IconButton_52D2AE7E_5F01_65BC_41D1_D21E9D38C036.png",
   "paddingRight": 0,
   "mode": "push",
   "paddingLeft": 0,
   "width": 40,
   "height": 40,
   "transparencyActive": true,
   "borderSize": 0,
   "rollOverIconURL": "skin/IconButton_52D2AE7E_5F01_65BC_41D1_D21E9D38C036_rollover.png",
   "pressedIconURL": "skin/IconButton_52D2AE7E_5F01_65BC_41D1_D21E9D38C036_pressed.png",
   "minWidth": 0,
   "shadow": false,
   "paddingTop": 0,
   "cursor": "hand",
   "id": "IconButton_52D2AE7E_5F01_65BC_41D1_D21E9D38C036",
   "class": "IconButton",
   "data": {
    "name": "Button8707"
   },
   "borderRadius": 0,
   "backgroundOpacity": 0,
   "minHeight": 0,
   "paddingBottom": 0
  },
  "buttonPause": {
   "horizontalAlign": "center",
   "verticalAlign": "middle",
   "iconURL": "skin/IconButton_52D2AE7E_5F01_65BC_41D2_983083226CD2.png",
   "paddingRight": 0,
   "mode": "toggle",
   "paddingLeft": 0,
   "width": 40,
   "height": 40,
   "transparencyActive": true,
   "borderSize": 0,
   "pressedIconURL": "skin/IconButton_52D2AE7E_5F01_65BC_41D2_983083226CD2_pressed.png",
   "minWidth": 0,
   "shadow": false,
   "paddingTop": 0,
   "cursor": "hand",
   "id": "IconButton_52D2AE7E_5F01_65BC_41D2_983083226CD2",
   "class": "IconButton",
   "data": {
    "name": "Button8710"
   },
   "borderRadius": 0,
   "backgroundOpacity": 0,
   "minHeight": 0,
   "paddingBottom": 0
  },
  "touchControlMode": "drag_rotation",
  "buttonMoveDown": {
   "horizontalAlign": "center",
   "verticalAlign": "middle",
   "iconURL": "skin/IconButton_52D2AE7E_5F01_65BC_4189_6A3B617D11B4.png",
   "paddingRight": 0,
   "mode": "push",
   "paddingLeft": 0,
   "width": 40,
   "height": 40,
   "transparencyActive": true,
   "borderSize": 0,
   "rollOverIconURL": "skin/IconButton_52D2AE7E_5F01_65BC_4189_6A3B617D11B4_rollover.png",
   "pressedIconURL": "skin/IconButton_52D2AE7E_5F01_65BC_4189_6A3B617D11B4_pressed.png",
   "minWidth": 0,
   "shadow": false,
   "paddingTop": 0,
   "cursor": "hand",
   "id": "IconButton_52D2AE7E_5F01_65BC_4189_6A3B617D11B4",
   "class": "IconButton",
   "data": {
    "name": "Button8711"
   },
   "borderRadius": 0,
   "backgroundOpacity": 0,
   "minHeight": 0,
   "paddingBottom": 0
  },
  "displayPlaybackBar": true,
  "preloadEnabled": false,
  "id": "MainViewerPanoramaPlayer",
  "viewerArea": "this.MainViewer",
  "class": "PanoramaPlayer",
  "buttonRestart": {
   "horizontalAlign": "center",
   "verticalAlign": "middle",
   "iconURL": "skin/IconButton_52D2AE7E_5F01_65BC_41D5_F0DD57A13E9E.png",
   "paddingRight": 0,
   "mode": "push",
   "paddingLeft": 0,
   "width": 40,
   "height": 40,
   "transparencyActive": true,
   "borderSize": 0,
   "rollOverIconURL": "skin/IconButton_52D2AE7E_5F01_65BC_41D5_F0DD57A13E9E_rollover.png",
   "pressedIconURL": "skin/IconButton_52D2AE7E_5F01_65BC_41D5_F0DD57A13E9E_pressed.png",
   "minWidth": 0,
   "shadow": false,
   "paddingTop": 0,
   "cursor": "hand",
   "id": "IconButton_52D2AE7E_5F01_65BC_41D5_F0DD57A13E9E",
   "class": "IconButton",
   "data": {
    "name": "Button8705"
   },
   "borderRadius": 0,
   "backgroundOpacity": 0,
   "minHeight": 0,
   "paddingBottom": 0
  },
  "buttonZoomIn": {
   "horizontalAlign": "center",
   "verticalAlign": "middle",
   "iconURL": "skin/IconButton_52D2AE7E_5F01_65BC_41D3_A0DC49375B84.png",
   "paddingRight": 0,
   "mode": "push",
   "paddingLeft": 0,
   "width": 40,
   "height": 40,
   "transparencyActive": true,
   "borderSize": 0,
   "rollOverIconURL": "skin/IconButton_52D2AE7E_5F01_65BC_41D3_A0DC49375B84_rollover.png",
   "pressedIconURL": "skin/IconButton_52D2AE7E_5F01_65BC_41D3_A0DC49375B84_pressed.png",
   "minWidth": 0,
   "shadow": false,
   "paddingTop": 0,
   "cursor": "hand",
   "id": "IconButton_52D2AE7E_5F01_65BC_41D3_A0DC49375B84",
   "class": "IconButton",
   "data": {
    "name": "Button8715"
   },
   "borderRadius": 0,
   "backgroundOpacity": 0,
   "minHeight": 0,
   "paddingBottom": 0
  },
  "buttonZoomOut": {
   "horizontalAlign": "center",
   "verticalAlign": "middle",
   "iconURL": "skin/IconButton_52D2AE7E_5F01_65BC_41B2_1643EF9CD4CB.png",
   "paddingRight": 0,
   "mode": "push",
   "paddingLeft": 0,
   "width": 40,
   "height": 40,
   "transparencyActive": true,
   "borderSize": 0,
   "rollOverIconURL": "skin/IconButton_52D2AE7E_5F01_65BC_41B2_1643EF9CD4CB_rollover.png",
   "pressedIconURL": "skin/IconButton_52D2AE7E_5F01_65BC_41B2_1643EF9CD4CB_pressed.png",
   "minWidth": 0,
   "shadow": false,
   "paddingTop": 0,
   "cursor": "hand",
   "id": "IconButton_52D2AE7E_5F01_65BC_41B2_1643EF9CD4CB",
   "class": "IconButton",
   "data": {
    "name": "Button8704"
   },
   "borderRadius": 0,
   "backgroundOpacity": 0,
   "minHeight": 0,
   "paddingBottom": 0
  },
  "mouseControlMode": "drag_acceleration"
 },
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -1.33,
   "pitch": 0.42
  },
  "id": "panorama_F7AC0FB6_FA49_E27C_41DF_04888DD8730C_camera",
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "id": "sequence_E86149E6_FA78_2E1D_41E1_92BA7F862D43",
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  }
 },
 "this.panorama_F419A5F6_FA48_21FD_41D0_498F6C69C9F3",
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "id": "panorama_F419A5F6_FA48_21FD_41D0_498F6C69C9F3_camera",
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "thumbnailUrl": "media/video_F5A860A4_FA78_3E1D_41E4_0D89CE731606_t.jpg",
  "label": "multi-resolution research low",
  "video": {
   "height": 404,
   "mp4Url": "media/video_F5A860A4_FA78_3E1D_41E4_0D89CE731606.mp4",
   "width": 720,
   "class": "VideoResource"
  },
  "width": 720,
  "id": "video_F5A860A4_FA78_3E1D_41E4_0D89CE731606",
  "loop": false,
  "class": "Video",
  "height": 404,
  "scaleMode": "fit_inside"
 },
 {
  "displayPlaybackBar": true,
  "id": "MainViewerVideoPlayer",
  "viewerArea": "this.MainViewer",
  "class": "VideoPlayer",
  "buttonRestart": "this.IconButton_52D2AE7E_5F01_65BC_41D5_F0DD57A13E9E",
  "buttonPause": "this.IconButton_52D2AE7E_5F01_65BC_41D2_983083226CD2"
 },
 {
  "items": [
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
    "media": "this.panorama_F7AC0FB6_FA49_E27C_41DF_04888DD8730C",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_F7AC0FB6_FA49_E27C_41DF_04888DD8730C_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
    "media": "this.panorama_F419A5F6_FA48_21FD_41D0_498F6C69C9F3",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_F419A5F6_FA48_21FD_41D0_498F6C69C9F3_camera"
   },
   {
    "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer); this.setEndToItemIndex(this.mainPlayList, 2, 0)",
    "media": "this.video_F5A860A4_FA78_3E1D_41E4_0D89CE731606",
    "class": "VideoPlayListItem",
    "player": "this.MainViewerVideoPlayer",
    "end": "this.trigger('tourEnded')",
    "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.mainPlayList, 2, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.mainPlayList, 2, this.video_F5A860A4_FA78_3E1D_41E4_0D89CE731606)"
   }
  ],
  "id": "mainPlayList",
  "class": "PlayList"
 },
 {
  "items": [
   {
    "begin": "this.fixTogglePlayPauseButton(this.viewer_uidEE014348_FA58_2214_41EB_D2890C4EEA7DVideoPlayer)",
    "media": "this.video_F5A860A4_FA78_3E1D_41E4_0D89CE731606",
    "class": "VideoPlayListItem",
    "player": {
     "displayPlaybackBar": true,
     "id": "viewer_uidEE014348_FA58_2214_41EB_D2890C4EEA7DVideoPlayer",
     "viewerArea": {
      "toolTipFontColor": "#606060",
      "toolTipPaddingLeft": 6,
      "progressOpacity": 1,
      "paddingRight": 0,
      "progressBarBorderColor": "#000000",
      "transitionMode": "blending",
      "toolTipOpacity": 1,
      "toolTipTextShadowOpacity": 0,
      "playbackBarHeadBorderSize": 0,
      "playbackBarHeadShadowOpacity": 0.7,
      "progressLeft": 10,
      "transitionDuration": 500,
      "progressBarBackgroundColorRatios": [
       0,
       1
      ],
      "playbackBarHeadShadowHorizontalLength": 0,
      "playbackBarHeadShadowVerticalLength": 0,
      "toolTipFontFamily": "Arial",
      "shadow": false,
      "playbackBarHeadOpacity": 1,
      "playbackBarHeadShadowColor": "#000000",
      "progressBackgroundOpacity": 1,
      "toolTipPaddingTop": 4,
      "toolTipShadowSpread": 0,
      "paddingTop": 0,
      "progressRight": 10,
      "playbackBarHeadBackgroundColor": [
       "#111111",
       "#666666"
      ],
      "playbackBarHeadShadowBlurRadius": 3,
      "class": "ViewerArea",
      "borderRadius": 0,
      "toolTipBackgroundColor": "#F6F6F6",
      "minHeight": 50,
      "progressBorderSize": 2,
      "toolTipBorderRadius": 3,
      "progressBarBackgroundColor": [
       "#222222",
       "#444444"
      ],
      "toolTipShadowOpacity": 1,
      "progressBarBackgroundColorDirection": "vertical",
      "progressBackgroundColor": [
       "#EEEEEE",
       "#CCCCCC"
      ],
      "playbackBarProgressOpacity": 1,
      "playbackBarBackgroundColorDirection": "vertical",
      "playbackBarProgressBackgroundColorDirection": "vertical",
      "playbackBarRight": 0,
      "playbackBarBorderSize": 2,
      "toolTipTextShadowColor": "#000000",
      "paddingBottom": 0,
      "paddingLeft": 0,
      "progressBorderRadius": 4,
      "progressBackgroundColorRatios": [
       0,
       1
      ],
      "toolTipShadowBlurRadius": 3,
      "playbackBarBorderColor": "#AAAAAA",
      "playbackBarHeadBackgroundColorRatios": [
       0,
       1
      ],
      "toolTipShadowColor": "#333333",
      "toolTipShadowHorizontalLength": 0,
      "playbackBarBackgroundOpacity": 1,
      "width": "100%",
      "borderSize": 0,
      "toolTipBorderSize": 1,
      "playbackBarOpacity": 1,
      "playbackBarBackgroundColor": [
       "#EEEEEE",
       "#CCCCCC"
      ],
      "minWidth": 100,
      "playbackBarHeadShadow": true,
      "toolTipFontWeight": "normal",
      "height": "50%",
      "playbackBarHeadBackgroundColorDirection": "vertical",
      "playbackBarBorderRadius": 4,
      "toolTipBorderColor": "#767676",
      "playbackBarProgressBorderColor": "#000000",
      "toolTipFontStyle": "normal",
      "progressBottom": 2,
      "progressBackgroundColorDirection": "vertical",
      "progressBarOpacity": 1,
      "toolTipFontSize": 12,
      "toolTipShadowVerticalLength": 0,
      "toolTipPaddingBottom": 4,
      "playbackBarHeight": 20,
      "toolTipTextShadowBlurRadius": 3,
      "playbackBarProgressBackgroundColorRatios": [
       0,
       1
      ],
      "playbackBarHeadBorderColor": "#000000",
      "toolTipPaddingRight": 6,
      "playbackBarProgressBorderSize": 0,
      "id": "viewer_uidEE014348_FA58_2214_41EB_D2890C4EEA7D",
      "playbackBarHeadHeight": 30,
      "playbackBarLeft": 0,
      "toolTipDisplayTime": 600,
      "progressBarBorderSize": 0,
      "playbackBarHeadBorderRadius": 0,
      "playbackBarProgressBackgroundColor": [
       "#222222",
       "#444444"
      ],
      "playbackBarBottom": 0,
      "progressBarBorderRadius": 4,
      "playbackBarProgressBorderRadius": 0,
      "progressHeight": 20,
      "progressBorderColor": "#AAAAAA",
      "playbackBarHeadWidth": 6
     },
     "class": "VideoPlayer",
     "buttonRestart": "this.IconButton_52D2AE7E_5F01_65BC_41D5_F0DD57A13E9E",
     "buttonPause": "this.IconButton_52D2AE7E_5F01_65BC_41D2_983083226CD2"
    },
    "start": "this.viewer_uidEE014348_FA58_2214_41EB_D2890C4EEA7DVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_EE011348_FA58_2214_41ED_AF609F746F2D, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_EE011348_FA58_2214_41ED_AF609F746F2D, 0, this.video_F5A860A4_FA78_3E1D_41E4_0D89CE731606)"
   }
  ],
  "id": "playList_EE011348_FA58_2214_41ED_AF609F746F2D",
  "class": "PlayList"
 },
 {
  "shadowOpacity": 0.5,
  "backgroundColor": [],
  "headerVerticalAlign": "middle",
  "paddingRight": 0,
  "bodyBackgroundColorDirection": "vertical",
  "footerBackgroundColorRatios": [
   0,
   0.9,
   1
  ],
  "veilOpacity": 0.4,
  "modal": true,
  "headerBorderColor": "#000000",
  "closeButtonBorderRadius": 11,
  "titlePaddingRight": 5,
  "shadowVerticalLength": 0,
  "hideEffect": {
   "easing": "cubic_in_out",
   "duration": 500,
   "class": "FadeOutEffect"
  },
  "closeButtonIconColor": "#000000",
  "closeButtonIconWidth": 12,
  "title": "ve que bonito sofa!",
  "bodyPaddingRight": 5,
  "shadowHorizontalLength": 3,
  "shadow": true,
  "titlePaddingLeft": 5,
  "showEffect": {
   "easing": "cubic_in_out",
   "duration": 500,
   "class": "FadeInEffect"
  },
  "scrollBarWidth": 10,
  "creationPolicy": "delayed",
  "gap": 10,
  "bodyBackgroundColor": [
   "#FFFFFF",
   "#DDDDDD",
   "#FFFFFF"
  ],
  "paddingTop": 0,
  "footerBackgroundColor": [
   "#FFFFFF",
   "#EEEEEE",
   "#DDDDDD"
  ],
  "titleFontFamily": "Arial",
  "class": "Window",
  "bodyPaddingLeft": 5,
  "shadowColor": "#000000",
  "scrollBarOpacity": 0.5,
  "titleFontColor": "#000000",
  "borderRadius": 5,
  "backgroundColorRatios": [],
  "closeButtonIconHeight": 12,
  "minHeight": 20,
  "titleFontSize": 14,
  "backgroundOpacity": 1,
  "headerPaddingLeft": 10,
  "veilColorRatios": [
   0,
   1
  ],
  "closeButtonRollOverBackgroundColor": [
   "#C13535"
  ],
  "headerBorderSize": 0,
  "horizontalAlign": "center",
  "titleFontWeight": "normal",
  "headerPaddingTop": 10,
  "paddingBottom": 0,
  "titleFontStyle": "normal",
  "titleTextDecoration": "none",
  "children": [
   {
    "scrollBarMargin": 2,
    "paddingRight": 10,
    "paddingLeft": 10,
    "width": "100%",
    "height": "33%",
    "borderSize": 0,
    "minWidth": 0,
    "scrollBarVisible": "rollOver",
    "shadow": false,
    "scrollBarWidth": 10,
    "paddingTop": 10,
    "id": "htmlText_uidEE190345_FA58_221C_41DD_F5EEFBF6E3EE",
    "html": "<div style=\"text-align:left; color:#000; \"><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p></div>",
    "class": "HTMLText",
    "data": {
     "name": "HTMLText12364"
    },
    "borderRadius": 0,
    "scrollBarColor": "#000000",
    "scrollBarOpacity": 0.5,
    "backgroundOpacity": 0,
    "minHeight": 0,
    "paddingBottom": 10
   },
   {
    "horizontalAlign": "center",
    "verticalAlign": "middle",
    "paddingRight": 0,
    "paddingLeft": 0,
    "width": "100%",
    "height": "33%",
    "url": "media/photo_EAF45C5F_FA48_662A_41D2_0204FC54BDED.jpg",
    "borderSize": 0,
    "minWidth": 0,
    "shadow": false,
    "scaleMode": "fit_inside",
    "paddingTop": 0,
    "id": "image_uidEE190345_FA58_221C_41DD_F5EEFBF6E3EE_1",
    "class": "Image",
    "data": {
     "name": "Image12365"
    },
    "borderRadius": 0,
    "backgroundOpacity": 0,
    "minHeight": 0,
    "paddingBottom": 0
   },
   {
    "backgroundColor": [],
    "paddingRight": 0,
    "paddingLeft": 0,
    "width": "100%",
    "url": "http://glitchdesign.es",
    "borderSize": 0,
    "minWidth": 0,
    "height": "33%",
    "shadow": false,
    "insetBorder": false,
    "paddingTop": 0,
    "backgroundColorDirection": "vertical",
    "class": "WebFrame",
    "data": {
     "name": "WebFrame5642"
    },
    "borderRadius": 0,
    "backgroundColorRatios": [],
    "minHeight": 0,
    "backgroundOpacity": 1,
    "scrollEnabled": true,
    "paddingBottom": 0
   }
  ],
  "verticalAlign": "middle",
  "headerBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "scrollBarMargin": 2,
  "veilShowEffect": {
   "easing": "cubic_in_out",
   "duration": 500,
   "class": "FadeInEffect"
  },
  "veilColor": [
   "#000000",
   "#000000"
  ],
  "layout": "vertical",
  "closeButtonBackgroundColor": [],
  "closeButtonRollOverIconColor": "#FFFFFF",
  "paddingLeft": 0,
  "width": 400,
  "bodyBorderSize": 0,
  "veilHideEffect": {
   "easing": "cubic_in_out",
   "duration": 500,
   "class": "FadeOutEffect"
  },
  "height": 600,
  "borderSize": 0,
  "minWidth": 20,
  "bodyBackgroundColorRatios": [
   0,
   0.5,
   1
  ],
  "headerBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "scrollBarVisible": "rollOver",
  "closeButtonPressedBackgroundColorRatios": [
   0
  ],
  "headerBackgroundColorDirection": "vertical",
  "closeButtonPressedIconColor": "#FFFFFF",
  "bodyPaddingTop": 5,
  "closeButtonIconLineWidth": 2,
  "footerBackgroundColorDirection": "vertical",
  "shadowBlurRadius": 6,
  "bodyPaddingBottom": 5,
  "bodyBackgroundOpacity": 1,
  "headerBackgroundOpacity": 1,
  "backgroundColorDirection": "vertical",
  "id": "window_F5AB0087_FA48_5E1C_41DE_663A932245B4",
  "shadowSpread": 1,
  "headerPaddingBottom": 10,
  "contentOpaque": false,
  "titlePaddingBottom": 5,
  "closeButtonPressedBackgroundColor": [
   "#3A1D1F"
  ],
  "scrollBarColor": "#000000",
  "bodyBorderColor": "#000000",
  "footerHeight": 5,
  "overflow": "scroll",
  "closeButtonBackgroundColorRatios": [],
  "closeButtonRollOverBackgroundColorRatios": [
   0
  ],
  "headerPaddingRight": 10,
  "titlePaddingTop": 5,
  "data": {
   "name": "Window4929"
  },
  "veilColorDirection": "horizontal"
 },
 {
  "shadowOpacity": 0.5,
  "backgroundColor": [],
  "headerVerticalAlign": "middle",
  "paddingRight": 0,
  "bodyBackgroundColorDirection": "vertical",
  "footerBackgroundColorRatios": [
   0,
   0.9,
   1
  ],
  "veilOpacity": 0.4,
  "modal": true,
  "headerBorderColor": "#000000",
  "closeButtonBorderRadius": 11,
  "titlePaddingRight": 5,
  "shadowVerticalLength": 0,
  "hideEffect": {
   "easing": "cubic_in_out",
   "duration": 500,
   "class": "FadeOutEffect"
  },
  "closeButtonIconColor": "#000000",
  "closeButtonIconWidth": 12,
  "title": "art!!",
  "bodyPaddingRight": 5,
  "shadowHorizontalLength": 3,
  "shadow": true,
  "titlePaddingLeft": 5,
  "showEffect": {
   "easing": "cubic_in_out",
   "duration": 500,
   "class": "FadeInEffect"
  },
  "scrollBarWidth": 10,
  "creationPolicy": "delayed",
  "gap": 10,
  "bodyBackgroundColor": [
   "#FFFFFF",
   "#DDDDDD",
   "#FFFFFF"
  ],
  "paddingTop": 0,
  "footerBackgroundColor": [
   "#FFFFFF",
   "#EEEEEE",
   "#DDDDDD"
  ],
  "titleFontFamily": "Arial",
  "class": "Window",
  "bodyPaddingLeft": 5,
  "shadowColor": "#000000",
  "scrollBarOpacity": 0.5,
  "borderRadius": 5,
  "backgroundColorRatios": [],
  "closeButtonIconHeight": 12,
  "titleFontColor": "#000000",
  "minHeight": 20,
  "titleFontSize": 14,
  "backgroundOpacity": 1,
  "headerPaddingLeft": 10,
  "veilColorRatios": [
   0,
   1
  ],
  "closeButtonRollOverBackgroundColor": [
   "#C13535"
  ],
  "headerBorderSize": 0,
  "horizontalAlign": "center",
  "titleFontWeight": "normal",
  "headerPaddingTop": 10,
  "paddingBottom": 0,
  "titleFontStyle": "normal",
  "titleTextDecoration": "none",
  "children": [
   {
    "scrollBarMargin": 2,
    "paddingRight": 10,
    "paddingLeft": 10,
    "width": "100%",
    "height": "50%",
    "borderSize": 0,
    "minWidth": 0,
    "scrollBarVisible": "rollOver",
    "shadow": false,
    "scrollBarWidth": 10,
    "paddingTop": 10,
    "id": "htmlText_uidEE010347_FA58_221C_4190_448E67297CB2",
    "html": "<div style=\"text-align:left; color:#000; \"><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p></div>",
    "class": "HTMLText",
    "data": {
     "name": "HTMLText12366"
    },
    "borderRadius": 0,
    "scrollBarColor": "#000000",
    "scrollBarOpacity": 0.5,
    "backgroundOpacity": 0,
    "minHeight": 0,
    "paddingBottom": 10
   },
   "this.viewer_uidEE014348_FA58_2214_41EB_D2890C4EEA7D"
  ],
  "verticalAlign": "middle",
  "headerBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "scrollBarMargin": 2,
  "veilShowEffect": {
   "easing": "cubic_in_out",
   "duration": 500,
   "class": "FadeInEffect"
  },
  "veilColor": [
   "#000000",
   "#000000"
  ],
  "layout": "vertical",
  "closeButtonBackgroundColor": [],
  "closeButtonRollOverIconColor": "#FFFFFF",
  "paddingLeft": 0,
  "width": 400,
  "veilHideEffect": {
   "easing": "cubic_in_out",
   "duration": 500,
   "class": "FadeOutEffect"
  },
  "height": 600,
  "borderSize": 0,
  "minWidth": 20,
  "bodyBackgroundColorRatios": [
   0,
   0.5,
   1
  ],
  "headerBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "scrollBarVisible": "rollOver",
  "closeButtonPressedBackgroundColorRatios": [
   0
  ],
  "headerBackgroundColorDirection": "vertical",
  "closeButtonPressedIconColor": "#FFFFFF",
  "bodyPaddingTop": 5,
  "closeButtonIconLineWidth": 2,
  "close": "this.playList_EE011348_FA58_2214_41ED_AF609F746F2D.set('selectedIndex', -1);",
  "footerBackgroundColorDirection": "vertical",
  "shadowBlurRadius": 6,
  "bodyPaddingBottom": 5,
  "headerBackgroundOpacity": 1,
  "titlePaddingBottom": 5,
  "backgroundColorDirection": "vertical",
  "id": "window_EA299ECF_FA48_622B_41D8_EFB546C19A83",
  "shadowSpread": 1,
  "headerPaddingBottom": 10,
  "contentOpaque": false,
  "closeButtonPressedBackgroundColor": [
   "#3A1D1F"
  ],
  "scrollBarColor": "#000000",
  "footerHeight": 5,
  "overflow": "scroll",
  "closeButtonBackgroundColorRatios": [],
  "closeButtonRollOverBackgroundColorRatios": [
   0
  ],
  "headerPaddingRight": 10,
  "titlePaddingTop": 5,
  "data": {
   "name": "Window6932"
  },
  "veilColorDirection": "horizontal"
 },
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 89.06,
   "pitch": 0
  },
  "id": "camera_EE0D2360_FA58_2214_41E3_A23D814B4096",
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -176.2,
   "pitch": 0
  },
  "id": "camera_EEFB6370_FA58_22F4_41D1_619DD9D22E87",
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "id": "sequence_EEFB7370_FA58_22F4_41D6_FACF668DD2C3",
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "image": {
   "levels": [
    {
     "url": "media/photo_EAF45C5F_FA48_662A_41D2_0204FC54BDED.jpg",
     "class": "ImageResourceLevel"
    }
   ],
   "class": "ImageResource"
  },
  "thumbnailUrl": "media/photo_EAF45C5F_FA48_662A_41D2_0204FC54BDED_t.jpg",
  "label": "ESPRONCEDA INT 01_PSD",
  "duration": 5000,
  "width": 3200,
  "id": "photo_EAF45C5F_FA48_662A_41D2_0204FC54BDED",
  "class": "Photo",
  "height": 1800
 }
], "children": [
 {
  "toolTipFontColor": "#606060",
  "toolTipPaddingLeft": 6,
  "progressOpacity": 1,
  "paddingRight": 0,
  "progressBarBorderColor": "#000000",
  "transitionMode": "blending",
  "toolTipOpacity": 1,
  "toolTipTextShadowOpacity": 0,
  "playbackBarHeadBorderSize": 0,
  "playbackBarHeadShadowOpacity": 0.7,
  "progressLeft": 10,
  "transitionDuration": 500,
  "progressBarBackgroundColorRatios": [
   0,
   1
  ],
  "playbackBarHeadShadowHorizontalLength": 0,
  "playbackBarHeadShadowVerticalLength": 0,
  "toolTipFontFamily": "Arial",
  "shadow": false,
  "playbackBarHeadOpacity": 1,
  "playbackBarHeadShadowColor": "#000000",
  "progressBackgroundOpacity": 1,
  "toolTipPaddingTop": 4,
  "toolTipShadowSpread": 0,
  "paddingTop": 0,
  "progressRight": 10,
  "playbackBarHeadBackgroundColor": [
   "#111111",
   "#666666"
  ],
  "playbackBarHeadShadowBlurRadius": 3,
  "class": "ViewerArea",
  "borderRadius": 0,
  "toolTipBackgroundColor": "#F6F6F6",
  "minHeight": 50,
  "progressBorderSize": 2,
  "toolTipBorderRadius": 3,
  "progressBarBackgroundColor": [
   "#222222",
   "#444444"
  ],
  "toolTipShadowOpacity": 1,
  "progressBarBackgroundColorDirection": "vertical",
  "progressBackgroundColor": [
   "#EEEEEE",
   "#CCCCCC"
  ],
  "playbackBarProgressOpacity": 1,
  "playbackBarBackgroundColorDirection": "vertical",
  "playbackBarProgressBackgroundColorDirection": "vertical",
  "playbackBarRight": 0,
  "playbackBarBorderSize": 2,
  "toolTipTextShadowColor": "#000000",
  "paddingBottom": 0,
  "paddingLeft": 0,
  "progressBorderRadius": 4,
  "progressBackgroundColorRatios": [
   0,
   1
  ],
  "toolTipShadowBlurRadius": 3,
  "playbackBarBorderColor": "#AAAAAA",
  "playbackBarHeadBackgroundColorRatios": [
   0,
   1
  ],
  "toolTipShadowColor": "#333333",
  "toolTipShadowHorizontalLength": 0,
  "playbackBarBackgroundOpacity": 1,
  "width": "100%",
  "borderSize": 0,
  "toolTipBorderSize": 1,
  "playbackBarOpacity": 1,
  "playbackBarBackgroundColor": [
   "#EEEEEE",
   "#CCCCCC"
  ],
  "minWidth": 100,
  "playbackBarHeadShadow": true,
  "toolTipFontWeight": "normal",
  "height": "100%",
  "playbackBarHeadBackgroundColorDirection": "vertical",
  "playbackBarBorderRadius": 4,
  "toolTipBorderColor": "#767676",
  "playbackBarProgressBorderColor": "#000000",
  "toolTipFontStyle": "normal",
  "progressBottom": 1,
  "progressBackgroundColorDirection": "vertical",
  "top": 0,
  "progressBarOpacity": 1,
  "toolTipFontSize": 12,
  "toolTipShadowVerticalLength": 0,
  "toolTipPaddingBottom": 4,
  "playbackBarHeight": 20,
  "toolTipTextShadowBlurRadius": 3,
  "playbackBarProgressBackgroundColorRatios": [
   0,
   1
  ],
  "playbackBarHeadBorderColor": "#000000",
  "toolTipPaddingRight": 6,
  "playbackBarProgressBorderSize": 0,
  "id": "MainViewer",
  "playbackBarHeadHeight": 30,
  "playbackBarLeft": 0,
  "toolTipDisplayTime": 600,
  "progressBarBorderSize": 0,
  "playbackBarHeadBorderRadius": 0,
  "playbackBarProgressBackgroundColor": [
   "#222222",
   "#444444"
  ],
  "playbackBarBottom": 10,
  "progressBorderColor": "#AAAAAA",
  "playbackBarProgressBorderRadius": 0,
  "progressHeight": 20,
  "left": 0,
  "playbackBarHeadWidth": 6,
  "progressBarBorderRadius": 4
 },
 {
  "children": [
   {
    "horizontalAlign": "center",
    "verticalAlign": "middle",
    "layout": "horizontal",
    "scrollBarMargin": 2,
    "paddingRight": 0,
    "paddingLeft": 0,
    "width": 392,
    "height": "100%",
    "borderSize": 0,
    "minWidth": 392,
    "scrollBarVisible": "rollOver",
    "shadow": false,
    "scrollBarWidth": 10,
    "creationPolicy": "delayed",
    "gap": 4,
    "paddingTop": 0,
    "id": "Container_52D2AE7F_5F01_65BC_4192_E5EA29912157",
    "class": "Container",
    "data": {
     "name": "Container8703"
    },
    "borderRadius": 0,
    "scrollBarColor": "#000000",
    "scrollBarOpacity": 0.5,
    "backgroundOpacity": 0,
    "minHeight": 20,
    "contentOpaque": false,
    "overflow": "hidden",
    "children": [
     "this.IconButton_52D2AE7E_5F01_65BC_41B2_1643EF9CD4CB",
     "this.IconButton_52D2AE7E_5F01_65BC_41D5_F0DD57A13E9E",
     "this.IconButton_52D2AE7E_5F01_65BC_41BD_FF5C3FFC5E7D",
     "this.IconButton_52D2AE7E_5F01_65BC_41D1_D21E9D38C036",
     {
      "horizontalAlign": "center",
      "verticalAlign": "middle",
      "layout": "vertical",
      "scrollBarMargin": 2,
      "paddingRight": 0,
      "paddingLeft": 0,
      "width": 40,
      "height": "100%",
      "borderSize": 0,
      "minWidth": 20,
      "scrollBarVisible": "rollOver",
      "shadow": false,
      "scrollBarWidth": 10,
      "creationPolicy": "delayed",
      "gap": 4,
      "paddingTop": 0,
      "id": "Container_52D2AE7E_5F01_65BC_41AC_A51A5F5534C5",
      "class": "Container",
      "data": {
       "name": "Container8708"
      },
      "borderRadius": 0,
      "scrollBarColor": "#000000",
      "scrollBarOpacity": 0.5,
      "backgroundOpacity": 0,
      "minHeight": 20,
      "contentOpaque": false,
      "overflow": "hidden",
      "children": [
       "this.IconButton_52D2AE7E_5F01_65BC_41C0_0D9AC1FD02F0",
       "this.IconButton_52D2AE7E_5F01_65BC_41D2_983083226CD2",
       "this.IconButton_52D2AE7E_5F01_65BC_4189_6A3B617D11B4"
      ],
      "paddingBottom": 0
     },
     "this.IconButton_52D2AE7E_5F01_65BC_41CE_DD2209EF2508",
     "this.IconButton_52D2AE7E_5F01_65BC_41B6_407705DA163F",
     {
      "horizontalAlign": "center",
      "verticalAlign": "middle",
      "iconURL": "skin/IconButton_52D2AE7E_5F01_65BC_4189_0A1A561B3A3E.png",
      "paddingRight": 0,
      "mode": "toggle",
      "paddingLeft": 0,
      "width": 40,
      "height": 40,
      "transparencyActive": true,
      "borderSize": 0,
      "pressedIconURL": "skin/IconButton_52D2AE7E_5F01_65BC_4189_0A1A561B3A3E_pressed.png",
      "minWidth": 0,
      "shadow": false,
      "paddingTop": 0,
      "cursor": "hand",
      "id": "IconButton_52D2AE7E_5F01_65BC_4189_0A1A561B3A3E",
      "class": "IconButton",
      "data": {
       "name": "Button8714"
      },
      "borderRadius": 0,
      "backgroundOpacity": 0,
      "minHeight": 0,
      "paddingBottom": 0
     },
     "this.IconButton_52D2AE7E_5F01_65BC_41D3_A0DC49375B84"
    ],
    "paddingBottom": 0
   }
  ],
  "verticalAlign": "middle",
  "layout": "horizontal",
  "scrollBarMargin": 2,
  "horizontalAlign": "center",
  "paddingRight": 0,
  "paddingLeft": 0,
  "width": "100%",
  "height": 142,
  "borderSize": 0,
  "minWidth": 1,
  "scrollBarVisible": "rollOver",
  "shadow": false,
  "scrollBarWidth": 10,
  "creationPolicy": "delayed",
  "gap": 10,
  "paddingTop": 0,
  "bottom": "0%",
  "class": "Container",
  "data": {
   "name": "Container44746"
  },
  "borderRadius": 0,
  "scrollBarColor": "#000000",
  "scrollBarOpacity": 0.5,
  "backgroundOpacity": 0,
  "minHeight": 1,
  "left": "0%",
  "contentOpaque": false,
  "overflow": "scroll",
  "paddingBottom": 0
 }
], 
 "horizontalAlign": "left",
 "contentOpaque": false,
 "layout": "absolute",
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "paddingLeft": 0,
 "buttonToggleMute": "this.IconButton_52D2AE7E_5F01_65BC_4189_0A1A561B3A3E",
 "verticalAlign": "top",
 "mobileMipmappingEnabled": false,
 "backgroundPreloadEnabled": true,
 "width": "100%",
 "borderSize": 0,
 "scripts": {
  "pauseGlobalAudios": function(caller, excludeAudios){  var audios = window.currentGlobalAudios; window.currentGlobalAudiosActionCaller = caller; if(!audios) return; for(var audio in audios){ var a = audios[audio]; if(a.get('state') == 'playing' && (excludeAudios == undefined || excludeAudios.indexOf(a) == -1)) a.pause(); } },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); self.resumeGlobalAudios(); }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); this.pauseGlobalAudios(); popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "openLink": function(url, name){  if(url == location.href) { return; } if (name == '_blank' && window && window.process && window.process.versions && window.process.versions['electron']){ if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf') { var shell = require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "shareGoogle": function(url){  window.open('https://plus.google.com/share?url=' + url, '_blank'); },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, containsAudio){  var self = this; var closeFunction = function(){ self.MainViewer.set('toolTipEnabled', true); this.resumePlayers(playersPaused, !containsAudio); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = media.get('width'); var mediaHeight = media.get('height'); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = w.get('footerHeight'); var headerHeight = w.get('headerHeight'); if(!headerHeight) { var closeButtonHeight = w.get('closeButtonIconHeight') + w.get('closeButtonPaddingTop') + w.get('closeButtonPaddingBottom'); var titleHeight = w.get('titleFontSize') + w.get('titlePaddingTop') + w.get('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += w.get('headerPaddingTop') + w.get('headerPaddingBottom'); } if(!footerHeight) { footerHeight = 0; } var contentWindowWidth = windowWidth - w.get('bodyPaddingLeft') - w.get('bodyPaddingRight') - w.get('paddingLeft') - w.get('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - w.get('bodyPaddingTop') - w.get('bodyPaddingBottom') - w.get('paddingTop') - w.get('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + w.get('bodyPaddingLeft') + w.get('bodyPaddingRight') + w.get('paddingLeft') + w.get('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + w.get('bodyPaddingTop') + w.get('bodyPaddingBottom') + w.get('paddingTop') + w.get('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - w.get('actualWidth')) * 0.5); w.set('y', (parentHeight - w.get('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var isVideo = media.get('class') == 'Video'; if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "setStartTimeVideo": function(media, time){  var items = this.getPlayListItems(media); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchEnabled') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "autotriggerAtStart": function(player, callback){  var stateChangeFunction = function(event){ if(event.data.state == 'playing'){ callback(); player.unbind('stateChange', stateChangeFunction, this); } }; player.bind('stateChange', stateChangeFunction, this); },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "getPanoramaOverlayByName": function(panorama, name){  var frames = panorama.get('frames'); for(var j = 0; j<frames.length; ++j){ var frame = frames[j]; var overlays = frame.get('overlays'); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } } return undefined; },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, caller){  var audios = window.currentGlobalAudios; if(!audios) return; var resumeFunction = this.resumeGlobalAudios; var endFunction = function(){ if(playList.get('selectedIndex') != index) { resumeFunction(caller); } }; this.pauseGlobalAudios(caller); this.executeFunctionWhenChange(playList, index, endFunction, endFunction); },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "resumeGlobalAudios": function(caller, excludeAudios){  if(window.currentGlobalAudiosActionCaller && window.currentGlobalAudiosActionCaller != caller) return; window.currentGlobalAudiosActionCaller = undefined; var audios = window.currentGlobalAudios; if(!audios) return; for(var audio in audios){ var a = audios[audio]; if(excludeAudios == undefined || excludeAudios.indexOf(a) == -1) audios[audio].play(); } },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose(true); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose(false); } }; var disposeCallback = function(){ dispose(false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, self); }; itemDispatcher.bind('end', restoreInitialPositionFunction, self); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } playListDispatcher.set('selectedIndex', indexDispatcher); if(player){ player.unbind('stateChange', stateChangeFunction, self); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, self); } } if(sameViewerArea){ if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, self); } else{ viewerArea.set('visible', false); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { var playerClass = currentPlayer.get('class'); if(playerClass == 'PanoramaPlayer') { mediaDispatcher = currentPlayer.get('panorama'); if(mediaDispatcher == undefined) medisDispatcher = currentPlayer.get('video'); } else if(playerClass == 'VideoPlayer' || playerClass == 'Video360Player') mediaDispatcher = currentPlayer.get('video'); else if(playerClass == 'PhotoAlbumPlayer') mediaDispatcher = currentPlayer.get('photoAlbum'); else if(playerClass == 'MapPlayer') mediaDispatcher = currentPlayer.get('map'); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var viewerArea = item.get('player').get('viewerArea'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var player = undefined; var buttons = []; if(item.get('player') != itemDispatcher.get('player') || !mediaDispatcherByParam){ player = item.get('player'); if(player.get('class') == 'PanoramaPlayer' && item.get('media').get('class') != 'Video360') { var addButtons = function(property){ var value = player.get(property); if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } } else { setTimeout(function(){player.bind('stateChange', stateChangeFunction, self)}, 100); } } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "existsKey": function(key){  return key in window; },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var self = this; var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction(); if(endFunction && endObject) endObject.unbind('end', endFunction, self); playList.unbind('change', changePlayListFunction, self); } }; if(endFunction){ var playListItem = playList.get('items')[index]; var playListItemClass = playListItem.get('class'); if(playListItemClass == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); endObject = camera.get('initialSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ if(items[i].get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return; } } },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } this.playGlobalAudio(audio, endCallback); },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "unregisterKey": function(key){  delete window[key]; },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "registerKey": function(key, value){  window[key] = value; },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "setMainMediaByIndex": function(index){  if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); } },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var button = player.get('buttonPlayPause'); if(typeof button !== 'undefined' && player.get('state') == 'playing'){ button.set('pressed', true); } },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "changeBackgroundWhilePlay": function(playList, index, color){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ playList.unbind('change', changeFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playList.bind('change', changeFunction, this); } },
  "getKey": function(key){  return window[key]; },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "setStartTimeVideoSync": function(media, player){  this.setStartTimeVideo(media, player.get('currentTime')); },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media) return playList; } } return undefined; },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else if(player.get('state') == 'playing') { player.pause(); } } else { players.splice(i, 1); } } return players; }
 },
 "minWidth": 20,
 "scrollBarVisible": "rollOver",
 "height": "100%",
 "shadow": false,
 "scrollBarWidth": 10,
 "creationPolicy": "delayed",
 "gap": 10,
 "paddingTop": 0,
 "id": "rootPlayer",
 "class": "Player",
 "data": {
  "name": "Player43899"
 },
 "borderRadius": 0,
 "scrollBarOpacity": 0.5,
 "minHeight": 20,
 "overflow": "visible",
 "start": "this.mainPlayList.set('selectedIndex', 0)",
 "scrollBarColor": "#000000",
 "vrPolyfillScale": 0.5,
 "mouseWheelEnabled": true,
 "paddingBottom": 0
})