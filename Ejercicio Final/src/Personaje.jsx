function Personaje({ nombre, profesion, premios, descubrimiento }) {
  return (
    <div className="personaje-card">
      <h2>{nombre}</h2>
      <p><strong>Profesión:</strong> {profesion}</p>
      <p><strong>Premios:</strong> {premios.length}</p>
      <ul>
        {premios.map((premio, i) => (
          <li key={i}>{premio}</li>
        ))}
      </ul>
      <p><strong>Descubrimiento:</strong> {descubrimiento}</p>
    </div>
  );
}

export default Personaje;
