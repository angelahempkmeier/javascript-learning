process.stdout.write('Informe o seu nome:');
process.stdin.on('data', data => {
    const name = data.toString().replace('\n', '');

    process.stdout.write(`hey, ${name}`);

    process.exit();
});