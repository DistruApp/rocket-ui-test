export const exampleLaunch = {
  _id: "5cd5a7dde8b64aec95ac8064",
  flight_number: 110,
  mission_name: "SXM-7",
  mission_id: [],
  launch_year: "2020",
  launch_date_unix: 1607880600,
  launch_date_utc: "2020-12-13T17:30:00.000Z",
  launch_date_local: "2020-12-13T12:30:00-05:00",
  is_tentative: false,
  tentative_max_precision: "hour",
  tbd: false,
  launch_window: null,
  rocket: {
    rocket_id: "falcon9",
    rocket_name: "Falcon 9",
    rocket_type: "FT",
    first_stage: {
      cores: [
        {
          core_serial: null,
          flight: null,
          block: 5,
          gridfins: null,
          legs: null,
          reused: null,
          land_success: null,
          landing_intent: null,
          landing_type: null,
          landing_vehicle: null
        }
      ]
    },
    second_stage: {
      block: 5,
      payloads: [
        {
          payload_id: "SXM-7",
          norad_id: [],
          reused: false,
          customers: [
            "SiriusXM"
          ],
          nationality: "United States",
          manufacturer: "SSL",
          payload_type: "Satellite",
          payload_mass_kg: null,
          payload_mass_lbs: null,
          orbit: "GTO",
          orbit_params: {
            reference_system: "geocentric",
            regime: "geostationary",
            longitude: null,
            semi_major_axis_km: null,
            eccentricity: null,
            periapsis_km: null,
            apoapsis_km: null,
            inclination_deg: null,
            period_min: null,
            lifespan_years: 15,
            epoch: null,
            mean_motion: null,
            raan: null,
            arg_of_pericenter: null,
            mean_anomaly: null
          }
        }
      ]
    },
    fairings: {
      reused: null,
      recovery_attempt: null,
      recovered: null,
      ship: null
    }
  },
  ships: [],
  telemetry: {
    flight_club: null
  },
  launch_site: {
    site_id: "ccafs_slc_40",
    site_name: "CCAFS SLC 40",
    site_name_long: "Cape Canaveral Air Force Station Space Launch Complex 40"
  },
  launch_success: null,
  links: {
    mission_patch: null,
    mission_patch_small: null,
    reddit_campaign: null,
    reddit_launch: null,
    reddit_recovery: null,
    reddit_media: null,
    presskit: null,
    article_link: null,
    wikipedia: null,
    video_link: null,
    youtube_id: null,
    flickr_images: []
  },
  details: null,
  upcoming: true,
  static_fire_date_utc: null,
  static_fire_date_unix: null,
  timeline: null,
  crew: null,
  last_date_update: "2020-12-13T17:03:48.000Z",
  last_ll_launch_date: null,
  last_ll_update: null,
  last_wiki_launch_date: "2020-12-13T17:30:00.000Z",
  last_wiki_revision: "2aa9a2fe-3d65-11eb-abb7-0e98a0ca8665",
  last_wiki_update: "2020-12-13T17:03:48.000Z",
  launch_date_source: "wiki"
}

export const exampleLaunches = [
  exampleLaunch,
  {
    _id: "5cd5c0b9e8b64aec95ac8076",
    flight_number: 110,
    mission_name: "CRS-21",
    mission_id: [
      "EE86F74"
    ],
    launch_year: "2020",
    launch_date_unix: 1607271420,
    launch_date_utc: "2020-12-06T16:17:00.000Z",
    launch_date_local: "2020-12-06T11:17:00-05:00",
    is_tentative: false,
    tentative_max_precision: "hour",
    tbd: false,
    launch_window: null,
    rocket: {
      rocket_id: "falcon9",
      rocket_name: "Falcon 9",
      rocket_type: "FT",
      first_stage: {
        cores: [
          {
            core_serial: "B1058",
            flight: 4,
            block: 5,
            gridfins: true,
            legs: true,
            reused: true,
            land_success: null,
            landing_intent: true,
            landing_type: "ASDS",
            landing_vehicle: null
          }
        ]
      },
      second_stage: {
        block: 5,
        payloads: [
          {
            payload_id: "CRS-21",
            norad_id: [],
            cap_serial: "C208",
            reused: true,
            customers: [
              "NASA (CRS)"
            ],
            nationality: "United States",
            manufacturer: "SpaceX",
            payload_type: "Dragon 2.0",
            payload_mass_kg: null,
            payload_mass_lbs: null,
            orbit: "ISS",
            orbit_params: {
              reference_system: "geocentric",
              regime: "low-earth",
              longitude: null,
              semi_major_axis_km: null,
              eccentricity: null,
              periapsis_km: null,
              apoapsis_km: null,
              inclination_deg: null,
              period_min: null,
              lifespan_years: null,
              epoch: null,
              mean_motion: null,
              raan: null,
              arg_of_pericenter: null,
              mean_anomaly: null
            },
            mass_returned_kg: null,
            mass_returned_lbs: null,
            flight_time_sec: null,
            cargo_manifest: null
          }
        ]
      },
      fairings: null
    },
    ships: [],
    telemetry: {
      flight_club: null
    },
    launch_site: {
      site_id: "ksc_lc_39a",
      site_name: "KSC LC 39A",
      site_name_long: "Kennedy Space Center Historic Launch Complex 39A"
    },
    launch_success: null,
    links: {
      mission_patch: "https://imgur.com/E7fjUBD.png",
      mission_patch_small: "https://imgur.com/jHNFSY6.png",
      reddit_campaign: "https://www.reddit.com/r/spacex/comments/jw8bfe/crs21_launch_campaign_thread/",
      reddit_launch: null,
      reddit_recovery: null,
      reddit_media: null,
      presskit: null,
      article_link: null,
      wikipedia: null,
      video_link: null,
      youtube_id: null,
      flickr_images: []
    },
    details: "SpaceX's 21st ISS resupply mission on behalf of NASA and the first under the CRS-2 contract, this mission brings essential supplies to the International Space Station using the cargo variant of SpaceX's Dragon 2 spacecraft. The external payload for this mission is the Nanoracks Bishop Airlock. Falcon 9 and Dragon launch from LC-39A, Kennedy Space Center and the booster is expected to land on an ASDS. The mission will be complete with return and recovery of the Dragon capsule and down cargo.",
    upcoming: true,
    static_fire_date_utc: null,
    static_fire_date_unix: null,
    timeline: null,
    crew: null,
    last_date_update: "2020-12-05T13:04:54.000Z",
    last_ll_launch_date: null,
    last_ll_update: null,
    last_wiki_launch_date: "2020-12-06T16:17:00.000Z",
    last_wiki_revision: "774e7809-36fa-11eb-a5dc-0e33339b29dd",
    last_wiki_update: "2020-12-05T13:04:54.000Z",
    launch_date_source: "wiki"
  }
]

