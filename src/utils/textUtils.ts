import { BOOK_CARD_DESCRIPTION_MAX_LEN } from "./constants";

function handleCardDescription(description :string) : string{
    if(description.length > BOOK_CARD_DESCRIPTION_MAX_LEN){
        return description.substring(0, BOOK_CARD_DESCRIPTION_MAX_LEN -3) + "...";
    }

    return description;
}

export {handleCardDescription};