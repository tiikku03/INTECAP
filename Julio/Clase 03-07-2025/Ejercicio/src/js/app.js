const proveedores = [
    {
        nombreEmpresa:"rhino",
        logo:"<img src=../Images/Rhino.png>",
        Descripcion: "Gorras, camisetas vaqueras, mochilas y accesorios promocionales",
        Cantidad:16000
    },
    {
        nombreEmpresa:"Wrangler",
        logo:"<img src=../Images/Wrangler.png>",
        Descripcion: " Jeans clásicos, camisas vaqueras, chamarras, gorras",
        Cantidad:5000
    },
    {
        nombreEmpresa:"Ariat",
        logo:"<img src=../Images/Ariat.png>",
        Descripcion: "	Botas vaqueras, camisas western técnicas, jeans resistentes",
        Cantidad:70000
    },
    {
        nombreEmpresa:"Stetson",
        logo:"<img src=../Images/Stetson.png>",
        Descripcion: "Sombreros premium (fieltro y palma), camisas de vestir, calzado vaquero",
        Cantidad:15000
    },
    {
        nombreEmpresa:"Cuadra",
        logo:"<img src=../Images/Cuadra.png>",
        Descripcion: "Botas de piel exótica, cinturones, carteras, chamarras",
        Cantidad:11000
    },
    {
        nombreEmpresa:"Corral",
        logo:"<img src=../Images/Corral.png>",
        Descripcion: "Sombreros de palma, gorras bordadas, camisas bordadas",
        Cantidad:40000
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
        document.getElementById('lista-proveedores').innerHTML = codigoHTML;

let suma = proveedores.reduce((acumulador, proveedor) =>{
    return acumulador + proveedor.Cantidad;
}, 0)
document.getElementById("Total").textContent = `Resumen De Pagos: ${suma}`;