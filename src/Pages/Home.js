import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";

function Home() {
  const clothes = [
    {
      category: "men's clothing",
      description:
        "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
      id: 1,
      image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
      price: 109.95,
      rating: { rate: 3.9, count: 120 },
      title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    },
    {
      category: "men's clothing",
      description:
        "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
      id: 2,
      image:
        "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
      price: 22.3,
      rating: { rate: 4.1, count: 259 },
      title: "Mens Casual Premium Slim Fit T-Shirts ",
    },
    {
      category: "men's clothing",
      description:
        "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
      id: 3,
      image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
      price: 55.99,
      rating: { rate: 4.7, count: 500 },
      title: "Mens Cotton Jacket",
    },
    {
      category: "men's clothing",
      description:
        "The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.",
      id: 4,
      image: "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
      price: 15.99,
      rating: { rate: 2.1, count: 430 },
      title: "Mens Casual Slim Fit",
    },
    {
      category: "women's clothing",
      description:
        "Note:The Jackets is US standard size, Please choose size as your usual wear Material: 100% Polyester; Detachable Liner Fabric: Warm Fleece. Detachable Functional Liner: Skin Friendly, Lightweigt and Warm.Stand Collar Liner jacket, keep you warm in cold weather. Zippered Pockets: 2 Zippered Hand Pockets, 2 Zippered Pockets on Chest (enough to keep cards or keys)and 1 Hidden Pocket Inside.Zippered Hand Pockets and Hidden Pocket keep your things secure. Humanized Design: Adjustable and Detachable Hood and Adjustable cuff to prevent the wind and water,for a comfortable fit. 3 in 1 Detachable Design provide more convenience, you can separate the coat and inner as needed, or wear it together. It is suitable for different season and help you adapt to different climates",
      id: 15,
      image: "https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg",
      price: 56.99,
      rating: { rate: 2.6, count: 235 },
      title: "BIYLACLESEN Women's 3-in-1 Snowboard",
    },
    {
      category: "women's clothing",
      description:
        "100% POLYURETHANE(shell) 100% POLYESTER(lining) 75% POLYESTER 25% COTTON (SWEATER), Faux leather material for style and comfort / 2 pockets of front, 2-For-One Hooded denim style faux leather jacket, Button detail on waist / Detail stitching at sides, HAND WASH ONLY / DO NOT BLEACH / LINE DRY / DO NOT IRON",
      id: 16,
      image: "https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_.jpg",
      price: 29.95,
      rating: { rate: 2.9, count: 340 },
      title:
        "Lock and Love Women's Removable Hooded Faux Leather Moto Biker Jacket",
    },
    {
      category: "women's clothing",
      description:
        "Lightweight perfet for trip or casual wear---Long sleeve with hooded, adjustable drawstring waist design. Button and zipper front closure raincoat, fully stripes Lined and The Raincoat has 2 side pockets are a good size to hold all kinds of things, it covers the hips, and the hood is generous but doesn't overdo it.Attached Cotton Lined Hood with Adjustable Drawstrings give it a real styled look.",
      id: 17,
      image: "https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg",
      price: 39.99,
      rating: { rate: 3.8, count: 679 },
      title: "Rain Jacket Women Windbreaker Striped",
    },
    {
      category: "women's clothing",
      description:
        "95% RAYON 5% SPANDEX, Made in USA or Imported, Do Not Bleach, Lightweight fabric with great stretch for comfort, Ribbed on sleeves and neckline / Double stitching on bottom hem",
      id: 18,
      image: "https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_.jpg",
      price: 9.85,
      rating: { rate: 4.7, count: 130 },
      title: "MBJ Women's Solid Short Sleeve Boat Neck V ",
    },
    {
      category: "women's clothing",
      description:
        "100% Polyester, Machine wash, 100% cationic polyester interlock, Machine Wash & Pre Shrunk for a Great Fit, Lightweight, roomy and highly breathable with moisture wicking fabric which helps to keep moisture away, Soft Lightweight Fabric with comfortable V-neck collar and a slimmer fit, delivers a sleek, more feminine silhouette and Added Comfort",
      id: 19,
      image: "https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg",
      price: 7.95,
      rating: { rate: 4.5, count: 146 },
      title: "Opna Women's Short Sleeve Moisture",
    },
    {
      category: "women's clothing",
      description:
        "95%Cotton,5%Spandex, Features: Casual, Short Sleeve, Letter Print,V-Neck,Fashion Tees, The fabric is soft and has some stretch., Occasion: Casual/Office/Beach/School/Home/Street. Season: Spring,Summer,Autumn,Winter.",
      id: 20,
      image: "https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg",
      price: 12.99,
      rating: { rate: 3.6, count: 145 },
      title: "DANVOUY Womens T Shirt Casual Cotton Short",
    },
  ];

  const [filterClothes, setFilterClothes] = useState(clothes);

  function search(e) {
    const filter = clothes.filter((item) => {
      return item.title.toLowerCase().includes(e.target.value.toLowerCase());
    });
    setFilterClothes(filter);
  }
  return (
    <Container>
      <div
        style={{
          textAlign: "center",
        }}
      >
        <h1>Home</h1>
        <input type="text" placeholder="Search" onChange={search} />
      </div>
      <div className="clothes">
        {filterClothes.map((item) => (
          <div className="clothesCard">
            <Link to={`/clothes/${item.id}`} state={item}>
              <img width="200" height="200" src={item.image} />
              <h2 className="home__text">{item.title}</h2>
              <h5 className="home__text">{item.category}</h5>
              <h5 className="home__text">
                {item.description.substr(0, 120)}...
              </h5>
              <h5 className="home__text">{item.id}</h5>
              <h5 className="home__text">{item.price}</h5>
              <h5 className="home__text">{item.rating.rate}</h5>
              <h5 className="home__text">{item.rating.count}</h5>
            </Link>
          </div>
        ))}
      </div>
    </Container>
  );
}

export default Home;
