import React, { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import ProductCard from "../components/ProductCard";
import { Col, Container, Row } from "react-bootstrap";
import { productAction } from "../redux/actions/productAction";
import { useDispatch, useSelector } from "react-redux";

const ProductAll = () => {
  const [query, setQuery] = useSearchParams();
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.product.productlist);
  const getProducts = async () => {
    const searchQuery = query.get("q") || "";
    dispatch(productAction.getProduct(searchQuery));
  };
  useEffect(() => {
    getProducts();
  }, [query]);
  return (
    <Container>
      <Row>
        {productList.map((menu, index) => (
          <Col lg={3}>
            <ProductCard item={menu} />
          </Col>
          // <Col lg={3}>
          //   <ProductCard />
          // </Col>
          // <Col lg={3}>
          //   <ProductCard />
          // </Col>
          // <Col lg={3}>
          //   <ProductCard />
          // </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ProductAll;
