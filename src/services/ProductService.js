export class ProductService {
    static productos =
        [ 
            {
            "id": 1,
            "imagen": "https://sodimac.scene7.com/is/image/SodimacCL/8788634_00?wid=1500&hei=1500&qlt=70",
            "nombre": "Futón Clásico",
            "descripcion": "Futón de tela gris grafito con base metálica reforzada. Dimensiones 170 x 70 x 81 cm.",
            "precio": 300000,
            "cantidad": 1,
            "stock": 10,
            "categoria": "",
            "etiqueta":""
            },
            { 
            "id": 2,
            "imagen": "https://static.westwingnow.de/image/upload/seo/t_default.plp_seo/simple/42/5861/1432739/Lampara-de-noche-Crystal-Velvet.jpg",
            "nombre": "Lámpara mesa",
            "descripcion": "Lámpara metal negro mate. Dimensiones 45 x 20 x 20 cm.",
            "precio": 25000,
            "cantidad": 1,
            "stock": 10,
            "categoria": "",
            "etiqueta":""
            },
            {
            "id": 3,
            "imagen": "https://falabella.scene7.com/is/image/Falabella/gsc_115781314_1240753_1?wid=1500&hei=1500&qlt=70",
            "nombre": "Silla Velvet",
            "descripcion": "Silla tela aterciopelada gris grafito con base de madera. Dimensiones 100 x 60 x 70cm ",
            "precio": 100000,
            "cantidad": 1,
            "stock": 0,
            "categoria": "",
            "etiqueta":""
            },
            {
            "id": 4,
            "imagen": "https://www.paris.cl/dw/image/v2/BCHW_PRD/on/demandware.static/-/Sites-cencosud-master-catalog/default/dw1e24d0a5/images/imagenes-productos/730/271685-0440-001.jpg?sw=1480&sh=2000&sm=fit",
            "nombre": "Estante Victoria",
            "descripcion": "Estante madera teñida negro mate. Dimensiones 200 x 80 x 40 cm.",
            "precio": 420000,
            "cantidad": 1,
            "stock": 10,
            "categoria": "",
            "etiqueta":""
            },
            {
            "id": 5,
            "imagen": "https://sodimac.scene7.com/is/image/SodimacCL/669439X_01?wid=1500&hei=1500&qlt=70",
            "nombre": "Lámpara Albert",
            "descripcion": "Lámpara de pie con base metálida y pantalla semi rígida. Dimensiones 150 x 40 x 60cm.",
            "precio": 80000,
            "cantidad": 1,
            "stock": 10,
            "categoria": "",
            "etiqueta":""
            },
            {
            "id": 6,
            "imagen": "https://cdn.shopify.com/s/files/1/0583/1452/2794/products/sillade-barra-coral-verde2-casaviva.jpg?v=1648595347",
            "nombre": "Silla Coral",
            "descripcion": "Silla tela aterciopelada verde. Soporte madera color negro mate. Dimensiones 90 x 60 x 70cm.",
            "precio": 120000,
            "cantidad": 1,
            "stock": 10,
            "categoria": "",
            "etiqueta":""
            },
            {
            "id": 7,
            "imagen": "https://easycl.vtexassets.com/arquivos/ids/656512-1200-auto?width=1200&height=auto&aspect=true",
            "nombre": "Sofá Sofía",
            "descripcion": "Sofá de 3 cuerpos blanco invierno, Soporte madera color natiral. Dimensiones 170 x 70 x 81 cm.",
            "precio": 500000,
            "cantidad": 1,
            "stock": 10,
            "categoria": "",
            "etiqueta":""
            },
            {
            "id": 8,
            "imagen": "https://easycl.vtexassets.com/arquivos/ids/540934-1200-auto?width=1200&height=auto&aspect=true",
            "nombre": "Closet Dark Nordic",
            "descripcion": "Closet de dos puerta y dos cajones cierre suave. Melamina 18mm negro mate y alamo. Dimensiones 200 x 98 x 58 cm.",
            "precio": 380000,
            "cantidad": 1,
            "stock": 10,
            "categoria": "",
            "etiqueta":""
            },
            {
            "id": 9,
            "imagen": "https://cdn2.moises-showroom.com/61829-large_default/mesa-de-centro-thin-roble-negro-ethnicraft.jpg",
            "nombre": "Mesa Dark Thin",
            "descripcion": "Mesa comedor negro mate, superficie melamina 18mm y base metálica. Dimensiones 110 x 67 x 75 cm.",
            "precio": 200000,
            "cantidad": 1,
            "stock": 10,
            "categoria": "",
            "etiqueta":""
            },
            {
            "id": 10,
            "imagen": "https://sodimac.scene7.com/is/image/SodimacCL/3098427_01?wid=1500&hei=1500&qlt=70",
            "nombre": "Escritorio Dark Nordic",
            "descripcion": "Escritorio con dos cajones cierre suave. Superficie de madera tinte negro y base metálica. Dimensiones 110 x 60 x 75 cm.",
            "precio": 160000,
            "cantidad": 1,
            "stock": 10,
            "categoria": "",
            "etiqueta":""
            },
            {
            "id": 11,
            "imagen": "https://www.paris.cl/dw/image/v2/BCHW_PRD/on/demandware.static/-/Sites-cencosud-master-catalog/default/dw88784323/images/imagenes-productos/730/700842-0000-001.jpg?sw=320&sh=409&sm=fit",
            "nombre": "Escritorio Brown Mini",
            "descripcion": "Escritorio melamina 18mm color chocolate y base metal. Cajón cierre suave. Dimensiones 65 x 40 x 75 cm.",
            "precio": 110000,
            "cantidad": 1,
            "stock": 10,
            "categoria": "",
            "etiqueta":""
            },
            {
            "id": 12,
            "imagen": "https://cdnx.jumpseller.com/klikmuebles/image/33568081/silla-eames-negra-00120230222-31554-1yrz996.jpg?1680200161",
            "nombre": "Silla Dark Thin",
            "descripcion": "Silla estructura metálica negro mate. Asiento y respaldo madera tinte negro. Dimensiones 55 x 53 x 78 cm.",
            "precio": 100000,
            "cantidad": 1,
            "stock": 10,
            "categoria": "",
            "etiqueta":""
            }
        ]
    
    static ProductAll() {
        return this.productos;
    }
}