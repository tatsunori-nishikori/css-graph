(function($){
  var Bar = function(){
    this.data = [];
    this.label = [];
    this.scale = [];
    /* 最大 */
    this.max = 100;
    /* 最小 */
    this.min = 0;
    /* データの個数 */
    this.count = 0;
    /* 色 */
    this.color = '';
  };
  /**
   * y軸目盛り 
   * @param elm 表示する要素
   */
  Bar.prototype.setY = function(elm){
    //y軸ラベル配列
  };
  /**
   * x軸ラベル 
   * @param elm 表示する要素
   */
  Bar.prototype.setX = function(elm){
    
  };
  /**
   * グラフ出力 
   * @param elm 表示する要素
   */
  Bar.prototype.setGraph = function(elm){
    //dataをループ
    //dataの個数 / 100で棒の幅決定
  };
  /**
   * @param  x xラベル要素
   * @param  y y軸要素
   * @param body グラフ要素
   */
  Bar.prototype.create = function(x,y,body){
    
  };
  /**
   * 初期化
   * @param data
   */
  Bar.prototype.init = function(label,data,scale){
    //label 設定
    this.label = label;
    //データ設定
    this.data = data;
    //scale設定
    this.scale = scale;
    
  };
})(jQuery);