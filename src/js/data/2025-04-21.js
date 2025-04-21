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
    img: "sora.webp",
    opts: {
      branch: ["jp"],
      girl: true
    }
  },
  {
    name: "Robocosan",
    img: "roboco.webp",
    opts: {
      branch: ["jp"],
      girl: true
    }
  },
  {
    name: "AZKi",
    img: "azki.webp",
    opts: {
      branch: ["jp"],
      girl: true
    }
  },
  {
    name: "Sakura Miko",
    img: "miko.webp",
    opts: {
      branch: ["jp"],
      girl: true
    }
  },
  {
    name: "Hoshimachi Suisei",
    img: "suisei.webp",
    opts: {
      branch: ["jp"],
      girl: true
    }
  },
  {
    name: "Yozora Mel",
    img: "mel.webp",
    opts: {
      branch: ["jp"],
      girl: true,
      retired: true
    }
  },
  {
    name: "Aki Rosenthal",
    img: "aki.webp",
    opts: {
      branch: ["jp"],
      girl: true
    }
  },
  {
    name: "Akai Haato",
    img: "haato.webp",
    opts: {
      branch: ["jp"],
      girl: true
    }
  },
  {
    name: "Shirakami Fubuki",
    img: "fubuki.webp",
    opts: {
      branch: ["jp"],
      girl: true
    }
  },
  {
    name: "Hitomi Chris",
    img: "chris.webp",
    opts: {
      branch: ["jp"],
      girl: true,
      retired: true
    }
  },
  {
    name: "Natsuiro Matsuri",
    img: "matsuri.webp",
    opts: {
      branch: ["jp"],
      girl: true
    }
  },
  {
    name: "Minato Aqua",
    img: "aqua.webp",
    opts: {
      branch: ["jp"],
      girl: true,
      retired: true
    }
  },
  {
    name: "Murasaki Shion",
    img: "shion.webp",
    opts: {
      branch: ["jp"],
      girl: true
    }
  },
  {
    name: "Nakiri Ayame",
    img: "ayame.webp",
    opts: {
      branch: ["jp"],
      girl: true
    }
  },
  {
    name: "Yuzuki Choco",
    img: "choco.webp",
    opts: {
      branch: ["jp"],
      girl: true
    }
  },
  {
    name: "Oozora Subaru",
    img: "subaru.webp",
    opts: {
      branch: ["jp"],
      girl: true
    }
  },
  {
    name: "Ookami Mio",
    img: "mio.webp",
    opts: {
      branch: ["jp"],
      girl: true
    }
  },
  {
    name: "Nekomata Okayu",
    img: "okayu.webp",
    opts: {
      branch: ["jp"],
      girl: true
    }
  },
  {
    name: "Inugami Korone",
    img: "korone.webp",
    opts: {
      branch: ["jp"],
      girl: true
    }
  },
  {
    name: "Usada Pekora",
    img: "pekora.webp",
    opts: {
      branch: ["jp"],
      girl: true
    }
  },
  {
    name: "Uruha Rushia",
    img: "rushia.webp",
    opts: {
      branch: ["jp"],
      girl: true,
      retired: true
    }
  },
  {
    name: "Shiranui Flare",
    img: "flare.webp",
    opts: {
      branch: ["jp"],
      girl: true
    }
  },
  {
    name: "Shirogane Noel",
    img: "noel.webp",
    opts: {
      branch: ["jp"],
      girl: true
    }
  },
  {
    name: "Houshou Marine",
    img: "marine.webp",
    opts: {
      branch: ["jp"],
      girl: true
    }
  },
  {
    name: "Amane Kanata",
    img: "kanata.webp",
    opts: {
      branch: ["jp"],
      girl: true
    }
  },
  {
    name: "Tsunomaki Watame",
    img: "watame.webp",
    opts: {
      branch: ["jp"],
      girl: true
    }
  },
  {
    name: "Tokoyami Towa",
    img: "towa.webp",
    opts: {
      branch: ["jp"],
      girl: true
    }
  },
  {
    name: "Himemori Luna",
    img: "luna.webp",
    opts: {
      branch: ["jp"],
      girl: true
    }
  },
  {
    name: "Kiryu Coco",
    img: "coco.webp",
    opts: {
      branch: ["jp"],
      girl: true,
      retired: true
    }
  },
  {
    name: "Yukihana Lamy",
    img: "lamy.webp",
    opts: {
      branch: ["jp"],
      girl: true
    }
  },
  {
    name: "Momosuzu Nene",
    img: "nene.webp",
    opts: {
      branch: ["jp"],
      girl: true
    }
  },
  {
    name: "Shishiro Botan",
    img: "botan.webp",
    opts: {
      branch: ["jp"],
      girl: true
    }
  },
  {
    name: "Omaru Polka",
    img: "polka.webp",
    opts: {
      branch: ["jp"],
      girl: true
    }
  },
  {
    name: "Mano Aloe",
    img: "aloe.webp",
    opts: {
      branch: ["jp"],
      girl: true,
      retired: true
    }
  },
  {
    name: "La+ Darkness",
    img: "laplus.webp",
    opts: {
      branch: ["jp"],
      girl: true
    }
  },
  {
    name: "Takane Lui",
    img: "lui.webp",
    opts: {
      branch: ["jp"],
      girl: true
    }
  },
  {
    name: "Hakui Koyori",
    img: "koyori.webp",
    opts: {
      branch: ["jp"],
      girl: true
    }
  },
  {
    name: "Sakamata Chloe",
    img: "chloe.webp",
    opts: {
      branch: ["jp"],
      girl: true
    }
  },
  {
    name: "Kazama Iroha",
    img: "iroha.webp",
    opts: {
      branch: ["jp"],
      girl: true
    }
  },
  {
    name: "Friend A (A-chan)",
    img: "achan.webp",
    opts: {
      branch: ["staff"],
      girl: true
    }
  },
  {
    name: "Harusaki Nodoka",
    img: "nodoka.webp",
    opts: {
      branch: ["staff"],
      girl: true
    }
  },
  {
    name: "Ayunda Risu",
    img: "risu.webp",
    opts: {
      branch: ["id"],
      girl: true
    }
  },
  {
    name: "Moona Hoshinova",
    img: "moona.webp",
    opts: {
      branch: ["id"],
      girl: true
    }
  },
  {
    name: "Airani Iofifteen",
    img: "iofi.webp",
    opts: {
      branch: ["id"],
      girl: true
    }
  },
  {
    name: "Kureiji Ollie",
    img: "ollie.webp",
    opts: {
      branch: ["id"],
      girl: true
    }
  },
  {
    name: "Anya Melfissa",
    img: "anya.webp",
    opts: {
      branch: ["id"],
      girl: true
    }
  },
  {
    name: "Pavolia Reine",
    img: "reine.webp",
    opts: {
      branch: ["id"],
      girl: true
    }
  },
  {
    name: "Vestia Zeta",
    img: "zeta.webp",
    opts: {
      branch: ["id"],
      girl: true
    }
  },
  {
    name: "Kaela Kovalaskia",
    img: "kaela.webp",
    opts: {
      branch: ["id"],
      girl: true
    }
  },
  {
    name: "Kobo Kanaeru",
    img: "kobo.webp",
    opts: {
      branch: ["id"],
      girl: true
    }
  },
  {
    name: "Mori Calliope",
    img: "calli.webp",
    opts: {
      branch: ["en"],
      girl: true
    }
  },
  {
    name: "Takanashi Kiara",
    img: "kiara.webp",
    opts: {
      branch: ["en"],
      girl: true
    }
  },
  {
    name: "Ninomae Ina'nis",
    img: "ina.webp",
    opts: {
      branch: ["en"],
      girl: true
    }
  },
  {
    name: "Gawr Gura",
    img: "gura.webp",
    opts: {
      branch: ["en"],
      girl: true
    }
  },
  {
    name: "Watson Amelia",
    img: "ame.webp",
    opts: {
      branch: ["en"],
      girl: true
    }
  },
  {
    name: "IRyS",
    img: "irys.webp",
    opts: {
      branch: ["en"],
      girl: true
    }
  },
  {
    name: "Ceres Fauna",
    img: "fauna.webp",
    opts: {
      branch: ["en"],
      girl: true
    }
  },
  {
    name: "Ouro Kronii",
    img: "kronii.webp",
    opts: {
      branch: ["en"],
      girl: true
    }
  },
  {
    name: "Tsukumo Sana",
    img: "sana.webp",
    opts: {
      branch: ["en"],
      girl: true,
      retired: true
    }
  },
  {
    name: "Nanashi Mumei",
    img: "mumei.webp",
    opts: {
      branch: ["en"],
      girl: true
    }
  },
  {
    name: "Hakos Baelz",
    img: "bae.webp",
    opts: {
      branch: ["en"],
      girl: true
    }
  },
  {
    name: "Shiori Novella",
    img: "shiori.webp",
    opts: {
      branch: ["en"],
      girl: true
    }
  },
  {
    name: "Koseki Bijou",
    img: "bijou.webp",
    opts: {
      branch: ["en"],
      girl: true
    }
  },
  {
    name: "Nerrisa Ravencroft",
    img: "nerrisa.webp",
    opts: {
      branch: ["en"],
      girl: true
    }
  },
  {
    name: "Fuwawa Abyssgard",
    img: "fuwawa.webp",
    opts: {
      branch: ["en"],
      girl: true
    }
  },
  {
    name: "Mococo Abyssgard",
    img: "mococo.webp",
    opts: {
      branch: ["en"],
      girl: true
    }
  },
  {
    name: "Yogiri",
    img: "yogiri.webp",
    opts: {
      branch: ["cn"],
      girl: true,
      retired: true
    }
  },
  {
    name: "Civia",
    img: "civia.webp",
    opts: {
      branch: ["cn"],
      girl: true,
      retired: true
    }
  },
  {
    name: "Spade Echo",
    img: "echo.webp",
    opts: {
      branch: ["cn"],
      girl: true,
      retired: true
    }
  },
  {
    name: "Doris",
    img: "doris.webp",
    opts: {
      branch: ["cn"],
      girl: true,
      retired: true
    }
  },
  {
    name: "Rosalyn",
    img: "rosalyn.webp",
    opts: {
      branch: ["cn"],
      girl: true,
      retired: true
    }
  },
  {
    name: "Artia",
    img: "artia.webp",
    opts: {
      branch: ["cn"],
      girl: true,
      retired: true
    }
  },
  {
    name: "Hanasaki Miyabi",
    img: "miyabi.webp",
    opts: {
      branch: ["st"],
      boy: true
    }
  },
  {
    name: "Kanade Izuru",
    img: "izuru.webp",
    opts: {
      branch: ["st"],
      boy: true
    }
  },
  {
    name: "Arurandeisu",
    img: "aruran.webp",
    opts: {
      branch: ["st"],
      boy: true
    }
  },
  {
    name: "Rikka",
    img: "rikka.webp",
    opts: {
      branch: ["st"],
      boy: true
    }
  },
  {
    name: "Kagami Kira",
    img: "kira.webp",
    opts: {
      branch: ["st"],
      boy: true,
      retired: true
    }
  },
  {
    name: "Yakushiji Suzaku",
    img: "suzaku.webp",
    opts: {
      branch: ["st"],
      boy: true,
      retired: true
    }
  },
  {
    name: "Astel Leda",
    img: "astel.webp",
    opts: {
      branch: ["st"],
      boy: true
    }
  },
  {
    name: "Kishido Temma",
    img: "temma.webp",
    opts: {
      branch: ["st"],
      boy: true
    }
  },
  {
    name: "Yukoku Roberu",
    img: "roberu.webp",
    opts: {
      branch: ["st"],
      boy: true
    }
  },
  {
    name: "Kageyama Shien",
    img: "shien.webp",
    opts: {
      branch: ["st"],
      boy: true
    }
  },
  {
    name: "Aragami Oga",
    img: "oga.webp",
    opts: {
      branch: ["st"],
      boy: true
    }
  },
  {
    name: "Tsukishita Kaoru",
    img: "kaoru.webp",
    opts: {
      branch: ["st"],
      boy: true,
      retired: true
    }
  },
  {
    name: "Yatogami Fuma",
    img: "fuma.webp",
    opts: {
      branch: ["st"],
      boy: true
    }
  },
  {
    name: "Utsugi Uyu",
    img: "uyu.webp",
    opts: {
      branch: ["st"],
      boy: true
    }
  },
  {
    name: "Hizaki Gamma",
    img: "gamma.webp",
    opts: {
      branch: ["st"],
      boy: true
    }
  },
  {
    name: "Minase Rio",
    img: "rio.webp",
    opts: {
      branch: ["st"],
      boy: true
    }
  },
  {
    name: "Regis Altare",
    img: "regis.webp",
    opts: {
      branch: ["sten"],
      boy: true
    }
  },
  {
    name: "Magni Dezmond",
    img: "magni.webp",
    opts: {
      branch: ["sten"],
      boy: true,
      retired: true
    }
  },
  {
    name: "Axel Syrios",
    img: "axel.webp",
    opts: {
      branch: ["sten"],
      boy: true
    }
  },
  {
    name: "Noir Vesper",
    img: "vesper.webp",
    opts: {
      branch: ["sten"],
      boy: true,
      retired: true
    }
  },
  {
    name: "Gavis Bettel",
    img: "gavis.webp",
    opts: {
      branch: ["sten"],
      boy: true
    }
  },
  {
    name: "Machina X Flayon",
    img: "machina.webp",
    opts: {
      branch: ["sten"],
      boy: true
    }
  },
  {
    name: "Banzoin Hakka",
    img: "hakka.webp",
    opts: {
      branch: ["sten"],
      boy: true
    }
  },
  {
    name: "Josuiji Shinri",
    img: "shinri.webp",
    opts: {
      branch: ["sten"],
      boy: true
    }
  },
  {
    name: "Hiodoshi Ao",
    img: "ao.webp",
    opts: {
      branch: ["devis"],
      girl: true
    }
  },
  {
    name: "Otonose Kanade",
    img: "kanade.webp",
    opts: {
      branch: ["devis"],
      girl: true
    }
  },
  {
    name: "Ichijou Ririka",
    img: "ririka.webp",
    opts: {
      branch: ["devis"],
      girl: true
    }
  },
  {
    name: "Juufuutei Raden",
    img: "raden.webp",
    opts: {
      branch: ["devis"],
      girl: true
    }
  },
  {
    name: "Todoroki Hajime",
    img: "hajime.webp",
    opts: {
      branch: ["devis"],
      girl: true
    }
  },
  {
    name: "Jurard T Rexford",
    img: "jurard.webp",
    opts: {
      branch: ["sten"],
      boy: true
    }
  },
  {
    name: "Goldbullet",
    img: "goldbullet.webp",
    opts: {
      branch: ["sten"],
      boy: true
    }
  },
  {
    name: "Octavio",
    img: "octavio.webp",
    opts: {
      branch: ["sten"],
      boy: true
    }
  },
  {
    name: "Crimson Ruze",
    img: "crimson.webp",
    opts: {
      branch: ["sten"],
      boy: true
    }
  },
  {
    name: "Elizabeth Rose Bloodflame",
    img: "elizabeth.png",
    opts: {
      branch: ["en"],
      girl: true
    }
  },
  {
    name: "Gigi Murin",
    img: "gigi.png",
    opts: {
      branch: ["en"],
      girl: true
    }
  },
  {
    name: "Cecilia Immergreen",
    img: "cecilia.png",
    opts: {
      branch: ["en"],
      girl: true
    }
  },
  {
    name: "Raora Panthera",
    img: "raora.png",
    opts: {
      branch: ["en"],
      girl: true
    }
  },
]
