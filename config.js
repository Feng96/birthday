var config = {
    // 句子的长度可以任意， 你可以写十句话， 二十句话都可以
    // 每句话尽量不要超过15个字,不然展示效果可能不太好
    texts: [
        "送给我",      //这里,每句话结尾的最后一个逗号必须是英文的哦!! 很重要哦!!
        "最好的朋友汪子姗",  // 同上...
        "今天是你的生日",
        "祝你生日快乐",
        "想起你就想起梅纳德的时光",
        "祝我们的友谊地久天长",
        "永不变质",
        "祝你新的一岁里",
        "天天开心，心想事成",
        "记得来看我",
        "Haha~~",
    ],
    /**
     * imgs 可以不填, 但是如果要填写的话必须遵循下面的格式
     * "对应上面的文字, 要完全一样" : "图片地址, 可以把图片放在imgs文件夹中"
     * 例如
     * "心爱的小可爱": "./imgs/xiaokeai.jpg"
     *
     * 如果不要图片的话, 直接在每行开头写两个斜杠注释即可, 例如下面的 "今天是你的生日" 的图片就不会展示了:)
     * Tip: 图片最好用正方形or接近正方形, 看起来效果更好
     */
    imgs: {
        "最好的朋友汪子姗": "./imgs/3.jpg",
        "今天是你的生日": "./imgs/4.jpg",
        "祝你生日快乐": "./imgs/8.jpg",
        "想起你就想起罗纳德的时光": "./imgs/1.jpg",
        "祝我们的友谊地久天长": "./imgs/2.jpg",
        "永不变质": "./imgs/5.jpg",
        "祝你新的一岁里": "./imgs/6.jpg",
        "天天开心，心想事成": "./imgs/7.jpg",
        "记得来看我": "./imgs/9.jpg",
        "Haha~~": "./imgs/10.jpg",
    },
    // 按钮文字描述, 以下是默认的按钮文字，英文的，您可以改成你喜欢的文字
    desc: {
        turn_on: "开始",
        play: "来点音乐",
        bannar_coming: "颜色",
        balloons_flying: "好像少点东西",
        cake_fadein: "蛋糕？",
        light_candle: "蜡烛？",
        wish_message: "生日快乐",
        story: "A MESSAGE FOR YOU",
    }
};
