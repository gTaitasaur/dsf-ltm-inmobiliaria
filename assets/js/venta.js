const propiedades_venta = [
    {
      nombre: 'Apartamento de lujo en zona exclusiva',
      src: '../imgs/prop1.jpg',
      descripcion: 'Este apartamento de lujo está ubicado en una exclusiva zona residencial',
      ubicacion: '123 Luxury Lane, Prestige Suburb, CA 45678',
      habitaciones: '4 Habitaciones',
      banios: '5 Baños',
      costo: '$5000',
      smoke: false,
      pets: false
    },
    {
      nombre: 'Apartamento acogedor en la montaña',
      src: '../imgs/prop2.jpg',
      descripcion: 'Este apartamento acogedor está situado en lo alto de una montaña con una impresionando vista',
      ubicacion: '789 Mountain Road, Summit Peaks, CA 23456',
      habitaciones: '2 Habitaciones',
      banios: '1 Baños',
      costo: '$1.200',
      smoke: true,
      pets: false
    },
    {
      nombre: 'Penthouse de lujo con terraza panorámica',
      src: '../imgs/prop3.jpg',
      descripcion: 'Este penthouse de lujo ofrece una terraza panorámica con vistas espectaculares',
      ubicacion: '587 Skyline Avenue, Skyview City, CA 56789',
      habitaciones: '3 Habitaciones',
      banios: '3 Baños',
      costo: '$4.500',
      smoke: false,
      pets: true
    }
  ];

  function generarTarjetasVenta() {
    const contenedor = document.getElementById('card-container-venta');
    propiedades_venta.forEach(propiedad => {
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

generarTarjetasVenta();