/**
 Custom module for you to write your own javascript functions
 **/
var NSA = function () {

    // private functions & variables

    var myFunc = function (text) {
        alert(text);
    };

    var addChapter = function (chapter_name) {
        $.ajax({
            type: "POST",
            url: "ajax.php",
            dataType: "json",
            data: {action: 'add_chapter', name: chapter_name},
            success: function (result) {
                if (result < 1) {
                    alert("Opps! Something went wrong. \nTry again.");
                } else {
                    var newLi = '<li><a href="javascript:;" class="chapter">' + chapter_name + '</a><a class="deleteChapter" data-id="' + result + '">X</a></li>';
                    $("#ddChapters").append(newLi);
                    alert("Chapter Added!");
                }
            }
        });
    };

    var deleteChapter = function (chapter_id) {
        $.ajax({
            type: "POST",
            url: "ajax.php",
            dataType: "json",
            data: {action: 'delete_chapter', chapter_id: chapter_id},
            success: function (result) {
                if (result < 1) {
                    alert("Opps! Something went wrong. \nTry again.");
                } else {
                    $(".deleteChapter[data-id=" + chapter_id + "]").parent("li").remove();
                    alert("Chapter Deleted!");
                }
            }
        });
    };

    // public functions
    return {
        //main function
        init: function () {

            $("#btnAddChapter").click(function () {
                var chapter_name = $("#txtChapterName").val();
                addChapter(chapter_name);
            });

            $("#ddChapters").on("click", ".deleteChapter", function (event) {
                var chapter_id = $(this).attr("data-id");
                deleteChapter(chapter_id);
            });

            $(".chapter").click(function () {
                $("#selectedChapter").html($(this).html());
            });

            //initialize here something.
        },
        //some helper function
        doSomeStuff: function () {
            myFunc();
        }

    };

}();

/***
 Usage
 ***/
//Custom.init();
//Custom.doSomeStuff();