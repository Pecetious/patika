import { createSlice } from "@reduxjs/toolkit";
const presetItems = [
  {
    id: 1,
    name: "Hamburger",
    img: "https://images.unsplash.com/photo-1548946522-4a313e8972a4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmlnJTIwbWFjfGVufDB8fDB8fHww",
    price: 2,
    amount: 0,
  },
  {
    id: 2,
    name: "Flip Flops",
    img: "https://media.istockphoto.com/id/1386273543/tr/vekt%C3%B6r/slipper-icon-vector-design.jpg?s=612x612&w=0&k=20&c=xMrPcaVQ5bDNefOHi-zTBkW2CpwVTT_kbk_pR1WWszM=",
    price: 3,
    amount: 0,
  },
  {
    id: 3,
    name: "Coca-Cola Pack",
    img: "https://m.media-amazon.com/images/I/41+ugoGNzFL._AC_.jpg",
    price: 5,
    amount: 0,
  },
  {
    id: 4,
    name: "Movie Ticket",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRD9WPyP2JH9XedWZ8FDHIkV96vdCxGgb4Eg&s",
    price: 12,
    amount: 0,
  },
  {
    id: 5,
    name: "Book",
    img: "https://smartmobilestudio.com/wp-content/uploads/2012/06/leather-book-preview.png",
    price: 15,
    amount: 0,
  },
  {
    id: 6,
    name: "Lobster Dinner",
    img: "https://jameshooklobster.com/wp-content/uploads/2019/06/lobster1andquarter22_LRG.fw_.png",
    price: 45,
    amount: 0,
  },
  {
    id: 7,
    name: "Video Game",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSf0thcFHetnpxuuqXYAbLAzhbIkRlTCGstJg&s",
    price: 60,
    amount: 0,
  },
  {
    id: 8,
    name: "Amazon Echo",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIlrGlrWKJ-XNoPaLiEyrGH28r7fA-QtPz_g&s",
    price: 99,
    amount: 0,
  },
  {
    id: 9,
    name: "Year of Netflix",
    img: "https://store-images.s-microsoft.com/image/apps.56161.9007199266246365.1d5a6a53-3c49-4f80-95d7-78d76b0e05d0.a3e87fea-e03e-4c0a-8f26-9ecef205fa7b",
    price: 100,
    amount: 0,
  },
  {
    id: 10,
    name: "Air Jordans",
    img: "https://static.nike.com/a/images/t_default/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/rru7jxwadwrxkhploqf1/AIR+JORDAN+1+MID+SE.png",
    price: 125,
    amount: 0,
  },
  {
    id: 11,
    name: "Airpods",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFNFpLYfK0GZi1DRhYSbkKfvjJOdOZ_jmVeA&s",
    price: 199,
    amount: 0,
  },
  {
    id: 12,
    name: "Gaming Console",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiP1dKs-1ezoezI3S_FIkjMx3lH2TtTyuLmQ&s",
    price: 299,
    amount: 0,
  },
  {
    id: 13,
    name: "Drone",
    img: "https://cdn.akakce.com/dji/dji-mavic-mini-2-z.jpg",
    price: 350,
    amount: 0,
  },
  {
    id: 14,
    name: "Smartphone",
    img: "https://www.trustedreviews.com/wp-content/uploads/sites/54/2023/08/Best-smartphone-2.jpg",
    price: 699,
    amount: 0,
  },
  {
    id: 15,
    name: "Bike",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0IwZiPGK3EJdGaM6wU-gsQGBeDAXZ_xaz7w&s",
    price: 800,
    amount: 0,
  },
  {
    id: 16,
    name: "Kitten",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgHW84SNByfnpe5DnRnI_8shHi3_VQKN2BFQ&s",
    price: 1500,
    amount: 0,
  },
  {
    id: 17,
    name: "Puppy",
    img: "https://www.pedigree.in/files/styles/webp/public/2023-09/Puppy-Nutrition-Image-list.png.webp?VersionId=apbK1AhaKBfwIDQpd3.NcdR9egh41zrq&itok=RC0yZp5l",
    price: 1500,
    amount: 0,
  },
  {
    id: 18,
    name: "Auto Rickshaw",
    img: "https://5.imimg.com/data5/SELLER/Default/2022/7/KO/SR/YU/110303668/bajaj-re-cng-auto-rickshaw.png",
    price: 2300,
    amount: 0,
  },
  {
    id: 19,
    name: "Horse",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQM2hmKOp2Wq2FNGUPy1wLH_h2Y-DdQGwxSkg&s",
    price: 2500,
    amount: 0,
  },
  {
    id: 20,
    name: "Acre of Farmland",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRC-8CoqGUUHyTn9QGo9NY5Uw4gxXNbOeBgsA&s",
    price: 3000,
    amount: 0,
  },
  {
    id: 21,
    name: "Designer Handbag",
    img: "https://hips.hearstapps.com/hmg-prod/images/prada-cleo-bag-1660056287.jpg",
    price: 5500,
    amount: 0,
  },
  {
    id: 22,
    name: "Hot Tub",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDj7n5NFUJEBlwxID8Kcy7rz1un7-Hy6bR_Q&s",
    price: 6000,
    amount: 0,
  },
  {
    id: 23,
    name: "Luxury Wine",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSh80QrFl-S6xzBXQCnlgM572pt8guXMYk6xw&s",
    price: 10000,
    amount: 0,
  },
  {
    id: 24,
    name: "Jet Ski",
    img: "https://www.kawasaki.com.tr/Photos/Jetski/ultra310lxs.png",
    price: 12000,
    amount: 0,
  },
  {
    id: 25,
    name: "Rolex",
    img: "https://ugursaat.com.tr/ugursaat/rolex/img/model-detail/product/upright_watches_assets/desktop/m126234-0051_drp-upright-bba-with-shadow.png",
    price: 15000,
    amount: 0,
  },
  {
    id: 26,
    name: "Ford F-150",
    img: "https://cdn.wheel-size.com/thumbs/1a/69/1a6940eb4bc6d9f1664b4d7c7cc8e7ee.jpg",
    price: 30000,
    amount: 0,
  },
  {
    id: 27,
    name: "Tesla",
    img: "https://service.tesla.com/docs/Public/diy/images/GUID-B5641257-9E85-404B-9667-4DA5FDF6D2E7-online-en-US.png",
    price: 75000,
    amount: 0,
  },
  {
    id: 28,
    name: "Monster Truck",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3_CTqPPguG2eaC8LdPDAjMtUfpeUx9aHcCQ&s",
    price: 150000,
    amount: 0,
  },
  {
    id: 29,
    name: "Ferrari",
    img: "https://cdn.motor1.com/images/mgl/OkpwL/s3/ferrari-296-gtb.jpg",
    price: 250000,
    amount: 0,
  },
  {
    id: 30,
    name: "Single Family Home",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwBGmzwyiYUTBWDBssZ5AZghkwxJxPaopQpg&s",
    price: 300000,
    amount: 0,
  },
  {
    id: 31,
    name: "Gold Bar",
    img: "https://m.media-amazon.com/images/I/71QOeDaoqqL._AC_UF894,1000_QL80_.jpg",
    price: 700000,
    amount: 0,
  },
  {
    id: 32,
    name: "McDonalds Franchise",
    img: "https://m.media-amazon.com/images/I/71QOeDaoqqL._AC_UF894,1000_QL80_.jpg",
    price: 1500000,
    amount: 0,
  },
  {
    id: 33,
    name: "Superbowl Ad",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUyldjcAYp_RUw8oq1KYrG0DVYwTpDCYToMw&s",
    price: 5250000,
    amount: 0,
  },
  {
    id: 34,
    name: "Yacht",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoIF0yPLYafGq7du8Adqape2ojJiaFnqQdhQ&s",
    price: 7500000,
    amount: 0,
  },
  {
    id: 35,
    name: "M1 Abrams",
    img: "https://i0.wp.com/www.tdefenceagency.com/wp-content/uploads/2020/04/images-2020-04-09T142548.173.jpeg?fit=678%2C452&ssl=1",
    price: 8000000,
    amount: 0,
  },
  {
    id: 36,
    name: "Formula 1 Car",
    img: "https://robbreport.com/wp-content/uploads/2024/02/RR_2024_F1_Car_Roundup_Red_Bull_RB20.jpg?w=800",
    price: 15000000,
    amount: 0,
  },
  {
    id: 37,
    name: "Apache Helicopter",
    img: "https://img.militaryaerospace.com/files/base/ebm/mae/image/2021/06/apache_helicopter_23_June_2021.60d2a14d57134.png?auto=format,compress&fit=max&q=45&w=640&width=640",
    price: 31000000,
    amount: 0,
  },
  {
    id: 38,
    name: "Mansion",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiB3JaM2F3_8PNSqBFvxZwcCCYJhEn4hx2VA&s",
    price: 45000000,
    amount: 0,
  },
  {
    id: 39,
    name: "Make a Movie",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQoLQT8RB7_1_uuS0rjvhZ2cLYD6zwQt6ydw&s",
    price: 100000000,
    amount: 0,
  },
  {
    id: 40,
    name: "Boeing 747",
    img: "https://havahaber.com/wp-content/uploads/2024/06/efsane-boeing-ucagi-tarih-oluyor-1-7Pr7ja.tmp_-1024x576.webp",
    price: 148000000,
    amount: 0,
  },
  {
    id: 41,
    name: "Mona Lisa",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCLwZLDrQ8J5b6aC3vzJAWAjlUGLVs6AvWTw&s",
    price: 780000000,
    amount: 0,
  },
  {
    id: 42,
    name: "Skyscraper",
    img: "https://www.yankodesign.com/images/design_news/2021/06/auto-draft/green-skyscraper_ds_yanko_design-02.jpg",
    price: 850000000,
    amount: 0,
  },
  {
    id: 43,
    name: "Cruise Ship",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnsE3ysPUQEbh3JSoZsf9bP0eUh3o6714bMg&s",
    price: 930000000,
    amount: 0,
  },
  {
    id: 44,
    name: "NBA Team",
    img: "https://ng-sportingnews.com/s3/files/styles/crop_style_16_9_desktop/s3/2024-04/All-NBA%20040724.jpeg?h=920929c4&itok=PkpY95j2",
    price: 2120000000,
    amount: 0,
  },
];
export const itemsSlice = createSlice({
  name: "items",
  initialState: {
    itemDetails: presetItems,
  },
  reducers: {
    changeAmount: (state, action) => {
        const { id, amount } = action.payload;
        const item = state.itemDetails.find(item => item.id === id);
        if (item) {
          item.amount = amount;
          console.log(item.amount)
        }
      },
  },
});
export const { changeAmount } = itemsSlice.actions;

export default itemsSlice.reducer;
