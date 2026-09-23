// Japanese content for the language toggle. Keyed by a stable English field
// (title / name / src) rather than array position, so this doesn't silently
// drift out of sync if content.ts is reordered or edited later — a missing
// key just falls back to the English text instead of showing the wrong item.
//
// The house roof signs and quick-jump buttons (SECTION_SIGN in world.ts)
// use JA_SECTION_SIGN below, rendered in a separate Japanese pixel font
// (DotGothic16, see layout.tsx) rather than the Latin-only VT323 used for
// the English signs — VT323 has no Japanese glyphs.
//
// Not translated on purpose:
// - Book/anime cover titles (COVERS). Official Japanese localized titles
//   can differ from a literal translation, and getting a well-known title
//   wrong is worse than leaving it in English.
// - Photo `alt` text (screen-reader only, not visibly rendered).
// - Tech/tool names (React, AWS, Rails, ...) — left as-is, standard practice.

import type { SectionKey } from "./world";

export const JA_TAGLINE = "人生一度きり :)";

export const JA_SECTION_TITLE: Record<SectionKey, string> = {
  about: "自己紹介",
  journey: "経歴",
  skills: "スキル",
  projects: "プロジェクト",
  hobbies: "趣味・カメラロール",
  contact: "お問い合わせ",
};

// Short labels for the house roof signs and quick-jump buttons — kept
// brief on purpose, same spirit as the English SECTION_SIGN (short enough
// to sit on a little roof plaque).
export const JA_SECTION_SIGN: Record<SectionKey, string> = {
  about: "自己紹介",
  journey: "経歴",
  skills: "スキル",
  projects: "作品",
  hobbies: "趣味",
  contact: "連絡先",
};

export const JA_ABOUT = {
  intro: [
    "こんにちは、東京在住のソフトウェア開発者、リティカです。",
    "インドのグジャラート州バローダで生まれ、軍人家庭の子として数年おきに引っ越しを繰り返しながら育ちました。そうした環境は人を内向的にするか好奇心旺盛にするかのどちらかだと思いますが、私は後者でした。新しい場所に馴染んでいくことが今でも好きです。",
    "工学の道に進み、バンガロールのNew Horizon College of Engineeringで電気電子工学を専攻しました。卒業後は日本企業への新卒採用という形で、東京で働くことになりました。決して簡単な道のりではありませんでしたが、学びの多い経験でした。",
    "電気電子工学を学んでいましたが、ソフトウェア開発にも夢中になりました。プログラミング未経験からスタートし、実務の中でRails、Laravel、Svelte、React/Next.js、PHP、WordPressなど、必要に応じて技術を身につけてきました。",
    "日本の職場からは、規律や細部へのこだわり、仕事の進め方の丁寧さを学びました。小さくても役立つツールや、明確な仕様、そして誰かの日常に実際に届くものを作ることが好きです。",
  ],
  languages: [
    { name: "英語", note: "流暢" },
    { name: "ヒンディー語", note: "流暢" },
    { name: "日本語", note: "日常業務レベル" },
  ],
};

// ---- Clubs (Journey panel), keyed by the English `name` ----
export const JA_CLUBS: Record<string, string> = {
  "個人開発 Club": "社内のソロ開発・個人サイドプロジェクトの集まり(東京)",
  "U-Create": "NHCEの電気電子工学研究部",
  "Media Club": "ポスターデザイン、イベント登録運営",
  "Rocket Club": "ドローン・Arduino Cansatの製作",
};

// ---- Timeline (Journey panel), keyed by the English `title` ----
export const JA_TIMELINE: Record<string, { title: string; detail?: string }> = {
  "10th Grade": {
    title: "10年生",
    detail: "GPA 9.0・2017〜18年度ベストアスリート賞",
  },
  "12th Grade (PCM)": {
    title: "12年生(物理・化学・数学)",
    detail: "得点率85%",
  },
  "B.E. Electrical & Electronics Engineering": {
    title: "電気電子工学学士(B.E.)",
    detail:
      "GPA 9.02。ハードウェア中心のカリキュラムに加え、マイクロプロセッサと組み込みC言語も履修。U-Create研究部所属。",
  },
  "Intern @ Bharat Electronics Limited (BEL)": {
    title: "Bharat Electronics Limited(BEL)インターン",
    detail:
      "BELはインド国防省傘下の公営企業で、防衛用電子機器を製造しています。無線通信部門の電気・電子分野をローテーションで経験し、実際の防衛産業の現場でハードウェアに触れる貴重な機会となりました。",
  },
  "Intern @ Hindustan Aeronautics Limited (HAL)": {
    title: "Hindustan Aeronautics Limited(HAL)インターン",
    detail:
      "先進軽量ヘリコプター(ALH)のシステムを深く学びました。マニュアルと先輩社員の指導のもと、電気系統と機械系統がどのように連携しているかを探求。リサーチ力、技術文書の読解力、問題解決力を磨き、航空宇宙産業の実際の運用について理解を深めました。",
  },
  "Full Stack Web Developer": {
    title: "フルスタックWeb開発者",
    detail:
      "新卒でそのまま入社。要件をフロー図やUIワイヤーフレーム(Cacoo、Figma)に落とし込み、開発着手前にチームで認識を合わせるところから担当。その後、Rails、Laravel、Svelte、React/Next.js、PHP、WordPressといった技術(すべて実務で習得)を使って機能の開発・改修を行っています。2024年の全社ハッカソンでは、多職種混成チームで優勝しました。",
  },
};

