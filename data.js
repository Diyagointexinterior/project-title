var APP_DATA = {
  "scenes": [
    {
      "id": "0-living-room",
      "name": "Living Room",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": 0.8642102127114875,
        "pitch": 0.006633193264478976,
        "fov": 1.4319388366908425
      },
      "linkHotspots": [
        {
          "yaw": 0.8043716017355536,
          "pitch": 0.1960775278943956,
          "rotation": 6.283185307179586,
          "target": "0-living-room"
        },
        {
          "yaw": 0.46609508663173216,
          "pitch": 0.07419061703748397,
          "rotation": 4.71238898038469,
          "target": "1-stair-area"
        },
        {
          "yaw": -2.3609464347969755,
          "pitch": 0.282562687763253,
          "rotation": 0,
          "target": "2-tv-unit"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-stair-area",
      "name": "Stair Area",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.4319388366908425
      },
      "linkHotspots": [
        {
          "yaw": 1.4812026122957942,
          "pitch": 0.32713134727124427,
          "rotation": 0,
          "target": "1-stair-area"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-tv-unit",
      "name": "Tv Unit",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": -0.005711986642889855,
        "pitch": -0.031100934009572256,
        "fov": 1.4319388366908425
      },
      "linkHotspots": [
        {
          "yaw": 0.10072768572607593,
          "pitch": 0.016969981462775507,
          "rotation": 0,
          "target": "2-tv-unit"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-hall",
      "name": "Hall",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.4319388366908425
      },
      "linkHotspots": [
        {
          "yaw": -0.009447244188502069,
          "pitch": 0.17760414637009347,
          "rotation": 0,
          "target": "3-hall"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-entry",
      "name": "Entry",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.4319388366908425
      },
      "linkHotspots": [
        {
          "yaw": -0.08088399847047967,
          "pitch": 0.4302797814572088,
          "rotation": 0,
          "target": "4-entry"
        },
        {
          "yaw": 1.2713785473064583,
          "pitch": 0.652049372592808,
          "rotation": 0,
          "target": "1-stair-area"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-dining",
      "name": "Dining",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": -0.012796959064377944,
        "pitch": 0.047410991630343347,
        "fov": 1.4319388366908425
      },
      "linkHotspots": [
        {
          "yaw": 0.5577772627087061,
          "pitch": 0.8867026301372007,
          "rotation": 0,
          "target": "5-dining"
        },
        {
          "yaw": -1.4965780071034196,
          "pitch": 0.4364669648720181,
          "rotation": 0,
          "target": "6-kitchen"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-kitchen",
      "name": "Kitchen",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": 0.018326080681156043,
        "pitch": -0.03648223861782185,
        "fov": 1.4319388366908425
      },
      "linkHotspots": [
        {
          "yaw": -0.055096844635082576,
          "pitch": 0.6203792473317229,
          "rotation": 0,
          "target": "6-kitchen"
        },
        {
          "yaw": -1.0079318648828046,
          "pitch": 0.5114130191020081,
          "rotation": 0,
          "target": "6-kitchen"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
