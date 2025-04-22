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
    img: "SORA.webp",
    opts:{
      branch: ["JP"],
      generation: ["GJ0"],
      nmember: false
    }
  },
  {
    name: "Robocosan",
    img: "ROBOCO.webp",
    opts:
    {
      branch: ["JP"],
      generation: ["GJ0"],
      nmember: false
    }
  },
  {
    name: "Sakura Miko",
    img: "MIKO.webp",
    opts:
    {
      branch: ["JP"],
      generation: ["GJ0"],
      nmember: false
    }
  },
  {
    name: "Hoshimachi Suisei",
    img: "SUISEI.webp",
    opts:
    {
      branch: ["JP"],
      generation: ["GJ0"],
      nmember: false
    }
  },
  {
    name: "AZKi",
    img: "AZKI.webp",
    opts:
    {
      branch: ["JP"],
      generation: ["GJ0"],
      nmember: false
    }
  },
  {
    name: "Shirakami Fubuki",
    img: "FUBUKI.webp",
    opts:
    {
      branch: ["JP"],
      generation: ["GJ1", "GAMERS"],
      nmember: false
    }
  },
  {
    name: "Natsuiro Matsuri",
    img: "MATSURI.webp",
    opts:
    {
      branch: ["JP"],
      generation: ["GJ1"],
      nmember: false
    }
  },
  {
    name: "Akai Haato",
    img: "HAATO.webp",
    opts:
    {
      branch: ["JP"],
      generation: ["GJ1"],
      nmember: false
    }
  },
  {
    name: "Aki Rosenthal",
    img: "AKI.webp",
    opts:
    {
      branch: ["JP"],
      generation: ["GJ1"],
      nmember: false
    }
  },
  {
    name: "Yozora Mel",
    img: "MEL.webp",
    opts:
    {
      branch: ["JP"],
      generation: ["GJ1"],
      nmember: true
    }
  },
  {
    name: "Murasaki Shion",
    img: "SHION.webp",
    opts:
    {
      branch: ["JP"],
      generation: ["GJ2"],
      nmember: false
    }
  },
  {
    name: "Nakiri Ayame",
    img: "AYAME.webp",
    opts:
    {
      branch: ["JP"],
      generation: ["GJ2"],
      nmember: false
    }
  },
  {
    name: "Yuzuki Choco",
    img: "CHOCO.webp",
    opts:
    {
      branch: ["JP"],
      generation: ["GJ2"],
      nmember: false
    }
  },
  {
    name: "Oozora Subaru",
    img: "SUBARU.webp",
    opts:
    {
      branch: ["JP"],
      generation: ["GJ2"],
      nmember: false
    }
  },
  {
    name: "Minato Aqua",
    img: "AQUA.webp",
    opts:
    {
      branch: ["JP"],
      generation: ["GJ2"],
      nmember: true
    }
  },
  {
    name: "Ookami Mio",
    img: "MIO.webp",
    opts:
    {
      branch: ["JP"],
      generation: ["GAMERS"],
      nmember: false
    }
  },
  {
    name: "Nekomata Okayu",
    img: "OKAYU.webp",
    opts:
    {
      branch: ["JP"],
      generation: ["GAMERS"],
      nmember: false
    }
  },
  {
    name: "Inugami Korone",
    img: "KORONE.webp",
    opts:
    {
      branch: ["JP"],
      generation: ["GAMERS"],
      nmember: false
    }
  },
  {
    name: "Usada Pekora",
    img: "PEKORA.webp",
    opts:
    {
      branch: ["JP"],
      generation: ["GJ3"],
      nmember: false
    }
  },
  {
    name: "Shiranui Flare",
    img: "FLARE.webp",
    opts:
    {
      branch: ["JP"],
      generation: ["GJ3"],
      nmember: false
    }
  },
  {
    name: "Shirogane Noel",
    img: "NOEL.webp",
    opts:
    {
      branch: ["JP"],
      generation: ["GJ3"],
      nmember: false
    }
  },
  {
    name: "Houshou Marine",
    img: "MARINE.webp",
    opts:
    {
      branch: ["JP"],
      generation: ["GJ3"],
      nmember: false
    }
  },
  {
    name: "Uruha Rushia",
    img: "RUSHIA.webp",
    opts:
    {
      branch: ["JP"],
      generation: ["GJ3"],
      nmember: true
    }
  },
  {
    name: "Amane Kanata",
    img: "KANATA.webp",
    opts:
    {
      branch: ["JP"],
      generation: ["GJ4"],
      nmember: false
    }
  },
  {
    name: "Tsunomaki Watame",
    img: "WATAME.webp",
    opts:
    {
      branch: ["JP"],
      generation: ["GJ4"],
      nmember: false
    }
  },
  {
    name: "Tokoyami Towa",
    img: "TOWA.webp",
    opts:
    {
      branch: ["JP"],
      generation: ["GJ4"],
      nmember: false
    }
  },
  {
    name: "Himemori Luna",
    img: "LUNA.webp",
    opts:
    {
      branch: ["JP"],
      generation: ["GJ4"],
      nmember: false
    }
  },
  {
    name: "Kiryu Coco",
    img: "COCO.webp",
    opts:
    {
      branch: ["JP"],
      generation: ["GJ4"],
      nmember: true
    }
  },
  {
    name: "Yukihana Lamy",
    img: "LAMY.webp",
    opts:
    {
      branch: ["JP"],
      generation: ["GJ5"],
      nmember: false
    }
  },
  {
    name: "Momosuzu Nene",
    img: "NENE.webp",
    opts:
    {
      branch: ["JP"],
      generation: ["GJ5"],
      nmember: false
    }
  },
  {
    name: "Shishiro Botan",
    img: "BOTAN.webp",
    opts:
    {
      branch: ["JP"],
      generation: ["GJ5"],
      nmember: false
    }
  },
  {
    name: "Omaru Polka",
    img: "POLKA.webp",
    opts:
    {
      branch: ["JP"],
      generation: ["GJ5"],
      nmember: false
    }
  },
  {
    name: "La+ Darknesss",
    img: "LAPLUS.webp",
    opts:
    {
      branch: ["JP"],
      generation: ["GJ6"],
      nmember: false
    }
  },
  {
    name: "Takane Lui",
    img: "LUI.webp",
    opts:
    {
      branch: ["JP"],
      generation: ["GJ6"],
      nmember: false
    }
  },
  {
    name: "Hakui Koyori",
    img: "KOYORI.webp",
    opts:
    {
      branch: ["JP"],
      generation: ["GJ6"],
      nmember: false
    }
  },
  {
    name: "Kazama Iroha",
    img: "IROHA.webp",
    opts:
    {
      branch: ["JP"],
      generation: ["GJ6"],
      nmember: false
    }
  },
  {
    name: "Sakamata Chloe",
    img: "CHLOE.webp",
    opts:
    {
      branch: ["JP"],
      generation: ["GJ6"],
      nmember: true
    }
  },
  {
    name: "Mori Calliope",
    img: "CALLIOPE.webp",
    opts:
    {
      branch: ["EN"],
      generation: ["GE1"],
      nmember: false
    }
  },
  {
    name: "Takanashi Kiara",
    img: "KIARA.webp",
    opts:
    {
      branch: ["EN"],
      generation: ["GE1"],
      nmember: false
    }
  },
  {
    name: "Ninomae Ina'nis",
    img: "INA.webp",
    opts:
    {
      branch: ["EN"],
      generation: ["GE1"],
      nmember: false
    }
  },
  {
    name: "Gawr Gura",
    img: "GURA.webp",
    opts:
    {
      branch: ["EN"],
      generation: ["GE1"],
      nmember: false
    }
  },
  {
    name: "Watson Amelia",
    img: "AMELIA.webp",
    opts:
    {
      branch: ["EN"],
      generation: ["GE1"],
      nmember: true
    }
  },
  {
    name: "Ouro Kronii",
    img: "KRONII.webp",
    opts:
    {
      branch: ["EN"],
      generation: ["GE2"],
      nmember: false
    }
  },
  {
    name: "Nanashi Mumei",
    img: "MUMEI.webp",
    opts:
    {
      branch: ["EN"],
      generation: ["GE2"],
      nmember: false
    }
  },
  {
    name: "Hakos Baelz",
    img: "BAELZ.webp",
    opts:
    {
      branch: ["EN"],
      generation: ["GE2"],
      nmember: false
    }
  },
  {
    name: "Tsukumo Sana",
    img: "SANA.webp",
    opts:
    {
      branch: ["EN"],
      generation: ["GE2"],
      nmember: true
    }
  },
  {
    name: "Ceres Fauna",
    img: "FAUNA.webp",
    opts:
    {
      branch: ["EN"],
      generation: ["GE2"],
      nmember: true
    }
  },
  {
    name: "IRyS",
    img: "IRYS.webp",
    opts:
    {
      branch: ["EN"],
      generation: ["GE2"],
      nmember: false
    }
  },
  {
    name: "Shiori Novella",
    img: "SHIORI.webp",
    opts:
    {
      branch: ["EN"],
      generation: ["GE3"],
      nmember: false
    }
  },
  {
    name: "Koseki Bijou",
    img: "BIJOU.webp",
    opts:
    {
      branch: ["EN"],
      generation: ["GE3"],
      nmember: false
    }
  },
  {
    name: "Nerissa Ravencroft",
    img: "NERISSA.webp",
    opts:
    {
      branch: ["EN"],
      generation: ["GE3"],
      nmember: false
    }
  },
  {
    name: "Fuwawa Abyssgard",
    img: "FUWAWA.webp",
    opts:
    {
      branch: ["EN"],
      generation: ["GE3"],
      nmember: false
    }
  },
  {
    name: "Mococo Abyssgard",
    img: "MOCOCO.webp",
    opts:
    {
      branch: ["EN"],
      generation: ["GE3"],
      nmember: false
    }
  },
  {
    name: "Elizabeth Rose Bloodflame",
    img: "ELIZABETH.webp",
    opts:
    {
      branch: ["EN"],
      generation: ["GE4"],
      nmember: false
    }
  },
  {
    name: "Gigi Murin",
    img: "GIGI.webp",
    opts:
    {
      branch: ["EN"],
      generation: ["GE4"],
      nmember: false
    }
  },
  {
    name: "Cecilia Immergreen",
    img: "CECILIA.webp",
    opts:
    {
      branch: ["EN"],
      generation: ["GE4"],
      nmember: false
    }
  },
  {
    name: "Raora Panthera",
    img: "RAORA.webp",
    opts:
    {
      branch: ["EN"],
      generation: ["GE4"],
      nmember: false
    }
  },
  {
    name: "Ayunda Risu",
    img: "RISU.webp",
    opts:
    {
      branch: ["ID"],
      generation: ["GI1"],
      nmember: false
    }
  },
  {
    name: "Moona Hoshinova",
    img: "MOONA.webp",
    opts:
    {
      branch: ["ID"],
      generation: ["GI1"],
      nmember: false
    }
  },
  {
    name: "Airani Iofifteen",
    img: "IOFEFTEEN.webp",
    opts:
    {
      branch: ["ID"],
      generation: ["GI1"],
      nmember: false
    }
  },
  {
    name: "Kureiji Ollie",
    img: "OLLIE.webp",
    opts:
    {
      branch: ["ID"],
      generation: ["GI2"],
      nmember: false
    }
  },
  {
    name: "Anya Melfissa",
    img: "ANYA.webp",
    opts:
    {
      branch: ["ID"],
      generation: ["GI2"],
      nmember: false
    }
  },
  {
    name: "Pavolia Reine",
    img: "REINE.webp",
    opts:
    {
      branch: ["ID"],
      generation: ["GI2"],
      nmember: false
    }
  },
  {
    name: "Vestia Zeta",
    img: "ZETA.webp",
    opts:
    {
      branch: ["ID"],
      generation: ["GI3"],
      nmember: false
    }
  },
  {
    name: "Kaela Kovalskia",
    img: "KAELA.webp",
    opts:
    {
      branch: ["ID"],
      generation: ["GI3"],
      nmember: false
    }
  },
  {
    name: "Kobo Kanaeru",
    img: "KOBO.webp",
    opts:
    {
      branch: ["ID"],
      generation: ["GI3"],
      nmember: false
    }
  },
  {
    name: "Hideoshi Ao",
    img: "AO.webp",
    opts:
    {
      branch: ["DI"],
      generation: ["RG"],
      nmember: false
    }
  },
  {
    name: "Otonose Kanade",
    img: "KANADE.webp",
    opts:
    {
      branch: ["DI"],
      generation: ["RG"],
      nmember: false
    }
  },
  {
    name: "Ichijou Ririka",
    img: "RIRIKA.webp",
    opts:
    {
      branch: ["DI"],
      generation: ["RG"],
      nmember: false
    }
  },
  {
    name: "Juufuutei Raden",
    img: "RADEN.webp",
    opts:
    {
      branch: ["DI"],
      generation: ["RG"],
      nmember: false
    }
  },
  {
    name: "Todoroki Hajime",
    img: "HAJIME.webp",
    opts:
    {
      branch: ["DI"],
      generation: ["RG"],
      nmember: false
    }
  },
  {
    name: "Isaki Riona",
    img: "RIONA.webp",
    opts:
    {
      branch: ["DI"],
      generation: ["FG"],
      nmember: false
    }
  },
  {
    name: "Koganei Niko",
    img: "NIKO.webp",
    opts:
    {
      branch: ["DI"],
      generation: ["FG"],
      nmember: false
    }
  },
  {
    name: "Mizumiya Su",
    img: "SU.webp",
    opts:
    {
      branch: ["DI"],
      generation: ["FG"],
      nmember: false
    }
  },
  {
    name: "Rindo Chihaya",
    img: "CHIHAYA.webp",
    opts:
    {
      branch: ["DI"],
      generation: ["FG"],
      nmember: false
    }
  },
  {
    name: "Kikirara Vivi",
    img: "VIVI.webp",
    opts:
    {
      branch: ["DI"],
      generation: ["FG"],
      nmember: false
    }
  },
  {
    name: "A-Chan",
    img: "ACHAN.webp",
    opts:
    {
      branch: ["Staff"],
      generation: ["AN"],
      nmember: true
    }
  },
  {
    name: "Harusaki Nodoka",
    img: "NODOKA.webp",
    opts:
    {
      branch: ["Staff"],
      generation: ["AN"],
      nmember: false
    }
  },
];