// ---- Skills (Skills panel) ----
export const JA_CERTIFICATIONS: Record<string, string> = {
  "AWS Certified Solutions Architect – Associate (SAA) · Jun 2026":
    "AWS認定ソリューションアーキテクト – アソシエイト(SAA)・2026年6月取得予定",
  "Certificate in Artificial Intelligence · Smartknower (Jul–Aug 2021)":
    "人工知能に関する修了証・Smartknower(2021年7〜8月)",
};

// ---- Projects (Projects panel), keyed by the English `title` ----
export const JA_PROJECTS: Record<string, { title: string; blurb: string }> = {
  "2024 Company Hackathon: 1st place": {
    title: "2024年 全社ハッカソン:優勝",
    blurb:
      "多職種混成チーム(Team Lakers)でフルスタックのデジタル招待状プラットフォームを開発し、全社ハッカソンで優勝しました。詳細は下記をご覧ください。",
  },
  "In-house product features (Rails / Laravel / React)": {
    title: "社内プロダクト機能開発(Rails / Laravel / React)",
    blurb:
      "要件をまずフロー図とワイヤーフレームに整理し、その上で日本市場向け社内プロダクトの機能開発・改修を継続的に担当。各フレームワークのコードベースを実務の中で習得しながら、厳格なドキュメント作成とレビュー体制の中で開発を進めました。",
  },
  "Quest of Life: a pixel-RPG habit tracker": {
    title: "Quest of Life:ピクセルRPG風習慣化アプリ",
    blurb:
      "実は、これは本物の生産性向上アプリを、ピクセルRPG風に仕立てたものです。実際の習慣やタスクが「クエスト」になり、達成するとキャラクターがレベルアップし、連続記録(ストリーク)が積み上がり、毎日新しいボスと対決できます。3つのことを実践で学ぶために制作を始めました:Webゲームの仕組み(マップ移動、経験値とレベルアップ、ボス戦)、ゼロから作る代わりにピクセルアートのゲーム・デザインアセットパックを活用した開発、そしてその裏側を支える実際のAWSインフラ(Lambda + API Gateway + DynamoDB)です。さらに、Gemini搭載のAIナレーターが進捗に応じて反応してくれたり、AIガイドがクエストを自動で作成してくれたりもします。",
  },
  "Arduino Cansat: IoT Weather Station": {
    title: "Arduino Cansat:IoT気象観測ステーション",
    blurb:
      "大学のロケット部と共同で製作した、ロケットで打ち上げる缶サイズの気象観測装置。BMP・DHTセンサーが2秒ごとに気温・気圧・湿度をArduino無線で地上の受信機に送信し、高度100mからパラシュートで制御しながら落下させました。",
  },
  "Smart-Glass Multimeter": {
    title: "スマートグラス・マルチメーター",
    blurb:
      "Arduinoベースのマルチメーターで、測定値をHC-05 Bluetooth経由でメガネ型デバイスにリアルタイム表示。狭所での電気作業をハンズフリーで行えるようにしました。",
  },
  "Autonomous Obstacle-Avoiding Bot": {
    title: "自律型障害物回避ロボット",
    blurb:
      "超音波センサーを使い、障害物を避けながら前進するロボット。Arduino Unoとモータードライバーで製作し、Tinkercadでシミュレーションを行いました。",
  },
  "Heat Detection & Fire Alarm Simulation": {
    title: "熱感知・火災報知シミュレーション",
    blurb:
      "コンデンサ、抵抗、ダイオード、トランジスタ、トランスを使ったブレッドボード回路。設定温度を超えるとブザーが鳴動する仕組みです。",
  },
  "Four-Wheel RC Recon Vehicle": {
    title: "4輪RC偵察ビークル",
    blurb:
      "小型ワイヤレスカメラ搭載のラジコン型ロボットで、映像を任意の画面にリアルタイム配信。人が容易に入れない場所での使用を想定して製作し、無線伝送とモーター制御を実践的に学びました。",
  },
  "Electricity Demand Prediction (ML)": {
    title: "電力需要予測(機械学習)",
    blurb:
      "データ探索→モデル選定→学習→予測という一連の機械学習ワークフローを実践。公開データセットを用いて地域の電力需要を予測しました。",
  },
  "STEMX Robotics Workshop: 2nd place": {
    title: "STEMXロボティクスワークショップ:準優勝",
    blurb:
      "時間制限のあるチーム制作・競技型ワークショップ。少人数チームでLego Mindstormsロボットを組み立て・プログラミングし、総合2位を獲得しました。",
  },
  "Robotics & Automation Elective: Pick-and-Place": {
    title: "ロボティクス&オートメーション選択科目:ピック&プレース",
    blurb:
      "「ロボティクス&オートメーション」選択科目の課題。ロボットアームをプログラミングして小さな部品のピック&プレース動作を実現し、産業用ロボット制御の基礎を実践的に学びました。",
  },
  "Industrial Visit: FANUC Robotics": {
    title: "企業見学:FANUCロボティクス",
    blurb:
      "大学の企業見学でFANUCを訪問し、産業用ロボットアームを間近で見学・操作を体験。BEL・HALでのインターンと合わせて、産業オートメーションに実際に触れる機会となりました。",
  },
};

