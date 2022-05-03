//OBJETOS
let producto1={
    nombre:"Animal Crossing Nintendo Switch",
    precio:260000,
    estado:"Nuevo",
    foto:""
}

let producto2={
    nombre:"COLD WAR PS5",
    precio:283500,
    estado:"Nuevo",
    foto:""
}

let producto3={
    nombre:"Control Pro Switch",
    precio:336000,
    estado:"Nuevo",
    foto:""
}

let producto4={
    nombre:"DAYS GONE PS4",
    precio:140000,
    estado:"Nuevo",
    foto:""
}

let producto5={
    nombre:"DIADEMA KOTION G9000 AZUL",
    precio:105000,
    estado:"Nuevo",
    foto:""
}

let producto6={
    nombre:"ESTUCHE SWITCH LITE MARIO",
    precio:85000,
    estado:"Nuevo",
    foto:""
}

let producto7={
    nombre:"Estuches Nintendo Switch",
    precio:127000,
    estado:"Nuevo",
    foto:""
}

let producto8={
    nombre:"FIFA 21 PS4",
    precio:98000,
    estado:"Nuevo",
    foto:""
}

let producto9={
    nombre:"GHOST RECON BREAK POINT",
    precio:63000,
    estado:"Nuevo",
    foto:""
}

let producto10={
    nombre:"JOY-CON NINTENDO SWITCH",
    precio:357000,
    estado:"Nuevo",
    foto:""
}

let producto11={
    nombre:"JUST DANCE 2021 SWITCH",
    precio:500000,
    estado:"Nuevo",
    foto:""
}

let producto12={
    nombre:"Mario + Rabbids kingdom battle",
    precio:1700000,
    estado:"Nuevo",
    foto:""
}

let producto13={
    nombre:"MARIO 3D WORLD BOWSERS FURY",
    precio:220500,
    estado:"Nuevo",
    foto:""
}

let producto14={
    nombre:"Mario Kart Deluxe Nintendo Switch",
    precio:220000,
    estado:"Nuevo",
    foto:""
}

let producto15={
    nombre:"Mario Odyssey Switch",
    precio:220000,
    estado:"Nuevo",
    foto:""
}

let producto16={
    nombre:"Mario Tennis Acces",
    precio:22000,
    estado:"Nuevo",
    foto:""
}

let producto17={
    nombre:"Mario y Sonic Olympic Games",
    precio:220000,
    estado:"Nuevo",
    foto:""
}

let producto18={
    nombre:"NINTENDO SWITCH LITE",
    precio:945000,
    estado:"Nuevo",
    foto:""
}

let producto19={
    nombre:"NINTENDO SWITCH LITE + JUEGO",
    precio:1113000,
    estado:"Nuevo",
    foto:""
}

let producto20={
    nombre:"Nintendo Switch Neon Caja Roja Programado",
    precio:1680000,
    estado:"Nuevo",
    foto:""
}
//ARREGLO
let productos=Array(
    producto1,
    producto2,
    producto3,
    producto4,
    producto5,
    producto6,
    producto7,
    producto8,
    producto9,
    producto10,
    producto11,
    producto12,
    producto13,
    producto14,
    producto15
)

//RECORRO EL ARREGLO
productos.forEach(function(producto){
    console.log(producto.nombre)
})

