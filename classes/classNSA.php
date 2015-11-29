<?php

class NSA {
    /*
     * NSA : CHAPTERS
     */

    public static function addChapter($FIELDS, $VALUES) {
        return insertRecord("chapters", $FIELDS, $VALUES);
    }

    public static function updateChapter($FIELDS, $VALUES, $ID) {
        return updateRecord("chapters", $FIELDS, $VALUES, " WHERE id={$ID} ");
    }

    public static function deleteChapter($ID) {
        return deleteRecord("chapters", "id", "$ID");
    }

    public static function getChapters() {
        $chapters = getColumn("chapters", "*", "ORDER BY name");
        if (!empty($chapters)) {
            return $chapters;
        } else {
            return 0;
        }
    }

    /*
     * NSA : TOPICS
     */

    public static function addTopic($FIELDS, $VALUES) {
        return insertRecord("topics", $FIELDS, $VALUES);
    }

    public static function updateTopic($FIELDS, $VALUES, $ID) {
        return updateRecord("topics", $FIELDS, $VALUES, " WHERE id={$ID} ");
    }

    public static function deleteTopic($ID) {
        return deleteRecord("topics", "id", "$ID");
    }

    public static function getTopics() {
        $topics = getColumn("topics", "*", "ORDER BY name");
        if (!empty($topics)) {
            return $topics;
        } else {
            return 0;
        }
    }

    public static function getTopicsOfChapter($chapter_id) {
        $topics = getColumn("topics", "*", "WHERE chapter_id={$chapter_id} ORDER BY name");
        if (!empty($topics)) {
            return $topics;
        } else {
            return 0;
        }
    }

    /*
     * NSA : NUMERICALS
     */

    public static function addNumerical($FIELDS, $VALUES) {
        return insertRecord("numericals", $FIELDS, $VALUES);
    }

    public static function updateNumerical($FIELDS, $VALUES, $ID) {
        return updateRecord("numericals", $FIELDS, $VALUES, " WHERE id={$ID} ");
    }

    public static function deleteNumerical($ID) {
        return deleteRecord("numericals", "id", "$ID");
    }

    public static function getNumericals() {
        $topics = getColumn("numericals", "*", "ORDER BY name");
        if (!empty($topics)) {
            return $topics;
        } else {
            return 0;
        }
    }

    public static function getTopicEnv($topic_id) {
        // SELECT num.id, num.identifier, num.statement, num.solution, f.identifier, f.string
        // FROM numericals AS num 
        // LEFT JOIN formulas AS f 
        // ON num.id = f.numerical_id 
        // ORDER BY num.identifier 
        $topicEnv = getColumn("numericals AS num LEFT JOIN formulas AS f ON num.id = f.numerical_id", "num.id, num.identifier AS num_id, num.statement, num.solution, f.identifier AS formula_id, f.string", "WHERE topic_id={$topic_id} ORDER BY f.identifier");
        if (!empty($topicEnv)) {
            return $topicEnv;
        } else {
            return 0;
        }
    }

    public static function updateStatement($FIELDS, $VALUES, $num_id) {
        return updateRecord("numericals", $FIELDS, $VALUES, " WHERE id={$num_id} ");
    }

    /*
     * FORMULA
     */

    public static function addFormulaString($FIELDS, $VALUES) {
        return insertRecord("formulas", $FIELDS, $VALUES);
    }

    public static function updateFormulaString($FIELDS, $VALUES, $ID) {
        return updateRecord("formulas", $FIELDS, $VALUES, " WHERE id={$ID} ");
    }

    public static function checkFormulaExists($numerical_id) {
        $formula = getColumn("formulas", "id", " WHERE numerical_id={$numerical_id} ");
        if (!empty($formula)) {
            if (isset($formula[0]['id'])) {
                return $formula[0]['id'];
            } else {
                return 0;
            }
        } else {
            return 0;
        }
    }

    /*
     * PARAMETERS
     */

    public static function addParam($FIELDS, $VALUES) {
        return insertRecord("parameters", $FIELDS, $VALUES);
    }

    public static function updateParam($FIELDS, $VALUES, $ID) {
        return updateRecord("parameters", $FIELDS, $VALUES, " WHERE id={$ID} ");
    }

    public static function deleteParam($ID) {
        return deleteRecord("parameters", "id", "$ID");
    }

    public static function getParams($chapter_id) {
        $params = getColumn("parameters", "*", "WHERE chapter_id={$chapter_id} ORDER BY name");
        if (!empty($params)) {
            return $params;
        } else {
            return 0;
        }
    }

    /*
     * UNITS
     */

    public static function addUnit($FIELDS, $VALUES) {
        return insertRecord("units", $FIELDS, $VALUES);
    }

    public static function updateUnit($FIELDS, $VALUES, $ID) {
        return updateRecord("units", $FIELDS, $VALUES, " WHERE id={$ID} ");
    }

    public static function deleteUnit($ID) {
        return deleteRecord("units", "id", "$ID");
    }

    public static function getUnits($chapter_id) {
        $units = getColumn("units", "*", "WHERE chapter_id={$chapter_id} ORDER BY name");
        if (!empty($units)) {
            return $units;
        } else {
            return 0;
        }
    }

    /*
     * FOOD ITEM
     */
//    public static function getItemCode($itemId) {
//        $itemCode = getColumn("food_item", "code", " WHERE id={$itemId} ");
//        if (!empty($itemCode)) {
//            if (isset($itemCode[0]['code'])) {
//                return $itemCode[0]['code'];
//            } else {
//                return 0;
//            }
//        } else {
//            return 0;
//        }
//    }
}

?>