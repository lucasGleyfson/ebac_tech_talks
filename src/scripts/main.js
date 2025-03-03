AOS.init();

const dataDoEvento = new Date("mar 30, 2025 19:00:00");
const timeStampDoEvento = dataDoEvento.getTime();

const contaAsHoras = setInterval(function () {
    const agora = new Date();
    const timeStampAtual = agora.getTime();

    const distanciaDoEvento = timeStampDoEvento - timeStampAtual;

    const diaEmMs = 1000 * 60 * 60 * 24;
    const horaEmMs = 1000 * 60 * 60;
    const minutoEmMs = 1000 * 60;

    const diasAteOEvento = Math.floor(distanciaDoEvento / diaEmMs);
    const horasAteOEvento = Math.floor((distanciaDoEvento % diaEmMs) / horaEmMs);
    const minutosAteOEvento = Math.floor((distanciaDoEvento % horaEmMs) / minutoEmMs);
    const segundosAteOEvento = Math.floor((distanciaDoEvento % minutoEmMs) / 1000)


    document.getElementById('contador').innerHTML = `${diasAteOEvento}d ${horasAteOEvento}h ${minutosAteOEvento}m ${segundosAteOEvento}s`


    if (distanciaDoEvento < 0) {
        clearInterval(contaAsHoras);
        document.getElementById('contador').innerHTML = 'Evento Expirado';
        Object.assign(document.getElementById('contador').style, {
            color: 'red',
            fontWeight: 'bold',
            fontSize: '28px',
            backgroundColor: 'yellow'
        });
    }
}, 1000);