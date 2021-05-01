const CONFIG = {
   exampleLaunch: {
      "fairings": null,
      "links": {
          "patch": {
              "small": "https://images2.imgbox.com/53/22/dh0XSLXO_o.png",
              "large": "https://images2.imgbox.com/15/2b/NAcsTEB6_o.png"
          },
          "reddit": {
              "campaign": "https://www.reddit.com/r/spacex/comments/ezn6n0/crs20_launch_campaign_thread",
              "launch": "https://www.reddit.com/r/spacex/comments/fe8pcj/rspacex_crs20_official_launch_discussion_updates/",
              "media": "https://www.reddit.com/r/spacex/comments/fes64p/rspacex_crs20_media_thread_videos_images_gifs/",
              "recovery": null
          },
          "flickr": {
              "small": [],
              "original": [
                  "https://live.staticflickr.com/65535/49635401403_96f9c322dc_o.jpg",
                  "https://live.staticflickr.com/65535/49636202657_e81210a3ca_o.jpg",
                  "https://live.staticflickr.com/65535/49636202572_8831c5a917_o.jpg",
                  "https://live.staticflickr.com/65535/49635401423_e0bef3e82f_o.jpg",
                  "https://live.staticflickr.com/65535/49635985086_660be7062f_o.jpg"
              ]
          },
          "presskit": "https://www.spacex.com/sites/spacex/files/crs-20_mission_press_kit.pdf",
          "webcast": "https://youtu.be/1MkcWK2PnsU",
          "youtube_id": "1MkcWK2PnsU",
          "article": "https://spaceflightnow.com/2020/03/07/late-night-launch-of-spacex-cargo-ship-marks-end-of-an-era/",
          "wikipedia": "https://en.wikipedia.org/wiki/SpaceX_CRS-20"
      },
      "static_fire_date_utc": "2020-03-01T10:20:00.000Z",
      "static_fire_date_unix": 1583058000,
      "tdb": false,
      "net": false,
      "window": 0,
      "rocket": "5e9d0d95eda69973a809d1ec",
      "success": true,
      "failures": [],
      "details": "SpaceX's 20th and final Crew Resupply Mission under the original NASA CRS contract, this mission brings essential supplies to the International Space Station using SpaceX's reusable Dragon spacecraft. It is the last scheduled flight of a Dragon 1 capsule. (CRS-21 and up under the new Commercial Resupply Services 2 contract will use Dragon 2.) The external payload for this mission is the Bartolomeo ISS external payload hosting platform. Falcon 9 and Dragon will launch from SLC-40, Cape Canaveral Air Force Station and the booster will land at LZ-1. The mission will be complete with return and recovery of the Dragon capsule and down cargo.",
      "crew": [],
      "ships": [],
      "capsules": [
          "5e9e2c5cf359185d753b266f"
      ],
      "payloads": [
          "5eb0e4d0b6c3bb0006eeb253"
      ],
      "launchpad": "5e9e4501f509094ba4566f84",
      "auto_update": true,
      "flight_number": 91,
      "name": "CRS-20",
      "date_utc": "2020-03-07T04:50:31.000Z",
      "date_unix": 1583556631,
      "date_local": "2020-03-06T23:50:31-05:00",
      "date_precision": "hour",
      "upcoming": false,
      "cores": [
          {
              "core": "5e9e28a7f359187afd3b2662",
              "flight": 2,
              "gridfins": true,
              "legs": true,
              "reused": true,
              "landing_attempt": true,
              "landing_success": true,
              "landing_type": "RTLS",
              "landpad": "5e9e3032383ecb267a34e7c7"
          }
      ],
      "id": "5eb87d42ffd86e000604b384"
  },
  
  exampleRocket: {
    "height": {
      "meters": 70,
      "feet": 229.6
    },
    "diameter": {
      "meters": 12.2,
      "feet": 39.9
    },
    "mass": {
      "kg": 1420788,
      "lb": 3125735
    },
    "first_stage": {
      "thrust_sea_level": {
        "kN": 22819,
        "lbf": 5130000
      },
      "thrust_vacuum": {
        "kN": 24681,
        "lbf": 5548500
      },
      "reusable": true,
      "engines": 27,
      "fuel_amount_tons": 1155,
      "burn_time_sec": 162
    },
    "second_stage": {
      "thrust": {
        "kN": 934,
        "lbf": 210000
      },
      "payloads": {
        "composite_fairing": {
          "height": {
            "meters": 13.1,
            "feet": 43
          },
          "diameter": {
            "meters": 5.2,
            "feet": 17.1
          }
        },
        "option_1": "dragon"
      },
      "reusable": false,
      "engines": 1,
      "fuel_amount_tons": 90,
      "burn_time_sec": 397
    },
    "engines": {
      "isp": {
        "sea_level": 288,
        "vacuum": 312
      },
      "thrust_sea_level": {
        "kN": 845,
        "lbf": 190000
      },
      "thrust_vacuum": {
        "kN": 914,
        "lbf": 205500
      },
      "number": 27,
      "type": "merlin",
      "version": "1D+",
      "layout": "octaweb",
      "engine_loss_max": 6,
      "propellant_1": "liquid oxygen",
      "propellant_2": "RP-1 kerosene",
      "thrust_to_weight": 180.1
    },
    "landing_legs": {
      "number": 12,
      "material": "carbon fiber"
    },
    "payload_weights": [
      {
        "id": "leo",
        "name": "Low Earth Orbit",
        "kg": 63800,
        "lb": 140660
      },
      {
        "id": "gto",
        "name": "Geosynchronous Transfer Orbit",
        "kg": 26700,
        "lb": 58860
      },
      {
        "id": "mars",
        "name": "Mars Orbit",
        "kg": 16800,
        "lb": 37040
      },
      {
        "id": "pluto",
        "name": "Pluto Orbit",
        "kg": 3500,
        "lb": 7720
      }
    ],
    "flickr_images": [
      "https://farm5.staticflickr.com/4599/38583829295_581f34dd84_b.jpg",
      "https://farm5.staticflickr.com/4645/38583830575_3f0f7215e6_b.jpg",
      "https://farm5.staticflickr.com/4696/40126460511_b15bf84c85_b.jpg",
      "https://farm5.staticflickr.com/4711/40126461411_aabc643fd8_b.jpg"
    ],
    "name": "Falcon Heavy",
    "type": "rocket",
    "active": true,
    "stages": 2,
    "boosters": 2,
    "cost_per_launch": 90000000,
    "success_rate_pct": 100,
    "first_flight": "2018-02-06",
    "country": "United States",
    "company": "SpaceX",
    "wikipedia": "https://en.wikipedia.org/wiki/Falcon_Heavy",
    "description": "With the ability to lift into orbit over 54 metric tons (119,000 lb)--a mass equivalent to a 737 jetliner loaded with passengers, crew, luggage and fuel--Falcon Heavy can lift more than twice the payload of the next closest operational vehicle, the Delta IV Heavy, at one-third the cost.",
    "id": "5e9d0d95eda69974db09d1ed"
  },
}

export default CONFIG