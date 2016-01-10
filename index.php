<?PHP require_once 'include/pre.php'; ?>
<!DOCTYPE html>
<html>
    <head>
        <title>Admin - Numerical Solver</title>
        <meta http-equiv="content-type" content="text/html; charset=UTF-8"/>
        <!--Import Google Icon Font-->
        <link href="http://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
        <!--Import bootstrap.css-->
        <!--<link type="text/css" rel="stylesheet" href="css/bootstrap.css" />-->
        <!--Import materialize.css-->
        <link type="text/css" rel="stylesheet" href="css/materialize.css" media="screen,projection"/>
        <link type="text/css" rel="stylesheet" href="css/site.css" media="screen,projection"/>
        <link type="text/css" rel="stylesheet" href="css/icon.css" />

        <script src="js/sweetalert2.min.js"></script>
        <link rel="stylesheet" type="text/css" href="css/sweetalert2.css">

        <!--Let browser know website is optimized for mobile-->
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    </head>
    <body>
        <div class="row">
            <div class="col s3 left">
                <div align="center">
                    <!-- BEGIN SECTION: CHAPTERS -->
                    <div class="row chapters-section">
                        <div class="col s12">
                            <ul class="tabs margin-bottom-20">
                                <li class="tab col s3"><a id="viewChapters" class="active" href="#tabChapters">Chapters</a></li>
                                <li class="tab col s3"><a id="viewAddChapter" href="#tabAddChapter">Add</a></li>
                            </ul>
                        </div>
                        <div id="tabChapters" class="col s12 tabChapters">
                            <a id="selectedChapter" data-selected-id="0" class='dropdown-button btn' href='#' data-beloworigin="true" data-activates='ddChapters'>Select Chapter</a>
                            <ul id='ddChapters' class='dropdown-content'>
                            </ul>
                            <p id="noChapMsg">Add chapters to see them here.</p>
                        </div>
                        <div id="tabAddChapter" class="col s12 tabChapters">
                            <form class="col s12">
                                <div class="row">
                                    <div class="input-field col s9">
                                        <input id="txtChapterName" type="text" class="validate">
                                        <label for="txtChapterName">Chapter</label>
                                    </div>
                                    <div class="input-field col s3">
                                        <button type="button" name="btnAddChapter" id="btnAddChapter" class="btn-floating btn-medium waves-effect waves-light red" >
                                            <i class="material-icons">add</i>
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <!-- -------------------
                    END SECTION: CHAPTERS -->

                    <hr class="separator"/>

                    <!-- BEGIN SECTION: TOPICS -->
                    <div class="row topics-section">
                        <div class="col s12">
                            <ul class="tabs margin-bottom-20">
                                <li class="tab col s3"><a id="viewTopics" class="active" href="#tabTopics">Topics</a></li>
                                <li class="tab col s3"><a id="viewAddTopic" href="#tabAddTopic">Add</a></li>
                            </ul>
                        </div>
                        <div id="tabTopics" class="col s12 tabTopics">
                            <a id="selectedTopic" data-selected-id="0" class='dropdown-button btn' href='#' data-beloworigin="true" data-activates='ddTopics'>Select Topic</a>
                            <ul id='ddTopics' class='dropdown-content'>
                            </ul>
                            <p id="noTopicsMsg">Add topics to see them here.</p>
                        </div>
                        <div id="tabAddTopic" class="col s12 tabTopics">
                            <form class="col s12">
                                <div class="row">
                                    <div class="input-field col s9">
                                        <input id="txtTopicName" type="text" class="validate">
                                        <label for="txtTopicName">Topic</label>
                                    </div>
                                    <div class="input-field col s3">
                                        <button type="button" name="btnAddTopic" id="btnAddTopic" class="btn-floating btn-medium waves-effect waves-light red">
                                            <i class="material-icons">add</i>
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <!-- -------------------
                    END SECTION: TOPICS -->

                    <hr class="separator numericals-section"/>

                    <!-- BEGIN SECTION: NUMERICALS -->
                    <div class="row numericals-section">
                        <div class="col s12">
                            <ul class="tabs margin-bottom-20">
                                <li class="tab col s3"><a id="viewNumericals" class="active" href="#tabNumericals">Numericals</a></li>
                                <li class="tab col s3"><a id="viewAddNumericals" href="#tabAddNumerical">Add</a></li>
                            </ul>
                        </div>
                        <div id="tabNumericals" class="col s12 tabNumericals">
                            <a id="selectedNumerical" data-selected-id="0" class='dropdown-button btn selectedNumerical' href='#' data-beloworigin="true" data-activates='ddNumericals'>Select Numerical</a>
                            <ul id='ddNumericals' class='dropdown-content'>
                                <p id="noTopicsMsg">Add topics to see them here.</p>
                            </ul>
                            <p id="noNumericalsMsg">Add numerical to see them here.</p>
                        </div>
                        <div id="tabAddNumerical" class="col s12 tabNumericals">
                            <form class="col s12">
                                <div class="row">
                                    <div class="input-field col s9">
                                        <input id="txtNumIdentifier" type="text" class="validate">
                                        <label for="txtNumIdentifier">Identifier</label>
                                    </div>
                                    <div class="input-field col s3">
                                        <button type="button" name="btnAddNumerical" id="btnAddNumerical" class="btn-floating btn-medium waves-effect waves-light red" >
                                            <i class="material-icons">add</i>
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <!-- -------------------
                    END SECTION: TOPICS -->
                </div>
            </div>

            <div class="col s6 middle">
                <!-- BEGIN SECTION: STATEMENTS -->
                <div class="container-fluid margin-left-30 margin-bottom-50 ">
                    <h5>Statement For <span class="selectedNumerical theme-color">..</span></h5>
                    <div class="row">
                        <div class="input-field col s11">
                            <textarea id="txtNumStatement" class="materialize-textarea textarea"></textarea>
                            <label for="txtNumStatement">Statement</label>
                        </div>
                        <!--                        <div class="input-field col s3">
                                                    <button type="button" name="btnAddStatement" id="btnAddStatement" class="btn-floating btn-medium waves-effect waves-light red" title="Add Statement" >
                                                        <i class="material-icons">add</i>
                                                    </button>
                                                </div>-->
                    </div>
                </div>
                <!-- -------------------
                END SECTION: STATEMENTS -->

                <!-- BEGIN SECTION: FORMULA -->
                <div class="container-fluid margin-left-30 margin-bottom-50">
                    <h5>Formula String For <span class="selectedNumerical theme-color">..</span></h5>
                    <div class="row">
                        <div class="input-field col s11">
                            <textarea id="txtNumFormulaString" class="materialize-textarea textarea"></textarea>
                            <label for="txtNumFormulaString">Formula String </label>
                        </div>

                        <div class="input-field col s12 all-math-op">
                            <div class="input-field col s4 common-math-op">
                                <a class="waves-effect waves-light btn btn-small grid ">+</a>
                                <a class="waves-effect waves-light btn btn-small grid ">-</a>
                                <a class="waves-effect waves-light btn btn-small grid ">*</a>
                                <a class="waves-effect waves-light btn btn-small grid ">/</a>
                                <a class="waves-effect waves-light btn btn-small grid ">=</a>
                                <a class="waves-effect waves-light btn btn-small grid ">%</a>
                                <a class="waves-effect waves-light btn btn-small grid ">(</a>
                                <a class="waves-effect waves-light btn btn-small grid ">)</a>
                                <a class="waves-effect waves-light btn btn-small grid ">{</a>
                                <a class="waves-effect waves-light btn btn-small grid ">}</a>
                                <a class="waves-effect waves-light btn btn-small grid ">[</a>
                                <a class="waves-effect waves-light btn btn-small grid ">]</a>
                            </div>
                            <div class="input-field col s3 math-op common-math-op">
                                <a class="waves-effect waves-light btn btn-small grid">1</a>
                                <a class="waves-effect waves-light btn btn-small grid">2</a>
                                <a class="waves-effect waves-light btn btn-small grid">3</a>
                                <a class="waves-effect waves-light btn btn-small grid">4</a>
                                <a class="waves-effect waves-light btn btn-small grid">5</a>
                                <a class="waves-effect waves-light btn btn-small grid">6</a>
                                <a class="waves-effect waves-light btn btn-small grid">7</a>
                                <a class="waves-effect waves-light btn btn-small grid">8</a>
                                <a class="waves-effect waves-light btn btn-small grid">9</a>
                                <a class="waves-effect waves-light btn btn-small grid" style="visibility: hidden">0</a>
                                <a class="waves-effect waves-light btn btn-small grid">0</a>
                            </div>
                            <div class="input-field col s5 math-func">
                                <a class="waves-effect waves-light grid">abs</a>
                                <a class="waves-effect waves-light grid">sqrt</a>
                                <a class="waves-effect waves-light grid">cbrt</a>
                                <a class="waves-effect waves-light grid">ceil</a>
                                <a class="waves-effect waves-light grid">floor</a>
                                <a class="waves-effect waves-light grid">exp</a>
                                <a class="waves-effect waves-light grid">log</a>
                                <a class="waves-effect waves-light grid">log10</a>
                                <a class="waves-effect waves-light grid">log2</a>
                                <a class="waves-effect waves-light grid">sin</a>
                                <a class="waves-effect waves-light grid">cos</a>
                                <a class="waves-effect waves-light grid">tan</a>
                            </div>
                        </div>
                    </div>
                    <a class="waves-effect waves-light btn margin-top-40 margin-right-40" id="btnUpdateQuestion">Add/Update</a>
                </div>
                <!-- -------------------
                END SECTION: FORMULA -->
            </div>

            <div class="col s3 right">
                <!-- BEGIN SECTION: PARAMETERS -->
                <div class="container params">
                    <div class="row">
                        <div class="col s12">
                            <span id="tempParam"></span> <span id="tempUnit"></span>
                            <ul class="tabs margin-bottom-20">
                                <li class="tab col s3"><a id="viewParameters" data-selected-id="0" class="active" href="#tabParams">Params</a></li>
                                <li class="tab col s3"><a id="viewAddParameters" href="#tabAddParam">Add</a></li>
                            </ul>
                        </div>
                        <div id="tabParams" class="col s12 tabParams unitParam">
                            <p id="noParamMsg">Add parameters for this chapter to see them here.</p>
                        </div>
                        <div id="tabAddParam" class="col s12 tabParams unitParam">
                            <form class="col s12">
                                <div class="row">
                                    <div class="input-field col s6">
                                        <input id="txtParamName" type="text" class="validate">
                                        <label for="txtParamName">Name</label>
                                    </div>
                                    <div class="input-field col s6">
                                        <input id="txtParamSymbol" type="text" class="validate">
                                        <label for="txtParamSymbol">Symbol</label>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="input-field col s6">
                                        <input id="txtParamValue" type="text" class="validate">
                                        <label for="txtParamValue">Min</label>
                                    </div>
                                    <div class="input-field col s6">
                                        <input id="txtParamDefaultValue" type="text" class="validate">
                                        <label for="txtParamDefaultValue">Max</label>
                                    </div>
                                </div>
                                <div class="input-field row" style="float: right;">
                                    <button type="button" name="btnAddParam" id="btnAddParam" class="btn-floating btn-medium waves-effect waves-light green">
                                        <i class="material-icons">add</i>
                                    </button>
                                    <button type="button" name="btnDelParam" id="btnDelParam" class="btn-floating btn-medium waves-effect waves-light red">
                                        <i class="material-icons">delete</i>
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <hr class="separator"/>
                </div>
                <!-- -------------------
                END SECTION: PARAMETERS -->

                <!-- BEGIN SECTION: UNITS -->
                <div class="container">
                    <div class="row">
                        <div class="col s12">
                            <ul class="tabs margin-bottom-20">
                                <li class="tab col s3"><a id="viewUnits" class="active " href="#tabUnits" >Units</a></li>
                                <li class="tab col s3"><a id="viewAddUnits" href="#tabAddUnit">Add</a></li>
                            </ul>
                        </div>
                        <div id="tabUnits" class="col s12 tabRegion unitTab wait">
                            <p id="noUnitMsg">Add units for this chapter to see them here.</p>
                        </div>
                        <div id="tabAddUnit" class="col s12 tabRegion unitTab">
                            <form class="col s12">
                                <div class="row">
                                    <div class="input-field col s4">
                                        <input id="txtUnitName" type="text" class="validate">
                                        <label for="txtUnitName">Name</label>
                                    </div>
                                    <div class="input-field col s4">
                                        <input id="txtUnitSymbol" type="text" class="validate">
                                        <label for="txtUnitSymbol">Symbol</label>
                                    </div>
                                    <div class="input-field col s4">
                                        <input id="txtUnitMultiplier" type="text" class="validate">
                                        <label for="txtUnitMultiplier">Multiplier</label>
                                    </div>
                                </div>
                                <div class="input-field row" style="float: right;">
                                    <button type="button" name="btnAddUnit" id="btnAddUnit" class="btn-floating btn-medium waves-effect waves-light green">
                                        <i class="material-icons">add</i>
                                    </button>
                                    <button type="button" name="btnDelUnit" id="btnDelUnit" class="btn-floating btn-medium waves-effect waves-light red">
                                        <i class="material-icons">delete</i>
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <!-- -------------------
                END SECTION: UNITS -->
            </div>
        </div>
        <script type="text/javascript" src="js/jquery-2.1.1.min.js"></script>
        <script type="text/javascript" src="js/materialize.min.js"></script>
        <script type="text/javascript" src="js/NSA.js"></script>
        <script type="text/javascript" src="js/jquery.pulsate.min.js"></script>
        <script>
            $(function () {
                NSA.init();
            });
        </script>
    </body>
</html>