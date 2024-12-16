import { propiedades_venta, propiedades_alquiler} from './propiedades.js'
console.log(propiedades_venta, propiedades_alquiler)

const verPropiedades = (propiedades, sectionID) => {
    const container = document.getElementById(sectionID)
    const propiedadesIndex = propiedades.slice(0, 3)
  

    for (const propiedad of propiedadesIndex){
      const divCard = document.createElement('div')
       divCard.className = 'col-md-4 mb-4'
      const cardHTML = `
              <div class="card">
                <img
                  src="${propiedad.src}"
                  class="card-img-top"
                  alt="${propiedad.nombre}"
                />
                <div class="card-body">
                  <h5 class="card-title">
                    ${propiedad.nombre}
                  </h5>
                  <p class="card-text">
                    ${propiedad.descripcion}
                  </p>
                  <p>
                    <i class="fas fa-map-marker-alt"></i> ${propiedad.ubicacion}
                  </p>
                  <p>
                    <i class="fas fa-bed"></i> ${propiedad.habitaciones} |
                    <i class="fas fa-bath"></i> ${propiedad.banos}
                  </p>
                  <p><i class="fas fa-dollar-sign"></i> ${propiedad.costo.toLocaleString('es-CL')}</p>
  
                  <p class="${propiedad.smoke ? 'text-success' : 'text-danger'}">
                    <i class="fas ${propiedad.smoke ? 'fa-smoking' : 'fa-smoking-ban'}"></i>
                    ${propiedad.smoke ? 'Permitido fumar' : 'No se permite fumar'}
                  </p>
                  <p class="${propiedad.pets ? 'text-success' : 'text-danger'}">
                    <i class="${propiedad.pets ? 'fa-solid fa-paw' : 'fa-solid fa-ban'}"></i>
                    ${propiedad.pets ? 'Mascotas permitidas' : 'No se permiten mascotas'}
                  </p>
                </div>
              </div>
      `
      divCard.innerHTML = cardHTML
      container.appendChild(divCard)
    } 
  }
  
  verPropiedades(propiedades_venta, 'propiedadesVenta')
  verPropiedades(propiedades_alquiler, 'propiedadesAlquiler')