// ---- Hackathon deep dive ----
export const JA_HACKATHON = {
  title: "Team Lakers:デジタル結婚式招待状プラットフォーム",
  subtitle: "2024年 全社ハッカソン・優勝",
  sections: [
    {
      label: "概要",
      body: "多職種混成チームが実際に動くプロダクトを開発・発表する全社ハッカソン。Team Lakersは、招待状作成用のモバイル管理アプリ、高速な招待客向けWebページ、Rust製API、コード管理されたAWSインフラまでを備えたデジタル結婚式招待状プラットフォームで優勝しました。チーム名とロゴは、メンバーの一人がコービー・ブライアントのファンだったことと、IBJのハートマークを掛け合わせたものです。",
    },
    {
      label: "解決した課題",
      body: "新郎新婦は招待状を簡単に作成し、出欠確認を集められる仕組みを必要としており、招待客側はどんなスマートフォンでも瞬時に表示されるページを求めていました。このプラットフォームでは、主催者がアプリ内でテンプレート(フォント・色・レイアウト)を選択でき、招待客はカスタマイズされた招待状を開いて、ギャラリーを閲覧し、オンラインで出欠回答できます。",
    },
    {
      label: "開発したもの",
      items: [
        "招待客向けWebページ(Svelte):日時・会場、二人のストーリー、ギャラリー、RSVPの各セクションを備えたテンプレート型招待状。APIデータに応じて動的にスタイルを変更。",
        "管理アプリ(Flutter、iOS/Android対応):使い慣れたイベントアプリを参考にしたイベント作成画面。Firebase App Distributionでテスターに配布。",
        "バックエンド(Rust):オニオンアーキテクチャで招待状コンテンツを配信するAPI。Goサーバーとベンチマーク比較を実施。",
        "インフラ(AWS + Terraform):ロードバランサーが/apiと/rsvpをアプリサーバーに振り分けるVPC構成、プライベートサブネット内のマネージドDB、画像最適化レイヤーまで、すべてコードで定義しCI/CDパイプラインを構築。",
        "デザイン(Figma):ロゴ、3種類の招待状テンプレート、コンポーネント、クリック可能なプロトタイプを作成。",
      ],
    },
    {
      label: "仕組み",
      items: [
        "フロントエンドがAPIから招待状データを取得してSvelteストアに保存し、条件付きレンダリングでテンプレート1・2・3を切り替え。",
        "フォントと色はテンプレートごとに動的に適用されるため、1セットのコンポーネントですべての見た目に対応。",
        "Terraform CI/CD:プルリクエストを開くとterraform planが実行され差分を表示、mainへのマージでterraform applyが実行される。",
        "画像URLを正規化(パラメータの順序・大文字小文字)することで、同等のリクエストが1つのキャッシュエントリを共有。画像はクエリパラメータに基づき一度だけリサイズされ、以降はキャッシュから配信。",
      ],
    },
    {
      label: "学び",
      body: "Svelteは事前コンパイルを行い仮想DOMを使わないため、招待状ページを軽量に保てました。チームのベンチマークでは、Googleのトップページより約3倍高速に読み込まれました。バックエンド面では、RustはGoよりバージョン間の互換性が壊れやすく、Goサーバーの方がベンチマークで高速だったため、チームは「RustはWeb APIには最適ではないが、低レイヤーの処理では依然として強みを発揮する」という結論に至りました。",
    },
  ] as { label: string; body?: string; items?: string[] }[],
  imageCaptions: {
    "1st place announcement": "優勝発表",
    "Presenting to the room": "発表の様子",
    "Infrastructure diagram: Terraform-managed AWS setup":
      "インフラ構成図:Terraformで管理するAWS環境",
  } as Record<string, string>,
};

