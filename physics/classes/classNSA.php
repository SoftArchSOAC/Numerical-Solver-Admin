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
     * FOOD ITEM
     */

//    public static function addFoodItem($FIELDS, $VALUES) {
//        return insertRecord("food_item", $FIELDS, $VALUES);
//    }
//    
//    public static function updateFoodItem($FIELDS, $VALUES, $ID) {
//        return updateRecord("food_item", $FIELDS, $VALUES, " WHERE id={$ID} ");
//    }
//
//    public static function deleteFoodItem($ID) {
//        return deleteRecord("food_item", "id", "$ID");
//    }
//
//    public static function getFoodItems() {
//        $foodItemsList = getColumn("food_item", "*", " ORDER BY cat_id");
//        if (!empty($foodItemsList)) {
//            return $foodItemsList;
//        } else {
//            return 0;
//        }
//    }
//
//    public static function getFoodItem($ID) {
//        $foodItem = getColumn("food_item", "*", " WHERE id={$ID} ");
//        if (!empty($foodItem)) {
//            return $foodItem[0];
//        } else {
//            return 0;
//        }
//    }
//    
//    public static function getFoodItemOrderDetails($ID) {
//        $foodItem = getColumn("food_item", "code, name", " WHERE id={$ID} ");
//        if (!empty($foodItem)) {
//            return $foodItem[0];
//        } else {
//            return 0;
//        }
//    }
//    
//    public static function getItemTemp($itemId) {
//        $foodItem = getColumn("food_item", "cat_id, price", " WHERE id={$itemId} ");
//        if (!empty($foodItem)) {
//            return $foodItem[0];
//        } else {
//            return 0;
//        }
//    }
//
//    public static function getItemPrice($itemId) {
//        $itemPrice = getColumn("food_item", "price", " WHERE id={$itemId} ");
//        if (!empty($itemPrice)) {
//            if (isset($itemPrice[0]['price'])) {
//                return $itemPrice[0]['price'];
//            } else {
//                return 0;
//            }
//        } else {
//            return 0;
//        }
//    }
//
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