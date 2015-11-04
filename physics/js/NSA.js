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

    var addTopic = function (topic_name, chapter_id) {
        $.ajax({
            type: "POST",
            url: "ajax.php",
            dataType: "json",
            data: {action: 'add_topic', name: topic_name, chapter_id: chapter_id},
            success: function (result) {
                if (result < 1) {
                    alert("Opps! Something went wrong. \nTry again.");
                } else {
                    var newLi = '<li><a href="javascript:;" class="topic">' + topic_name + '</a><a class="deleteTopic" data-id="' + result + '">X</a></li>';
                    $("#ddTopics").append(newLi);
                    alert("Topic Added!");
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

    var deleteTopic = function (topic_id) {
        $.ajax({
            type: "POST",
            url: "ajax.php",
            dataType: "json",
            data: {action: 'delete_topic', topic_id: topic_id},
            success: function (result) {
                if (result < 1) {
                    alert("Opps! Something went wrong. \nTry again.");
                } else {
                    $(".deleteTopic[data-id=" + topic_id + "]").parent("li").remove();
                    alert("Topic Deleted!");
                }
            }
        });
    };

    var fetchTopics = function (chapter_id) {
        $.ajax({
            type: "POST",
            url: "ajax.php",
            dataType: "json",
            data: {action: 'fetch_topics', chapter_id: chapter_id},
            success: function (result) {
                if (result.length > 0) {
                    for (var i = 0; i < result.length; i++) {
                        var newLi = '<li><a href="javascript:;" class="topic">' + result[i].name + '</a><a class="deleteTopic" data-id=' + result[i].id + '>X</a></li>';
                        $("#ddTopics").append(newLi);
                    }
                }
            }
        });
    };

    // public functions
    return {
        //main function
        init: function () {

            /*
             * CHAPTERS :
             */
            $("#btnAddChapter").click(function () {
                var chapter_name = $("#txtChapterName").val();
                addChapter(chapter_name);
            });

            $("#ddChapters").on("click", ".deleteChapter", function (event) {
                var chapter_id = $(this).attr("data-id");
                deleteChapter(chapter_id);
            });

            $(".chapter").click(function () {
                var chapter_id = $(this).siblings("a").attr("data-id");
                $("#selectedChapter").attr("data-selected-id", chapter_id);
                $("#selectedChapter").html($(this).html());

                fetchTopics(chapter_id);
            });


            /*
             * TOPICS :
             */
            $("#btnAddTopic").click(function () {
                var topic_name = $("#txtTopicName").val();
                var chapter_id = $("#selectedChapter").attr("data-selected-id");
                if (chapter_id > 0) {
                    addTopic(topic_name, chapter_id);
                } else {
                    alert("Please select a chapter!");
                }
            });

            $("#ddTopics").on("click", ".deleteTopic", function (event) {
                var topic_id = $(this).attr("data-id");
                deleteTopic(topic_id);
            });

            $(".topic").click(function () {
                var topic_id = $(this).siblings("a.deleteTopic").attr("data-id");
                $("#selectedTopic").attr("data-selected-id", topic_id);
                $("#selectedTopic").html($(this).html());
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