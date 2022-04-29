import {GithubSkill} from "../model/GithubSkill";

export const AllSkills: GithubSkill[] = [
    {
        date: "2022年4月16日",
        description: "以前nuxt.jsで実装した新歓用のページを, 新しくNext.js+Chakra-UIで実装しなおしました\n" +
            "Next.jsをSSGで利用し, netlifyにデプロイしています.\n"+
            "また, 説明会の日程をGithub Pages上のJSONファイルに情報を埋め込み,取得するようにすることで, 説明会情報の更新時にソースコードを編集せずに行うことができるようになりました.",
        name: "den3-lp",
        projectTitle: "所属サークルの新歓用ページのリニューアル",
        skillTag: [
            'Next.js',
            'React'
        ],
        pageUrl: "https://welcome-den3.netlify.app/",
        url: 'den3-lp',
        image: [{
            src: "https://camo.githubusercontent.com/a6c097113bbc31b004921d8bb275e47437de7e2b0fea54788822090ddd7935d8/68747470733a2f2f6d656469612e646973636f72646170702e6e65742f6174746163686d656e74732f3936353238303537373933363833383734362f3936353238343734313634373537373138382f53637265656e73686f745f323032322d30342d31385f61745f30312d31322d35305f64656e335f2e706e67",
            type: "img",
            description: "ページ概要",
        }]
    },
    {
        date: "2022年3月 -",
        description: "<a style='text-decoration: underline;font-weight: bold' href='https://cfcmedia.jp'>C4C</a>という記事メディアに開発の面から携わっています.\n" +
            "Next.jsをSSGで利用し, CloudFlare Pagesにデプロイしています.\n"+
            "また, CMSは私が独自開発した<a style='text-decoration: underline;font-weight: bold' href='https://github.com/10fu3/StackCMS'>StackCMS</a>をCloudRunにデプロイした上で利用し, そこに記事を入稿しています.",
        name: "cfcmedia.jp",
        projectTitle: "記事メディア の Next.js (Server Side Generation)による構築",
        skillTag: [
            'Next.js',
            'React'
        ],
        pageUrl: "https://cfcmedia.jp",
        url: undefined,
        image: [{
            src: "https://media.discordapp.net/attachments/965280577936838746/969714048088281118/infra.PNG",
            type:"img",
            description: "サイトのインフラ構成図"
        },{
            src: "https://media.discordapp.net/attachments/965280577936838746/969697594488016946/1.PNG",
            type: "img",
            description: "サイト外観1"
        },{
            description: "サイト外観2", src: "https://media.discordapp.net/attachments/965280577936838746/969698559324741683/cfc.PNG?width=810&height=863", type: "img"
        },{
            description: "運用中の自作CMS(StackCMS)の画面", src: "https://media.discordapp.net/attachments/965280577936838746/969697841364750376/cms.PNG", type: "img"
        }]
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
        url: "c4c_bot",
        image:[{
            description: "BOT運用中の例", src: "https://user-images.githubusercontent.com/31952653/163977143-076d5864-edfa-431f-87d1-002266075f11.PNG", type: "img"
        }]
    },
    {
        date: "2021年12月 -",
        description: "Javaで非同期通信を行うためのNon-blocking IOを使い、Webフレームワークに求められるパスパラメータなどの機能を以前に実装した。\n" +
            "\n" +
            "Non-blocking IOのサンプルコードではシングルスレッドでの実装がほとんどであったが、今回独自に私がアップデートをして、ThreadPoolを使った方法によって多重化した。\n",
        name: "NewNginj",
        projectTitle: "C10Kに対応したウェブフレームワークのCPUバウンド処理改善",
        skillTag: ["Java"],
        url: "ex6-10fu3-1"
    },
    {
        date: "2021年12月 -",
        description: "JamStack風なブログシステム（CMS）をGolangとReactで現在開発中です. \n" +
            "-> <a style='text-decoration: underline;font-weight: bold' href='https://cfcmedia.jp'>https://cfcmedia.jp</a> というサイトの構築に使用しました.",
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
        url: "StackCMS",
        image:[{
            src: "https://media.discordapp.net/attachments/965280577936838746/969714048088281118/infra.PNG",
            type:"img",
            description: "インフラの例 - 構成図"
        },{
            description: "運用中の自作CMS(StackCMS)のコンテンツ一覧画面", src: "https://media.discordapp.net/attachments/965280577936838746/969697841364750376/cms.PNG", type: "img"
        },{
            description: "運用中の自作CMS(StackCMS)の入稿画面", src: "https://media.discordapp.net/attachments/965280577936838746/969699958703935518/cms1.PNG", type: "img"
        },{
            description: "コンテンツスキーマの編集画面", src: "https://media.discordapp.net/attachments/965280577936838746/969700094469361714/cms3.PNG", type: "img"
        }]
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
        pageUrl: "https://welcome-den3.netlify.app/",
        image:[{description: "勧誘用ページ", src: "https://camo.githubusercontent.com/2fe4848d53c2ffcf29fc84d116045e20d307e4e7741acd946509d9484f74d4af/68747470733a2f2f6d656469612e646973636f72646170702e6e65742f6174746163686d656e74732f3936353238303537373933363833383734362f3936353238343833353930363136323730392f6f6c642d706167652e504e47", type: "img"}]

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
        url: "Idp",
        image:[{
            description: "ホーム画面", src: "https://user-images.githubusercontent.com/31952653/106193000-499cf300-61f0-11eb-9596-76f5e5400303.png", type: "img"
        },{
            description: "認可画面", src: "https://user-images.githubusercontent.com/31952653/106192896-1eb29f00-61f0-11eb-90e2-d0bc93cc4736.png", type: "img"
        }]
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

