
function show_amatriculados() {
    
    let alumnos_matriculados = [
                                    {
                                        "rut" : "1-9",
                                        "nombre" : "Pedro",
                                        "apellido" : "Pérez",
                                        "cod_curso" : "AE600",
                                        "descripcion" : "Algoritmos y Estructuras de datos" 
                                    },
                                    {
                                        "rut" : "2-7",
                                        "nombre" : "Juan",
                                        "apellido" : "Jara",
                                        "cod_curso" : "BD253",
                                        "descripcion" : "Bases de Datos" 
                                    },
                                    {
                                        "rut" : "2-7",
                                        "nombre" : "Juan",
                                        "apellido" : "Jara",
                                        "cod_curso" : "AE600",
                                        "descripcion" : "Algoritmos y Estructuras de datos" 
                                    },
                                    {
                                        "rut" : "3-5",
                                        "nombre" : "Diego",
                                        "apellido" : "Diaz",
                                        "cod_curso" : "BD253",
                                        "descripcion" : "Bases de Datos" 
                                    },
                                    {
                                        "rut" : "4-4",
                                        "nombre" : "Maria",
                                        "apellido" : "Martinez",
                                        "cod_curso" : "BD253",
                                        "descripcion" : "Bases de Datos" 
                                    },
                                ]
    console.log("ALUMNOS MATRICULADOS")
    for (let i=0; i<alumnos_matriculados.length;i++){
        console.log("Rut: " + alumnos_matriculados[i].rut + 
                    ". Nombre: "+alumnos_matriculados[i].nombre +
                    ". Apellido: "+alumnos_matriculados[i].apellido +                
                    ". Codigo de curso: "+alumnos_matriculados[i].cod_curso +                
                    ". Descripción: "+alumnos_matriculados[i].descripcion
                    )
    }
}

function show_alumnos () {
    let alumnos = [
                        {
                            "rut" : "1-9",
                            "nombre" : "Pedro",
                            "apellido" : "Pérez",
                        },
                        {
                            "rut" : "2-7",
                            "nombre" : "Juan",
                            "apellido" : "Jara",
                        },
                        {
                            "rut" : "3-5",
                            "nombre" : "Diego",
                            "apellido" : "Diaz",
                        },
                        {
                            "rut" : "4-4",
                            "nombre" : "Maria",
                            "apellido" : "Martinez",
                        },
                    ]
    console.log("ALUMNOS")
    for (let i=0; i<alumnos.length;i++){
        console.log("Rut: " + alumnos[i].rut + 
                    ". Nombre: "+alumnos[i].nombre +
                    ". Apellido: "+alumnos[i].apellido                   
                    )
    }
}

function show_cursos () {
    let cursos = [
                    {
                        "cod_curso" :"AE600",
                        "descripcion" : "Algoritmos y Estructuras de datos"
                    },
                    {
                        "cod_curso" :"BD253",
                        "descripcion" : "Bases de Datos"
                    }
                ]   
    console.log("CURSOS")
    for (let i=0; i<cursos.length;i++){
        console.log("Codigo de curso: " + cursos[i].cod_curso + ". Nombre de curso: "+cursos[i].descripcion)
    }
}

function show_matriculas () {
    let matriculas = [
                        {
                            "rut" : "1-9",
                            "cod_curso" : "AE600"
                        },
                        {
                            "rut" : "2-7",
                            "cod_curso" : "BD253"
                        },
                        {
                            "rut" : "2-7",
                            "cod_curso" : "AE600"
                        },
                        {
                            "rut" : "3-5",
                            "cod_curso" : "BD253"
                        },
                        {
                            "rut" : "4-4",
                            "cod_curso" : "BD253"
                        },
                    ]
    console.log("MATRICULAS")
    for (let i=0; i<matriculas.length;i++){
        console.log("Rut: " + matriculas[i].rut +               
                    ". Codigo de curso: "+matriculas[i].cod_curso
        )
    }
}