export const exampleRocket = {
  id: 2,
  active: true,
  stages: 2,
  boosters: 0,
  cost_per_launch: 50000000,
  success_rate_pct: 97,
  first_flight: "2010-06-04",
  country: "United States",
  company: "SpaceX",
  height: {
    meters: 70,
    feet: 229.6
  },
  diameter: {
    meters: 3.7,
    feet: 12
  },
  mass: {
    kg: 549054,
    lb: 1207920
  },
  payload_weights: [
    {
      id: "leo",
      name: "Low Earth Orbit",
      kg: 22800,
      lb: 50265
    },
    {
      id: "gto",
      name: "Geosynchronous Transfer Orbit",
      kg: 8300,
      lb: 18300
    },
    {
      id: "mars",
      name: "Mars Orbit",
      kg: 4020,
      lb: 8860
    }
  ],
  first_stage: {
    reusable: true,
    engines: 9,
    fuel_amount_tons: 385,
    burn_time_sec: 162,
    thrust_sea_level: {
      kN: 7607,
      lbf: 1710000
    },
    thrust_vacuum: {
      kN: 8227,
      lbf: 1849500
    }
  },
  second_stage: {
    reusable: false,
    engines: 1,
    fuel_amount_tons: 90,
    burn_time_sec: 397,
    thrust: {
      kN: 934,
      lbf: 210000
    },
    payloads: {
      option_1: "dragon",
      option_2: "composite fairing",
      composite_fairing: {
        height: {
          meters: 13.1,
          feet: 43
        },
        diameter: {
          meters: 5.2,
          feet: 17.1
        }
      }
    }
  },
  engines: {
    number: 9,
    type: "merlin",
    version: "1D+",
    layout: "octaweb",
    isp: {
      sea_level: 288,
      vacuum: 312
    },
    engine_loss_max: 2,
    propellant_1: "liquid oxygen",
    propellant_2: "RP-1 kerosene",
    thrust_sea_level: {
      kN: 845,
      lbf: 190000
    },
    thrust_vacuum: {
      kN: 914,
      lbf: 205500
    },
    thrust_to_weight: 180.1
  },
  landing_legs: {
    number: 4,
    material: "carbon fiber"
  },
  flickr_images: [
    "https://farm1.staticflickr.com/929/28787338307_3453a11a77_b.jpg",
    "https://farm4.staticflickr.com/3955/32915197674_eee74d81bb_b.jpg",
    "https://farm1.staticflickr.com/293/32312415025_6841e30bf1_b.jpg",
    "https://farm1.staticflickr.com/623/23660653516_5b6cb301d1_b.jpg",
    "https://farm6.staticflickr.com/5518/31579784413_d853331601_b.jpg",
    "https://farm1.staticflickr.com/745/32394687645_a9c54a34ef_b.jpg"
  ],
  wikipedia: "https://en.wikipedia.org/wiki/Falcon_9",
  description: "Falcon 9 is a two-stage rocket designed and manufactured by SpaceX for the reliable and safe transport of satellites and the Dragon spacecraft into orbit.",
  rocket_id: "falcon9",
  rocket_name: "Falcon 9",
  rocket_type: "rocket"
}

export const exampleRocketId = exampleRocket.rocket_id