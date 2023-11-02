import { useState } from 'react';
import Card from './Card';

const Formulario = () => {
  
  const [nombre, setNombre] = useState("");
  const [artista, setArtista] = useState("");
  const [error, setError] = useState("");
  const [card, setCard] = useState(false);

  
  const onChangeNombre = (e) => setNombre(e.target.value);
  const onChangeArtista = (e) => setArtista(e.target.value);

  
  const validarInputNombre = () => {
    return nombre.trim().length >= 3;
  };
  const validarInputArtista = () => {
    return artista.trim().length >= 6;
  };

  const handleOnChange = (e) => {
    e.preventDefault();

   
    const validadorNombre = validarInputNombre();
    const validadorArtista = validarInputArtista();

    
    if (validadorNombre && validadorArtista) {
      setCard(true);
      setError("Excelente, Formulario completo");
    } else {
      setCard(false);
      setError("Revisa de nuevo. Formulario incompleto");
      console.log(`${color}, es el artista favorito de ${nombre}`);
    }
  };

  return (
    <>
      <form onSubmit={handleOnChange}>
        <input
          type="text"
          placeholder=" Ingresa tu nombre"
          id="nombre"
          value={nombre}
          onChange={onChangeNombre}
        />
        <input
          type="text"
          placeholder=" Ingresa tu artista favorito"
          id="artista"
          value={artista}
          onChange={onChangeArtista}
        />
        <input type="submit" value="Enviar" />
        {!card ? null : <Card nombre={nombre} artista={artista} />}
        {error ? <p>{error}</p> : null}
      </form>
    </>
  );
};

export default Formulario;