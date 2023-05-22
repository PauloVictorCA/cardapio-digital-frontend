import "./Card.css";

interface CardProps {
  price: number;
  title: string;
  url_image: string;
}

export default function Card({ price, url_image, title }: CardProps) {
  console.log(url_image);
  return (
    <div className="card">
      <img src={url_image} />
      <h2>{title}</h2>
      <p>
        <b>Valor:</b>
        {price}
      </p>
    </div>
  );
}