// ---- Highlights (Journey panel), keyed by the English `text` ----
export const JA_HIGHLIGHTS: Record<string, string> = {
  "☑️ AWS Certified Solutions Architect – Associate":
    "☑️ AWS認定ソリューションアーキテクト – アソシエイト",
  "🏆 Winner: Company-wide hackathon (IBJ Inc.)": "🏆 優勝:全社ハッカソン(IBJ Inc.)",
  "Taught English at community camps in Japan": "日本の地域キャンプで英語を指導",
  "Co-organizer: Community Meetups for Indians in Tokyo":
    "共同主催:在京インド人コミュニティ交流会",
  "Event Coordinator: Japan Day (NHCE × Zenken)": "イベント運営:Japan Day(NHCE×Zenken)",
  "🏆 Winner: Debate Competition (NHCE)": "🏆 優勝:ディベート大会(NHCE)",
  "AI certificate · Smartknower (Jul–Aug 2021)": "AI修了証・Smartknower(2021年7〜8月)",
  "Honourable Mention: MUN Security Council (NHCE)":
    "優秀賞:模擬国連 安全保障理事会(NHCE)",
  "🥈 2nd place: STEMX robotics workshop competition":
    "🥈 準優勝:STEMXロボティクスワークショップ大会",
  "Youth For Seva volunteer during Covid": "コロナ禍でYouth For Sevaボランティア活動",
  "🏆 Best Athlete in School": "🏆 校内ベストアスリート賞",
};

// ---- Hobbies (Hobbies panel), keyed by the English hobby name in HOBBIES ----
export const JA_HOBBIES: Record<string, string> = {
  Photography: "写真",
  Reading: "読書",
  Music: "音楽",
  Basketball: "バスケットボール",
  "Horse riding": "乗馬",
  Activities: "アクティビティ",
  Travel: "旅行",
  Volunteering: "ボランティア",
  Biking: "バイク",
  "Anime & K-drama": "アニメ・韓国ドラマ",
};

