$(function () {
    function getHeroslist() {
        $.ajax({
            url: 'http://127.0.0.1:5001/getallhero',
            type: "get",
            success: function (result) {
                //console.log('====================================');
                // console.log(result);
                //console.log('====================================');
                $("#tbd").html(template("row", result))

            }
        })
    }
    getHeroslist();
    $("#add").on("click", function(){
        $("#tianjia")
        .modal('show')
      ;
    })
    // 初始化下拉框的样式
    $('.ui.dropdown').dropdown()
    //添加接口
    $("#btnAdd").on("click", () => {
        $.ajax({
            url: "http://127.0.0.1:5001/addhero",
            type: "post",
            dataType: "json",
            data: $("form").serialize(),
            success: function (result) {;
                console.log(result);
                getHeroslist();
            }
        })
    })
    window.onload = function () {
        //删除模板
        $("#tbd").on('click', '.dele', function () {
            var tr = $(this)[0].parentNode.parentNode;
            var id = $(tr).attr("data-id")
            console.log(`http://127.0.0.1:5001/deletehero/${id}`)
            $.ajax({
                url: `http://127.0.0.1:5001/deletehero/${id}`,
                type: "get",
                success: function (result) {
                    console.log(result);
                    getHeroslist();
                }
            })
        })
        //编辑
        $("#tbd").on("click",".update",function(){
            $('#updateBox')
            .modal('show')
          ;
          var tr = $(this)[0].parentNode.parentNode;
          var td =$(this)[0].parentNode;
          var id = $(tr).attr("data-id")
          var dd = $(td).attr("data-gender")
          console.log(dd)
          console.log(`http://127.0.0.1:5001/gethero/${id}`)
          $.ajax({
              url:`http://127.0.0.1:5001/gethero/${id}`,
              type:"get",
              success:function(res){
                  console.log(res)

                  console.log($("#select").val())
                  $("#content").html(template("update",res));
                  
              }
          })

        })
    }
   
  
})