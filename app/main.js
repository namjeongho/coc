cc.game.onStart = function(){
    var policy = new cc.ResolutionPolicy(cc.ContainerStrategy.EQUAL_TO_FRAME, cc.ContentStrategy.EXACT_FIT);
    cc.view.setDesignResolutionSize(1024, 768, policy);
    
    cc.LoaderScene.preload(g_resources, function () {
        cc.director.runScene(new TitleScene());
    }, this);
};
cc.game.run();