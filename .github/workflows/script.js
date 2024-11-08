const startButton = document.getElementById('start-btn');
const nextButton = document.getElementById('next-btn');
const questionContainer = document.getElementById('question-container');
const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons');

let currentQuestionIndex = 0;
let shuffledQuestions;

startButton.addEventListener('click', startQuiz);
nextButton.addEventListener('click', () => {
    currentQuestionIndex++;
    setNextQuestion();
});

function startQuiz() {
    startButton.classList.add('hide');
    shuffledQuestions = questions.sort(() => Math.random() - 0.5);
    currentQuestionIndex = 0;
    questionContainer.classList.remove('hide');
    setNextQuestion();
}

function setNextQuestion() {
    resetState();
    showQuestion(shuffledQuestions[currentQuestionIndex]);
}

function showQuestion(question) {
    questionElement.innerText = question.question;
    question.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn');
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click', selectAnswer);
        answerButtonsElement.appendChild(button);
    });
}

function resetState() {
    nextButton.classList.add('hide');
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild);
    }
}

function selectAnswer(e) {
    const selectedButton = e.target;
    const correct = selectedButton.dataset.correct;
    setStatusClass(selectedButton, correct);
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct);
    });
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
        nextButton.classList.remove('hide');
    } else {
        startButton.innerText = 'Reiniciar';
        startButton.classList.remove('hide');
    }
}

