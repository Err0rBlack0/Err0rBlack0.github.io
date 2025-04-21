dataSetVersion = "2025-04-22"; // Change this when creating a new data set version. YYYY-MM-DD format.
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
    key: "generation",
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
      generation: ["GJ0"],
      nmember: false
    }
  },
  {
    name: "Robocosan",
    img: "R.png",
    opts:
    {
      branch: ["JP"],
      generation: ["GJ0"],
      nmember: false
    }
  },
  {
    name: "Sakura Miko",
    img: "SM.png",
    opts:
    {
      branch: ["JP"],
      generation: ["GJ0"],
      nmember: false
    }
  },
  {
    name: "Hoshimachi Suisei",
    img: "HS.png",
    opts:
    {
      branch: ["JP"],
      generation: ["GJ0"],
      nmember: false
    }
  },
  {
    name: "AZKi",
    img: "A.png",
    opts:
    {
      branch: ["JP"],
      generation: ["GJ0"],
      nmember: false
    }
  },
  {
    name: "Shirakami Fubuki",
    img: "SFubuki.png",
    opts:
    {
      branch: ["JP"],
      generation: ["GJ1", "GAMERS"],
      nmember: false
    }
  },
  {
    name: "Natsuiro Matsuri",
    img: "NMatsuri.png",
    opts:
    {
      branch: ["JP"],
      generation: ["GJ1"],
      nmember: false
    }
  },
  {
    name: "Akai Haato",
    img: "AH.png",
    opts:
    {
      branch: ["JP"],
      generation: ["GJ1"],
      nmember: false
    }
  },
  {
    name: "Aki Rosenthal",
    img: "AkiR.png",
    opts:
    {
      branch: ["JP"],
      generation: ["GJ1"],
      nmember: false
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
      generation: ["GJ2"],
      nmember: false
    }
  },
  {
    name: "Nakiri Ayame",
    img: "NA.png",
    opts:
    {
      branch: ["JP"],
      generation: ["GJ2"],
      nmember: false
    }
  },
  {
    name: "Yuzuki Choco",
    img: "YC.png",
    opts:
    {
      branch: ["JP"],
      generation: ["GJ2"],
      nmember: false
    }
  },
  {
    name: "Oozora Subaru",
    img: "OS.png",
    opts:
    {
      branch: ["JP"],
      generation: ["GJ2"],
      nmember: false
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
      generation: ["GAMERS"],
      nmember: false
    }
  },
  {
    name: "Nekomata Okayu",
    img: "NO.png",
    opts:
    {
      branch: ["JP"],
      generation: ["GAMERS"],
      nmember: false
    }
  },
  {
    name: "Inugami Korone",
    img: "IK.png",
    opts:
    {
      branch: ["JP"],
      generation: ["GAMERS"],
      nmember: false
    }
  },
  {
    name: "Usada Pekora",
    img: "UP.png",
    opts:
    {
      branch: ["JP"],
      generation: ["GJ3"],
      nmember: false
    }
  },
  {
    name: "Shiranui Flare",
    img: "SFlare.png",
    opts:
    {
      branch: ["JP"],
      generation: ["GJ3"],
      nmember: false
    }
  },
  {
    name: "Shirogane Noel",
    img: "SNoel.png",
    opts:
    {
      branch: ["JP"],
      generation: ["GJ3"],
      nmember: false
    }
  },
  {
    name: "Houshou Marine",
    img: "HM.png",
    opts:
    {
      branch: ["JP"],
      generation: ["GJ3"],
      nmember: false
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
      generation: ["GJ4"],
      nmember: false
    }
  },
  {
    name: "Tsunomaki Watame",
    img: "TW.png",
    opts:
    {
      branch: ["JP"],
      generation: ["GJ4"],
      nmember: false
    }
  },
  {
    name: "Tokoyami Towa",
    img: "TT.png",
    opts:
    {
      branch: ["JP"],
      generation: ["GJ4"],
      nmember: false
    }
  },
  {
    name: "Himemori Luna",
    img: "HL.png",
    opts:
    {
      branch: ["JP"],
      generation: ["GJ4"],
      nmember: false
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
      generation: ["GJ5"],
      nmember: false
    }
  },
  {
    name: "Momosuzu Nene",
    img: "MN.png",
    opts:
    {
      branch: ["JP"],
      generation: ["GJ5"],
      nmember: false
    }
  },
  {
    name: "Shishiro Botan",
    img: "SB.png",
    opts:
    {
      branch: ["JP"],
      generation: ["GJ5"],
      nmember: false
    }
  },
  {
    name: "Omaru Polka",
    img: "OP.png",
    opts:
    {
      branch: ["JP"],
      generation: ["GJ5"],
      nmember: false
    }
  },
  {
    name: "La+ Darknesss",
    img: "LD.png",
    opts:
    {
      branch: ["JP"],
      generation: ["GJ6"],
      nmember: false
    }
  },
  {
    name: "Takane Lui",
    img: "TL.png",
    opts:
    {
      branch: ["JP"],
      generation: ["GJ6"],
      nmember: false
    }
  },
  {
    name: "Hakui Koyori",
    img: "HK.png",
    opts:
    {
      branch: ["JP"],
      generation: ["GJ6"],
      nmember: false
    }
  },
  {
    name: "Kazama Iroha",
    img: "KI.png",
    opts:
    {
      branch: ["JP"],
      generation: ["GJ6"],
      nmember: false
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
      generation: ["GE1"],
      nmember: false
    }
  },
  {
    name: "Takanashi Kiara",
    img: "TK.png",
    opts:
    {
      branch: ["EN"],
      generation: ["GE1"],
      nmember: false
    }
  },
  {
    name: "Ninomae Ina'nis",
    img: "NI.png",
    opts:
    {
      branch: ["EN"],
      generation: ["GE1"],
      nmember: false
    }
  },
  {
    name: "Gawr Gura",
    img: "GG.png",
    opts:
    {
      branch: ["EN"],
      generation: ["GE1"],
      nmember: false
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
      generation: ["GE2"],
      nmember: false
    }
  },
  {
    name: "Nanashi Mumei",
    img: "NMumei.png",
    opts:
    {
      branch: ["EN"],
      generation: ["GE2"],
      nmember: false
    }
  },
  {
    name: "Hakos Baelz",
    img: "HB.png",
    opts:
    {
      branch: ["EN"],
      generation: ["GE2"],
      nmember: false
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
      generation: ["GE2"],
      nmember: false
    }
  },
  {
    name: "Shiori Novella",
    img: "ShioriN.png",
    opts:
    {
      branch: ["EN"],
      generation: ["GE3"],
      nmember: false
    }
  },
  {
    name: "Koseki Bijou",
    img: "KB.png",
    opts:
    {
      branch: ["EN"],
      generation: ["GE3"],
      nmember: false
    }
  },
  {
    name: "Nerissa Ravencroft",
    img: "NR.png",
    opts:
    {
      branch: ["EN"],
      generation: ["GE3"],
      nmember: false
    }
  },
  {
    name: "Fuwawa Abyssgard",
    img: "FW.png",
    opts:
    {
      branch: ["EN"],
      generation: ["GE3"],
      nmember: false
    }
  },
  {
    name: "Mococo Abyssgard",
    img: "MococoA.png",
    opts:
    {
      branch: ["EN"],
      generation: ["GE3"],
      nmember: false
    }
  },
  {
    name: "Elizabeth Rose Bloodflame",
    img: "ERB.png",
    opts:
    {
      branch: ["EN"],
      generation: ["GE4"],
      nmember: false
    }
  },
  {
    name: "Gigi Murin",
    img: "GM.png",
    opts:
    {
      branch: ["EN"],
      generation: ["GE4"],
      nmember: false
    }
  },
  {
    name: "Cecilia Immergreen",
    img: "CI.png",
    opts:
    {
      branch: ["EN"],
      generation: ["GE4"],
      nmember: false
    }
  },
  {
    name: "Raora Panthera",
    img: "RP.png",
    opts:
    {
      branch: ["EN"],
      generation: ["GE4"],
      nmember: false
    }
  },
  {
    name: "Ayunda Risu",
    img: "ARisu.png",
    opts:
    {
      branch: ["ID"],
      generation: ["GI1"],
      nmember: false
    }
  },
  {
    name: "Moona Hoshinova",
    img: "MH.png",
    opts:
    {
      branch: ["ID"],
      generation: ["GI1"],
      nmember: false
    }
  },
  {
    name: "Airani Iofifteen",
    img: "AI.png",
    opts:
    {
      branch: ["ID"],
      generation: ["GI1"],
      nmember: false
    }
  },
  {
    name: "Kureiji Ollie",
    img: "KO.png",
    opts:
    {
      branch: ["ID"],
      generation: ["GI2"],
      nmember: false
    }
  },
  {
    name: "Anya Melfissa",
    img: "AM.png",
    opts:
    {
      branch: ["ID"],
      generation: ["GI2"],
      nmember: false
    }
  },
  {
    name: "Pavolia Reine",
    img: "PR.png",
    opts:
    {
      branch: ["ID"],
      generation: ["GI2"],
      nmember: false
    }
  },
  {
    name: "Vestia Zeta",
    img: "VZ.png",
    opts:
    {
      branch: ["ID"],
      generation: ["GI3"],
      nmember: false
    }
  },
  {
    name: "Kaela Kovalskia",
    img: "KaelaK.png",
    opts:
    {
      branch: ["ID"],
      generation: ["GI3"],
      nmember: false
    }
  },
  {
    name: "Kobo Kanaeru",
    img: "KoboK.png",
    opts:
    {
      branch: ["ID"],
      generation: ["GI3"],
      nmember: false
    }
  },
  {
    name: "Hideoshi Ao",
    img: "HA.png",
    opts:
    {
      branch: ["DI"],
      generation: ["RG"],
      nmember: false
    }
  },
  {
    name: "Otonose Kanade",
    img: "OKanade.png",
    opts:
    {
      branch: ["DI"],
      generation: ["RG"],
      nmember: false
    }
  },
  {
    name: "Ichijou Ririka",
    img: "IRirika.png",
    opts:
    {
      branch: ["DI"],
      generation: ["RG"],
      nmember: false
    }
  },
  {
    name: "Juufuutei Raden",
    img: "JR.png",
    opts:
    {
      branch: ["DI"],
      generation: ["RG"],
      nmember: false
    }
  },
  {
    name: "Todoroki Hajime",
    img: "TH.png",
    opts:
    {
      branch: ["DI"],
      generation: ["RG"],
      nmember: false
    }
  },
  {
    name: "Isaki Riona",
    img: "IRiona.png",
    opts:
    {
      branch: ["DI"],
      generation: ["FG"],
      nmember: false
    }
  },
  {
    name: "Koganei Niko",
    img: "KN.png",
    opts:
    {
      branch: ["DI"],
      generation: ["FG"],
      nmember: false
    }
  },
  {
    name: "Mizumiya Su",
    img: "MS.png",
    opts:
    {
      branch: ["DI"],
      generation: ["FG"],
      nmember: false
    }
  },
  {
    name: "Rindo Chihaya",
    img: "RC.png",
    opts:
    {
      branch: ["DI"],
      generation: ["FG"],
      nmember: false
    }
  },
  {
    name: "Kikirara Vivi",
    img: "KV.png",
    opts:
    {
      branch: ["DI"],
      generation: ["FG"],
      nmember: false
    }
  },
  {
    name: "A-Chan",
    img: "AC.png",
    opts:
    {
      branch: ["staff"],
      generation: ["AN"],
      nmember: true
    }
  },
  {
    name: "Harusaki Nodoka",
    img: "HN.png",
    opts:
    {
      branch: ["staff"],
      generation: ["AN"],
      nmember: false
    }
  },
];
