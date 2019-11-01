import PopupSort from "./popupSort/popupSort";
import PopupExit from "./popupExit/popupExit";
import React from "react";

export const getPopupContent = (type, setContent, setSoundSleeperMode) => {
    result = null;
    switch (type) {
        case 'Sort': {
            result = <PopupSort {...{setContent, setSoundSleeperMode}}/>
            break;
        };
        case 'Exit': {
            result = <PopupExit {...{setContent}}/>
            break;
        };
    }
    return result;
}