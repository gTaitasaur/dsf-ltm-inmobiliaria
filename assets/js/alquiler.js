const propiedades_alquiler = [
    {
      nombre: 'Apartamento en el centro de la ciudad',
      src: '../imgs/prop4.jpg',
      descripcion: 'Este apartamento de 2 habitaciones está ubicado en el corazón de la ciudad, cerca de todo.',
      ubicacion: '123 Main Street, Anytown, CA 01234',
      habitaciones: '2 Habitaciones',
      banios: '2 Baños',
      costo: '$2.000',
      smoke: false,
      pets: true
    },
    {
      nombre: 'Apartamento luminoso con vista al mar',
      src: '../imgs/prop5.jpg',
      descripcion: 'Este hermoso apartamento ofrece una vista impresionante al mar',
      ubicacion: '456 Ocean Avenue, Seaside Town, CA 56789',
      habitaciones: '3 Habitaciones',
      banios: '3 Baños',
      costo: '$2.500',
      smoke: true,
      pets: true
    },
    {
      nombre: 'Condominio moderno en zona residencial',
      src: '../imgs/prop6.webp',
      descripcion: 'Este elegante condominio moderno está ubicado en una tranquila zona residencial',
      ubicacion: '123 Main Street, Anytown, CA 91234',
      habitaciones: '3 Habitaciones',
      banios: '3 Baños',
      costo: '$4.500',
      smoke: false,
      pets: true
    }
  ];

function generarTarjetasAlquiler() {
  const contenedor = document.getElementById('card-container-alquiler');
  propiedades_alquiler.forEach(propiedad => {
    const smokeText = propiedad.smoke ? 
    '<span style="color: lightgreen;">Se permite fumar</span>' : 
    '<span style="color: red;">No se permite fumar</span>';

    const petsText = propiedad.pets ? 
    '<span style="color: lightgreen;">Mascotas permitidas</span>' : 
    '<span style="color: red;">No se permiten mascotas</span>';

      const card = `
          <div class="card">
              <img src="${propiedad.src}" class="card-img-top" alt="${propiedad.nombre}">
              <div class="card-body">
                  <h5 class="card-title">${propiedad.nombre}</h5>
                  <p class="card-text">${propiedad.descripcion}</p>
                  <p class="card-text"><small class="text-body-secondary">Ubicación: ${propiedad.ubicacion}</small></p>
                  <p class="card-text">Habitaciones: ${propiedad.habitaciones}</p>
                  <p class="card-text">Baños: ${propiedad.banios}</p>
                  <p class="card-text">Costo: ${propiedad.costo}</p>
                  <p class="card-text">${smokeText}</p>
                  <p class="card-text">${petsText}</p>
              </div>
          </div>
      `;
      contenedor.innerHTML += card;
  });
}

generarTarjetasAlquiler();