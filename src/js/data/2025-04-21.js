dataSetVersion = "2025-04-21"; // Change this when creating a new data set version. YYYY-MM-DD format.
dataSet[dataSetVersion] = {};

dataSet[dataSetVersion].options = [
  {
    name: "Filter by Branch",
    key: "branch",
    tooltip: "Check this to restrict to members from certain branches.",
    checked: false,
    sub: [
      { name: "Hololive", key: "JP" },
      { name: "Hololive English", key: "EN" },
      { name: "Hololive Indonesia", key: "ID" },
      { name: "Hololive DEV_IS", key: "DI" },
      { name: "Hololive Staff", key: "Staff" },
    ]
  },
  {
    name: "Filter by Generation",
    key: "gen",
    tooltip: "Check this to restrict to members from certain generations.",
    checked: false,
    sub: [
      { name: "Hololive 0th Gen", key: "GJ0" },
      { name: "Hololive 1st Gen", key: "GJ1" },
      { name: "Hololive 2nd Gen", key: "GJ2" },
      { name: "Hololive GAMERS", key: "GAMERS" },
      { name: "HoloFantasy", key: "GJ3" },
      { name: "HoloForce", key: "GJ4" },
      { name: "NePoLaBo", key: "GJ5" },
      { name: "HoloX", key: "GJ6" },
      { name: "AREA 15", key: "GI1" },
      { name: "HoLoro", key: "GI2" },
      { name: "HoloH3ro", key: "GI3" },
      { name: "HoloMyth", key: "EN1" },
      { name: "Council & IRyS", key: "EN2" },
      { name: "HoloAdvent", key: "EN3" },
      { name: "HoloJustice", key: "EN4" },
      { name: "ReGLOSS", key: "RG" },
      { name: "FLOW GLOW", key: "FG" },
      { name: "A-chan & Nodoka", key: "AN" },
    ]
  },
  {
    name: "Exclude No Active Members",
    key: "nmember",
    tooltip: "Check this to excluded graduated/retired/terminated members.",
    checked: false
  }
];

