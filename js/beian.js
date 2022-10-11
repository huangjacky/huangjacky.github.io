
var data = {
    "sectrain.cn": {"beian":"粤ICP备15077600号","title":"SecTrain安全博客"},
    "xo0x.cn": {"beian":"粤ICP备15077600号", "title": "个人技术分享"},
    "huangjacky.com": {"beian":"粤ICP备15077600号", "title": "个人技术分享"}
}
$(function(){
    var domain_reg = /(([^.]+)\.(\w{2,}))$/ig;
    var ret = location.host.match(domain_reg);
    if (ret.length > 0){
        var domain = ret[0];
        if (domain in data){
            $("#beian").text(data[domain]["beian"]);
            $(".brand-title").text(data[domain]["title"]);
            $("title").text(data[domain]["title"]);
            // console.log(data[domain])
        }
    }
});