
function addTab(title, url){
    if($('#main').tabs('exists', title)){/*判断选项卡是否打开*/
        $('#main').tabs('select',title);/*如果已经打开就选择打开的选项卡*/
    }else{    /*浮动框架，点击导航链接动态加载独立网页至此浮动框中*/
        var content = '<iframe scrolling="auto" frameborder="0" src="'
            +url+'" style="width:100%;" onload="adaptiveHeight(this)"></iframe>';
        $('#main').tabs('add',{/*动态加载选项卡*/
            title:title,
            content:content,
            closable:true,
            iconCls:"fa fa-file-text-o"/*定义选项卡小图标*/
        });
    }
}

// function addTab(title ,url) {
//     if($('#main').tabs('exists',title)){
//         $('#main').tabs('select',title);
//     }else {
//         var content = '<iframe scrolling = "auto" frameborder = "0" src="'+url+'" style= "width:100%;" onload="adaptiveHeight(this)"></iframe>';
//         $('#main').tabs('add ',{
//             title:title,
//             content:content,
//             closable:true
//             iconCls:"icon-page_white_text"
//         });
//     }
// }

/* adaptiveHeight(this)函数定义浮动框架高度自适应内容高度 */
function adaptiveHeight(obj) {
    var mainheight = $(obj).contents().find("body").height()+50;
    $(obj).height(mainheight);
}



var editingId;
function edit() {
    if(editingId != undefined){
        $('#tabTreegrid').treegrid('select',editingId);
        return;
    }
    var row = $('#tabTreegrid').treegrid('getSelected');
    if(row){
        editingId=row.id
        $('#tabTreegrid').treegrid('beginEdit',editingId);
    }
}
function save() {
    if(editingId != undefined){
        var t = $('#tabTreegrid');
        t.treegrid('endEdit',editingId);
        editingId = undefined;
        var persons = 0;
        var rows = t.treegrid('getChildren');
        for(var i= 0;i<rows.length;i++){
            var p = parseInt(rows[i].persons);
            if(! isNaN(p)){
                persons += p;
            }
        }
        var frow = t.treegrid('getFooterRows')[0];
        frow.persons = persons ;
        t.treegrid('reloadFooter');
    }
}

function  cancel() {
    if(editingId != undefined){
        $('#tabTreegrid').treegrid('cancelEdit',editingId);
        editingId = undefined;
    }
}