dataSet[dataSetVersion].characterData = [
  {
    name: "Tokino Sora",
    img: "TSora.png",
    opts:{
      branch: ["JP"],
      generation: ["GJ0"]
    }
  },
  {
    name: "Robocosan",
    img: "R.png",
    opts:
    {
      branch: ["JP"],
      generation: ["GJ0"]
    }
  },
  {
    name: "Sakura Miko",
    img: "SM.png",
    opts:
    {
      branch: ["JP"],
      generation: ["GJ0"]
    }
  },
  {
    name: "Hoshimachi Suisei",
    img: "HS.png",
    opts:
    {
      branch: ["JP"],
      generation: ["GJ0"]
    }
  },
  {
    name: "AZKi",
    img: "A.png",
    opts:
    {
      branch: ["JP"],
      generation: ["GJ0"]
    }
  },
  {
    name: "Shirakami Fubuki",
    img: "SFubuki.png",
    opts:
    {
      branch: ["JP"],
      generation: ["GJ1", "GAMERS"]
    }
  },
  {
    name: "Natsuiro Matsuri",
    img: "NMatsuri.png",
    opts:
    {
      branch: ["JP"],
      generation: ["GJ1"]
    }
  },
  {
    name: "Akai Haato",
    img: "AH.png",
    opts:
    {
      branch: ["JP"],
      generation: ["GJ1"]
    }
  },
  {
    name: "Aki Rosenthal",
    img: "AkiR.png",
    opts:
    {
      branch: ["JP"],
      generation: ["GJ1"]
    }
  },
  {
    name: "Yozora Mel",
    img: "YM.png",
    opts:
    {
      branch: ["JP"],
      generation: ["GJ1"],
      nmember: true
    }
  },
  {
    name: "Murasaki Shion",
    img: "MShion.png",
    opts:
    {
      branch: ["JP"],
      generation: ["GJ2"]
    }
  },
  {
    name: "Nakiri Ayame",
    img: "NA.png",
    opts:
    {
      branch: ["JP"],
      generation: ["GJ2"]
    }
  },
  {
    name: "Yuzuki Choco",
    img: "YC.png",
    opts:
    {
      branch: ["JP"],
      generation: ["GJ2"]
    }
  },
  {
    name: "Oozora Subaru",
    img: "OS.png",
    opts:
    {
      branch: ["JP"],
      generation: ["GJ2"]
    }
  },
  {
    name: "Minato Aqua",
    img: "MAqua.png",
    opts:
    {
      branch: ["JP"],
      generation: ["GJ2"],
      nmember: true
    }
  },
  {
    name: "Ookami Mio",
    img: "OM.png",
    opts:
    {
      branch: ["JP"],
      generation: ["GAMERS"]
    }
  },
  {
    name: "Nekomata Okayu",
    img: "NO.png",
    opts:
    {
      branch: ["JP"],
      generation: ["GAMERS"]
    }
  },
  {
    name: "Inugami Korone",
    img: "IK.png",
    opts:
    {
      branch: ["JP"],
      generation: ["GAMERS"]
    }
  },
  {
    name: "Usada Pekora",
    img: "UP.png",
    opts:
    {
      branch: ["JP"],
      generation: ["GJ3"]
    }
  },
  {
    name: "Shiranui Flare",
    img: "SFlare.png",
    opts:
    {
      branch: ["JP"],
      generation: ["GJ3"]
    }
  },
  {
    name: "Shirogane Noel",
    img: "SNoel.png",
    opts:
    {
      branch: ["JP"],
      generation: ["GJ3"]
    }
  },
  {
    name: "Houshou Marine",
    img: "HM.png",
    opts:
    {
      branch: ["JP"],
      generation: ["GJ3"]
    }
  },
  {
    name: "Uruha Rushia",
    img: "UR.png",
    opts:
    {
      branch: ["JP"],
      generation: ["GJ3"],
      nmember: true
    }
  },
  {
    name: "Amane Kanata",
    img: "AK.png",
    opts:
    {
      branch: ["JP"],
      generation: ["GJ4"]
    }
  },
  {
    name: "Tsunomaki Watame",
    img: "TW.png",
    opts:
    {
      branch: ["JP"],
      generation: ["GJ4"]
    }
  },
  {
    name: "Tokoyami Towa",
    img: "TT.png",
    opts:
    {
      branch: ["JP"],
      generation: ["GJ4"]
    }
  },
  {
    name: "Himemori Luna",
    img: "HL.png",
    opts:
    {
      branch: ["JP"],
      generation: ["GJ4"]
    }
  },
  {
    name: "Kiryu Coco",
    img: "KC.png",
    opts:
    {
      branch: ["JP"],
      generation: ["GJ4"],
      nmember: true
    }
  },
  {
    name: "Yukihana Lamy",
    img: "YL.png",
    opts:
    {
      branch: ["JP"],
      generation: ["GJ5"]
    }
  },
  {
    name: "Momosuzu Nene",
    img: "MN.png",
    opts:
    {
      branch: ["JP"],
      generation: ["GJ5"]
    }
  },
  {
    name: "Shishiro Botan",
    img: "SB.png",
    opts:
    {
      branch: ["JP"],
      generation: ["GJ5"]
    }
  },
  {
    name: "Omaru Polka",
    img: "OP.png",
    opts:
    {
      branch: ["JP"],
      generation: ["GJ5"]
    }
  },
  {
    name: "La+ Darknesss",
    img: "LD.png",
    opts:
    {
      branch: ["JP"],
      generation: ["GJ6"]
    }
  },
  {
    name: "Takane Lui",
    img: "TL.png",
    opts:
    {
      branch: ["JP"],
      generation: ["GJ6"]
    }
  },
  {
    name: "Hakui Koyori",
    img: "HK.png",
    opts:
    {
      branch: ["JP"],
      generation: ["GJ6"]
    }
  },
  {
    name: "Kazama Iroha",
    img: "KI.png",
    opts:
    {
      branch: ["JP"],
      generation: ["GJ6"]
    }
  },
  {
    name: "Sakamata Chloe",
    img: "SC.png",
    opts:
    {
      branch: ["JP"],
      generation: ["GJ6"],
      nmember: true
    }
  },
  {
    name: "Mori Calliope",
    img: "MC.png",
    opts:
    {
      branch: ["EN"],
      generation: ["GE1"]
    }
  },
  {
    name: "Takanashi Kiara",
    img: "TK.png",
    opts:
    {
      branch: ["EN"],
      generation: ["GE1"]
    }
  },
  {
    name: "Ninomae Ina'nis",
    img: "NI.png",
    opts:
    {
      branch: ["EN"],
      generation: ["GE1"]
    }
  },
  {
    name: "Gawr Gura",
    img: "GG.png",
    opts:
    {
      branch: ["EN"],
      generation: ["GE1"]
    }
  },
  {
    name: "Watson Amelia",
    img: "AW.png",
    opts:
    {
      branch: ["EN"],
      generation: ["GE1"],
      nmember: true
    }
  },
  {
    name: "Ouro Kronii",
    img: "OKronii.png",
    opts:
    {
      branch: ["EN"],
      generation: ["GE2"]
    }
  },
  {
    name: "Nanashi Mumei",
    img: "NMumei.png",
    opts:
    {
      branch: ["EN"],
      generation: ["GE2"]
    }
  },
  {
    name: "Hakos Baelz",
    img: "HB.png",
    opts:
    {
      branch: ["EN"],
      generation: ["GE2"]
    }
  },
  {
    name: "Tsukumo Sana",
    img: "TSana.png",
    opts:
    {
      branch: ["EN"],
      generation: ["GE2"],
      nmember: true
    }
  },
  {
    name: "Ceres Fauna",
    img: "CF.png",
    opts:
    {
      branch: ["EN"],
      generation: ["GE2"],
      nmember: true
    }
  },
  {
    name: "IRyS",
    img: "I.png",
    opts:
    {
      branch: ["EN"],
      generation: ["GE2"]
    }
  },
  {
    name: "Shiori Novella",
    img: "ShioriN.png",
    opts:
    {
      branch: ["EN"],
      generation: ["GE3"]
    }
  },
  {
    name: "Koseki Bijou",
    img: "KB.png",
    opts:
    {
      branch: ["EN"],
      generation: ["GE3"]
    }
  },
  {
    name: "Nerissa Ravencroft",
    img: "NR.png",
    opts:
    {
      branch: ["EN"],
      generation: ["GE3"]
    }
  },
  {
    name: "Fuwawa Abyssgard",
    img: "FW.png",
    opts:
    {
      branch: ["EN"],
      generation: ["GE3"]
    }
  },
  {
    name: "Mococo Abyssgard",
    img: "MococoA.png",
    opts:
    {
      branch: ["EN"],
      generation: ["GE3"]
    }
  },
  {
    name: "Elizabeth Rose Bloodflame",
    img: "ERB.png",
    opts:
    {
      branch: ["EN"],
      generation: ["GE4"]
    }
  },
  {
    name: "Gigi Murin",
    img: "GM.png",
    opts:
    {
      branch: ["EN"],
      generation: ["GE4"]
    }
  },
  {
    name: "Cecilia Immergreen",
    img: "CI.png",
    opts:
    {
      branch: ["EN"],
      generation: ["GE4"]
    }
  },
  {
    name: "Raora Panthera",
    img: "RP.png",
    opts:
    {
      branch: ["EN"],
      generation: ["GE4"]
    }
  },
  {
    name: "Ayunda Risu",
    img: "ARisu.png",
    opts:
    {
      branch: ["ID"],
      generation: ["GI1"]
    }
  },
  {
    name: "Moona Hoshinova",
    img: "MH.png",
    opts:
    {
      branch: ["ID"],
      generation: ["GI1"]
    }
  },
  {
    name: "Airani Iofifteen",
    img: "AI.png",
    opts:
    {
      branch: ["ID"],
      generation: ["GI1"]
    }
  },
  {
    name: "Kureiji Ollie",
    img: "KO.png",
    opts:
    {
      branch: ["ID"],
      generation: ["GI2"]
    }
  },
  {
    name: "Anya Melfissa",
    img: "AM.png",
    opts:
    {
      branch: ["ID"],
      generation: ["GI2"]
    }
  },
  {
    name: "Pavolia Reine",
    img: "PR.png",
    opts:
    {
      branch: ["ID"],
      generation: ["GI2"]
    }
  },
  {
    name: "Vestia Zeta",
    img: "VZ.png",
    opts:
    {
      branch: ["ID"],
      generation: ["GI3"]
    }
  },
  {
    name: "Kaela Kovalskia",
    img: "KaelaK.png",
    opts:
    {
      branch: ["ID"],
      generation: ["GI3"]
    }
  },
  {
    name: "Kobo Kanaeru",
    img: "KoboK.png",
    opts:
    {
      branch: ["ID"],
      generation: ["GI3"]
    }
  },
  {
    name: "Hideoshi Ao",
    img: "HA.png",
    opts:
    {
      branch: ["DI"],
      generation: ["RG"]
    }
  },
  {
    name: "Otonose Kanade",
    img: "OKanade.png",
    opts:
    {
      branch: ["DI"],
      generation: ["RG"]
    }
  },
  {
    name: "Ichijou Ririka",
    img: "IRirika.png",
    opts:
    {
      branch: ["DI"],
      generation: ["RG"]
    }
  },
  {
    name: "Juufuutei Raden",
    img: "JR.png",
    opts:
    {
      branch: ["DI"],
      generation: ["RG"]
    }
  },
  {
    name: "Todoroki Hajime",
    img: "TH.png",
    opts:
    {
      branch: ["DI"],
      generation: ["RG"]
    }
  },
  {
    name: "Isaki Riona",
    img: "IRiona.png",
    opts:
    {
      branch: ["DI"],
      generation: ["FG"]
    }
  },
  {
    name: "Koganei Niko",
    img: "KN.png",
    opts:
    {
      branch: ["DI"],
      generation: ["FG"]
    }
  },
  {
    name: "Mizumiya Su",
    img: "MS.png",
    opts:
    {
      branch: ["DI"],
      generation: ["FG"]
    }
  },
  {
    name: "Rindo Chihaya",
    img: "RC.png",
    opts:
    {
      branch: ["DI"],
      generation: ["FG"]
    }
  },
  {
    name: "Kikirara Vivi",
    img: "KV.png",
    opts:
    {
      branch: ["DI"],
      generation: ["FG"]
    }
  },
  {
    name: "A-Chan",
    img: "AC.png",
    opts:
    {
      branch: ["staff"],
      generation: ["AN"]
    }
  },
  {
    name: "Harusaki Nodoka",
    img: "HN.png",
    opts:
    {
      branch: ["staff"],
      generation: ["AN"]
    }
  },
]