function setStatusClass(element, correct) {
    clearStatusClass(element);
    if (correct) {
        element.classList.add('correct');
    } else {
        element.classList.add('wrong');
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct');
    element.classList.remove('wrong');
}

const questions = [
    {
        question: '¿Qué significa JRE?',
        answers: [
            { text: 'Java Remote Environment', correct: false },
            { text: 'Java Runtime Environment', correct: true },
            { text: 'Java Rendering Engine', correct: false },
            { text: 'Java Reporting Engine', correct: false }
        ]
    },
    {
        question: '¿Cuál es la característica principal de Java que lo hace multiplataforma?',
        answers: [
            { text: 'Ser interpretado por la MVJ o JRE', correct: true },
            { text: 'Ser un lenguaje de programación web', correct: false },
            { text: 'Tener sintaxis similar a C++', correct: false },
            { text: 'Ser gratuito', correct: false }
        ]
    },
    {
        question: '¿Cuáles son algunos tipos de programas Java?',
        answers: [
            { text: 'Aplicaciones de consola, aplicaciones de propósito general y applets', correct: true },
            { text: 'Solo aplicaciones web', correct: false },
            { text: 'Únicamente programas de escritorio', correct: false },
            { text: 'Solo aplicaciones móviles', correct: false }
        ]
    },
    {
        question: '¿Cuántos bytes ocupa un tipo de dato int en Java?',
        answers: [
            { text: '2 bytes', correct: false },
            { text: '8 bytes', correct: false },
            { text: '4 bytes', correct: true },
            { text: '1 byte', correct: false }
        ]
    },
    {
        question: '¿Cuáles son algunas características de Java?',
        answers: [
            { text: 'Complejo, cerrado, no distribuido', correct: false },
            { text: 'Sencillo, orientado a objetos, distribuido, seguro, neutro', correct: true },
            { text: 'Difícil de aprender, poco seguro', correct: false },
            { text: 'Solo para programación web', correct: false }
        ]
    },
    {
        question: '¿Qué tipos de operadores menciona la presentación?',
        answers: [
            { text: 'Solo operadores aritméticos', correct: false },
            { text: 'Aritméticos, lógicos/booleanos/relacionales, incremento/decremento, concatenación', correct: true },
            { text: 'Únicamente operadores de comparación', correct: false },
            { text: 'Operadores matemáticos avanzados', correct: false }
        ]
    },
    {
        question: '¿Qué ideas erróneas sobre Java se mencionan en la presentación?',
        answers: [
            { text: 'Java es una extensión de HTML, es igual a JavaScript', correct: false },
            { text: 'Java es inseguro, todos los programas se ejecutan en páginas web', correct: true },
            { text: 'Java solo sirve para programación móvil', correct: false },
            { text: 'Java es un sistema operativo', correct: false }
        ]
    },
    {
        question: '¿Cuál es el tipo de dato para representar números decimales con 8 bytes?',
        answers: [
            { text: 'float', correct: false },
            { text: 'short', correct: false },
            { text: 'double', correct: true },
            { text: 'long', correct: false }
        ]
    },

    {
            question: '¿Qué método de Scanner se utiliza para leer una línea completa de texto?',
            answers: [
                { text: 'nextLine()', correct: true },
                { text: 'nextInt()', correct: false },
                { text: 'nextDouble()', correct: false },
                { text: 'readLine()', correct: false }
            ]
        },
        {
            question: '¿Cuál es la sintaxis básica de una estructura condicional IF en Java?',
            answers: [
                { text: 'IF { CONDICION }', correct: false },
                { text: 'IF(CONDICION){ CODIGO A EJECUTAR SI LA CONDICION ES VERDADERA }', correct: true },
                { text: 'IF CONDICION THEN', correct: false },
                { text: 'IF = CONDICION', correct: false }
            ]
        },
        {
            question: '¿Qué método de JOptionPane se utiliza para mostrar un cuadro de diálogo de entrada?',
            answers: [
                { text: 'showMessageDialog()', correct: false },
                { text: 'showInputDialog()', correct: true },
                { text: 'showConfirmDialog()', correct: false },
                { text: 'showOptionDialog()', correct: false }
            ]
        },
        {
            question: '¿Cuál es la estructura básica de un bucle WHILE?',
            answers: [
                { text: 'WHILE { CONDICION }', correct: false },
                { text: 'WHILE(CONDICION){ LINEAS DE CODIGO }', correct: true },
                { text: 'WHILE = CONDICION', correct: false },
                { text: 'WHILE CONDICION DO', correct: false }
            ]
        },
        {
            question: '¿Cuál es la sintaxis de un bucle FOR?',
            answers: [
                { text: 'FOR { INICIO; CONDICION; INCREMENTO }', correct: false },
                { text: 'FOR ( SENTENCIAS_INICIO; EXPRESION; INCREMENTO ) { BLOQUE_SENTENCIAS }', correct: true },
                { text: 'FOR = INICIO TO FINAL', correct: false },
                { text: 'FOR EACH ELEMENTO', correct: false }
            ]
        },
        {
            question: '¿Cuál es la diferencia principal entre un bucle WHILE y un DO-WHILE?',
            answers: [
                { text: 'No hay diferencia', correct: false },
                { text: 'DO-WHILE ejecuta al menos una vez el código antes de verificar la condición', correct: true },
                { text: 'WHILE ejecuta más veces el código', correct: false },
                { text: 'DO-WHILE no permite condiciones', correct: false }
            ]
        },
        {
            question: '¿Qué método de Scanner se utiliza para leer números enteros?',
            answers: [
                { text: 'nextLine()', correct: false },
                { text: 'nextInt()', correct: true },
                { text: 'nextDouble()', correct: false },
                { text: 'parseInt()', correct: false }
            ]
        },
            {
                question: '¿Qué es un arreglo (matriz) en programación?',
                answers: [
                    { text: 'Una estructura de datos que contiene una colección de valores del mismo tipo', correct: true },
                    { text: 'Un tipo de variable que puede almacenar múltiples tipos de datos', correct: false },
                    { text: 'Una función que realiza operaciones matemáticas', correct: false },
                    { text: 'Un método para leer datos del usuario', correct: false }
                ]
            },
            {
                question: '¿Cómo se declara un arreglo de enteros en Java?',
                answers: [
                    { text: 'int arreglo[];', correct: false },
                    { text: 'int arreglo = new int[5];', correct: false },
                    { text: 'int[] arreglo = new int[5];', correct: true },
                    { text: 'int arreglo[5];', correct: false }
                ]
            },
            {
                question: '¿Cuál es la forma correcta de inicializar un arreglo con valores específicos?',
                answers: [
                    { text: 'int[] arreglo = {35, 20, 4, 15, -8};', correct: true },
                    { text: 'int arreglo[] = new int[5]{35, 20, 4, 15, -8};', correct: false },
                    { text: 'int[] arreglo = new int(5){35, 20, 4, 15, -8};', correct: false },
                    { text: 'int arreglo = {35, 20, 4, 15, -8};', correct: false }
                ]
            },
            {
                question: '¿Cuál es la forma de acceder al primer elemento de un arreglo llamado "arreglo"?',
                answers: [
                    { text: 'arreglo[1];', correct: false },
                    { text: 'arreglo[0];', correct: true },
                    { text: 'arreglo(0);', correct: false },
                    { text: 'arreglo.first();', correct: false }
                ]
            },
            {
                question: '¿Qué método se puede usar para llenar un arreglo con números aleatorios en Java?',
                answers: [
                    { text: 'Math.random()', correct: true },
                    { text: 'random.next()', correct: false },
                    { text: 'Math.randomize()', correct: false },
                    { text: 'generateRandom()', correct: false }
                ]
            },
            {
                question: '¿Qué es una matriz de dos dimensiones?',
                answers: [
                    { text: 'Un arreglo que contiene otros arreglos', correct: true },
                    { text: 'Un arreglo que solo puede almacenar números', correct: false },
                    { text: 'Un arreglo que solo puede ser de tipo String', correct: false },
                    { text: 'Un arreglo que se utiliza para operaciones matemáticas', correct: false }
                ]
            },
            {
                question: '¿Cómo se declara una matriz de dos dimensiones en Java?',
                answers: [
                    { text: 'int[][] matriz = new int[3][4];', correct: true },
                    { text: 'int matriz[][] = new int[3, 4];', correct: false },
                    { text: 'int matriz[3][4];', correct: false },
                    { text: 'int matriz = new int[3][4];', correct: false }
                ]
            },
                {
                    question: '¿Qué es la Programación Orientada a Objetos?',
                    answers: [
                        { text: 'Un lenguaje de programación', correct: false },
                        { text: 'Trasladar la naturaleza de los objetos de la vida real al código de programación', correct: true },
                        { text: 'Un método de debuggeo', correct: false },
                        { text: 'Una técnica de compilación', correct: false }
                    ]
                },
                {
                    question: '¿Cuáles son las ventajas de la Programación Orientada a Objetos?',
                    answers: [
                        { text: 'Código complejo y difícil de mantener', correct: false },
                        { text: 'Programas divididos en módulos, código reutilizable, tratamiento de excepciones', correct: true },
                        { text: 'Mayor consumo de memoria', correct: false },
                        { text: 'Menor rendimiento del programa', correct: false }
                    ]
                },
                {
                    question: '¿Qué es una Clase en POO?',
                    answers: [
                        { text: 'Un objeto específico', correct: false },
                        { text: 'Un modelo donde se redactan las características comunes de un grupo de objetos', correct: true },
                        { text: 'Un método de programación', correct: false },
                        { text: 'Una variable global', correct: false }
                    ]
                },
                {
                    question: '¿Qué es el Polimorfismo?',
                    answers: [
                        { text: 'Un tipo de herencia', correct: false },
                        { text: 'La capacidad de los objetos de ofrecer respuestas distintas según los parámetros', correct: true },
                        { text: 'Un método de encapsulamiento', correct: false },
                        { text: 'Una técnica de programación lineal', correct: false }
                    ]
                },
                {
                    question: '¿Qué es el Encapsulamiento?',
                    answers: [
                        { text: 'Un método de programación', correct: false },
                        { text: 'La propiedad que permite ocultar la información de un objeto del mundo exterior', correct: true },
                        { text: 'Una forma de crear objetos', correct: false },
                        { text: 'Un tipo de herencia', correct: false }
                    ]
                },
                {
                    question: '¿Qué característica tenían los lenguajes de programación orientados a procedimientos?',
                    answers: [
                        { text: 'Código muy organizado y fácil de mantener', correct: false },
                        { text: 'Códigos grandes, difíciles de descifrar y poco reutilizables', correct: true },
                        { text: 'Fácil mantenimiento', correct: false },
                        { text: 'Alta modularidad', correct: false }
                    ]
                },
                {
                    question: '¿Qué son los métodos Getters y Setters?',
                    answers: [
                        { text: 'Métodos para crear objetos', correct: false },
                        { text: 'Métodos de acceso para obtener y definir valores de atributos', correct: true },
                        { text: 'Métodos de herencia', correct: false },
                        { text: 'Métodos de polimorfismo', correct: false }
                    ]
                },
                {
                    question: '¿Qué significa la palabra clave "static" en Java?',
                    answers: [
                        { text: 'Que el miembro pertenece solo a un objeto', correct: false },
                        { text: 'Que el miembro pertenece al tipo/clase en sí mismo', correct: true },
                        { text: 'Que el miembro no puede ser modificado', correct: false },
                        { text: 'Que el miembro es privado', correct: false }
                    ]
                },
                {
                    question: '¿Cuándo se recomienda usar campos static?',
                    answers: [
                        { text: 'Cuando el valor es único para cada objeto', correct: false },
                        { text: 'Cuando el valor es independiente de los objetos', correct: true },
                        { text: 'Cuando se requiere encapsulamiento', correct: false },
                        { text: 'Cuando se necesita crear múltiples instancias', correct: false }
                    ]
                },
                {
                    question: '¿Qué característica tienen los campos static en Java?',
                    answers: [
                        { text: 'Se crean múltiples copias por cada objeto', correct: false },
                        { text: 'Se crea una sola copia compartida entre todas las instancias', correct: true },
                        { text: 'No pueden ser modificados', correct: false },
                        { text: 'Solo pueden ser enteros', correct: false }
                    ]
                },
                {
                    question: '¿Cuál es la principal característica de los métodos static?',
                    answers: [
                        { text: 'Pertenecen a un objeto específico', correct: false },
                        { text: 'Pertenecen a la clase en lugar de a un objeto', correct: true },
                        { text: 'Solo pueden ser privados', correct: false },
                        { text: 'No pueden ser llamados directamente', correct: false }
                    ]
                },
                {
                    question: '¿Cuándo se recomienda usar métodos static?',
                    answers: [
                        { text: 'Cuando se necesita crear objetos', correct: false },
                        { text: 'Para acceder/manipular variables estáticas', correct: true },
                        { text: 'Solo en clases abstractas', correct: false },
                        { text: 'Cuando se requiere herencia', correct: false }
                    ]
                }, {
                    question: '¿Qué es una clase abstracta en Java?',
                    answers: [
                        { text: 'Una clase que puede ser instanciada directamente', correct: false },
                        { text: 'Una clase que no puede ser instanciada y sirve como base para otras clases', correct: true },
                        { text: 'Un método sin implementación', correct: false },
                        { text: 'Una interfaz con métodos concretos', correct: false }
                    ]
                },
                {
                    question: '¿Cuándo es recomendable usar clases abstractas?',
                    answers: [
                        { text: 'Cuando todas las clases son iguales', correct: false },
                        { text: 'Cuando existen varias clases con características o acciones comunes pero con diferentes comportamientos', correct: true },
                        { text: 'Solo cuando se necesita crear interfaces', correct: false },
                        { text: 'Cuando se quiere crear un objeto directo', correct: false }
                    ]
                },
                {
                    question: 'Si un método de una clase es abstracto, ¿qué sucede con la clase?',
                    answers: [
                        { text: 'La clase sigue siendo concreta', correct: false },
                        { text: 'La clase completa debe ser definida como abstracta', correct: true },
                        { text: 'El método se ignora', correct: false },
                        { text: 'Se genera un error de compilación', correct: false }
                    ]
                },
                {
                    question: 'En una clase abstracta, ¿cómo son los métodos abstractos?',
                    answers: [
                        { text: 'Llevan implementación completa', correct: false },
                        { text: 'No llevan cuerpo (implementación)', correct: true },
                        { text: 'Son privados', correct: false },
                        { text: 'Solo pueden ser llamados por la misma clase', correct: false }
                    ]
                },
                {
                    question: '¿Qué debe hacer la primera subclase concreta que herede de una clase abstracta?',
                    answers: [
                        { text: 'Puede ignorar los métodos abstractos', correct: false },
                        { text: 'Implementar todos los métodos de la superclase abstracta', correct: true },
                        { text: 'Crear nuevos métodos', correct: false },
                        { text: 'Heredar sin modificaciones', correct: false }
                    ]
                },
                {
                    question: 'En el ejemplo de la presentación, ¿qué clase es la raíz de la jerarquía de animales?',
                    answers: [
                        { text: 'Perro', correct: false },
                        { text: 'Felino', correct: false },
                        { text: 'Animal', correct: true },
                        { text: 'Cánido', correct: false }
                    ]
                },
                {
                    question: '¿Qué método abstracto NO tiene la clase Animal en el ejemplo?',
                    answers: [
                        { text: 'getNombreCientífico()', correct: false },
                        { text: 'getSonido()', correct: false },
                        { text: 'getAlimentos()', correct: false },
                        { text: 'getPeso()', correct: true }
                    ]
                },
                {
                    question: 'En el ejemplo, ¿cuál es el nombre científico del gato?',
                    answers: [
                        { text: 'Canis lupus', correct: false },
                        { text: 'Panthera leo', correct: false },
                        { text: 'Felis silvestris catus', correct: true },
                        { text: 'Canis lupus familiaris', correct: false }
                    ]
                },
                {
                    question: '¿Qué es una clase abstracta en Java?',
                    answers: [
                        { text: 'Una clase que puede ser instanciada directamente', correct: false },
                        { text: 'Una clase que no puede ser instanciada y sirve como base para otras clases', correct: true },
                        { text: 'Un método sin implementación', correct: false },
                        { text: 'Una interfaz con métodos concretos', correct: false }
                    ]
                },
                {
                    question: '¿Cuándo es recomendable usar clases abstractas?',
                    answers: [
                        { text: 'Cuando todas las clases son iguales', correct: false },
                        { text: 'Cuando existen varias clases con características o acciones comunes pero con diferentes comportamientos', correct: true },
                        { text: 'Solo cuando se necesita crear interfaces', correct: false },
                        { text: 'Cuando se quiere crear un objeto directo', correct: false }
                    ]
                },
                {
                    question: 'Si un método de una clase es abstracto, ¿qué sucede con la clase?',
                    answers: [
                        { text: 'La clase sigue siendo concreta', correct: false },
                        { text: 'La clase completa debe ser definida como abstracta', correct: true },
                        { text: 'El método se ignora', correct: false },
                        { text: 'Se genera un error de compilación', correct: false }
                    ]
                },
                {
                    question: 'En una clase abstracta, ¿cómo son los métodos abstractos?',
                    answers: [
                        { text: 'Llevan implementación completa', correct: false },
                        { text: 'No llevan cuerpo (implementación)', correct: true },
                        { text: 'Son privados', correct: false },
                        { text: 'Solo pueden ser llamados por la misma clase', correct: false }
                    ]
                },
                {
                    question: '¿Qué debe hacer la primera subclase concreta que herede de una clase abstracta?',
                    answers: [
                        { text: 'Puede ignorar los métodos abstractos', correct: false },
                        { text: 'Implementar todos los métodos de la superclase abstracta', correct: true },
                        { text: 'Crear nuevos métodos', correct: false },
                        { text: 'Heredar sin modificaciones', correct: false }
                    ]
                },
                {
                    question: 'En el ejemplo de la presentación, ¿qué clase es la raíz de la jerarquía de animales?',
                    answers: [
                        { text: 'Perro', correct: false },
                        { text: 'Felino', correct: false },
                        { text: 'Animal', correct: true },
                        { text: 'Cánido', correct: false }
                    ]
                },
                {
                    question: '¿Qué método abstracto NO tiene la clase Animal en el ejemplo?',
                    answers: [
                        { text: 'getNombreCientífico()', correct: false },
                        { text: 'getSonido()', correct: false },
                        { text: 'getAlimentos()', correct: false },
                        { text: 'getPeso()', correct: true }
                    ]
                },
                {
                    question: 'En el ejemplo, ¿cuál es el nombre científico del gato?',
                    answers: [
                        { text: 'Canis lupus', correct: false },
                        { text: 'Panthera leo', correct: false },
                        { text: 'Felis silvestris catus', correct: true },
                        { text: 'Canis lupus familiaris', correct: false }
                    ]
                }
            
];
