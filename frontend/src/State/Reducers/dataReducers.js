import { ADD_ITEM, DELETE_ITEM ,BANNER_DATA} from "../Action/actionTypes";

 const initialState = {
  numOfItems: 0,
};

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM:
      return {
        ...state,
        numOfItems: state.numOfItems + 1,
      };

    case DELETE_ITEM:
      return {
        ...state,
        numOfItems: state.numOfItems - 1,
      };
      case BANNER_DATA:
      return {
        ...state,
        BannerData:[
        {
          title: "Roco Wireless Headphone",
          imageSrc: "assets/images/product/product-38.png",
          price: "$49.00",
          authors: [
            "assets/images/others/author1.png",
            "assets/images/others/author2.png",
            "assets/images/others/author3.png",
            "assets/images/others/author4.png",
          ],
        },
        {
          title: "Smart Digital Watch",
          imageSrc: "assets/images/product/product-39.png",
          price: "$49.00",
          authors: [
            "assets/images/others/author1.png",
            "assets/images/others/author2.png",
            "assets/images/others/author3.png",
            "assets/images/others/author4.png",
          ],
        },
        {
          title: "Roco Wireless Headphone",
          imageSrc: "assets/images/product/product-38.png",
          price: "$49.00",
          authors: [
            "assets/images/others/author1.png",
            "assets/images/others/author2.png",
            "assets/images/others/author3.png",
            "assets/images/others/author4.png",
          ],
        },
        {
          title: "Smart Digital Watch",
          imageSrc: "assets/images/product/product-39.png",
          price: "$49.00",
          authors: [
            "assets/images/others/author1.png",
            "assets/images/others/author2.png",
            "assets/images/others/author3.png",
            "assets/images/others/author4.png",
          ],
        },
      ],
      };
    default:
      return state;
  }
};