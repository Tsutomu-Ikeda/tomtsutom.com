const photos = [
  {
    title: "三郎丸蒸留所",
    image: "/images/saburomaru.jpg",
    id: "saburomaru",
    taken_at: new Date("2024-02-24 00:00:00"),
    description: "富山県の三郎丸蒸留所へ見学に行った際に撮影した写真です。三郎丸蒸留所のウィスキーはスモーキーさが特徴で、一度飲んだら癖になります。"
  },
  {
    title: "外郭放水路",
    image: "/images/chikashinden.jpg",
    id: "chikashinden",
    taken_at: new Date("2023-12-01 00:00:00"),
    description: "「防災地下神殿」の異名で知られる外郭放水路です。大雨の際に水害を防ぐために貯められた立坑の水を江戸川へ放水するための施設です。"
  },
  {
    title: "傳八",
    image: "/images/bateira.jpg",
    id: "bateira",
    taken_at: new Date("2023-11-01 00:00:00"),
    description: "表参道の居酒屋「傳八」のいわしのバッテラです。いわしと牛タンという謎の組み合わせを推している不思議なお店です。"
  },
  {
    title: "みくりが池",
    image: "/images/mikurigaike.jpg",
    id: "mikurigaike",
    taken_at: new Date("2022-11-01 00:00:00"),
    description: "立山黒部アルペンルートの道中のみくりが池です。湖の後ろに雪山が広がり幻想的な風景でした。"
  },
  {
    title: "トヨタ産業技術館",
    image: "/images/toyota-museum.jpg",
    id: "toyota-museum",
    taken_at: new Date("2022-07-01 00:00:00"),
    description: "トヨタ産業技術館で撮影した写真です。機織機の完全自動化までの道のりから自動車開発に至る経緯を知れる施設です。"
  },
  {
    title: "牛久大仏",
    image: "/images/ushiku.jpg",
    id: "ushiku",
    taken_at: new Date("2022-05-01 00:00:00"),
    description: "牛久大仏、でかいです。"
  },
  {
    title: "伊豆大島",
    image: "/images/habunoie.jpg",
    id: "habunoie",
    taken_at: new Date("2021-09-01 00:00:00"),
    description: "伊豆大島の「はぶの家」に宿泊したときの夜ご飯です。地元の魚や山菜を使った料理が美味しかったです。"
  },
  {
    title: "高千穂峡",
    image: "/images/takachiho.jpg",
    id: "takachiho",
    taken_at: new Date("2021-03-01 00:00:00"),
    description: "宮崎県にある高千穂峡の写真です。ボートに乗り、渓谷の中を進むと大きな滝に出会えます。"
  },
  {
    title: "くじら",
    image: "/images/whale.jpg",
    id: "whale",
    taken_at: new Date("2020-04-01 00:00:00"),
    description: <span>桜木町にある「横浜くじら」というお店で食べたくじらのあぶりです。<br />お店の詳細は <a href="https://goo.gl/maps/84iM5dnYbnvuCyRK6" target="_blank">https://goo.gl/maps/84iM5dnYbnvuCyRK6</a> をご覧ください。</span>,
  },
  {
    title: "いわしコロッケ",
    image: "/images/iwakoro.jpg",
    id: "iwakoro",
    taken_at: new Date("2020-02-01 00:00:00"),
    description: <span>西荻窪駅近くの「戎(えびす)」というお店で食べたいわしコロッケです。お店の詳細は <a href='https://goo.gl/maps/w63eenniGttVSEjS6' target='_blank'>https://goo.gl/maps/w63eenniGttVSEjS6</a> をご覧ください。</span>
  },
  {
    title: "ピザ",
    image: "/images/pizza.jpg",
    id: "pizza",
    taken_at: new Date("2020-01-01 00:00:00"),
    description: "市ヶ谷にある「No.4」というお店のゴルゴンゾーラピザです。千代田区四番町にあるからNo.4、素敵な由来ですね。",
  },
  {
    title: "餃子",
    image: "/images/gyoza.jpg",
    id: "gyoza",
    taken_at: new Date("2020-01-01 00:00:00"),
    description: "代々木駅近くの「でっかい餃子 曽さんの店」というお店名物の巨大餃子です。"
  },
  {
    title: "代々木",
    image: "/images/yoyogi.jpg",
    id: "yoyogi",
    taken_at: new Date("2019-09-01 00:00:00"),
    description: "新宿駅を新南改札から出て、代々木駅方面に歩くと見えるTAKASHIMAYA TIMES SQUAREです。新宿の中でも比較的落ち着いていて散歩しやすいので好きな場所です。"
  },
  {
    title: "肉めし",
    image: "/images/nikumeshi.jpg",
    id: "nikumeshi",
    taken_at: new Date("2019-07-01 00:00:00"),
    description: "田町駅にかつてあった「肉めし岡むら屋」の辛ねぎ牛めしです。600円でお腹いっぱいになれる貴重なお店の1つでした。",
  },
  {
    title: "ごぼ天うどん",
    image: "/images/goboten.jpg",
    id: "goboten",
    taken_at: new Date("2019-01-01 00:00:00"),
    description: "恵比寿駅近くの「博多うどん酒場イチカバチカ」というお店のごぼ天うどんです。ごぼ天うどんを人生で初めて食べたのがこのお店でした。",
  },
  {
    title: "自宅",
    image: "/images/zitaku.jpg",
    id: "zitaku",
    taken_at: new Date("2018-03-01 00:00:00"),
    description: "自宅の本棚を撮影したフィルムのネガをさらにカメラで撮って色反転した画像です。"
  },
  {
    title: "鎌倉",
    image: "/images/kamakura.jpg",
    id: "kamakura",
    taken_at: new Date("2018-02-01 00:00:00"),
    description: "北鎌倉駅と鎌倉駅の間の第三鎌倉道踏切付近の広場の蠟梅です。大学1年生のころの思い出の場所です。"
  },
];

export default photos;
