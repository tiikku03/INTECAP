function Mostrar(){
const Motocicletas = [
    {
    },
    {
       
    },
    {
     
    },
    {
       
    },
    {
    },
    {
       
    },
];

 let codigoHTML = proveedores.map((proveedor) => {
            return `
                <tr>
                    <td>${proveedor.nombreEmpresa}</td>
                    <td>${proveedor.logo}</td>
                    <td>${proveedor.Descripcion}</td>
                    <td>${proveedor.Cantidad}</td>
                </tr>
            `;
        }).join('');
        document.getElementById('lista-de-motos').innerHTML = codigoHTML;

/* let suma = proveedores.reduce((acumulador, proveedor) =>{
    return acumulador + proveedor.Cantidad;
}, 0) */
}