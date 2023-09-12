FullScreenMario.FullScreenMario.settings.maps.library["5-4"] = {
    "name": "5-4",
    "time": 300,
    "locations": [
        { "entry": "Castle" }
    ],
    "areas": [
        {
            "setting": "Castle",
            "blockBoundaries": true,
            "creation": [
                { "macro": "StartInsideCastle", "width": 128 },
                { "thing": "Stone", "y": 88, "width": 128, "height": 24 },
                { "thing": "Podoboo", "x": 128, "y": -32 },
                { "macro": "Water", "x": 128, "width": 128 },
                { "thing": "Stone", "x": 144, "y": 32, "width": 16 },
                { "thing": "Podoboo", "x": 160, "y": -24 },
                { "thing": "Stone", "x": 176, "y": 48 },
                { "thing": "CastleBlock", "x": 184, "y": 48, "fireballs": 12, "direction": 1 },
                { "thing": "Block", "x": 184, "y": 80, "contents": "Mushroom" },
                { "thing": "Stone", "x": 192, "y": 48 },
                { "thing": "Stone", "x": 216, "y": 32, "width": 16 },
                { "thing": "Podoboo", "x": 240, "y": -32 },
                { "macro": "Floor", "x": 256, "y": -8, "width": 416 },
                { "thing": "Stone", "x": 256, "y": 24, "width": 16, "height": 32 },
                { "thing": "Stone", "x": 272, "y": 88, "width": 392, "height": 24 },
                { "thing": "Stone", "x": 272, "y": 64, "width": 168 },
                { "thing": "Stone", "x": 272, "width": 72 },
                { "thing": "Stone", "x": 296, "y": 32, "width": 96 },
                { "thing": "CastleBlock", "x": 344, "fireballs": 6, "direction": 1 },
                { "thing": "Stone", "x": 352, "width": 88 },
                { "thing": "CastleBlock", "x": 392, "y": 32, "fireballs": 6 },
                { "thing": "Stone", "x": 400, "y": 32, "width": 88 },
                { "thing": "CastleBlock", "x": 440, "y": 64, "fireballs": 6 },
                { "thing": "CastleBlock", "x": 440, "fireballs": 6, "direction": 1 },
                { "thing": "Stone", "x": 448, "width": 88 },
                { "thing": "Stone", "x": 448, "y": 64, "width": 216 },
                { "thing": "CastleBlock", "x": 488, "y": 32, "fireballs": 6 },
                { "thing": "Stone", "x": 496, "y": 32, "width": 88 },
                { "thing": "CastleBlock", "x": 536, "fireballs": 6, "direction": 1 },
                { "thing": "Stone", "x": 544, "width": 96 },
                { "thing": "CastleBlock", "x": 584, "y": 32, "fireballs": 6 },
                { "thing": "Stone", "x": 640, "y": 24, "width": 32, "height": 32 },
                { "thing": "CastleBlock", "x": 656, "y": 56, "fireballs": 6 },
                { "macro": "PlatformGenerator", "x": 686, "width": 12, "direction": -1 },
                { "macro": "PlatformGenerator", "x": 710, "width": 12 },
                { "macro": "Floor", "x": 736, "y": 16 },
                { "thing": "CastleBlock", "x": 736, "y": 24, "fireballs": 6, "direction": 1 },
                { "macro": "Floor", "x": 744, "y": 24, "width": 48 },
                { "thing": "Stone", "x": 744, "y": 88, "width": 48, "height": 24 },
                { "macro": "Floor", "x": 792, "width": 80 },
                { "macro": "Fill", "thing": "Coin", "x": 817, "y": 7, "xnum": 3, "ynum": 2, "xwidth": 8, "yheight": 32 },
                { "thing": "CastleBlock", "x": 824, "y": 16, "fireballs": 6, "direction": 1 },
                { "thing": "Stone", "x": 864, "y": 24, "height": 24 },
                { "macro": "Water", "x": 872, "width": 16 },
                { "thing": "Podoboo", "x": 872, "y": -32 },
                { "thing": "Stone", "x": 864, "y": 24, "height": 24 },
                { "macro": "Floor", "x": 888, "y": 24, "width": 16 },
                { "macro": "Water", "x": 904, "width": 32 },
                { "thing": "Podoboo", "x": 904, "y": -32 },
                { "macro": "Floor", "x": 920, "width": 104 },
                { "thing": "Stone", "x": 920, "y": 24, "width": 40, "height": 24 },
                { "thing": "Stone", "x": 920, "y": 88, "width": 104, "height": 24 },
                { "macro": "Fill", "thing": "Stone", "x": 976, "y": 24, "xnum": 2, "xwidth": 32, "width": 16, "height": 24 },
                { "macro": "Fill", "thing": "Brick", "x": 1024, "y": 64, "xnum": 6 },
                { "macro": "EndInsideCastle", "x": 1024, "spawnType": "Lakitu", "transport": { "map": "6-1" } },
                { "thing": "Podoboo", "x": 1048, "y": -40 },
                { "thing": "Platform", "x": 1108, "y": 56, "width": 16, "sliding": true, "begin": 1080, "end": 1112, "nocollidechar": true }
            ]
        }
    ]
};