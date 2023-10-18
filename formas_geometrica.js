const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function showHomePage() {
  console.log("Bem-vindo ao Explorador de Formas Geométricas!");
  console.log("Escolha a forma que você deseja explorar:");
  console.log("1. Retângulo");
  console.log("2. Triângulo");
  console.log("3. Quadrado");
  console.log("4. Trapézio");
  console.log("5. Polígono Regular");
  console.log("6. Cilindro");
  console.log("7. Cone");
  console.log("8. Esfera");
  console.log("9. Prisma");
  console.log("10. Polígono Irregular");

  rl.question("Digite o número da forma que você deseja explorar: ", (choice) => {
    if (choice === '1') {
      calculateRectangleArea();
    } else if (choice === '2') {
      calculateTriangleArea();
    } else if (choice === '3') {
      calculateSquareArea();
    } else if (choice === '4') {
      calculateTrapeziumArea();
    } else if (choice === '5') {
      calculateRegularPolygonArea();
    } else if (choice === '6') {
      calculateCylinderSurfaceArea();
    } else if (choice === '7') {
      calculateConeSurfaceArea();
    } else if (choice === '8') {
      calculateSphereSurfaceArea();
    } else if (choice === '9') {
      calculatePrismTotalArea();
    } else if (choice === '10') {
      calculateIrregularPolygonArea();
    } else if (choice === '0') {
      rl.close();
    } else {
      console.log("Escolha inválida. Por favor, escolha uma opção válida.");
      showHomePage();
    }
  });
}

function calculateRectangleArea() {
  rl.question('Informe a largura do retângulo: ', (width) => {
    rl.question('Informe a altura do retângulo: ', (height) => {
      const area = width * height;
      console.log(`A área do retângulo é: ${area}`);
      askToRetryOrGoToMenu();
    });
  });
}

function calculateTriangleArea() {
  rl.question('Informe a base do triângulo: ', (base) => {
    rl.question('Informe a altura do triângulo: ', (height) => {
      const area = 0.5 * base * height;
      console.log(`A área do triângulo é: ${area}`);
      askToRetryOrGoToMenu();
    });
  });
}

function calculateSquareArea() {
  rl.question('Informe o lado do quadrado: ', (side) => {
    const area = side * side;
    console.log(`A área do quadrado é: ${area}`);
    askToRetryOrGoToMenu();
  });
}

function calculateTrapeziumArea() {
  rl.question('Informe a base maior do trapézio: ', (base1) => {
    rl.question('Informe a base menor do trapézio: ', (base2) => {
      rl.question('Informe a altura do trapézio: ', (height) => {
        const area = 0.5 * (base1 + base2) * height;
        console.log(`A área do trapézio é: ${area}`);
        askToRetryOrGoToMenu();
      });
    });
  });
}

function calculateRegularPolygonArea() {
  rl.question('Informe o número de lados do polígono regular: ', (numSides) => {
    rl.question('Informe o comprimento do lado do polígono: ', (sideLength) => {
      const area = (numSides * sideLength * sideLength) / (4 * Math.tan(Math.PI / numSides));
      console.log(`A área do polígono regular é: ${area}`);
      askToRetryOrGoToMenu();
    });
  });
}

function calculateCylinderSurfaceArea() {
  rl.question('Informe o raio da base do cilindro: ', (radius) => {
    rl.question('Informe a altura do cilindro: ', (height) => {
      const lateralArea = 2 * Math.PI * radius * height;
      const baseArea = Math.PI * radius * radius;
      const totalArea = 2 * baseArea + lateralArea;
      console.log(`A área da superfície do cilindro é: ${totalArea}`);
      askToRetryOrGoToMenu();
    });
  });
}

function calculateConeSurfaceArea() {
  rl.question('Informe o raio da base do cone: ', (radius) => {
    rl.question('Informe a altura do cone: ', (height) => {
      const slantHeight = Math.sqrt(radius * radius + height * height);
      const lateralArea = Math.PI * radius * slantHeight;
      const baseArea = Math.PI * radius * radius;
      const totalArea = lateralArea + baseArea;
      console.log(`A área da superfície do cone é: ${totalArea}`);
      askToRetryOrGoToMenu();
    });
  });
}

function calculateSphereSurfaceArea() {
  rl.question('Informe o raio da esfera: ', (radius) => {
    const area = 4 * Math.PI * radius * radius;
    console.log(`A área da superfície da esfera é: ${area}`);
    askToRetryOrGoToMenu();
  });
}

function calculatePrismTotalArea() {
  rl.question('Informe o número de lados da base do prisma: ', (numSides) => {
    rl.question('Informe o comprimento do lado da base do prisma: ', (sideLength) => {
      rl.question('Informe a altura da base do prisma: ', (baseHeight) => {
        rl.question('Informe a altura do prisma: ', (height) => {
          const baseArea = (numSides * sideLength * sideLength) / (4 * Math.tan(Math.PI / numSides));
          const lateralArea = numSides * sideLength * baseHeight;
          const totalArea = 2 * baseArea + lateralArea;
          console.log(`A área total do prisma é: ${totalArea}`);
          askToRetryOrGoToMenu();
        });
      });
    });
  });
}

function calculateIrregularPolygonArea() {
  rl.question('Informe o número de vértices do polígono irregular: ', (numVertices) => {
    numVertices = parseInt(numVertices);

    if (isNaN(numVertices) || numVertices < 3) {
      console.log('Número de vértices inválido. Deve ser um número inteiro maior ou igual a 3.');
      showHomePage();
    } else {
      const vertices = [];

      const getVertexCoordinates = (index) => {
        if (index < numVertices) {
          rl.question(`Informe as coordenadas (x, y) do vértice ${index + 1} separadas por espaço: `, (input) => {
            const [x, y] = input.split(' ').map(parseFloat);
            if (!isNaN(x) && !isNaN(y)) {
              vertices.push({ x, y });
              getVertexCoordinates(index + 1);
            } else {
              console.log('Coordenadas inválidas. Por favor, insira números válidos.');
              getVertexCoordinates(index);
            }
          });
        } else {
          const area = calculatePolygonArea(vertices);
          console.log(`A área do polígono irregular é: ${area}`);
          askToRetryOrGoToMenu();
        }
      };

      getVertexCoordinates(0);
    }
  });
}

function calculatePolygonArea(vertices) {
  let area = 0;
  const numVertices = vertices.length;

  for (let i = 0; i < numVertices; i++) {
    const j = (i + 1) % numVertices;
    area += (vertices[i].x * vertices[j].y) - (vertices[j].x * vertices[i].y);
  }

  area = Math.abs(area) / 2;
  return area;
}

function askToRetryOrGoToMenu() {
  rl.question('O que você gostaria de fazer a seguir?\n1. Refazer o cálculo\n2. Voltar ao menu principal\n', (choice) => {
    if (choice === '1') {
      showHomePage();
    } else if (choice === '2') {
      showHomePage();
    } else {
      console.log('Escolha inválida. Retornando ao menu principal.');
      showHomePage();
    }
  });
}

// Iniciar o programa mostrando a página inicial
showHomePage();