const Card = ({ nombre, artista }) => {
  return (
    <div>
      <h2>Hola {nombre},</h2>
      <p>{artista} es tu artista favorito.</p>
    </div>
  );
};

export default Card;
