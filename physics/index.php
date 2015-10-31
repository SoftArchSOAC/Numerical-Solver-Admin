<!DOCTYPE html>
<html>
    <head>
        <title>Physic App</title>
        <meta http-equiv="content-type" content="text/html; charset=UTF-8"/>
        <!--Import Google Icon Font-->
        <link href="http://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
        <!--Import bootstrap.css-->
        <!--<link type="text/css" rel="stylesheet" href="css/bootstrap.css" />-->
        <!--Import materialize.css-->
        <link type="text/css" rel="stylesheet" href="css/materialize.css" media="screen,projection"/>
        <link type="text/css" rel="stylesheet" href="css/icon.css" />
        <!--Let browser know website is optimized for mobile-->
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    </head>
    <body>
        <div class="row">
            <div class="col s3 left">
                <div align="center">
                    <!-- BEGIN SECTION: CHAPTERS -->
                    <div class="row">
                        <div class="col s12">
                            <ul class="tabs margin-bottom-20">
                                <li class="tab col s3"><a class="active" href="#tabChapters">Chapters</a></li>
                                <li class="tab col s3"><a href="#tabAddChapter">Add New</a></li>
                            </ul>
                        </div>
                        <div id="tabChapters" class="col s12 tabChapters">
                            <a class='dropdown-button btn' href='#' data-beloworigin="true" data-activates='ddChapters'>Select Chapter</a>
                            <ul id='ddChapters' class='dropdown-content'>
                                <li><a href="javascript:;" class="chapter">Chapter one</a></li>
                                <li><a href="javascript:;" class="chapter">Chapter two</a></li>
                                <li><a href="javascript:;" class="chapter">Chapter three</a></li>
                            </ul>
                        </div>
                        <div id="tabAddChapter" class="col s12 tabChapters">
                            <form class="col s12">
                                <div class="row">
                                    <div class="input-field col s9">
                                        <input id="txtChapterName" type="text" class="validate">
                                        <label for="txtChapterName">Chapter</label>
                                    </div>
                                    <div class="input-field col s3">
                                        <button class="btn-floating btn-large waves-effect waves-light red" type="button" name="btnAddChapter">
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
                    <div class="row">
                        <div class="col s12">
                            <ul class="tabs margin-bottom-20">
                                <li class="tab col s3"><a class="active" href="#tabTopics">Topics</a></li>
                                <li class="tab col s3"><a href="#tabAddTopic">Add New</a></li>
                            </ul>
                        </div>
                        <div id="tabTopics" class="col s12 tabTopics">
                            <a class='dropdown-button btn' href='#' data-beloworigin="true" data-activates='ddTopics'>Select Topic</a>
                            <ul id='ddTopics' class='dropdown-content'>
                                <li><a href="javascript:;" class="topic">Topic one</a></li>
                                <li><a href="javascript:;" class="topic">Topic two</a></li>
                                <li><a href="javascript:;" class="topic">Topic three</a></li>
                                <li><a href="javascript:;" class="topic">Topic four</a></li>
                                <li><a href="javascript:;" class="topic">Topic five</a></li>
                                <li><a href="javascript:;" class="topic">Topic six</a></li>
                            </ul>
                        </div>
                        <div id="tabAddTopic" class="col s12 tabTopics">
                            <form class="col s12">
                                <div class="row">
                                    <div class="input-field col s9">
                                        <input id="txtTopicName" type="text" class="validate">
                                        <label for="txtTopicName">Topic</label>
                                    </div>
                                    <div class="input-field col s3">
                                        <button class="btn-floating btn-large waves-effect waves-light red" type="button" name="btnAddTopic">
                                            <i class="material-icons">add</i>
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <!-- -------------------
                    END SECTION: TOPICS -->

                    <hr class="separator"/>

                    <!-- BEGIN SECTION: NUMERICALS -->
                    <div class="row">
                        <div class="col s12">
                            <ul class="tabs margin-bottom-20">
                                <li class="tab col s3"><a class="active" href="#tabNumericals">Numericals</a></li>
                                <li class="tab col s3"><a href="#tabAddNumerical">Add New</a></li>
                            </ul>
                        </div>
                        <div id="tabNumericals" class="col s12 tabNumericals">
                            <a class='dropdown-button btn' href='#' data-beloworigin="true" data-activates='ddNumericals'>Select Numerical</a>
                            <ul id='ddNumericals' class='dropdown-content'>
                                <li><a href="javascript:;" class="numerical">Numerical one</a></li>
                                <li><a href="javascript:;" class="numerical">Numerical two</a></li>
                                <li><a href="javascript:;" class="numerical">Numerical three</a></li>
                                <li><a href="javascript:;" class="numerical">Numerical four</a></li>
                                <li><a href="javascript:;" class="numerical">Numerical five</a></li>
                                <li><a href="javascript:;" class="numerical">Numerical six</a></li>
                            </ul>
                        </div>
                        <div id="tabAddNumerical" class="col s12 tabNumericals">
                            <form class="col s12">
                                <div class="row">
                                    <div class="input-field col s3">
                                        <input id="txtNumIdentifier" type="text" class="validate">
                                        <label for="txtNumIdentifier">Identifier</label>
                                    </div>
                                    <div class="input-field col s3">
                                        <input id="txtNumStatement" type="text" class="validate">
                                        <label for="txtNumStatement">Statement</label>
                                    </div>
                                    <div class="input-field col s3">
                                        <input id="txtNumSolution" type="text" class="validate">
                                        <label for="txtNumSolution">Solution</label>
                                    </div>
                                    <div class="input-field col s3">
                                        <button class="btn-floating btn-large waves-effect waves-light red" type="button" name="btnAddNumerical">
                                            <i class="material-icons">add</i>
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <!-- -------------------
                    END SECTION: TOPICS -->

                    <hr class="separator"/>

                    <!-- BEGIN SECTION: FORMULA -->
                    <div class="row">
                        <form class="col s12">
                            <div class="row">
                                <div class="input-field col s9">
                                    <input id="txtFormulaName" type="text" class="validate">
                                    <label for="txtFormulaName">Formula</label>
                                </div>
                                <div class="input-field col s3">
                                    <button class="btn-floating btn-large waves-effect waves-light red" type="button" name="btnAddFormula">
                                        <i class="material-icons">add</i>
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                    <!-- -------------------
                    END SECTION: FORMULA -->
                </div>
            </div>
            <div class="col s9 right">
                <div class="container">
                    <h5>Parameters</h5>
                    <div class="row">
                        <div class="col s12">
                            <ul class="tabs margin-bottom-20">
                                <li class="tab col s3"><a class="active" href="#tabParams">Parameters</a></li>
                                <li class="tab col s3"><a href="#tabAddParam">Add New Parameter</a></li>
                            </ul>
                        </div>
                        <div id="tabParams" class="col s12 tabParams">
                            <a class='dropdown-button btn' href='#' data-beloworigin="true" data-activates='ddParams'>Select Parameter</a>
                            <ul id='ddParams' class='dropdown-content'>
                                <li><a href="javascript:;" class="param">Param one</a></li>
                                <li><a href="javascript:;" class="param">Param two</a></li>
                                <li><a href="javascript:;" class="param">Param three</a></li>
                            </ul>
                        </div>
                        <div id="tabAddParam" class="col s12 tabParams">
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
                                        <label for="txtParamValue">Value</label>
                                    </div>
                                    <div class="input-field col s6">
                                        <input id="txtParamDefaultValue" type="text" class="validate">
                                        <label for="txtParamDefaultValue">Default Value</label>
                                    </div>
                                </div>
                                <div class="row">
                                    <a class="waves-effect waves-light btn">Add Parameter</a>
                                </div>
                            </form>
                        </div>
                    </div>
                    <hr class="separator"/>
                </div>
                <div class="container">
                    <h5>Units</h5>
                    <div class="row">
                        <div class="col s12">
                            <ul class="tabs margin-bottom-20">
                                <li class="tab col s3"><a class="active" href="#tabUnits">Units</a></li>
                                <li class="tab col s3"><a href="#tabAddUnit">Add New Unit</a></li>
                            </ul>
                        </div>
                        <div id="tabUnits" class="col s12 tabRegion">
                            <a class='dropdown-button btn' href='#' data-beloworigin="true" data-activates='ddUnits'>Select Unit</a>
                            <ul id='ddUnits' class='dropdown-content'>
                                <li><a href="javascript:;" class="unit">Unit one</a></li>
                                <li><a href="javascript:;" class="unit">Unit two</a></li>
                                <li><a href="javascript:;" class="unit">Unit three</a></li>
                            </ul>
                        </div>
                        <div id="tabAddUnit" class="col s12 tabRegion">
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
                                        <label for="txtUnitMultiplier">Standard Multiplier</label>
                                    </div>
                                </div>
                                <div class="row">
                                    <a class="waves-effect waves-light btn">Add Unit</a>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <script type="text/javascript" src="js/jquery-2.1.1.min.js"></script>
        <script type="text/javascript" src="js/materialize.min.js"></script>
    </body>
</html>											