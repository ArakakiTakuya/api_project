exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("restaurants")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("restaurants").insert([
        {
          id: "f603800",
          restaurant_name: "もぅあしびー",
          category: "沖縄料理と活魚と泡盛",
          budget: 3000,
          image_url: "https://rimage.gnst.jp/rest/img/2kxen71n0000/t_003w.jpg",
        },
        {
          id: "fbkf000",
          restaurant_name: "HAMMER II（ハンマーツー）",
          category: "個室完備のラウンジバー",
          budget: 3000,
          image_url: "https://rimage.gnst.jp/rest/img/aprw6xzp0000/t_0nb4.jpg",
        },
        {
          id: "fawd601",
          restaurant_name: "Kimishima",
          category: "本格フレンチレストラン",
          budget: 7000,
          image_url: "https://rimage.gnst.jp/rest/img/g255sh6j0000/t_001t.jpg",
        },
        {
          id: "f264400",
          restaurant_name: "土間土間 沖縄新都心店",
          category: "和風居酒屋",
          budget: 2500,
          image_url: "https://rimage.gnst.jp/rest/img/s1tp84jx0000/t_0ogr.jpg",
        },
        {
          id: "fawd000",
          restaurant_name: "沖縄料理 泡盛 琉歌 沖縄本店",
          category: "沖縄料理と多彩な泡盛",
          budget: 2500,
          image_url: "https://rimage.gnst.jp/rest/img/hmzhn3st0000/t_0ncf.jpg",
        },
        {
          id: "fb0h202",
          restaurant_name: "excellent venue La Opera",
          category: "久茂地 貸切スペース",
          budget: 3000,
          image_url: "https://rimage.gnst.jp/rest/img/brekk26z0000/t_0005.jpg",
        },
        {
          id: "fb60100",
          restaurant_name: "琉球料理 あしびJima",
          category: "古民家風沖縄郷土料理店",
          budget: 3000,
          image_url: "https://rimage.gnst.jp/rest/img/1h3sysku0000/t_0n72.jpg",
        },
        {
          id: "f402603",
          restaurant_name: "あぐーの隠れ家 冨着店",
          category: "焼肉・しゃぶしゃぶ・",
          budget: 3000,
          image_url: "https://rimage.gnst.jp/rest/img/p01h9zjm0000/t_004a.jpg",
        },
        {
          id: "fbna900",
          restaurant_name: "和琉創作Dining 新",
          category: "和空間で味わう沖縄料理",
          budget: 3500,
          image_url: "https://rimage.gnst.jp/rest/img/76zxs3gw0000/t_0n67.jpg",
        },
        {
          id: "f511901",
          restaurant_name: "VOGUE",
          category: "貸切・パーティー",
          budget: 3000,
          image_url: "https://rimage.gnst.jp/rest/img/31tn5srw0000/t_000r.jpg",
        },
        {
          id: "f217846",
          restaurant_name: "杏屋 国場店",
          category: "沖縄 居酒屋",
          budget: 2500,
          image_url: "https://rimage.gnst.jp/rest/img/131ugkts0000/t_0002.jpg",
        },
        {
          id: "fb7n902",
          restaurant_name: "SORAOTO～REBEL THREE～",
          category: "久茂地ルーフトップバー",
          budget: 2500,
          image_url: "https://rimage.gnst.jp/rest/img/b9p4mb5b0000/t_0n7i.jpg",
        },
        {
          id: "fbfx800",
          restaurant_name: "SOLiS GRANDE",
          category: "絶景も楽しむイタリアン",
          budget: 2000,
          image_url: "https://rimage.gnst.jp/rest/img/eu0acdst0000/t_0njc.jpg",
        },
        {
          id: "f384802",
          restaurant_name: "揚げもんとサワーの店 アゲサワ",
          category: "揚げ物とサワーの店",
          budget: 2000,
          image_url: "https://rimage.gnst.jp/rest/img/j06p5h2h0000/t_0n5d.png",
        },
        {
          id: "f264401",
          restaurant_name: "ゆくり家 お花",
          category: "和風ダイニング居酒屋",
          budget: 3000,
          image_url: "https://rimage.gnst.jp/rest/img/dazugzya0000/t_0n6u.jpg",
        },
      ]);
    });
};
