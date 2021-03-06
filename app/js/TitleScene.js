
var TitleLayer = cc.Layer.extend({
    ctor : function(){
        //1. call super class's ctor function
        this._super();
    },
    init:function(){
        //call super class's super function
        this._super();
        cc.log("TitleLayer init");
        //2. get the screen size of your game canvas
        var winsize = cc.director.getWinSize();

        //3. calculate the center point
        var centerpos = cc.p(winsize.width / 2, winsize.height / 2);

        //4. create a background image and set it's position at the center of the screen
        var spriteTitle = new cc.Sprite(res.title_png);
        var spriteName = new cc.Sprite(res.name_png);
        spriteTitle.setPosition(centerpos);
        spriteName.setPosition(cc.p(200,winsize.height-100));
        spriteName.setOpacity(150);
        spriteName.setScale(0.5);
        this.addChild(spriteTitle);
        this.addChild(spriteName);

        //5.
        //cc.MenuItemFont.setFontSize(60);

        //6.create a menu and assign onPlay event callback to it
        /*
        var menuItemPlay = cc.MenuItemSprite.create(
            new cc.Sprite(res.start_n_png), // normal state image
            new cc.Sprite(res.start_s_png), //select state image
            this.onPlay, this);
        var menu = new cc.Menu(menuItemPlay);  //7. create the menu
        menu.setPosition(centerpos);
        this.addChild(menu);
        */
    },
    
    onPlay : function(){
        cc.log("==onplay clicked");
        cc.director.runScene(new PlayScene());
    }
});

var TitleScene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new TitleLayer();
        layer.init();
        this.addChild(layer);
    }
});
