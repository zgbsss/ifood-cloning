const fs = require('fs');
const os = require('os');
const networkInterfaces = os.networkInterfaces();

// Função que pega o ip do pc
function getIPAddress() {
  for (const interfaceName in networkInterfaces) {
    const interfaces = networkInterfaces[interfaceName];
    for (const iface of interfaces) {
      if (iface.family === 'IPv4' && iface.address !== '127.0.0.1') {
        return iface.address;
      }
    }
  }
  return null;
}

// Esta função atualiza o .env
function updateEnvFile(ip) {
  try {
    let envData = [];
    fs.existsSync('.env', (_) => {
      envData = fs.readFileSync('.env', 'utf8').toString().split('\n');
    });
    let newEnvData = [];

    for (const line of envData) {
      if (!line.startsWith('MY_IP=')) {
        newEnvData.push(line);
      }
    }

    newEnvData.push(`MY_IP=${ip}`);

    fs.writeFileSync('.env', newEnvData.join('\n'));

    console.log(`IP atualizado no arquivo .env: MY_IP=${ip}`);
  } catch (error) {
    console.error(`Erro ao atualizar o arquivo .env: ${error.message}`);
  }
}

// Função principal do metodo de pegar o IP da maquina 
function main() {
  const ip = getIPAddress();
  if (ip) {
    updateEnvFile(ip);
  }
}

main();