// ---- Photo captions (Hobbies panel), keyed by the photo's `src` ----
export const JA_PHOTO_CAPTIONS: Record<string, string> = {
  "/photos/photography/photographer.jpg": "バードウォッチング",
  "/photos/photography/butterfly.jpg": "蝶",
  "/photos/photography/dragonfly.jpg": "トンボ",
  "/photos/photography/barbet.jpg": "アオゴシキドリ",
  "/photos/photography/starling.jpg": "クリイロムクドリ",
  "/photos/photography/macaque.jpg": "好奇心旺盛なマカク",
  "/photos/photography/squirrel.jpg": "リスのシルエット",
  "/photos/photography/foliage.jpg": "小さな訪問者",
  "/photos/photography/moon.jpg": "満月",
  "/photos/photography/rabbit.jpg": "うさぎ",

  "/photos/activities/climbing.jpg": "懸垂下降",
  "/photos/activities/samurai-armor.jpg": "サムライ甲冑フォトスポット",
  "/photos/activities/kendo-experience.jpg": "剣道体験",
  "/photos/activities/snowboarding.jpg": "スノーボード",
  "/photos/activities/bodyboarding-1.jpg": "アドベンチャーパークの一日",
  "/photos/travel/autumn-lake-2.jpg": "紅葉",
  "/photos/activities/bodyboarding-3.jpg": "夕暮れのボディボード",
  "/photos/activities/surfboarding.jpg": "サーフィン",
  "/photos/activities/snorkeling.jpg": "ボディボード",
  "/photos/travel/aquarium-whale-shark-2.jpg": "ジンベエザメ、沖縄の水族館",
  "/photos/travel/okinawa-beach.jpg": "沖縄",
  "/photos/activities/casino-night.jpg": "カジノナイト",
  "/photos/activities/adventure-park-1.jpg": "スキューバダイビング",
  "/photos/activities/adventure-park-2.jpg": "初ダイビング",
  "/photos/activities/bouldering-poster.jpg": "ボルダリング",
  "/photos/activities/adventure-clip-poster.jpg": "ゴーカート",
  "/photos/activities/meta-glasses-poster.jpg": "ARグラス体験",

  "/photos/travel/mt-tsukuba.jpg": "筑波山",
  "/photos/travel/izu.jpg": "伊豆海岸",
  "/photos/travel/nara-deer-park.jpg": "奈良公園の鹿",
  "/photos/activities/forest-hike-2.jpg": "森林ハイキング",
  "/photos/travel/aquarium-whale-shark.jpg": "洞窟の祠",
  "/photos/travel/okinawa-bridge.jpg": "山の展望スポット",
  "/photos/travel/squirrel-village.jpg": "リス村",
  "/photos/travel/suzuka-circuit.jpg": "鈴鹿サーキット",
  "/photos/travel/india-stepwell.jpg": "洞窟の祠、インド",
  "/photos/travel/india-museum.jpg": "博物館見学、インド",
  "/photos/travel/lake-garden.jpg": "日本庭園の池",
  "/photos/travel/zoo-monkey.jpg": "動物園訪問",

  "/photos/basketball/team-photo.jpg": "学校のバスケットボールチーム",
  "/photos/basketball/court-side.jpg": "コート外の仲間たち",

  "/photos/biking/motorcycle.jpg": "バイクツーリング",
  "/photos/biking/atv-ride.jpg": "ATVオフロード",
  "/photos/biking/royal-enfield.jpg": "ロイヤルエンフィールドの旅",

  "/photos/horse-riding/arena.jpg": "障害飛越の練習",
  "/photos/horse-riding/canter-poster.jpg": "キャンター(駈歩)",

  "/photos/music/electric-guitar.jpg": "ギター演奏",
  "/photos/music/license-plate-guitar.jpg": "ユニークなギター、オールドツーソンにて",
  "/photos/music/flute-poster.jpg": "フルート演奏",

  "/photos/volunteering/english-class.jpg": "英語指導",
  "/photos/volunteering/physics-class.jpg": "物理指導",
  "/photos/volunteering/wall-mural.jpg": "水資源保護の壁画制作",
  "/photos/volunteering/classroom-group.jpg": "クラスのみんなと",
  "/photos/volunteering/kids-classroom.jpg": "小さな子どもたちへの指導",
  "/photos/volunteering/campus-drive.jpg": "キャンパス啓発活動",
  "/photos/volunteering/rural-school-visit.jpg": "農村部の学校訪問",
};

// ---- Small UI chrome strings used across the dialog panels ----
export const JA_UI = {
  languagesHeading: "言語",
  timeline: "経歴",
  clubsNow: "サークル:現在",
  clubsSchool: "サークル:学生時代",
  highlights: "ハイライト",
  techHeading:
    "スキル:器用貧乏という言葉もありますが、広く浅くの方が一つだけ極めるより役立つことも多いものです。",
  certifications: "資格・修了証",
  work: "業務",
  personalProjects: "個人・サイドプロジェクト",
  buildingNow: "🌱 開発中",
  collegeProjects: "大学時代 · ハードウェア&ものづくり",
  hackathonDeepDive: "ハッカソン詳細",
  tapPhotoEnlarge: "写真をタップすると拡大表示します。",
  live: "公開中 ↗",
  code: "コード ↗",
  offScreen: "オフスクリーン",
  pickHobby: "数字付きの趣味を選ぶとギャラリーが表示されます。",
  whatImInto: "好きなもの",
  coverArtNote:
    "これは自分で撮った写真ではなく、読んでいる・観ているものを紹介するためのカバーアートです。",
  cameraRoll: "カメラロール:鳥、虫、その他いろいろ",
  hobbiesGallery: "ギャラリー",
  viewAll: (n: number) => `すべて見る(${n}件)`,
  showFewer: "表示を減らす",
  contactIntro:
    "連絡はメールが一番確実です。LinkedInでも大丈夫ですし、Instagramには気取らない私の一面が垣間見えます。",
  email: "メール",
  copy: "コピー",
  copied: "コピーしました！",
  pressEscClose: "ESCキーを押すか、外側をクリックすると閉じます",
  close: "閉じる",
  playTheGame: "◂ ゲームに戻る",
  jumpToContact: "お問い合わせへ移動",
};
