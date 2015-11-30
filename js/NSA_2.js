/** 
 Custom module for you to write your own javascript functions
 **/
var NSA = function () {

    // private functions & variables
    focused = "txtNumFormulaString";

    var myFunc = function () {
        alert("HERERERERE");
    };

    /*
     * INSERT STUFF
     */

    var addChapter = function (chapter_name) {
        $.ajax({
            type: "POST",
            url: "ajax.php",
            dataType: "json",
            data: {action: 'add_chapter', name: chapter_name},
            success: function (result) {
                if (result < 1) {
                    sweetAlert('Oops...', 'Something went wrong!', 'error');
                } else {
                    var newLi = '<li><a href="javascript:;" class="chapter">' + chapter_name + '</a><a class="deleteChapter" data-id="' + result + '">X</a></li>';
                    $("#ddChapters").append(newLi);

                    $("#noChapMsg").hide();
                    $("#selectedChapter").show();
                    $("#viewChapters").click();

                    swal('Great!', 'Chapter Added!', 'success');
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
                    sweetAlert('Oops...', 'Something went wrong!', 'error');
                } else {
                    var newLi = '<li><a href="javascript:;" class="topic">' + topic_name + '</a><a class="deleteTopic" data-id="' + result + '">X</a></li>';
                    $("#ddTopics").append(newLi);

                    $("#noTopicsMsg").hide();
                    $("#selectedTopic").show();
                    $("#viewTopics").click();

                    swal('Great!', 'Topic Added!', 'success');
                }
            }
        });
    };

    var addNumerical = function (num_identifier, topic_id) {
        $.ajax({
            type: "POST",
            url: "ajax.php",
            dataType: "json",
            data: {action: 'add_numerical', identifier: num_identifier, topic_id: topic_id},
            success: function (result) {
                if (result < 1) {
                    sweetAlert('Oops...', 'Something went wrong!', 'error');
                } else {
                    var newLi = '<li><a href="javascript:;" class="numerical">' + num_identifier + '</a><a class="deleteNumerical" data-id="' + result + '">X</a></li>';
                    $("#ddNumericals").append(newLi);

                    $("#noNumericalsMsg").hide();
                    $("#selectedNumerical").show();
                    $("#viewNumericals").click();

                    swal('Great!', 'Numerical Added!', 'success');
                }
            }
        });
    };

    var addStatement = function (num_statement, numerical_id) {
        $.ajax({
            type: "POST",
            url: "ajax.php",
            dataType: "json",
            data: {action: 'add_statement', num_statement: num_statement, numerical_id: numerical_id},
            success: function (result) {
                if (result < 1) {
                    sweetAlert('Oops...', 'Something went wrong!', 'error');
                } else {
                    $('#txtNumStatement').val(num_statement);
                    swal('Great!', 'Statement Added!', 'success');
                }
            }
        });
    };

    var addFormulaString = function (formula_string, numerical_id) {
        $.ajax({
            type: "POST",
            url: "ajax.php",
            dataType: "json",
            data: {action: 'add_formula_string', formula_string: formula_string, numerical_id: numerical_id},
            success: function (result) {
                if (result < 1) {
                    sweetAlert('Oops...', 'Something went wrong!', 'error');
                } else {
                    $('#txtNumFormulaString').val(formula_string);
                    swal('Great!', 'Formula String Added!', 'success');
                }
            }
        });
    };

    var addParam = function (param_name, param_symbol, param_value, param_default_value, chapter_id, update_id) {
        $.ajax({
            type: "POST",
            url: "ajax.php",
            dataType: "json",
            data: {action: 'add_param', update_id: update_id, param_name: param_name, param_symbol: param_symbol, param_value: param_value, param_default_value: param_default_value, chapter_id: chapter_id},
            success: function (result) {
                if (result < 1) {
                    sweetAlert('Oops...', 'Something went wrong!', 'error');
                } else {
                    $parambtn = null;

                    if (update_id === 0) {
<<<<<<< HEAD:js/NSA_2.js
                        var newLi = '<li><a href="javascript:;" class="param" data-param-symbol="' + param_symbol + '" data-param-value="' + param_value + '" data-param-default="' + param_default_value + '" >' + param_name + '</a><a class="deleteParam" data-id=' + result + '>X</a></li>';
                        $("#ddParams").append(newLi);
                        var newParam = '<a class="waves-effect waves-light grid param-grid" data-id="' + result + '">' + param_name + '</a>';
                        $("#tabParams").append(newParam);
                        swal('Great!', 'Parameter Added!', 'success');
                    } else {
                        $('#selectedParam').html(param_name);
                        $tempLi = $(".deleteParam[data-id=" + update_id + "]").parent('li').find('a.param');
                        $tempLi.html(param_name);
                        $tempLi.attr('data-param-symbol', param_symbol);
                        $tempLi.attr('data-param-value', param_value);
                        $tempLi.attr('data-param-default', param_default_value);
                        $(".param-grid[data-id=" + update_id + "]").html(param_name);
=======
                        $("#tabParams").append('<a class="waves-effect waves-light grid param-grid parambtn"></a>');
                        $parambtn = $("#tabParams").children('.parambtn').last();
                        $parambtn.attr("data-id", result);

                        swal('Great!', 'Parameter Added!', 'success');
                    } else {
                        $parambtn = $(".parambtn[data-id=" + update_id + "]");

>>>>>>> origin/master:physics/js/NSA.js
                        swal('Great!', 'Parameter Updated!', 'success');
                    }
                    $parambtn.html(param_symbol);
                    $parambtn.attr("title", param_name);

                    //$parambtn.attr("data-id", update_id);
                    $parambtn.attr("data-name", param_name);
                    $parambtn.attr("data-symbol", param_symbol);
                    $parambtn.attr("data-value", param_value);
                    $parambtn.attr("data-default_value", param_default_value);

                    $("#txtParamName").val('');
                    $("#txtParamSymbol").val('');
                    $("#txtParamValue").val('');
                    $("#txtParamDefaultValue").val('');

                    $("#noParamMsg").hide();
                    $("#viewParameters").click();
                }
            }
        });
    };

    var addUnit = function (unit_name, unit_symbol, unit_multiplier, chapter_id, update_id) {
        $.ajax({
            type: "POST",
            url: "ajax.php",
            dataType: "json",
            data: {action: 'add_unit', update_id: update_id, unit_name: unit_name, unit_symbol: unit_symbol, unit_multiplier: unit_multiplier, chapter_id: chapter_id},
            success: function (result) {
                if (result < 1) {
                    sweetAlert('Oops...', 'Something went wrong!', 'error');
                } else {
                    $unitbtn = null;

                    if (update_id === 0) {
<<<<<<< HEAD:js/NSA_2.js
                        var newLi = '<li><a href="javascript:;" class="unit" data-unit-symbol="' + unit_symbol + '" data-unit-multiplier="' + unit_multiplier + '" >' + unit_name + '</a><a class="deleteUnit" data-id=' + result + '>X</a></li>';
                        $("#ddUnits").append(newLi);
                        var newUnit = '<a class="waves-effect waves-light grid unit-grid" data-id="' + result + '">' + unit_name + '</a>';
                        $("#tabUnits").append(newUnit);
                        swal('Great!', 'Unit Added!', 'success');
                    } else {
                        $('#selectedUnit').html(unit_name);
                        $tempLi = $(".deleteUnit[data-id=" + update_id + "]").parent('li').find('a.unit');
                        $tempLi.html(unit_name);
                        $tempLi.attr('data-unit-symbol', unit_symbol);
                        $tempLi.attr('data-unit-multiplier', unit_multiplier);
                        $(".unit-grid[data-id=" + update_id + "]").html(unit_name);
=======
                        $("#tabUnits").append('<a class="waves-effect waves-light grid param-grid unitbtn"></a>');
                        $unitbtn = $("#tabUnits").children('.unitbtn').last();
                        $unitbtn.attr("data-id", result);

                        swal('Great!', 'Unit Added!', 'success');
                    } else {
                        $unitbtn = $(".unitbtn[data-id=" + update_id + "]");

>>>>>>> origin/master:physics/js/NSA.js
                        swal('Great!', 'Unit Updated!', 'success');
                    }
                    $unitbtn.html(unit_symbol);
                    $unitbtn.attr("title", unit_name);

                    $unitbtn.attr("data-name", unit_name);
                    $unitbtn.attr("data-symbol", unit_symbol);
                    $unitbtn.attr("data-value", unit_multiplier);

                    $("#txtUnitName").val('');
                    $("#txtUnitSymbol").val('');
                    $("#txtUnitMultiplier").val('');

                    $("#noUnitMsg").hide();
                    $("#viewUnits").click();
                }
            }
        });
    };


    /*
     * DELETE STUFF
     */

    var deleteChapter = function (chapter_id) {
        $.ajax({
            type: "POST",
            url: "ajax.php",
            dataType: "json",
            data: {action: 'delete_chapter', chapter_id: chapter_id},
            success: function (result) {
                if (result < 1) {
                    sweetAlert('Oops...', 'Something went wrong!', 'error');
                } else {
                    $(".deleteChapter[data-id=" + chapter_id + "]").parent("li").remove();
                    swal({title: 'Done!', text: 'Chapter Deleted!', type: 'success', confirmButtonText: 'OK!', closeOnConfirm: false},
                    function () {
                        location.reload();
                    });
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
                    sweetAlert('Oops...', 'Something went wrong!', 'error');
                } else {
                    $(".deleteTopic[data-id=" + topic_id + "]").parent("li").remove();
                    swal({title: 'Done!', text: 'Topic Deleted!', type: 'success', confirmButtonText: 'OK!', closeOnConfirm: false},
                    function () {
                        location.reload();
                    });
                }
            }
        });
    };

    var deleteNumerical = function (numerical_id) {
        $.ajax({
            type: "POST",
            url: "ajax.php",
            dataType: "json",
            data: {action: 'delete_numerical', numerical_id: numerical_id},
            success: function (result) {
                if (result < 1) {
                    sweetAlert('Oops...', 'Something went wrong!', 'error');
                } else {
                    $(".deleteNumerical[data-id=" + numerical_id + "]").parent("li").remove();
                    swal({title: 'Done!', text: 'Numerical Deleted!', type: 'success', confirmButtonText: 'OK!', closeOnConfirm: false},
                    function () {
                        location.reload();
                    });
                }
            }
        });
    };

    var deleteParam = function (param_id) {
        $.ajax({
            type: "POST",
            url: "ajax.php",
            dataType: "json",
            data: {action: 'delete_param', param_id: param_id},
            success: function (result) {
                if (result < 1) {
                    sweetAlert('Oops...', 'Something went wrong!', 'error');
                } else {
<<<<<<< HEAD:js/NSA_2.js
                    $(".deleteParam[data-id=" + param_id + "]").parent("li").remove();
                    swal({title: 'Done!', text: 'Parameter Deleted!', type: 'success', confirmButtonText: 'OK!', closeOnConfirm: false},
                    function () {
                        location.reload();
                    });
=======
                    $(".parambtn[data-id = " + param_id + "]").detach();
                    if ($(".parambtn").length === 0) {
                        $("#noParamMsg").show();
                    }
                    $("#viewParameters").click();

                    swal('Done!', 'Parameter Deleted!', 'success');
>>>>>>> origin/master:physics/js/NSA.js
                }
            }
        });
    };

    var deleteUnit = function (unit_id) {
        $.ajax({
            type: "POST",
            url: "ajax.php",
            dataType: "json",
            data: {action: 'delete_unit', unit_id: unit_id},
            success: function (result) {
                if (result < 1) {
                    sweetAlert('Oops...', 'Something went wrong!', 'error');
                } else {
<<<<<<< HEAD:js/NSA_2.js
                    $(".deleteUnit[data-id=" + unit_id + "]").parent("li").remove();
                    swal({title: 'Done!', text: 'Unit Deleted!', type: 'success', confirmButtonText: 'OK!', closeOnConfirm: false},
                    function () {
                        location.reload();
                    });
=======
                    $(".unitbtn[data-id = " + unit_id + "]").detach();
                    if ($(".unitbtn").length === 0) {
                        $("#noUnitMsg").show();
                    }
                    $("#viewUnits").click();

                    swal('Done!', 'Unit Deleted!', 'success');

>>>>>>> origin/master:physics/js/NSA.js
                }
            }
        });
    };


    /*
     * FETCH STUFF
     */

    /* Fetches all CHAPTERS & appends to Chapters Section */
    var fetchChapters = function () {
        $.ajax({
            type: 'POST',
            url: "ajax.php",
            dataType: 'json',
            data: {action: 'fetch_all_chapters'},
            success: function (result) {
                if (result.length > 0) {
                    $("#noChapMsg").hide();
                    $("#selectedChapter").show();
                    $("#viewChapters").click();

                    for (var i = 0; i < result.length; i++) {
                        var newLi = '<li><a href="javascript:;" class="chapter">' + result[i].name + '</a><a class="deleteChapter" data-id=' + result[i].id + '>X</a></li>';
                        $("#ddChapters").append(newLi);
                    }
                } else if (result === 0) {
                    $("#noChapMsg").show();
                    $("#selectedChapter").hide();
                    $("#viewAddChapter").click();
                }
            }
        });
    };

    /* Fetches the TOPICS of a Chapter & appends to Topic Dropdown */
    var fetchTopics = function (chapter_id) {
        $.ajax({
            type: "POST",
            url: "ajax.php",
            dataType: "json",
            data: {action: 'fetch_topics', chapter_id: chapter_id},
            success: function (result) {
                if (result.length > 0) {
                    $("#noTopicsMsg").hide();
                    $("#selectedTopic").show();
                    $("#viewTopics").click();

                    for (var i = 0; i < result.length; i++) {
                        var newLi = '<li><a href="javascript:;" class="topic">' + result[i].name + '</a><a class="deleteTopic" data-id=' + result[i].id + '>X</a></li>';
                        $("#ddTopics").append(newLi);
                    }
                } else {
                    $("#noTopicsMsg").show();
                    $("#selectedTopic").hide();
                    $("#viewAddTopic").click();

                    $(".numericals-section").hide();
                }
            }
        });
    };

    /* Fetches the PARAMETERS of a Chapter & appends to Parameter Section */
    var fetchParams = function (chapter_id) {
        $.ajax({
            type: "POST",
            url: "ajax.php",
            dataType: "json",
            data: {action: 'fetch_params', chapter_id: chapter_id},
            success: function (result) {
                if (result.length > 0) {
                    for (var i = 0; i < result.length; i++) {
<<<<<<< HEAD:js/NSA_2.js
                        // For param GRID
                        newParam += '<a class="waves-effect waves-light grid param-grid" data-id="' + result[i].id + '">' + result[i].name + '</a>';
=======
                        $("#tabParams").append('<a class="waves-effect waves-light grid param-grid parambtn"></a>');
>>>>>>> origin/master:physics/js/NSA.js

                        $newparam = $("#tabParams").children('.parambtn').last();

                        $newparam.html(result[i].symbol);
                        $newparam.attr("title", result[i].name);

                        $newparam.attr("data-id", result[i].id);
                        $newparam.attr("data-name", result[i].name);
                        $newparam.attr("data-symbol", result[i].symbol);
                        $newparam.attr("data-value", result[i].value);
                        $newparam.attr("data-default_value", result[i].default_value);
                    }
                    $("#btnDelParam").show();
                    $("#noParamMsg").hide();
                    $("#viewParameters").click();
                } else {
                    $("#btnDelParam").hide();
                    $("#noParamMsg").show();
                    $("#viewAddParameters").click();
                }
            }
        });
    };

    /* Fetches the UNITS of a Chapter & appends to Units Section */
    var fetchUnits = function (chapter_id) {
        $.ajax({
            type: "POST",
            url: "ajax.php",
            dataType: "json",
            data: {action: 'fetch_units', chapter_id: chapter_id},
            success: function (result) {
                if (result.length > 0) {
                    for (var i = 0; i < result.length; i++) {
<<<<<<< HEAD:js/NSA_2.js
                        // For Unit GRID
                        newUnit += '<a class="waves-effect waves-light grid unit-grid" data-id="' + result[i].id + '">' + result[i].name + '</a>';
=======
                        $("#tabUnits").append('<a class="waves-effect waves-light grid param-grid unitbtn"></a>');

                        $newparam = $("#tabUnits").children('.unitbtn').last();

                        $newparam.html(result[i].symbol);
                        $newparam.attr("title", result[i].name);
>>>>>>> origin/master:physics/js/NSA.js

                        $newparam.attr("data-id", result[i].id);
                        $newparam.attr("data-name", result[i].name);
                        $newparam.attr("data-symbol", result[i].symbol);
                        $newparam.attr("data-value", result[i].value);
                        $newparam.attr("data-default_value", result[i].default_value);
                    }
                    $("#btnDelUnit").show();
                    $("#noUnitMsg").hide();
                    $("#viewUnits").click();
                } else {
                    $("#btnDelUnit").hide();
                    $("#noUnitMsg").show();
                    $("#viewAddUnits").click();
                }
            }
        });
    };

    /* Fetches & Sets the environment(all the dependant element values) to the selected topic. */
    var setTopicEnv = function (topic_id) {
        $.ajax({
            type: "POST",
            url: "ajax.php",
            dataType: "json",
            data: {action: 'get_topic_env', topic_id: topic_id},
            success: function (result) {
                $("#ddNumericals").empty();
                if (result.length > 0) {
                    $("#noNumericalsMsg").hide();
                    $("#selectedNumerical").show();
                    $("#viewNumericals").click();

                    //Set the Numericals of selected Topic
                    for (var i = 0; i < result.length; i++) {
                        var formula_id = (result[i].formula_id !== null) ? result[i].formula_id : '';
                        var formula_string = (result[i].string !== null) ? result[i].string : '';
                        var newLi = '<li><a href="javascript:;" class="numerical" data-num-statement="' + result[i].statement + '" data-num-solution="' + result[i].solution + '" data-formula-id="' + formula_id + '" data-formula-string="' + formula_string + '">' + result[i].num_id + '</a><a class="deleteNumerical" data-id=' + result[i].id + '>X</a></li>';
                        $("#ddNumericals").append(newLi);
                    }
                } else {
                    $("#noNumericalsMsg").show();
                    $("#selectedNumerical").hide();
                    $("#viewAddNumericals").click();
                }
            }
        });
    };

    // public functions
    return {
        //main function
        init: function () {

            /* SWEET ALERT EXAMPLES */
            //swal({   title: 'Error!',   text: 'Do you want to continue',   type: 'error',   confirmButtonText: 'Cool' });
            //sweetAlert('Oops...', 'Something went wrong!', 'error');
            //swal('Any fool can use a computer');
            //swal( 'The Internet?',   'That thing is still around?' );
            //swal(   'Good job!',   'You clicked the button!',   'success' );
            //swal({   title: 'Auto close alert!',   text: 'I will close in 2 seconds.',   timer: 2000 });
            //swal({   title: 'HTML example',   html:     'You can use <b>bold text</b>, ' +     '<a href="//github.com">links</a> ' +     'and other HTML tags' });
            //swal({   title: 'Are you sure?',   text: 'You will not be able to recover this imaginary file!',   type: 'warning',   showCancelButton: true,   confirmButtonColor: '#3085d6',   cancelButtonColor: '#f44336',   confirmButtonText: 'Yes, delete it!',   closeOnConfirm: false }, function() {   swal(     'Deleted!',     'Your file has been deleted.',     'success'   ); });
            //swal({   title: 'Are you sure?',   text: 'You will not be able to recover this imaginary file!',   type: 'warning',   showCancelButton: true,   confirmButtonColor: '#3085d6',   cancelButtonColor: '#f44336',   confirmButtonText: 'Yes, delete it!',   cancelButtonText: 'No, cancel plx!',   confirmButtonClass: 'confirm-class',   cancelButtonClass: 'cancel-class',   closeOnConfirm: false,   closeOnCancel: false }, function(isConfirm) {   if (isConfirm) {     swal(       'Deleted!',       'Your file has been deleted.',       'success'     );   } else {     swal(       'Cancelled',       'Your imaginary file is safe :)',       'error'     );   } });


            /*
             * CHAPTERS :
             */
            fetchChapters();

            $("#btnAddChapter").click(function () {
                var chapter_name = $("#txtChapterName").val();
                addChapter(chapter_name);
            });

            $("#ddChapters").on("click", ".deleteChapter", function (event) {
                var chapter_id = $(this).attr("data-id");
                swal({title: 'Are you sure?', text: 'You will not be able to recover this action!', type: 'warning', showCancelButton: true, confirmButtonColor: '#3085d6', cancelButtonColor: '#f44336', confirmButtonText: 'I Know!', closeOnConfirm: false},
                function () {
                    deleteChapter(chapter_id);
                });
            });

            $("#ddChapters").on("click", ".chapter", function (event) {
                var chapter_id = $(this).siblings("a").attr("data-id");
                var old_chapter_id = $("#selectedChapter").attr("data-selected-id");

                if (chapter_id !== old_chapter_id) {
                    NSA.chapterChanged();
                    $("#selectedChapter").attr("data-selected-id", chapter_id);
                    $("#selectedChapter").html($(this).html());
                    fetchTopics(chapter_id);
                    fetchParams(chapter_id);
                    fetchUnits(chapter_id);
                }
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
                    swal({title: 'You Forgot!', text: 'Please select a chapter!', type: 'warning', timer: 2000});
                }
            });

            $("#ddTopics").on("click", ".deleteTopic", function (event) {
                var topic_id = $(this).attr("data-id");
                swal({title: 'Are you sure?', text: 'You will not be able to recover this action!', type: 'warning', showCancelButton: true, confirmButtonColor: '#3085d6', cancelButtonColor: '#f44336', confirmButtonText: 'I Know!', closeOnConfirm: false},
                function () {
                    deleteTopic(topic_id);
                });
            });

            $("#ddTopics").on("click", ".topic", function (event) {
                var topic_id = $(this).siblings("a.deleteTopic").attr("data-id");   // Get the topic id of selected item (New)
                var old_topic_id = $("#selectedTopic").attr("data-selected-id");    // Get the topic id of previously selected item (Old)

                if (topic_id !== old_topic_id) {    // Check if user has selected another topic
                    NSA.topicChanged(); // CLEAR Topic Environment
                    $("#selectedTopic").attr("data-selected-id", topic_id);
                    $("#selectedTopic").html($(this).html());
                    setTopicEnv(topic_id); // SET Topic Environment
                }
            });

            /*
             * NUMERICALS :
             */
            $("#btnAddNumerical").click(function () {
                var num_identifier = $("#txtNumIdentifier").val();
                var topic_id = $("#selectedTopic").attr("data-selected-id");
                if (topic_id > 0) {
                    addNumerical(num_identifier, topic_id);
                } else {
                    swal({title: 'You Forgot!', text: 'Please select a topic!', type: 'warning', timer: 2000});
                }
            });

            $("#ddNumericals").on("click", ".deleteNumerical", function (event) {
                var numerical_id = $(this).attr("data-id");
                swal({title: 'Are you sure?', text: 'You will not be able to recover this action!', type: 'warning', showCancelButton: true, confirmButtonColor: '#3085d6', cancelButtonColor: '#f44336', confirmButtonText: 'I Know!', closeOnConfirm: false},
                function () {
                    deleteNumerical(numerical_id);
                });
            });

            $("#ddNumericals").on("click", ".numerical", function (event) {
                var numerical_id = $(this).siblings("a.deleteNumerical").attr("data-id");
                $(".middle").show();
                $("a.selectedNumerical").attr("data-selected-id", numerical_id);
                $("a.selectedNumerical").html($(this).html());
                $("span.selectedNumerical").html($(this).html());
                $("#txtNumStatement").focus();
                $("#txtNumStatement").val($(this).attr('data-num-statement'));
                $("#txtNumFormulaString").val($(this).attr('data-formula-string'));
                $("#txtNumFormulaString").focus();
                if ($("#txtNumStatement").val() === '' || $("#txtNumStatement").val() === null) {
                    $("#txtNumStatement").focus();
                }

            });


            $("#btnAddStatement").click(function () {
                var num_statement = $("#txtNumStatement").val();
                var numerical_id = $("#selectedNumerical").attr("data-selected-id");
                if (numerical_id > 0) {
                    addStatement(num_statement, numerical_id);
                } else {
                    swal({title: 'You Forgot!', text: 'Please select a Numerical!', type: 'warning', timer: 2000});
                }
            });

            $("#btnAddFormula").click(function () {
                var formula_string = $("#txtNumFormulaString").val();
                var numerical_id = $("#selectedNumerical").attr("data-selected-id");
                if (numerical_id > 0) {
                    addFormulaString(formula_string, numerical_id);
                } else {
                    swal({title: 'You Forgot!', text: 'Please select a chapter!', type: 'warning', timer: 2000});
                }
            });

            /*
             * PARAMETERS
             */
            $("#btnAddParam").click(function () {
                var param_name = $("#txtParamName").val();
                var param_symbol = $("#txtParamSymbol").val();
                var param_value = $("#txtParamValue").val();
                var param_default_value = $("#txtParamDefaultValue").val();

                var chapter_id = $("#selectedChapter").attr("data-selected-id");
                if (chapter_id > 0) {
                    if (param_name === '') {
                        swal({title: 'Missing!', text: 'Parameter Name!', type: 'warning', timer: 2000});
                    } else {
                        var param_id = $("#viewAddParameters").attr("data-selected-id");

                        var update_id = 0;
                        if (param_id !== 0 && param_id !== '0') {
                            update_id = param_id;
                        }
                        addParam(param_name, param_symbol, param_value, param_default_value, chapter_id, update_id);
                    }
                } else {
                    swal({title: 'You Forgot!', text: 'Select a chapter!', type: 'warning', timer: 2000});
                }
            });

<<<<<<< HEAD:js/NSA_2.js
            $("#ddParams").on("click", ".deleteParam", function (event) {
                var param_id = $(this).attr("data-id");
                swal({title: 'Are you sure?', text: 'You will not be able to recover this action!', type: 'warning', showCancelButton: true, confirmButtonColor: '#3085d6', cancelButtonColor: '#f44336', confirmButtonText: 'I Know!', closeOnConfirm: false},
                function () {
                    deleteParam(param_id);
                });
=======
            $("#btnDelParam").click(function () {
                var param_id = $("#viewAddParameters").attr("data-selected-id");
                deleteParam(param_id);
>>>>>>> origin/master:physics/js/NSA.js
            });

            $("#tabParams").parent().bind("contextmenu", function (event) {
                event.preventDefault();
            });

            $("#tabParams").on("mousedown", ".parambtn", function (event) {
                if (event.button === 2) {
                    $("#viewAddParameters").html("Edit");
                    $("#btnAddParam").children(".material-icons").html('done');
                    $("#btnDelParam").show();
                    $("#viewAddParameters").click();

                    $("#viewAddParameters").attr("data-selected-id", $(this).attr('data-id'));
                    $("#txtParamName").val($(this).attr('data-name'));
                    $("#txtParamSymbol").val($(this).attr('data-symbol'));
                    $("#txtParamValue").val($(this).attr('data-value'));
                    $("#txtParamDefaultValue").val($(this).attr('data-default_value'));

                    $("#txtParamDefaultValue").focus();
                    $("#txtParamValue").focus();
                    $("#txtParamSymbol").focus();
                    $("#txtParamName").focus();
                }
            });

            $("#viewParameters").click(function () {
                $("#viewAddParameters").attr("data-selected-id", 0);
                $("#viewAddParameters").html("Add");
                $("#btnAddParam").children(".material-icons").html('add');
                $("#btnDelParam").hide();

                //$(".right > div:nth-child(2)").show();
            });

            $("#viewAddParameters").click(function () {
                var selected_id = $("#viewAddParameters").attr("data-selected-id");

                if (selected_id === 0 || selected_id === '0') { //is adding
                    $("#txtParamName").val("");
                    $("#txtParamSymbol").val("");
                    $("#txtParamValue").val("");
                    $("#txtParamDefaultValue").val("");

                    $("#txtParamName").blur();
                    $("#txtParamSymbol").blur();
                    $("#txtParamValue").blur();
                    $("#txtParamDefaultValue").blur();

                    $("#viewAddParameters").attr("data-selected-id", 0);
                }

                $("#viewAddParameters").focus();

                //$(".right > div:nth-child(2)").hide();
            });

            /*
             * UNITS
             */
            $("#btnAddUnit").click(function () {
                var unit_name = $("#txtUnitName").val();
                var unit_symbol = $("#txtUnitSymbol").val();
                var unit_multiplier = $("#txtUnitMultiplier").val();

                var chapter_id = $("#selectedChapter").attr("data-selected-id");
                if (chapter_id > 0) {
                    if (unit_name === '') {
                        swal({title: 'Missing!', text: 'Unit Name!', type: 'warning', timer: 2000});
                    } else {
                        var unit_id = $("#viewAddUnits").attr("data-selected-id");
                        var update_id = 0;
                        if (unit_id !== 0 && unit_id !== '0') {
                            update_id = unit_id;
                        }
                        addUnit(unit_name, unit_symbol, unit_multiplier, chapter_id, update_id);
                    }
                } else {
                    swal({title: 'You Forgot!', text: 'Select a chapter!', type: 'warning', timer: 2000});
                }
            });

<<<<<<< HEAD:js/NSA_2.js
            $("#ddUnits").on("click", ".deleteUnit", function (event) {
                var unit_id = $(this).attr("data-id");
                swal({title: 'Are you sure?', text: 'You will not be able to recover this action!', type: 'warning', showCancelButton: true, confirmButtonColor: '#3085d6', cancelButtonColor: '#f44336', confirmButtonText: 'I Know!', closeOnConfirm: false},
                function () {
                    deleteUnit(unit_id);
                });
=======
            $("#btnDelUnit").click(function () {
                var unit_id = $("#viewAddUnits").attr("data-selected-id");
                deleteUnit(unit_id);
>>>>>>> origin/master:physics/js/NSA.js
            });

            $("#tabUnits").parent().bind("contextmenu", function (event) {
                event.preventDefault();
            });

            $("#tabUnits").on("mousedown", ".unitbtn", function (event) {
                if (event.button === 2) {
                    $("#viewAddUnits").html("Edit");
                    $("#btnAddUnit").children(".material-icons").html('done');
                    $("#btnDelUnit").show();
                    $("#viewAddUnits").click();

                    $("#viewAddUnits").attr("data-selected-id", $(this).attr('data-id'));
                    $("#txtUnitName").val($(this).attr('data-name'));
                    $("#txtUnitSymbol").val($(this).attr('data-symbol'));
                    $("#txtUnitMultiplier").val($(this).attr('data-value'));

                    $("#txtUnitName").focus();
                    $("#txtUnitSymbol").focus();
                    $("#txtUnitMultiplier").focus();
                }
            });

            $("#viewUnits").click(function () {
                $("#viewAddUnits").attr("data-selected-id", 0);
                $("#viewAddUnits").html("Add");
                $("#btnAddUnit").children(".material-icons").html('add');
                $("#btnDelUnit").hide();

<<<<<<< HEAD:js/NSA_2.js
            
=======
                //$(".right > div:nth-child(1)").show();
            });

            $("#viewAddUnits").click(function () {
                var selected_id = $("#viewAddUnits").attr("data-selected-id");

                if (selected_id === 0 || selected_id === '0') { //is adding
                    $("#txtUnitName").val("");
                    $("#txtUnitSymbol").val("");
                    $("#txtUnitMultiplier").val("");

                    $("#txtUnitName").blur();
                    $("#txtUnitSymbol").blur();
                    $("#txtUnitMultiplier").blur();

                    $("#viewAddUnits").attr("data-selected-id", 0);
                }

                $("#viewAddUnits").focus();

                //$(".right > div:nth-child(1)").hide();
            });

            /*on math button click*/
            $(".all-math-op div a").click(function () {
                var content = $(this).text();

                NSA.insertAtCaret(focused, content);
            });

            $("#txtNumStatement").focusin(function () {
                focused = "txtNumStatement";
            });

            $("#txtNumFormulaString").focusin(function () {
                focused = "txtNumFormulaString";
            });

            //initialize here something.
>>>>>>> origin/master:physics/js/NSA.js
        },
        //some helper function
        doSomeStuff: function () {
            myFunc("Hello");
        },
        chapterChanged: function () {
            //RESET TOPIC
            $('#ddTopics').empty();
            $("#selectedTopic").attr("data-selected-id", 0);
            $("#selectedTopic").html('Select Topic');

            //RESET NUMERICAL
            $('#ddNumericals').empty();
            $("a.selectedNumerical").attr("data-selected-id", 0);
            $("a.selectedNumerical").html('Select Numerical');

            $("span.selectedNumerical").html('..');
            $("#txtNumStatement").val('');
            $("#txtNumFormulaString").val('');

            NSA.resetParamEnv();
            NSA.resetUnitEnv();

            $(".middle").hide();
            $(".right").show();
            $(".topics-section").show();
        },
        topicChanged: function () {
            //RESET NUMERICAL
            $('#ddNumericals').empty();
            $("a.selectedNumerical").attr("data-selected-id", 0);
            $("a.selectedNumerical").html('Select Numerical');

            $("span.selectedNumerical").html('..');
            $("#txtNumStatement").val('');
            $("#txtNumFormulaString").val('');

            $(".middle").hide();
            $(".numericals-section").show();

        },
        paramChanged: function () {
            // Do required changes when a selected param changes
        },
        unitChanged: function () {
            // Do required changes when a selected unit changes
        },
        resetParamEnv: function () {
            $("#tabParams .parambtn").detach(); //insted of removing all components, remove only the parambtns.
            //RESET PARAMETERS
            $("#txtParamName").val('');
            $("#txtParamSymbol").val('');
            $("#txtParamValue").val('');
            $("#txtParamDefaultValue").val('');
        },
        resetUnitEnv: function () {
            $("#tabUnits.parambtn").detach(); //insted of removing all components, remove only the parambtns.
            //RESET UNITS
            $("#txtUnitName").val('');
            $("#txtUnitSymbol").val('');
            $("#txtUnitMultiplier").val('');
        }
    };

}();

/***
 Usage
 ***/
//NSA.init();
//NSA.doSomeStuff();
