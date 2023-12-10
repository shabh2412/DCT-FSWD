import React, { useEffect, useState } from 'react';

const Products = () => {

  const [product_list, set_product_list] = useState([]);

  const api = `https://api.escuelajs.co/api/v1/products`;

  const fetch_and_set_data = async () => {
    try {
      const res = await fetch(api);
      const data = await (res?.json());
      // console.log(data);
      if (Array.isArray(data)) {
        set_product_list(data);
      }
      else {
        console.log(`invalid data type`);
      }
    } catch (error) {
      console.log(error);
      console.log([]);
    }
  };

  useEffect(() => {
    fetch_and_set_data();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    console.log(product_list);
  }, [product_list]);

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Products - {product_list?.length}</h1>
      <div style={{
        width: "80vw",
        height: "90vh",
        backgroundColor: "lightgray",
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        margin: "auto",
        overflow: "scroll"
      }}>
        {product_list?.map((item, index) =>
          <React.Fragment key={`${item?.id}-${index}-${item?.title}`} >
            <div style={{
              height: "400px",
              borderRadius: "16px",
              width: "250px",
              border: "1px solid gray",
              margin: "16px auto",
            }}>
              <div style={{
                height: "250px",
              }} >
                <img style={{
                  height: "100%",
                  width: "100%",
                  objectFit: "cover",
                  borderTopLeftRadius: "16px",
                  borderTopRightRadius: "16px",
                }} src={item?.images?.[0]} alt={`${item?.title}`} />
              </div>
              <div style={{ textAlign: "center" }}>
                <p>
                  {item?.title}
                </p>
                <p>₹{item?.price}</p>
                <button>Add to Cart</button>
              </div>
            </div>
          </React.Fragment>)
        }
      </div>
    </div>
  );
};

export default Products;