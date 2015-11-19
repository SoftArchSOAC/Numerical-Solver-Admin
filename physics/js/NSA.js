/**
 Custom module for you to write your own javascript functions
 **/
var NSA = function () {

    // private functions & variables

    var myFunc = function (text) {
        alert(text);
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

    var addNumerical = function (num_identifier, topic_id) {
        $.ajax({
            type: "POST",
            url: "ajax.php",
            dataType: "json",
            data: {action: 'add_numerical', identifier: num_identifier, topic_id: topic_id},
            success: function (result) {
                if (result < 1) {
                    alert("Opps! Something went wrong. \nTry again.");
                } else {
                    var newLi = '<li><a href="javascript:;" class="numerical">' + num_identifier + '</a><a class="deleteNumerical" data-id="' + result + '">X</a></li>';
                    $("#ddNumericals").append(newLi);
                    alert("Numerical Added!");
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
                    alert("Opps! Something went wrong. \nTry again.");
                } else {
                    $('#txtNumStatement').val(num_statement);
                    alert("Statement Added!");
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
                    alert("Opps! Something went wrong. \nTry again.");
                } else {
                    $('#txtNumFormulaString').val(formula_string);
                    alert("Formula String Added!");
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
                    alert("Opps! Something went wrong. \nTry again.");
                } else {
                    if (update_id === 0) {
                        var newLi = '<li><a href="javascript:;" class="param" data-param-symbol="' + param_symbol + '" data-param-value="' + param_value + '" data-param-default="' + param_default_value + '" >' + param_name + '</a><a class="deleteParam" data-id=' + result + '>X</a></li>';
                        $("#ddParams").append(newLi);
                        alert("Parameter Added!");
                    } else {
                        $('#selectedParam').html(param_name);
                        $tempLi = $(".deleteParam[data-id=" + update_id + "]").parent('li').find('a.param');
                        $tempLi.html(param_name);
                        $tempLi.attr('data-param-symbol', param_symbol);
                        $tempLi.attr('data-param-value', param_value);
                        $tempLi.attr('data-param-default', param_default_value);
                        $(".param-grid[data-id=" + update_id + "]").html(param_name);
                        alert("Parameter Updated!");
                    }

                    $("#txtParamName").val('');
                    $("#txtParamSymbol").val('');
                    $("#txtParamValue").val('');
                    $("#txtParamDefaultValue").val('');

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
                    alert("Opps! Something went wrong. \nTry again.");
                } else {
                    if (update_id === 0) {
                        var newLi = '<li><a href="javascript:;" class="unit" data-unit-symbol="' + unit_symbol + '" data-unit-multiplier="' + unit_multiplier + '" >' + unit_name + '</a><a class="deleteUnit" data-id=' + result + '>X</a></li>';
                        $("#ddUnits").append(newLi);
                        alert("Unit Added!");
                    } else {
                        $('#selectedUnit').html(unit_name);
                        $tempLi = $(".deleteUnit[data-id=" + update_id + "]").parent('li').find('a.unit');
                        $tempLi.html(unit_name);
                        $tempLi.attr('data-unit-symbol', unit_symbol);
                        $tempLi.attr('data-unit-multiplier', unit_multiplier);
                        $(".unit-grid[data-id=" + update_id + "]").html(unit_name);
                        alert("Unit Updated!");
                    }

                    $("#txtUnitName").val('');
                    $("#txtUnitSymbol").val('');
                    $("#txtUnitMultiplier").val('');

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
                    alert("Opps! Something went wrong. \nTry again.");
                } else {
                    $(".deleteChapter[data-id=" + chapter_id + "]").parent("li").remove();
                    alert("Chapter Deleted!");
                    location.reload();
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
                    location.reload();
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
                    alert("Opps! Something went wrong. \nTry again.");
                } else {
                    $(".deleteParam[data-id=" + param_id + "]").parent("li").remove();
                    alert("Param Deleted!");
                    location.reload();
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
                    alert("Opps! Something went wrong. \nTry again.");
                } else {
                    $(".deleteUnit[data-id=" + unit_id + "]").parent("li").remove();
                    alert("Unit Deleted!");
                    location.reload();
                }
            }
        });
    };


    /*
     * FETCH STUFF
     */

    /* Fetches the TOPICS of a Chapter & appends to Topic Dropdown */
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

    /* Fetches the PARAMETERS of a Chapter & appends to Parameter Section */
    var fetchParams = function (chapter_id) {
        $.ajax({
            type: "POST",
            url: "ajax.php",
            dataType: "json",
            data: {action: 'fetch_params', chapter_id: chapter_id},
            success: function (result) {
                if (result.length > 0) {
                    var newParam = '', newLi = '';
                    for (var i = 0; i < result.length; i++) {
                        // For param GRID
                        newParam += '<a class="waves-effect waves-light grid param-grid" data-id="' + result[i].id + '">' + result[i].name + '</a>';

                        // For Param Dropdown List
                        newLi += '<li><a href="javascript:;" class="param" data-param-symbol="' + result[i].symbol + '" data-param-value="' + result[i].value + '" data-param-default="' + result[i].default_value + '" >' + result[i].name + '</a><a class="deleteParam" data-id=' + result[i].id + '>X</a></li>';
                    }
                    $("#tabParams").append(newParam);
                    $("#ddParams").append(newLi);
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
                    var newUnit = '', newLi = '';
                    for (var i = 0; i < result.length; i++) {
                        // For Unit GRID
                        newUnit += '<a class="waves-effect waves-light grid unit-grid" data-id="' + result[i].id + '">' + result[i].name + '</a>';

                        // For Unit Dropdown List
                        newLi += '<li><a href="javascript:;" class="unit" data-unit-symbol="' + result[i].symbol + '" data-unit-multiplier="' + result[i].standard_multiplier + '" >' + result[i].name + '</a><a class="deleteUnit" data-id=' + result[i].id + '>X</a></li>';
                    }
                    $("#tabUnits").append(newUnit);
                    $("#ddUnits").append(newLi);
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
                    //Set the Numericals of selected Topic
                    for (var i = 0; i < result.length; i++) {
                        var formula_id = (result[i].formula_id !== null) ? result[i].formula_id : '';
                        var formula_string = (result[i].string !== null) ? result[i].string : '';
                        var newLi = '<li><a href="javascript:;" class="numerical" data-num-statement="' + result[i].statement + '" data-num-solution="' + result[i].solution + '" data-formula-id="' + formula_id + '" data-formula-string="' + formula_string + '">' + result[i].num_id + '</a><a class="deleteNumerical" data-id=' + result[i].id + '>X</a></li>';
                        $("#ddNumericals").append(newLi);
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
                    alert("Please select a chapter!");
                }
            });

            $("#ddTopics").on("click", ".deleteTopic", function (event) {
                var topic_id = $(this).attr("data-id");
                deleteTopic(topic_id);
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
                    alert("Please select a topic!");
                }
            });

            $("#ddNumericals").on("click", ".deleteNumerical", function (event) {
                var numerical_id = $(this).attr("data-id");
                deleteNumerical(numerical_id);
            });

            $("#ddNumericals").on("click", ".numerical", function (event) {
                var numerical_id = $(this).siblings("a.deleteNumerical").attr("data-id");
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
                    alert("Please select a numerical!");
                }
            });


            $("#btnAddFormula").click(function () {
                var formula_string = $("#txtNumFormulaString").val();
                var numerical_id = $("#selectedNumerical").attr("data-selected-id");
                if (numerical_id > 0) {
                    addFormulaString(formula_string, numerical_id);
                } else {
                    alert("Please select a numerical!");
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
                        alert('Please enter Parameter Name!');
                    } else {
                        var param_id = $("#selectedParam").attr("data-selected-id");

                        var update_id = 0;
                        if (param_id !== 0 && param_id !== '0') {
                            update_id = param_id;
                        }
                        addParam(param_name, param_symbol, param_value, param_default_value, chapter_id, update_id);
                    }
                } else {
                    alert("Please select a Chapter!");
                }
            });

            $("#ddParams").on("click", ".deleteParam", function (event) {
                var param_id = $(this).attr("data-id");
                deleteParam(param_id);
            });

            $("#ddParams").on("click", ".param", function (event) {
                $this = $(this);

                var param_id = $this.siblings("a.deleteParam").attr("data-id");
                var old_param_id = $("#selectedParam").attr("data-selected-id");

                if (param_id !== old_param_id) {
                    NSA.paramChanged();

                    $("#selectedParam").attr("data-selected-id", param_id);
                    $("#selectedParam").html($this.html());

                    $("#txtParamName").val($this.html());
                    $("#txtParamName").focus();

                    $("#txtParamSymbol").val($this.attr('data-param-symbol'));
                    $("#txtParamSymbol").focus();

                    $("#txtParamValue").val($this.attr('data-param-value'));
                    $("#txtParamValue").focus();

                    $("#txtParamDefaultValue").val($this.attr('data-param-default'));
                    $("#txtParamDefaultValue").focus();

                    //setTopicEnv(param_id);
                }
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
                        alert('Please enter Unit Name!');
                    } else {
                        var unit_id = $("#selectedUnit").attr("data-selected-id");
                        var update_id = 0;
                        if (unit_id !== 0 && unit_id !== '0') {
                            update_id = unit_id;
                        }
                        addUnit(unit_name, unit_symbol, unit_multiplier, chapter_id, update_id);
                    }
                } else {
                    alert("Please select a Chapter!");
                }
            });

            $("#ddUnits").on("click", ".deleteUnit", function (event) {
                var unit_id = $(this).attr("data-id");
                deleteUnit(unit_id);
            });

            $("#ddUnits").on("click", ".unit", function (event) {
                $this = $(this);

                var unit_id = $this.siblings("a.deleteUnit").attr("data-id");
                var old_unit_id = $("#selectedUnit").attr("data-selected-id");

                if (unit_id !== old_unit_id) {
                    NSA.unitChanged();

                    $("#selectedUnit").attr('data-selected-id', unit_id);
                    $("#selectedUnit").html($this.html());

                    $("#txtUnitName").val($this.html());
                    $("#txtUnitName").focus();

                    $("#txtUnitSymbol").val($this.attr('data-unit-symbol'));
                    $("#txtUnitSymbol").focus();

                    $("#txtUnitMultiplier").val($this.attr('data-unit-multiplier'));
                    $("#txtUnitMultiplier").focus();

                    //setTopicEnv(unit_id);
                }
            });


            //initialize here something.
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
        },
        topicChanged: function () {
            //RESET NUMERICAL
            $('#ddNumericals').empty();
            $("a.selectedNumerical").attr("data-selected-id", 0);
            $("a.selectedNumerical").html('Select Numerical');

            $("span.selectedNumerical").html('..');
            $("#txtNumStatement").val('');
            $("#txtNumFormulaString").val('');
        },
        paramChanged: function () {
            // Do required changes when a selected param changes
        },
        unitChanged: function () {
            // Do required changes when a selected unit changes
        },
        resetParamEnv: function () {
            $("#tabParams").html('');
            //RESET PARAMETERS
            $('#ddParams').empty();
            $("#selectedParam").attr("data-selected-id", 0);
            $("#selectedParam").html('Edit Parameter');
            $("#txtParamName").val('');
            $("#txtParamSymbol").val('');
            $("#txtParamValue").val('');
            $("#txtParamDefaultValue").val('');
        },
        resetUnitEnv: function () {
            $("#tabUnits").html('');
            //RESET UNITS
            $('#ddUnits').empty();
            $("#selectedUnit").attr("data-selected-id", 0);
            $("#selectedUnit").html('Edit Unit');
            $("#txtUnitName").val('');
            $("#txtUnitSymbol").val('');
            $("#txtUnitMultiplier").val('');
        }
    };

}();

/***
 Usage
 ***/
//Custom.init();
//Custom.doSomeStuff();