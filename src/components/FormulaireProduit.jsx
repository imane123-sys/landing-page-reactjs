import React from "react";
import "../css/FormulaireProduit.css";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";

const schema = yup.object({
  nom: yup.string().required("Le nom est obligatoire"),

  price: yup
    .number()
    .typeError("Le prix doit être un nombre")
    .positive("Le prix doit être supérieur à 0")
    .required("Le prix est obligatoire"),

  category: yup.string().required("La catégorie est obligatoire"),

  img: yup
    .mixed()
    .test(
      "required",
      "L'image est obligatoire",
      (value) => value && value.length > 0,
    )
    .test(
      "fileType",
      "Le fichier doit être une image (jpg, jpeg, png, webp)",
      (value) =>
        !value ||
        value.length === 0 ||
        ["image/jpeg", "image/jpg", "image/png", "image/webp"].includes(
          value[0].type,
        ),
    ),
});

export default function FormulaireProduit({
  displayedProducts,
  setDisplayedProducts,
}) {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const image = watch("img");

  const onSubmit = (data) => {
    const nouveauProduit = {
      id: displayedProducts.length + 1,
      nom: data.nom,
      price: Number(data.price),
      category: data.category,
      img: URL.createObjectURL(data.img[0]),
    };

    setDisplayedProducts([...displayedProducts, nouveauProduit]);

    reset();
    navigate("/");
  };

  return (
    <section className="product_section">
      <div className="product_container">
        <h1 className="product_title">Ajouter un produit</h1>
        <p className="product_subtitle">
          Remplissez les informations du produit.
        </p>
        <form className="product_form" onSubmit={handleSubmit(onSubmit)}>
          <div className="form_group">
            <label>Nom</label>

            <input
              type="text"
              placeholder="Nom du produit"
              {...register("nom")}
            />

            {errors.nom && (
              <p className="error" style={{ color: "red", fontSize: "12px" }}>
                {errors.nom.message}
              </p>
            )}
          </div>

          <div className="form_group">
            <label>Prix</label>

            <input
              type="number"
              placeholder="Prix du produit"
              {...register("price")}
            />

            {errors.price && (
              <p className="error" style={{ color: "red", fontSize: "12px" }}>
                {errors.price.message}
              </p>
            )}
          </div>

          <div className="form_group">
            <label>Catégorie</label>

            <input
              type="text"
              placeholder="Catégorie"
              {...register("category")}
            />

            {errors.category && (
              <p className="error" style={{ color: "red", fontSize: "12px" }}>
                {errors.category.message}
              </p>
            )}
          </div>

          <div className="form_group">
            <label>Image</label>

            <input type="file" accept="image/*" {...register("img")} />

            {errors.img && (
              <p className="error" style={{ color: "red", fontSize: "12px" }}>
                {errors.img.message}
              </p>
            )}
          </div>

          {image?.[0] && (
            <div className="image_preview">
              <img
                src={URL.createObjectURL(image[0])}
                alt="Aperçu"
                style={{
                  width: "120px",
                  marginTop: "10px",
                }}
              />
            </div>
          )}

          <button type="submit" className="btn-submit">
            Ajouter
          </button>
        </form>
      </div>
    </section>
  );
}
