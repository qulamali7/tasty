import React, { useContext, useEffect, useState } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Helmet } from "react-helmet-async";
import "./index.scss";
import { SearchContext } from "../../context/SearchContext";
const Add = () => {
  const [data, setData] = useState([]);
  const { search, handleSearch } = useContext(SearchContext);
  const [sortproperty, setSortproperty] = useState(null);
  async function Getfetch() {
    try {
      await fetch("http://localhost:3000/meals")
        .then((res) => res.json())
        .then((data) => setData(data));
    } catch (error) {
      console.log(error.message);
    }
  }
  useEffect(() => {
    Getfetch();
  }, []);
  async function handleSubmit(values) {
    await fetch("http://localhost:3000/meals", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    });
    await Getfetch();
  }
  async function deleteItem(id) {
    await fetch("http://localhost:3000/meals/" + id, { method: "DELETE" });
    await Getfetch();
  }
  function checkType(value) {
    if (typeof value === "string") {
      return value.toLocaleLowerCase();
    } else {
      return value;
    }
  }
  return (
    <>
      <Helmet>
        <title>Add</title>
      </Helmet>
      <section id="add">
        <div className="add_container">
          <div className="add_content">
            <div className="add_title">
              <p>OUR MENU</p>
              <h3>Add Meal</h3>
            </div>
            <div className="add_form">
              <Formik
                initialValues={{ img: "", name: "", price: "" }}
                validationSchema={Yup.object({
                  img: Yup.string().required("Required"),
                  name: Yup.string().required("Required"),
                  price: Yup.number().required("Required"),
                })}
                onSubmit={(values, { setSubmitting, resetForm }) => {
                  handleSubmit(values);
                  resetForm();
                  setSubmitting(false);
                }}
              >
                <Form>
                  <h3>
                    <label htmlFor="img">Img Url</label>
                  </h3>
                  <Field name="img" type="text" />
                  <ErrorMessage name="img" />

                  <h3>
                    <label htmlFor="name">Name</label>
                  </h3>
                  <Field name="name" type="text" />
                  <ErrorMessage name="name" />

                  <h3>
                    <label htmlFor="price">Price</label>
                  </h3>
                  <Field name="price" type="text" />
                  <ErrorMessage name="price" />

                  <button type="submit">Submit</button>
                </Form>
              </Formik>
            </div>
            <div className="sort_input">
              <input type="text" onChange={handleSearch} />
              <button onClick={() => setSortproperty(null)}>Deafult</button>
              <button
                onClick={() => setSortproperty({ property: "name", asc: true })}
              >
                A-Z
              </button>
              <button
                onClick={() =>
                  setSortproperty({ property: "name", asc: false })
                }
              >
                Z-A
              </button>
              <button
                onClick={() =>
                  setSortproperty({ property: "price", asc: true })
                }
              >
                Min-Max
              </button>
              <button
                onClick={() =>
                  setSortproperty({ property: "price", asc: false })
                }
              >
                Max-Min
              </button>
            </div>
            <table>
              <thead>
                <tr>
                  <th>Img</th>
                  <th>Name</th>
                  <th>Price</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                {data &&
                  data
                    .filter((x) =>
                      x.name.toLowerCase().includes(search.toLowerCase())
                    )
                    .sort((a, b) => {
                      if (sortproperty && sortproperty.asc) {
                        return checkType(a[sortproperty.property]) >
                          checkType(b[sortproperty.property])
                          ? 1
                          : checkType(b[sortproperty.property]) >
                            checkType(a[sortproperty.property])
                          ? -1
                          : 0;
                      } else if (sortproperty && sortproperty.asc === false) {
                        console.log(a[sortproperty.property]);
                        return checkType(a[sortproperty.property]) <
                          checkType(b[sortproperty.property])
                          ? 1
                          : checkType(b[sortproperty.property]) <
                            checkType(a[sortproperty.property])
                          ? -1
                          : 0;
                      } else {
                        return 0;
                      }
                    })
                    .map((x) => (
                      <tr>
                        <td className="table_img">
                          <img src={x.img} alt="" />
                        </td>
                        <td>{x.name}</td>
                        <td>{x.price}</td>
                        <td>
                          <i
                            class="fa-solid fa-trash"
                            onClick={() => deleteItem(x._id)}
                          ></i>
                        </td>
                      </tr>
                    ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
};

export default Add;
