import {GithubSkill} from "../model/GithubSkill";

export const AllSkills: GithubSkill[] = [
    {
        date: "2022年4月16日",
        description: "以前nuxt.jsで実装した新歓用のページを, 新しくNext.js+Chakra-UIで実装しなおしました\n" +
            "Next.jsをSSGで利用し, netlifyにデプロイしています.",
        name: "den3-lp",
        projectTitle: "所属サークルの新歓用ページのリニューアル",
        skillTag: [
            'Next.js',
            'React'
        ],
        pageUrl: "https://welcome-den3.netlify.app/",
        url: 'den3-lp'
    },
    {
        date: "2022年3月 -",
        description: "C4Cというメディアに開発の面から携わっています.\n" +
            "Next.jsをSSGで利用し, CloudFlare Pagesにデプロイしています.",
        name: "cfcmedia.jp",
        projectTitle: "C4C( cfcmedia.jp ) のServer Side Generationによる構築",
        skillTag: [
            'Next.js',
            'React'
        ],
        pageUrl: "https://cfcmedia.jp",
        url: undefined
    },
    {
        date: "2022年3月 -",
        description: "C4Cというメディアで使われる画像に文字を挿入し, Webpに変換します.\n" +
            "Discordを使ったボットとして作られています",
        name: "c4c-bot",
        projectTitle: "ホームページ用画像変換ボット",
        skillTag: [
            'Node.js',
        ],
        pageUrl: undefined,
        url: "c4c_bot"
    },
    {
        date: "2021年12月 -",
        description: "JamStack風なブログシステム（CMS）をGolangとReactで現在開発中です. \n" +
            "-> https://cfcmedia.jp というサイトの構築に使用しました.",
        name: "StackCMS",
        projectTitle: "ヘッドレスCMSの実装",
        skillTag: [
            'Golang',
            'MongoDB',
            'MySQL',
            'React',
            'Docker',
            'CloudRun'
        ],
        url: "StackCMS/tree/use"
    },
    {
        date: "2021年6月 - 2021年7月",
        description: "JavaのNon-blocking IO APIを利用し、C10Kに対応したウェブフレームワークを開発",
        name: "Nginj",
        projectTitle: "C10K対応Java用Webフレームワークの開発",
        skillTag: [
            'Java'
        ],
        url: "Nginj"
    },
    {
        date: "2021年3月",
        description: "サークル勧誘用のLPをNuxt.jsで開発, Netlifyにデプロイ\n" +
            "Github PagesをJSON APIとして利用することで, Webページの更新を簡単にできるようにした.\n"+
            "2022/04/18 追記: 新しくNext.jsでリニューアルしたため, 旧ページの全体像はGithubでご確認ください.",
        name: "den3welcomepage",
        projectTitle: "大学サークルLPを作成",
        skillTag: [
            'Nuxt.js'
        ],
        url: "den3welcomepage",
        pageUrl: "https://welcome-den3.netlify.app/"
    },
    {
        date: "2021年1月",
        description: "Java(Backend Javalin)と, JavaScript(Frontend Vue.js 2)でOpenID ConnectのプロバイダーをSPA化した上で実装/構築しました ( https://github.com/10fu3/IdP )",
        name: "IdP",
        projectTitle: "OpenID Connectのプロバイダーを実装/構築",
        skillTag: [
            'Java',
            'Vue.js'
        ],
        url: "Idp"
    },
    {
        name: 'WaterServer',
        url:  'WaterServer',
        projectTitle: '分散ダウンロードアプリのダウンロード支援サーバーソフト',
        description: '分散ダウンロードアプリからのURLと分散台数を受け取って、一時的に支援アプリ上のサーバーにファイルをダウンロードする\n' +
            'そのファイルを分散台数で分割して再度アップローダーにアップロードし、分散ダウンロードアプリを持つそれぞれの端末に分割したファイルをそれぞれダウンロードさせる\n' +
            'その後、ローカルP2Pネットワークでファイルを１台の端末に集約し、結合し一つのファイルにする\n' +
            '1台あたりの通信量を分散する.',
        skillTag: [
            'Java',
        ],
        date: '2020年8月'
    },{
        date: "2020年8月",
        description: '分散ダウンロードアプリからのURLと分散台数を受け取って、一時的に支援アプリ上のサーバーにファイルをダウンロードする\n' +
            'そのファイルを分散台数で分割して再度アップローダーにアップロードし、分散ダウンロードアプリを持つそれぞれの端末に分割したファイルをそれぞれダウンロードさせる\n' +
            'その後、ローカルP2Pネットワークでファイルを１台の端末に集約し、結合し一つのファイルにする\n' +
            '1台あたりの通信量を分散する.',
        name: "Canoe",
        projectTitle: "iOS用 分散ダウンロードアプリの開発",
        skillTag: [
            'Swift'
        ],
        url: "Canoe"
    },{
        date: "2019年1月 - 2020年7月",
        description: "iOSで動作する5ch用の専用ブラウザの開発\n"+
        "スクレイピングを活用し, 参照レスを階段状にツリー表示する仕組みなどを実装",
        name: "Slash",
        projectTitle: "iOS用5ちゃんねる用専用ブラウザ",
        skillTag: [
            'Swift'
        ],
        url: "Slash"
    },{
        date: "2016年7月",
        description: "UserDefaultを利用した階層型のメモアプリを実装\n" +
            "Optional(Nullable)とNullの概念によるNullPointer例外に困りながらも完成させる",
        name: "Memo",
        projectTitle: "iOS用のメモアプリの実装",
        skillTag: ['Swift'],
        url: undefined
    },{
        date: "2016年 - 2019年3月",
        description: "Spigotというゲームサーバーを公開、運用し、バックアップの大切さを学ぶ\n" +
            "初めてSQLに触れる\n" +
            "同時に多数の運用上必要なJava製プラグインを作成、プログラミングを学ぶ",
        name: "マインクラフトサーバーの運用",
        projectTitle: "マインクラフトサーバーの運用",
        skillTag: [
            'Java',
            'MySQL'
        ],
        url: undefined
    }
]

